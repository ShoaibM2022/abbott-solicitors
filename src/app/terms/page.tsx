import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Business — Abbott Solicitors",
  description: "Abbott Solicitors terms of business — our client care standards, fees, and professional obligations.",
};

const sections = [
  {
    title: "1. Our Regulatory Status",
    body: `Abbott Solicitors is authorised and regulated by the Solicitors Regulation Authority (SRA). Our SRA number and further details are available on the SRA register at www.sra.org.uk. We are bound by the SRA Standards and Regulations, including the SRA Code of Conduct for Solicitors.`,
  },
  {
    title: "2. Scope of Retainer",
    body: `We will carry out the work described in our client care letter and any subsequent written instructions. Unless expressly agreed otherwise in writing, our retainer does not extend to advice on related matters, ongoing monitoring of your situation after the conclusion of your matter, or advice on the law of any jurisdiction other than England and Wales.`,
  },
  {
    title: "3. Our Charges",
    body: `Our fees are set out in your client care letter. Where we charge on a time-spent basis, our hourly rates and the fee earners who will work on your matter are detailed in that letter.

We will provide you with a cost estimate at the outset and update you if circumstances change that are likely to affect that estimate. All fees are exclusive of VAT (charged at the prevailing rate) and disbursements (third-party costs such as court fees and barrister's fees).`,
  },
  {
    title: "4. Payment",
    body: `We may require a payment on account of costs before commencing or continuing work. Invoices are payable within 14 days of issue unless otherwise agreed. We reserve the right to charge interest on overdue invoices at 8% per annum above the Bank of England base rate.

We accept payment by bank transfer, debit card, and credit card. We do not accept cash payments in excess of £500.`,
  },
  {
    title: "5. Anti-Money Laundering",
    body: `We are required by law to verify the identity of all clients. We will ask you to provide certified copies of identity documents before we can commence work. We may also conduct electronic verification checks. We are required to report suspicions of money laundering to the National Crime Agency and cannot inform you if such a report is made.`,
  },
  {
    title: "6. Confidentiality",
    body: `We will keep all information relating to your matter confidential except where we are required by law or our professional obligations to disclose it, or where you give us consent to share it. Our duty of confidentiality continues after the conclusion of your matter.`,
  },
  {
    title: "7. Data Protection",
    body: `We process your personal data as described in our Privacy Policy, available at abbottsolicitors.com/privacy-policy. By instructing us you consent to our processing your personal data for the purposes described in that policy.`,
  },
  {
    title: "8. Conflict of Interest",
    body: `We will carry out a conflict check before accepting instructions. If a conflict arises during a matter we will advise you immediately and take appropriate steps, which may include ceasing to act for one or more parties.`,
  },
  {
    title: "9. Termination",
    body: `You may terminate our retainer at any time by written notice. We may cease to act for you if you fail to pay our invoices, provide instructions that would cause us to breach our professional obligations, or in other circumstances permitted by the SRA Code of Conduct. If we cease to act, you will be liable for fees incurred up to the date of termination.`,
  },
  {
    title: "10. Limitation of Liability",
    body: `Our aggregate liability to you in respect of any claim arising out of our work is limited to the amount of our professional indemnity insurance cover, details of which are available on request. We are not liable for indirect or consequential losses. Nothing in these terms limits our liability for death or personal injury caused by our negligence, or for fraudulent misrepresentation.`,
  },
  {
    title: "11. Complaints",
    body: `If you are unhappy with our service, please contact our complaints manager in the first instance. Details of our complaints procedure are set out at abbottsolicitors.com/complaints. If your complaint is not resolved, you may refer it to the Legal Ombudsman (leombudsman.org.uk) within six months of our final response.`,
  },
  {
    title: "12. Governing Law",
    body: `These terms of business are governed by the law of England and Wales. Any disputes are subject to the exclusive jurisdiction of the courts of England and Wales.`,
  },
];

export default function TermsPage() {
  return (
    <SmoothScrollProvider>
      <main className="bg-[#0A0B0F] min-h-screen text-[#F0EDE6]">
        <Navbar />

        <PageHero
          overline="Legal"
          title="Terms of"
          titleAccent="Business"
          subtitle="Our client care standards, fee arrangements and professional obligations — applicable to all matters handled by Abbott Solicitors."
          breadcrumbs={[{ label: "Terms of Business" }]}
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
              <span className="text-[#C9A84C] text-[10px] tracking-[0.25em] uppercase font-sans">Questions About These Terms?</span>
              <p className="text-[#8A8A94] text-base font-sans leading-relaxed">
                Contact us at <a href="mailto:info@abbottsolicitors.com" className="text-[#C9A84C] hover:text-[#E8C97A] transition-colors">info@abbottsolicitors.com</a> or call <a href="tel:+441582737952" className="text-[#C9A84C] hover:text-[#E8C97A] transition-colors">+44 (0) 1582 737952</a>.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
