"use client";

import { useEffect, useRef } from "react";

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); io.disconnect(); } },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="contact" className="relative bg-[#0A0B0F] py-20 lg:py-36 px-4 sm:px-6 lg:px-10 overflow-hidden">
      {/* Ambient gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(201,168,76,0.07) 0%, transparent 70%)" }}
      />

      <div ref={ref} className="section-reveal max-w-3xl mx-auto text-center flex flex-col items-center gap-6 sm:gap-8">
        <span className="text-[#C9A84C] text-[10px] tracking-[0.35em] uppercase font-sans">
          Get In Touch
        </span>

        <h2 className="serif text-[clamp(2.2rem,6vw,5rem)] text-[#F0EDE6] font-light leading-tight">
          Ready to Talk?
          <br />
          <em className="italic text-[#C9A84C]">We&apos;re Here to Help.</em>
        </h2>

        <p className="text-[#8A8A94] text-base sm:text-lg leading-relaxed max-w-xl font-sans">
          Book a free initial consultation with one of our specialist solicitors.
          Available in person at our Luton or Birmingham offices, or virtually
          anywhere in the UK.
        </p>

        {/* CTA buttons — stacked on mobile, inline on sm+ */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto mt-2">
          <a
            href="tel:+441582737952"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-[#C9A84C] text-[#0A0B0F] text-[11px] tracking-[0.2em] uppercase font-sans font-semibold transition-all duration-300 hover:bg-[#E8C97A]"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 2h3l1.5 3.5-1.8 1.1a7 7 0 003.7 3.7L9.5 8.5 13 10v3C6.9 13 1 7.1 1 1z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
            </svg>
            Call Us Now
          </a>
          <a
            href="mailto:info@abbottsolicitors.com"
            className="flex items-center justify-center gap-3 px-8 py-4 border border-[#C9A84C]/50 text-[#C9A84C] text-[11px] tracking-[0.2em] uppercase font-sans transition-all duration-300 hover:bg-[#C9A84C]/10 hover:border-[#C9A84C]"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="1" y="3" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M1 4l6 4 6-4" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
            </svg>
            Email Us
          </a>
        </div>

        {/* Office locations — stacked on mobile, side-by-side on sm+ */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 mt-6 pt-8 border-t border-[#C9A84C]/10 w-full justify-center">
          {[
            { city: "Luton Office",      addr: "Abbott House, Unit 9, 729 Capability Green, Luton LU1 3LU" },
            { city: "Birmingham Office", addr: "443–465 Coventry Road, Small Heath, Birmingham B10 0TJ" },
          ].map(({ city, addr }) => (
            <div key={city} className="flex flex-col items-center gap-1 text-center">
              <span className="text-[#C9A84C] text-[10px] tracking-[0.28em] uppercase font-sans">{city}</span>
              <span className="text-[#8A8A94] text-base font-sans">{addr}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
