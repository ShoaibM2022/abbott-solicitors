import PracticeTemplate from "@/components/PracticeTemplate";
import CollapsibleServiceList from "@/components/CollapsibleServiceList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property Law & Conveyancing — Abbott Solicitors",
  description: "Expert property law and conveyancing solicitors. Residential and commercial conveyancing, lease extensions, title disputes and property development. Fixed fees.",
};

const serviceCategories = [
  {
    title: "Residential Conveyancing",
    items: [
      "Freehold Property Purchase",
      "Freehold Property Sale",
      "Leasehold Property Purchase",
      "Leasehold Property Sale",
      "New Build Purchase",
      "Shared Ownership Purchase",
      "Shared Ownership Staircasing",
      "Right to Buy",
      "Remortgage",
      "Transfer of Equity",
      "Equity Release",
      "Auction Property Purchase",
      "Buy to Let Conveyancing",
      "Help to Buy Redemption",
    ],
  },
  {
    title: "Leasehold, Title & Land Registry",
    items: [
      "Lease Extension (Statutory)",
      "Lease Extension (Informal)",
      "Collective Enfranchisement",
      "Deed of Variation",
      "Land Registry Application",
      "First Registration of Property",
      "Unregistered Land",
      "Property Title Review",
      "Property Searches",
      "Stamp Duty Land Tax (SDLT) Advice",
    ],
  },
  {
    title: "Commercial Property",
    items: [
      "Commercial Conveyancing",
      "Commercial Lease (New)",
      "Commercial Lease Renewal",
      "Licence to Assign",
      "Licence to Alter",
      "Property Development",
      "Option Agreement",
      "Overage Agreement",
      "Bridging Finance",
    ],
  },
  {
    title: "Property Disputes & Specialist Matters",
    items: [
      "Landlord and Tenant Property Matters",
      "Service Charge Disputes",
      "Boundary Disputes",
      "Easements and Rights of Way",
      "Adverse Possession",
      "Restrictive Covenants",
      "Declaration of Trust",
    ],
  },
];


const icon = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" width="64" height="64">
    {/* House */}
    <path d="M6 22L24 6l18 16v20a2 2 0 01-2 2H8a2 2 0 01-2-2V22z"/>
    {/* Door */}
    <rect x="18" y="28" width="12" height="14" rx="1"/>
    {/* Key head */}
    <circle cx="38" cy="14" r="5"/>
    {/* Key shaft */}
    <path d="M33 14H20"/>
    {/* Key teeth */}
    <path d="M24 14v4M28 14v3"/>
  </svg>
);

export default function ConveyancingPage() {
  return (
    <PracticeTemplate
      overline="Property Law & Conveyancing"
      title="Property Law &"
      titleAccent="Conveyancing"
      subtitle="Efficient, transparent conveyancing for residential and commercial property transactions. We handle your purchase, sale or remortgage from exchange to completion."
      intro="Buying or selling a property is one of the most significant transactions of your life. Abbott Solicitors' conveyancing team provides a thorough, efficient service, keeping you informed at every stage and managing the full legal process on your behalf. Our fixed fees and transparent pricing mean no unexpected costs."
      services={[
        { title: "Residential Purchase",    desc: "Full legal representation for property purchases, including searches, enquiries, exchange and completion." },
        { title: "Residential Sale",        desc: "Handling all legal aspects of your property sale, from draft contracts through to receipt of funds." },
        { title: "Remortgage",              desc: "Efficient remortgage conveyancing, liaising with your new lender and updating the Land Registry." },
        { title: "Transfer of Equity",      desc: "Adding or removing a party from a property title, often required on relationship breakdown or inheritance." },
        { title: "Lease Extensions",        desc: "Formal and informal lease extension routes for leasehold properties, protecting the value of your home." },
        { title: "Commercial Property",     desc: "Purchases, sales and leases of commercial premises, including due diligence and title investigation." },
      ]}
      process={[
        { step: "01", title: "Instruction",        desc: "We take your instructions, confirm our fees and begin the legal title investigation immediately." },
        { step: "02", title: "Searches & Enquiries", desc: "Local authority, drainage and environmental searches are ordered and seller's enquiries raised." },
        { step: "03", title: "Exchange",           desc: "Once all parties are satisfied, contracts are exchanged and a completion date agreed." },
        { step: "04", title: "Completion",         desc: "Funds transferred, keys released and Land Registry updated. Your transaction is complete." },
      ]}
      whyUs={[
        "Fixed fees with no hidden charges",
        "Average 4–6 week timeline for residential transactions",
        "Dedicated conveyancer assigned to your matter",
        "Lender panel approved: all major UK lenders accepted",
        "Electronic case management with real-time updates",
        "Both Luton and Birmingham offices",
      ]}
      icon={icon}
    >
      <CollapsibleServiceList label="Property Law Services" categories={serviceCategories} />
    </PracticeTemplate>
  );
}
