import postsData from "./posts-data.json";

// Who an article is for (frontmatter `market`; defaults to "india"). Kept as metadata for the blog
// revamp: the site no longer filters by visitor country, every visitor sees every article.
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
