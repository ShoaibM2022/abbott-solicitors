"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote: "Abbott Solicitors handled my complex immigration case with exceptional care and professionalism. They kept me informed at every step and achieved a result beyond my expectations.",
    name: "R. Patel",
    matter: "Immigration — Indefinite Leave to Remain",
  },
  {
    quote: "The team at Abbott navigated my housing dispute with precision and clarity. Their knowledge of UK housing law is outstanding — I felt genuinely supported throughout.",
    name: "J. Williams",
    matter: "Housing Law — Unlawful Eviction",
  },
  {
    quote: "I was referred to Abbott Solicitors for my employment tribunal and could not be happier. Professional, thorough, and genuinely committed to justice. Highly recommended.",
    name: "S. Okonkwo",
    matter: "Employment Law — Unfair Dismissal",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); io.disconnect(); } },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="testimonials" className="relative bg-[#0D1B35] py-20 lg:py-32 px-4 sm:px-6 lg:px-10 overflow-hidden">
      {/* Gold gradient lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />

      {/* Faint large quote mark — hidden on small screens to avoid overflow */}
      <div
        className="hidden sm:block absolute top-6 left-4 sm:left-10 font-serif leading-none text-[#C9A84C]/[0.04] select-none pointer-events-none"
        style={{ fontSize: "clamp(8rem, 20vw, 20rem)" }}
        aria-hidden
      >
        &ldquo;
      </div>

      <div ref={ref} className="section-reveal max-w-4xl mx-auto flex flex-col items-center text-center">
        <span className="text-[#C9A84C] text-[10px] tracking-[0.35em] uppercase font-sans mb-3">
          Client Testimonials
        </span>
        <h2 className="serif text-[clamp(1.7rem,4vw,3rem)] text-[#F0EDE6] font-light mb-12 lg:mb-16">
          What Our Clients Say
        </h2>

        {/* Slide area — fixed height prevents layout shift */}
        <div className="relative w-full" style={{ minHeight: "clamp(180px, 30vw, 240px)" }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`absolute inset-0 flex flex-col items-center transition-all duration-700 ${
                i === active
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <blockquote
                className="serif font-light italic text-[#F0EDE6]/88 leading-relaxed mb-7 px-2"
                style={{ fontSize: "clamp(1rem, 2.2vw, 1.5rem)" }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex flex-col items-center gap-1">
                <div className="w-10 h-px bg-[#C9A84C] mb-3" />
                <span className="text-[#C9A84C] serif text-lg">{t.name}</span>
                <span className="text-[#8A8A94] text-[11px] tracking-[0.18em] uppercase font-sans">{t.matter}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Dot navigation */}
        <div className="flex items-center gap-3 mt-14">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                i === active ? "w-8 h-1.5 bg-[#C9A84C]" : "w-1.5 h-1.5 bg-[#8A8A94]/40 hover:bg-[#8A8A94]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
