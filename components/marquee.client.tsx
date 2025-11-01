"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Marquee({ items = [] }: { items?: string[] }) {
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    // Set up continuous left-to-right marquee using two identical children
    const distance = el.scrollWidth / 2 || 1000;

    const anim = gsap.to(el, {
      x: () => `-=${distance}`,
      ease: "none",
      duration: 18,
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => x),
      },
    });

    return () => { anim.kill(); };
  }, [items]);

  const content = items.length ? items : [
    "Free shipping over Rp 200k",
    "Diskon hingga 50% di produk pilihan",
    "Garansi uang kembali 30 hari",
    "Customer support 24/7",
  ];

  return (
    <div className="overflow-hidden w-full bg-muted/40 rounded-lg py-3">
      <div ref={wrapRef} className="flex whitespace-nowrap gap-10 px-6">
        {/* duplicate for seamless loop */}
        <div className="flex gap-10">
          {content.map((t, i) => (
            <div key={`a-${i}`} className="px-3 py-1 text-sm font-medium text-foreground/80">
              {t}
            </div>
          ))}
        </div>
        <div className="flex gap-10">
          {content.map((t, i) => (
            <div key={`b-${i}`} className="px-3 py-1 text-sm font-medium text-foreground/80">
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
