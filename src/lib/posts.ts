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

export type Post = PostMeta & { content: string };

export function getAllPosts(): PostMeta[] {
  return postsData.map(({ content: _content, ...meta }) => meta as PostMeta);
}

export function getPost(slug: string): Post | null {
  const post = postsData.find((p) => p.slug === slug);
  return post ? (post as Post) : null;
}
