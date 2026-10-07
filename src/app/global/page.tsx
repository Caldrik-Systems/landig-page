import type { Metadata } from "next";
import GlobalNavigation from "@/components/global/GlobalNavigation";
import GlobalFooter from "@/components/global/GlobalFooter";
import GlobalHonestLine from "@/components/global/GlobalHonestLine";
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
import { globalContent } from "@/content/global";
import { pageUrl, pageOpenGraph } from "@/lib/seo";

const { title, description } = globalContent.metadata;
const url = pageUrl("/global/");

// Testing phase: noindex so Google neither indexes this page nor treats it as a duplicate.
export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  openGraph: { ...pageOpenGraph(url, title, description), locale: "en_US" },
  robots: { index: false, follow: false },
};

export default function GlobalPage() {
  return (
    <div className="flex flex-col flex-1">
      <GlobalNavigation />
      <main className="flex flex-col flex-1">
        <GlobalHero />
        <GlobalGap />
        <GlobalPartnership />
        <GlobalCapabilities />
        <GlobalStandard />
        <GlobalRecentWork />
        <GlobalEngagement />
        <GlobalSafeguards />
        <GlobalHonestLine />
        <GlobalFaq />
        <GlobalDoorway />
      </main>
      <GlobalFooter />
    </div>
  );
}
