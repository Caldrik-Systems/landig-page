"use client";

import { useId, useRef, useState, useEffect } from "react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { cn } from "@/lib/utils";

/* ── Right-panel UI mockups — each shows a real deliverable ── */

function DiscoveryMockup() {
  const rows = [
    { label: "Decision nodes mapped", v: "14 found", ok: true },
    { label: "Data sources reachable", v: "3 / 3", ok: true },
    { label: "Eval baselines", v: "none found", ok: false },
    { label: "Success criteria", v: "undefined", ok: false },
    { label: "Data boundary", v: "prod-gcp · verified", ok: true },
  ];
  return (
    <div className="flex h-full flex-col justify-center px-8 py-8 font-mono">
      <p className="mb-1 text-[9px] tracking-[0.4em] text-brand/50 uppercase">Readiness Assessment · workflow.yaml</p>
      <div className="mb-6 flex items-baseline gap-2">
        <span className="text-4xl font-bold text-brand/80">58</span>
        <span className="text-sm text-white/25">/ 100 readiness score</span>
      </div>
      <div className="mb-1 h-1 w-full overflow-hidden rounded-full bg-white/[0.06]">
        <div className="h-full rounded-full bg-brand/50" style={{ width: "58%" }} />
      </div>
      <div className="mb-6" />
      <div className="space-y-2.5">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center justify-between border-b border-white/[0.05] pb-2 text-[11px]">
            <span className="text-white/30">{r.label}</span>
            <span className={r.ok ? "text-brand/75" : "text-amber-400/75"}>{r.v}</span>
          </div>
        ))}
      </div>
      <p className="mt-5 text-sm text-white/70">→ engineering plan ready · you own it either way</p>
    </div>
  );
}

function EngineeringMockup() {
  const layers = [
    { label: "Cloud boundary", v: "prod-gcp · verified" },
    { label: "Data retrieval", v: "s3://internal-docs · live" },
    { label: "Model", v: "claude-3-5-sonnet · pinned" },
    { label: "Orchestrator", v: "workflow-v1.4 · deployed" },
    { label: "Auth scope", v: "IAM · least-privilege" },
    { label: "Eval harness", v: "attached · 4 tasks" },
  ];
  return (
    <div className="flex h-full flex-col justify-center px-8 py-8 font-mono">
      <p className="mb-5 text-[9px] tracking-[0.4em] text-brand/50 uppercase">Deployment manifest · prod-gcp</p>
      <div className="space-y-2.5">
        {layers.map((r) => (
          <div key={r.label} className="flex items-center justify-between border-b border-white/[0.05] pb-2 text-[11px]">
            <span className="text-white/30">{r.label}</span>
            <span className="text-brand/75">{r.v}</span>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded border border-brand/20 bg-brand/[0.06] px-4 py-3 text-[11px] text-brand/70">
        ✓ deployed in your cloud — no data crosses your boundary
      </div>
    </div>
  );
}

function ReliabilityMockup() {
  const tasks = [
    { name: "contract_review", score: 94, threshold: 85, pass: true },
    { name: "email_triage",    score: 87, threshold: 80, pass: true },
    { name: "doc_extraction",  score: 71, threshold: 80, pass: false },
    { name: "risk_flag",       score: 96, threshold: 90, pass: true },
  ];
  return (
    <div className="flex h-full flex-col justify-center px-8 py-8 font-mono">
      <p className="mb-5 text-[9px] tracking-[0.4em] text-brand/50 uppercase">Eval Harness · run #47</p>
      <div className="overflow-hidden rounded border border-white/[0.07]">
        <div className="grid grid-cols-4 gap-2 bg-white/[0.03] px-3 py-2 text-[10px] text-white/25">
          <span>task</span>
          <span className="text-right">score</span>
          <span className="text-right">threshold</span>
          <span className="text-right">status</span>
        </div>
        {tasks.map((t) => (
          <div key={t.name} className="grid grid-cols-4 gap-2 border-t border-white/[0.05] px-3 py-2.5 text-[11px]">
            <span className="text-white/40 truncate">{t.name}</span>
            <span className="text-right text-white/70">{t.score}%</span>
            <span className="text-right text-white/25">{t.threshold}%</span>
            <span className={cn("text-right font-semibold", t.pass ? "text-brand/80" : "text-amber-400/80")}>
              {t.pass ? "PASS" : "WARN"}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-white/70">3 / 4 passing · 1 below threshold · re-run triggered</p>
    </div>
  );
}

function ProductionMockup() {
  const bars = [65,70,72,68,75,80,78,82,79,83,85,81,84,88,86,90,88,92,91,94,96,93,97,95,98,96,99,98,99,99];
  const stats = [
    { label: "Uptime · 90 days", v: "99.9%", ok: true },
    { label: "Deployments",      v: "12",    ok: true },
    { label: "Incidents",        v: "0",     ok: true },
    { label: "Drift alerts",     v: "2 detected", ok: false },
    { label: "Last eval",        v: "6h ago · PASS", ok: true },
  ];
  return (
    <div className="flex h-full flex-col justify-center px-8 py-8 font-mono">
      <div className="mb-4 flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
        </span>
        <span className="text-[10px] tracking-widest text-brand/70 uppercase">All Systems Operational</span>
      </div>
      <div className="space-y-2.5">
        {stats.map((s) => (
          <div key={s.label} className="flex items-center justify-between border-b border-white/[0.05] pb-2 text-[11px]">
            <span className="text-white/30">{s.label}</span>
            <span className={s.ok ? "text-white/70" : "text-amber-400/80"}>{s.v}</span>
          </div>
        ))}
      </div>
      <div className="mt-5 flex h-8 items-end gap-[2px] opacity-30">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 rounded-[1px] bg-brand" style={{ height: `${h}%` }} />
        ))}
      </div>
      <p className="mt-2 text-sm text-white/70">uptime · 90-day window</p>
    </div>
  );
}

function ContinuousMockup() {
  const cycles = [
    { label: "Prompt iteration #12", when: "2d ago", tag: "shipped", ok: true },
    { label: "Model upgrade · sonnet-4", when: "5d ago", tag: "eval passed", ok: true },
    { label: "Threshold tightened · risk_flag", when: "8d ago", tag: "shipped", ok: true },
    { label: "Retrieval latency fix", when: "12d ago", tag: "shipped", ok: true },
    { label: "Doc extraction regression", when: "18d ago", tag: "patched", ok: false },
  ];
  return (
    <div className="flex h-full flex-col justify-center px-8 py-8 font-mono">
      <p className="mb-5 text-[9px] tracking-[0.4em] text-brand/50 uppercase">Continuous log · last 30 days</p>
      <div className="space-y-2.5">
        {cycles.map((c) => (
          <div key={c.label} className="flex items-start justify-between border-b border-white/[0.05] pb-2 text-[11px] gap-4">
            <span className="text-white/40 truncate">{c.label}</span>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-white/15">{c.when}</span>
              <span className={cn("rounded px-1.5 py-0.5 text-[9px]", c.ok ? "bg-brand/10 text-brand/70" : "bg-amber-400/10 text-amber-400/70")}>{c.tag}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-5 text-sm text-white/70">→ 12 iterations shipped this month · next eval in 4d</p>
    </div>
  );
}

/* ── Service data ── */

const MOCKUPS = [DiscoveryMockup, EngineeringMockup, ReliabilityMockup, ProductionMockup, ContinuousMockup];

const services = [
  {
    id: "01",
    title: "AI Readiness Assessment",
    description: "One workflow, assessed end to end. What AI can reliably do, what it can't yet, what it takes to build.",
    outcome: "A readiness assessment and engineering plan you own — regardless of what comes next.",
    tags: ["Readiness report", "Engineering plan", "Decision map"],
    cta: "Request an assessment",
  },
  {
    id: "02",
    title: "AI Engineering",
    description: "Right model for the task — not the largest one. Built inside your cloud boundary and grounded in your data.",
    outcome: "A working system deployed in your cloud, grounded in your data, with an eval harness from day one.",
    tags: ["Deployed system", "Eval harness", "Architecture doc"],
    cta: "Discuss an engagement",
  },
  {
    id: "03",
    title: "Reliability & Evaluation",
    description: "Whether we built it or someone else did — evaluation runs as a standalone engagement. Harness, baselines, acceptance criteria: every task gets a score, a threshold, and a status.",
    outcome: "A score, threshold, and status for every task. You know exactly where the system stands before it ships.",
    tags: ["Eval suite", "Threshold baselines", "Acceptance report"],
    cta: "See the methodology",
  },
  {
    id: "04",
    title: "AI Operations",
    description: "Deployment, monitoring, hardening. A build becomes a system your team can operate — with drift detection and re-evaluation built in.",
    outcome: "A live system your team can run — monitored, hardened, and re-evaluated when the model drifts.",
    tags: ["Monitoring setup", "Drift detection", "Runbook"],
    cta: "Discuss an engagement",
  },
  {
    id: "05",
    title: "Managed AI",
    description: "The system in production is not the finished system. Ongoing iteration — model upgrades, prompt tuning, threshold tightening, regression patching — keeps it ahead of drift.",
    outcome: "A living system that improves on a known cadence. Every change logged, evaluated, and shipped with evidence.",
    tags: ["Iteration log", "Monthly eval runs", "Change reports"],
    cta: "Discuss an engagement",
  },
];

/* ── Desktop content panel ── */

function ServicePanel({ s, i, isActive }: { s: typeof services[0]; i: number; isActive: boolean }) {
  const patternId = useId();
  const Mockup = MOCKUPS[i];

  return (
    <div
      aria-hidden={!isActive}
      className={cn(
        "absolute inset-0 flex flex-row transition-all duration-300",
        isActive
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-1 pointer-events-none"
      )}
    >
      {/* Left: copy + grid bg */}
      <div className="relative flex flex-col justify-center gap-5 flex-1 min-w-0 px-10 py-10 overflow-hidden">
        {/* Double-mask grid pattern */}
        <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(white,transparent)]">
          <div className="absolute inset-0 bg-gradient-to-r from-white/[0.04] to-white/[0.01] [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
            <svg className="absolute inset-0 h-full w-full fill-brand/[0.14] stroke-brand/20 mix-blend-overlay" aria-hidden>
              <defs>
                <pattern id={patternId} width={20} height={20} patternUnits="userSpaceOnUse" x="-12" y="4">
                  <path d="M.5 20V.5H20" fill="none" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
            </svg>
          </div>
        </div>

        {/* Large number watermark — reinforces position in sequence */}
        <span
          aria-hidden
          className="pointer-events-none select-none absolute right-8 bottom-4 font-bold leading-none text-white/[0.03] text-[110px]"
        >
          {s.id}
        </span>

        {/* Content */}
        <div className="relative z-10 space-y-3">
          <p className="text-sm leading-6 text-gray-400">{s.description}</p>
          <p className="text-sm leading-6 text-white/80">→ {s.outcome}</p>
        </div>
        <div className="relative z-10 flex flex-wrap gap-2">
          {s.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/[0.25] px-3 py-1 font-mono text-xs text-white/70">
              {tag}
            </span>
          ))}
        </div>
        <div className="relative z-10">
          <a href="#doorway" className="inline-block rounded-full bg-[#5170ff] px-6 py-2.5 text-sm font-semibold text-white">{s.cta}</a>
        </div>
      </div>

      {/* Right: mockup */}
      <div className="shrink-0 w-[42%] border-l border-dashed border-white/[0.10] bg-white/[0.015]">
        <Mockup />
      </div>
    </div>
  );
}

/* ── Section ── */

export default function Services() {
  const outerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState("01");

  useEffect(() => {
    const onScroll = () => {
      const el = outerRef.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const scrollable = height - window.innerHeight;
      if (scrollable <= 0) return;
      const progress = (-top) / scrollable;
      const clamped = Math.max(0, Math.min(0.999, progress));
      setActive(services[Math.floor(clamped * services.length)].id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={outerRef} className="md:h-[500vh]">
      <section
        id="services"
        className="md:sticky md:top-0 md:h-screen md:overflow-hidden bg-[#080f19]"
      >
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 h-full flex flex-col py-10">

          {/* Header */}
          <div className="flex-none mb-6">
            <p className="text-base/7 font-semibold text-brand">Services</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Five scopes. One standard.
            </h2>
            <p className="mt-4 text-lg font-medium text-gray-400">
              Designed to work as a sequence or standalone.{" "}
              <span className="text-white/70">Most engagements start with Discovery.</span>
            </p>
          </div>

          {/* ── Desktop: tab list + content panel ── */}
          <div className="hidden md:flex flex-1 min-h-0 border border-dashed border-white/[0.15]">

            {/* Left: always-visible tab list */}
            <div className="relative shrink-0 w-72 border-r border-dashed border-white/[0.12] flex flex-col">
              {services.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  className={cn(
                    "flex-1 w-full flex items-center gap-3 px-5 border-l-2 text-left transition-all duration-300",
                    "border-b border-dashed border-white/[0.08] last:border-b-0",
                    active === s.id
                      ? "border-l-brand bg-white/[0.04]"
                      : "border-l-transparent hover:bg-white/[0.02] hover:border-l-white/10"
                  )}
                >
                  <span className={cn(
                    "font-mono text-xs shrink-0 transition-colors duration-300",
                    active === s.id ? "text-brand/80" : "text-white/40"
                  )}>
                    {s.id}
                  </span>
                  <span className={cn(
                    "text-base font-medium leading-snug transition-colors duration-300",
                    active === s.id ? "text-white" : "text-white/60"
                  )}>
                    {s.title}
                  </span>
                </button>
              ))}

            </div>

            {/* Right: overlapping content panels */}
            <div className="relative flex-1 min-w-0">
              {services.map((s, i) => (
                <ServicePanel key={s.id} s={s} i={i} isActive={active === s.id} />
              ))}
            </div>

          </div>

          {/* ── Mobile: stacked tap-to-expand ── */}
          <div className="md:hidden flex-1 border border-dashed border-white/[0.15] divide-y divide-dashed divide-white/[0.08]">
            {services.map((s) => (
              <div key={s.id}>
                <button
                  onClick={() => setActive(active === s.id ? "" : s.id)}
                  className="w-full flex items-center gap-4 px-5 py-4 text-left"
                >
                  <span className={cn(
                    "font-mono text-[10px] shrink-0 transition-colors",
                    active === s.id ? "text-brand/80" : "text-white/40"
                  )}>{s.id}</span>
                  <span className={cn(
                    "text-sm font-medium flex-1 transition-colors",
                    active === s.id ? "text-white" : "text-white/70"
                  )}>{s.title}</span>
                  <span className={cn(
                    "shrink-0 block h-[1.5px] w-5 rounded-full transition-colors",
                    active === s.id ? "bg-brand" : "bg-white/[0.15]"
                  )} />
                </button>
                {active === s.id && (
                  <div className="px-5 pb-5 space-y-4">
                    <p className="text-sm leading-6 text-gray-400">{s.description}</p>
                    <p className="text-sm leading-6 text-white/80">→ {s.outcome}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/[0.25] px-3 py-1 font-mono text-xs text-white/70">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a href="#doorway" className="inline-block rounded-full bg-[#5170ff] px-6 py-2.5 text-sm font-semibold text-white">{s.cta}</a>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
