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
import { jsonLdFaq } from "@/lib/home-jsonld";
import { jsonLdString } from "@/lib/jsonld";
import type { View } from "@/lib/posts";

const isDev = process.env.NODE_ENV !== "production";

// The homepage. `view` decides which Insights articles it shows (see lib/posts.ts).
export default function HomePage({ view = "all" }: { view?: View }) {
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
        <Insights view={view} />
        <TheDoorway />
      </main>
      <Footer />
    </div>
  );
}
