import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { query } = await req.json();
  if (!query?.trim()) return NextResponse.json({ error: "empty" }, { status: 400 });

  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({
    from: "Caldrik 404 <noreply@caldrik.co>",
    to: "rohanmashiyava@gmail.com",
    subject: `404 search: "${query}"`,
    text: `Someone searched for "${query}" after hitting a 404 on caldrik.co.`,
  });

  return NextResponse.json({ ok: true });
}
