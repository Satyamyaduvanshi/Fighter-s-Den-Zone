"use client";

import { useEffect, useState } from "react";
import { GYM_INFO } from "@/data/gymData";
import { BrandLogo } from "./BrandLogo";
import { BrushTransition } from "./BrushTransition";
import { DISPLAY_FONT, H2, SECTION_PAD_WITH_BRUSH, CONTAINER, CurvyUnderline } from "./ui";

const SLIDE_MS = 7000;

const REVIEWS = [
  {
    quote:
      "Hands down the best MMA and boxing gym in Rohini. The coaches focus on real technique instead of random cardio. I joined with the 50% off offer and I’m already down 6 kg.",
    author: "Rohit Verma",
    role: "MMA & Boxing, Rohini",
  },
  {
    quote:
      "I enrolled my 9-year-old son in the kids batch. His screen time dropped, and his confidence and discipline shot up. Highly recommended.",
    author: "Priya Sharma",
    role: "Parent, Rohini",
  },
  {
    quote:
      "I walked in with zero experience and was nervous about it. The coaches start from the basics and nobody rushes you. A few months in, I’m sparring and sleeping better than I have in years.",
    author: "Arjun Mehta",
    role: "Boxing, Dwarka",
  },
  {
    quote:
      "I joined the self-defence batch after a bad experience travelling at night. I feel far more confident now, and the women’s group is supportive and fun to train with.",
    author: "Neha Kapoor",
    role: "Self-defence, Rohini",
  },
];

const CENTERS = [
  {
    id: "rohini",
    name: "Rohini",
    address: GYM_INFO.address,
    map: "https://www.google.com/maps?q=Manav+Chowk+Sector+15+Rohini+Delhi+110085&z=16&output=embed",
  },
  {
    id: "dwarka",
    name: "Dwarka",
    address:
      "Plot No. 57, 3rd Floor, Mohit Nagar, Old Palam Road, Sector 15, Dwarka, New Delhi 110078",
    map: "https://www.google.com/maps?q=Plot+57+Mohit+Nagar+Old+Palam+Road+Sector+15+Dwarka+Delhi+110078&z=16&output=embed",
  },
];

function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  const review = REVIEWS[idx];

  useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(() => {
      setIdx((current) => (current + 1) % REVIEWS.length);
    }, SLIDE_MS);

    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section
      id="testimonials"
      className="relative isolate z-0 bg-white text-black flex flex-col"
      aria-label="Member testimonials"
    >
      <BrushTransition variant={2} className="text-black" />
      
      <div className={`${CONTAINER} ${SECTION_PAD_WITH_BRUSH} relative z-10`}>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 lg:items-center">
          
          <div className="lg:w-1/3 shrink-0">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#E11D2A]">
              The community
            </p>
            <div className="inline-block w-fit">
              <h2 className={H2} style={DISPLAY_FONT}>
                Success
                <br />
                stories<span className="text-[#E11D2A]">.</span>
              </h2>
              <CurvyUnderline className="text-[#E11D2A] w-full h-2 sm:h-3 mt-1 sm:mt-2" />
            </div>
            <p className="mt-6 text-sm leading-7 text-black/55">
              Real training. Consistent progress. Confidence that goes beyond
              the gym.
            </p>
          </div>

          <div
            className="lg:w-2/3 flex flex-col gap-10"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setPaused(false);
              }
            }}
          >
            <div className="min-h-[220px] sm:min-h-[160px] lg:min-h-[180px] flex items-center" aria-live="polite" aria-atomic="true">
              <blockquote
                key={idx}
                className="text-2xl leading-snug sm:text-3xl sm:leading-snug lg:text-4xl lg:leading-tight animate-fade-in"
                style={DISPLAY_FONT}
              >
                “{review.quote}”
              </blockquote>
            </div>

            <div className="grid grid-cols-4 gap-3 sm:gap-5">
              {REVIEWS.map((item, i) => {
                const isSelected = idx === i;
                const isPast = i < idx;

                return (
                  <button
                    key={item.author}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setIdx(i)}
                    className="group flex flex-col gap-3 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
                  >
                    <div className="h-1.5 w-full bg-black/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-[#E11D2A] origin-left ${isPast ? "w-full" : "w-0"}`}
                        style={
                          isSelected
                            ? {
                                animation: `fdz-progress ${SLIDE_MS}ms linear forwards`,
                                animationPlayState: paused ? "paused" : "running",
                              }
                            : {}
                        }
                      />
                    </div>
                    <div>
                      <span
                        className={`block text-sm sm:text-base font-bold transition-colors ${
                          isSelected ? "text-black" : "text-black/45 group-hover:text-black/80"
                        }`}
                      >
                        {item.author}
                      </span>
                      <span className="hidden sm:block mt-0.5 text-xs text-black/50">
                        {item.role}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function LocationFooter() {
  const [active, setActive] = useState(0);
  const center = CENTERS[active];

  const phone = GYM_INFO.phone.replace(/[^\d+]/g, "");
  const waLink = `https://wa.me/${GYM_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hi Fighter's Den Zone! I'd like to book a free trial class at your ${center.name} centre.`
  )}`;
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    center.address
  )}`;

  return (
    <section id="location" className="relative isolate bg-black text-white w-full lg:h-screen lg:overflow-hidden flex flex-col">
      <BrushTransition variant={3} className="text-white z-20" />

      {/* min-h-0 allows the flex-1 container to lock dynamically on single page without scrolling */}
      <div className="flex flex-col lg:flex-row w-full flex-1 min-h-0 relative">
        
        {/* LEFT COLUMN: Ultra compact 100vh lock layout based on screenshot */}
        <div className="relative z-10 w-full lg:w-1/2 flex justify-center lg:justify-end bg-black">
          <div className="w-full max-w-[580px] px-5 sm:px-8 lg:px-12 xl:px-16 pt-8 pb-8 lg:pt-14 flex flex-col justify-between h-full mx-auto lg:mx-0">
            
            <div className="w-full">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#FF4D58]">
                Join the Den
              </p>
              <div className="inline-block w-fit">
                <h2 className={H2} style={DISPLAY_FONT}>
                  Visit us<span className="text-[#E11D2A]">.</span>
                </h2>
                <CurvyUnderline className="text-[#E11D2A] w-full h-2 sm:h-3 mt-1" />
              </div>
              <p className="mt-3 max-w-sm text-sm leading-6 text-white/55 hidden sm:block">
                Find your nearest training centre and take the first step towards
                becoming stronger, fitter and more confident.
              </p>

              {/* Location Tabs */}
              <div
                role="tablist"
                aria-label="Choose a training centre"
                className="mt-6 inline-flex w-full sm:w-auto p-1.5 rounded-xl bg-white/5 border border-white/10"
              >
                {CENTERS.map((item, i) => {
                  const selected = active === i;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      id={`location-tab-${item.id}`}
                      aria-selected={selected}
                      aria-controls="location-panel"
                      onClick={() => setActive(i)}
                      className={`flex-1 sm:flex-none min-w-[140px] rounded-lg px-5 py-2.5 sm:py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E11D2A] ${
                        selected
                          ? "bg-[#E11D2A] text-white shadow-lg"
                          : "text-white/60 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {item.name}
                    </button>
                  );
                })}
              </div>

              {/* Minimal Address Box */}
              <div
                key={center.id}
                id="location-panel"
                role="tabpanel"
                aria-labelledby={`location-tab-${center.id}`}
                className="mt-6 animate-fade-in"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-sm">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5" aria-hidden="true">
                      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <h3 className="text-base font-bold tracking-wide">{center.name} Centre</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/60 line-clamp-2">{center.address}</p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors px-4 py-3.5 text-sm font-medium text-white">
                    Get Directions <span aria-hidden="true">↗</span>
                  </a>
                  <a href={`tel:${phone}`} className="flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors px-4 py-3.5 text-sm font-medium text-white">
                    Call Us <span aria-hidden="true">↗</span>
                  </a>
                </div>

                <a href={waLink} target="_blank" rel="noopener noreferrer" className="mt-4 flex w-full items-center justify-center gap-3 rounded-xl bg-[#E11D2A] px-5 py-4 text-sm font-bold tracking-wide text-white transition-all hover:bg-white hover:text-black">
                  Book a Free Trial Session <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            {/* Locked Minimal Footer */}
            <footer className="mt-8 pt-6 border-t border-white/15 w-full shrink-0 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pb-2">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden ring-1 ring-[#E11D2A] bg-black shrink-0">
                  <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
                </div>
                <div className="leading-none">
                  <span className="block text-base uppercase tracking-wide text-white" style={DISPLAY_FONT}>
                    Fighter’s Den Zone
                  </span>
                  <span className="block text-[10px] mt-1 text-white/50">
                    Rohini &amp; Dwarka
                  </span>
                </div>
              </div>

              <nav aria-label="Footer navigation" className="w-full sm:w-auto">
                <ul className="grid grid-cols-2 sm:flex sm:flex-col gap-x-4 gap-y-2 text-right">
                  <li><a className="text-xs font-medium text-white/60 hover:text-white transition-colors" href="#programs">Programs</a></li>
                  <li><a className="text-xs font-medium text-white/60 hover:text-white transition-colors" href="#schedule">Timetable</a></li>
                  <li><a className="text-xs font-medium text-white/60 hover:text-white transition-colors" href="#faq">FAQ</a></li>
                  <li>
                    <a className="inline-flex items-center gap-1 text-xs font-medium text-[#FF4D58] hover:text-white transition-colors" href={GYM_INFO.instagramUrl} target="_blank" rel="noopener noreferrer">
                      Instagram <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </footer>

          </div>
        </div>

        {/* RIGHT COLUMN: 50% split Map (Fills remaining height smoothly) */}
        <div className="relative w-full h-[50vh] lg:w-1/2 lg:h-full bg-[#0a0a0a]">
          <iframe
            key={center.id}
            title={`${center.name} gym location map`}
            src={center.map}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full border-0 grayscale contrast-[0.9] opacity-70"
          />
          
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent via-black/10 to-black hidden lg:block" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,1)]" />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 p-8 sm:p-12 lg:p-14 z-10">
            <div className="max-w-md">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#FF4D58] drop-shadow-md">
                Training Base
              </p>
              <p className="mt-2 text-4xl lg:text-6xl uppercase leading-none drop-shadow-lg text-white" style={DISPLAY_FONT}>
                {center.name}
              </p>
            </div>
          </div>

          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-6 top-6 sm:right-10 sm:top-10 z-10 inline-flex items-center gap-2 rounded-xl border border-white/20 bg-black/60 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all hover:bg-[#E11D2A] hover:border-[#E11D2A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Open Maps <span aria-hidden="true">↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export function TestimonialsMap() {
  return (
    <>
      <Testimonials />
      <LocationFooter />
    </>
  );
}