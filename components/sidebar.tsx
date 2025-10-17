import { menu } from "@/lib/constants";
import { BellIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar({ currentPath }: { currentPath: string }) {
  return (
    <div className="h-screen w-64 bg-white shadow-md border border-[#ebebeb] p-2">
      <div className="relative flex flex-col gap-4">
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center gap-2">
            <Image src={"/icons/NVIDIA_Symbol_1.png"} height={32} width={32} alt="Icon" />
            <h1 className="text-sm outfit-medium text-neutral-900">NVIDIA Corps</h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative rounded-full flex items-center justify-center border border-transparent hover:border-[#ebebeb] transition-all p-[6px]">
              <BellIcon className="w-5 h-5" color="#464646" />
              <div className="absolute -translate-y-2 translate-x-1 size-3 bg-white" />
              <div className="absolute -translate-y-2 translate-x-1 z-2">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-sky-500"></span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="space-y-2">
            <div className="mx-2 text-xs text-neutral-400 outfit-semibold">MAIN</div>
            {menu.map((menuData) => {
              const IconMenu = menuData.icon;
              const isActive = currentPath === menuData.path;
              return (
                <Link key={menuData.path} href={menuData.path} className={`flex items-center gap-2 rounded-lg ${isActive ? "bg-neutral-100" : "bg-white"} p-2 hover:bg-neutral-100 hover:shadow-sm transition-all`}>
                  <IconMenu className="w-4 h-4" color={isActive ? "#171717" : "#525252"} />
                  <div className={`outfit-medium text-sm ${isActive ? "text-neutral-900" : "text-neutral-600"}`}>{menuData.page}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}