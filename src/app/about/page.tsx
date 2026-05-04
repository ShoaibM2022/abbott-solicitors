import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Abbott Solicitors",
  description: "Learn about Abbott Solicitors — established 2012, SRA regulated, serving clients across the UK with integrity, precision and dedication.",
};

const values = [
  { title: "Integrity",   desc: "We uphold the highest ethical standards in every matter we handle, ensuring transparent and honest advice at all times." },
  { title: "Service",     desc: "Our clients are at the heart of everything we do. We listen, we understand, and we act swiftly to achieve the best outcomes." },
  { title: "Excellence",  desc: "We pursue excellence in legal representation, continuously developing our expertise across all practice areas." },
  { title: "Teamwork",    desc: "Our team of 18 professionals collaborates on every matter, drawing on collective expertise to serve each client." },
];

const accreditations = [
  { src: "/badge-sra.webp",           alt: "Community Legal Service",            w: 48,  h: 72 },
  { src: "/badge-legal.webp",          alt: "Resolution – First for Family Law",  w: 120, h: 33 },
  { src: "/badge-lawsoc-asylum.png",   alt: "Law Society – Immigration & Asylum", w: 88,  h: 48 },
  { src: "/badge-lawsoc-advanced.png", alt: "Law Society – Immigration Advanced",  w: 88,  h: 48 },
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
          subtitle="Established in 2012, Abbott Solicitors is an independent, SRA-regulated law firm with offices in Luton and Birmingham, serving clients across the UK and internationally."
          breadcrumbs={[{ label: "About Us" }]}
        />

        {/* ── Story ── */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="wicked-slideRight flex flex-col gap-6">
              <span className="text-[#C9A84C] text-[10px] tracking-[0.38em] uppercase font-sans">Our Story</span>
              <h2 className="serif text-[clamp(2rem,4vw,3.5rem)] text-[#F0EDE6] font-light leading-tight">
                Delivering Justice <em className="italic text-[#C9A84C]">Since 2012</em>
              </h2>
              <p className="text-[#8A8A94] text-[15px] leading-[1.9] font-sans">
                Abbott Solicitors was established as an independent firm committed to providing skilled, accessible legal advice. Within our first two years, we achieved both Lexcel and SQM accreditations — a testament to the quality of our processes and client care.
              </p>
              <p className="text-[#8A8A94] text-[15px] leading-[1.9] font-sans">
                We provide legal aid in Immigration, Housing and Family Law, ensuring that access to justice is not determined by financial means. We serve clients regardless of their background, and operate with full independence from any external pressures.
              </p>
              <div className="flex flex-wrap gap-6 pt-2">
                {[["2012", "Founded"], ["18", "Team Members"], ["2", "UK Offices"], ["500+", "Cases Won"]].map(([val, lbl]) => (
                  <div key={lbl} className="flex flex-col gap-1">
                    <span className="serif text-3xl text-[#C9A84C] font-light">{val}</span>
                    <span className="text-[#8A8A94] text-[10px] tracking-[0.25em] uppercase font-sans">{lbl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative image block */}
            <div className="wicked-slideLeft relative hidden lg:block">
              <div className="w-full aspect-[4/3] bg-[#0D1B35] border border-[#C9A84C]/15 flex items-center justify-center overflow-hidden">
                <Image src="/logo.png" alt="Abbott Solicitors" width={240} height={91} className="logo-filter opacity-20" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-1/2 h-1/2 border border-[#C9A84C]/20" />
            </div>
          </div>
        </section>

        {/* ── Values ── */}
        <section id="mission" className="py-16 px-4 sm:px-6 lg:px-10 bg-[#0D1B35]/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
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
                    <span className="serif text-lg text-[#C9A84C]">{i + 1}</span>
                  </div>
                  <h3 className="serif text-xl text-[#F0EDE6]">{title}</h3>
                  <div className="w-8 h-px bg-[#C9A84C]/30" />
                  <p className="text-[#8A8A94] text-sm leading-relaxed font-sans">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Mission / Vision ── */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-10 bg-[#0A0B0F]">
          <div className="max-w-5xl mx-auto flex flex-col gap-10">
            {[
              { label: "Our Vision",   text: "To provide our clients with skilled legal advice in a timely and efficient manner, ensuring excellence at every stage of their matter." },
              { label: "Our Mission",  text: "To deliver a network of innovative legal solutions, excellent legal representation and a dedication to quality customer service — accessible to all." },
              { label: "Our Commitment", text: "We serve every client regardless of colour, age, marital status, gender, sexual orientation, race, belief, religion or disability." },
            ].map(({ label, text }, i) => (
              <div key={label} className={`wicked-slideRight wicked-delay-${i + 1} flex flex-col sm:flex-row gap-6 border-b border-[#C9A84C]/10 pb-10 last:border-0 last:pb-0`}>
                <span className="shrink-0 text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase font-sans sm:w-40 pt-1">{label}</span>
                <p className="text-[#F0EDE6]/80 text-[15px] leading-[1.9] font-sans">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Accreditations ── */}
        <section className="py-14 px-4 sm:px-6 lg:px-10 bg-[#0D1B35]/30">
          <div className="max-w-7xl mx-auto">
            <span className="text-[#C9A84C] text-[10px] tracking-[0.38em] uppercase font-sans">Accreditations</span>
            <h2 className="serif text-[clamp(1.6rem,3vw,2.5rem)] text-[#F0EDE6] font-light mt-3 mb-10">
              Recognised for Excellence
            </h2>
            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
              {accreditations.map(({ src, alt, w, h }) => (
                <div key={src} className="bg-white px-5 py-3 flex items-center justify-center">
                  <Image src={src} alt={alt} width={w} height={h}
                    className="object-contain" style={{ height: 52, width: "auto" }} />
                </div>
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
