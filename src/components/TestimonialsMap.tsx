"use client";

import { useEffect, useState } from "react";
import { GYM_INFO } from "@/data/gymData";
import { BrandLogo } from "./BrandLogo";
import { BrushTransition } from "./BrushTransition";
import { CONTAINER, DISPLAY_FONT, H2, SECTION_PAD_WITH_BRUSH } from "./ui";

const SLIDE_MS = 7000;

const REVIEWS = [
  {
    quote:
      "Hands down the best MMA and boxing gym in Rohini. The coaches focus on real technique instead of random cardio. I joined with the 50% off offer and I’m already down 6 kg.",
    author: "Rohit Verma",
    role: "MMA and boxing member, Rohini",
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
    role: "Boxing member, Dwarka",
  },
  {
    quote:
      "I joined the self-defence batch after a bad experience travelling at night. I feel far more confident now, and the women’s group is supportive and fun to train with.",
    author: "Neha Kapoor",
    role: "Self-defence member, Rohini",
  },
];

const CENTERS = [
  {
    id: "rohini",
    name: "Rohini",
    address: GYM_INFO.address,
    map: "https://www.google.com/maps?q=Manav+Chowk+Sector+15+Rohini+Delhi+110085&z=16&output=embed",
    hours: [
      { label: "Morning batches", value: "6:30 AM – 10:00 AM" },
      { label: "Evening batches", value: "4:00 PM – 9:30 PM" },
      { label: "Sunday", value: "Open mat, by appointment" },
    ],
  },
  {
    id: "dwarka",
    name: "Dwarka",
    address:
      "Plot No. 57, 3rd Floor, Mohit Nagar, Old Palam Road, Sector 15, Dwarka, New Delhi 110078",
    map: "https://www.google.com/maps?q=Plot+57+Mohit+Nagar+Old+Palam+Road+Sector+15+Dwarka+Delhi+110078&z=16&output=embed",
    hours: null,
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
      
      <div
        className={`${CONTAINER} ${SECTION_PAD_WITH_BRUSH} relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-16`}
      >
        <div className="lg:col-span-5">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#E11D2A]">
            The community
          </p>

          <h2 className={H2} style={DISPLAY_FONT}>
            Success
            <br />
            stories<span className="text-[#E11D2A]">.</span>
          </h2>

          <p className="mt-5 max-w-sm text-sm leading-7 text-black/55">
            Real training. Consistent progress. Confidence that goes beyond
            the gym.
          </p>
        </div>

        <div
          className="min-w-0 lg:col-span-7"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setPaused(false);
            }
          }}
        >
          <div
            className="h-[340px] overflow-hidden sm:h-[300px] lg:h-[290px]"
            aria-live="polite"
            aria-atomic="true"
          >
            <blockquote key={review.author}>
              <p className="text-xl leading-relaxed sm:text-2xl sm:leading-[1.45] lg:text-3xl">
                “{review.quote}”
              </p>

              <footer className="mt-7">
                <p className="text-base font-semibold">{review.author}</p>
                <p className="mt-1 text-sm text-black/50">{review.role}</p>
              </footer>
            </blockquote>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-4 sm:grid-cols-4">
            {REVIEWS.map((item, i) => {
              const selected = idx === i;

              return (
                <button
                  key={item.author}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setIdx(i)}
                  className={`border-b-2 pb-3 text-left text-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black ${
                    selected
                      ? "border-[#E11D2A] text-black"
                      : "border-black/10 text-black/45 hover:border-black/30 hover:text-black"
                  }`}
                >
                  <span className="block truncate">{item.author}</span>
                </button>
              );
            })}
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
    <section
      id="location"
      className="relative isolate bg-black text-white flex flex-col"
    >
      <BrushTransition variant={3} className="text-white" />

      <div
        className={`${CONTAINER} pb-16 pt-8 sm:pb-20 sm:pt-12 lg:pb-24 relative z-10`}
      >
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="min-w-0 lg:col-span-5 xl:col-span-4">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#FF4D58]">
              Fighter&apos;s Den Zone
            </p>

            <h2 className={H2} style={DISPLAY_FONT}>
              Visit us<span className="text-[#E11D2A]">.</span>
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-7 text-white/50">
              Find your nearest training centre and take the first step
              towards becoming stronger, fitter and more confident.
            </p>

            <div
              role="tablist"
              aria-label="Choose a training centre"
              className="mt-8 inline-flex gap-1 rounded-lg border border-white/10 bg-white/[0.035] p-1"
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
                    className={`min-w-24 rounded-md px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E11D2A] ${
                      selected
                        ? "bg-[#E11D2A] text-white"
                        : "text-white/55 hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>

            <div
              key={center.id}
              id="location-panel"
              role="tabpanel"
              aria-labelledby={`location-tab-${center.id}`}
              className="mt-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-[#FF4D58]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="size-5"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>

                <div className="min-w-0 pt-0.5">
                  <h3 className="text-sm font-semibold">
                    {center.name} centre
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/55">
                    {center.address}
                  </p>

                  <a
                    href={mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-[#FF4D58]"
                  >
                    Get directions <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>

              <div className="mt-7 border-t border-white/10 pt-6">
                <a
                  href={`tel:${phone}`}
                  className="inline-flex items-center gap-3 text-lg font-medium transition-colors hover:text-[#FF4D58]"
                >
                  <span className="text-white/45" aria-hidden="true">
                    ↗
                  </span>
                  {GYM_INFO.phone}
                </a>
              </div>

              <div className="mt-7 rounded-xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                  Training hours
                </h3>

                {center.hours ? (
                  <dl className="mt-5 space-y-4">
                    {center.hours.map((hour) => (
                      <div
                        key={hour.label}
                        className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 text-sm"
                      >
                        <dt className="text-white/50">{hour.label}</dt>
                        <dd className="text-right font-medium leading-5 text-white/85">
                          {hour.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                ) : (
                  <p className="mt-4 text-sm leading-6 text-white/55">
                    Message us on WhatsApp to confirm available training
                    batches and timings.
                  </p>
                )}
              </div>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-3 rounded-lg bg-[#E11D2A] px-5 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#C91925] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Book a free trial <span aria-hidden="true">↗</span>
              </a>

              <p className="mt-3 text-center text-xs text-white/35">
                Start training. Build confidence.
              </p>
            </div>
          </div>

          <div className="min-w-0 lg:col-span-7 xl:col-span-8">
            <div className="relative h-[320px] overflow-hidden rounded-xl border border-white/10 bg-[#151515] sm:h-[400px] lg:h-full lg:min-h-[620px]">
              <iframe
                key={center.id}
                title={`${center.name} gym location map`}
                src={center.map}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 size-full border-0 grayscale contrast-[0.9]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-black/10"
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent px-5 pb-5 pt-16 sm:px-7 sm:pb-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">
                  Find us in Delhi
                </p>

                <p className="mt-2 text-lg font-semibold sm:text-xl">
                  {center.name}
                  <span className="ml-2 text-[#FF4D58]">●</span>
                </p>

                <p className="mt-1 max-w-md text-sm leading-6 text-white/60">
                  Fighter&apos;s Den Zone · Your next training session starts
                  here.
                </p>
              </div>

              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-lg border border-white/15 bg-black/80 px-4 py-3 text-xs font-medium text-white backdrop-blur-md transition-colors hover:bg-[#E11D2A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-5 sm:top-5"
              >
                Open in Maps <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="relative z-10 border-t border-white/10 bg-black">
        <div className={`${CONTAINER} py-10 sm:py-12`}>
          <div className="grid grid-cols-1 gap-9 md:grid-cols-12 md:items-start md:gap-8">
            <div className="min-w-0 md:col-span-6 lg:col-span-7">
              <BrandLogo variant="light" />

              <p className="mt-5 max-w-md text-sm leading-7 text-white/45">
                Skill, confidence and power. MMA, boxing, kickboxing and
                jiu-jitsu for kids and adults in Rohini and Dwarka.
              </p>
            </div>

            <nav
              aria-label="Footer navigation"
              className="min-w-0 md:col-span-6 lg:col-span-5"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
                Explore
              </p>

              <ul className="mt-5 grid grid-cols-2 gap-x-5 gap-y-4 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4">
                <li>
                  <a
                    className="text-sm text-white/60 transition-colors hover:text-white"
                    href="#programs"
                  >
                    Programs
                  </a>
                </li>

                <li>
                  <a
                    className="text-sm text-white/60 transition-colors hover:text-white"
                    href="#schedule"
                  >
                    Timetable
                  </a>
                </li>

                <li>
                  <a
                    className="text-sm text-white/60 transition-colors hover:text-white"
                    href="#faq"
                  >
                    FAQ
                  </a>
                </li>

                <li>
                  <a
                    className="inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-white"
                    href={GYM_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram <span aria-hidden="true">↗</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="mt-9 flex flex-col gap-3 border-t border-white/[0.08] pt-5 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
            <p>© Fighter&apos;s Den Zone. All rights reserved.</p>
            <p>Rohini &amp; Dwarka, New Delhi</p>
          </div>
        </div>
      </footer>
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