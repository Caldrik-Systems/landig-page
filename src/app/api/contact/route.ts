import { Resend } from "resend";
import { NextResponse } from "next/server";
import { EMAIL_RE, OWNER_EMAIL, clean, clientIp, isSameOrigin, rateLimited } from "@/lib/api-guard";

export async function POST(req: Request) {
  if (!isSameOrigin(req)) return NextResponse.json({ error: "forbidden" }, { status: 403 });
  if (rateLimited(`contact:${clientIp(req)}`)) {
    return NextResponse.json({ error: "too many requests" }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid body" }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field. Pretend success so bots move on.
  if (body.website) return NextResponse.json({ ok: true });

  const firstName = clean(body.firstName, 80);
  const lastName = clean(body.lastName, 80);
  const company = clean(body.company, 120);
  const email = clean(body.email, 200);
  const title = clean(body.title, 120);
  const workflow = clean(body.workflow, 2000, true);
  const model = clean(body.model, 80);
  const requirement = clean(body.requirement, 2000, true);
  const isPartners = body.source === "partners";

  if (!firstName || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "missing required fields" }, { status: 400 });
  }

  if (isPartners && !process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set; cannot send the enquiry email.");
    return NextResponse.json(
      { error: "email sending is not configured (RESEND_API_KEY missing)" },
      { status: 503 },
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const result = await resend.emails.send({
    from: "Caldrik Contact <noreply@caldrik.co>",
    to: OWNER_EMAIL,
    replyTo: email,
    subject: `${isPartners ? "New partner enquiry" : "New assessment request"} — ${firstName} ${lastName}${company ? ` · ${company}` : ""}`,
    text: [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Title: ${title || "—"}`,
      `Company: ${company || "—"}`,
      ...(isPartners
        ? [`Model: ${model || "—"}`, `Requirement: ${requirement || "—"}`, "Source: partners"]
        : [`Workflow: ${workflow || "—"}`]),
    ].join("\n"),
  });

  if (isPartners && result.error) {
    console.error("Resend error:", result.error);
    return NextResponse.json({ error: "failed to send email" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
