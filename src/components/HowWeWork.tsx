"use client";

import { motion, useReducedMotion } from "motion/react";
import { HowItWorks } from "@/components/ui/how-it-works";
import type { HowItWorksStep } from "@/components/ui/how-it-works";


const steps: HowItWorksStep[] = [
  {
    title: "Discover",
    description: "Readiness assessed first. Data scored. Gaps flagged. Then we build.",
  },
  {
    title: "Engineer",
    description: "Inside your cloud. Grounded in your data. Right model, not the largest.",
  },
  {
    title: "Evaluate",
    description: "Every task gets a score, a threshold and a status before go-live.",
  },
  {
    title: "Realign",
    description: "Every change triggers re-evaluation. Drift is caught before users see it.",
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
    <section id="how-we-work" className="bg-[#080f19] py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {wrapper(
          <div className="max-w-3xl mb-14 md:mb-20">
            <p className="text-base/7 font-semibold text-brand">The Lifecycle</p>
            <h2 className="mt-3 text-4xl font-bold leading-[1.06] tracking-tight text-white md:text-5xl lg:text-6xl">
              Engineered. Not promised.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300 md:text-xl">
              One lifecycle, every engagement —{" "}
              <span className="font-medium text-white">AI behavior treated like uptime: defined, measured, maintained.</span>
            </p>
          </div>
        )}

        {wrapper(<HowItWorks steps={steps} />)}

      </div>
    </section>
  );
}
