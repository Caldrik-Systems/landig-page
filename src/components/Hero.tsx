"use client";

import { useId } from "react";
import { events } from "@/lib/gtag";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { motion } from "motion/react";

function HeroGrid() {
  const id = useId();
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        maskImage: "radial-gradient(ellipse 90% 65% at 50% -5%, white 5%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 90% 65% at 50% -5%, white 5%, transparent 100%)",
      }}
    >
      <svg className="h-full w-full fill-brand/[0.08] stroke-brand/20" aria-hidden>
        <defs>
          <pattern id={id} width={20} height={20} patternUnits="userSpaceOnUse" x="-12" y="4">
            <path d="M.5 20V.5H20" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#080f19]">

      <HeroGrid />

      {/* Brand radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(81,112,255,0.18) 0%, transparent 70%)" }}
      />

      {/* Bottom fade */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#080f19]" />

      <div className="mx-auto max-w-5xl px-6 pt-28 pb-10 sm:pt-36 sm:pb-12 lg:px-8 lg:pt-40 lg:pb-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-8 font-mono text-[11px] font-semibold tracking-[0.4em] text-brand/65 uppercase">
            AI Engineering · Enterprise Systems
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Enterprise AI, <span className="text-brand">engineered</span>{" "}
            like infrastructure.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-xl font-medium leading-8 text-gray-400">
            End-to-end AI engineering for the workflows that can't afford to drift — designed, evaluated and maintained inside your cloud.
          </p>

          <div className="mt-12 flex flex-col items-center gap-y-4 sm:flex-row sm:justify-center sm:gap-x-8 sm:gap-y-0">
            <a href="#doorway" onClick={() => events.ctaClicked("Discuss a Workflow", "hero")} className="rounded-full bg-[#5170ff] px-8 py-3 text-sm font-semibold text-white">Discuss a Workflow</a>
            <a href="#how-we-work" className="text-sm/6 font-semibold text-white/80 transition-colors hover:text-white">
              See How We Work <span aria-hidden>&rarr;</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
