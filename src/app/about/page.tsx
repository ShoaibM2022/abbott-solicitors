import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import BadgeRow from "@/components/BadgeRow";
import ProcessSection from "@/components/ProcessSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Abbott Solicitors",
  description: "Abbott Solicitors — established 2012, SRA regulated. Practical, accessible legal advice across immigration, family, housing, conveyancing, employment, civil litigation and personal injury.",
};

const stats: [string, string][] = [
  ["2012", "Founded"],
  ["18", "Team Members"],
  ["2", "UK Offices"],
  ["500+", "Cases Won"],
];

const promise = [
  "We will explain your options.",
  "We will confirm the scope of our work in writing.",
  "We will provide clear costs information up front.",
  "We will tell you who is handling your matter.",
  "We will keep you updated on important developments.",
  "We will protect your information with the rigour required of regulated solicitors.",
];

const values = [
  { title: "Integrity",                  desc: "We act honestly and uphold our regulatory duties at all times." },
  { title: "Clarity",                    desc: "We explain the law in plain English so you can make informed decisions." },
  { title: "Accountability",             desc: "We confirm scope, agree costs and record the key decisions made on your matter." },
  { title: "Respect & Confidentiality",  desc: "We serve every client regardless of background, and protect your information at all times." },
];

const accreditations = [
  { src: "/badge-sra.png",             alt: "Solicitors Regulation Authority",    w: 600, h: 600, href: "https://www.sra.org.uk/" },
  { src: "/badge-legal.png",           alt: "Resolution – First for Family Law",  w: 852, h: 568, href: "https://resolution.org.uk/" },
  { src: "/badge-lawsoc-asylum.png",   alt: "Law Society – Immigration & Asylum", w: 920, h: 500, href: "https://www.lawsociety.org.uk/career-advice/individual-accreditations/immigration-and-asylum-law-accreditation" },
  { src: "/badge-lawsoc-advanced.png", alt: "Law Society – Immigration Advanced",  w: 320, h: 320, href: "https://www.lawsociety.org.uk/career-advice/individual-accreditations/immigration-law-advanced-accreditation" },
];

export default function AboutPage() {
  return (
    <SmoothScrollProvider>
      <main className="bg-[#0A0B0F] min-h-screen text-[#F0EDE6]">
        <Navbar />

        <PageHero
          overline="About Abbott Solicitors"
          title="A Firm Built on"
          titleAccent="Trust & Expertise"
          subtitle="A practical, accessible and client-focused law firm for individuals, families and businesses needing advice across immigration, family, housing, conveyancing, employment, litigation and related legal matters."
          breadcrumbs={[{ label: "About Us" }]}
        />

        {/* ── 1. Purpose ── */}
        <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-10">
          <div className="max-w-4xl mx-auto text-center wicked-fadeIn">
            <span className="text-[#C9A84C] text-[10px] tracking-[0.38em] uppercase font-sans">Our Purpose</span>
            <h2 className="serif text-[clamp(2rem,4vw,3.2rem)] text-[#F0EDE6] font-light mt-3 leading-tight">
              Why We Practise Law
            </h2>
            <p className="text-[#8A8A94] text-[15px] leading-[1.9] font-sans mt-6">
              We help individuals, families and businesses understand their legal position, protect their rights and make informed decisions. Established in 2012, with offices in Luton and Birmingham, we serve clients across the UK and internationally.
            </p>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 pt-10">
              {stats.map(([val, lbl]) => (
                <div key={lbl} className="flex flex-col gap-1 items-center">
                  <span className="serif text-4xl text-[#C9A84C] font-light">{val}</span>
                  <span className="text-[#8A8A94] text-[10px] tracking-[0.25em] uppercase font-sans">{lbl}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 2. Mission + Vision ── */}
        <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-10 bg-[#0D1B35]/30">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="wicked-slideRight glass-card p-8 lg:p-10 flex flex-col gap-4">
              <span className="text-[#C9A84C] text-[10px] tracking-[0.38em] uppercase font-sans">Our Mission</span>
              <h3 className="serif text-2xl lg:text-3xl text-[#F0EDE6] font-light leading-tight">
                Clear, practical legal advice
              </h3>
              <div className="w-8 h-px bg-[#C9A84C]/30" />
              <p className="text-[#8A8A94] text-[15px] leading-[1.9] font-sans">
                We provide clear, practical legal advice across immigration, family, housing, conveyancing, employment, civil litigation, personal injury and related legal matters. We explain the law in plain English, agree costs wherever possible and manage each matter with care, accountability and professional judgement.
              </p>
            </div>
            <div className="wicked-slideLeft glass-card p-8 lg:p-10 flex flex-col gap-4">
              <span className="text-[#C9A84C] text-[10px] tracking-[0.38em] uppercase font-sans">Our Vision</span>
              <h3 className="serif text-2xl lg:text-3xl text-[#F0EDE6] font-light leading-tight">
                A trusted, accessible firm
              </h3>
              <div className="w-8 h-px bg-[#C9A84C]/30" />
              <p className="text-[#8A8A94] text-[15px] leading-[1.9] font-sans">
                To be a trusted law firm known for clear advice, strong client care, ethical practice and accessible legal support — recognised for the standards we uphold rather than the claims we make.
              </p>
            </div>
          </div>
        </section>

        {/* ── 3. Client Promise ── */}
        <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 wicked-fadeIn">
              <span className="text-[#C9A84C] text-[10px] tracking-[0.38em] uppercase font-sans">Our Client Promise</span>
              <h2 className="serif text-[clamp(2rem,4vw,3.2rem)] text-[#F0EDE6] font-light mt-3">
                What You Can Expect
              </h2>
              <p className="text-[#8A8A94] text-[15px] leading-[1.9] font-sans mt-4 max-w-2xl mx-auto">
                Before we start work and throughout your matter, we commit to the following service standards.
              </p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {promise.map((p, i) => (
                <li key={i} className={`wicked-slideUp wicked-delay-${(i % 4) + 1} flex items-start gap-3 border border-[#C9A84C]/15 p-5`}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0 mt-0.5 text-[#C9A84C]">
                    <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1"/>
                    <path d="M5 9l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[#F0EDE6]/85 text-[15px] leading-relaxed font-sans">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── 4. Values ── */}
        <section id="values" className="py-16 px-4 sm:px-6 lg:px-10 bg-[#0D1B35]/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 wicked-fadeIn">
              <span className="text-[#C9A84C] text-[10px] tracking-[0.38em] uppercase font-sans">Our Values</span>
              <h2 className="serif text-[clamp(2rem,4vw,3.2rem)] text-[#F0EDE6] font-light mt-3">
                What We Stand For
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {values.map(({ title, desc }, i) => (
                <div key={title}
                  className={`glass-card p-7 flex flex-col gap-4 wicked-slideUp wicked-delay-${i + 1}`}>
                  <div className="w-10 h-10 border border-[#C9A84C]/30 flex items-center justify-center">
                    <span className="serif text-xl text-[#C9A84C]">{i + 1}</span>
                  </div>
                  <h3 className="serif text-2xl text-[#F0EDE6]">{title}</h3>
                  <div className="w-8 h-px bg-[#C9A84C]/30" />
                  <p className="text-[#8A8A94] text-base leading-relaxed font-sans">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. How We Work ── */}
        <ProcessSection />

        {/* ── 6. Legal Aid & Accessibility ── */}
        <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-10 bg-[#0D1B35]/30">
          <div className="max-w-5xl mx-auto wicked-fadeIn">
            <span className="text-[#C9A84C] text-[10px] tracking-[0.38em] uppercase font-sans">Legal Aid & Accessibility</span>
            <h2 className="serif text-[clamp(1.8rem,3.5vw,2.8rem)] text-[#F0EDE6] font-light mt-3 leading-tight">
              Access to Justice
            </h2>
            <div className="w-10 h-px bg-[#C9A84C]/30 mt-4 mb-6" />
            <p className="text-[#8A8A94] text-[15px] leading-[1.9] font-sans">
              We hold contracts to deliver Legal Aid in Immigration, Housing and Family Law. Where you may be eligible, we will tell you and help you apply. Within our first two years we achieved both Lexcel and SQM accreditations — recognition of the quality of our processes and our commitment to client care.
            </p>
            <p className="text-[#8A8A94] text-[15px] leading-[1.9] font-sans mt-4">
              We serve every client regardless of colour, age, marital status, gender, sexual orientation, race, belief, religion or disability — and we operate with full independence from any external pressure.
            </p>
            <div className="mt-8">
              <Link
                href="/legal-aid"
                className="inline-flex items-center gap-3 text-[#C9A84C] hover:text-[#E8C97A] text-[11px] tracking-[0.22em] uppercase font-sans transition-colors duration-300"
              >
                Read more about Legal Aid
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path d="M1 5h12M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ── 7. Practice Areas (teaser + link) ── */}
        <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-10">
          <div className="max-w-5xl mx-auto wicked-fadeIn">
            <span className="text-[#C9A84C] text-[10px] tracking-[0.38em] uppercase font-sans">Practice Areas</span>
            <h2 className="serif text-[clamp(1.8rem,3.5vw,2.8rem)] text-[#F0EDE6] font-light mt-3 leading-tight">
              Where We Practise
            </h2>
            <div className="w-10 h-px bg-[#C9A84C]/30 mt-4 mb-6" />
            <p className="text-[#8A8A94] text-[15px] leading-[1.9] font-sans">
              We act for clients in immigration, family law, housing, conveyancing, personal injury, employment, civil disputes and criminal defence — both in England &amp; Wales and on cross-border matters where instructed.
            </p>
            <div className="mt-8">
              <Link
                href="/practices"
                className="inline-flex items-center gap-3 text-[#C9A84C] hover:text-[#E8C97A] text-[11px] tracking-[0.22em] uppercase font-sans transition-colors duration-300"
              >
                See all practice areas
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path d="M1 5h12M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ── 8. Accreditations ── */}
        <section className="py-14 px-4 sm:px-6 lg:px-10 bg-[#0D1B35]/30">
          <div className="max-w-7xl mx-auto">
            <span className="text-[#C9A84C] text-[10px] tracking-[0.38em] uppercase font-sans wicked-fadeIn">Accreditations</span>
            <h2 className="serif text-[clamp(1.6rem,3vw,2.5rem)] text-[#F0EDE6] font-light mt-3 mb-10 wicked-slideUp">
              Recognised for Excellence
            </h2>
            <BadgeRow badges={accreditations} height={60} />
          </div>
        </section>

        {/* ── 9. Compliance & Regulation ── */}
        <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-10">
          <div className="max-w-5xl mx-auto wicked-fadeIn">
            <span className="text-[#C9A84C] text-[10px] tracking-[0.38em] uppercase font-sans">Compliance &amp; Regulation</span>
            <h2 className="serif text-[clamp(1.8rem,3.5vw,2.8rem)] text-[#F0EDE6] font-light mt-3 leading-tight">
              How We Are Regulated
            </h2>
            <div className="w-10 h-px bg-[#C9A84C]/30 mt-4 mb-6" />
            <p className="text-[#8A8A94] text-[15px] leading-[1.9] font-sans">
              Abbott Solicitors LLP is authorised and regulated by the Solicitors Regulation Authority (SRA). All of our solicitors are subject to the SRA Standards and Regulations, including the SRA Principles, the Code of Conduct for Solicitors and the Code of Conduct for Firms.
            </p>
            <p className="text-[#8A8A94] text-[15px] leading-[1.9] font-sans mt-4">
              Our regulatory information — including our SRA ID and the rules that govern our practice — can be verified via the SRA&apos;s online register. We also operate within the firm-management standards of Lexcel and the Specialist Quality Mark (SQM).
            </p>
            <div className="mt-8">
              <a
                href="https://www.sra.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[#C9A84C] hover:text-[#E8C97A] text-[11px] tracking-[0.22em] uppercase font-sans transition-colors duration-300"
              >
                Verify on the SRA register
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path d="M1 5h12M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ── 10. Complaints & Feedback ── */}
        <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-10 bg-[#0D1B35]/30">
          <div className="max-w-5xl mx-auto wicked-fadeIn">
            <span className="text-[#C9A84C] text-[10px] tracking-[0.38em] uppercase font-sans">Complaints &amp; Feedback</span>
            <h2 className="serif text-[clamp(1.8rem,3.5vw,2.8rem)] text-[#F0EDE6] font-light mt-3 leading-tight">
              When Something Goes Wrong
            </h2>
            <div className="w-10 h-px bg-[#C9A84C]/30 mt-4 mb-6" />
            <p className="text-[#8A8A94] text-[15px] leading-[1.9] font-sans">
              If you are unhappy with our service, please raise your concerns first with the solicitor handling your matter. Our full complaints procedure sets out how we will investigate and respond. If your concerns are not resolved internally, you have the right to escalate the matter to the Legal Ombudsman.
            </p>
            <div className="mt-8">
              <Link
                href="/complaints"
                className="inline-flex items-center gap-3 text-[#C9A84C] hover:text-[#E8C97A] text-[11px] tracking-[0.22em] uppercase font-sans transition-colors duration-300"
              >
                Read our complaints procedure
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path d="M1 5h12M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </section>

        <PageCTA />
        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
