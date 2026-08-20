import Image from "next/image";
import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Insights",
  description: "AI engineering perspectives from the Caldrik team — on evaluation, reliability, and building AI systems for regulated industries.",
};

export default function InsightsPage() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col flex-1 bg-[#080f19]">
      <Navigation />

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 pt-24 pb-24">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#5170ff]/70 mb-2">Insights</p>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            From the engineering floor.
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <a
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="group flex flex-col border border-white/[0.08] rounded-2xl overflow-hidden hover:border-white/[0.15] transition-colors"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-4 p-6 flex-1">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#5170ff]/70">
                    {post.category}
                  </span>
                  <span className="text-gray-700 text-xs">·</span>
                  <span className="text-xs text-gray-600">
                    {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                  </span>
                </div>
                <h2 className="text-base font-semibold text-white leading-snug group-hover:text-[#cbd4ff] transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 leading-6 flex-1">{post.excerpt}</p>
                <span className="text-xs font-semibold text-[#5170ff]/80">Read more →</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
