import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import TiltCard from "@/components/TiltCard";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practice Areas — Abbott Solicitors",
  description: "Abbott Solicitors covers Immigration, Family Law, Housing, Conveyancing, Personal Injury, Employment, Civil Litigation and Criminal Defence. Free 15-minute initial consultation.",
};

const areas = [
  {
    href: "/immigration",
    overline: "Immigration Law",
    title: "Immigration Law",
    desc: "Visa applications, appeals, nationality, asylum, partner & spouse visas, and complex immigration matters handled by Law Society accredited specialists.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" width="40" height="40">
        <circle cx="24" cy="24" r="18"/><path d="M24 6a30 30 0 010 36M6 24h36M8 14h32M8 34h32"/>
      </svg>
    ),
  },
  {
    href: "/family-law",
    overline: "Family Law",
    title: "Family Law",
    desc: "Divorce, financial settlements, child arrangements, domestic abuse protection and cohabitation agreements, handled with care and expertise.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" width="40" height="40">
        <circle cx="16" cy="14" r="6"/><circle cx="32" cy="14" r="6"/>
        <path d="M4 42c0-8 5-14 12-14s8 2 8 2 1-2 8-2 12 6 12 14"/>
        <circle cx="24" cy="30" r="4"/>
      </svg>
    ),
  },
  {
    href: "/housing-law",
    overline: "Housing Law",
    title: "Housing Law",
    desc: "Disrepair claims, unlawful eviction, possession proceedings and homelessness appeals, protecting tenants and homeowners across England.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" width="40" height="40">
        <path d="M4 24L24 6l20 18"/><rect x="10" y="24" width="28" height="18"/>
        <rect x="18" y="32" width="12" height="10"/>
      </svg>
    ),
  },
  {
    href: "/conveyancing",
    overline: "Property Law",
    title: "Property Law & Conveyancing",
    desc: "Residential and commercial conveyancing, lease extensions, title disputes, adverse possession and property development, fully managed from instruction to completion.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" width="40" height="40">
        <rect x="6" y="8" width="36" height="32" rx="2"/>
        <path d="M14 18h20M14 24h20M14 30h12"/>
        <path d="M30 30l4 4 8-8"/>
      </svg>
    ),
  },
  {
    href: "/personal-injury",
    overline: "Personal Injury",
    title: "Personal Injury Claims",
    desc: "No win, no fee claims for road traffic accidents, workplace injuries, medical negligence, serious injury, CICA and abuse claims.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" width="40" height="40">
        <path d="M24 4v8M24 36v8M4 24h8M36 24h8"/>
        <circle cx="24" cy="24" r="12"/><path d="M24 18v6l4 4"/>
      </svg>
    ),
  },
  {
    href: "/employment",
    overline: "Employment Law",
    title: "Employment Law",
    desc: "Unfair dismissal, constructive dismissal, discrimination, settlement agreements, TUPE, whistleblowing and full Employment Tribunal representation.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" width="40" height="40">
        <rect x="4" y="16" width="40" height="26" rx="3"/>
        <path d="M16 16v-4a8 8 0 0116 0v4M24 28v6M20 28h8"/>
      </svg>
    ),
  },
  {
    href: "/civil-litigation",
    overline: "Civil Disputes",
    title: "Civil Disputes",
    desc: "County Court and High Court claims, debt recovery, contract disputes, professional negligence, injunctions and mediation: strategic representation for claimants and defendants.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" width="40" height="40">
        <path d="M24 4v40M12 16h24M8 10l8 12M40 10l-8 12M8 38h32"/>
        <circle cx="8" cy="10" r="3"/><circle cx="40" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    href: "/criminal-defence",
    overline: "Criminal Defence",
    title: "Criminal Defence",
    desc: "24/7 police station attendance, Magistrates and Crown Court advocacy: immediate expert defence from the moment of arrest.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" width="40" height="40">
        <path d="M24 4l18 7v11c0 12-8 20-18 22C14 42 6 34 6 22V11z"/>
        <path d="M16 24l5 5 10-10" strokeWidth="1.5"/>
      </svg>
    ),
  },
];

export default function PracticesPage() {
  return (
    <SmoothScrollProvider>
      <main className="bg-[#0A0B0F] min-h-screen text-[#F0EDE6]">
        <Navbar />

        <PageHero
          overline="Our Expertise"
          title="Practice"
          titleAccent="Areas"
          subtitle="Eight specialist practice areas under one roof, each led by experienced solicitors dedicated to achieving the best outcome for you."
          breadcrumbs={[{ label: "Practice Areas" }]}
        />

        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {areas.map(({ href, overline, title, desc, icon }, i) => (
                <TiltCard key={href} delay={i * 80} className="p-7 flex flex-col gap-4">
                  <Link href={href} className="flex flex-col gap-4 flex-1 group">
                    <div className="text-[#C9A84C] group-hover:scale-110 transition-transform duration-300 w-fit">
                      {icon}
                    </div>
                    <div>
                      <span className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase font-sans">{overline}</span>
                      <h2 className="serif text-2xl text-[#F0EDE6] font-light mt-1">{title}</h2>
                    </div>
                    <p className="text-[#8A8A94] text-base font-sans leading-relaxed flex-1">{desc}</p>
                    <span className="text-[#C9A84C] text-[11px] tracking-[0.2em] uppercase font-sans flex items-center gap-2 group-hover:gap-3 transition-all duration-200">
                      Learn More
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" width="12" height="12">
                        <path d="M3 8h10M9 4l4 4-4 4"/>
                      </svg>
                    </span>
                  </Link>
                </TiltCard>
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
