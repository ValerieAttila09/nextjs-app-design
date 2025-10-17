'use client';

import Sidebar from "@/components/sidebar"
import { usePathname } from "next/navigation"


export default function Dashboard() {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div className="min-h-screen w-full bg-neutral-100">
      <Sidebar currentPath={pathName}/>

      <div className=""></div>
    </div>
  )
}