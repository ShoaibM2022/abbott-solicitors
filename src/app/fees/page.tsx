import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Fees — Abbott Solicitors",
  description: "Transparent fee information for Abbott Solicitors. Immigration, conveyancing, employment and general fee structures — all clearly explained.",
};

const hourlyRates = [
  { grade: "Grade A", exp: "8+ years' experience", luton: "£282–£412/hr", birmingham: "£282–£566/hr" },
  { grade: "Grade B", exp: "4+ years' experience", luton: "£242–£330/hr", birmingham: "£242–£385/hr" },
  { grade: "Grade C", exp: "Other solicitors",      luton: "£196–£255/hr", birmingham: "£196–£299/hr" },
  { grade: "Grade D", exp: "Trainees & paralegals", luton: "£139–£183/hr", birmingham: "£139–£205/hr" },
];

const feeRanges = [
  {
    id: "immigration",
    title: "Immigration",
    colour: "#C9A84C",
    items: [
      { type: "British Nationality Applications",  range: "£2,000 – £5,000" },
      { type: "EEA Applications",                  range: "£1,700 – £4,000" },
      { type: "Work / Study Visas",                range: "£1,400 – £10,000" },
      { type: "Visit Visas",                       range: "£1,300 – £5,000" },
      { type: "Ancestry Visas",                    range: "£1,700 – £4,000" },
      { type: "Immigration Appeals",               range: "£4,000 – £13,000" },
    ],
  },
  {
    id: "conveyancing",
    title: "Conveyancing",
    colour: "#C9A84C",
    items: [
      { type: "Re-mortgage",                       range: "£800 – £2,000 + VAT" },
      { type: "Searches (disbursement)",            range: "£230 – £255 incl. VAT" },
      { type: "Lender Acting Fee",                  range: "£199 – £450 + VAT" },
      { type: "Land Registry Fee",                  range: "Variable by value" },
      { type: "Stamp Duty Land Tax",                range: "HMRC calculated" },
    ],
  },
  {
    id: "employment",
    title: "Employment",
    colour: "#C9A84C",
    items: [
      { type: "Hourly Rate",                        range: "£211 – £217 + VAT" },
      { type: "Simple Cases (fixed)",               range: "£1,000 – £2,000 + VAT" },
      { type: "Medium Complexity",                  range: "£2,000 – £3,000 + VAT" },
      { type: "High Complexity",                    range: "£3,000 – £5,000 + VAT" },
      { type: "Tribunal Attendance",                range: "£750/day + VAT" },
      { type: "Counsel",                            range: "£500 – £1,000/day + VAT" },
    ],
  },
  {
    id: "general",
    title: "General",
    colour: "#C9A84C",
    items: [
      { type: "Partner Rate (Immigration)",         range: "£201 – £217 + VAT" },
      { type: "Legal Counsel",                      range: "£295/hr + VAT" },
      { type: "Assistants / Trainees",              range: "£111/hr + VAT" },
      { type: "VAT Rate",                           range: "20%" },
    ],
  },
];

export default function FeesPage() {
  return (
    <SmoothScrollProvider>
      <main className="bg-[#0A0B0F] min-h-screen text-[#F0EDE6]">
        <Navbar />

        <PageHero
          overline="Transparent Pricing"
          title="Our Fees &"
          titleAccent="Charges"
          subtitle="We believe in complete transparency. All fee estimates are provided before work commences and are subject to annual review. VAT at 20% applies unless otherwise stated."
          breadcrumbs={[{ label: "Fees" }]}
        />

        {/* Hourly rates table */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <span className="text-[#C9A84C] text-[10px] tracking-[0.38em] uppercase font-sans">SRA Guideline Hourly Rates</span>
            <h2 className="serif text-[clamp(1.8rem,4vw,3rem)] text-[#F0EDE6] font-light mt-3 mb-10">
              Hourly Rate Structure
            </h2>
            <div className="wicked-slideUp overflow-x-auto">
              <table className="w-full text-base font-sans border-collapse">
                <thead>
                  <tr className="border-b border-[#C9A84C]/20">
                    <th className="text-left py-4 pr-6 text-[#C9A84C] text-[10px] tracking-[0.25em] uppercase font-normal">Grade</th>
                    <th className="text-left py-4 pr-6 text-[#C9A84C] text-[10px] tracking-[0.25em] uppercase font-normal">Experience</th>
                    <th className="text-left py-4 pr-6 text-[#C9A84C] text-[10px] tracking-[0.25em] uppercase font-normal">Luton</th>
                    <th className="text-left py-4 text-[#C9A84C] text-[10px] tracking-[0.25em] uppercase font-normal">Birmingham</th>
                  </tr>
                </thead>
                <tbody>
                  {hourlyRates.map(({ grade, exp, luton, birmingham }, i) => (
                    <tr key={grade} className={`border-b border-[#C9A84C]/8 hover:bg-[#C9A84C]/4 transition-colors wicked-slideRight wicked-delay-${i + 1}`}>
                      <td className="py-4 pr-6 text-[#F0EDE6] font-medium">{grade}</td>
                      <td className="py-4 pr-6 text-[#8A8A94]">{exp}</td>
                      <td className="py-4 pr-6 text-[#F0EDE6]">{luton}</td>
                      <td className="py-4 text-[#F0EDE6]">{birmingham}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-[#8A8A94] text-[11px] mt-4 font-sans">
                Luton uses National Grade 2 rates · Birmingham uses National Grade 1 rates · All fees exclude VAT at 20%
              </p>
            </div>
          </div>
        </section>

        {/* Fee range sections */}
        {feeRanges.map(({ id, title, items }) => (
          <section key={id} id={id} className="py-14 px-4 sm:px-6 lg:px-10 border-t border-[#C9A84C]/10">
            <div className="max-w-7xl mx-auto">
              <span className="text-[#C9A84C] text-[10px] tracking-[0.38em] uppercase font-sans">{title} Fees</span>
              <h2 className="serif text-[clamp(1.6rem,3vw,2.5rem)] text-[#F0EDE6] font-light mt-3 mb-8">
                {title} Fee Estimates
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map(({ type, range }) => (
                  <div key={type} className="glass-card wicked-fadeIn p-5 flex flex-col gap-2">
                    <span className="text-[#8A8A94] text-[12px] font-sans leading-snug">{type}</span>
                    <span className="serif text-2xl text-[#C9A84C]">{range}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* VAT notice */}
        <section className="py-12 px-4 sm:px-6 lg:px-10 bg-[#0D1B35]/30">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#8A8A94] text-base leading-relaxed font-sans">
              All fees are subject to annual review and may vary based on the complexity of individual matters.
              Personalised quotes are available upon request. VAT at 20% applies to all legal fees.
              Legal Aid may be available in certain matters — please enquire.
            </p>
          </div>
        </section>

        <PageCTA heading="Get a Personalised Quote" subtext="Contact us for a detailed fee estimate tailored to your specific circumstances." />
        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
