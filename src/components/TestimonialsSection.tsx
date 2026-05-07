"use client";

import { useEffect, useRef, useState } from "react";

// Verified 5-star client reviews sourced from ReviewSolicitors:
// https://www.reviewsolicitors.co.uk/bedfordshire/luton/abbott-solicitors-llp
const testimonials = [
  {
    quote: "I highly recommend Amna Farook for her outstanding support and professionalism. She helped me in such a short time and handled everything efficiently and with great care. Amna was always responsive, clear in her communication, and made a stressful situation much easier to deal with.",
    name: "Attiqa Aurangzeb",
    matter: "Verified ReviewSolicitors Client",
  },
  {
    quote: "I cannot recommend this solicitor highly enough for an ILR application. We worked with Maniha — from the very first consultation, she was professional, knowledgeable, and extremely thorough. Every step of the process was explained clearly, which gave me complete confidence and peace of mind.",
    name: "Nazmeen Younas",
    matter: "Immigration: Indefinite Leave to Remain",
  },
  {
    quote: "I cannot recommend Abbott Solicitors highly enough — if you're looking for a team that genuinely delivers results, this is the one to choose. My Home Office application was approved smoothly and efficiently, all thanks to the incredible work of Barrister Adnan and Mrs Zeemal. From start to finish, they handled everything with confidence, precision, and professionalism.",
    name: "Ali",
    matter: "Immigration: Home Office Application",
  },
  {
    quote: "I would like to express my sincere gratitude to Abbott Solicitors, especially Barrister Adnan and Mrs Zeemal, for their outstanding support and professionalism in handling my Home Office application. Thanks to their expertise and dedication, my application was successfully approved, and I couldn't be happier with the outcome. Their teamwork made what could have been a stressful experience feel smooth and manageable.",
    name: "Sallah Sahrane",
    matter: "Immigration: Home Office Application",
  },
  {
    quote: "I had a really positive experience with Abbott Solicitors, and in particular with Asim, who handled my case. From the start, he was professional, attentive, and genuinely supportive. His attention to detail and commitment to getting everything sorted efficiently really stood out.",
    name: "Vazma O.",
    matter: "Verified ReviewSolicitors Client",
  },
  {
    quote: "Excellent service from start to finish. Adnan was proactive, professional, and always available to answer my questions. They made a stressful situation much more manageable. I will definitely use them again.",
    name: "Muhammad Rehman",
    matter: "Verified ReviewSolicitors Client",
  },
  {
    quote: "I highly recommend Abbott Solicitors LLP — they were very understanding and professional, and I got the best services from Ms Mariam Chakir and Mr Mahek Chaudhri. They really helped me throughout my case and gave me enough time. They were so gentle and generous.",
    name: "Logman Salih",
    matter: "Verified ReviewSolicitors Client",
  },
  {
    quote: "I got clear, honest and professional advice from Barrister Faisal Mehmood. I found him very kind and helpful.",
    name: "Verified Client",
    matter: "Legal Consultation",
  },
  {
    quote: "I met and found Barrister Faisal Mehmood kind and helpful. The discussion was very fruitful. He has a professional team with him. I will recommend him.",
    name: "Verified Client",
    matter: "Legal Consultation",
  },
  {
    quote: "Asim Mustafa — a brilliant solicitor, punctual, with great communication skills. The customer was amazed and very happy.",
    name: "Gabriel Angelov",
    matter: "Verified ReviewSolicitors Client",
  },
  {
    quote: "I will recommend Barrister Faisal Mehmood to everyone who needs any legal advice.",
    name: "Verified Client",
    matter: "Legal Consultation",
  },
  {
    quote: "My solicitor Mahek is very good and I was happy about the outcome.",
    name: "Elif Ayhan",
    matter: "Verified ReviewSolicitors Client",
  },
  {
    quote: "Was able to book the appointment straightaway. Great and fast service. Very helpful.",
    name: "Karolina Szczepanik",
    matter: "Initial Consultation",
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
                <span className="text-[#C9A84C] serif text-xl">{t.name}</span>
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
