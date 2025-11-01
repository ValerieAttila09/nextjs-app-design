"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Ayu Pratama",
    role: "Pemilik Toko",
    text: "Platform ini membantu kami meningkatkan penjualan 3x lipat dalam 2 bulan. Mudah digunakan dan cepat.",
    avatar: "/vercel.svg",
    rating: 5,
  },
  {
    id: 2,
    name: "Riko Santoso",
    role: "Freelancer",
    text: "Desainnya elegan dan pelanggan kami menyukainya — support juga responsif.",
    avatar: "/file.svg",
    rating: 5,
  },
  {
    id: 3,
    name: "Dewi Lestari",
    role: "Retail Manager",
    text: "Integrasi mudah dan performa cepat. Fitur checkout sangat membantu.",
    avatar: "/window.svg",
    rating: 4,
  },
  {
    id: 4,
    name: "Hendra",
    role: "Pemilik Brand",
    text: "Template yang fleksibel dan mudah dikustom. Recomended untuk toko kecil sampai menengah.",
    avatar: "/next.svg",
    rating: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const thumbsRef = useRef<HTMLDivElement | null>(null);
  const hoverRef = useRef(false);

  // auto-advance with pause on hover
  useEffect(() => {
    const id = setInterval(() => {
      if (!hoverRef.current) setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  // animate card on change
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(el, { autoAlpha: 0, y: 16, scale: 0.995 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.6, ease: "power3.out" });

      // animate active thumb indicator
      const thumbs = thumbsRef.current?.querySelectorAll(".thumb-btn") || [];
      gsap.to(thumbs, { opacity: 0.65, scale: 0.95, duration: 0.25 });
      const active = thumbs[index] as Element | undefined;
      if (active) gsap.to(active, { opacity: 1, scale: 1.02, duration: 0.32 });
    }, cardRef);
    return () => ctx.revert();
  }, [index]);

  function go(i: number) {
    setIndex(((i % TESTIMONIALS.length) + TESTIMONIALS.length) % TESTIMONIALS.length);
  }

  const t = TESTIMONIALS[index];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
        <div className="md:w-1/2">
          <h3 className="text-3xl font-bold">Apa kata pelanggan kami</h3>
          <p className="mt-2 text-muted-foreground max-w-md">Testimoni nyata dari pengguna yang sudah merasakan peningkatan penjualan dan kemudahan pengelolaan toko.</p>
        </div>

        <div className="md:w-1/2">
          <div
            ref={cardRef}
            onMouseEnter={() => (hoverRef.current = true)}
            onMouseLeave={() => (hoverRef.current = false)}
            className="bg-card p-8 rounded-2xl shadow-xl relative overflow-hidden"
            aria-live="polite"
          >
            <blockquote className="text-lg leading-relaxed text-foreground/90">“{t.text}”</blockquote>

            <div className="mt-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Image src={t.avatar} alt={t.name} width={56} height={56} className="rounded-full object-contain" />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill={i < t.rating ? "currentColor" : "none"} className={`text-yellow-500 ${i < t.rating ? "opacity-100" : "opacity-30"}`} aria-hidden>
                    <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.788 1.402 8.167L12 18.896l-7.336 3.87 1.402-8.167L.132 9.211l8.2-1.193z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* decorative bg */}
            <div className="pointer-events-none absolute -right-10 -top-8 w-48 h-48 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
          </div>

          <div className="mt-6 flex items-center gap-3" ref={thumbsRef}>
            <button
              onClick={() => go(index - 1)}
              aria-label="Previous"
              className="p-2 rounded-md hover:bg-muted/10 transition"
            >
              ‹
            </button>

            <div className="flex-1 overflow-x-auto">
              <div className="flex gap-3 items-center">
                {TESTIMONIALS.map((it, i) => (
                  <button
                    key={it.id}
                    onClick={() => go(i)}
                    className={`thumb-btn flex items-center gap-3 p-2 rounded-lg min-w-[180px] transition border ${i === index ? "bg-primary text-primary-foreground border-transparent" : "bg-muted/5 border-border text-foreground/80"}`}
                    aria-current={i === index}
                  >
                    <Image src={it.avatar} alt={it.name} width={40} height={40} className="rounded-full object-contain" />
                    <div className="text-left">
                      <div className="font-medium">{it.name}</div>
                      <div className="text-xs text-muted-foreground">{it.role}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => go(index + 1)}
              aria-label="Next"
              className="p-2 rounded-md hover:bg-muted/10 transition"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
