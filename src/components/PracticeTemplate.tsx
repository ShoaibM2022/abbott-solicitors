"use client";

import { useRef, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageHero from "./PageHero";
import PageCTA from "./PageCTA";
import SmoothScrollProvider from "./SmoothScrollProvider";
import TiltCard from "./TiltCard";
import { useWicked } from "@/hooks/useWicked";

interface Service { title: string; desc: string }
interface Step    { step: string; title: string; desc: string }

interface PracticeTemplateProps {
  overline: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
  intro: string;
  services: Service[];
  process: Step[];
  whyUs: string[];
  legalAid?: boolean;
  icon: React.ReactNode;
  children?: React.ReactNode;
}

/* Single item that reveals when it enters the viewport */
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

export default function PracticeTemplate({
  overline, title, titleAccent, subtitle, intro,
  services, process, whyUs, legalAid, icon, children,
}: PracticeTemplateProps) {
  const introRef = useWicked("wicked-slideRight");
  const iconRef  = useWicked("wicked-floater" as never);

  return (
    <SmoothScrollProvider>
      <main className="bg-[#0A0B0F] min-h-screen text-[#F0EDE6]">
        <Navbar />

        <PageHero
          overline={overline}
          title={title}
          titleAccent={titleAccent}
          subtitle={subtitle}
          breadcrumbs={[{ label: "Practices", href: "/practices" }, { label: title }]}
        />

        {/* ── Intro ── */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-10 bg-[#0A0B0F]">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            <div
              ref={iconRef as React.RefObject<HTMLDivElement>}
              className="hidden lg:flex shrink-0 w-32 h-32 items-center justify-center border border-[#C9A84C]/20 text-[#C9A84C]"
            >
              {icon}
            </div>
            <div ref={introRef} className="flex-1 flex flex-col gap-5">
              {legalAid && (
                <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 border border-[#C9A84C]/30 text-[#C9A84C] text-[10px] tracking-[0.25em] uppercase font-sans wicked-bounceIn">
                  ✓ Legal Aid Available
                </div>
              )}
              <p className="text-[#F0EDE6]/80 text-[16px] leading-[1.9] font-sans">{intro}</p>
            </div>
          </div>
        </section>

        {/* ── Services grid — TiltCard ── */}
        <section className="py-16 px-4 sm:px-6 lg:px-10 bg-[#0D1B35]/30">
          <div className="max-w-7xl mx-auto">
            <RevealItem>
              <span className="text-[#C9A84C] text-[10px] tracking-[0.38em] uppercase font-sans">
                How We Can Help
              </span>
              <h2 className="serif text-[clamp(1.8rem,4vw,3rem)] text-[#F0EDE6] font-light mt-3 mb-10">
                Our {title} Services
              </h2>
            </RevealItem>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map(({ title: t, desc }, i) => (
                <TiltCard key={t} delay={i * 90} className="p-7 flex flex-col gap-4">
                  <div className="flex flex-col gap-3 w-max max-w-full">
                    <h3 className="serif text-xl text-[#E8C97A]">{t}</h3>
                    <div className="h-px bg-[#C9A84C]/30" />
                  </div>
                  <p className="text-[#8A8A94] text-base leading-relaxed font-sans">{desc}</p>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        {children}

        {/* ── Process ── */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-10 bg-[#0A0B0F]">
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
                {process.map(({ step, title: t, desc }, i) => (
                  <RevealItem key={step} delay={i * 120} className="flex flex-col gap-4">
                    {/* Step number — bg matches section so it sits over the connector line */}
                    <div className="w-14 h-14 border border-[#C9A84C]/40 bg-[#0A0B0F] flex items-center justify-center relative overflow-hidden group z-10">
                      <span
                        className="serif text-2xl text-[#C9A84C] step-stamp"
                        style={{ animationDelay: `${i * 120 + 200}ms` }}
                      >
                        {step}
                      </span>
                      <span className="absolute inset-0 bg-[#C9A84C]/0 group-hover:bg-[#C9A84C]/10 transition-colors duration-300" />
                    </div>
                    <h3 className="serif text-xl text-[#F0EDE6]">{t}</h3>
                    <p className="text-[#8A8A94] text-base leading-relaxed font-sans">{desc}</p>
                  </RevealItem>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Abbott ── */}
        <section className="py-16 px-4 sm:px-6 lg:px-10 bg-[#0D1B35]/30">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
            <RevealItem className="lg:w-1/3">
              <span className="text-[#C9A84C] text-[10px] tracking-[0.38em] uppercase font-sans">
                Why Choose Us
              </span>
              <h2 className="serif text-[clamp(1.8rem,4vw,3rem)] text-[#F0EDE6] font-light mt-3 leading-tight">
                The Abbott <em className="italic text-[#C9A84C]">Difference</em>
              </h2>
            </RevealItem>
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {whyUs.map((point, i) => (
                <RevealItem key={i} delay={i * 80} className="flex items-start gap-3 py-3 border-b border-[#C9A84C]/8">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0 mt-0.5 text-[#C9A84C]">
                    <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1"/>
                    <path d="M5 9l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[#8A8A94] text-base leading-relaxed font-sans">{point}</span>
                </RevealItem>
              ))}
            </div>
          </div>
        </section>

        <PageCTA />
        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
