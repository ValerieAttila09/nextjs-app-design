'use client';

import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar"
import { ArrowUpRight, Eye, InfoIcon } from "lucide-react";
import { usePathname } from "next/navigation"


export default function Dashboard() {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div className="min-h-screen w-full bg-neutral-50">
      <Sidebar currentPath={pathName} />

      <div className="ms-[60px]">
        <Navbar pathName={pathName} />

        <div className="w-full grid grid-cols-3 gap-4 py-2 px-4">
          <div className="col-span-1 bg-white border border-[#ebebeb] p-4 rounded-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="p-1 rounded-md bg-neutral-50">
                  <Eye className="w-4 h-4" color="#727272" />
                </span>
                <p className="text-md text-neutral-800 outfit-regular">Page Views</p>
              </div>
              <InfoIcon className="w-4 h-4" color="#727272" />
            </div>
            <div className="mt-3 flex items-center gap-3">
              <h1 className="text-4xl text-neutral-900 outfit-medium">35,213</h1>
              <span className="flex items-center gap-1 rounded-md px-2 bg-green-100 text-green-500">
                <span className="text-xs">34.2%</span>
                <ArrowUpRight color="oklch(72.3% 0.219 149.579)" className="w-3 h-3"/>
              </span>
            </div>
          </div>
          <div className="col-span-1 bg-white border border-[#ebebeb] p-4 rounded-md"></div>
          <div className="col-span-1 bg-white border border-[#ebebeb] p-4 rounded-md"></div>
        </div>
        <div className="w-full grid grid-cols-3 gap-4 py-2 px-4">
          <div className="col-span-2 bg-white border border-[#ebebeb] p-4 rounded-md"></div>
          <div className="col-span-1 bg-white border border-[#ebebeb] p-4 rounded-md"></div>
        </div>
      </div>
    </div>
  )
}