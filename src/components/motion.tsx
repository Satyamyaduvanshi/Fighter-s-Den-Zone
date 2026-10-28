"use client";

import React, { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);
  return reduced;
}

export function useInView<T extends HTMLElement>(threshold = 0.08) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -5% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced, threshold]);

  return { ref, inView, reduced };
}

export function MotionStyles() {
  return (
    <style>{`
      @keyframes fdz-fade { from { opacity: 0; } to { opacity: 1; } }
      @keyframes fdz-swap { from { opacity: 0; transform: translate3d(0, 8px, 0); } to { opacity: 1; transform: none; } }
      @keyframes fdz-progress { from { transform: scaleX(0); } to { transform: scaleX(1); } }
      @keyframes fade-in { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: none; } }
      
      .fdz-fade { animation: fdz-fade 0.9s ease-out both; }
      .fdz-swap { animation: fdz-swap 0.5s ease-out both; }
      .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
      
      @media (prefers-reduced-motion: reduce) {
        .fdz-fade, .fdz-swap, .animate-fade-in { animation: none; }
      }
    `}</style>
  );
}

export function Reveal({
  children,
  className = "",
  style,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
}) {
  const { ref, inView, reduced } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translate3d(0, 20px, 0)",
        transition: reduced
          ? "none"
          : `opacity 700ms ease-out ${delay}ms, transform 700ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export function CountUp({
  to,
  suffix = "",
  duration = 1800,
  className = "",
  style,
}: {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const { ref, inView, reduced } = useInView<HTMLSpanElement>(0.5);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setValue(to);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced, to, duration]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`} style={style}>
      {value.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}