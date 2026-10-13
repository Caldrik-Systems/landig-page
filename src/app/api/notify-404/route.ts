import { Resend } from "resend";
import { NextResponse } from "next/server";
import { OWNER_EMAIL, clean, clientIp, isSameOrigin, rateLimited } from "@/lib/api-guard";

export async function POST(req: Request) {
  if (!isSameOrigin(req)) return NextResponse.json({ error: "forbidden" }, { status: 403 });
  // Tighter than the contact form: this endpoint emails the owner on every call.
  if (rateLimited(`404:${clientIp(req)}`, 3)) {
    return NextResponse.json({ error: "too many requests" }, { status: 429 });
  }

  let body: { query?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid body" }, { status: 400 });
  }
  const query = clean(body.query, 200);
  if (!query) return NextResponse.json({ error: "empty" }, { status: 400 });

  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({
    from: "Caldrik 404 <noreply@caldrik.co>",
    to: OWNER_EMAIL,
    subject: `404 search: "${query}"`,
    text: `Someone searched for "${query}" after hitting a 404 on caldrik.co.`,
  });

  return NextResponse.json({ ok: true });
}
