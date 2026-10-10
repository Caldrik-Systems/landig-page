import { NextResponse } from "next/server";

// The visitor's country as Cloudflare sees it (cf-ipcountry). Used by the browser to pick which
// Insights articles to show. "XX" = unknown, "T1" = Tor; both come back as null.
export const dynamic = "force-dynamic";

export function GET(request: Request) {
  const raw = request.headers.get("cf-ipcountry")?.trim().toUpperCase() ?? "";
  const country = /^[A-Z]{2}$/.test(raw) && raw !== "XX" && raw !== "T1" ? raw : null;
  return NextResponse.json({ country }, { headers: { "Cache-Control": "private, no-store" } });
}
