"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Ayu Pratama",
    role: "Pemilik Toko",
    text: "Platform ini membantu kami meningkatkan penjualan 3x lipat dalam 2 bulan. Mudah digunakan dan cepat.",
    avatar: "/vercel.svg",
  },
  {
    id: 2,
    name: "Riko Santoso",
    role: "Freelancer",
    text: "Desainnya elegan dan pelanggan kami menyukainya — support juga responsif.",
    avatar: "/file.svg",
  },
  {
    id: 3,
    name: "Dewi Lestari",
    role: "Retail Manager",
    text: "Integrasi mudah dan performa cepat. Fitur checkout sangat membantu.",
    avatar: "/window.svg",
  },
  {
    id: 4,
    name: "Hendra",
    role: "Pemilik Brand",
    text: "Template yang fleksibel dan mudah dikustom. Recomended untuk toko kecil sampai menengah.",
    avatar: "/next.svg",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement | null>(null);

  // auto-advance
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  // animate on index change
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 12 },
        { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" }
      );
    }, el);
    return () => ctx.revert();
  }, [index]);

  function go(i: number) {
    setIndex(((i % TESTIMONIALS.length) + TESTIMONIALS.length) % TESTIMONIALS.length);
  }

  const t = TESTIMONIALS[index];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h3 className="text-2xl font-bold mb-6">Apa kata pelanggan kami</h3>

      <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <div ref={cardRef} className="flex-1 bg-card p-6 rounded-lg shadow-md">
          <p className="text-lg text-foreground/90">“{t.text}”</p>
          <div className="mt-4 flex items-center gap-3">
            <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-contain" />
            <div>
              <div className="font-semibold">{t.name}</div>
              <div className="text-sm text-muted-foreground">{t.role}</div>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-[220px] flex flex-col gap-3">
          <div className="flex gap-2 items-center justify-between">
            <div className="text-sm text-muted-foreground">Lihat testimoni lain</div>
            <div className="flex gap-2">
              <button
                onClick={() => go(index - 1)}
                className="p-2 rounded-md hover:bg-muted/20 transition"
                aria-label="Previous testimonial"
              >
                ‹
              </button>
              <button
                onClick={() => go(index + 1)}
                className="p-2 rounded-md hover:bg-muted/20 transition"
                aria-label="Next testimonial"
              >
                ›
              </button>
            </div>
          </div>

          <div className="flex gap-2 mt-2">
            {TESTIMONIALS.map((it, i) => (
              <button
                key={it.id}
                onClick={() => go(i)}
                aria-label={`Goto testimonial ${i + 1}`}
                className={`flex-1 text-sm p-2 text-left rounded-md transition border ${i === index ? "bg-primary text-primary-foreground border-transparent" : "bg-muted/10 border-border text-foreground/80"}`}
              >
                <div className="font-medium">{it.name}</div>
                <div className="text-xs text-muted-foreground">{it.role}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
