import type { Metadata } from "next";
import GlobalLegalPage from "@/components/global/GlobalLegalPage";
import { globalPrivacy } from "@/content/global-legal";
import { pageUrl, pageOpenGraph, languageAlternates } from "@/lib/seo";

const doc = globalPrivacy;
const title = `${doc.title} · Caldrik`;
const url = pageUrl("/privacy/");

export const metadata: Metadata = {
  title: { absolute: title },
  description: doc.description,
  alternates: { canonical: url, languages: languageAlternates("/privacy/", "/in/privacy/") },
  openGraph: { ...pageOpenGraph(url, title, doc.description), locale: "en_US" },
};

export default function PrivacyPage() {
  return <GlobalLegalPage doc={doc} />;
}
