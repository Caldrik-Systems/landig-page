import React from "react";
import { cn } from "@/lib/utils";
import { seededSquares } from "@/lib/grid-squares";
import { Reveal } from "@/components/Reveal";
import { StepVisualSlot } from "@/components/ui/step-visual-slot";

/* ── Shared grid pattern (same as FeatureCard) ───────────────────── */
function GridPattern({ width, height, x, y, squares, ...props }: React.ComponentProps<"svg"> & {
  width: number; height: number; x: string; y: string; squares?: [number, number][];
}) {
  const patternId = React.useId();
  return (
    <svg aria-hidden {...props}>
      <defs>
        <pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([sx, sy], i) => (
            <rect key={i} strokeWidth={0} width={width + 1} height={height + 1} x={sx * width} y={sy * height} />
          ))}
        </svg>
      )}
    </svg>
  );
}

/* ── Public exports ─────────────────────────────────────────────── */
export interface HowItWorksStep {
  title: string;
  description: string;
}

interface HowItWorksProps {
  steps: HowItWorksStep[];
  className?: string;
}

function StepColumn({ step, index }: { step: HowItWorksStep; index: number }) {
  const squares = seededSquares(index + 10, 5, 7, 4, 1, 6);

  return (
    <Reveal delay={index * 0.09}>
      <div className="relative flex flex-col overflow-hidden p-6 transition-colors duration-300 hover:bg-white/[0.02]">
        {/* Grid pattern — same double-mask as FeatureCard */}
        <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
          <div className="absolute inset-0 bg-gradient-to-r from-white/[0.05] to-white/[0.01] [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
            <GridPattern
              width={20} height={20} x="-12" y="4"
              squares={squares}
              className="fill-brand/[0.14] stroke-brand/20 absolute inset-0 h-full w-full mix-blend-overlay"
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col">
          <div className="font-mono text-[52px] font-bold leading-none text-white/[0.05] mb-4 select-none">
            {String(index + 1).padStart(2, "0")}
          </div>
          <div className="relative h-32 mb-5 overflow-hidden">
            <StepVisualSlot index={index} />
          </div>
          <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
          <p className="text-base leading-7 text-gray-300">{step.description}</p>
        </div>
      </div>
    </Reveal>
  );
}

export function HowItWorks({ steps, className }: HowItWorksProps) {
  return (
    <div className={cn(
      "grid grid-cols-1 md:grid-cols-4",
      "border border-dashed border-white/[0.15]",
      "divide-y divide-dashed divide-white/[0.15] md:divide-y-0 md:divide-x",
      className
    )}>
      {steps.map((step, i) => (
        <StepColumn key={step.title} step={step} index={i} />
      ))}
    </div>
  );
}
