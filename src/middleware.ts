import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Search engine / social crawlers always get the full, unfiltered pages.
const CRAWLER_UA = /googlebot|google-inspectiontool|adsbot-google|mediapartners-google|storebot-google|bingbot|bingpreview|msnbot|slurp|duckduckbot|baiduspider|yandex|applebot|facebookexternalhit|twitterbot|linkedinbot|slackbot|whatsapp|embedly|pinterest|petalbot|semrush|ahrefs|\bbot\b|crawler|spider/i;

// Country comes from Cloudflare's cf-ipcountry header. "XX" = unknown, "T1" = Tor.
function countryOf(request: NextRequest): string | null {
  let raw = request.headers.get("cf-ipcountry");

  // Local / preview testing only: "/?geo=IN" simulates a visitor from that country.
  if (process.env.GEO_TEST === "on") {
    const override = request.nextUrl.searchParams.get("geo");
    if (override) raw = override;
  }

  const country = raw?.trim().toUpperCase();
  return country && /^[A-Z]{2}$/.test(country) && country !== "XX" && country !== "T1" ? country : null;
}

// Which Insights articles a visitor sees (see lib/posts.ts): visitors in India get the India list,
// visitors elsewhere the global list. Unknown country and crawlers get everything.
// Only the pages that list articles are rewritten; article pages themselves are shared by everyone.
function marketView(request: NextRequest): "india" | "global" | null {
  // On by default; set GEO_ROUTING=off to switch it off without a code change.
  if (process.env.GEO_ROUTING === "off") return null;
  if (request.method !== "GET") return null;
  if (CRAWLER_UA.test(request.headers.get("user-agent") ?? "")) return null;

  const country = countryOf(request);
  if (!country) return null;
  return country === "IN" ? "india" : "global";
}

const LISTING_PAGES = new Set(["/", "/insights/"]);

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  if (host.startsWith("www.")) {
    const url = request.nextUrl.clone();
    url.host = host.slice(4);
    return NextResponse.redirect(url, 301);
  }

  const path = request.nextUrl.pathname;
  const normalised = path.endsWith("/") ? path : `${path}/`;
  if (!LISTING_PAGES.has(normalised)) return;

  const view = marketView(request);
  if (!view) return;

  // A rewrite, not a redirect: the address bar stays "/" or "/insights/".
  const url = request.nextUrl.clone();
  url.pathname = `/v/${view}${normalised === "/" ? "/" : normalised}`;
  const response = NextResponse.rewrite(url);
  // Per-visitor answer: never let a CDN or browser cache it for someone else.
  response.headers.set("Cache-Control", "private, no-store");
  return response;
}

export const config = {
  matcher: "/:path*",
};
