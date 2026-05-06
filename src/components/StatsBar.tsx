"use client";

import { useEffect, useRef } from "react";

const stats = [
  { value: "500+",      label: "Cases Won" },
  { value: "2012",      label: "Established" },
  { value: "2",         label: "UK Offices" },
  { value: "Legal Aid", label: "Certified" },
];

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); io.disconnect(); } },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="section-reveal border-y border-[#C9A84C]/10 bg-[#0D1B35]/30">
      {/* 2-col on mobile → 4-col on md+ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-0 grid grid-cols-2 md:grid-cols-4">
        {stats.map(({ value, label }, i) => (
          <div
            key={i}
            className={`flex flex-col items-center justify-center py-8 px-4 gap-2
              ${i % 2 === 0 ? "border-r border-[#C9A84C]/10" : ""}
              ${i < 2 ? "border-b md:border-b-0 border-[#C9A84C]/10" : ""}
              md:border-r md:last:border-r-0`}
          >
            <span className="serif text-4xl md:text-5xl text-[#C9A84C] font-light tracking-wide">
              {value}
            </span>
            <span className="text-[#8A8A94] text-[10px] tracking-[0.26em] uppercase font-sans text-center">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
