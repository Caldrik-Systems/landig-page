import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HomePage from "@/components/HomePage";
import { pageUrl } from "@/lib/seo";
import type { View } from "@/lib/posts";

// Internal copy of "/" for visitors the middleware has placed in a market. Visitors never see this
// URL (it is a rewrite), and crawlers never get it; it exists so each market's page stays static.
const VIEWS = ["india", "global"];

export const dynamicParams = false;
export const generateStaticParams = () => VIEWS.map((view) => ({ view }));

export const metadata: Metadata = {
  alternates: { canonical: pageUrl("/") },
};

export default async function MarketHome({ params }: { params: Promise<{ view: string }> }) {
  const { view } = await params;
  if (!VIEWS.includes(view)) notFound();
  return <HomePage view={view as View} />;
}
