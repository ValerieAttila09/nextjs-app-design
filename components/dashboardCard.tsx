import { DashboardData } from "@/lib/interfaces";
import { ArrowDownRight, ArrowUpRight, ArrowUpRightFromCircleIcon, Database, Eye, InfoIcon } from "lucide-react";

export default function DashboardCard({ data }: { data: DashboardData }) {

  const Icon = data.icon

  return (
    <div className="col-span-1 bg-white border border-[#ebebeb] p-4 rounded-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="p-1 rounded-md bg-neutral-50">
            <Icon className="size-4" color="#727272" />
          </span>
          <p className="text-md text-neutral-800 outfit-regular">{data.title}</p>
        </div>
        <InfoIcon className="w-4 h-4" color="#727272" />
      </div>
      <div className="mt-3 flex items-center gap-3">
        <h1 className="text-4xl text-neutral-900 outfit-medium">{data.value}</h1>
        <span className={`flex items-center gap-1 rounded-sm px-2 py-[1px] ${data.isUp == true ? "bg-green-100 text-green-500" : "bg-red-100 text-red-500"}`}>
          <span className="text-xs">{data.percentation}%</span>
          {data.isUp == true ? (
            <ArrowUpRight color="oklch(72.3% 0.219 149.579)" className="w-3 h-3" />
          ) : (
            <ArrowDownRight color="#fb2c36" className="w-3 h-3" />
          )}
        </span>
      </div>
    </div>
  )
} 