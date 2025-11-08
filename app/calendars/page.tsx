'use client';

import { Calendar } from "@/components/ui/calendar"
import Navbar from "@/components/navbar/navbar";
import Sidebar from "@/components/sidebar/sidebar"
import { usePathname } from "next/navigation"
import { useState } from "react";


export default function Calendars() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  const pathName = usePathname();
  console.log(pathName);
  return (
    <div className="min-h-screen w-full bg-white">
      <Sidebar currentPath={pathName} />

      <div className="ms-[60px]">
        <Navbar pathName={pathName} />
        <div className="p-6">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-lg border"
          />
        </div>
      </div>
    </div>
  )
}