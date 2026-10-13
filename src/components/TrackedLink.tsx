"use client";

import type { ComponentProps } from "react";
import { events } from "@/lib/gtag";

// An anchor that reports a CTA click to analytics. Keeps the surrounding section a server component.
export default function TrackedLink({
  label,
  location,
  onClick,
  ...props
}: ComponentProps<"a"> & { label: string; location: string }) {
  return (
    <a
      {...props}
      onClick={(e) => {
        events.ctaClicked(label, location);
        onClick?.(e);
      }}
    />
  );
}
