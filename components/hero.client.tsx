"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const ctasRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);
  const chipsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(headlineRef.current, { y: 36, autoAlpha: 0, duration: 0.8, ease: "power3.out" })
        .from(
          containerRef.current?.querySelectorAll(".hero-sub") || [],
          { y: 18, autoAlpha: 0, duration: 0.6, stagger: 0.1 },
          "-=" + 0.2
        )
        .from(ctasRef.current, { scale: 0.98, autoAlpha: 0, duration: 0.5 }, "-=0.15");

      // floating image subtle motion
      if (imgRef.current) {
        gsap.to(imgRef.current, { y: "-=8", repeat: -1, yoyo: true, duration: 3, ease: "sine.inOut" });
      }

      // chips stagger
      if (chipsRef.current) {
        gsap.from(chipsRef.current.children, { y: 6, autoAlpha: 0, stagger: 0.08, duration: 0.45 });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* left */}
        <div className="md:col-span-7">
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex items-center gap-2 bg-muted/10 text-sm rounded-full px-3 py-1">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-foreground/80"><path d="M12 2v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <span className="font-medium">Marketplace • Netral Theme</span>
            </div>
          </div>

          <h1 ref={headlineRef} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Buat toko online profesional yang cepat dan terpercaya.
          </h1>

          <p className="hero-sub mt-4 text-lg text-muted-foreground max-w-2xl">
            Solusi lengkap untuk jualan online: katalog produk, checkout aman, integrasi pembayaran, dan optimasi
            performa—semua dirancang untuk meningkatkan konversi.
          </p>

          <div ref={ctasRef} className="mt-6 flex flex-wrap gap-3 items-center">
            <a href="#products" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 font-semibold shadow hover:brightness-95 transition">Mulai Sekarang</a>
            <a href="#about" className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-3 text-sm text-foreground/80 hover:bg-muted transition">Pelajari Fitur</a>
          </div>

          <div className="mt-6" ref={chipsRef}>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-2 bg-card rounded-lg text-sm font-medium">Gratis setup 7 hari</span>
              <span className="px-3 py-2 bg-card rounded-lg text-sm font-medium">Integrasi pembayaran</span>
              <span className="px-3 py-2 bg-card rounded-lg text-sm font-medium">Analytics & SEO</span>
              <span className="px-3 py-2 bg-card rounded-lg text-sm font-medium">Support 24/7</span>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-card rounded-lg shadow-sm">
              <h4 className="font-semibold">Lancar di semua device</h4>
              <p className="text-sm text-muted-foreground mt-2">Responsive dan ringan sehingga pelanggan tetap betah.</p>
            </div>
            <div className="p-4 bg-card rounded-lg shadow-sm">
              <h4 className="font-semibold">Pembayaran aman</h4>
              <p className="text-sm text-muted-foreground mt-2">Dukungan gateway populer dan checkout yang aman.</p>
            </div>
            <div className="p-4 bg-card rounded-lg shadow-sm">
              <h4 className="font-semibold">Optimasi konversi</h4>
              <p className="text-sm text-muted-foreground mt-2">Fitur upsell, diskon, dan rekomendasi produk untuk meningkatkan nilai transaksi.</p>
            </div>
          </div>
        </div>

        {/* right visual */}
        <div className="md:col-span-5 flex justify-center md:justify-end">
          <div ref={imgRef} className="w-full max-w-sm rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-white/60 to-white/30 p-6">
            <div className="w-full h-64 bg-muted/20 rounded-lg flex items-center justify-center">
              <Image src="/vercel.svg" alt="product mock" width={420} height={220} className="object-contain" />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <div className="font-semibold">Featured: Sneakers Classic</div>
                <div className="text-sm text-muted-foreground">Rp 499.000</div>
              </div>
              <button className="rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold">Beli</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
