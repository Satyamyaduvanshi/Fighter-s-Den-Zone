"use client";

import React, { useState, useEffect, useRef } from "react";
import { BrandLogo } from "./BrandLogo";
import { GYM_INFO } from "@/data/gymData";
import { DISPLAY_FONT } from "./ui";
import { MotionStyles } from "./motion";

const SLIDES = [
  {
    label: "MMA",
    caption: "Mixed martial arts, built from the basics up.",
    image:
      "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1400&q=75",
  },
  {
    label: "Striking",
    caption: "Boxing and kickboxing, pad work and conditioning.",
    image:
      "https://images.unsplash.com/photo-1517438322307-e67111335449?auto=format&fit=crop&w=1400&q=75",
  },
  {
    label: "Kids",
    caption: "A focused, safe batch for ages 5 to 13.",
    image:
      "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=1400&q=75",
  },
  {
    label: "Grappling",
    caption: "Jiu-jitsu and practical self-defence.",
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1400&q=75",
  },
];

const PROGRAM_OPTIONS = [
  { label: "Mixed martial arts", value: "Mixed Martial Arts (MMA)" },
  { label: "Boxing and kickboxing", value: "Boxing & Kickboxing" },
  { label: "Jiu-jitsu and grappling", value: "Jiu-Jitsu (BJJ) & Grappling" },
  { label: "Kids, ages 5 to 13", value: "Kids Martial Arts (Ages 5–13)" },
  { label: "Self-defence", value: "Self-Defence Batch" },
];

const NAV = [
  { href: "#programs", label: "Programs" },
  { href: "#about", label: "About" },
  { href: "#schedule", label: "Timetable" },
  { href: "#faq", label: "FAQ" },
  { href: "#location", label: "Contact" },
];

const FIELD =
  "w-full bg-transparent border-0 border-b border-white/25 focus:border-[#E11D2A] px-0 py-3.5 text-base text-white placeholder-white/40 outline-none transition-colors rounded-none";

function ProgramSelect({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!boxRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const selected = PROGRAM_OPTIONS.find((o) => o.value === value) ?? PROGRAM_OPTIONS[0];

  return (
    <div ref={boxRef} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className={`${FIELD} flex items-end justify-between gap-4 text-left ${
          open ? "border-[#E11D2A]" : ""
        }`}
      >
        <span>
          <span className="block text-xs text-white/45">Program</span>
          <span className="block mt-0.5">{selected.label}</span>
        </span>
        <span className="text-sm text-white/45">{open ? "Close" : "Change"}</span>
      </button>

      <div
        role="listbox"
        aria-hidden={!open}
        className={`absolute left-0 right-0 bottom-full mb-3 z-40 origin-bottom rounded-2xl bg-white text-black p-2 shadow-2xl transition duration-200 ease-out motion-reduce:transition-none ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        {PROGRAM_OPTIONS.map((opt) => {
          const active = opt.value === value;
          return (
            <button
              type="button"
              key={opt.value}
              role="option"
              aria-selected={active}
              tabIndex={open ? 0 : -1}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-xl text-base transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-black ${
                active ? "bg-black text-white" : "hover:bg-black/5"
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function HeroSection({ selectedProgram }: { selectedProgram?: string }) {
  const [current, setCurrent] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [program, setProgram] = useState(selectedProgram || PROGRAM_OPTIONS[0].value);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const msg = encodeURIComponent(
      `Hi Fighter's Den Zone!\nI'd like to claim my free trial class and the 50% off offer.\n\nName: ${name}\nPhone: ${phone}\nProgram: ${program}`
    );
    window.open(`https://wa.me/${GYM_INFO.whatsappNumber}?text=${msg}`, "_blank");
  };

  return (
    <section
      id="trial"
      className="relative isolate bg-black text-white min-h-dvh grid lg:grid-cols-[1.05fr_1fr]"
    >
      <MotionStyles />

      <header className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-5 sm:px-8 lg:px-10 py-5 sm:py-6">
        <BrandLogo variant="light" />

        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm text-white/80">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <a
            href="#schedule"
            className="hidden lg:block text-sm text-white underline underline-offset-4 decoration-[#E11D2A] decoration-2 hover:decoration-white transition-colors"
          >
            Member batches
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div
          className="absolute inset-x-0 top-0 z-20 md:hidden bg-black pt-24 pb-8 px-5 flex flex-col gap-4 text-3xl uppercase"
          style={DISPLAY_FONT}
        >
          {NAV.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      )}

      <div className="relative order-1 lg:order-2 h-[46dvh] sm:h-[52dvh] lg:h-auto lg:min-h-dvh overflow-hidden">
        <div className="fdz-fade absolute inset-0 [mask-image:linear-gradient(to_bottom,black_55%,transparent)] lg:[mask-image:linear-gradient(to_right,transparent,black_55%)]">
          {SLIDES.map((slide, i) => (
            <img
              key={slide.label}
              src={slide.image}
              alt={slide.caption}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
              className={`absolute inset-0 w-full h-full object-cover grayscale-[35%] contrast-110 transition-opacity duration-1000 ease-in-out motion-reduce:transition-none ${
                i === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10 px-5 sm:px-8 pb-5 lg:pb-8 lg:pl-24">
          <p className="text-sm sm:text-base text-white/90 max-w-sm mb-3 min-h-[2.5rem]">
            {SLIDES[current].caption}
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {SLIDES.map((slide, i) => (
              <button
                key={slide.label}
                onClick={() => setCurrent(i)}
                className={`transition-colors underline-offset-8 decoration-2 decoration-[#E11D2A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white ${
                  i === current ? "text-white underline" : "text-white/50 hover:text-white/80"
                }`}
              >
                {slide.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="fdz-fade relative z-10 order-2 lg:order-1 flex flex-col justify-end px-5 sm:px-8 lg:px-12 xl:px-16 pt-4 lg:pt-32 pb-8">
        <h1
          className="uppercase text-[clamp(2.25rem,5vw,4.5rem)] leading-[0.95] tracking-tight"
          style={DISPLAY_FONT}
        >
          Skill.
          <br />
          Confidence.
          <br />
          Power.
        </h1>

        <p className="mt-5 max-w-md text-base text-white/70 leading-relaxed">
          Martial arts for kids and adults, in Rohini and Dwarka. Your first class is free, and the
          first 50 members get half off.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 w-full max-w-md grid gap-1">
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            autoComplete="name"
            aria-label="Your name"
            className={FIELD}
          />
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone number"
            autoComplete="tel"
            aria-label="Phone number"
            className={FIELD}
          />
          <ProgramSelect value={program} onChange={setProgram} />

          <button
            type="submit"
            className="mt-6 bg-[#E11D2A] hover:bg-white hover:text-black text-white font-semibold text-base py-4 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {submitted ? "Opening WhatsApp" : "Book my free class"}
          </button>
        </form>

        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/55">
          <a
            href={`tel:${GYM_INFO.phone.replace(/\s+/g, "")}`}
            className="hover:text-white transition-colors"
          >
            {GYM_INFO.phone}
          </a>
          <a
            href={GYM_INFO.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            @{GYM_INFO.instagram}
          </a>
        </div>
      </div>
    </section>
  );
}