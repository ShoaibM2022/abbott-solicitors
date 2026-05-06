const cases = [
  {
    name: "Sikander Grocers Limited v Secretary of State for the Home Department",
    citation: "[2026] EWHC 883 (KB)",
    court: "King's Bench Division · High Court of Justice",
    judge: "Mrs Justice Foster",
    date: "16 April 2026",
    summary:
      "Abbott Solicitors represented the successful Appellant in this landmark High Court ruling. Mrs Justice Foster held that where a court's own errors caused a statutory immigration appeal filing deadline to be missed, the appeal must be permitted to proceed. The judgment establishes precedent in immigration civil penalty cases and is now cited in future proceedings.",
    iclr: "https://www.iclr.co.uk/document/2026002512/2026ewhc883kb_TNA/html",
    bailii: "https://www.bailii.org/ew/cases/EWHC/KB/2026/883.html",
  },
];

export default function CaseHighlights() {
  return (
    <section className="py-14 lg:py-20 px-4 sm:px-6 lg:px-10 border-b border-[#C9A84C]/10 bg-[#0A0B0F]">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-4 mb-10">
          <span className="block w-6 h-px bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-[10px] tracking-[0.38em] uppercase font-sans">Notable Cases</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-start">

          {/* Section intro */}
          <div className="wicked-slideRight flex flex-col gap-4">
            <h2 className="serif text-[clamp(1.8rem,4vw,3rem)] text-[#F0EDE6] font-light leading-tight">
              Landmark <em className="italic text-[#C9A84C]">Judgments</em>
            </h2>
            <p className="text-[#8A8A94] text-base leading-relaxed font-sans">
              Our cases are cited as legal precedent in the High Court and beyond. These judgments reflect the calibre of representation Abbott Solicitors delivers for every client.
            </p>
          </div>

          {/* Case cards */}
          <div className="wicked-slideLeft flex flex-col gap-5">
            {cases.map(({ name, citation, court, judge, date, summary, iclr, bailii }) => (
              <div key={citation} className="glass-card border-l-2 border-[#C9A84C] p-7 flex flex-col gap-5">

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="flex flex-col gap-1">
                    <span className="serif text-xl text-[#C9A84C]">{citation}</span>
                    <p className="text-[#8A8A94] text-[11px] tracking-[0.15em] uppercase font-sans">{court}</p>
                  </div>
                  <span className="shrink-0 text-[#C9A84C]/50 text-[10px] tracking-[0.15em] uppercase font-sans border border-[#C9A84C]/20 px-2.5 py-1 self-start">
                    {date}
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="serif text-xl text-[#F0EDE6] font-light leading-snug">{name}</h3>
                  <p className="text-[#8A8A94] text-[11px] tracking-[0.15em] uppercase font-sans">{judge}</p>
                </div>

                <p className="text-[#8A8A94] text-base leading-relaxed font-sans border-t border-[#C9A84C]/10 pt-4">
                  {summary}
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={iclr}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#C9A84C] text-[11px] tracking-[0.18em] uppercase font-sans hover:text-[#E8C97A] transition-colors"
                  >
                    ICLR Report
                    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" width="10" height="10">
                      <path d="M2 10L10 2M5 2h5v5"/>
                    </svg>
                  </a>
                  <span className="text-[#C9A84C]/20 self-center">·</span>
                  <a
                    href={bailii}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#C9A84C] text-[11px] tracking-[0.18em] uppercase font-sans hover:text-[#E8C97A] transition-colors"
                  >
                    BAILII Judgment
                    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" width="10" height="10">
                      <path d="M2 10L10 2M5 2h5v5"/>
                    </svg>
                  </a>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
