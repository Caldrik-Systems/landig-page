import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/posts";
import MarketPosts from "@/components/MarketPosts";
import { pageUrl, pageOpenGraph } from "@/lib/seo";

const title = "Insights";
const description = "AI engineering perspectives from the Caldrik team — on evaluation, reliability, and building AI systems for regulated industries.";
const url = pageUrl("/insights/");

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: pageOpenGraph(url, title, description),
};

export default function InsightsPage() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col flex-1 bg-[#080f19]">
      <Navigation />

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 pt-24 pb-24">
        <div className="max-w-5xl mb-14 md:mb-20">
          <p className="text-base/7 font-semibold text-brand">Insights</p>
          <h1 className="mt-3 text-4xl font-bold leading-[1.06] tracking-tight text-white md:text-5xl lg:text-6xl">
            From the engineering floor.
          </h1>
        </div>

        <MarketPosts posts={posts} layout="list" />
      </div>

      <Footer />
    </div>
  );
}
