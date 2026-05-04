"use client";

import { useRef, useCallback, useEffect } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

export default function TiltCard({
  children,
  className = "",
  delay = 0,
  threshold = 0.1,
}: TiltCardProps) {
  const ref    = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  /* Scroll-reveal entrance — direct DOM manipulation (avoids React state/hydration timing) */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    /* Hide immediately on mount before observer fires */
    el.style.opacity   = "0";
    el.style.transform = "perspective(900px) translateY(60px) rotateX(18deg) scale(0.93)";

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        setTimeout(() => {
          if (!el) return;
          el.style.opacity   = "";
          el.style.transform = "";
          el.style.animationDelay = `${delay}ms`;
          el.classList.add("card-entered");
        }, 0);
      },
      { threshold }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay, threshold]);

  /* 3-D tilt on mouse move */
  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const el = ref.current;
      if (!el) return;
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = (e.clientX - left) / width  - 0.5;
      const y = (e.clientY - top)  / height - 0.5;
      el.style.transform  = `perspective(900px) rotateY(${x * 12}deg) rotateX(${-y * 8}deg) scale3d(1.03,1.03,1.03)`;
      el.style.transition = "box-shadow 0.2s ease";
    });
  }, []);

  /* Spring-back on leave */
  const onLeave = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.55s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease";
    el.style.transform  = "";
    setTimeout(() => { if (el) el.style.transition = ""; }, 600);
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`tilt-card glass-card ${className}`}
    >
      {children}
    </div>
  );
}
