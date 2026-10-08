import type { Metadata } from "next";
import GlobalNavigation from "@/components/global/GlobalNavigation";
import GlobalFooter from "@/components/global/GlobalFooter";
import GlobalHero from "@/components/global/GlobalHero";
import GlobalDoorway from "@/components/global/GlobalDoorway";
import {
  GlobalPartnership,
  GlobalStandard,
  GlobalCapabilities,
  GlobalWorkingTerms,
  GlobalFaq,
} from "@/components/global/GlobalSections";
import { globalContent } from "@/content/global";
import { pageUrl, pageOpenGraph, LANGUAGE_ALTERNATES } from "@/lib/seo";
import { globalJsonLd } from "@/content/global-jsonld";

const { title, description } = globalContent.metadata;
const url = pageUrl("/");

// Primary site: indexed, canonical to itself, with hreflang pairing to the India site (/in/).
export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url, languages: LANGUAGE_ALTERNATES },
  openGraph: { ...pageOpenGraph(url, title, description), locale: "en_US" },
  twitter: { card: "summary_large_image", title, description, images: ["/og-image.jpg"] },
  robots: { index: true, follow: true },
};

export default function GlobalPage() {
  return (
    <div className="flex flex-col flex-1">
      {globalJsonLd.map((data) => (
        <script key={data["@type"]} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <GlobalNavigation />
      <main className="flex flex-col flex-1">
        <GlobalHero />
        <GlobalPartnership />
        <GlobalStandard />
        <GlobalCapabilities />
        <GlobalWorkingTerms />
        <GlobalFaq />
        <GlobalDoorway />
      </main>
      <GlobalFooter />
    </div>
  );
}
