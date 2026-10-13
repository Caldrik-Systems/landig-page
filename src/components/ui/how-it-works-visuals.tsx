"use client";

import { LazyMotion, domAnimation, m } from "motion/react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

/* ── 1. Discover — CLI assessment output ─────────────────────────── */
function DiscoverVisual() {
  const lines = [
    { text: "$ caldrik assess --input workflow.yaml", t: "cmd" },
    { text: "  analyzing workflow graph...", t: "dim" },
    { text: "  ✓ decision nodes mapped         14", t: "pass" },
    { text: "  ✓ data sources reachable          3", t: "pass" },
    { text: "  ✗ success criteria: undefined", t: "warn" },
    { text: "  ✓ infrastructure viable         yes", t: "pass" },
    { text: "  ✗ eval baselines: none found", t: "warn" },
    { text: "  assessment score: 58 / 100", t: "dim" },
    { text: "  → ready to scope. book discovery.", t: "info" },
  ];
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (phase < lines.length) {
      const t = setTimeout(() => setPhase((p) => p + 1), phase === 0 ? 400 : 440);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setPhase(0), 3000);
    return () => clearTimeout(t);
  }, [phase, lines.length]);

  return (
    <div className="h-full w-full overflow-hidden px-1 pt-0 pb-2 font-mono text-[10px] leading-[1.75]">
      <div className="mb-2.5 flex items-center gap-2">
        <div className="h-2.5 w-2.5 rounded-full bg-red-500/40" />
        <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/40" />
        <div className="h-2.5 w-2.5 rounded-full bg-green-500/40" />
        <span className="ml-2 text-[8px] text-white/25">caldrik-cli v1.4.0</span>
      </div>
      {lines.slice(0, phase).map((l, i) => (
        <div key={i} className={cn(
          l.t === "cmd"  ? "text-white/70" :
          l.t === "pass" ? "text-brand/90" :
          l.t === "warn" ? "text-amber-400/85" :
          l.t === "info" ? "text-white/85" :
          "text-white/35"
        )}>
          {l.text}
        </div>
      ))}
      {phase < lines.length && (
        <span aria-hidden className="inline-block h-[10px] w-[6px] translate-y-[1px] animate-pulse bg-brand/80" style={{ willChange: "opacity" }} />
      )}
    </div>
  );
}

/* ── 2. Engineer — VPC-style deployment diagram ──────────────────── */
function EngineerVisual() {
  const boundaryPath = "M7,18 L273,18 Q276,18 276,21 L276,90 Q276,93 273,93 L7,93 Q4,93 4,90 L4,21 Q4,18 7,18 Z";

  const nodes = [
    { x: 10, y: 34, w: 58, h: 42, label: ["Legacy", "Systems"] },
    { x: 104, y: 41, w: 66, h: 28, label: ["Orchestrator"] },
    { x: 204, y: 41, w: 62, h: 28, label: ["AI Model"] },
  ];

  const arrows = [
    { x1: 68, y1: 55, x2: 104, y2: 55, tag: "events" },
    { x1: 170, y1: 55, x2: 204, y2: 55, tag: "prompt" },
  ];

  return (
    <svg viewBox="0 0 280 110" className="relative z-10 h-full w-full" fill="none">
      <text x="8" y="10" fill="rgba(255,255,255,0.25)" fontSize="6.5" fontFamily="monospace">
        cloud_boundary  ·  deployment diagram
      </text>
      <m.path
        d={boundaryPath}
        stroke="rgba(81,112,255,0.22)" strokeWidth="1" strokeDasharray="6 4"
        fill="rgba(81,112,255,0.025)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
      />
      <m.text x="8" y="28" fill="rgba(81,112,255,0.38)" fontSize="6.5" fontFamily="monospace" letterSpacing="0.08em"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>
        your cloud boundary
      </m.text>
      {nodes.map((n, i) => (
        <m.g key={i}
          initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 + i * 0.28, duration: 0.4 }}>
          <rect x={n.x} y={n.y} width={n.w} height={n.h} rx="2"
            fill="rgba(81,112,255,0.09)" stroke="rgba(81,112,255,0.32)" strokeWidth="1" />
          <rect x={n.x} y={n.y} width={n.w} height="2" rx="1" fill="rgba(81,112,255,0.35)" />
          {n.label.length === 2 ? (
            <>
              <text x={n.x + n.w / 2} y={n.y + n.h / 2 - 2} textAnchor="middle"
                fill="rgba(81,112,255,0.9)" fontSize="8" fontFamily="monospace" fontWeight="700">{n.label[0]}</text>
              <text x={n.x + n.w / 2} y={n.y + n.h / 2 + 10} textAnchor="middle"
                fill="rgba(81,112,255,0.9)" fontSize="8" fontFamily="monospace" fontWeight="700">{n.label[1]}</text>
            </>
          ) : (
            <text x={n.x + n.w / 2} y={n.y + n.h / 2 + 3.5} textAnchor="middle"
              fill="rgba(81,112,255,0.9)" fontSize="8" fontFamily="monospace" fontWeight="700">{n.label[0]}</text>
          )}
        </m.g>
      ))}
      {arrows.map((a, i) => (
        <m.g key={i}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.9 + i * 0.28 }}>
          <line x1={a.x1} y1={a.y1} x2={a.x2 - 5} y2={a.y2}
            stroke="rgba(81,112,255,0.4)" strokeWidth="1" strokeDasharray="3 2" />
          <polygon
            points={`${a.x2},${a.y2} ${a.x2 - 5},${a.y2 - 3} ${a.x2 - 5},${a.y2 + 3}`}
            fill="rgba(81,112,255,0.45)" />
          <text x={(a.x1 + a.x2) / 2} y={a.y1 + 10} textAnchor="middle"
            fill="rgba(255,255,255,0.18)" fontSize="6" fontFamily="monospace">{a.tag}</text>
        </m.g>
      ))}
    </svg>
  );
}

/* ── 3. Evaluate — eval scorecard ────────────────────────────────── */
function EvaluateVisual() {
  const rows = [
    { task: "contract_review",  score: 94, status: "PASS" },
    { task: "email_triage",     score: 87, status: "PASS" },
    { task: "doc_extraction",   score: 71, status: "WARN" },
    { task: "risk_flag",        score: 96, status: "PASS" },
  ];

  return (
    <div className="relative z-10 h-full w-full font-mono text-[8.5px]">
      <div className="mb-1.5 flex justify-between border-b border-white/[0.08] pb-1 text-white/20 tracking-wider">
        <span>TASK</span>
        <div className="flex gap-5">
          <span>SCORE</span>
          <span>STATUS</span>
        </div>
      </div>
      {rows.map((r, i) => (
        <m.div key={i} className="flex items-center justify-between py-[5px]"
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.28 }}>
          <span className="text-white/45">{r.task}</span>
          <div className="flex items-center gap-5">
            <span className={r.score >= 80 ? "text-brand/80" : "text-amber-400/80"}>
              {r.score}%
            </span>
            <span className={cn(
              "rounded px-1.5 py-[1px] text-[7px] font-semibold tracking-wider",
              r.status === "PASS"
                ? "bg-brand/15 text-brand/75"
                : "bg-amber-400/10 text-amber-400/80"
            )}>
              {r.status}
            </span>
          </div>
        </m.div>
      ))}
    </div>
  );
}

/* ── 4. Keep Aligned — monitoring chart (compact for narrow column) ─ */
function KeepAlignedVisual() {
  const D = 3.5, WAIT = 2.2;
  // viewBox 220×90: x range 28–212, y range 8(90%)–62(60%), legend at y=82
  const actual = "M28,8 L74,8 C88,8 98,22 110,35 C122,46 130,56 148,60 C162,63 174,58 186,46 C198,34 208,24 212,18";

  return (
    <svg viewBox="0 0 220 90" className="relative z-10 h-full w-full" fill="none">
      <text x="28" y="6" fill="rgba(255,255,255,0.25)" fontSize="6.5" fontFamily="monospace">
        quality_score  ·  7-day window
      </text>
      {[{ y: 8, pct: "90%" }, { y: 35, pct: "75%" }, { y: 62, pct: "60%" }].map(({ y, pct }) => (
        <g key={y}>
          <line x1="28" y1={y} x2="212" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <text x="24" y={y + 3} textAnchor="end" fill="rgba(255,255,255,0.2)" fontSize="6.5" fontFamily="monospace">{pct}</text>
        </g>
      ))}
      {["W1","W2","W3","W4","W5"].map((w, i) => (
        <text key={w} x={28 + i * 46} y="74" textAnchor="middle"
          fill="rgba(255,255,255,0.2)" fontSize="6.5" fontFamily="monospace">{w}</text>
      ))}
      <line x1="28" y1="8" x2="212" y2="8" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="5 4" />
      <m.path
        d={`${actual} L212,62 L28,62 Z`}
        fill="rgba(81,112,255,0.06)"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 1, 1, 0] }}
        transition={{ duration: D, times: [0, 0.12, 0.28, 0.88, 1], repeat: Infinity, repeatDelay: WAIT }}
      />
      <m.path d={actual}
        stroke="#5170ff" strokeWidth="1.8" strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.9 }}
        transition={{ duration: D, ease: "easeInOut", repeat: Infinity, repeatDelay: WAIT }}
      />
      <m.line x1="148" y1="5" x2="148" y2="62"
        stroke="#5170ff" strokeWidth="1" strokeDasharray="3 3"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 0.6, 0.6, 0] }}
        transition={{ duration: D, times: [0, 0.5, 0.58, 0.88, 1], repeat: Infinity, repeatDelay: WAIT }}
      />
      <m.rect x="151" y="5" width="52" height="12" rx="1.5"
        fill="rgba(81,112,255,0.15)" stroke="rgba(81,112,255,0.3)" strokeWidth="0.8"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 1, 1, 0] }}
        transition={{ duration: D, times: [0, 0.52, 0.6, 0.88, 1], repeat: Infinity, repeatDelay: WAIT }}
      />
      <m.text x="177" y="13.5" textAnchor="middle"
        fill="rgba(81,112,255,0.9)" fontSize="7" fontFamily="monospace" fontWeight="600"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 1, 1, 0] }}
        transition={{ duration: D, times: [0, 0.52, 0.6, 0.88, 1], repeat: Infinity, repeatDelay: WAIT }}
      >
        ALERT −17%
      </m.text>
      <m.circle cx="212" cy="18" r="3" fill="#5170ff"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0,0,0,1,1], opacity: [0,0,0,1,0] }}
        transition={{ duration: D, times: [0,0.72,0.88,0.94,1], repeat: Infinity, repeatDelay: WAIT }}
      />
      <line x1="28" y1="84" x2="42" y2="84" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 3" />
      <text x="45" y="87" fill="rgba(255,255,255,0.2)" fontSize="6.5" fontFamily="monospace">baseline</text>
      <line x1="96" y1="84" x2="110" y2="84" stroke="rgba(81,112,255,0.7)" strokeWidth="1.5" />
      <text x="113" y="87" fill="rgba(81,112,255,0.5)" fontSize="6.5" fontFamily="monospace">actual</text>
    </svg>
  );
}


const VISUALS = [DiscoverVisual, EngineerVisual, EvaluateVisual, KeepAlignedVisual];

// Default export so next/dynamic can load this whole file lazily. The slot that renders it
// unmounts it when scrolled out of view, which stops the looping timers/animations inside.
export default function StepVisual({ index }: { index: number }) {
  const Visual = VISUALS[index];
  return (
    <LazyMotion features={domAnimation} strict>
      <Visual />
    </LazyMotion>
  );
}
