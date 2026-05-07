import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Abbott Solicitors",
  description: "Abbott Solicitors privacy and data protection policy. How we collect, use and protect your personal information.",
};

const sections = [
  {
    title: "1. Who We Are",
    body: `Abbott Solicitors is a law firm authorised and regulated by the Solicitors Regulation Authority (SRA). Our principal office is at Abbott House, Unit 9, 729 Capability Green, Luton, Bedfordshire LU1 3LU.

For the purposes of the General Data Protection Regulation (GDPR) and the Data Protection Act 2018, Abbott Solicitors is the data controller of personal information collected through this website or in the course of providing legal services.`,
  },
  {
    title: "2. What Information We Collect",
    body: `We may collect and process the following personal data:

• Identity data: name, title, date of birth, nationality.
• Contact data: address, email address, telephone numbers.
• Financial data: bank account and payment card details where required for billing.
• Case data: details of your legal matter, correspondence, and documents you provide.
• Enquiry data: information you submit through our website contact form.
• Marketing data: your preferences in receiving marketing from us.`,
  },
  {
    title: "3. How We Use Your Information",
    body: `We use your personal data to:

• Provide legal services and advice you have instructed us to carry out.
• Comply with our legal and regulatory obligations, including anti-money laundering checks.
• Communicate with you about your matter, our services, and important updates.
• Send you marketing communications where you have provided consent or where we have a legitimate interest to do so.

The legal bases we rely on are: performance of a contract, compliance with a legal obligation, legitimate interests, and consent (where applicable).`,
  },
  {
    title: "4. Sharing Your Information",
    body: `We may share your personal data with:

• Courts, tribunals, and regulatory bodies as required by your legal matter.
• Third-party service providers (e.g. IT support, document management) who process data on our behalf under strict data processing agreements.
• Barristers and experts instructed in your case.
• HM Revenue & Customs, the SRA, and other regulators where required by law.

We will never sell your personal data to third parties for marketing purposes.`,
  },
  {
    title: "5. Data Retention",
    body: `We retain client files for a minimum of six years after the conclusion of the matter, in accordance with our professional obligations. Website enquiry data is retained for 12 months unless you become a client, in which case it forms part of your client file.`,
  },
  {
    title: "6. Your Rights",
    body: <>{"Under GDPR you have the right to:\n\n• Access the personal data we hold about you.\n• Rectify inaccurate data.\n• Erase your data in certain circumstances.\n• Restrict or object to processing.\n• Data portability.\n• Withdraw consent at any time where processing is based on consent.\n\nTo exercise any of these rights, please contact us in writing at our Luton office or by email at "}<a href="mailto:info@abbottsolicitors.com" className="text-[#C9A84C] hover:text-[#E8C97A] transition-colors">info@abbottsolicitors.com</a>{"."}</>,
  },
  {
    title: "7. Cookies and Third-Party Content",
    body: `Our website does not use analytics, advertising, or tracking cookies. Only cookies strictly necessary for core functionality are set by our own domain.

We embed a third-party reviews widget supplied by ReviewSolicitors. When you interact with that widget, ReviewSolicitors may set cookies on its own domain (reviewsolicitors.co.uk); please refer to ReviewSolicitors' own privacy policy for details. We have no access to data collected by them.

You can control cookies at any time through your browser settings.`,
  },
  {
    title: "8. Security",
    body: `We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, accidental loss, destruction or damage. All data transmitted through our website is encrypted using TLS.`,
  },
  {
    title: "9. Changes to This Policy",
    body: `We may update this privacy policy from time to time. The current version will always be available on this page. This policy was last reviewed in May 2025.`,
  },
  {
    title: "10. Complaints",
    body: <>{"If you are unhappy with how we have handled your personal data, you have the right to lodge a complaint with the Information Commissioner's Office (ICO) at "}<a href="https://www.ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#C9A84C] hover:text-[#E8C97A] transition-colors">www.ico.org.uk</a>{" or by calling "}<a href="tel:+443031231113" className="text-[#C9A84C] hover:text-[#E8C97A] transition-colors">0303 123 1113</a>{". We would, however, appreciate the opportunity to address your concerns first — please contact us directly."}</>,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <SmoothScrollProvider>
      <main className="bg-[#0A0B0F] min-h-screen text-[#F0EDE6]">
        <Navbar />

        <PageHero
          overline="Legal"
          title="Privacy"
          titleAccent="Policy"
          subtitle="How Abbott Solicitors collects, uses and protects your personal information in accordance with GDPR and the Data Protection Act 2018."
          breadcrumbs={[{ label: "Privacy Policy" }]}
        />

        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl mx-auto flex flex-col gap-10">
            {sections.map(({ title, body }) => (
              <div key={title} className="wicked-fadeIn flex flex-col gap-3">
                <h2 className="serif text-2xl text-[#F0EDE6] font-light">{title}</h2>
                <div className="w-8 h-px bg-[#C9A84C]/30" />
                <p className="text-[#8A8A94] text-base font-sans leading-relaxed whitespace-pre-line">{body}</p>
              </div>
            ))}

            <div className="border border-[#C9A84C]/20 p-6 flex flex-col gap-2 mt-4">
              <span className="text-[#C9A84C] text-[10px] tracking-[0.25em] uppercase font-sans">Contact Our Data Protection Lead</span>
              <p className="text-[#8A8A94] text-base font-sans leading-relaxed">
                Abbott Solicitors, Abbott House, Unit 9, 729 Capability Green, Luton, Bedfordshire LU1 3LU<br />
                Email: <a href="mailto:info@abbottsolicitors.com" className="text-[#C9A84C] hover:text-[#E8C97A] transition-colors">info@abbottsolicitors.com</a><br />
                Tel: <a href="tel:+441582737952" className="text-[#C9A84C] hover:text-[#E8C97A] transition-colors">+44 (0) 1582 737952</a>
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
