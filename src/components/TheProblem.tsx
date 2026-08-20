"use client";

import { motion, useReducedMotion } from "motion/react";
import { FeatureCard } from "@/components/ui/grid-feature-cards";
import type { ReactNode } from "react";

const features = [
  {
    title: "The model moves under you.",
    description: "The base model updates and what was precise quietly becomes plausible. A contract clause gets missed, a compliance check passes when it shouldn't — and nothing fired to tell you.",
  },
  {
    title: "The source of truth shifts.",
    description: "Every input to the system changes — retrieval sources, prompts, tool interfaces, model context. By the time outputs degrade, the cause is untraceable.",
  },
  {
    title: "Nothing crashes.",
    description: "No alert fires, no exception raised — the system returns 200 OK. Meanwhile an approval routes wrong and a review misses the exception.",
  },
];

type AnimatedContainerProps = {
  delay?: number;
  className?: string;
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: AnimatedContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return <>{children}</>;

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

export default function TheProblem() {
  return (
    <section id="problem" className="bg-[#080f19] py-16 md:py-32">
      <div className="mx-auto w-full max-w-7xl space-y-8 px-6 lg:px-8">

        <AnimatedContainer className="max-w-2xl">
          <p className="text-base/7 font-semibold text-brand">Silent failure</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            AI doesn't fail.<br />It drifts.
          </h2>
          <p className="mt-4 text-lg font-medium text-gray-400">
            Hallucination is the risk every procurement checklist asks about.{" "}
            <span className="text-white/80">Drift is the one nobody engineers for.</span>
          </p>
        </AnimatedContainer>

        <AnimatedContainer
          delay={0.4}
          className="grid grid-cols-1 divide-y divide-dashed divide-white/[0.15] border border-dashed border-white/[0.15] sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        >
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} />
          ))}
        </AnimatedContainer>

      </div>
    </section>
  );
}
