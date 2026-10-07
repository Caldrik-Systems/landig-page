import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HonestLine from "@/components/HonestLine";
import GlobalHero from "@/components/global/GlobalHero";
import GlobalDoorway from "@/components/global/GlobalDoorway";
import {
  GlobalGap,
  GlobalPartnership,
  GlobalCapabilities,
  GlobalStandard,
  GlobalRecentWork,
  GlobalEngagement,
  GlobalSafeguards,
  GlobalFaq,
} from "@/components/global/GlobalSections";
import { pageUrl, pageOpenGraph } from "@/lib/seo";

const title = "White-Label AI Engineering for Technology Services Firms · Caldrik";
const description =
  "The AI engineering team behind technology services firms. Production AI, evaluated and maintained inside your client's cloud, delivered under your name.";
const url = pageUrl("/global/");

// Testing phase: noindex so Google neither indexes this page nor treats it as a duplicate.
export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  openGraph: { ...pageOpenGraph(url, title, description), locale: "en_US" },
  robots: { index: false, follow: false },
};

const NAV_LINKS = [
  { name: "The Gap", anchor: "gap" },
  { name: "Partnership", anchor: "partnership" },
  { name: "Capabilities", anchor: "capabilities" },
  { name: "Standard", anchor: "standard" },
  { name: "Engagement", anchor: "engagement" },
  { name: "FAQ", anchor: "faq" },
];

export default function GlobalPage() {
  return (
    <div className="flex flex-col flex-1">
      <Navigation links={NAV_LINKS} cta={{ name: "Discuss a Partnership", anchor: "doorway" }} basePath="/global/" />
      <main className="flex flex-col flex-1">
        <GlobalHero />
        <GlobalGap />
        <GlobalPartnership />
        <GlobalCapabilities />
        <GlobalStandard />
        <GlobalRecentWork />
        <GlobalEngagement />
        <GlobalSafeguards />
        <HonestLine featured quote="Your client sees your name. Our job is making sure it holds up." />
        <GlobalFaq />
        <GlobalDoorway />
      </main>
      <Footer />
    </div>
  );
}
