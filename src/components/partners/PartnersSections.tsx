"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowsRightLeftIcon, DocumentTextIcon, EyeSlashIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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

const dashedGrid = "grid grid-cols-1 divide-y divide-dashed divide-white/[0.15] border border-dashed border-white/[0.15]";

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
              <span
                aria-hidden
                className="pointer-events-none absolute right-6 top-3 select-none font-mono text-[88px] font-bold leading-none text-white/[0.05]"
              >
                01
              </span>
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
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] transition-colors group-hover:border-brand/40">
                      <Icon aria-hidden className="size-5 text-brand/80" />
                    </div>
                    <p className="text-sm leading-6 text-gray-400">
                      <span className="font-semibold text-white">{rule.lead}</span> {rule.rest}
                    </p>
                    <span aria-hidden className="absolute right-4 top-3 font-mono text-[10px] font-semibold tracking-[0.2em] text-white/25">
                      {String(i + 2).padStart(2, "0")}
                    </span>
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
  return (
    <section id="terms" className="bg-[#080f19] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader label={workingTerms.label} headline={workingTerms.headline} line={workingTerms.line} />
        <Reveal delay={0.3} className={`${dashedGrid} md:grid-cols-2 md:divide-x md:divide-y-0`}>
          {workingTerms.cards.map((card) => (
            <div key={card.title} className="relative flex flex-col gap-3 overflow-hidden p-6 md:p-8">
              <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(white,transparent)]">
                <div className="absolute inset-0 bg-gradient-to-r from-white/[0.04] to-white/[0.01] [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]" />
              </div>
              <h3 className="relative text-xl font-bold text-white">{card.title}</h3>
              <p className="relative text-sm leading-6 text-gray-400">{card.description}</p>
            </div>
          ))}
        </Reveal>
        <p className="mt-6 max-w-3xl text-sm leading-6 text-gray-400">{workingTerms.note}</p>
        <p className="mt-6 max-w-4xl font-mono text-sm leading-6 text-brand">{workingTerms.strip}</p>
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
