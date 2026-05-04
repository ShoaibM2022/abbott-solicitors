import PracticeTemplate from "@/components/PracticeTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Injury — Abbott Solicitors",
  description: "No win no fee personal injury solicitors. Road traffic accidents, workplace injuries, clinical negligence and more. Free consultation.",
};

const icon = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" width="64" height="64">
    <path d="M4 20h16l4-12 4 24 4-12h12"/><path d="M24 36v8M20 44h8" strokeWidth="1.2"/>
  </svg>
);

export default function PersonalInjuryPage() {
  return (
    <PracticeTemplate
      overline="Personal Injury"
      title="Personal Injury"
      titleAccent="Claims"
      subtitle="No win, no fee representation for those injured through no fault of their own. We pursue maximum compensation for injuries caused by accidents, negligence and unsafe conditions."
      intro="If you have been injured due to someone else's negligence, you may be entitled to significant compensation. Abbott Solicitors' personal injury team operates on a no win, no fee basis — meaning you face no financial risk in bringing a claim. We investigate every aspect of your case to maximise your settlement."
      services={[
        { title: "Road Traffic Accidents",   desc: "Claims for drivers, passengers, cyclists and pedestrians injured in road traffic collisions." },
        { title: "Workplace Injuries",       desc: "Employer liability claims for injuries caused by unsafe working conditions or failure to provide PPE." },
        { title: "Clinical Negligence",      desc: "Medical negligence claims against hospitals, GPs and other healthcare providers for substandard care." },
        { title: "Slip, Trip & Fall",        desc: "Occupier liability claims for injuries caused by dangerous or poorly maintained premises." },
        { title: "Industrial Disease",       desc: "Claims for asbestos exposure, vibration white finger and other occupational diseases." },
        { title: "Fatal Accident Claims",    desc: "Bereavement claims and dependency claims following a fatal accident — handled with the utmost sensitivity." },
      ]}
      process={[
        { step: "01", title: "Free Assessment",    desc: "We assess your claim for free and advise whether a no win, no fee conditional fee agreement is appropriate." },
        { step: "02", title: "Investigation",      desc: "Evidence gathered, medical records obtained and liability investigated thoroughly." },
        { step: "03", title: "Negotiation",        desc: "We negotiate robustly with the defendant's insurers to achieve the maximum possible settlement." },
        { step: "04", title: "Compensation",       desc: "Settlement paid — or if necessary, proceedings issued and your case taken to trial." },
      ]}
      whyUs={[
        "No win, no fee — zero financial risk to you",
        "Specialist clinical negligence solicitors",
        "Road traffic accident experts",
        "Maximum compensation focus on every case",
        "Free initial consultation — 15 minutes",
        "UK-wide service including virtual appointments",
      ]}
      icon={icon}
    />
  );
}
