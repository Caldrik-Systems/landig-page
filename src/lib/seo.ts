import type { Metadata } from "next";

export const SITE_URL = "https://caldrik.co";

// trailingSlash: true in next.config.ts means every real address ends in "/".
export function pageUrl(path: string): string {
  return `${SITE_URL}${path}`;
}

// openGraph replaces (not merges with) the layout's openGraph, so shared fields live here.
export function pageOpenGraph(
  url: string,
  title: string,
  description: string,
): NonNullable<Metadata["openGraph"]> {
  return {
    title,
    description,
    url,
    siteName: "Caldrik",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  };
}
