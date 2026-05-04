"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface Badge {
  src: string;
  alt: string;
  w: number;
  h: number;
  href: string;
}

export default function BadgeRow({ badges, height = 56 }: { badges: Badge[]; height?: number }) {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    const items = Array.from(row.querySelectorAll<HTMLAnchorElement>(".badge-item"));

    items.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "scale(0.65) translateY(28px)";
    });

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        items.forEach((el, i) => {
          setTimeout(() => {
            el.style.transition =
              "opacity 0.65s cubic-bezier(0.22,1,0.36,1), transform 0.65s cubic-bezier(0.22,1,0.36,1)";
            el.style.opacity = "1";
            el.style.transform = "scale(1) translateY(0)";
          }, i * 110);
        });
      },
      { threshold: 0.15 }
    );

    io.observe(row);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={rowRef} className="flex flex-wrap items-center gap-8 sm:gap-12">
      {badges.map(({ src, alt, w, h, href }) => (
        <a
          key={src}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={alt}
          className="badge-item"
        >
          <Image
            src={src}
            alt={alt}
            width={w}
            height={h}
            className="object-contain"
            style={{ height, width: "auto" }}
          />
        </a>
      ))}
    </div>
  );
}
