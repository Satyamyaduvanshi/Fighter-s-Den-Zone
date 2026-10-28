"use client";

import React, { useState } from "react";
import { SCHEDULE_DATA } from "@/data/gymData";
import { CONTAINER, DISPLAY_FONT, H2, SECTION_PAD_WITH_BRUSH, CurvyUnderline } from "./ui";
import { Reveal } from "./motion";
import { BrushTransition } from "./BrushTransition";

type Filter = "all" | "mma" | "striking" | "kids";

const TABS: { id: Filter; label: string }[] = [
  { id: "all", label: "All batches" },
  { id: "mma", label: "MMA and BJJ" },
  { id: "striking", label: "Boxing and kickboxing" },
  { id: "kids", label: "Kids" },
];

export function Timetable() {
  const [filter, setFilter] = useState<Filter>("all");

  const rows =
    filter === "all" ? SCHEDULE_DATA : SCHEDULE_DATA.filter((row) => row.category === filter);

  const daysOf = (row: (typeof SCHEDULE_DATA)[number]) =>
    [
      ["Mon", row.mon],
      ["Tue", row.tue],
      ["Wed", row.wed],
      ["Thu", row.thu],
      ["Fri", row.fri],
      ["Sat", row.sat],
    ] as const;

  return (
    <section id="schedule" className="relative isolate bg-white text-black flex flex-col">
      <BrushTransition variant={3} className="text-black" />
      
      <div className={`${CONTAINER} ${SECTION_PAD_WITH_BRUSH} relative z-10`}>
        <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <div className="inline-block w-fit">
              <h2 className={H2} style={DISPLAY_FONT}>
                Weekly
                <br />
                batches
              </h2>
              <CurvyUnderline className="text-[#E11D2A] w-full h-2 sm:h-3 mt-1 sm:mt-2" />
            </div>
            <p className="mt-6 text-black/60 max-w-md leading-relaxed">
              The same timetable we keep pinned on our Instagram. Pick a batch, then book a free
              trial.
            </p>
          </div>

          <div role="tablist" className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={filter === tab.id}
                onClick={() => setFilter(tab.id)}
                className={`transition-colors underline-offset-8 decoration-2 decoration-[#E11D2A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-black ${
                  filter === tab.id ? "text-black underline" : "text-black/45 hover:text-black/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-12 sm:mt-14">
          <div className="grid sm:grid-cols-2 gap-3 lg:hidden">
            {rows.map((row, idx) => (
              <div key={idx} className="rounded-2xl bg-black/[0.04] p-5">
                <p className="font-semibold text-[#E11D2A]">{row.time}</p>
                <dl className="mt-3 grid grid-cols-[2.5rem_1fr] gap-x-3 gap-y-1.5 text-sm">
                  {daysOf(row).map(([day, value]) =>
                    value ? (
                      <React.Fragment key={day}>
                        <dt className="text-black/45">{day}</dt>
                        <dd className="text-black/80">{value}</dd>
                      </React.Fragment>
                    ) : null
                  )}
                </dl>
              </div>
            ))}
          </div>

          <table className="hidden lg:table w-full text-left border-separate border-spacing-0 text-sm">
            <thead>
              <tr className="text-black/45">
                <th className="py-3 px-4 font-normal">Time</th>
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                  <th key={d} className="py-3 px-4 font-normal">
                    {d}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx} className="odd:bg-black/[0.04] hover:bg-black/[0.07] transition-colors">
                  <td className="py-5 px-4 first:rounded-l-xl font-semibold text-[#E11D2A] whitespace-nowrap">
                    {row.time}
                  </td>
                  {daysOf(row).map(([day, value], i, arr) => (
                    <td
                      key={day}
                      className={`py-5 px-4 text-black/80 ${i === arr.length - 1 ? "rounded-r-xl" : ""}`}
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}