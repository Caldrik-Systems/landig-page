import type { Metadata } from "next";
import { pageUrl, pageOpenGraph } from "@/lib/seo";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TheProblem from "@/components/TheProblem";
import HowWeWork from "@/components/HowWeWork";
import Services from "@/components/Services";
import Focus from "@/components/Focus";
import HonestLine from "@/components/HonestLine";
import TheDoorway from "@/components/TheDoorway";
import Footer from "@/components/Footer";
import TrustedClients from "@/components/TrustedClients";
import Insights from "@/components/Insights";
import Partners from "@/components/Partners";
import PartnerTeaser from "@/components/PartnerTeaser";
import { jsonLdFaq } from "@/lib/home-jsonld";
import { jsonLdString } from "@/lib/jsonld";

const url = pageUrl("/");

export const metadata: Metadata = {
  alternates: { canonical: url },
  openGraph: pageOpenGraph(
    url,
    "Caldrik | Enterprise AI Engineering for BFSI & Healthcare",
    "We build LLM systems for enterprise workflows that can't afford to drift — evaluated, monitored, and maintained inside your cloud.",
  ),
};

const isDev = process.env.NODE_ENV !== "production";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(jsonLdFaq) }} />
      <Navigation />
      <main className="flex flex-col flex-1">
        <Hero />
        {isDev && <TrustedClients />}
        <TheProblem />
        <HowWeWork />
        <Services />
        {isDev && <Partners />}
        <Focus />
        <HonestLine />
        {isDev && <PartnerTeaser />}
        <Insights />
        <TheDoorway />
      </main>
      <Footer />
    </div>
  );
}
