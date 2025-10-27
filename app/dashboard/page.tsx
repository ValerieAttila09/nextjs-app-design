import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";
import DashboardCard from "@/components/dashboardCard";
import { dashboardDataCard } from "@/lib/constants";
import CollapsableCard from "@/components/collapsableCard";

export default async function DashboardPage() {
  const pathName = '/dashboard';

  return (
    <div className="min-h-screen w-full bg-neutral-50">
      <Sidebar currentPath={pathName} />
      <div className="ms-[60px]">
        <Navbar pathName={pathName} />
        <div className="mb-4 w-full grid grid-cols-3 gap-4 py-2 px-4">
          {dashboardDataCard.map((data, index) => (
            <DashboardCard key={index} data={data} />
          ))}
        </div>

        <div className="w-full px-4 py-4">
          <h2 className="text-4xl outfit-semibold mb-2">Produk Terbaru</h2>
          <div className="mb-4 flex items-center justify-start">
            <button className="bg-white flex items-center justify-center hover:bg-[#fafafa] transition-all px-5 py-2 rounded-s-md border border-[#ebebeb]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-neutral-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
            </button>
            <button className="bg-white flex items-center justify-center hover:bg-[#fafafa] transition-all px-5 py-2 border border-l-0 border-[#ebebeb]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-neutral-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
              </svg>
            </button>
            <button className="bg-white flex items-center justify-center hover:bg-[#fafafa] transition-all px-5 py-2 rounded-e-md border border-l-0 border-[#ebebeb]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-neutral-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
              </svg>
            </button>
          </div>
          <CollapsableCard />
        </div>
      </div>
    </div>
  );
}