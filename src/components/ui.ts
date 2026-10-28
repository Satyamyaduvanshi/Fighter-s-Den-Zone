import type { CSSProperties } from "react";

export const DISPLAY_FONT: CSSProperties = {
  fontFamily: "var(--font-display), Impact, 'Arial Narrow Bold', sans-serif",
};

export const CONTAINER = "max-w-6xl mx-auto px-5 sm:px-8 lg:px-10";

export const SECTION_PAD = "py-20 sm:py-28";
// Used for sections that have a BrushTransition at the top, replacing top padding so it flows nicely
export const SECTION_PAD_WITH_BRUSH = "pb-20 sm:pb-28 pt-8 sm:pt-14";

export const H2 = "uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.98] tracking-tight";