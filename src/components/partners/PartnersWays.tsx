"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { events } from "@/lib/gtag";
import { models, ways, type Owner } from "./content";
import { Reveal, SectionHeader } from "./PartnersSections";

/**
 * Ways to partner: who holds what.
 * Every cell carries an ownership chip (You / Caldrik / Shared) so the three models can be compared
 * at a glance. Columns come from `models`; the data lives in ./content.ts.
 */

const intro = ways.rows.find((r) => r.intro);
const ledger = ways.rows.filter((r) => !r.intro);

const OWNER_LABEL: Record<Owner, string> = { you: "You", caldrik: "Caldrik", shared: "Shared" };

const chipStyle: Record<Owner, string> = {
  you: "border-brand/40 bg-brand/15 text-brand",
  caldrik: "border-white/20 bg-white/[0.04] text-white/70",
  shared: "border-white/25 bg-gradient-to-r from-brand/20 to-white/[0.06] text-white/80",
};

const dotStyle: Record<Owner, string> = {
  you: "bg-brand",
  caldrik: "bg-white/60",
  shared: "bg-gradient-to-r from-brand to-white/60",
};

function OwnerChip({ owner }: { owner: Owner }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em]",
        chipStyle[owner],
      )}
    >
      <span aria-hidden className={cn("h-1.5 w-1.5 rounded-full", dotStyle[owner])} />
      {OWNER_LABEL[owner]}
    </span>
  );
}

function ModelHeader({ index, name, modelKey, active }: { index: number; name: string; modelKey: string; active: boolean }) {
  return (
    <div className="relative overflow-hidden px-5 pb-4 pt-4">
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 bg-gradient-to-b to-transparent transition-opacity duration-300",
          active ? "from-brand/[0.16]" : "from-brand/[0.07]",
        )}
      />
      <div className="relative flex items-baseline gap-3">
        <span className="font-mono text-xs font-semibold tracking-[0.2em] text-brand/70">{String(index + 1).padStart(2, "0")}</span>
        <h3 className="text-xl font-bold tracking-tight text-white">{name}</h3>
      </div>
      {intro && (
        <div className="relative mt-3">
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-brand/80">{intro.label}</p>
          <p className="mt-1 text-sm font-medium leading-5 text-white/90">{intro.values[modelKey]}</p>
        </div>
      )}
    </div>
  );
}

// Chip and text side by side (stacked on narrow columns) so each row stays short.
function CellBody({ owner, text, inlineAlways = false }: { owner?: Owner; text: string; inlineAlways?: boolean }) {
  return (
    <div className={cn("flex items-start gap-2", inlineAlways ? "flex-row gap-3" : "flex-col lg:flex-row lg:gap-3")}>
      {owner && (
        <span className="w-[88px] shrink-0 lg:w-[92px]">
          <OwnerChip owner={owner} />
        </span>
      )}
      <p className="text-sm leading-5 text-gray-300 lg:pt-[3px]">{text}</p>
    </div>
  );
}

/* ── md and up: one comparison grid, column highlights on hover ────────── */

function WaysTable() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative hidden overflow-hidden rounded-2xl border border-dashed border-white/[0.15] md:block">
      <table className="w-full table-fixed border-collapse text-left" onMouseLeave={() => setActive(null)}>
        <caption className="sr-only">{ways.headline}</caption>
        <thead>
          <tr>
            <th scope="col" className="w-[18%] align-bottom">
              <span className="sr-only">Aspect</span>
            </th>
            {models.map((m, i) => (
              <th
                key={m.key}
                scope="col"
                onMouseEnter={() => setActive(m.key)}
                className="border-l border-dashed border-white/[0.15] align-top font-normal"
              >
                <ModelHeader index={i} name={m.name} modelKey={m.key} active={active === m.key} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ledger.map((row) => (
            <tr key={row.label} className="border-t border-dashed border-white/[0.15]">
              <th scope="row" className="px-5 py-3 align-top font-mono text-[11px] font-medium leading-5 tracking-wide text-white/70">
                {row.label}
              </th>
              {models.map((m) => (
                <td
                  key={m.key}
                  onMouseEnter={() => setActive(m.key)}
                  className={cn(
                    "border-l border-dashed border-white/[0.15] px-5 py-3 align-top transition-colors duration-300",
                    active === m.key && "bg-brand/[0.05]",
                  )}
                >
                  <CellBody owner={row.owners?.[m.key]} text={row.values[m.key]} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── below md: segmented selector, one model at a time ─────────────────── */

function WaysTabs() {
  const [activeKey, setActiveKey] = useState(models[0]?.key);
  const index = Math.max(0, models.findIndex((m) => m.key === activeKey));
  const model = models[index];
  if (!model) return null;

  return (
    <div className="md:hidden">
      <div role="tablist" aria-label={ways.headline} className="grid gap-1.5 rounded-2xl border border-dashed border-white/[0.15] p-1.5" style={{ gridTemplateColumns: `repeat(${models.length}, minmax(0, 1fr))` }}>
        {models.map((m) => (
          <button
            key={m.key}
            role="tab"
            type="button"
            id={`ways-tab-${m.key}`}
            aria-selected={m.key === model.key}
            aria-controls={`ways-panel-${m.key}`}
            onClick={() => {
              setActiveKey(m.key);
              events.ctaClicked(m.name, "partners_models");
            }}
            className={cn(
              "flex items-center justify-center rounded-xl px-2 py-3 text-center transition-colors",
              m.key === model.key ? "bg-brand/15 text-white ring-1 ring-brand/40" : "text-white/60 hover:bg-white/[0.04]",
            )}
          >
            <span className="whitespace-nowrap text-[13px] font-semibold leading-tight">{m.name}</span>
          </button>
        ))}
      </div>

      <motion.div
        key={model.key}
        role="tabpanel"
        id={`ways-panel-${model.key}`}
        aria-labelledby={`ways-tab-${model.key}`}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-3 overflow-hidden rounded-2xl border border-dashed border-white/[0.15]"
      >
        <ModelHeader index={index} name={model.name} modelKey={model.key} active />
        <dl className="divide-y divide-dashed divide-white/[0.15] border-t border-dashed border-white/[0.15]">
          {ledger.map((row) => (
            <div key={row.label} className="px-5 py-3">
              <dt className="font-mono text-[11px] font-medium tracking-wide text-white/70">{row.label}</dt>
              <dd className="mt-2">
                <CellBody owner={row.owners?.[model.key]} text={row.values[model.key]} inlineAlways />
              </dd>
            </div>
          ))}
        </dl>
      </motion.div>
    </div>
  );
}

export default function PartnersWays() {
  return (
    <section id="models" className="scroll-mt-12 bg-[#080f19] py-6 md:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader label={ways.label} headline={ways.headline} compact className="mb-5 max-w-5xl md:mb-6" />
        <Reveal delay={0.3}>
          <WaysTable />
          <WaysTabs />
        </Reveal>
      </div>
    </section>
  );
}
