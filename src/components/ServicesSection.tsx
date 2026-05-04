"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import TiltCard from "./TiltCard";

const services = [
  {
    href: "/immigration",
    num: "01",
    title: "Immigration Law",
    desc: "Visas, indefinite leave to remain, asylum claims and nationality applications.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
      </svg>
    ),
  },
  {
    href: "/family-law",
    num: "02",
    title: "Family Law",
    desc: "Divorce, child arrangements, financial settlements and domestic matters.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  {
    href: "/housing-law",
    num: "03",
    title: "Housing Law",
    desc: "Eviction defence, disrepair claims and unlawful eviction proceedings.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    href: "/conveyancing",
    num: "04",
    title: "Conveyancing",
    desc: "Residential and commercial property transfers, remortgages and lease extensions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="7.5" cy="15.5" r="5.5"/>
        <path d="M21 2l-9.6 9.6M15.5 7.5l3 3L21 8l-3-3"/>
      </svg>
    ),
  },
  {
    href: "/personal-injury",
    num: "05",
    title: "Personal Injury",
    desc: "Road traffic accidents, workplace injuries and clinical negligence claims.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h4l2-7 4 14 2-7h4"/>
      </svg>
    ),
  },
  {
    href: "/employment",
    num: "06",
    title: "Employment Law",
    desc: "Unfair dismissal, discrimination, settlement agreements and TUPE matters.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M12 12v4M8 12h8"/>
      </svg>
    ),
  },
  {
    href: "/civil-litigation",
    num: "07",
    title: "Civil Litigation",
    desc: "Contract disputes, debt recovery, professional negligence and injunctions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v18M5 21h14"/>
        <path d="M3 6l4 8M7 6H3M7 14H3"/>
        <path d="M17 6l4 8M21 6h-4M21 14h-4"/>
      </svg>
    ),
  },
  {
    href: "/criminal-defence",
    num: "08",
    title: "Criminal Defence",
    desc: "Expert representation from police station to Crown Court. Available 24/7.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); io.disconnect(); } },
      { threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="services" className="relative bg-[#0A0B0F] py-24 lg:py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div ref={headingRef} className="section-reveal mb-14">
          <span className="text-[#C9A84C] text-[10px] tracking-[0.38em] uppercase font-sans">
            Practice Areas
          </span>
          <h2 className="serif text-[clamp(2.2rem,4.5vw,3.8rem)] text-[#F0EDE6] font-light mt-3 leading-tight">
            Expert Legal <em className="italic text-[#C9A84C]">Services</em>
          </h2>
          <p className="text-[#8A8A94] text-[14px] md:text-[15px] leading-relaxed max-w-xl mt-4 font-sans">
            Comprehensive legal support across eight practice areas — with offices
            in Luton and Birmingham, and virtual services available UK-wide.
          </p>
        </div>

        {/* Cards — each TiltCard gets a staggered 3-D entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
          {services.map(({ href, num, title, desc, icon }, i) => (
            <TiltCard key={href} delay={i * 75} className="p-6">
              <Link href={href} className="flex flex-col gap-4 h-full group">
                {/* Index */}
                <span className="text-[#C9A84C]/35 text-[10px] tracking-[0.3em] uppercase font-sans">
                  {num}
                </span>

                {/* Icon */}
                <div className="w-6 h-6 text-[#C9A84C]/65 group-hover:text-[#C9A84C] transition-colors duration-300">
                  {icon}
                </div>

                {/* Separator */}
                <div className="w-8 h-px bg-[#C9A84C]/25 group-hover:bg-[#C9A84C]/55 transition-colors duration-300" />

                {/* Title */}
                <h3 className="serif text-[1.15rem] font-normal text-[#F0EDE6] leading-snug group-hover:text-[#E8C97A] transition-colors duration-300">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-[#8A8A94] text-[13px] leading-[1.75] font-sans flex-1">{desc}</p>

                {/* Learn more */}
                <div className="flex items-center gap-2 text-[#C9A84C]/45 group-hover:text-[#C9A84C] text-[11px] tracking-[0.18em] uppercase font-sans transition-all duration-300 group-hover:gap-3 mt-1">
                  <span>Learn more</span>
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="shrink-0">
                    <path d="M1 4h10M7 1l4 3-4 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}
