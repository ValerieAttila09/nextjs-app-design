import { menu } from "@/lib/constants"
import { secondaryMenu } from "@/lib/constants"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SettingsIcon, SunDimIcon } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Navbar({ pathName }: { pathName: string }) {

  const [userProfileVisibility, setUserProfileVisibility] = useState<boolean>(false);
  const userProfile = useRef<HTMLDivElement | null>(null);
  const userProfileButton = useRef<HTMLButtonElement | null>(null);
  const themeToggle = useRef<HTMLButtonElement | null >(null)

  useGSAP(() => {
    gsap.set(userProfile.current, {
      opacity: 0,
      y: -20,
      zIndex: -1,
    });
  });

  const handleUpProfile = () => {
    return gsap.to(userProfile.current, {
      y: 0,
      opacity: 1,
      duration: 0.25,
      ease: "power2.out",
      zIndex: 2,
    });
  }

  const handleDownProfile = () => {
    return gsap.to(userProfile.current, {
      y: -20,
      opacity: 0,
      duration: 0.25,
      ease: "power2.in",
      zIndex: -1,
    });
  }

  useEffect(() => {
    if (!userProfile.current) return;
    if (userProfileVisibility) {
      handleUpProfile();
    } else {
      handleDownProfile();
    }
  }, [userProfileVisibility]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      if (
        userProfile.current &&
        !userProfile.current.contains(target) &&
        userProfileButton.current &&
        !userProfileButton.current.contains(target)
      ) {
        setUserProfileVisibility(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setUserProfileVisibility]);

  const getPathMainMenu = menu.filter((data) => data.path === pathName);
  const getPathSecondaryMenu = secondaryMenu.filter((data) => data.path === pathName);

  console.log(getPathMainMenu)
  console.log(getPathSecondaryMenu)

  return (
    <div className="bg-white w-full py-2 px-4 flex items-center justify-between border-b border-[#ebebeb]">
      <div className="">
        {getPathMainMenu.length != 0 ? (
          <h1 className="text-lg outfit-regular text-neutral-900">{getPathMainMenu.map((data, index) => (<span key={index}>{data.page}</span>))}</h1>
        ) : (
          <h1 className="text-lg outfit-regular text-neutral-900">{getPathSecondaryMenu.map((data, index) => (<span key={index}>{data.page}</span>))}</h1>
        )}
      </div>
      <div className="flex items-center gap-2">

        <button ref={themeToggle} className="rounded-full p-1 border border-transparent hover:border-[#ebebeb] transition-all">
          <SunDimIcon color="#747474" className="w-5 h-5"/>
        </button>

        <button ref={userProfileButton} onClick={() => setUserProfileVisibility((e) => !e)} className="hover:bg-white cursor-pointer hover:border-[#ebebeb] border border-transparent transition-all rounded-full size-8 bg-neutral-200 flex items-center justify-center">
          <h1 className="text-lg outfit-regular text-neutral-400">V</h1>
        </button>

        {userProfileVisibility && (
          <div ref={userProfile} className="fixed top-5 right-15 transition-all rounded-lg border border-[#ebebeb] shadow-md bg-white p-4">
            <div className="flex items-center justify-between gap-8">
              <div className="size-18 rounded-full bg-neutral-200 flex items-center justify-center">
                <h1 className="text-2xl outfit-medium text-neutral-400">V</h1>
              </div>
              <div className="">
                <h3 className="text-sm text-neutral-700">Valerie Attila Al-fath</h3>
                <p className="text-xs text-neutral-500">ggwp123@gmail.com</p>
              </div>
            </div>
            <div className="w-full h-[1px] bg-[#ebebeb] rounded-full my-2" />
            <div className="grid grid-cols-2 gap-1">
              <div className="col-span-1 space-y-1">
                <p className="text-xs text-neutral-500">Pronoun</p>
                <p className="text-xs text-neutral-500">Address</p>
                <p className="text-xs text-neutral-500">Company</p>
                <p className="text-xs text-neutral-500">Role</p>
              </div>
              <div className="col-span-1 space-y-1">
                <p className="text-xs text-neutral-700">He/Him</p>
                <p className="text-xs text-neutral-700">Medan, Indonesia</p>
                <p className="text-xs text-neutral-700">NVIDIA Corporation</p>
                <p className="text-xs text-neutral-700">Web Developer</p>
              </div>
            </div>
            <div className="w-full h-[1px] bg-[#ebebeb] rounded-full my-2" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Link href={"/"} className="text-neutral-600 text-sm outfit-regular hover:text-neutral-800 hover:underline transition-all">
                  Edit
                </Link>
                <Link href={"/"} className="text-neutral-600 text-sm outfit-regular hover:text-neutral-800 hover:underline transition-all">
                  Log out
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <button className="rounded-full bg-white p-2 text-neutral-800 outfit-regular border border-[#ebebeb] hover:bg-[#fafafa] transition-all">
                  <SettingsIcon className="w-3 h-3" color="#575757" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}