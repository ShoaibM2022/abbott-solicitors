import PracticeTemplate from "@/components/PracticeTemplate";
import CollapsibleServiceList from "@/components/CollapsibleServiceList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Housing Law — Abbott Solicitors",
  description: "Expert housing law solicitors. Eviction defence, disrepair claims, unlawful eviction and homelessness appeals. Legal Aid available.",
};

const serviceCategories = [
  {
    title: "Possession Proceedings & Eviction Defence",
    items: [
      "Section 21 Notice (No-Fault Possession)",
      "Section 8 Notice (Ground-Based Possession)",
      "Accelerated Possession Proceedings",
      "Standard Possession Order",
      "Warrant of Possession",
      "Suspension of Warrant of Eviction",
      "Defence to Possession Claim",
    ],
  },
  {
    title: "Unlawful Eviction & Harassment",
    items: [
      "Unlawful Eviction Injunction",
      "Harassment by Landlord",
      "Re-entry to Property Order",
      "Damages for Unlawful Eviction",
      "Protection from Eviction Act 1977 Claims",
    ],
  },
  {
    title: "Housing Disrepair",
    items: [
      "Housing Disrepair Claim",
      "Damp and Mould Claims",
      "Structural Defects",
      "Heating, Gas and Electrical Defects",
      "Pest Infestation Claims",
      "Compensation for Personal Injury from Disrepair",
      "Local Authority Enforcement Action",
    ],
  },
  {
    title: "Homelessness",
    items: [
      "Homelessness Application (s193 Housing Act 1996)",
      "Homelessness Review (s202)",
      "Homelessness Appeal (s204 County Court)",
      "Priority Need Assessment",
      "Local Connection Disputes",
      "Intentional Homelessness Challenges",
      "Interim Accommodation Applications",
    ],
  },
  {
    title: "Social Housing",
    items: [
      "Allocation of Social Housing",
      "Housing Register Applications",
      "Social Housing Disputes",
      "Succession to Secure Tenancy",
      "Right to Buy",
      "Anti-Social Behaviour Injunction (ASBI)",
      "Demotion Orders",
    ],
  },
  {
    title: "Tenancy Agreements & Rights",
    items: [
      "Assured Shorthold Tenancy (AST) Advice",
      "Secure Tenancy Agreement Advice",
      "Assured Tenancy Agreement Advice",
      "Licence Agreement Advice",
      "Notice to Quit",
      "Tenancy Deposit Disputes",
      "Tenancy Deposit Scheme (TDS) Compliance",
    ],
  },
  {
    title: "Rent & Housing Benefit",
    items: [
      "Rent Arrears",
      "Rent Repayment Order (RRO)",
      "Housing Benefit Disputes",
      "Universal Credit — Housing Element",
      "Local Housing Allowance (LHA) Issues",
      "Overpayment of Housing Benefit Challenges",
    ],
  },
  {
    title: "Leasehold & Service Charges",
    items: [
      "Service Charge Disputes",
      "Leasehold Enfranchisement",
      "Statutory Lease Extension",
      "Right to Manage",
      "Houses in Multiple Occupation (HMO)",
      "Freeholder Disputes",
      "First-Tier Tribunal (Property Chamber) Proceedings",
    ],
  },
  {
    title: "Boundary & Neighbour Disputes",
    items: [
      "Boundary Disputes",
      "Neighbour Disputes",
      "Party Wall Matters",
      "Easements and Rights of Way",
      "Nuisance and Trespass",
    ],
  },
];


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
      intro="Housing law issues can escalate rapidly. An eviction notice or a hazardous property can upend your life overnight. Abbott Solicitors provides urgent, effective legal advice for tenants, homeowners and people facing homelessness. We hold Legal Aid contracts in housing law, meaning we can often act for eligible clients at no cost."
      services={[
        { title: "Eviction Defence",           desc: "Responding to possession proceedings, whether Section 21 or Section 8 notices, and preventing unlawful eviction." },
        { title: "Disrepair Claims",            desc: "Compelling landlords to carry out repairs and claiming compensation for properties in poor condition." },
        { title: "Unlawful Eviction",           desc: "Emergency injunctions to reinstate tenants who have been unlawfully evicted or harassed by landlords." },
        { title: "Homelessness Appeals",        desc: "Challenging Local Authority homelessness decisions, including reviews and statutory appeals." },
        { title: "Housing Benefit Disputes",   desc: "Challenging Housing Benefit decisions and overpayment demands that threaten your tenancy." },
        { title: "Leasehold Disputes",          desc: "Service charge challenges, lease extension disputes and issues with freeholders." },
      ]}
      process={[
        { step: "01", title: "Urgent Assessment", desc: "Housing crises need fast action. Contact us for an immediate assessment; we can often advise the same day." },
        { step: "02", title: "Legal Aid Check",   desc: "We assess Legal Aid eligibility before any costs are incurred, so eligible clients pay nothing." },
        { step: "03", title: "Action",            desc: "Emergency applications, court filings or landlord negotiations, whichever is most effective." },
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
    >
      <CollapsibleServiceList label="Housing Law Services" categories={serviceCategories} />
    </PracticeTemplate>
  );
}
