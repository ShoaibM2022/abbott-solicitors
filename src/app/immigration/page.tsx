import PracticeTemplate from "@/components/PracticeTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immigration Law — Abbott Solicitors",
  description: "Expert UK immigration solicitors. Visas, appeals, asylum, citizenship and indefinite leave to remain. Legal Aid available. Free consultation.",
};

const icon = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" width="64" height="64">
    <circle cx="24" cy="24" r="20"/><path d="M4 24h40M24 4a32 32 0 010 40M24 4a32 32 0 000 40"/>
  </svg>
);

const serviceCategories = [
  {
    title: "Entry Clearance & Visas",
    items: [
      "Tourist / Visit Visas",
      "Fiancé / Spouse Visa Application",
      "Family Visa Application",
      "Tier 4 Student Visa Application",
      "Graduate Visa",
      "Tier 2 Work Permit Application",
      "Tier 2 Intra-Company Transfer Visas",
      "Tier 2 Sports Person Visas",
      "Tier 1 Entrepreneur Visa Application",
      "Tier 1 Investor Visa Application",
      "Sole Representative Visa Applications",
      "Sponsorship Licence Applications",
      "Domestic Worker Visa Applications",
      "Charity Worker Visa",
      "Creative Worker Visa",
      "Government Authorised Exchange Visa",
      "Religious Worker Visa",
      "Seasonal Worker Visa",
      "Youth Mobility Scheme Visa",
      "Tier 5 Visas",
      "International Agreement Visa",
    ],
  },
  {
    title: "Leave to Remain & Settlement",
    items: [
      "Indefinite Leave to Remain (ILR)",
      "Permanent Residency",
      "10 Years Settlement Applications",
      "Long Residence Application",
      "Parent Settlement Application",
      "Domestic Violence Visa Application",
      "Victim of Modern Slavery",
    ],
  },
  {
    title: "EEA & European Rights",
    items: [
      "EEA Residence Card Applications",
      "EEA Extended Family Member Visa Applications",
      "EEA Retention of Right of Residence Applications",
      "EEA Visa Application — Appeal",
    ],
  },
  {
    title: "Asylum & Human Rights",
    items: [
      "Asylum and Human Rights Application",
      "Article 8 Human Rights Application",
      "Article 3 Human Rights Application",
      "Human Rights Law Advice",
      "Applications for Adoptions",
    ],
  },
  {
    title: "Appeals, Reviews & Judicial Review",
    items: [
      "Immigration Appeal",
      "Immigration Judicial Review",
      "Administrative Review",
      "Fiancé / Spouse Visa Application — Appeal",
      "Family Visa Application — Appeal",
      "Tier 1 Entrepreneur Visa Application — Appeal",
      "Tier 1 Investor Visa Application — Appeal",
      "Tier 2 Intra-Company Transfer Visas — Appeal",
      "Tier 2 Sports Person Visas — Appeal",
    ],
  },
  {
    title: "British Citizenship & Nationality",
    items: [
      "Naturalisation",
      "British Citizenship",
      "British Passport Applications",
    ],
  },
  {
    title: "Enforcement, Bail & Complex Matters",
    items: [
      "Deportation and Removal Injunctions",
      "Immigration Bail Application",
      "Temporary Admission / CIO Bail Application",
      "Immigration Advice on Complex Matters",
    ],
  },
  {
    title: "Premium Services",
    items: [
      "Super Premium Service",
      "Premium Service at PEO, Croydon",
    ],
  },
];

const Tick = () => (
  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" className="shrink-0 mt-[3px]">
    <path d="M1 4l3 3 5-6" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FullServiceList = (
  <section className="py-16 px-4 sm:px-6 lg:px-10 bg-[#0D1B35]/20 border-t border-[#C9A84C]/10">
    <div className="max-w-7xl mx-auto">
      <span className="text-[#C9A84C] text-[10px] tracking-[0.38em] uppercase font-sans">Comprehensive Coverage</span>
      <h2 className="serif text-[clamp(1.8rem,4vw,3rem)] text-[#F0EDE6] font-light mt-3 mb-10">
        Full Range of <em className="italic text-[#C9A84C]">Immigration Services</em>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceCategories.map(({ title, items }) => (
          <div key={title} className="flex flex-col gap-3">
            <h3 className="serif text-base text-[#E8C97A] tracking-wide">{title}</h3>
            <div className="w-6 h-px bg-[#C9A84C]/30" />
            <ul className="flex flex-col gap-1.5">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Tick />
                  <span className="text-[#8A8A94] text-sm font-sans leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default function ImmigrationPage() {
  return (
    <PracticeTemplate
      overline="Immigration Law"
      title="UK Immigration"
      titleAccent="Specialists"
      subtitle="Trusted immigration solicitors serving clients across the UK and internationally. We handle the full spectrum of UK visa, asylum and nationality matters with proven expertise."
      intro="Abbott Solicitors is recognised as one of the UK's leading firms for immigration and civil liberties law. Our solicitors have extensive experience across all areas of UK immigration law, from straightforward visa applications to complex asylum claims and judicial reviews. We provide both private and legally aided representation, ensuring access to expert advice regardless of your financial circumstances."
      services={[
        { title: "Entry Clearance Visas",        desc: "Spouse, fiancé, student, work, investor and visit visa applications prepared and submitted with precision." },
        { title: "Leave to Remain",               desc: "Extensions, variations and applications for indefinite leave to remain, including 10-year and long residence routes." },
        { title: "Asylum & Human Rights",         desc: "Compassionate and thorough representation for asylum seekers and human rights applicants under Article 3 and 8 ECHR." },
        { title: "Immigration Appeals",           desc: "Appeals to the First-tier Tribunal and Upper Tribunal, including out-of-country appeals and judicial reviews." },
        { title: "British Citizenship",           desc: "Naturalisation, registration, and British Overseas citizenship applications handled by our specialist team." },
        { title: "Deportation Defence",           desc: "Urgent injunctions, bail applications and full advocacy in deportation and removal proceedings." },
      ]}
      process={[
        { step: "01", title: "Free Consultation", desc: "A 15-minute initial assessment to understand your circumstances and identify the right immigration route." },
        { step: "02", title: "Case Strategy",     desc: "We review your full immigration history and design a tailored strategy to maximise your chances of success." },
        { step: "03", title: "Preparation",       desc: "All documents gathered, statements drafted and applications prepared to the highest standard." },
        { step: "04", title: "Submission & Follow-up", desc: "Application submitted and all Home Office correspondence monitored until a decision is received." },
      ]}
      whyUs={[
        "Recognised as a leading UK immigration law firm",
        "Legal Aid contracts in immigration and asylum",
        "Success across First-tier and Upper Tribunal appeals",
        "Team of specialist immigration solicitors and barristers",
        "Both Luton and Birmingham offices with virtual services",
        "Experienced in complex human rights and deportation cases",
      ]}
      legalAid
      icon={icon}
    >
      {FullServiceList}
    </PracticeTemplate>
  );
}
