import PracticeTemplate from "@/components/PracticeTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Civil Litigation — Abbott Solicitors",
  description: "Civil litigation solicitors for contract disputes, debt recovery, professional negligence and injunctions. Free initial consultation.",
};

const icon = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" width="64" height="64">
    <path d="M24 4v40M12 16h24M8 10l8 12M40 10l-8 12M8 38h32"/>
    <circle cx="8" cy="10" r="3"/><circle cx="40" cy="10" r="3"/>
  </svg>
);

export default function CivilLitigationPage() {
  return (
    <PracticeTemplate
      overline="Civil Litigation"
      title="Civil Dispute"
      titleAccent="Resolution"
      subtitle="Strategic, cost-effective representation in commercial and civil disputes. From debt recovery to professional negligence, we pursue your claim with precision."
      intro="Civil disputes can be costly and disruptive if not managed strategically from the outset. Abbott Solicitors' litigation team combines robust court advocacy with a keen focus on early resolution, pursuing the most cost-effective route to a successful outcome. We represent both claimants and defendants across the County Court and High Court."
      services={[
        { title: "Contract Disputes",        desc: "Breach of contract claims, including construction, supply, services and commercial agreements." },
        { title: "Debt Recovery",            desc: "Efficient recovery of outstanding debts, including statutory demands, CCJs and enforcement." },
        { title: "Professional Negligence",  desc: "Claims against solicitors, accountants, surveyors, architects and other professionals for substandard advice." },
        { title: "Injunctions",              desc: "Emergency injunctive relief to freeze assets, prevent breaches or protect confidential information." },
        { title: "Property Disputes",        desc: "Boundary disputes, land registry applications and proprietary estoppel claims." },
        { title: "Landlord & Tenant",        desc: "Commercial lease disputes, forfeiture, dilapidations and rent recovery." },
      ]}
      process={[
        { step: "01", title: "Case Assessment",    desc: "We review the merits of your claim and advise on the most strategic and cost-effective route forward." },
        { step: "02", title: "Pre-Action Protocol",desc: "Letters before action and pre-action correspondence, often resolving disputes before court proceedings." },
        { step: "03", title: "Proceedings",        desc: "If settlement fails, we issue proceedings and manage every stage of the court timetable." },
        { step: "04", title: "Trial or Settlement",desc: "Robust advocacy at trial or negotiated settlement, whichever delivers the best result for you." },
      ]}
      whyUs={[
        "County Court and High Court experience",
        "Strategic pre-action negotiation focus",
        "Injunction and freezing order expertise",
        "Professional negligence specialists",
        "Transparent cost management throughout",
        "Available for both claimants and defendants",
      ]}
      icon={icon}
    />
  );
}
