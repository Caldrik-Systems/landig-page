import postsData from "./posts-data.json";

// Who an article is for. Set `market` in the post's frontmatter; posts without it default to "india".
//   india  - shown to visitors in India
//   global - shown to visitors outside India
//   both   - shown to everyone
export type Market = "india" | "global" | "both";

export const DEFAULT_MARKET: Market = "india";

function toMarket(value: unknown): Market {
  return value === "global" || value === "both" || value === "india" ? value : DEFAULT_MARKET;
}

export type PostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  market: Market;
  image: string;
  ctaHeadline?: string;
  ctaDescription?: string;
};

export type Post = PostMeta & { contentHtml: string };

export function getAllPosts(): PostMeta[] {
  return postsData.map((post) => {
    const meta: Partial<typeof post> = { ...post };
    delete meta.contentHtml;
    return { ...meta, market: toMarket(post.market) } as PostMeta;
  });
}

export function getPost(slug: string): Post | null {
  const post = postsData.find((p) => p.slug === slug);
  return post ? ({ ...post, market: toMarket(post.market) } as Post) : null;
}

// Which list a visitor sees: "india" / "global" show that market's posts plus "both";
// "all" (crawlers, unknown country) shows everything.
export type View = "all" | "india" | "global";

export function filterForView<T extends { market: Market }>(posts: T[], view: View): T[] {
  return view === "all" ? posts : posts.filter((p) => p.market === view || p.market === "both");
}
