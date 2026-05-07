import PracticeTemplate from "@/components/PracticeTemplate";
import CollapsibleServiceList from "@/components/CollapsibleServiceList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Criminal Defence — Abbott Solicitors",
  description: "24/7 criminal defence solicitors. Police station representation, Magistrates' Court, Crown Court, road traffic offences, fraud, drug offences and extradition. Call now.",
};

const serviceCategories = [
  {
    title: "Police Station & Early Advice",
    items: [
      "Police Station Representation",
      "Voluntary Police Interviews",
      "Police Interviews Under Caution",
      "Pre-Charge Advice",
      "Bail Applications",
    ],
  },
  {
    title: "Court Representation",
    items: [
      "Magistrates' Court Representation",
      "Crown Court Representation",
      "Youth Court Representation",
      "Criminal Appeals",
    ],
  },
  {
    title: "Road Traffic Offences",
    items: [
      "Road Traffic Offences",
      "Drink Driving Offences",
      "Drug Driving Offences",
      "Dangerous Driving",
      "Careless Driving",
      "Driving Whilst Disqualified",
      "Speeding Offences",
      "Totting Up Disqualification",
      "Exceptional Hardship Applications",
    ],
  },
  {
    title: "Violence, Harassment & Public Order",
    items: [
      "Assault Offences",
      "Common Assault",
      "Actual Bodily Harm (ABH)",
      "Grievous Bodily Harm (GBH)",
      "Domestic Abuse Allegations",
      "Harassment Allegations",
      "Public Order Offences",
    ],
  },
  {
    title: "Theft, Fraud & Financial Crime",
    items: [
      "Theft Offences",
      "Burglary",
      "Robbery",
      "Fraud Offences",
      "Benefit Fraud",
      "Money Laundering",
      "Proceeds of Crime Act (POCA) Proceedings",
      "Confiscation Proceedings",
    ],
  },
  {
    title: "Drugs, Weapons & Serious Offences",
    items: [
      "Drug Offences",
      "Possession of Controlled Drugs",
      "Possession with Intent to Supply",
      "Supply of Controlled Drugs",
      "Firearms Offences",
      "Sexual Offence Allegations",
      "Criminal Damage",
    ],
  },
  {
    title: "Orders, Breaches & Specialist Matters",
    items: [
      "Restraining Orders",
      "Breach of Court Orders",
      "Regulatory Offences",
      "Extradition Proceedings",
    ],
  },
];

const icon = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" width="64" height="64">
    <path d="M24 4l18 7v11c0 12-8 20-18 22C14 42 6 34 6 22V11z"/>
    <path d="M16 24l5 5 10-10" strokeWidth="1.5"/>
  </svg>
);

export default function CriminalDefencePage() {
  return (
    <PracticeTemplate
      overline="Criminal Defence"
      title="Criminal Defence"
      titleAccent="24/7"
      subtitle="Immediate, expert criminal defence representation at every stage, from the moment of arrest through to Crown Court trial. Available around the clock."
      intro="Being arrested or charged with a criminal offence is one of the most frightening experiences a person can face. Abbott Solicitors provides experienced, robust criminal defence representation available 24 hours a day, 7 days a week. Our solicitors attend police stations across the UK at short notice and advocate at all levels of court."
      services={[
        { title: "Police Station Representation", desc: "Immediate attendance at police stations, 24/7, to advise on interview under caution and exercise your right to silence." },
        { title: "Magistrates' Court",            desc: "Representation at first hearings, bail applications and summary trials in the Magistrates' Court." },
        { title: "Crown Court Advocacy",          desc: "Full Crown Court representation including jury trials, with experienced counsel instructed where appropriate." },
        { title: "Drug Offences",                 desc: "Defence of possession, possession with intent to supply and drug trafficking charges at all court levels." },
        { title: "Fraud & Financial Crime",       desc: "Complex fraud, money laundering and financial crime defence, including SFO and FCA investigations." },
        { title: "Bail Applications",             desc: "Urgent bail applications, opposing remand in custody and securing conditional bail where appropriate." },
      ]}
      process={[
        { step: "01", title: "Call Us: 24/7",     desc: "Contact us immediately on arrest or charge. We attend police stations across the UK at any hour." },
        { step: "02", title: "Police Station",    desc: "We advise you before and during police interview under caution, protecting you from self-incrimination." },
        { step: "03", title: "Court Preparation", desc: "We build your defence, take witness statements and instruct experts or counsel as required." },
        { step: "04", title: "Advocacy",          desc: "Robust representation at every court hearing, from first appearance through to trial verdict." },
      ]}
      whyUs={[
        "Available 24/7 for police station attendance",
        "Crown Court trial experience across all offence types",
        "Fraud and financial crime expertise",
        "Bail application specialists",
        "Legal Aid representation available in criminal matters",
        "Offices in Luton and Birmingham, nationwide coverage",
      ]}
      legalAid
      icon={icon}
    >
      <CollapsibleServiceList
        label="Criminal Defence Services"
        categories={serviceCategories}
      />
    </PracticeTemplate>
  );
}
