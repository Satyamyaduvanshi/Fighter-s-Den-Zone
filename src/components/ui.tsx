import React from "react";
import type { CSSProperties } from "react";

export const DISPLAY_FONT: CSSProperties = {
  fontFamily: "var(--font-display), Impact, 'Arial Narrow Bold', sans-serif",
};

export const CONTAINER = "max-w-6xl mx-auto px-5 sm:px-8 lg:px-10";

export const SECTION_PAD = "py-20 sm:py-28";
// Reduced top padding because the block-level brush now acts as natural spacing
export const SECTION_PAD_WITH_BRUSH = "pb-20 sm:pb-28 pt-6 sm:pt-10";

export const H2 = "uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.98] tracking-tight";

/**
 * A scalable curvy underline that stretches perfectly to fill its container.
 */
export function CurvyUnderline({ className = "text-[#E11D2A]" }: { className?: string }) {
  return (
    <svg
      className={`animate-fade-in block ${className}`}
      viewBox="0 0 100 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M3 6 C 12 -2, 18 -2, 27 6 C 36 14, 42 14, 51 6 C 60 -2, 66 -2, 75 6 C 84 14, 90 14, 97 6"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}