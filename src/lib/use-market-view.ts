"use client";

import { useEffect, useState } from "react";
import type { View } from "@/lib/posts";

// Same crawlers the site has always treated specially: they get the full, unfiltered page.
const CRAWLER_UA = /googlebot|google-inspectiontool|adsbot-google|mediapartners-google|storebot-google|bingbot|bingpreview|msnbot|slurp|duckduckbot|baiduspider|yandex|applebot|facebookexternalhit|twitterbot|linkedinbot|slackbot|whatsapp|embedly|pinterest|petalbot|semrush|ahrefs|\bbot\b|crawler|spider/i;

const STORAGE_KEY = "caldrik:market";
const FAIL_OPEN_MS = 1500;

const viewFor = (country: string | null): View => (country ? (country === "IN" ? "india" : "global") : "all");

// Which market the visitor is in, worked out in the browser from /api/geo/ (Cloudflare's country header).
//   india  - visitor in India
//   global - visitor elsewhere
//   all    - unknown: crawlers, no country, a slow or failed lookup, or the lookup not finished yet
// `ready` flips to true once the answer is final. Cached per tab so later pages resolve at once.
export function useMarketView(): { view: View; ready: boolean } {
  const [view, setView] = useState<View>("all");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let live = true;
    const done = (v: View) => {
      if (!live) return;
      setView(v);
      setReady(true);
    };

    if (CRAWLER_UA.test(navigator.userAgent)) return done("all");

    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved === "india" || saved === "global" || saved === "all") return done(saved);
    } catch {}

    const failOpen = setTimeout(() => done("all"), FAIL_OPEN_MS);
    fetch("/api/geo/", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        const v = viewFor(typeof data?.country === "string" ? data.country : null);
        try {
          sessionStorage.setItem(STORAGE_KEY, v);
        } catch {}
        clearTimeout(failOpen);
        done(v);
      })
      .catch(() => {
        clearTimeout(failOpen);
        done("all");
      });

    return () => {
      live = false;
      clearTimeout(failOpen);
    };
  }, []);

  return { view, ready };
}
