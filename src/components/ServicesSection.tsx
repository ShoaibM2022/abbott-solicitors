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
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
        <circle cx="24" cy="24" r="20"/>
        <path d="M4 24h40M24 4a32 32 0 010 40M24 4a32 32 0 000 40"/>
      </svg>
    ),
  },
  {
    href: "/family-law",
    num: "02",
    title: "Family Law",
    desc: "Divorce, child arrangements, financial settlements and domestic matters.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
        <circle cx="16" cy="14" r="6"/>
        <circle cx="32" cy="14" r="6"/>
        <path d="M4 42c0-7 5-12 12-12M32 30c7 0 12 5 12 12"/>
        <circle cx="24" cy="34" r="6"/>
      </svg>
    ),
  },
  {
    href: "/housing-law",
    num: "03",
    title: "Housing Law",
    desc: "Eviction defence, disrepair claims and unlawful eviction proceedings.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
        <path d="M6 22L24 6l18 16v20H6z"/>
        <rect x="17" y="30" width="14" height="12" rx="1"/>
      </svg>
    ),
  },
  {
    href: "/conveyancing",
    num: "04",
    title: "Property Law & Conveyancing",
    desc: "Residential and commercial conveyancing, lease extensions, title disputes and property development.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
        <path d="M6 22L24 6l18 16v20a2 2 0 01-2 2H8a2 2 0 01-2-2V22z"/>
        <rect x="18" y="28" width="12" height="14" rx="1"/>
        <circle cx="38" cy="14" r="5"/>
        <path d="M33 14H20"/>
        <path d="M24 14v4M28 14v3"/>
      </svg>
    ),
  },
  {
    href: "/personal-injury",
    num: "05",
    title: "Personal Injury Claims",
    desc: "Road traffic accidents, workplace injuries, medical negligence and serious injury claims on a no win, no fee basis.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
        <rect x="4" y="6" width="40" height="28" rx="2"/>
        <path d="M8 20h7l3-9 5 18 3-9h10" strokeWidth="1.4"/>
        <path d="M24 34v7"/>
        <path d="M15 41h18"/>
      </svg>
    ),
  },
  {
    href: "/employment",
    num: "06",
    title: "Employment Law",
    desc: "Unfair dismissal, discrimination, settlement agreements, TUPE, whistleblowing and Employment Tribunal claims.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
        <rect x="4" y="16" width="40" height="26" rx="3"/>
        <path d="M16 16v-4a8 8 0 0116 0v4M24 28v6M20 28h8"/>
      </svg>
    ),
  },
  {
    href: "/civil-litigation",
    num: "07",
    title: "Civil Disputes",
    desc: "County Court and High Court claims, debt recovery, contract disputes, professional negligence and injunctions.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
        <path d="M24 8v32"/>
        <path d="M15 40h18"/>
        <path d="M6 13h36"/>
        <path d="M6 13v9"/>
        <path d="M2 22h8"/>
        <path d="M2 22q4 6 8 0"/>
        <path d="M42 13v9"/>
        <path d="M38 22h8"/>
        <path d="M38 22q4 6 8 0"/>
      </svg>
    ),
  },
  {
    href: "/criminal-defence",
    num: "08",
    title: "Criminal Defence",
    desc: "Expert representation from police station to Crown Court. Available 24/7.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
        <path d="M24 4l18 7v11c0 12-8 20-18 22C14 42 6 34 6 22V11z"/>
        <path d="M16 24l5 5 10-10" strokeWidth="1.5"/>
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
          <p className="text-[#8A8A94] text-base md:text-lg leading-relaxed max-w-xl mt-4 font-sans">
            Comprehensive legal support across eight practice areas, with offices
            in Luton and Birmingham, and virtual services available UK-wide.
          </p>
        </div>

        {/* Cards — each TiltCard gets a staggered 3-D entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
          {services.map(({ href, num, title, desc, icon }, i) => (
            <TiltCard key={href} delay={i * 75} className="p-6">
              <Link href={href} className="flex flex-col gap-4 h-full group">
                {/* Icon + title on same row, icon first */}
                <div className="flex items-center gap-4">
                  <div className="w-[45px] h-[45px] shrink-0 text-[#C9A84C]/65 group-hover:text-[#C9A84C] group-hover:rotate-6 transition-all duration-300">
                    {icon}
                  </div>
                  <h3 className="serif text-xl font-normal text-[#F0EDE6] leading-snug group-hover:text-[#E8C97A] transition-colors duration-300 flex-1">
                    {title}
                  </h3>
                </div>

                {/* Separator — centered under the 45px icon */}
                <div className="w-8 h-px bg-[#C9A84C]/25 group-hover:bg-[#C9A84C]/55 transition-colors duration-300 ml-[6.5px]" />

                {/* Description */}
                <p className="text-[#8A8A94] text-base leading-[1.75] font-sans flex-1">{desc}</p>

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
