"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { globalContent as c } from "@/content/global";
import { GlobalFeatureCard } from "./ui/GlobalFeatureCard";
import { GlobalStepCards } from "./ui/GlobalStepCards";
import { GlobalAccordion, GlobalAccordionContent, GlobalAccordionItem, GlobalAccordionTrigger } from "./ui/GlobalAccordion";

/* Copy for every section lives in src/content/global.ts. */

function AnimatedContainer({ className, delay = 0.1, children }: { className?: string; delay?: number; children: ReactNode }) {
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

function SectionHeader({ label, headline, line, className = "max-w-2xl" }: { label: string; headline: ReactNode; line?: ReactNode; className?: string }) {
  return (
    <AnimatedContainer className={className}>
      <p className="text-base/7 font-semibold text-brand">{label}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">{headline}</h2>
      {line && <p className="mt-4 text-lg font-medium text-gray-400">{line}</p>}
    </AnimatedContainer>
  );
}

const dashedGrid = "grid grid-cols-1 divide-y divide-dashed divide-white/[0.15] border border-dashed border-white/[0.15]";
const twoCol = `${dashedGrid} md:grid-cols-2 md:divide-x md:divide-y-0`;

/* ── The gap ───────────────────────────────────────────────────────────── */

export function GlobalGap() {
  const s = c.gap;
  return (
    <section id="gap" className="bg-[#080f19] py-16 md:py-32">
      <div className="mx-auto w-full max-w-7xl space-y-8 px-6 lg:px-8">
        <SectionHeader
          label={s.label}
          headline={<>{s.headline[0]}<br />{s.headline[1]}</>}
          line={s.line}
        />
        <AnimatedContainer delay={0.4} className={`${dashedGrid} sm:grid-cols-3 sm:divide-x sm:divide-y-0`}>
          {s.cards.map((card) => (
            <GlobalFeatureCard key={card.title} title={card.title} description={card.description} />
          ))}
        </AnimatedContainer>
      </div>
    </section>
  );
}

/* ── The partnership ───────────────────────────────────────────────────── */

export function GlobalPartnership() {
  const s = c.partnership;
  return (
    <section id="partnership" className="bg-[#080f19] py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader label={s.label} headline={s.headline} line={s.line} className="max-w-2xl mb-12" />
        <AnimatedContainer delay={0.3} className={twoCol}>
          {s.columns.map((col) => (
            <div key={col.title} className="p-6 md:p-8">
              <h3 className="text-base font-bold text-white">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-6 text-gray-400">
                    <span aria-hidden className="mt-2.5 block h-[1.5px] w-4 shrink-0 rounded-full bg-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </AnimatedContainer>
        <p className="mt-6 font-mono text-sm text-brand">{s.callout}</p>
      </div>
    </section>
  );
}

/* ── Capabilities ──────────────────────────────────────────────────────── */

export function GlobalCapabilities() {
  const s = c.capabilities;
  return (
    <section id="capabilities" className="bg-[#080f19] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader label={s.label} headline={s.headline} line={s.line} className="max-w-2xl mb-10" />
        <div>
          {s.rows.map((row) => (
            <div
              key={row.name}
              className="group border-t border-white/[0.12] py-8 -mx-6 px-6 lg:-mx-8 lg:px-8 transition-colors duration-300 hover:bg-white/[0.025]"
            >
              <div className="md:grid md:grid-cols-[280px_1fr] md:gap-12 md:items-center">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-3xl md:text-4xl font-bold text-white">{row.name}</h3>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-base leading-7 text-gray-400">{row.description}</p>
                  <p className="font-mono text-sm text-brand">{row.callout}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-white/[0.12] -mx-6 lg:-mx-8" />
        </div>
      </div>
    </section>
  );
}

/* ── The standard ──────────────────────────────────────────────────────── */

export function GlobalStandard() {
  const s = c.standard;
  return (
    <section id="standard" className="bg-[#080f19] py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label={s.label}
          headline={s.headline}
          line={<>{s.line} <span className="text-white/80">{s.lineEmphasis}</span></>}
          className="max-w-3xl mb-16"
        />
        <GlobalStepCards steps={s.steps} />
        <p className="mt-6 font-mono text-xs leading-6 text-white/50 break-words">{s.stack}</p>
      </div>
    </section>
  );
}

/* ── Detail card (description + callout or → outcome) ──────────────────── */

function DetailCard({ title, description, callout, outcome }: { title: string; description: string; callout?: string; outcome?: string }) {
  return (
    <div className="relative flex flex-col gap-3 overflow-hidden p-6 md:p-8">
      <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(white,transparent)]">
        <div className="absolute inset-0 bg-gradient-to-r from-white/[0.04] to-white/[0.01] [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]" />
      </div>
      <h3 className="relative text-xl font-bold text-white">{title}</h3>
      <p className="relative text-sm leading-6 text-gray-400">{description}</p>
      {callout && <p className="relative font-mono text-sm text-brand">{callout}</p>}
      {outcome && <p className="relative text-sm leading-6 text-white/80">→ {outcome}</p>}
    </div>
  );
}

/* ── Recent work ───────────────────────────────────────────────────────── */

export function GlobalRecentWork() {
  const s = c.recentWork;
  return (
    <section id="work" className="bg-[#080f19] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader label={s.label} headline={s.headline} className="max-w-2xl mb-10" />
        <AnimatedContainer delay={0.3} className={twoCol}>
          {s.cards.map((card) => (
            <DetailCard key={card.title} title={card.title} description={card.description} callout={card.callout} />
          ))}
        </AnimatedContainer>
      </div>
    </section>
  );
}

/* ── Engagement models ─────────────────────────────────────────────────── */

export function GlobalEngagement() {
  const s = c.engagement;
  return (
    <section id="engagement" className="bg-[#080f19] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader label={s.label} headline={s.headline} line={s.line} className="max-w-2xl mb-10" />
        <AnimatedContainer delay={0.3} className={twoCol}>
          {s.cards.map((card) => (
            <DetailCard key={card.title} title={card.title} description={card.description} outcome={card.outcome} />
          ))}
        </AnimatedContainer>
        <p className="mt-6 max-w-3xl text-sm leading-6 text-gray-400">{s.note}</p>
      </div>
    </section>
  );
}

/* ── Safeguards ────────────────────────────────────────────────────────── */

export function GlobalSafeguards() {
  const s = c.safeguards;
  return (
    <section id="safeguards" className="bg-[#080f19] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader label={s.label} headline={s.headline} className="max-w-2xl mb-10" />
        <ul className="max-w-3xl space-y-4">
          {s.items.map((item) => (
            <li key={item} className="flex items-start gap-4 text-base leading-7 text-gray-400">
              <CheckIcon aria-hidden className="mt-1 size-5 shrink-0 text-brand" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── FAQ ───────────────────────────────────────────────────────────────── */

export function GlobalFaq() {
  const s = c.faq;
  return (
    <section id="faq" className="bg-[#080f19] py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <AnimatedContainer className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">{s.headline}</h2>
        </AnimatedContainer>
        <GlobalAccordion type="single" collapsible className="border-t border-dashed border-white/[0.12]">
          {s.items.map((item, i) => (
            <GlobalAccordionItem key={item.q} value={`faq-${i}`}>
              <GlobalAccordionTrigger className="text-left text-base text-white">{item.q}</GlobalAccordionTrigger>
              <GlobalAccordionContent className="text-sm leading-6 text-gray-400">{item.a}</GlobalAccordionContent>
            </GlobalAccordionItem>
          ))}
        </GlobalAccordion>
      </div>
    </section>
  );
}
