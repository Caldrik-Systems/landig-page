"use client";

import { useState } from "react";
import { events } from "@/lib/gtag";

export default function TheDoorway() {
  const inputCls =
    "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#5170ff]/50 transition-colors";
  const labelCls =
    "block text-xs font-medium tracking-wide text-gray-500 uppercase";

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: fd.get("first_name"),
          lastName: fd.get("last_name"),
          company: fd.get("company"),
          email: fd.get("email"),
          title: fd.get("title"),
          workflow: fd.get("workflow"),
        }),
      });
      if (res.ok) {
        events.leadSubmitted(fd.get("company") as string);
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="doorway" className="bg-[#080f19] px-6 lg:px-8 pt-4 md:pt-6 pb-16 md:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — copy */}
          <div className="space-y-6 lg:pt-4">
            <h2 className="text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl leading-[1.0]">
              Know before<br />you build.
            </h2>
            <p className="text-lg leading-8 text-gray-400 max-w-sm">
              Share one workflow. We&apos;ll tell you if AI fits — and what it would take.
            </p>
            <p className="text-sm text-gray-500">
              No pitch. Just a technical opinion.
            </p>
          </div>

          {/* Right — form */}
          {status === "sent" ? (
            <div className="flex flex-col justify-center space-y-3 py-16">
              <p className="text-2xl font-bold text-white">We&apos;ll be in touch.</p>
              <p className="text-gray-400 text-sm leading-6">
                Expect a technical response within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className={labelCls}>First name</label>
                  <input type="text" name="first_name" required placeholder="First name" className={inputCls} />
                </div>
                <div className="space-y-1.5">
                  <label className={labelCls}>Last name</label>
                  <input type="text" name="last_name" required placeholder="Last name" className={inputCls} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className={labelCls}>Company name</label>
                  <input type="text" name="company" placeholder="Company name" className={inputCls} />
                </div>
                <div className="space-y-1.5">
                  <label className={labelCls}>Work email</label>
                  <input type="email" name="email" required placeholder="you@company.com" className={inputCls} />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className={labelCls}>Your title</label>
                <input
                  type="text"
                  name="title"
                  required
                  placeholder="e.g. Head of Operations, CTO, VP Engineering"
                  className={inputCls}
                />
              </div>

              <div className="space-y-1.5">
                <label className={labelCls}>
                  The workflow{" "}
                  <span className="normal-case font-normal text-gray-600">— in a sentence (optional)</span>
                </label>
                <textarea
                  name="workflow"
                  rows={3}
                  placeholder="e.g. We manually review 400 supplier invoices a week and flag exceptions for the finance team."
                  className={`${inputCls} resize-none`}
                />
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/20 bg-white/5 accent-[#5170ff]"
                />
                <span className="text-xs text-gray-500 leading-relaxed">
                  Yes, I&apos;d like Caldrik to contact me regarding AI engineering
                  services and related offerings by email or telephone.
                </span>
              </label>

              {status === "error" && (
                <p className="text-xs text-red-400">Something went wrong — please try again or email hello@caldrik.co directly.</p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-full bg-[#5170ff] px-8 py-3.5 text-sm font-semibold text-white disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Request an assessment"}
              </button>
            </form>
          )}

        </div>
      </div>
    </section>
  );
}
