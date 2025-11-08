"use client";

import { useEffect, useState } from "react";
import type { Product } from '@/lib/generated/prisma'

export default function TestPage() {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchDashboardData() {
      try {
        const res = await fetch('/api/dashboard');
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const dashboardData = await res.json();
        setData(dashboardData.products ?? []);
      } catch (err) {
        console.error(err)
      }
    }
    fetchDashboardData();
  }, [])

  return (
    <div className="p-4">
      <h2>Test Dashboard Data</h2>
      <p>Found {data.length} products.</p>
      
      <div className="my-4 p-4 rounded-md bg-neutral-800">
        <pre style={{ whiteSpace: 'pre-wrap', color: "#ffffff", fontSize: 10, fontFamily: 'jetBrains Mono' }}>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  )
}