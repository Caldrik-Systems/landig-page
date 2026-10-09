"use client";

import { motion, useReducedMotion } from "motion/react";
import { FeatureCard } from "@/components/ui/grid-feature-cards";
import type { ReactNode } from "react";

const features = [
  {
    title: "The model moves under you.",
    description: "The model updates. Precise becomes plausible. Nothing tells you.",
  },
  {
    title: "The source of truth shifts.",
    description: "Sources, prompts and tools change. The cause becomes untraceable.",
  },
  {
    title: "Nothing crashes.",
    description: "The system returns 200 OK. The approval routes wrong anyway.",
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
    <section id="problem" className="bg-[#080f19] py-24 md:py-36">
      <div className="mx-auto w-full max-w-7xl space-y-14 md:space-y-20 px-6 lg:px-8">

        <AnimatedContainer className="max-w-3xl">
          <p className="text-base/7 font-semibold text-brand">Silent failure</p>
          <h2 className="mt-3 text-4xl font-bold leading-[1.06] tracking-tight text-white md:text-5xl lg:text-6xl">
            AI doesn&apos;t fail.<br />It drifts.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300 md:text-xl">
            Hallucination is the risk every procurement checklist asks about.{" "}
            <span className="font-medium text-white">Drift is the one nobody engineers for.</span>
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
