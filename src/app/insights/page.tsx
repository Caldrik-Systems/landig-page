import type { Metadata } from "next";
import InsightsListing from "@/components/InsightsListing";
import { pageUrl, pageOpenGraph } from "@/lib/seo";

const title = "Insights";
const description = "AI engineering perspectives from the Caldrik team — on evaluation, reliability, and building AI systems for regulated industries.";
const url = pageUrl("/insights/");

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: pageOpenGraph(url, title, description),
};

export default function InsightsPage() {
  return <InsightsListing />;
}
