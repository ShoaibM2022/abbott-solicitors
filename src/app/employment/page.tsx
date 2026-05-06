import PracticeTemplate from "@/components/PracticeTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Employment Law — Abbott Solicitors",
  description: "Employment law solicitors. Unfair dismissal, discrimination, settlement agreements, TUPE and whistleblowing. Free consultation.",
};

const icon = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" width="64" height="64">
    <rect x="4" y="16" width="40" height="26" rx="3"/>
    <path d="M16 16v-4a8 8 0 0116 0v4M24 28v6M20 28h8"/>
  </svg>
);

export default function EmploymentPage() {
  return (
    <PracticeTemplate
      overline="Employment Law"
      title="Employment Law"
      titleAccent="Specialists"
      subtitle="Protecting employees' rights across every stage of the employment relationship, from contracts and disputes through to tribunal representation."
      intro="Employment law is complex and fast-moving. Whether you have been unfairly dismissed, subjected to workplace discrimination or are facing redundancy, Abbott Solicitors' employment team will advise you clearly on your rights and pursue the strongest possible outcome on your behalf."
      services={[
        { title: "Unfair Dismissal",          desc: "Tribunal claims for employees dismissed without fair reason or procedure, including constructive dismissal." },
        { title: "Discrimination Claims",     desc: "Claims based on age, sex, race, disability, religion, sexual orientation and other protected characteristics." },
        { title: "Settlement Agreements",     desc: "Reviewing, negotiating and advising on settlement agreements (formerly compromise agreements) offered by employers." },
        { title: "TUPE",                      desc: "Advice on Transfer of Undertakings, protecting your rights when a business or contract is transferred." },
        { title: "Whistleblowing",            desc: "Protected disclosure claims for employees who have suffered detriment after raising a qualifying concern." },
        { title: "Redundancy",               desc: "Ensuring fair redundancy selection and payment, and challenging unfair redundancy procedures." },
      ]}
      process={[
        { step: "01", title: "Free Consultation",   desc: "Understand your situation and your rights. A free 15-minute consultation with one of our employment solicitors." },
        { step: "02", title: "Early Conciliation",  desc: "We notify ACAS and explore early settlement where appropriate before issuing tribunal proceedings." },
        { step: "03", title: "Tribunal Claim",      desc: "If settlement is not achieved, we prepare and file a detailed Employment Tribunal claim on your behalf." },
        { step: "04", title: "Hearing",             desc: "Our advocates represent you at the full tribunal hearing, presenting your case with clarity and force." },
      ]}
      whyUs={[
        "Experienced employment tribunal advocates",
        "Fast turnaround: tribunal time limits are strict",
        "Settlement agreement specialists",
        "Discrimination law expertise across all protected characteristics",
        "ACAS early conciliation managed on your behalf",
        "Fixed fee and hourly rate options available",
      ]}
      icon={icon}
    />
  );
}
