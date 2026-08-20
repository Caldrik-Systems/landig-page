"use client";

import { useState, useEffect, useId } from "react";

function HonestGrid() {
  const [squares, setSquares] = useState<number[][]>([]);
  const patternId = useId();
  const W = 24;
  const H = 24;

  useEffect(() => {
    setSquares(
      Array.from({ length: 10 }, () => [
        Math.floor(Math.random() * 8),
        Math.floor(Math.random() * 10) + 1,
      ])
    );
  }, []);

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
            <pattern
              id={patternId}
              width={W}
              height={H}
              patternUnits="userSpaceOnUse"
              x="-12"
              y="4"
            >
              <path
                d={`M.5 ${H}V.5H${W}`}
                fill="none"
                stroke="rgba(81,112,255,0.25)"
                strokeWidth="0.75"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${patternId})`} strokeWidth={0} />
          <svg x="-12" y="4" className="overflow-visible">
            {squares.map(([sx, sy], i) => (
              <rect
                key={i}
                width={W + 1}
                height={H + 1}
                x={sx * W}
                y={sy * H}
                fill="rgba(81,112,255,0.1)"
                strokeWidth={0}
              />
            ))}
          </svg>
        </svg>
      </div>
    </div>
  );
}

export default function HonestLine() {
  return (
    <section id="honest" className="bg-[#080f19] pt-16 md:pt-24 pb-0 px-6 lg:px-8" style={{ paddingBottom: 0 }}>
      <div className="mx-auto max-w-7xl">
        <div
          className="relative rounded-3xl overflow-hidden px-8 py-10 md:px-16 md:py-12"
          style={{
            background:
              "linear-gradient(135deg, #cbd4ff 0%, #dde3ff 50%, #f0f2ff 100%)",
          }}
        >
          <HonestGrid />

          <div className="relative flex flex-col lg:flex-row lg:items-center lg:gap-0">
            {/* Left anchor */}
            <div className="hidden lg:flex w-2/5 flex-col justify-center pr-12">
              <p
                className="text-3xl font-medium leading-snug text-gray-600 italic"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                &ldquo;A discovery that recommends not building is still a deliverable.&rdquo;
              </p>
              <p className="mt-3 text-[11px] font-semibold tracking-[0.18em] uppercase text-[#5170ff]/60">
                — Caldrik
              </p>
            </div>

            {/* Vertical divider */}
            <div className="hidden lg:block w-px self-stretch bg-[#5170ff]/20 flex-shrink-0" />

            {/* Right-aligned statement */}
            <div className="w-full lg:w-3/5 lg:pl-12 text-right">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl leading-[1.1] text-balance">
                Not every workflow is ready for AI.{" "}
                <span
                  className="italic"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  Yet.
                </span>
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-700">
                If your workflow isn&apos;t ready, we&apos;ll tell you — before
                you spend, not after.
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
