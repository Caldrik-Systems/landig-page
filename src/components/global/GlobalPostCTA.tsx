"use client";

import { useId } from "react";
import Link from "next/link";
import { events } from "@/lib/gtag";
import { globalContent } from "@/content/global";

const { doorway, insights } = globalContent;

function Grid() {
  const patternId = useId();
  const W = 24;
  const H = 24;
  const squares = [[0, 3], [2, 7], [3, 2], [4, 5], [1, 9], [5, 4], [6, 8], [7, 1], [2, 5], [4, 10]];
  return (
    <div
      className="pointer-events-none absolute top-0 left-0 h-full w-3/5 overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, white 20%, transparent 90%)",
        WebkitMaskImage: "linear-gradient(to right, white 20%, transparent 90%)",
      }}
      aria-hidden="true"
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
  );
}

type GlobalPostCTAProps = { ctaHeadline?: string; ctaDescription?: string };

// End-of-article CTA for articles tagged "global": sends readers to the partner form on the global homepage.
export default function GlobalPostCTA({ ctaHeadline, ctaDescription }: GlobalPostCTAProps) {
  const headline = ctaHeadline ?? doorway.headline.join(" ");
  const description = ctaDescription ?? doorway.line;

  return (
    <div
      className="relative rounded-3xl overflow-hidden px-8 py-10 md:px-16 md:py-12"
      style={{ background: "linear-gradient(135deg, #cbd4ff 0%, #dde3ff 50%, #f0f2ff 100%)" }}
    >
      <Grid />
      <div className="relative">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl leading-[1.1] text-balance">{headline}</h2>
        <p className="mt-4 text-base leading-7 text-gray-700 max-w-lg">{description}</p>
        <Link
          href="/#doorway"
          onClick={() => events.ctaClicked(insights.postCta.button, "global_post_cta")}
          className="mt-7 inline-flex items-center rounded-full bg-[#5170ff] px-7 py-3 text-sm font-semibold text-white hover:bg-[#5170ff]/90 transition-colors"
        >
          {insights.postCta.button} →
        </Link>
      </div>
    </div>
  );
}
