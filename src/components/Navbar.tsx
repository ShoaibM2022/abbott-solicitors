"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const practices = [
  { label: "Immigration Law",  href: "/immigration" },
  { label: "Family Law",       href: "/family-law" },
  { label: "Housing Law",      href: "/housing-law" },
  { label: "Property Law & Conveyancing", href: "/conveyancing" },
  { label: "Personal Injury Claims", href: "/personal-injury" },
  { label: "Employment Law",   href: "/employment" },
  { label: "Civil Disputes",   href: "/civil-litigation" },
  { label: "Criminal Defence", href: "/criminal-defence" },
];

const aboutLinks = [
  { label: "About Us",         href: "/about" },
  { label: "Our Team",         href: "/team" },
  { label: "Mission Statement",href: "/about#mission" },
  { label: "Careers",          href: "/careers" },
  { label: "Complaints",       href: "/complaints" },
];

const feeLinks = [
  { label: "Fee Overview",      href: "/fees" },
  { label: "Immigration Fees",  href: "/fees#immigration" },
  { label: "Conveyancing Fees", href: "/fees#conveyancing" },
  { label: "Employment Fees",   href: "/fees#employment" },
  { label: "General Fees",      href: "/fees#general" },
];

function Dropdown({ label, items }: { label: string; items: { label: string; href: string }[] }) {
  const [open, setOpen] = useState(false);
  const ref       = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  /* Click-outside to close */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleEnter = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };

  /* 200 ms grace period so cursor can cross the gap without closing */
  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 200);
  };

  return (
    <div ref={ref} className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-[#8A8A94] hover:text-[#F0EDE6] text-[11px] tracking-[0.2em] uppercase font-sans transition-colors duration-200"
      >
        {label}
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      </button>

      <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 w-52 transition-all duration-200 z-50 ${
        open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
      }`}>
        {/* Transparent bridge that fills the gap so the cursor doesn't leave the zone */}
        <div className="absolute -top-3 left-0 right-0 h-3" />

        {/* Arrow */}
        <div className="flex justify-center mb-1">
          <div className="w-2 h-2 rotate-45 bg-[#0D1B35] border-l border-t border-[#C9A84C]/20" />
        </div>
        <div className="bg-[#0D1B35] border border-[#C9A84C]/15 py-2">
          {items.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block px-5 py-2.5 text-[#8A8A94] hover:text-[#F0EDE6] hover:bg-[#C9A84C]/8 text-[11px] tracking-[0.14em] uppercase font-sans transition-colors duration-150"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMobile = (section: string) =>
    setMobileSection((prev) => (prev === section ? null : section));

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 sm:px-6 lg:px-10 ${
      scrolled ? "bg-[#0A0B0F]/90 backdrop-blur-xl border-b border-[#C9A84C]/10" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" alt="Abbott Solicitors" width={150} height={57} priority
            className="logo-filter h-10 w-auto object-contain" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          <Dropdown label="About" items={aboutLinks} />
          <Dropdown label="Practices" items={practices} />
          <Link href="/legal-aid" className="text-[#8A8A94] hover:text-[#F0EDE6] text-[11px] tracking-[0.2em] uppercase font-sans transition-colors duration-200">
            Legal Aid
          </Link>
          <Dropdown label="Fees" items={feeLinks} />
        </div>

        {/* CTA */}
        <Link href="/contact"
          className="hidden lg:flex items-center px-6 py-2.5 border border-[#C9A84C]/60 text-[#C9A84C] text-[11px] tracking-[0.2em] uppercase font-sans transition-all duration-300 hover:bg-[#C9A84C] hover:text-[#0A0B0F]">
          Free Consultation
        </Link>

        {/* Mobile burger */}
        <button className="lg:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`block w-6 h-px bg-[#F0EDE6] transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
          <span className={`block w-6 h-px bg-[#F0EDE6] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-[#F0EDE6] transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ${menuOpen ? "max-h-[80vh] border-t border-[#C9A84C]/10" : "max-h-0"} bg-[#0A0B0F]/97 backdrop-blur-xl overflow-y-auto`}>
        <div className="px-6 py-6 flex flex-col gap-2">

          {/* About accordion */}
          <button onClick={() => toggleMobile("about")} className="flex items-center justify-between w-full py-3 text-[#8A8A94] text-base tracking-[0.18em] uppercase font-sans border-b border-[#C9A84C]/10">
            About
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform ${mobileSection === "about" ? "rotate-180" : ""}`}>
              <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </button>
          {mobileSection === "about" && (
            <div className="flex flex-col gap-1 pl-4 mb-2">
              {aboutLinks.map(({ label, href }) => (
                <Link key={href} href={href} onClick={() => setMenuOpen(false)}
                  className="py-2 text-[#8A8A94] hover:text-[#F0EDE6] text-sm tracking-[0.15em] uppercase font-sans">
                  {label}
                </Link>
              ))}
            </div>
          )}

          {/* Practices accordion */}
          <button onClick={() => toggleMobile("practices")} className="flex items-center justify-between w-full py-3 text-[#8A8A94] text-base tracking-[0.18em] uppercase font-sans border-b border-[#C9A84C]/10">
            Practices
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform ${mobileSection === "practices" ? "rotate-180" : ""}`}>
              <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </button>
          {mobileSection === "practices" && (
            <div className="flex flex-col gap-1 pl-4 mb-2">
              {practices.map(({ label, href }) => (
                <Link key={href} href={href} onClick={() => setMenuOpen(false)}
                  className="py-2 text-[#8A8A94] hover:text-[#F0EDE6] text-sm tracking-[0.15em] uppercase font-sans">
                  {label}
                </Link>
              ))}
            </div>
          )}

          <Link href="/legal-aid" onClick={() => setMenuOpen(false)}
            className="py-3 text-[#8A8A94] text-base tracking-[0.18em] uppercase font-sans border-b border-[#C9A84C]/10">
            Legal Aid
          </Link>

          {/* Fees accordion */}
          <button onClick={() => toggleMobile("fees")} className="flex items-center justify-between w-full py-3 text-[#8A8A94] text-base tracking-[0.18em] uppercase font-sans border-b border-[#C9A84C]/10">
            Fees
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform ${mobileSection === "fees" ? "rotate-180" : ""}`}>
              <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </button>
          {mobileSection === "fees" && (
            <div className="flex flex-col gap-1 pl-4 mb-2">
              {feeLinks.map(({ label, href }) => (
                <Link key={href} href={href} onClick={() => setMenuOpen(false)}
                  className="py-2 text-[#8A8A94] hover:text-[#F0EDE6] text-sm tracking-[0.15em] uppercase font-sans">
                  {label}
                </Link>
              ))}
            </div>
          )}

          <Link href="/contact" onClick={() => setMenuOpen(false)}
            className="mt-4 text-center px-6 py-3.5 bg-[#C9A84C] text-[#0A0B0F] text-[11px] tracking-[0.2em] uppercase font-sans font-semibold">
            Free Consultation
          </Link>
        </div>
      </div>
    </nav>
  );
}
