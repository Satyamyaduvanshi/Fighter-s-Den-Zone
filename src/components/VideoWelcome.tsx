"use client";

import React from "react";
import { GYM_INFO } from "@/data/gymData";
import { CONTAINER, DISPLAY_FONT, H2, SECTION_PAD_WITH_BRUSH } from "./ui";
import { Reveal } from "./motion";
import { BrushTransition } from "./BrushTransition";

export function VideoWelcome() {
  return (
    <section id="about" className="relative isolate bg-black text-white flex flex-col overflow-hidden">
      <BrushTransition variant={2} className="text-white" />
      
      <div className={`${CONTAINER} ${SECTION_PAD_WITH_BRUSH} relative z-10`}>
        <Reveal className="grid lg:grid-cols-12 gap-6 lg:gap-16 lg:items-end">
          <h2 className={`lg:col-span-7 ${H2}`} style={DISPLAY_FONT}>
            Train like
            <br />
            it matters
          </h2>
          <p className="lg:col-span-5 text-white/65 leading-relaxed max-w-md">
            Skip the boring treadmill routine. Real combat conditioning builds a sharp mind and a
            strong body. Followed by Seedhe Maut (@theycallmecalm and @encoreabj) and nearly 5,000
            others on Instagram.
          </p>
        </Reveal>

        <Reveal className="mt-12 sm:mt-14">
          <a
            href={GYM_INFO.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="relative block aspect-[4/3] sm:aspect-[16/9] rounded-t-3xl overflow-hidden [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <img
              src="https://images.unsplash.com/photo-1517438322307-e67111335449?auto=format&fit=crop&w=1600&q=75"
              alt="Training session at Fighter’s Den Zone"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover grayscale-[35%]"
            />
          </a>

          <div className="relative -mt-14 sm:-mt-20 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-6">
            <p className="text-2xl sm:text-4xl uppercase leading-none" style={DISPLAY_FONT}>
              Inside Rohini’s
              <br />
              combat gym
            </p>
            <a
              href={GYM_INFO.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-white underline underline-offset-4 decoration-[#E11D2A] decoration-2 hover:decoration-white transition-colors"
            >
              Watch training reels on Instagram
            </a>
          </div>
        </Reveal>

        <div className="mt-20 sm:mt-28">
          <Reveal>
            <h3 className="uppercase text-3xl sm:text-4xl lg:text-5xl leading-[0.98] tracking-tight" style={DISPLAY_FONT}>
              Why train
              <br />
              with us
            </h3>
          </Reveal>

          <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[230px] gap-3 sm:gap-4">
            <Reveal className="sm:col-span-2 lg:col-span-2 lg:row-span-2 rounded-3xl bg-white text-black p-7 sm:p-10 flex flex-col justify-between gap-10 min-h-[280px] lg:min-h-0">
              <h4
                className="text-3xl sm:text-5xl uppercase leading-[0.95]"
                style={DISPLAY_FONT}
              >
                A place you
                <br />
                can trust
              </h4>
              <p className="text-black/65 leading-relaxed max-w-sm">
                Certified combat coaches, clean pro-grade mats and a structured path to progress,
                with safety first.
              </p>
            </Reveal>

            <Reveal className="sm:col-span-2 lg:col-span-2 rounded-3xl bg-white text-black p-7 sm:p-8 flex flex-col justify-between gap-8 min-h-[220px] lg:min-h-0">
              <h4 className="text-2xl sm:text-4xl uppercase leading-[0.95]" style={DISPLAY_FONT}>
                Martial arts for everyone
              </h4>
              <p className="text-black/65 leading-relaxed">
                Separate batches for kids (5–13), women’s self-defence, fitness boxers and amateur
                or pro MMA fighters.
              </p>
            </Reveal>

            <Reveal className="relative min-h-[220px] lg:min-h-0">
              <div className="absolute inset-0 rounded-3xl overflow-hidden bg-zinc-900">
                <img
                  src="https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=800&q=75"
                  alt="Kids martial arts class"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover grayscale-[25%]"
                />
              </div>
            </Reveal>

            <Reveal className="rounded-3xl bg-white text-black p-7 flex flex-col justify-between gap-6 min-h-[220px] lg:min-h-0">
              <p className="text-5xl sm:text-6xl leading-none" style={DISPLAY_FONT}>
                22.3K
              </p>
              <p className="text-sm text-black/65 leading-snug">views on our most-watched reel</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}