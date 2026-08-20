import { cn } from "@/lib/utils";
import * as React from "react";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-lg border border-white/[0.12] bg-white/[0.04] px-3 py-2 text-sm text-white shadow-sm transition-shadow placeholder:text-gray-500 focus-visible:border-[#5170ff]/50 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[#5170ff]/20 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
