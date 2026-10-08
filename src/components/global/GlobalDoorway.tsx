"use client";

import { useState } from "react";
import { events } from "@/lib/gtag";
import { globalContent } from "@/content/global";

const d = globalContent.doorway;
const fm = d.form;

export default function GlobalDoorway() {
  const inputCls =
    "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#5170ff]/50 transition-colors";
  const labelCls =
    "block text-xs font-medium tracking-wide text-gray-400 uppercase";

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setStatus("sending");
    setErrorMsg("");
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
          requirement: fd.get("requirement"),
          source: "global",
        }),
      });
      if (res.ok) {
        events.leadSubmitted(fd.get("company") as string, "global_doorway");
        setStatus("sent");
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(process.env.NODE_ENV !== "production" ? (data.error ?? "") : "");
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
              {d.headline[0]}<br />{d.headline[1]}
            </h2>
            <p className="text-lg leading-8 text-gray-400 max-w-md">
              {d.line}
            </p>
            <p className="text-sm text-gray-400">
              {d.smallPrint}
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              {d.contacts.map((c) => (
                <p key={c.name}>
                  {c.name}, {c.role}
                </p>
              ))}
              <p>
                <a href={`mailto:${d.email}`} className="underline underline-offset-4 hover:text-white transition-colors">{d.email}</a>
                {" · "}
                <a href={`tel:${d.phone.tel}`} className="hover:text-white transition-colors">{d.phone.display}</a> {d.phone.note}
              </p>
            </div>
          </div>

          {/* Right — form */}
          {status === "sent" ? (
            <div className="flex flex-col justify-center space-y-3 py-16">
              <p className="text-2xl font-bold text-white">{fm.successTitle}</p>
              <p className="text-gray-400 text-sm leading-6">
                {fm.successBody}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className={labelCls}>{fm.firstName.label}</label>
                  <input type="text" name="first_name" required placeholder={fm.firstName.placeholder} className={inputCls} />
                </div>
                <div className="space-y-1.5">
                  <label className={labelCls}>{fm.lastName.label}</label>
                  <input type="text" name="last_name" required placeholder={fm.lastName.placeholder} className={inputCls} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className={labelCls}>{fm.company.label}</label>
                  <input type="text" name="company" required placeholder={fm.company.placeholder} className={inputCls} />
                </div>
                <div className="space-y-1.5">
                  <label className={labelCls}>{fm.email.label}</label>
                  <input type="email" name="email" required placeholder={fm.email.placeholder} className={inputCls} />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className={labelCls}>{fm.title.label}</label>
                <input
                  type="text"
                  name="title"
                  required
                  placeholder={fm.title.placeholder}
                  className={inputCls}
                />
              </div>

              <div className="space-y-1.5">
                <label className={labelCls}>
                  {fm.requirement.label}{" "}
                  <span className="normal-case font-normal text-gray-400">{fm.requirement.hint}</span>
                </label>
                <textarea
                  name="requirement"
                  rows={3}
                  placeholder={fm.requirement.placeholder}
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
                <span className="text-xs text-gray-400 leading-relaxed">
                  {fm.consent}
                </span>
              </label>

              {status === "error" && (
                <p className="text-xs text-red-400">
                  {fm.error}
                  {errorMsg && <span className="block text-red-400/70">({errorMsg})</span>}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                onClick={() => events.ctaClicked(fm.button, "global_doorway")}
                className="rounded-full bg-[#5170ff] px-8 py-3.5 text-sm font-semibold text-white disabled:opacity-60"
              >
                {status === "sending" ? fm.sending : fm.button}
              </button>
            </form>
          )}

        </div>
      </div>
    </section>
  );
}
