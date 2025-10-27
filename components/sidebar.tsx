"use client";

import { menu, secondaryMenu } from "@/lib/constants";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { BellIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Sidebar({ currentPath }: { currentPath: string }) {

  const sidebarRef = useRef(null);
  const sidebarMenuNameRef = useRef<HTMLDivElement[]>([]);
  const sidebarSecondaryMenuNameRef = useRef<HTMLDivElement[]>([]);
  const sidebarNotification = useRef<HTMLDivElement>(null);
  const sidebarLogoName = useRef<HTMLHeadingElement>(null);

  const [isClosed, setIsClosed] = useState<boolean>(true);

  useGSAP(() => {
    gsap.set(sidebarRef.current, {
      width: "60px",
    });
    gsap.set(sidebarMenuNameRef.current, {
      width: 0,
      opacity: 0,
    });
    gsap.set(sidebarSecondaryMenuNameRef.current, {
      width: 0,
      opacity: 0,
    });
    gsap.set(sidebarNotification.current, {
      width: 0,
      opacity: 0,
    });
    gsap.set(sidebarLogoName.current, {
      width: 0,
      opacity: 0,
    });
  })

  const setOpen = () => {
    gsap.to(sidebarRef.current, {
      width: "256px",
      duration: 0.35,
      ease: "power2.out",
      onStart: () => {
        gsap.to(sidebarLogoName.current, {
          width: "auto",
          opacity: 1,
          duration: 0.35,
          ease: "power2.out"
        });
        gsap.to(sidebarNotification.current, {
          width: "auto",
          opacity: 1,
          duration: 0.35,
          ease: "power2.out"
        });
        gsap.to(sidebarMenuNameRef.current, {
          width: "auto",
          opacity: 1,
          marginLeft: "6px",
          duration: 0.35,
          ease: "power2.out"
        });
        gsap.to(sidebarSecondaryMenuNameRef.current, {
          width: "auto",
          opacity: 1,
          marginLeft: "6px",
          duration: 0.35,
          ease: "power2.out"
        });
      }
    })
    setIsClosed(!isClosed);
  }

  const setClose = () => {
    gsap.to(sidebarRef.current, {
      width: "60px",
      duration: 0.35,
      ease: "power2.out",
      onStart: () => {
        gsap.to(sidebarLogoName.current, {
          width: 0,
          opacity: 0,
          duration: 0.35,
          ease: "power2.out"
        });
        gsap.to(sidebarNotification.current, {
          width: 0,
          opacity: 0,
          duration: 0.35,
          ease: "power2.out"
        });
        gsap.to(sidebarMenuNameRef.current, {
          width: 0,
          opacity: 0,
          marginLeft: "0px",
          duration: 0.35,
          ease: "power2.out"
        });
        gsap.to(sidebarSecondaryMenuNameRef.current, {
          width: 0,
          opacity: 0,
          marginLeft: "0px",
          duration: 0.35,
          ease: "power2.out"
        });
      }
    })
    setIsClosed(!isClosed);
  }

  return (
    <div
      ref={sidebarRef}
      onMouseEnter={() => setOpen()}
      onMouseLeave={() => setClose()}
      className="fixed overflow-hidden left-0 top-0 bottom-0 w-64 bg-white border-r border-[#ebebeb] p-2"
    >
      <div className="relative flex flex-col gap-4">
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center gap-2">
            <Image src={"/icons/NVIDIA_Symbol_1.png"} height={28} width={28} alt="Icon" />
            <h1 ref={sidebarLogoName} className="text-nowrap text-sm outfit-medium text-neutral-900">NVIDIA Corps</h1>
          </div>
          <div ref={sidebarNotification} className="flex items-center gap-2">
            <div className="relative rounded-full flex items-center justify-center border border-transparent hover:border-[#ebebeb] transition-all p-[6px]">
              <BellIcon className="w-5 h-5" color="#464646" />
              <div className="absolute -translate-y-2 translate-x-1 size-3 bg-white" />
              <div className="absolute -translate-y-2 translate-x-1 z-2">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8acf12] opacity-70"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-[#76B900]"></span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="space-y-[6px]">
            <div className="text-xs ms-1 flex items-center text-neutral-400 outfit-semibold"><span>MAIN</span></div>
            {menu.map((menuData, index) => {
              const IconMenu = menuData.icon;
              const isActive = currentPath === menuData.path;
              return (
                <Link key={menuData.path} href={menuData.path} className={`relative overflow-hidden flex items-center ps-3 rounded-md ${isActive ? "bg-neutral-100" : "bg-white"} hover:bg-neutral-100 py-[10px] hover:shadow-sm transition-all`}>
                  { isActive && <div className="absolute left-0 w-[3px] h-full bg-[#76B900]" />}
                  <IconMenu className="w-5 h-5" color={isActive ? "#171717" : "#525252"} />
                  <div ref={(el) => { if (el) sidebarMenuNameRef.current[index] = el }} className={`text-nowrap outfit-regular text-sm ${isActive ? "text-neutral-900" : "text-neutral-600"}`}>{menuData.page}</div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="space-y-2">
          <div className="space-y-[6px]">
            <div className="text-xs ms-1 flex items-center text-neutral-400 outfit-semibold"><span>WORK</span></div>
            {secondaryMenu.map((menuData, index) => {
              const IconMenu = menuData.icon;
              const isActive = currentPath === menuData.path;
              return (
                <Link key={menuData.path} href={menuData.path} className={`relative overflow-hidden flex items-center ps-3 rounded-md ${isActive ? "bg-neutral-100" : "bg-white"} hover:bg-neutral-100 py-[10px] hover:shadow-sm transition-all`}>
                  { isActive && <div className="absolute left-0 w-[3px] h-full bg-[#76B900]" />}
                  <IconMenu className="w-5 h-5" color={isActive ? "#171717" : "#525252"} />
                  <div ref={(el) => { if (el) sidebarSecondaryMenuNameRef.current[index] = el }} className={`text-nowrap outfit-regular text-sm ${isActive ? "text-neutral-900" : "text-neutral-600"}`}>{menuData.page}</div>
                </Link>
              );
            })}
          </div>
        </div>
        
      </div>
    </div>
  )
}