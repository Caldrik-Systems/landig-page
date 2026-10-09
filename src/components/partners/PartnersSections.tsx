"use client";

import { useId, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowsRightLeftIcon, CheckIcon, DocumentTextIcon, EyeSlashIcon, InformationCircleIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";
import { type Headline, rules, workingTerms } from "./content";

/* Section label + headline pattern shared with the rest of the site. */

export function Reveal({ className, delay = 0.1, children }: { className?: string; delay?: number; children: ReactNode }) {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return <div className={className}>{children}</div>;
  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({ label, headline, line, className = "max-w-3xl mb-14 md:mb-20" }: { label?: string; headline: Headline; line?: string; className?: string }) {
  return (
    <Reveal className={className}>
      {label && <p className="text-base/7 font-semibold text-brand">{label}</p>}
      <h2 className="mt-3 text-4xl font-bold leading-[1.06] tracking-tight text-white md:text-5xl lg:text-6xl">
        {typeof headline === "string" ? (
          headline
        ) : (
          <>
            {headline.plain} <span className="block text-brand">{headline.accent}</span>
          </>
        )}
      </h2>
      {line && <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300 md:text-xl">{line}</p>}
    </Reveal>
  );
}

/* The site's card texture: faint grid with a few highlighted squares (same as the Problem / Lifecycle cards). */

const TEXTURE_SQUARES = [[7, 1], [9, 3], [8, 5], [10, 2], [11, 4]];

function GridTexture({ strong = false }: { strong?: boolean }) {
  const id = useId();
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/[0.05] to-white/[0.01] [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
        <svg className={cn("absolute inset-0 h-full w-full stroke-brand/20 mix-blend-overlay", strong ? "fill-brand/[0.14]" : "fill-brand/[0.08]")}>
          <defs>
            <pattern id={id} width={20} height={20} patternUnits="userSpaceOnUse" x="-12" y="4">
              <path d="M.5 20V.5H20" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
          <svg x="-12" y="4" className="overflow-visible">
            {TEXTURE_SQUARES.map(([sx, sy]) => (
              <rect key={`${sx}-${sy}`} width={21} height={21} x={sx * 20} y={sy * 20} strokeWidth="0" />
            ))}
          </svg>
        </svg>
      </div>
    </div>
  );
}

/* ── 3. Rules of engagement ────────────────────────────────────────────── */

const RULE_ICONS = {
  accounts: UserGroupIcon,
  contract: DocumentTextIcon,
  privacy: EyeSlashIcon,
  split: ArrowsRightLeftIcon,
};

export function PartnersRules() {
  const [hero, ...rest] = rules.items;
  const HeroIcon = RULE_ICONS[hero.icon];

  return (
    <section
      id="rules"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#080f19_0%,#0b1a3c_50%,#080f19_100%)] py-24 md:py-40"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader label={rules.label} headline={rules.headline} />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-8">
          {/* The promise that matters most gets the large card. */}
          <Reveal delay={0.2} className="h-full">
            <div className="relative flex h-full min-h-[320px] flex-col justify-between overflow-hidden rounded-3xl border border-brand/30 bg-brand/[0.07] p-8 md:p-12">
              <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_0%_0%,rgba(81,112,255,0.24),transparent_70%)]" />
              <GridTexture strong />
              <div className="relative flex size-12 items-center justify-center rounded-xl border border-brand/40 bg-brand/15">
                <HeroIcon aria-hidden className="size-6 text-brand" />
              </div>
              <div className="relative mt-12">
                <p className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">{hero.lead}</p>
                <p className="mt-5 max-w-md text-lg leading-8 text-gray-300">{hero.rest}</p>
              </div>
            </div>
          </Reveal>

          {/* Supporting clauses */}
          <div className="grid gap-6">
            {rest.map((rule, i) => {
              const Icon = RULE_ICONS[rule.icon];
              return (
                <Reveal key={rule.lead} delay={0.3 + i * 0.1}>
                  <div className="group relative flex h-full gap-5 overflow-hidden rounded-2xl border border-dashed border-white/[0.18] bg-[#080f19]/60 p-7 transition-colors duration-300 hover:border-brand/40 md:p-8">
                    <GridTexture />
                    <div className="relative flex size-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-colors group-hover:border-brand/40">
                      <Icon aria-hidden className="size-6 text-brand/80" />
                    </div>
                    <p className="relative text-base leading-7 text-gray-300">
                      <span className="font-semibold text-white">{rule.lead}</span> {rule.rest}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 4. Working terms ──────────────────────────────────────────────────── */

export function PartnersWorkingTerms() {
  const t = workingTerms;
  return (
    <section id="terms" className="scroll-mt-12 bg-[#080f19] py-24 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mb-14 max-w-4xl md:mb-20">
          <p className="text-base/7 font-semibold text-brand">{t.label}</p>
          <h2 className="mt-3 text-4xl font-bold leading-[1.06] tracking-tight text-white md:text-5xl lg:text-6xl">
            {t.headline.plain} <span className="block text-brand">{t.headline.accent}</span>
          </h2>
          <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 text-lg leading-8 text-gray-300 md:text-xl">
            <span>{t.line}</span>
            <span className="inline-flex items-center rounded-full border border-brand/40 bg-brand/15 px-4 py-1.5 font-mono text-sm font-semibold text-brand">
              {t.kickoff}
            </span>
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {t.cards.map((card, i) => (
            <Reveal key={card.title} delay={0.2 + i * 0.1} className="h-full">
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-dashed border-white/[0.18] p-8 transition-colors duration-300 hover:border-brand/40 md:p-10">
                <GridTexture />
                <h3 className="relative text-2xl font-bold text-white">{card.title}</h3>
                <p className="relative mt-4 text-base leading-7 text-gray-300">
                  <span className="font-semibold text-white">{card.lead}</span> {card.rest}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* The margin promise */}
        <Reveal delay={0.4} className="mt-14 md:mt-20">
          <p className="max-w-4xl border-l-2 border-brand bg-gradient-to-r from-brand/[0.08] to-transparent py-4 pl-6 pr-4 text-xl leading-8 font-semibold text-white">
            {t.note}
          </p>
        </Reveal>

        <Reveal delay={0.5} className="mt-14 md:mt-16">
          <ul className="grid divide-y divide-dashed divide-white/[0.18] rounded-2xl border border-dashed border-white/[0.18] md:grid-cols-3 md:divide-x md:divide-y-0">
            {t.strip.map((item) => (
              <li key={item.text} className="flex items-start gap-3.5 p-6 font-mono text-sm leading-6 text-white/90">
                {item.kind === "assurance" ? (
                  <CheckIcon aria-hidden className="mt-0.5 size-5 shrink-0 text-brand" />
                ) : (
                  <InformationCircleIcon aria-hidden className="mt-0.5 size-5 shrink-0 text-white/60" />
                )}
                {item.text}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
