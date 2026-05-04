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

export default function ImmigrationPage() {
  return (
    <PracticeTemplate
      overline="Immigration Law"
      title="UK Immigration"
      titleAccent="Specialists"
      subtitle="Trusted immigration solicitors serving clients across the UK and internationally. We handle the full spectrum of UK visa, asylum and nationality matters with proven expertise."
      intro="Abbott Solicitors is recognised as one of the UK's leading firms for immigration and civil liberties law. Our solicitors have extensive experience across all areas of UK immigration law — from straightforward visa applications to complex asylum claims and judicial reviews. We provide both private and legally aided representation, ensuring access to expert advice regardless of your financial circumstances."
      services={[
        { title: "Entry Clearance Visas",        desc: "Spouse, fiancé, student, work, investor and visit visa applications prepared and submitted with precision." },
        { title: "Leave to Remain",               desc: "Extensions, variations and applications for indefinite leave to remain — including 10-year and long residence routes." },
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
    />
  );
}
