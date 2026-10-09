"use client";

import { useId, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowsRightLeftIcon, CheckIcon, DocumentTextIcon, EyeSlashIcon, InformationCircleIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { faq, rules, workingTerms } from "./content";

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

export function SectionHeader({ label, headline, line, className = "max-w-2xl mb-10", compact = false }: { label?: string; headline: string; line?: string; className?: string; compact?: boolean }) {
  return (
    <Reveal className={className}>
      {label && <p className="text-base/7 font-semibold text-brand">{label}</p>}
      <h2 className={`mt-2 font-bold tracking-tight text-white ${compact ? "text-2xl sm:text-3xl md:text-4xl" : "text-3xl md:text-4xl lg:text-5xl"}`}>{headline}</h2>
      {line && <p className="mt-4 text-lg font-medium text-gray-400">{line}</p>}
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
    <section id="rules" className="bg-[#080f19] py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader label={rules.label} headline={rules.headline} compact className="mb-6 max-w-5xl md:mb-8" />

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.1fr_1fr]">
          {/* The promise that matters most gets the large card. */}
          <Reveal delay={0.2} className="h-full">
            <div className="relative flex h-full min-h-[220px] flex-col justify-between overflow-hidden rounded-2xl border border-brand/30 bg-brand/[0.06] p-7 md:p-8">
              <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_0%_0%,rgba(81,112,255,0.22),transparent_70%)]" />
              <GridTexture strong />
              <div className="relative flex size-11 items-center justify-center rounded-xl border border-brand/40 bg-brand/15">
                <HeroIcon aria-hidden className="size-6 text-brand" />
              </div>
              <div className="relative mt-8">
                <p className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">{hero.lead}</p>
                <p className="mt-3 max-w-md text-base leading-7 text-gray-400">{hero.rest}</p>
              </div>
            </div>
          </Reveal>

          {/* Supporting clauses */}
          <div className="grid gap-4">
            {rest.map((rule, i) => {
              const Icon = RULE_ICONS[rule.icon];
              return (
                <Reveal key={rule.lead} delay={0.3 + i * 0.1}>
                  <div className="group relative flex h-full gap-4 overflow-hidden rounded-2xl border border-dashed border-white/[0.15] p-5 transition-colors duration-300 hover:border-brand/40 hover:bg-white/[0.02]">
                    <GridTexture />
                    <div className="relative flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] transition-colors group-hover:border-brand/40">
                      <Icon aria-hidden className="size-5 text-brand/80" />
                    </div>
                    <p className="relative text-sm leading-6 text-gray-400">
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
    <section id="terms" className="scroll-mt-12 bg-[#080f19] py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mb-6 max-w-5xl md:mb-8">
          <p className="text-base/7 font-semibold text-brand">{t.label}</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">{t.headline}</h2>
          <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-lg font-medium text-gray-400">
            <span>{t.line}</span>
            <span className="inline-flex items-center rounded-full border border-brand/40 bg-brand/15 px-3 py-1 font-mono text-xs font-semibold text-brand">
              {t.kickoff}
            </span>
          </p>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {t.cards.map((card, i) => (
            <Reveal key={card.title} delay={0.2 + i * 0.1} className="h-full">
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-dashed border-white/[0.15] p-6 transition-colors duration-300 hover:border-brand/40 md:p-7">
                <GridTexture />
                <h3 className="relative text-xl font-bold text-white">{card.title}</h3>
                <p className="relative mt-3 text-sm leading-6 text-gray-400">
                  <span className="font-semibold text-white">{card.lead}</span> {card.rest}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* The margin promise */}
        <Reveal delay={0.4} className="mt-4">
          <p className="border-l-2 border-brand bg-gradient-to-r from-brand/[0.08] to-transparent py-3 pl-5 pr-4 text-base leading-7 text-gray-400">
            <span className="font-semibold text-white">{t.note}</span>
          </p>
        </Reveal>

        <Reveal delay={0.5} className="mt-4">
          <ul className="grid divide-y divide-dashed divide-white/[0.15] rounded-2xl border border-dashed border-white/[0.15] md:grid-cols-3 md:divide-x md:divide-y-0">
            {t.strip.map((item) => (
              <li key={item.text} className="flex items-start gap-3 p-5 font-mono text-xs leading-5 text-white/80">
                {item.kind === "assurance" ? (
                  <CheckIcon aria-hidden className="mt-0.5 size-4 shrink-0 text-brand" />
                ) : (
                  <InformationCircleIcon aria-hidden className="mt-0.5 size-4 shrink-0 text-white/50" />
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

/* ── 5. FAQ ────────────────────────────────────────────────────────────── */

export function PartnersFaq() {
  return (
    <section id="faq" className="bg-[#080f19] py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <SectionHeader headline={faq.headline} />
        <Accordion type="single" collapsible className="border-t border-dashed border-white/[0.12]">
          {faq.items.map((item, i) => (
            <AccordionItem key={item.q} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-base text-white">{item.q}</AccordionTrigger>
              <AccordionContent className="text-sm leading-6 text-gray-400">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
