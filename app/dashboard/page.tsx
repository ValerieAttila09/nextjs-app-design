// app/dashboard/page.tsx  (server component)
import prisma from "@/lib/prisma";
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";
import DashboardCard from "@/components/dashboardCard";
import { dashboardDataCard } from "@/lib/constants";

export default async function DashboardPage() {
  const pathName = '/dashboard'; // atau ambil dari params jika perlu

  const products = await prisma.product.findMany({
    take: 12,
    orderBy: { createdAt: 'desc' },
    include: {
      category: true,
      orderItems: true,
    }
  });

  return (
    <div className="min-h-screen w-full bg-neutral-50">
      <Sidebar currentPath={pathName} />
      <div className="ms-[60px]">
        <Navbar pathName={pathName} />
        <div className="w-full grid grid-cols-3 gap-4 py-2 px-4">
          {dashboardDataCard.map((data, index) => (
            <DashboardCard key={index} data={data} />
          ))}
        </div>

        <div className="w-full px-4 py-4">
          <h2 className="text-xl outfit-semibold mb-2">Produk Terbaru</h2>
          <div className="grid grid-cols-3 gap-4">
            {products.map((p) => (
              <div key={p.id} className="bg-white p-4 rounded-md border border-[#ebebeb]">
                <div className="flex items-center justify-between">
                  <h1 className="text-lg text-neutral-800 outfit-regular">{p.name}</h1>
                  <button className="rounded-md bg-neutral-50 p-1 border border-transparent hover:border-[#ebebeb] transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-neutral-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                    </svg>
                  </button>
                </div>
                <div className="w-full h-[1px] mt-3 mb-4 rounded-full bg-[#ebebeb]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}