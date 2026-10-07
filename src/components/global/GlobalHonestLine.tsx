"use client";

import { useId } from "react";
import { globalContent } from "@/content/global";

const { quote, attribution } = globalContent.honestLine;

function HonestGrid() {
  const squares = [[0, 3], [2, 7], [3, 2], [4, 5], [1, 9], [5, 4], [6, 8], [7, 1], [2, 5], [4, 10]];
  const patternId = useId();
  const W = 24;
  const H = 24;

  return (
    <div
      className="pointer-events-none absolute top-0 left-0 h-full w-3/5 overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, white 20%, transparent 90%)",
        WebkitMaskImage: "linear-gradient(to right, white 20%, transparent 90%)",
      }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          maskImage: "radial-gradient(farthest-side at left center, white, transparent)",
          WebkitMaskImage: "radial-gradient(farthest-side at left center, white, transparent)",
        }}
      >
        <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
          <defs>
            <pattern id={patternId} width={W} height={H} patternUnits="userSpaceOnUse" x="-12" y="4">
              <path d={`M.5 ${H}V.5H${W}`} fill="none" stroke="rgba(81,112,255,0.25)" strokeWidth="0.75" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${patternId})`} strokeWidth={0} />
          <svg x="-12" y="4" className="overflow-visible">
            {squares.map(([sx, sy], i) => (
              <rect key={i} width={W + 1} height={H + 1} x={sx * W} y={sy * H} fill="rgba(81,112,255,0.1)" strokeWidth={0} />
            ))}
          </svg>
        </svg>
      </div>
    </div>
  );
}

export default function GlobalHonestLine() {
  return (
    <section id="honest" className="bg-[#080f19] pt-16 md:pt-24 pb-0 px-6 lg:px-8" style={{ paddingBottom: 0 }}>
      <div className="mx-auto max-w-7xl">
        <div
          className="relative rounded-3xl overflow-hidden px-8 py-10 md:px-16 md:py-12"
          style={{ background: "linear-gradient(135deg, #cbd4ff 0%, #dde3ff 50%, #f0f2ff 100%)" }}
        >
          <HonestGrid />
          <div className="relative mx-auto max-w-4xl py-4 text-center">
            <p
              className="text-3xl font-medium leading-snug text-gray-700 italic md:text-4xl lg:text-5xl text-balance"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              {`“${quote}”`}
            </p>
            <p className="mt-5 text-[11px] font-semibold tracking-[0.18em] uppercase text-[#5170ff]/60">{attribution}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
