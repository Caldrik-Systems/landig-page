"use client";

import { useId } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { events } from "@/lib/gtag";
import { hero } from "./content";

function HeroGrid() {
  const id = useId();
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        maskImage: "radial-gradient(ellipse 80% 90% at 20% -10%, white 5%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 80% 90% at 20% -10%, white 5%, transparent 100%)",
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

export default function PartnersHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#080f19]">
      <HeroGrid />

      {/* Brand radial glow, anchored left to match the left-aligned copy */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 60% 80% at 20% -10%, rgba(81,112,255,0.18) 0%, transparent 70%)" }}
      />

      {/* Bottom fade */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-[#080f19]" />

      <div className="mx-auto max-w-7xl px-6 pt-28 pb-12 sm:pt-32 sm:pb-16 lg:px-8 lg:pt-36 lg:pb-20">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-6 font-mono text-[11px] font-semibold tracking-[0.4em] text-brand/65 uppercase">{hero.eyebrow}</p>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {hero.headline.before}
            <span className="text-brand">{hero.headline.highlight}</span>
            {hero.headline.after}
          </h1>

          <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-gray-400">{hero.subhead}</p>

          <div className="mt-9 flex flex-col items-start gap-y-4 sm:flex-row sm:items-center sm:gap-x-8 sm:gap-y-0">
            <a
              href={hero.primaryCta.href}
              onClick={() => events.ctaClicked(hero.primaryCta.label, "partners_hero")}
              className="rounded-full bg-[#5170ff] px-8 py-3 text-sm font-semibold text-white"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              onClick={() => events.ctaClicked(hero.secondaryCta.label, "partners_hero")}
              className="text-sm/6 font-semibold text-white/80 transition-colors hover:text-white"
            >
              {hero.secondaryCta.label} <span aria-hidden>&rarr;</span>
            </a>
          </div>

          <p className="mt-10 max-w-2xl text-sm leading-6 text-gray-400">
            {hero.smallLine.intro}{" "}
            {hero.smallLine.links.map((link, i) => (
              <span key={link.href}>
                {i > 0 && " · "}
                <Link href={link.href} className="underline underline-offset-4 transition-colors hover:text-white">
                  {link.label}
                </Link>
              </span>
            ))}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
