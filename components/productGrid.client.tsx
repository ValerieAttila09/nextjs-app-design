"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const sample = [
  { id: 1, name: "Sneakers Classic", price: "Rp 499.000", img: "/next.svg" },
  { id: 2, name: "Tas Selempang", price: "Rp 349.000", img: "/vercel.svg" },
  { id: 3, name: "Jam Tangan", price: "Rp 899.000", img: "/file.svg" },
  { id: 4, name: "Kemeja Premium", price: "Rp 299.000", img: "/window.svg" },
  { id: 5, name: "Kacamata", price: "Rp 199.000", img: "/next.svg" },
  { id: 6, name: "Topi Snapback", price: "Rp 129.000", img: "/vercel.svg" },
];

export default function ProductGrid({ items = sample }: { items?: typeof sample }) {
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const nodes = gridRef.current?.querySelectorAll(".product-card") || [];
    const anim = gsap.from(nodes, { y: 18, autoAlpha: 0, duration: 0.7, stagger: 0.08, ease: "power3.out" });
    return () => { anim.kill(); };
  }, [items]);

  return (
    <div id="products" className="w-full max-w-6xl mx-auto px-6 py-12" ref={gridRef}>
      <h3 className="text-2xl font-bold mb-6">Produk Pilihan</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {items.map((p) => (
          <div key={p.id} className="product-card bg-card p-4 rounded-lg shadow-sm hover:shadow-md transition">
            <div className="w-full h-36 bg-muted/30 rounded-md flex items-center justify-center mb-3 overflow-hidden">
              <Image src={p.img} alt={p.name} width={120} height={72} className="object-contain" />
            </div>
            <div className="text-sm font-medium">{p.name}</div>
            <div className="text-sm text-muted-foreground">{p.price}</div>
            <div className="mt-3">
              <button className="w-full rounded-md bg-primary text-primary-foreground py-2 text-sm font-semibold">Tambah</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
