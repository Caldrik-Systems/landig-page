import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { firstName, lastName, company, email, title, workflow, source, model, requirement } = await req.json();
  const isPartners = source === "partners";

  if (!firstName || !email) {
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
    to: "rohanmashiyava@gmail.com",
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
