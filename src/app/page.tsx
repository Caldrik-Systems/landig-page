import type { Metadata } from "next";
import { pageUrl, pageOpenGraph } from "@/lib/seo";
import HomePage from "@/components/HomePage";

const url = pageUrl("/");

export const metadata: Metadata = {
  alternates: { canonical: url },
  openGraph: pageOpenGraph(
    url,
    "Caldrik | Enterprise AI Engineering for BFSI & Healthcare",
    "We build LLM systems for enterprise workflows that can't afford to drift — evaluated, monitored, and maintained inside your cloud.",
  ),
};

export default function Home() {
  return <HomePage />;
}
