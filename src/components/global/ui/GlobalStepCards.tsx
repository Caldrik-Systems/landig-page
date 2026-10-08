"use client";

import { motion } from "motion/react";
import { GlobalGridPattern, cardSquares } from "./GlobalGridPattern";

export type GlobalStep = { title: string; description: string };

function StepColumn({ step, index }: { step: GlobalStep; index: number }) {
  const squares = cardSquares(index);

  return (
    <motion.div
      className="relative flex flex-col overflow-hidden p-6 transition-colors duration-300 hover:bg-white/[0.02]"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ delay: index * 0.09, type: "spring", stiffness: 110, damping: 22, mass: 0.85 }}
    >
      <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
        <div className="absolute inset-0 bg-gradient-to-r from-white/[0.05] to-white/[0.01] [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
          <GlobalGridPattern
            width={20}
            height={20}
            x="-12"
            y="4"
            squares={squares}
            className="fill-brand/[0.14] stroke-brand/20 absolute inset-0 h-full w-full mix-blend-overlay"
          />
        </div>
      </div>

      <div className="relative z-10 flex flex-col">
        <div className="font-mono text-[52px] font-bold leading-none text-white/[0.05] mb-4 select-none">
          {String(index + 1).padStart(2, "0")}
        </div>
        <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
        <p className="text-sm leading-6 text-gray-400">{step.description}</p>
      </div>
    </motion.div>
  );
}

export function GlobalStepCards({ steps }: { steps: readonly GlobalStep[] }) {
  return (
    <div
      className={`grid grid-cols-1 ${steps.length === 3 ? "md:grid-cols-3" : "md:grid-cols-4"} border border-dashed border-white/[0.15] divide-y divide-dashed divide-white/[0.15] md:divide-y-0 md:divide-x`}
    >
      {steps.map((step, i) => (
        <StepColumn key={step.title} step={step} index={i} />
      ))}
    </div>
  );
}
