import PracticeTemplate from "@/components/PracticeTemplate";
import CollapsibleServiceList from "@/components/CollapsibleServiceList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Injury Claims — Abbott Solicitors",
  description: "No win, no fee personal injury solicitors. Road traffic accidents, workplace injuries, medical negligence, serious injury and CICA claims. Free consultation.",
};

const serviceCategories = [
  {
    title: "Road Traffic Accident Claims",
    items: [
      "Car Accident Claims",
      "Motorcycle Accident Claims",
      "Cycling Accident Claims",
      "Pedestrian Accident Claims",
      "Passenger Accident Claims",
      "Uninsured Driver Claims",
      "Untraced Driver Claims",
      "Motor Insurers' Bureau (MIB) Claims",
    ],
  },
  {
    title: "Workplace Injury Claims",
    items: [
      "Accidents at Work",
      "Manual Handling Injury Claims",
      "Construction Accident Claims",
      "Industrial Disease Claims",
      "Asbestos and Mesothelioma Claims",
      "Vibration White Finger Claims",
      "Industrial Deafness Claims",
    ],
  },
  {
    title: "Public Liability & Other Accident Claims",
    items: [
      "Slips, Trips and Falls",
      "Public Liability Claims",
      "Occupiers' Liability Claims",
      "Defective Product Injury Claims",
      "Holiday Accident Claims",
      "Sports Injury Claims",
    ],
  },
  {
    title: "Serious & Catastrophic Injury Claims",
    items: [
      "Head Injury Claims",
      "Brain Injury Claims",
      "Spinal Injury Claims",
      "Amputation Claims",
      "Fatal Accident Claims",
      "Psychological Injury Claims",
    ],
  },
  {
    title: "Medical Negligence Claims",
    items: [
      "Medical Negligence Claims",
      "Dental Negligence Claims",
      "Hospital Negligence Claims",
      "GP Negligence Claims",
      "Care Home Negligence Claims",
      "Cosmetic Surgery Negligence Claims",
      "Surgical Error Claims",
      "Misdiagnosis Claims",
      "Birth Injury Claims",
    ],
  },
  {
    title: "Criminal Injury & Abuse Claims",
    items: [
      "Criminal Injuries Compensation Authority (CICA) Claims",
      "Abuse Claims",
      "Assault Injury Claims",
    ],
  },
];


const icon = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" width="64" height="64">
    {/* Monitor screen */}
    <rect x="4" y="6" width="40" height="28" rx="2"/>
    {/* ECG / heartbeat line */}
    <path d="M8 20h7l3-9 5 18 3-9h10" strokeWidth="1.4"/>
    {/* Stand neck */}
    <path d="M24 34v7"/>
    {/* Base */}
    <path d="M15 41h18"/>
  </svg>
);

export default function PersonalInjuryPage() {
  return (
    <PracticeTemplate
      overline="Personal Injury Claims"
      title="Personal Injury"
      titleAccent="Claims"
      subtitle="No win, no fee representation for those injured through no fault of their own. We pursue maximum compensation for injuries caused by accidents, negligence and unsafe conditions."
      intro="If you have been injured due to someone else's negligence, you may be entitled to significant compensation. Abbott Solicitors' personal injury team operates on a no win, no fee basis, meaning you face no financial risk in bringing a claim. We investigate every aspect of your case to maximise your settlement."
      services={[
        { title: "Road Traffic Accidents",   desc: "Claims for drivers, passengers, cyclists and pedestrians injured in road traffic collisions." },
        { title: "Workplace Injuries",       desc: "Employer liability claims for injuries caused by unsafe working conditions or failure to provide PPE." },
        { title: "Clinical Negligence",      desc: "Medical negligence claims against hospitals, GPs and other healthcare providers for substandard care." },
        { title: "Slip, Trip & Fall",        desc: "Occupier liability claims for injuries caused by dangerous or poorly maintained premises." },
        { title: "Industrial Disease",       desc: "Claims for asbestos exposure, vibration white finger and other occupational diseases." },
        { title: "Fatal Accident Claims",    desc: "Bereavement claims and dependency claims following a fatal accident, handled with the utmost sensitivity." },
      ]}
      process={[
        { step: "01", title: "Free Assessment",    desc: "We assess your claim for free and advise whether a no win, no fee conditional fee agreement is appropriate." },
        { step: "02", title: "Investigation",      desc: "Evidence gathered, medical records obtained and liability investigated thoroughly." },
        { step: "03", title: "Negotiation",        desc: "We negotiate robustly with the defendant's insurers to achieve the maximum possible settlement." },
        { step: "04", title: "Compensation",       desc: "Settlement paid. If necessary, proceedings are issued and your case taken to trial." },
      ]}
      whyUs={[
        "No win, no fee: zero financial risk to you",
        "Specialist clinical negligence solicitors",
        "Road traffic accident experts",
        "Maximum compensation focus on every case",
        "Free 15-minute initial consultation",
        "UK-wide service including virtual appointments",
      ]}
      icon={icon}
    >
      <CollapsibleServiceList label="Personal Injury Services" categories={serviceCategories} />
    </PracticeTemplate>
  );
}
