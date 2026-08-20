import Image from "next/image";
import { getAllPosts } from "@/lib/posts";

export default function Insights() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section className="bg-[#080f19] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#5170ff]/70 mb-2">Insights</p>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              From the engineering floor.
            </h2>
          </div>
          <a
            href="/insights"
            className="hidden sm:inline-flex rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors"
          >
            Browse all
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
              <div className="flex flex-col gap-4 p-6">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#5170ff]/70">
                    {post.category}
                  </span>
                  <span className="text-gray-700 text-xs">·</span>
                  <span className="text-xs text-gray-600">
                    {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white leading-snug group-hover:text-[#cbd4ff] transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 leading-6 flex-1">{post.excerpt}</p>
                <span className="text-xs font-semibold text-[#5170ff]/80">Read more →</span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 sm:hidden text-center">
          <a
            href="/insights"
            className="inline-flex rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-gray-400"
          >
            Browse all insights
          </a>
        </div>

      </div>
    </section>
  );
}
