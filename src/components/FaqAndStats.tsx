"use client";

import React, { useState } from "react";
import { FAQS, GYM_INFO } from "@/data/gymData";
import { CONTAINER, DISPLAY_FONT, H2, SECTION_PAD_WITH_BRUSH, CurvyUnderline } from "./ui";
import { CountUp, Reveal } from "./motion";
import { BrushTransition } from "./BrushTransition";

const STATS = [
  { to: 6, suffix: "+", label: "combat disciplines" },
  { to: 4915, suffix: "", label: "followers on Instagram" },
  { to: 30, suffix: "+", label: "classes every week" },
];

export function FaqAndStats() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="faq" className="relative isolate bg-black text-white flex flex-col">
      <BrushTransition variant={1} className="text-white" />
      
      <div className={`${CONTAINER} ${SECTION_PAD_WITH_BRUSH} relative z-10`}>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="inline-block w-fit">
              <h2 className={H2} style={DISPLAY_FONT}>
                Questions,
                <br />
                answered
              </h2>
              <CurvyUnderline className="text-[#E11D2A] w-full h-2 sm:h-3 mt-1 sm:mt-2" />
            </div>
            <p className="mt-6 text-white/60 max-w-xs leading-relaxed">
              What new members usually ask before joining our classes.
            </p>
            <a
              href={`https://wa.me/${GYM_INFO.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block text-white underline underline-offset-4 decoration-[#E11D2A] decoration-2 hover:decoration-white transition-colors"
            >
              Still unsure? Message us on WhatsApp
            </a>
          </Reveal>

          <Reveal className="lg:col-span-7">
            <ul className="space-y-1">
              {FAQS.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <li key={idx}>
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                      aria-expanded={isOpen}
                      className="w-full flex items-start justify-between gap-6 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                    >
                      <span
                        className={`text-base sm:text-xl transition-colors ${
                          isOpen ? "text-white" : "text-white/70 hover:text-white"
                        }`}
                      >
                        {item.q}
                      </span>
                      <span
                        className={`shrink-0 pt-1 text-sm transition-colors ${
                          isOpen ? "text-[#FF4D58]" : "text-white/40"
                        }`}
                      >
                        {isOpen ? "Hide" : "Show"}
                      </span>
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-5 max-w-2xl text-white/60 leading-relaxed">{item.a}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>

        <div className="mt-20 sm:mt-28 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">
          {STATS.map((s) => (
            <Reveal key={s.label}>
              <div className="text-6xl sm:text-7xl leading-none" style={DISPLAY_FONT}>
                <CountUp to={s.to} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-sm text-white/55">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}