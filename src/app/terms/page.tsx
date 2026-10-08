import type { Metadata } from "next";
import GlobalLegalPage from "@/components/global/GlobalLegalPage";
import { globalTerms } from "@/content/global-legal";
import { pageUrl, pageOpenGraph, languageAlternates } from "@/lib/seo";

const doc = globalTerms;
const title = `${doc.title} · Caldrik`;
const url = pageUrl("/terms/");

export const metadata: Metadata = {
  title: { absolute: title },
  description: doc.description,
  alternates: { canonical: url, languages: languageAlternates("/terms/", "/in/terms/") },
  openGraph: { ...pageOpenGraph(url, title, doc.description), locale: "en_US" },
};

export default function TermsPage() {
  return <GlobalLegalPage doc={doc} />;
}
