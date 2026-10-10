"use client";

import Image from "next/image";
import { filterForView, type PostMeta } from "@/lib/posts";
import { useMarketView } from "@/lib/use-market-view";
import { cn } from "@/lib/utils";

// The server renders every article (so the page is complete without JavaScript, and for crawlers).
// In the browser we ask /api/geo/ for the visitor's country and keep only that market's articles
// (plus those tagged "both"). The list is held invisible until we know, so nothing flashes; if the
// lookup fails or is slow, everything is shown.
export default function MarketPosts({ posts, limit, layout }: { posts: PostMeta[]; limit?: number; layout: "home" | "list" }) {
  const { view, ready } = useMarketView();

  let shown = filterForView(posts, view);
  if (shown.length === 0) shown = posts;
  if (limit) shown = shown.slice(0, limit);

  const home = layout === "home";

  return (
    <>
      {/* Without JavaScript nothing ever marks the list ready, so show it as rendered */}
      <noscript>
        <style>{`[data-market-posts]{opacity:1!important}`}</style>
      </noscript>
      <div
        data-market-posts
        className={cn(
          "grid grid-cols-1 gap-6 transition-opacity duration-300",
          home ? "sm:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-3",
          ready ? "opacity-100" : "opacity-0",
        )}
      >
        {shown.map((post) => (
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
                sizes={home ? "(max-width: 640px) 100vw, 33vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-4 p-6 flex-1">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#5170ff]/70">{post.category}</span>
                <span className="text-gray-700 text-xs">·</span>
                <span className="text-xs text-gray-600">
                  {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                </span>
              </div>
              {home ? (
                <h3 className="text-base font-semibold text-white leading-snug group-hover:text-[#cbd4ff] transition-colors">{post.title}</h3>
              ) : (
                <h2 className="text-base font-semibold text-white leading-snug group-hover:text-[#cbd4ff] transition-colors">{post.title}</h2>
              )}
              <p className="text-[15px] text-gray-300 leading-6 flex-1">{post.excerpt}</p>
              <span className="text-xs font-semibold text-[#5170ff]/80">Read more →</span>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
