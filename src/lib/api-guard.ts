// Cheap abuse protection for the public form endpoints. This is a best-effort first line:
// the limiter is per Worker isolate (not global) and Origin can be forged by non-browser clients.
// Real protection belongs at the edge (Cloudflare Turnstile / a WAF rate-limiting rule).

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

export const OWNER_EMAIL = process.env.CONTACT_TO_EMAIL || "rohanmashiyava@gmail.com";

export function clientIp(req: Request): string {
  return req.headers.get("cf-connecting-ip") ?? req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
}

export function isSameOrigin(req: Request): boolean {
  const origin = req.headers.get("origin");
  if (!origin) return false;
  try {
    const host = req.headers.get("host") ?? new URL(req.url).host;
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export function rateLimited(key: string, max = MAX_PER_WINDOW): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= max) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) {
    for (const [k, v] of hits) if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
  }
  return false;
}

// Trim, cap length and strip control characters (blocks header/subject injection).
// Multi-line fields keep their line breaks.
export function clean(value: unknown, max: number, multiline = false): string {
  if (typeof value !== "string") return "";
  const controls = multiline ? /[\u0000-\u0009\u000b\u000c\u000e-\u001f\u007f]+/g : /[\u0000-\u001f\u007f]+/g;
  return value.replace(controls, " ").trim().slice(0, max);
}

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
