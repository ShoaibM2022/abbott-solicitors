import Link from "next/link";

interface PageCTAProps {
  heading?: string;
  subtext?: string;
}

export default function PageCTA({
  heading = "Speak to a Specialist Today",
  subtext = "Book a free 15-minute consultation with one of our solicitors. Available in Luton, Birmingham, or virtually anywhere in the UK.",
}: PageCTAProps) {
  return (
    <section className="relative bg-[#0D1B35] py-20 px-4 sm:px-6 lg:px-10 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />

      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
        <span className="text-[#C9A84C] text-[10px] tracking-[0.38em] uppercase font-sans">Get In Touch</span>
        <h2 className="serif text-[clamp(2rem,5vw,3.5rem)] text-[#F0EDE6] font-light leading-tight">
          {heading}
        </h2>
        <p className="text-[#8A8A94] text-sm sm:text-[15px] leading-relaxed font-sans max-w-xl">{subtext}</p>
        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <Link href="/contact"
            className="wicked-pulse inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C9A84C] text-[#0A0B0F] text-[11px] tracking-[0.22em] uppercase font-sans font-semibold hover:bg-[#E8C97A] transition-colors duration-300">
            Book Free Consultation
          </Link>
          <a href="tel:+441582737952"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#C9A84C]/50 text-[#C9A84C] text-[11px] tracking-[0.22em] uppercase font-sans hover:bg-[#C9A84C]/10 transition-colors duration-300">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M1.5 1.5h2.8l1.4 3.3-1.7 1a6.5 6.5 0 003.4 3.4l1-1.7L11.5 9v2.8C5 12 1 8 1.5 1.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
            </svg>
            01582 737952
          </a>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
    </section>
  );
}
