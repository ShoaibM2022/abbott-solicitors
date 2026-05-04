"use client";

import { useEffect, useRef } from "react";

type WickedClass =
  | "wicked-fadeIn" | "wicked-slideUp" | "wicked-slideDown"
  | "wicked-slideRight" | "wicked-slideLeft" | "wicked-bounceIn"
  | "wicked-rotateIn" | "wicked-rotateInRight" | "wicked-rotateInLeft"
  | "wicked-zoomer" | "wicked-zoomerOut";

/** Adds a WickedCSS class when the element enters the viewport */
export function useWicked<T extends HTMLElement = HTMLDivElement>(
  animation: WickedClass,
  options: { threshold?: number; delay?: number } = {}
) {
  const ref = useRef<T>(null);
  const { threshold = 0.15, delay = 0 } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add(animation), delay);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [animation, threshold, delay]);

  return ref;
}
