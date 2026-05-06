import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team — Abbott Solicitors",
  description: "Meet the experienced legal team at Abbott Solicitors — barristers, solicitors, caseworkers and support staff dedicated to your case.",
};

const seniorPartners = [
  { name: "Mr Abdul Razzaque Mirani", role: "Barrister · Consultant · Senior Partner",    initial: "AM" },
  { name: "Mr Adnan Saeed",           role: "Barrister · Consultant · Senior Partner",    initial: "AS" },
  { name: "Mr Abid Islam",            role: "Solicitor Advocate · Senior Partner",         initial: "AI" },
  { name: "Mr Faisal Mehmood",        role: "Barrister · Consultant · Mediator · Senior Partner", initial: "FM" },
];

const solicitors = [
  { name: "Mr Asim Mustafa",          role: "Solicitor · Partner",    initial: "AM" },
  { name: "Ms Syeda Anika Madni",     role: "Solicitor",              initial: "SA" },
  { name: "Ms Elona Onibere",         role: "Solicitor",              initial: "EO" },
  { name: "Mr Mohammed Awais Ali",    role: "Solicitor",              initial: "MA" },
  { name: "Mr Shahsawar Dashti",      role: "Solicitor",              initial: "SD" },
  { name: "Umer Malik",               role: "Solicitor · Consultant", initial: "UM" },
  { name: "Ms Nageena Choudhry",      role: "Solicitor",              initial: "NC" },
];

const support = [
  { name: "Maniha Ahmad Khan",        role: "Supervisor · Senior Caseworker", initial: "MK" },
  { name: "Mahek Chaudhri",           role: "Senior Caseworker",             initial: "MC" },
  { name: "Ms Obatinuadeyo Olabimpe", role: "Senior Caseworker",             initial: "OO" },
  { name: "Ms Shuhela Begum",         role: "Senior Caseworker",             initial: "SB" },
  { name: "Mr Azhar Islam",           role: "Accountant",                    initial: "AI" },
  { name: "Mr Rizwan Saeed",          role: "Office Manager",                initial: "RS" },
];

const junior = [
  { name: "Miss Amna Farooq",         role: "Trainee Solicitor",  initial: "AF" },
  { name: "Mr Hamza Masood",          role: "Apprentice · Paralegal", initial: "HM" },
  { name: "Ms Marta Stopa",           role: "Apprentice · Paralegal", initial: "MS" },
  { name: "Miss Mariam Chakir",       role: "Paralegal",          initial: "MC" },
  { name: "Mr Amjad Khan",            role: "Paralegal",          initial: "AK" },
  { name: "Mr Ahmed Hayat",           role: "Barrister · Consultant", initial: "AH" },
  { name: "Mr Mohammed Samir Pasha",  role: "Barrister Consultant", initial: "MP" },
];

function MemberCard({ name, role, initial, gold = false }: { name: string; role: string; initial: string; gold?: boolean }) {
  return (
    <div className="glass-card wicked-slideUp p-6 flex flex-col gap-4 group">
      <div className={`w-14 h-14 flex items-center justify-center text-base tracking-widest font-sans font-medium
        ${gold ? "bg-[#C9A84C] text-[#0A0B0F]" : "border border-[#C9A84C]/30 text-[#C9A84C]"}`}>
        {initial}
      </div>
      <div>
        <h3 className="serif text-[1.05rem] text-[#F0EDE6] leading-snug group-hover:text-[#E8C97A] transition-colors duration-300">{name}</h3>
        <p className="text-[#8A8A94] text-[11px] tracking-[0.15em] uppercase font-sans mt-1">{role}</p>
      </div>
    </div>
  );
}

function TeamSection({ title, members, gold = false }: { title: string; members: typeof seniorPartners; gold?: boolean }) {
  return (
    <div className="mb-16 last:mb-0">
      <div className="flex items-center gap-4 mb-8">
        <span className="block w-6 h-px bg-[#C9A84C]" />
        <h2 className="serif text-[clamp(1.4rem,3vw,2rem)] text-[#F0EDE6] font-light">{title}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {members.map((m) => <MemberCard key={m.name} {...m} gold={gold} />)}
      </div>
    </div>
  );
}

export default function TeamPage() {
  return (
    <SmoothScrollProvider>
      <main className="bg-[#0A0B0F] min-h-screen text-[#F0EDE6]">
        <Navbar />

        <PageHero
          overline="The People Behind Your Case"
          title="Our"
          titleAccent="Expert Team"
          subtitle="A dedicated team of 18 legal professionals — barristers, solicitors, caseworkers and support staff — all committed to achieving the best outcome for you."
          breadcrumbs={[{ label: "Our Team" }]}
        />

        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <TeamSection title="Senior Partners" members={seniorPartners} gold />
            <TeamSection title="Solicitors & Partners" members={solicitors} />
            <TeamSection title="Support & Casework" members={support} />
            <TeamSection title="Paralegals, Trainees & Consultants" members={junior} />
          </div>
        </section>

        <PageCTA heading="Ready to Work with Our Team?" subtext="Book a free consultation and we'll match you with the right specialist for your matter." />
        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
