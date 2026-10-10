import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import { AboutClosing, AboutCompany, AboutTeam, AboutWhy } from "@/components/about/AboutSections";
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
      <Navigation cta={{ name: "Discuss a Workflow", href: "/#doorway" }} />
      <main className="flex flex-col flex-1">
        <AboutHero />
        <AboutWhy />
        <AboutCompany />
        <AboutTeam />
        <AboutClosing />
      </main>
      <Footer />
    </div>
  );
}
