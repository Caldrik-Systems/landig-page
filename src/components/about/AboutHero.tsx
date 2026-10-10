"use client";

import { useId } from "react";
import { motion } from "motion/react";
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

const serif = { fontFamily: "Georgia, 'Times New Roman', serif" };

// The name, set the way a dictionary would set it.
export default function AboutHero() {
  const { etymology: e, definition: d } = hero;
  return (
    <section className="relative isolate overflow-hidden bg-[#080f19]">
      <HeroGrid />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 60% 80% at 20% -10%, rgba(81,112,255,0.18) 0%, transparent 70%)" }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-[#080f19]" />

      <div className="mx-auto max-w-7xl px-6 pt-32 pb-20 sm:pt-40 sm:pb-28 lg:px-8 lg:pt-48 lg:pb-36">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-base/7 font-semibold text-brand">{hero.label}</p>

          <h1 className="mt-3 text-6xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
            <span className="sr-only">About </span>
            {hero.word}
          </h1>

          <p className="mt-4 text-xl text-gray-400">
            {hero.pronunciation} <span className="italic" style={serif}>{hero.partOfSpeech}</span>
          </p>
          <p className="mt-1 text-base text-gray-400">
            {e.origin} ·{" "}
            {e.parts.map((part, i) => (
              <span key={part.word}>
                {i > 0 && " + "}
                <span className="italic text-gray-300" style={serif}>{part.word}</span>, {part.meaning}
              </span>
            ))}
          </p>

          <p className="mt-12 text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
            {d.plain} <span className="text-brand">{d.accent}</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
