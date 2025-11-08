'use client';

import Navbar from "@/components/navbar/navbar";
import Sidebar from "@/components/sidebar/sidebar"
import { usePathname } from "next/navigation"


export default function Database() {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div className="min-h-screen w-full bg-white">
      <Sidebar currentPath={pathName} />

      <div className="ms-[60px]">
        <Navbar pathName={pathName} />
      </div>
    </div>
  )
}