"use client";

import type { ReactNode } from "react";
import { useMarketView } from "@/lib/use-market-view";

// Content that only makes sense for visitors in India (e.g. RBI / DPDP references).
// It is in the server-rendered page, so crawlers and visitors with unknown country or without
// JavaScript still get it; it is removed only once we know the visitor is outside India.
export default function IndiaOnly({ children }: { children: ReactNode }) {
  const { view } = useMarketView();
  return view === "global" ? null : <>{children}</>;
}
