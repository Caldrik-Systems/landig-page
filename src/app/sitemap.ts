import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map((p) => ({
    url: `https://caldrik.co/insights/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: "https://caldrik.co",          lastModified: new Date(), changeFrequency: "weekly",  priority: 1 },
    { url: "https://caldrik.co/insights", lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    ...posts,
    { url: "https://caldrik.co/privacy",  lastModified: new Date("2026-08-01"), changeFrequency: "yearly",  priority: 0.2 },
    { url: "https://caldrik.co/terms",    lastModified: new Date("2026-08-01"), changeFrequency: "yearly",  priority: 0.2 },
  ];
}
