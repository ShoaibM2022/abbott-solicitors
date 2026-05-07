"use client";

import { useEffect, useRef, useState } from "react";

const process = [
  {
    step: "01",
    title: "Free Consultation",
    desc: "A no-obligation initial assessment to understand your circumstances and identify the right legal route forward.",
  },
  {
    step: "02",
    title: "Case Strategy",
    desc: "We review the full picture and design a tailored strategy to give your matter the strongest possible footing.",
  },
  {
    step: "03",
    title: "Preparation",
    desc: "Documents gathered, statements drafted and applications prepared to the highest standard with attention to every detail.",
  },
  {
    step: "04",
    title: "Resolution",
    desc: "Submission, advocacy and ongoing communication — we keep you informed at every stage until your matter is resolved.",
  },
];

function RevealItem({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-item ${visible ? "reveal-visible" : ""} ${className}`}
      style={visible ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

export default function ProcessSection() {
  return (
    <section className="pt-0 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-10 bg-[#0A0B0F]">
      <div className="max-w-7xl mx-auto">
        <RevealItem>
          <span className="text-[#C9A84C] text-[10px] tracking-[0.38em] uppercase font-sans">
            Our Approach
          </span>
          <h2 className="serif text-[clamp(1.8rem,4vw,3rem)] text-[#F0EDE6] font-light mt-3 mb-12">
            How We Work
          </h2>
        </RevealItem>
        <div className="relative">
          {/* Timeline connector — desktop only, runs centre-of-box to centre-of-box */}
          <div className="absolute top-7 left-7 right-7 h-px bg-gradient-to-r from-[#C9A84C]/50 via-[#C9A84C]/30 to-[#C9A84C]/50 hidden lg:block pointer-events-none" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {process.map(({ step, title, desc }, i) => (
              <RevealItem key={step} delay={i * 120} className="flex flex-col gap-4">
                <div className="w-14 h-14 border border-[#C9A84C]/40 bg-[#0A0B0F] flex items-center justify-center relative overflow-hidden group z-10">
                  <span
                    className="serif text-2xl text-[#C9A84C] step-stamp"
                    style={{ animationDelay: `${i * 120 + 200}ms` }}
                  >
                    {step}
                  </span>
                  <span className="absolute inset-0 bg-[#C9A84C]/0 group-hover:bg-[#C9A84C]/10 transition-colors duration-300" />
                </div>
                <h3 className="serif text-xl text-[#F0EDE6]">{title}</h3>
                <p className="text-[#8A8A94] text-base leading-relaxed font-sans">{desc}</p>
              </RevealItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
