import postsData from "./posts-data.json";

// Which site(s) list a post. Posts without the field default to "india".
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

// Posts for one site: that market's own posts plus the ones tagged "both".
export function getPostsByMarket(market: "india" | "global"): PostMeta[] {
  return getAllPosts().filter((p) => p.market === market || p.market === "both");
}

export function getPost(slug: string): Post | null {
  const post = postsData.find((p) => p.slug === slug);
  return post ? ({ ...post, market: toMarket(post.market) } as Post) : null;
}
