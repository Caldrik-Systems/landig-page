import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import { AboutTeam, AboutWhy } from "@/components/about/AboutSections";
import HonestLine from "@/components/HonestLine";
import TheDoorway from "@/components/TheDoorway";
import { aboutMeta } from "@/components/about/content";
import { pageUrl, pageOpenGraph } from "@/lib/seo";

const { title, description } = aboutMeta;
const url = pageUrl("/about/");

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  openGraph: pageOpenGraph(url, title, description),
  robots: { index: true, follow: true },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col flex-1 bg-[#080f19]">
      <Navigation cta={{ name: "Discuss a Workflow", href: "#doorway" }} />
      <main className="flex flex-col flex-1">
        <AboutHero />
        <AboutWhy />
        <AboutTeam />
        {/* The homepage's statement card and enquiry form, as the close of the page */}
        <div className="bg-[#080f19] pt-24 md:pt-36">
          <HonestLine />
        </div>
        <TheDoorway />
      </main>
      <Footer />
    </div>
  );
}
