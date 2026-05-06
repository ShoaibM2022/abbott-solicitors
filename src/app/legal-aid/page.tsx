import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Aid — Abbott Solicitors",
  description: "Abbott Solicitors provides Legal Aid in Immigration, Housing and Family Law. Find out if you qualify and how we can help.",
};

const areas = [
  { title: "Immigration",   desc: "We provide legal aid for asylum claims, human rights applications and certain immigration appeals, ensuring everyone has access to proper representation." },
  { title: "Housing Law",   desc: "Legal aid is available for eviction proceedings, homelessness appeals and certain disrepair claims. We will assess your eligibility at no cost." },
  { title: "Family Law",    desc: "Domestic abuse cases, child arrangement orders and certain family proceedings may qualify for legal aid. We handle these matters with full sensitivity." },
];

const eligibility = [
  "Your income is below the Legal Aid Agency means test threshold",
  "Your case falls within a legally aided area of law",
  "Your case has sufficient merit (merits test)",
  "You are ordinarily resident in England or Wales",
];

export default function LegalAidPage() {
  return (
    <SmoothScrollProvider>
      <main className="bg-[#0A0B0F] min-h-screen text-[#F0EDE6]">
        <Navbar />

        <PageHero
          overline="Legal Aid Services"
          title="Access to Justice"
          titleAccent="For Everyone"
          subtitle="Abbott Solicitors is committed to providing Legal Aid across Immigration, Housing and Family Law, ensuring that financial circumstances never prevent you from obtaining proper legal representation."
          breadcrumbs={[{ label: "Legal Aid" }]}
        />

        {/* What is Legal Aid */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="wicked-slideRight flex flex-col gap-5">
              <span className="text-[#C9A84C] text-[10px] tracking-[0.38em] uppercase font-sans">What Is Legal Aid?</span>
              <h2 className="serif text-[clamp(1.8rem,4vw,3rem)] text-[#F0EDE6] font-light leading-tight">
                Government-Funded <em className="italic text-[#C9A84C]">Legal Help</em>
              </h2>
              <p className="text-[#8A8A94] text-[15px] leading-[1.9] font-sans">
                Legal Aid is government funding that allows people who cannot afford legal fees to access legal advice and representation. It is administered by the Legal Aid Agency (LAA) and is subject to both a means test (your financial circumstances) and a merits test (the strength of your case).
              </p>
              <p className="text-[#8A8A94] text-[15px] leading-[1.9] font-sans">
                Abbott Solicitors holds Legal Aid contracts in Immigration, Housing and Family Law. Our specialist team will assess your eligibility during a free initial consultation.
              </p>
            </div>

            {/* Eligibility */}
            <div className="wicked-slideLeft flex flex-col gap-5">
              <span className="text-[#C9A84C] text-[10px] tracking-[0.38em] uppercase font-sans">Eligibility Criteria</span>
              <h2 className="serif text-[clamp(1.8rem,4vw,3rem)] text-[#F0EDE6] font-light leading-tight">
                Do You <em className="italic text-[#C9A84C]">Qualify?</em>
              </h2>
              <p className="text-[#8A8A94] text-base leading-relaxed font-sans">You may be eligible for Legal Aid if:</p>
              <div className="flex flex-col gap-3">
                {eligibility.map((point, i) => (
                  <div key={i} className={`flex items-start gap-3 wicked-slideRight wicked-delay-${i + 1}`}>
                    <div className="wicked-bounceIn shrink-0 w-6 h-6 border border-[#C9A84C]/40 flex items-center justify-center mt-0.5">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4l3 3 5-6" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-[#8A8A94] text-base leading-relaxed font-sans">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Legal Aid areas */}
        <section className="py-16 px-4 sm:px-6 lg:px-10 bg-[#0D1B35]/30">
          <div className="max-w-7xl mx-auto">
            <span className="text-[#C9A84C] text-[10px] tracking-[0.38em] uppercase font-sans">Legal Aid Practice Areas</span>
            <h2 className="serif text-[clamp(1.8rem,4vw,3rem)] text-[#F0EDE6] font-light mt-3 mb-10">
              Where We Can Help
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {areas.map(({ title, desc }, i) => (
                <div key={title} className={`glass-card p-7 flex flex-col gap-4 wicked-slideUp wicked-delay-${i + 1}`}>
                  <div className="wicked-floater w-12 h-12 border border-[#C9A84C]/30 flex items-center justify-center">
                    <span className="serif text-3xl text-[#C9A84C]">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="serif text-2xl text-[#E8C97A]">{title}</h3>
                  <p className="text-[#8A8A94] text-base leading-relaxed font-sans">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-10">
          <div className="max-w-5xl mx-auto">
            <span className="text-[#C9A84C] text-[10px] tracking-[0.38em] uppercase font-sans">How To Apply</span>
            <h2 className="serif text-[clamp(1.8rem,4vw,3rem)] text-[#F0EDE6] font-light mt-3 mb-10">The Process</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { n: "01", t: "Free Consultation",       d: "Contact us to arrange a free 15-minute initial consultation. We will discuss your situation and assess whether legal aid may apply." },
                { n: "02", t: "Eligibility Assessment",  d: "We will carry out both a means test and merits test to confirm whether you qualify for Legal Aid funding." },
                { n: "03", t: "Representation Begins",   d: "Once eligibility is confirmed, your case is opened and our specialists begin working on your matter, fully funded." },
              ].map(({ n, t, d }) => (
                <div key={n} className="wicked-fadeIn flex flex-col gap-4">
                  <span className="serif text-5xl text-[#C9A84C]/20 font-light">{n}</span>
                  <h3 className="serif text-2xl text-[#F0EDE6]">{t}</h3>
                  <p className="text-[#8A8A94] text-base leading-relaxed font-sans">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PageCTA heading="Check Your Legal Aid Eligibility" subtext="Call us or book online for a free initial assessment. We will advise you straight away whether you qualify." />
        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
