import PracticeTemplate from "@/components/PracticeTemplate";
import CollapsibleServiceList from "@/components/CollapsibleServiceList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Family Law — Abbott Solicitors",
  description: "Sensitive and expert family law solicitors. Divorce, child arrangements, financial settlements and domestic abuse matters. Legal Aid available.",
};

const serviceCategories = [
  {
    title: "Divorce & Dissolution",
    items: [
      "Divorce Application (No-Fault Divorce)",
      "Judicial Separation",
      "Nullity of Marriage",
      "Dissolution of Civil Partnership",
      "Conditional Order (Decree Nisi)",
      "Final Order (Decree Absolute)",
      "Separation Agreement",
    ],
  },
  {
    title: "Financial Remedies & Orders",
    items: [
      "Financial Remedy Application",
      "Clean Break Order",
      "Consent Order",
      "Property Adjustment Order",
      "Lump Sum Order",
      "Pension Sharing Order",
      "Pension Attachment Order",
      "Spousal Maintenance Order",
      "Variation of Financial Order",
      "Matrimonial Home Rights Registration",
    ],
  },
  {
    title: "Children — Private Law",
    items: [
      "Child Arrangements Order (Residence)",
      "Child Arrangements Order (Contact)",
      "Specific Issue Order",
      "Prohibited Steps Order",
      "Parental Responsibility Agreement",
      "Parental Responsibility Order",
      "Change of Child's Name",
      "Relocation within the UK",
      "International Relocation Application",
    ],
  },
  {
    title: "Children — Public Law",
    items: [
      "Care Proceedings (Section 31 Children Act 1989)",
      "Emergency Protection Order (EPO)",
      "Child Assessment Order",
      "Supervision Order",
      "Placement Order",
      "Secure Accommodation Order",
      "Public Law Outline (PLO) Representation",
      "Kinship Care Arrangements",
    ],
  },
  {
    title: "Domestic Abuse & Protection Orders",
    items: [
      "Non-Molestation Order",
      "Occupation Order",
      "Domestic Violence Protection Order (DVPO)",
      "Forced Marriage Protection Order",
      "FGM Protection Order",
      "Harassment Injunction",
      "Undertakings & Injunctions",
    ],
  },
  {
    title: "Cohabitation & Property Disputes",
    items: [
      "TOLATA Claims (Trust of Land)",
      "Beneficial Interest Claims",
      "Declaration of Trust",
      "Cohabitation Agreement",
      "Property Disputes — Unmarried Couples",
    ],
  },
  {
    title: "Pre-nuptial & Relationship Agreements",
    items: [
      "Pre-Nuptial Agreement",
      "Post-Nuptial Agreement",
      "Deed of Separation",
      "Cohabitation Agreement",
    ],
  },
  {
    title: "Adoption & Special Guardianship",
    items: [
      "Adoption Application",
      "Step-Parent Adoption",
      "Special Guardianship Order",
      "Parental Order (Surrogacy)",
    ],
  },
  {
    title: "International Family Law",
    items: [
      "International Child Abduction (Hague Convention)",
      "Mirror Orders",
      "Overseas Divorce Recognition",
      "International Relocation of Children",
      "Foreign Maintenance Orders",
    ],
  },
  {
    title: "Financial Provision for Children",
    items: [
      "Schedule 1 Children Act 1989 Claims",
      "Child Maintenance Applications",
      "School Fees Orders",
      "Financial Provision for Disabled Children",
    ],
  },
];


const icon = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" width="64" height="64">
    <circle cx="16" cy="14" r="6"/><circle cx="32" cy="14" r="6"/>
    <path d="M4 42c0-7 5-12 12-12M32 30c7 0 12 5 12 12"/><circle cx="24" cy="34" r="6"/>
  </svg>
);

export default function FamilyLawPage() {
  return (
    <PracticeTemplate
      overline="Family Law"
      title="Family Law"
      titleAccent="Specialists"
      subtitle="Sensitive, expert legal advice for families navigating difficult times. We handle all aspects of family law with compassion, clarity and a focus on the best outcome for you and your children."
      intro="Family law matters are among the most emotionally challenging situations a person can face. At Abbott Solicitors, our experienced family law team provides clear, practical advice while treating every client with empathy and respect. We are Resolution members, committed to resolving family disputes in the most constructive way possible while robustly protecting your interests when necessary."
      services={[
        { title: "Divorce & Separation",         desc: "Guiding you through divorce proceedings, including no-fault divorce applications and decree absolute." },
        { title: "Child Arrangements",            desc: "Child arrangements orders covering where children live and time spent with each parent, focused on the child's best interests." },
        { title: "Financial Settlements",         desc: "Division of matrimonial assets, pension sharing, spousal maintenance and clean-break orders." },
        { title: "Domestic Abuse",                desc: "Emergency non-molestation orders and occupation orders to protect you and your children, legally aided where eligible." },
        { title: "Cohabitation Disputes",         desc: "Property disputes and financial claims for unmarried couples separating after cohabitation." },
        { title: "Prenuptial Agreements",         desc: "Drafting and reviewing pre-nuptial and post-nuptial agreements to protect your assets." },
      ]}
      process={[
        { step: "01", title: "Initial Consultation", desc: "A confidential discussion of your situation, your goals and your options. Free for 15 minutes." },
        { step: "02", title: "Strategy",             desc: "We identify the most appropriate route: negotiation, mediation or court proceedings." },
        { step: "03", title: "Negotiation",          desc: "Wherever possible, we resolve matters through negotiation to minimise conflict and cost." },
        { step: "04", title: "Court, If Necessary",  desc: "If court proceedings are required, our advocates represent you robustly at every hearing." },
      ]}
      whyUs={[
        "Resolution-accredited family law team",
        "Legal Aid available for domestic abuse cases",
        "Sensitive, non-confrontational approach",
        "Specialist child law and CAFCASS experience",
        "Virtual consultations available UK-wide",
        "Offices in Luton and Birmingham",
      ]}
      legalAid
      icon={icon}
    >
      <CollapsibleServiceList label="Family Law Services" categories={serviceCategories} />
    </PracticeTemplate>
  );
}
