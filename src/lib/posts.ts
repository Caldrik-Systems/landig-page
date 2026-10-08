import postsData from "./posts-data.json";

export type PostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  ctaHeadline?: string;
  ctaDescription?: string;
};

export type Post = PostMeta & { contentHtml: string };

export function getAllPosts(): PostMeta[] {
  return postsData.map((post) => {
    const meta: Partial<typeof post> = { ...post };
    delete meta.contentHtml;
    return meta as PostMeta;
  });
}

export function getPost(slug: string): Post | null {
  const post = postsData.find((p) => p.slug === slug);
  return post ? (post as Post) : null;
}
