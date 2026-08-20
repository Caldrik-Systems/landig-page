"use client";

import { motion, useReducedMotion } from "motion/react";
import { HowItWorks } from "@/components/ui/how-it-works";
import type { HowItWorksStep } from "@/components/ui/how-it-works";


const steps: HowItWorksStep[] = [
  {
    title: "Discover",
    description: "We run an automated readiness assessment — mapping decision nodes, scoring data viability, flagging missing eval baselines — before a line of code is written.",
  },
  {
    title: "Engineer",
    description: "Deployed inside your cloud boundary, grounded in your retrieval sources, orchestrated across your existing systems. Right model for the task, not the largest.",
  },
  {
    title: "Evaluate",
    description: "Every engagement delivers an eval harness. Each task gets a score, a threshold, and a status — so you know exactly where the system stands before it goes live.",
  },
  {
    title: "Realign",
    description: "Every model update or context shift triggers re-evaluation. When quality drifts, the baseline makes it visible — before it reaches production.",
  },
];

export default function HowWeWork() {
  const shouldReduceMotion = useReducedMotion();

  const wrapper = (children: React.ReactNode) =>
    shouldReduceMotion ? (
      <>{children}</>
    ) : (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.7 }}
      >
        {children}
      </motion.div>
    );

  return (
    <section id="how-we-work" className="bg-[#080f19] py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {wrapper(
          <div className="max-w-2xl mb-16">
            <p className="text-base/7 font-semibold text-brand">The Lifecycle</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Engineered. Not promised.
            </h2>
            <p className="mt-4 text-lg font-medium text-gray-400">
              One lifecycle, every engagement —{" "}
              <span className="text-white/80">AI behavior treated like uptime: defined, measured, maintained.</span>
            </p>
          </div>
        )}

        {wrapper(<HowItWorks steps={steps} />)}

      </div>
    </section>
  );
}
