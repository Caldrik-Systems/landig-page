"use client";

import { useState, useEffect, useId } from "react";

function Grid() {
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

const categoryDefaults: Record<string, { headline: string; description: string }> = {
  "BFSI": {
    headline: "Building AI for a regulated workflow?",
    description: "We design AI systems for BFSI teams that need to pass an audit, not just a demo — compliant by design, monitored in production.",
  },
  "Reliability": {
    headline: "Is your AI system drifting right now?",
    description: "Most teams don't know until it's too late. We build the monitoring and eval pipelines that catch degradation before it reaches production.",
  },
  "AI Engineering": {
    headline: "Need an evaluation baseline before you build?",
    description: "We start every engagement with acceptance criteria, not a model selection debate. Share your workflow and we'll tell you what good looks like.",
  },
};

const defaultCTA = {
  headline: "Facing this in your stack?",
  description: "Share your workflow. We'll tell you if AI fits — and what it would take to build it properly.",
};

type PostCTAProps = {
  category?: string;
  ctaHeadline?: string;
  ctaDescription?: string;
};

export default function PostCTA({ category, ctaHeadline, ctaDescription }: PostCTAProps) {
  const fallback = (category && categoryDefaults[category]) || defaultCTA;
  const headline = ctaHeadline ?? fallback.headline;
  const description = ctaDescription ?? fallback.description;

  return (
    <div
      className="relative rounded-3xl overflow-hidden px-8 py-10 md:px-16 md:py-12"
      style={{ background: "linear-gradient(135deg, #cbd4ff 0%, #dde3ff 50%, #f0f2ff 100%)" }}
    >
      <Grid />

      <div className="relative flex flex-col lg:flex-row lg:items-center">
        {/* Left — quote */}
        <div className="hidden lg:flex w-2/5 flex-col justify-center pr-12">
          <p
            className="text-2xl font-medium leading-snug text-gray-600 italic"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            &ldquo;A technical opinion before you spend is worth more than a post-mortem after.&rdquo;
          </p>
          <p className="mt-3 text-[11px] font-semibold tracking-[0.18em] uppercase text-[#5170ff]/60">
            — Caldrik
          </p>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px self-stretch bg-[#5170ff]/20 flex-shrink-0" />

        {/* Right — CTA */}
        <div className="w-full lg:w-3/5 lg:pl-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl leading-[1.1] text-balance">
            {headline}
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-700 max-w-sm">
            {description}
          </p>
          <a
            href="/#doorway"
            className="mt-7 inline-flex items-center rounded-full bg-[#5170ff] px-7 py-3 text-sm font-semibold text-white hover:bg-[#5170ff]/90 transition-colors"
          >
            Request an assessment →
          </a>
        </div>
      </div>
    </div>
  );
}
