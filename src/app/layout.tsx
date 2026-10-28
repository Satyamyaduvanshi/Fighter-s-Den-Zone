// src/app/layout.tsx
import type { Metadata } from "next";
import { DM_Sans, Syncopate } from "next/font/google";
import "./globals.css";

// Matches the clean, rounded geometric "Online Background Remover" Canva Sans font
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-canva",
});

// Matches the wide, blocky "BEST MARTIAL ARTS SCHOOL" / "BLACK BELT PLUS" display font
const syncopate = Syncopate({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-wide",
});

export const metadata: Metadata = {
  title: "Fighter's Den Zone | Martial Arts & MMA School in Rohini",
  description:
    "Skill | Confidence | Power. Mixed Martial Arts, Boxing, Kickboxing, Jiu-Jitsu & Kids Martial Arts in Sector 15, Manav Chowk, Rohini.",
  icons:{
    icon:"logo.png"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${syncopate.variable} scroll-smooth`}
    >
      <body className="font-sans bg-white text-zinc-900 antialiased selection:bg-[#E11D2A] selection:text-white">
        {children}
      </body>
    </html>
  );
}