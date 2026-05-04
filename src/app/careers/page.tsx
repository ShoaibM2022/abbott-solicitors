import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers — Abbott Solicitors",
  description: "Join Abbott Solicitors. We are always looking for talented legal professionals to join our growing team in Luton and Birmingham.",
};

const reasons = [
  { title: "Meaningful Work",        desc: "Work on cases that genuinely impact people's lives — from protecting asylum seekers to securing family rights." },
  { title: "Career Development",     desc: "We invest in continuous professional development, training and mentorship at every stage of your career." },
  { title: "Collaborative Culture",  desc: "Our team of 18 works closely together. Every voice is valued, and every team member contributes to client outcomes." },
  { title: "Legal Aid Practice",     desc: "Gain rare hands-on experience in legally aided work — immigration, housing and family law — alongside private client matters." },
];

const roles = [
  { title: "Solicitor — Immigration",   type: "Full-time", location: "Luton / Birmingham" },
  { title: "Paralegal — Family Law",    type: "Full-time", location: "Luton" },
  { title: "Trainee Solicitor",         type: "Training Contract", location: "Luton / Birmingham" },
  { title: "Senior Caseworker",         type: "Full-time", location: "Birmingham" },
];

export default function CareersPage() {
  return (
    <SmoothScrollProvider>
      <main className="bg-[#0A0B0F] min-h-screen text-[#F0EDE6]">
        <Navbar />

        <PageHero
          overline="Join Our Team"
          title="Build Your Career"
          titleAccent="With Abbott"
          subtitle="We are always looking for ambitious, dedicated legal professionals who share our commitment to justice, excellence and client care."
          breadcrumbs={[{ label: "About Us", href: "/about" }, { label: "Careers" }]}
        />

        {/* Why join */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <span className="text-[#C9A84C] text-[10px] tracking-[0.38em] uppercase font-sans">Why Abbott?</span>
            <h2 className="serif text-[clamp(1.8rem,4vw,3rem)] text-[#F0EDE6] font-light mt-3 mb-10">
              Why Work With Us
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {reasons.map(({ title, desc }, i) => (
                <div key={title} className={`glass-card p-7 flex flex-col gap-4 wicked-slideUp wicked-delay-${i + 1}`}>
                  <div className="wicked-rotateIn w-10 h-10 border border-[#C9A84C]/30 flex items-center justify-center">
                    <span className="serif text-lg text-[#C9A84C]">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="serif text-xl text-[#E8C97A]">{title}</h3>
                  <p className="text-[#8A8A94] text-sm leading-relaxed font-sans">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current vacancies */}
        <section className="py-16 px-4 sm:px-6 lg:px-10 bg-[#0D1B35]/30">
          <div className="max-w-7xl mx-auto">
            <span className="text-[#C9A84C] text-[10px] tracking-[0.38em] uppercase font-sans">Current Vacancies</span>
            <h2 className="serif text-[clamp(1.8rem,4vw,3rem)] text-[#F0EDE6] font-light mt-3 mb-10">
              Open Positions
            </h2>
            <div className="flex flex-col gap-3">
              {roles.map(({ title, type, location }, i) => (
                <div key={title} className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-[#C9A84C]/12 px-6 py-5 hover:border-[#C9A84C]/35 hover:bg-[#C9A84C]/4 transition-all duration-300 wicked-slideRight wicked-delay-${i + 1}`}>
                  <div className="flex flex-col gap-1">
                    <h3 className="serif text-lg text-[#F0EDE6]">{title}</h3>
                    <div className="flex flex-wrap gap-4">
                      <span className="text-[#8A8A94] text-[11px] tracking-[0.15em] uppercase font-sans">{type}</span>
                      <span className="text-[#8A8A94] text-[11px] tracking-[0.15em] uppercase font-sans">📍 {location}</span>
                    </div>
                  </div>
                  <a href="mailto:careers@abbottsolicitors.com"
                    className="shrink-0 px-6 py-2.5 border border-[#C9A84C]/50 text-[#C9A84C] text-[11px] tracking-[0.18em] uppercase font-sans hover:bg-[#C9A84C] hover:text-[#0A0B0F] transition-all duration-300">
                    Apply Now
                  </a>
                </div>
              ))}
            </div>

            <p className="text-[#8A8A94] text-sm font-sans mt-8">
              Don&apos;t see a suitable role? Send a speculative CV to{" "}
              <a href="mailto:careers@abbottsolicitors.com" className="text-[#C9A84C] hover:text-[#E8C97A] transition-colors">
                careers@abbottsolicitors.com
              </a>
            </p>
          </div>
        </section>

        <PageCTA heading="Interested in Joining Us?" subtext="Email your CV and cover letter to careers@abbottsolicitors.com and we will be in touch." />
        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
