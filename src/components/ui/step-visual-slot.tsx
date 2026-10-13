"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

// The animated mock-ups are decorative and live in their own chunk, so the animation library stays
// off the critical path. Mounted only while on screen: scrolling away stops their timers and loops.
const StepVisual = dynamic(() => import("./how-it-works-visuals"), { ssr: false });

export function StepVisualSlot({ index }: { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      rootMargin: "100px",
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} aria-hidden="true" className="h-full w-full">
      {visible && <StepVisual index={index} />}
    </div>
  );
}
