import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Search engine / social crawlers always get the India homepage, never the geo redirect.
const CRAWLER_UA = /googlebot|google-inspectiontool|adsbot-google|mediapartners-google|storebot-google|bingbot|bingpreview|msnbot|slurp|duckduckbot|baiduspider|yandex|applebot|facebookexternalhit|twitterbot|linkedinbot|slackbot|whatsapp|embedly|pinterest|petalbot|semrush|ahrefs|\bbot\b|crawler|spider/i;

// Country comes from Cloudflare's cf-ipcountry header. "XX" = unknown, "T1" = Tor.
function countryOf(request: NextRequest): string | null {
  let raw = request.headers.get("cf-ipcountry");

  // Local / preview testing only: "/?geo=US" simulates a visitor from that country.
  if (process.env.GEO_TEST === "on") {
    const override = request.nextUrl.searchParams.get("geo");
    if (override) raw = override;
  }

  const country = raw?.trim().toUpperCase();
  return country && /^[A-Z]{2}$/.test(country) && country !== "XX" && country !== "T1" ? country : null;
}

function shouldRouteToGlobal(request: NextRequest): boolean {
  // On by default; set GEO_ROUTING=off to switch routing off without a code change.
  if (process.env.GEO_ROUTING === "off") return false;
  if (request.method !== "GET" || request.nextUrl.pathname !== "/") return false;
  if (CRAWLER_UA.test(request.headers.get("user-agent") ?? "")) return false;

  const country = countryOf(request);
  return country !== null && country !== "IN";
}

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  if (host.startsWith("www.")) {
    const url = request.nextUrl.clone();
    url.host = host.slice(4);
    return NextResponse.redirect(url, 301);
  }

  if (shouldRouteToGlobal(request)) {
    const url = request.nextUrl.clone();
    url.pathname = "/global/";
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
