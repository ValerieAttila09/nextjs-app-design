'use client';

import DashboardCard from "@/components/dashboardCard";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar"
import { dashboardDataCard } from "@/lib/constants";
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
          {dashboardDataCard.map((data, index) => {
            return (
              <DashboardCard key={index} data={data}/>
            )
          })}
        </div>
        <div className="w-full grid grid-cols-5 gap-4 py-2 px-4">
          <div className="col-span-3 h-80 bg-white border border-[#ebebeb] p-4 rounded-md">
            
          </div>
          <div className="col-span-2 bg-white border border-[#ebebeb] p-4 rounded-md"></div>
        </div>
      </div>
    </div>
  )
}