import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getPostsForView, type View } from "@/lib/posts";

// The Insights listing. `view` decides which articles it shows (see lib/posts.ts).
export default function InsightsListing({ view = "all" }: { view?: View }) {
  const posts = getPostsForView(view);

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <a
              key={post.slug}
              href={`/insights/${post.slug}/`}
              className="group flex flex-col border border-white/[0.08] rounded-2xl overflow-hidden hover:border-white/[0.15] transition-colors"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                <p className="text-[15px] text-gray-300 leading-6 flex-1">{post.excerpt}</p>
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
