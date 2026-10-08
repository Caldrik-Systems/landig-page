import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Search engine / social crawlers always get the global pages, never the geo redirect.
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

// "/" and "/insights/" are the global site's pages and are what everyone, crawlers included, gets by default.
// Only visitors known to be in India are sent to the India equivalents under /in/.
// Article pages (/insights/<slug>/) are shared and never redirected.
const INDIA_EQUIVALENT: Record<string, string> = {
  "/": "/in/",
  "/insights/": "/in/insights/",
};

function indiaDestination(request: NextRequest): string | null {
  // On by default; set GEO_ROUTING=off to switch routing off without a code change.
  if (process.env.GEO_ROUTING === "off") return null;
  if (request.method !== "GET") return null;

  const path = request.nextUrl.pathname;
  const destination = INDIA_EQUIVALENT[path.endsWith("/") ? path : `${path}/`];
  if (!destination) return null;

  if (CRAWLER_UA.test(request.headers.get("user-agent") ?? "")) return null;
  return countryOf(request) === "IN" ? destination : null;
}

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  if (host.startsWith("www.")) {
    const url = request.nextUrl.clone();
    url.host = host.slice(4);
    return NextResponse.redirect(url, 301);
  }

  const destination = indiaDestination(request);
  if (destination) {
    const url = request.nextUrl.clone();
    url.pathname = destination;
    url.search = "";
    const response = NextResponse.redirect(url, 302);
    // Per-visitor answer: never let a CDN or browser cache it for someone else.
    response.headers.set("Cache-Control", "private, no-store");
    return response;
  }
}

export const config = {
  matcher: "/:path*",
};
