import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PartnersHero from "@/components/partners/PartnersHero";
import PartnersClosing from "@/components/partners/PartnersClosing";
import PartnersForm from "@/components/partners/PartnersForm";
import { PartnersRules, PartnersWorkingTerms } from "@/components/partners/PartnersSections";
import PartnersWays from "@/components/partners/PartnersWays";
import { faq, partnersMeta } from "@/components/partners/content";
import { jsonLdString } from "@/lib/jsonld";
import { pageUrl, pageOpenGraph } from "@/lib/seo";

const { title, description } = partnersMeta;
const url = pageUrl("/partners/");

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  openGraph: { ...pageOpenGraph(url, title, description), locale: "en_US" },
  robots: { index: true, follow: true },
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function PartnersPage() {
  return (
    <div className="flex flex-col flex-1 bg-[#080f19]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(jsonLdFaq) }} />
      <Navigation cta={{ name: "Discuss a Partnership", href: "#doorway" }} />
      <main className="flex flex-col flex-1">
        <PartnersHero />
        <PartnersWays />
        <PartnersRules />
        <PartnersWorkingTerms />
        <PartnersClosing />
        <PartnersForm />
      </main>
      <Footer />
    </div>
  );
}
