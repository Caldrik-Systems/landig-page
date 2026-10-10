import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InsightsListing from "@/components/InsightsListing";
import { pageUrl } from "@/lib/seo";
import type { View } from "@/lib/posts";

// Internal copy of "/insights/" for visitors the middleware has placed in a market (see ../page.tsx).
const VIEWS = ["india", "global"];

export const dynamicParams = false;
export const generateStaticParams = () => VIEWS.map((view) => ({ view }));

export const metadata: Metadata = {
  title: "Insights",
  alternates: { canonical: pageUrl("/insights/") },
};

export default async function MarketInsights({ params }: { params: Promise<{ view: string }> }) {
  const { view } = await params;
  if (!VIEWS.includes(view)) notFound();
  return <InsightsListing view={view as View} />;
}
