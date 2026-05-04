import PracticeTemplate from "@/components/PracticeTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Housing Law — Abbott Solicitors",
  description: "Expert housing law solicitors. Eviction defence, disrepair claims, unlawful eviction and homelessness appeals. Legal Aid available.",
};

const icon = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" width="64" height="64">
    <path d="M6 22L24 6l18 16v20H6z"/><rect x="17" y="30" width="14" height="12" rx="1"/>
  </svg>
);

export default function HousingLawPage() {
  return (
    <PracticeTemplate
      overline="Housing Law"
      title="Housing Law"
      titleAccent="& Tenant Rights"
      subtitle="Defending tenants and homeowners across the UK. From emergency eviction injunctions to disrepair claims, we protect your right to a safe and secure home."
      intro="Housing law issues can escalate rapidly — an eviction notice or a hazardous property can upend your life overnight. Abbott Solicitors provides urgent, effective legal advice for tenants, homeowners and people facing homelessness. We hold Legal Aid contracts in housing law, meaning we can often act for eligible clients at no cost."
      services={[
        { title: "Eviction Defence",           desc: "Responding to possession proceedings — whether Section 21 or Section 8 notices — and preventing unlawful eviction." },
        { title: "Disrepair Claims",            desc: "Compelling landlords to carry out repairs and claiming compensation for properties in poor condition." },
        { title: "Unlawful Eviction",           desc: "Emergency injunctions to reinstate tenants who have been unlawfully evicted or harassed by landlords." },
        { title: "Homelessness Appeals",        desc: "Challenging Local Authority homelessness decisions — including reviews and statutory appeals." },
        { title: "Housing Benefit Disputes",   desc: "Challenging Housing Benefit decisions and overpayment demands that threaten your tenancy." },
        { title: "Leasehold Disputes",          desc: "Service charge challenges, lease extension disputes and issues with freeholders." },
      ]}
      process={[
        { step: "01", title: "Urgent Assessment", desc: "Housing crises need fast action. Contact us for an immediate assessment — we can often advise same day." },
        { step: "02", title: "Legal Aid Check",   desc: "We assess Legal Aid eligibility before any costs are incurred, so eligible clients pay nothing." },
        { step: "03", title: "Action",            desc: "Emergency applications, court filings or landlord negotiations — whichever is most effective." },
        { step: "04", title: "Resolution",        desc: "From court hearings to negotiated settlements, we work until your housing is secured." },
      ]}
      whyUs={[
        "Legal Aid contracts for housing law matters",
        "Emergency same-day advice available",
        "Experience in county court possession proceedings",
        "Disrepair and unlawful eviction specialists",
        "Homelessness appeals against all Local Authorities",
        "Luton and Birmingham offices, virtual UK-wide",
      ]}
      legalAid
      icon={icon}
    />
  );
}
