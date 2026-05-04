import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complaints — Abbott Solicitors",
  description: "Abbott Solicitors complaints procedure — how to raise a concern and our commitment to resolving issues fairly and promptly.",
};

export default function ComplaintsPage() {
  return (
    <SmoothScrollProvider>
      <main className="bg-[#0A0B0F] min-h-screen text-[#F0EDE6]">
        <Navbar />
        <PageHero
          overline="Complaints Procedure"
          title="Raising a"
          titleAccent="Concern"
          subtitle="We take all complaints seriously. Our complaints procedure ensures every concern is addressed fairly, promptly and professionally."
          breadcrumbs={[{ label: "About Us", href: "/about" }, { label: "Complaints" }]}
        />

        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl mx-auto flex flex-col gap-10">
            {[
              { step: "Step 1", title: "Contact Your Solicitor", body: "In the first instance, please raise your concern directly with the solicitor or caseworker handling your matter. Many issues can be resolved informally and quickly at this stage." },
              { step: "Step 2", title: "Formal Written Complaint", body: "If you remain unhappy, submit a formal written complaint to our Complaints Manager at Abbott Solicitors, Abbott House, Unit 9, 729 Capability Green, Luton LU1 3LU, or by email to complaints@abbottsolicitors.com." },
              { step: "Step 3", title: "Our Response", body: "We will acknowledge your complaint within 3 working days and aim to provide a full written response within 8 weeks of receipt." },
              { step: "Step 4", title: "Legal Ombudsman", body: "If you are not satisfied with our response, you may refer your complaint to the Legal Ombudsman within 6 months of our final response. Tel: 0300 555 0333 · legalombudsman.org.uk" },
              { step: "Step 5", title: "SRA Concerns", body: "If your concern relates to our conduct, you may also contact the Solicitors Regulation Authority (SRA) at sra.org.uk." },
            ].map(({ step, title, body }, i) => (
              <div key={step} className={`flex gap-6 wicked-slideRight wicked-delay-${i + 1}`}>
                <div className="shrink-0 flex flex-col items-center gap-2">
                  <div className="w-10 h-10 border border-[#C9A84C]/40 flex items-center justify-center">
                    <span className="serif text-lg text-[#C9A84C]">{i + 1}</span>
                  </div>
                  {i < 4 && <div className="w-px flex-1 bg-[#C9A84C]/12" />}
                </div>
                <div className="pb-8 flex flex-col gap-2">
                  <span className="text-[#C9A84C] text-[10px] tracking-[0.25em] uppercase font-sans">{step}</span>
                  <h3 className="serif text-xl text-[#F0EDE6]">{title}</h3>
                  <p className="text-[#8A8A94] text-sm leading-relaxed font-sans">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
