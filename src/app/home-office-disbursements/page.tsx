import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Office Disbursements — Abbott Solicitors",
  description: "Understanding Home Office fees and disbursements for UK visa and immigration applications. Current fee schedule from Abbott Solicitors.",
};

const feeGroups = [
  {
    heading: "Leave to Remain & Further Leave",
    items: [
      { label: "Further Leave to Remain (main applicant)",      fee: "£1,258" },
      { label: "Further Leave to Remain (dependant)",           fee: "£1,258" },
      { label: "Indefinite Leave to Remain (settlement)",       fee: "£2,885" },
      { label: "ILR — 10-year long residence",                  fee: "£2,885" },
    ],
  },
  {
    heading: "Partner & Family Visas",
    items: [
      { label: "Spouse / Partner visa (entry clearance)",       fee: "£1,846" },
      { label: "Spouse / Partner — further leave to remain",    fee: "£1,258" },
      { label: "Adult Dependent Relative",                      fee: "£3,250" },
      { label: "Child dependant entry clearance",               fee: "£1,846" },
    ],
  },
  {
    heading: "Skilled Worker & Points-Based",
    items: [
      { label: "Skilled Worker visa (3 years or less)",         fee: "£719" },
      { label: "Skilled Worker visa (over 3 years)",            fee: "£1,423" },
      { label: "Health & Care Worker (up to 3 years)",          fee: "£284" },
      { label: "Graduate visa",                                 fee: "£822" },
      { label: "Student visa (inside UK)",                      fee: "£524" },
    ],
  },
  {
    heading: "Nationality & Citizenship",
    items: [
      { label: "Naturalisation as a British citizen",           fee: "£1,580" },
      { label: "Registration as a British citizen (adult)",     fee: "£1,431" },
      { label: "Registration as a British citizen (child)",     fee: "£1,214" },
      { label: "British National (Overseas) — BN(O) visa",      fee: "£180" },
    ],
  },
  {
    heading: "Priority & Super-Priority Services",
    items: [
      { label: "Priority service (5 working days)",             fee: "£500" },
      { label: "Super Priority service (next working day)",     fee: "£1,000" },
      { label: "Premium lounge appointment",                    fee: "£500" },
    ],
  },
  {
    heading: "Biometric Enrolment",
    items: [
      { label: "Biometric Residence Permit (per person)",       fee: "£19.20" },
    ],
  },
];

export default function HomeOfficeDisbursementsPage() {
  return (
    <SmoothScrollProvider>
      <main className="bg-[#0A0B0F] min-h-screen text-[#F0EDE6]">
        <Navbar />

        <PageHero
          overline="Immigration"
          title="Home Office"
          titleAccent="Disbursements"
          subtitle="Current Home Office application fees payable directly to UKVI. These are government fees and are in addition to our professional charges."
          breadcrumbs={[
            { label: "Immigration", href: "/immigration" },
            { label: "Home Office Disbursements" },
          ]}
        />

        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-10">
          <div className="max-w-4xl mx-auto flex flex-col gap-12">

            <div className="wicked-fadeIn border border-[#C9A84C]/20 p-6 flex flex-col gap-2">
              <span className="text-[#C9A84C] text-[10px] tracking-[0.25em] uppercase font-sans">Important Notice</span>
              <p className="text-[#8A8A94] text-sm font-sans leading-relaxed">
                Home Office fees are set by the UK Government and are subject to change. The figures below reflect published UKVI fees as of 2025. Always confirm the current fee at{" "}
                <a
                  href="https://www.gov.uk/government/publications/visa-regulations-revised-table"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C9A84C] hover:text-[#E8C97A] transition-colors"
                >
                  gov.uk/visa-fees
                </a>{" "}
                before submitting an application. These fees are non-refundable unless the application is withdrawn before a decision is made.
              </p>
            </div>

            {feeGroups.map(({ heading, items }) => (
              <div key={heading} className="wicked-slideUp flex flex-col gap-4">
                <h2 className="serif text-2xl text-[#F0EDE6] font-light">{heading}</h2>
                <div className="w-10 h-px bg-[#C9A84C]/30" />
                <div className="flex flex-col divide-y divide-[#C9A84C]/10">
                  {items.map(({ label, fee }) => (
                    <div key={label} className="flex items-center justify-between py-3">
                      <span className="text-[#8A8A94] text-sm font-sans pr-4">{label}</span>
                      <span className="text-[#C9A84C] text-sm font-sans font-semibold whitespace-nowrap">{fee}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="wicked-fadeIn flex flex-col gap-4 pt-4">
              <h2 className="serif text-2xl text-[#F0EDE6] font-light">Immigration Health Surcharge</h2>
              <div className="w-10 h-px bg-[#C9A84C]/30" />
              <p className="text-[#8A8A94] text-sm font-sans leading-relaxed">
                Most applicants for leave to remain in the UK must also pay the Immigration Health Surcharge (IHS), which grants access to the NHS during your stay. As of 2024, the surcharge is <strong className="text-[#F0EDE6]">£1,035 per year</strong> for adults and <strong className="text-[#F0EDE6]">£776 per year</strong> for children and students. The total IHS is calculated based on the length of leave being granted.
              </p>
              <p className="text-[#8A8A94] text-sm font-sans leading-relaxed">
                The IHS must be paid online at{" "}
                <a
                  href="https://www.gov.uk/healthcare-immigration-application"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C9A84C] hover:text-[#E8C97A] transition-colors"
                >
                  gov.uk/immigration-health-surcharge
                </a>{" "}
                before submitting your visa application.
              </p>
            </div>

          </div>
        </section>

        <PageCTA />
        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
