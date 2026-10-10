import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import MarketPosts from "@/components/MarketPosts";

export default function Insights() {
  return (
    <section className="bg-[#080f19] py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="flex items-end justify-between mb-14 md:mb-20">
          <div>
            <p className="text-base/7 font-semibold text-brand">Insights</p>
            <h2 className="mt-3 text-4xl font-bold leading-[1.06] tracking-tight text-white md:text-5xl lg:text-6xl">
              From the engineering floor.
            </h2>
          </div>
          <Link
            href="/insights/"
            className="hidden sm:inline-flex rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors"
          >
            Browse all
          </Link>
        </div>

        <MarketPosts posts={getAllPosts()} limit={3} layout="home" />

        <div className="mt-8 sm:hidden text-center">
          <Link
            href="/insights/"
            className="inline-flex rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-gray-400"
          >
            Browse all insights
          </Link>
        </div>

      </div>
    </section>
  );
}
