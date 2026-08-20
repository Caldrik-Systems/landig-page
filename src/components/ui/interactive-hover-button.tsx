"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative cursor-pointer overflow-hidden border border-white/20 bg-transparent py-2.5 px-6 text-center font-semibold text-white",
        className,
      )}
      {...props}
    >
      <div className="absolute inset-0 z-0 -translate-x-full bg-brand transition-transform duration-300 ease-out group-hover:translate-x-0" />
      <span className="relative z-10 flex items-center justify-center gap-2">
        {text}
        <ArrowRight className="size-4 shrink-0 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
      </span>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
