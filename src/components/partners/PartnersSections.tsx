"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faq, models, rules, ways, workingTerms } from "./content";

/* Section label + headline pattern shared with the rest of the site. */

function Reveal({ className, delay = 0.1, children }: { className?: string; delay?: number; children: ReactNode }) {
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

function SectionHeader({ label, headline, line, className = "max-w-2xl mb-10" }: { label?: string; headline: string; line?: string; className?: string }) {
  return (
    <Reveal className={className}>
      {label && <p className="text-base/7 font-semibold text-brand">{label}</p>}
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">{headline}</h2>
      {line && <p className="mt-4 text-lg font-medium text-gray-400">{line}</p>}
    </Reveal>
  );
}

const dashedGrid = "grid grid-cols-1 divide-y divide-dashed divide-white/[0.15] border border-dashed border-white/[0.15]";

/* ── 2. Ways to partner ────────────────────────────────────────────────── */

export function PartnersWays() {
  return (
    <section id="models" className="bg-[#080f19] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader label={ways.label} headline={ways.headline} />

        {/* md and up: table. Columns come from `models`. */}
        <Reveal delay={0.3} className="hidden md:block">
          <div className="border border-dashed border-white/[0.15]">
            <table className="w-full table-fixed border-collapse text-left text-sm">
              <caption className="sr-only">{ways.headline}</caption>
              <thead>
                <tr className="border-b border-dashed border-white/[0.15]">
                  <th scope="col" className="w-[20%] px-6 py-5">
                    <span className="sr-only">Model</span>
                  </th>
                  {models.map((m) => (
                    <th key={m.key} scope="col" className="border-l border-dashed border-white/[0.15] px-6 py-5 text-base font-bold text-white">
                      {m.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ways.rows.map((row) => (
                  <tr key={row.label} className="border-b border-dashed border-white/[0.15] last:border-b-0">
                    <th scope="row" className="px-6 py-5 align-top font-mono text-xs font-medium tracking-wide text-brand">
                      {row.label}
                    </th>
                    {models.map((m) => (
                      <td key={m.key} className="border-l border-dashed border-white/[0.15] px-6 py-5 align-top leading-6 text-gray-400">
                        {row.values[m.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* Below md: one stacked card per model. */}
        <div className="space-y-4 md:hidden">
          {models.map((m) => (
            <div key={m.key} className="border border-dashed border-white/[0.15] p-6">
              <h3 className="text-lg font-bold text-white">{m.name}</h3>
              <dl className="mt-4 space-y-4">
                {ways.rows.map((row) => (
                  <div key={row.label}>
                    <dt className="font-mono text-xs font-medium tracking-wide text-brand">{row.label}</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-400">{row.values[m.key]}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 3. Rules of engagement ────────────────────────────────────────────── */

export function PartnersRules() {
  return (
    <section id="rules" className="bg-[#080f19] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader label={rules.label} headline={rules.headline} />
        <Reveal delay={0.3}>
          <ul className={dashedGrid}>
            {rules.items.map((item) => (
              <li key={item} className="flex items-start gap-4 p-6 text-base leading-7 text-gray-400 md:px-8">
                <span aria-hidden className="mt-3 block h-[1.5px] w-5 shrink-0 rounded-full bg-brand" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
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
