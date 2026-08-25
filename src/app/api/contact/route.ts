import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { firstName, lastName, company, email, title, workflow } = await req.json();

  if (!firstName || !email) {
    return NextResponse.json({ error: "missing required fields" }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({
    from: "Caldrik Contact <noreply@caldrik.co>",
    to: "rohanmashiyava@gmail.com",
    replyTo: email,
    subject: `New assessment request — ${firstName} ${lastName}${company ? ` · ${company}` : ""}`,
    text: [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Title: ${title || "—"}`,
      `Company: ${company || "—"}`,
      `Workflow: ${workflow || "—"}`,
    ].join("\n"),
  });

  return NextResponse.json({ ok: true });
}
