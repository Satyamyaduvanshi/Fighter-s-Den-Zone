"use client";

import React from "react";
import { PROGRAMS } from "@/data/gymData";
import { CONTAINER, DISPLAY_FONT, H2, SECTION_PAD_WITH_BRUSH } from "./ui";
import { Reveal } from "./motion";
import { BrushTransition } from "./BrushTransition";

const SPANS = [
  "md:col-span-2 lg:col-span-4 lg:row-span-2",
  "lg:col-span-2",
  "lg:col-span-2 lg:row-span-2",
  "md:col-span-2 lg:col-span-4 lg:row-span-2",
];
const FALLBACK_SPAN = "lg:col-span-2";

export function ProgramsGrid() {
  return (
    <section id="programs" className="relative isolate bg-white text-black flex flex-col">
      {/* Pushes content down naturally so text never overlaps */}
      <BrushTransition variant={1} className="text-black" />
      
      <div className={`${CONTAINER} ${SECTION_PAD_WITH_BRUSH} relative z-10`}>
        <Reveal className="grid lg:grid-cols-12 gap-6 lg:gap-16 lg:items-end">
          <h2 className={`lg:col-span-7 ${H2}`} style={DISPLAY_FONT}>
            Find your
            <br />
            discipline
          </h2>
          <p className="lg:col-span-5 text-black/60 leading-relaxed max-w-md">
            Combat technique, motor skills and explosive fitness in one place. Kids, beginners and
            competing fighters each train in their own batch.
          </p>
        </Reveal>

        <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 lg:auto-rows-[190px] gap-3 sm:gap-4">
          {PROGRAMS.map((item, i) => (
            <Reveal
              key={item.id}
              className={`relative min-h-[260px] sm:min-h-[300px] lg:min-h-0 ${
                SPANS[i] ?? FALLBACK_SPAN
              }`}
            >
              <a
                href="#schedule"
                className="group absolute inset-0 block rounded-3xl overflow-hidden bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover grayscale-[25%] transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                <span className="absolute top-4 left-4 sm:top-5 sm:left-5 rounded-full bg-black/50 backdrop-blur-sm px-3 py-1 text-xs text-white/90">
                  {item.badge}
                </span>

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 text-white">
                  <h3
                    className="text-2xl sm:text-3xl lg:text-4xl uppercase leading-none"
                    style={DISPLAY_FONT}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/70">{item.subtitle}</p>
                </div>
              </a>
            </Reveal>
          ))}

          <Reveal className="md:col-span-2 lg:col-span-2 min-h-[200px] lg:min-h-0 rounded-3xl bg-black text-white p-6 sm:p-7 flex flex-col justify-between gap-6">
            <p className="text-2xl sm:text-3xl uppercase leading-[1.02]" style={DISPLAY_FONT}>
              Not sure where to start?
            </p>
            <a
              href="#trial"
              className="self-start text-sm text-white underline underline-offset-4 decoration-[#E11D2A] decoration-2 hover:decoration-white transition-colors"
            >
              Book a free class
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}