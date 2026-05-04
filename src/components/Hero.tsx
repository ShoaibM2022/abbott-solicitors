"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;
    const ctx = gsap.context(() => {
      gsap
        .timeline({ delay: 0.2 })
        .from(".hero-overline", { opacity: 0, y: 14, duration: 0.7, ease: "power3.out" })
        .from(".hero-word",     { opacity: 0, y: 55, duration: 0.95, stagger: 0.16, ease: "power3.out" }, "-=0.3")
        .from(".hero-divider",  { opacity: 0, scaleX: 0, duration: 0.6, ease: "power2.out", transformOrigin: "left" }, "-=0.4")
        .from(".hero-sub",      { opacity: 0, y: 18, duration: 0.8, ease: "power2.out" }, "-=0.4")
        .from(".hero-cta",      { opacity: 0, y: 16, duration: 0.7, stagger: 0.1, ease: "power2.out" }, "-=0.5")
        .from(".hero-trust",    { opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.3");
    }, contentRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col lg:flex-row overflow-hidden bg-[#0A0B0F]">

      {/* ── LEFT / main content panel ── */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col justify-center
                   w-full lg:w-[54%]
                   px-6 sm:px-10 lg:px-16 xl:px-24
                   pt-28 pb-16 lg:pt-0 lg:pb-0
                   min-h-screen"
      >
        {/* Overline */}
        <div className="hero-overline flex items-center gap-3 mb-6 sm:mb-8">
          <span className="block w-5 sm:w-6 h-px bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-[9px] sm:text-[10px] tracking-[0.35em] uppercase font-sans">
            Abbott Solicitors · Est. 2012
          </span>
        </div>

        {/* Heading — large serif, responsive fluid size */}
        <h1
          className="serif font-light leading-[0.9] tracking-tight text-[#F0EDE6] mb-5"
          style={{ fontSize: "clamp(3rem, 8vw, 7.5rem)" }}
        >
          <span className="hero-word block">Justice.</span>
          <span className="hero-word block italic text-[#C9A84C]">Precision.</span>
          <span className="hero-word block">Trust.</span>
        </h1>

        {/* Divider */}
        <div className="hero-divider flex items-center gap-4 mb-5">
          <span className="block w-10 h-px bg-[#C9A84C]/40" />
          <span className="text-[#8A8A94] text-[10px] tracking-[0.22em] uppercase font-sans">
            Expert Legal Representation
          </span>
        </div>

        {/* Subtext */}
        <p className="hero-sub text-[#8A8A94] text-sm sm:text-[15px] leading-[1.85] max-w-[440px] font-sans mb-8 sm:mb-10">
          Trusted solicitors providing specialist legal services across the UK.
          Immigration, Family, Housing, Employment and more — with a free initial
          consultation available.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-10">
          <a
            href="/contact"
            className="hero-cta inline-flex items-center justify-center gap-3 px-7 py-4 bg-[#C9A84C] text-[#0A0B0F] text-[11px] tracking-[0.22em] uppercase font-sans font-semibold transition-all duration-300 hover:bg-[#E8C97A] hover:gap-5"
          >
            Book Free Consultation
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="shrink-0">
              <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="/practices"
            className="hero-cta inline-flex items-center justify-center gap-3 px-7 py-4 border border-[#F0EDE6]/20 text-[#F0EDE6]/65 text-[11px] tracking-[0.22em] uppercase font-sans transition-all duration-300 hover:border-[#F0EDE6]/45 hover:text-[#F0EDE6]"
          >
            Our Services
          </a>
        </div>

        {/* Trust badges */}
        <div className="hero-trust flex flex-wrap items-center gap-x-6 gap-y-3">
          {["Legal Aid Certified", "SRA Regulated", "Free Consultation"].map((badge) => (
            <div key={badge} className="flex items-center gap-2">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6l3 3 5-5" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[#8A8A94] text-[11px] tracking-[0.12em] uppercase font-sans">{badge}</span>
            </div>
          ))}
        </div>

        {/* Scroll indicator — desktop only */}
        <div className="hidden lg:flex items-center gap-3 absolute bottom-10 left-16 xl:left-24">
          <div className="animate-scroll-bounce">
            <svg width="14" height="20" viewBox="0 0 14 20" fill="none" className="text-[#C9A84C]">
              <rect x="1" y="1" width="12" height="18" rx="6" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
              <rect x="6" y="4" width="2" height="5" rx="1" fill="currentColor"/>
            </svg>
          </div>
          <span className="text-[#8A8A94]/60 text-[10px] tracking-[0.3em] uppercase font-sans">Scroll</span>
        </div>
      </div>

      {/* ── Vertical gold divider — desktop only ── */}
      <div className="hidden lg:block absolute top-[15%] bottom-[15%] left-[54%] w-px bg-gradient-to-b from-transparent via-[#C9A84C]/25 to-transparent z-20 pointer-events-none" />

      {/* ── RIGHT: 3D canvas — desktop only ── */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[46%] z-0">
        <HeroScene />
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0A0B0F] to-transparent z-10 pointer-events-none" />
      </div>

      {/* ── MOBILE: canvas fills section as background ── */}
      <div className="absolute inset-0 z-0 lg:hidden">
        <HeroScene />
        <div className="absolute inset-0 bg-[#0A0B0F]/83 pointer-events-none" />
      </div>
    </section>
  );
}
