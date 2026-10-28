import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DISPLAY_FONT } from "./ui";

interface BrandLogoProps {
  variant?: "light" | "dark";
  showText?: boolean;
}

export function BrandLogo({ variant = "light", showText = true }: BrandLogoProps) {
  const onBlack = variant === "light";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${
        onBlack ? "focus-visible:outline-white" : "focus-visible:outline-black"
      }`}
    >
      <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden ring-1 ring-[#E11D2A] bg-black shrink-0">
        <Image
          src="/logo.png"
          alt="Fighter’s Den Zone logo"
          fill
          priority
          sizes="48px"
          className="object-cover"
        />
      </div>

      {showText && (
        <div className="leading-none">
          <span
            className={`block text-lg sm:text-xl uppercase tracking-wide ${
              onBlack ? "text-white" : "text-black"
            }`}
            style={DISPLAY_FONT}
          >
            Fighter’s Den Zone
          </span>
          <span className={`block text-xs mt-1 ${onBlack ? "text-white/60" : "text-black/60"}`}>
            Rohini and Dwarka
          </span>
        </div>
      )}
    </Link>
  );
}   