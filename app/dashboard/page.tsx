import Sidebar from "@/components/sidebar/sidebar";
import Navbar from "@/components/navbar/navbar";
import DashboardCard from "@/components/cards/dashboardCard";
import { dashboardDataCard } from "@/lib/constants";
import CollapsableCard from "@/components/cards/collapsableCard";

export default async function DashboardPage() {
  const pathName = '/dashboard';
  return (
    <div className="w-full">
      <Sidebar currentPath={pathName} />
      <div className="ms-[60px] pb-6">
        <Navbar pathName={pathName} />
        <div className="mb-4 w-full grid grid-cols-3 gap-4 py-2 px-4">
          {dashboardDataCard.map((data, index) => (
            <DashboardCard key={index} data={data} />
          ))}
        </div>

        <CollapsableCard />
      </div>
    </div>
  );
}
