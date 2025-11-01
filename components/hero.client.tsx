"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const ctasRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(headlineRef.current, {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      const subs = containerRef.current
        ? Array.from(containerRef.current.querySelectorAll(".hero-sub"))
        : [];

      tl.from(subs, { y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.12 }, "-=" + 0.1)
        .from(ctasRef.current, { scale: 0.98, autoAlpha: 0, duration: 0.5 }, "-=0.2");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full max-w-6xl mx-auto px-6 py-14 flex flex-col gap-8 items-center text-center sm:items-start sm:text-left"
    >
      <div className="flex items-center gap-4">
        <Image src="/next.svg" alt="logo" width={56} height={16} className="dark:invert" />
        <span className="text-sm font-medium text-muted">E-Commerce</span>
      </div>

      <h1
        ref={headlineRef}
        className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-foreground"
      >
        Jual cepat. Desain menawan. Pengalaman belanja yang menyenangkan.
      </h1>

      <p className="hero-sub max-w-2xl text-lg text-muted-foreground">
        Bangun toko online Anda dengan tampilan modern, performa tinggi, dan fitur
        yang membuat pelanggan kembali lagi.
      </p>

      <div ref={ctasRef} className="flex gap-4 items-center mt-2 w-full sm:w-auto">
        <a
          href="#products"
          className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-5 py-3 font-semibold shadow-lg hover:brightness-95 transition"
        >
          Mulai Sekarang
        </a>
        <a
          href="#about"
          className="inline-flex items-center justify-center rounded-full border border-border px-4 py-3 text-sm text-foreground/80 hover:bg-muted transition"
        >
          Pelajari Lebih Lanjut
        </a>
      </div>

      <div className="w-full mt-6 rounded-xl bg-gradient-to-r from-white/70 via-white/50 to-white/30 p-4 shadow-sm">
        <p className="text-sm text-muted-foreground">Trusted by small shops &amp; high-traffic brands</p>
        <div className="mt-3 flex gap-3 items-center">
          <Image src="/vercel.svg" alt="vercel" width={60} height={20} />
          <Image src="/file.svg" alt="file" width={48} height={16} />
          <Image src="/window.svg" alt="window" width={48} height={16} />
        </div>
      </div>
    </section>
  );
}
