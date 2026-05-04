import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Abbott Solicitors",
  description: "Get in touch with Abbott Solicitors. Offices in Luton and Birmingham. Free 15-minute initial consultations available.",
};

const offices = [
  {
    city: "Luton",
    address: "Abbott House, Unit 9\n729 Capability Green\nLuton, Bedfordshire LU1 3LU",
    tel: "+44 (0) 1582 737952",
    fax: "+44 (0) 1582 737953",
    mobile: "+44 (0) 7786 757972",
  },
  {
    city: "Birmingham",
    address: "443–465 Coventry Road\nSmall Heath\nBirmingham B10 0TJ",
    tel: "+44 (0) 121 773 3558",
    fax: "+44 (0) 158 273 7953",
    mobile: "+44 (0) 7483 119915",
  },
];

export default function ContactPage() {
  return (
    <SmoothScrollProvider>
      <main className="bg-[#0A0B0F] min-h-screen text-[#F0EDE6]">
        <Navbar />

        <PageHero
          overline="Get In Touch"
          title="We're Here"
          titleAccent="To Help"
          subtitle="Free 15-minute initial consultations available across Immigration, Family Law, Housing, Employment and Civil Litigation — in person or virtually."
          breadcrumbs={[{ label: "Contact" }]}
        />

        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Contact form */}
            <div className="wicked-slideRight flex flex-col gap-6">
              <span className="text-[#C9A84C] text-[10px] tracking-[0.38em] uppercase font-sans">Send a Message</span>
              <h2 className="serif text-[clamp(1.8rem,4vw,2.8rem)] text-[#F0EDE6] font-light">
                Book a Free Consultation
              </h2>
              <ContactForm />
            </div>

            {/* Office info */}
            <div className="wicked-slideLeft flex flex-col gap-10">
              <span className="text-[#C9A84C] text-[10px] tracking-[0.38em] uppercase font-sans">Our Offices</span>
              {offices.map(({ city, address, tel, fax, mobile }) => (
                <div key={city} className="glass-card p-7 flex flex-col gap-4">
                  <h3 className="serif text-2xl text-[#F0EDE6]">{city} Office</h3>
                  <div className="w-10 h-px bg-[#C9A84C]/30" />
                  <p className="text-[#8A8A94] text-sm font-sans leading-relaxed whitespace-pre-line">{address}</p>
                  <div className="flex flex-col gap-2 pt-2">
                    {[{ lbl: "Tel", val: tel }, { lbl: "Fax", val: fax }, { lbl: "Mobile / WhatsApp", val: mobile }].map(({ lbl, val }) => (
                      <div key={lbl} className="flex items-center gap-3">
                        <span className="text-[#C9A84C] text-[10px] tracking-[0.2em] uppercase font-sans w-28">{lbl}</span>
                        <a href={`tel:${val.replace(/\s/g,"")}`} className="text-[#F0EDE6]/80 text-sm font-sans hover:text-[#C9A84C] transition-colors">{val}</a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Free consultation note */}
              <div className="border border-[#C9A84C]/20 p-5 flex flex-col gap-2">
                <span className="text-[#C9A84C] text-[10px] tracking-[0.25em] uppercase font-sans">Free Initial Consultation</span>
                <p className="text-[#8A8A94] text-sm leading-relaxed font-sans">
                  We offer a free 15-minute initial consultation for Immigration, Personal Injury, Family Law, Housing Law, Employment and Civil Litigation matters.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
