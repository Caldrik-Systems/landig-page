"use client";

import { useEffect, useState } from "react";
import { events } from "@/lib/gtag";
import { models, writeUs as w } from "./content";

const inputCls =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-gray-600 transition-colors focus:border-[#5170ff]/50 focus:outline-none";
const labelCls = "block text-xs font-medium uppercase tracking-wide text-gray-400";

export default function PartnersForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [model, setModel] = useState("");

  // A "Choose" button in Ways to partner also picks the model here.
  useEffect(() => {
    const onChoose = (e: Event) => setModel((e as CustomEvent<string>).detail);
    window.addEventListener("partners:model", onChoose);
    return () => window.removeEventListener("partners:model", onChoose);
  }, []);

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
          model: fd.get("model"),
          requirement: fd.get("requirement"),
          source: "partners",
        }),
      });
      if (res.ok) {
        events.leadSubmitted(fd.get("company") as string, "partners_form");
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="write" className="scroll-mt-16 bg-[#080f19] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start lg:gap-20">
          <div className="flex flex-col gap-5">
            <span className="w-fit rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-brand/80">
              {w.label}
            </span>
            <h2 className="text-balance text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl">
              {w.headline[0]} <span className="block text-brand">{w.headline[1]}</span>
            </h2>
            <p className="text-base leading-7 text-gray-300">{w.line}</p>
          </div>

          {status === "sent" ? (
            <div className="space-y-3 py-6" role="status">
              <p className="text-2xl font-bold text-white">{w.successTitle}</p>
              <p className="text-base leading-7 text-gray-300">{w.successBody}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="w-first" className={labelCls}>{w.firstName.label}</label>
                  <input id="w-first" type="text" name="first_name" required placeholder={w.firstName.placeholder} className={inputCls} />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="w-last" className={labelCls}>{w.lastName.label}</label>
                  <input id="w-last" type="text" name="last_name" required placeholder={w.lastName.placeholder} className={inputCls} />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="w-company" className={labelCls}>{w.company.label}</label>
                  <input id="w-company" type="text" name="company" required placeholder={w.company.placeholder} className={inputCls} />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="w-email" className={labelCls}>{w.email.label}</label>
                  <input id="w-email" type="email" name="email" required placeholder={w.email.placeholder} className={inputCls} />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="w-title" className={labelCls}>{w.title.label}</label>
                  <input id="w-title" type="text" name="title" required placeholder={w.title.placeholder} className={inputCls} />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="w-model" className={labelCls}>{w.model.label}</label>
                  <select
                    id="w-model"
                    name="model"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    className={`${inputCls} appearance-none bg-[#0d1522]`}
                  >
                    <option value="">{w.model.empty}</option>
                    {models.map((m) => (
                      <option key={m.key} value={m.name}>{m.name}</option>
                    ))}
                    <option value={w.model.notSure}>{w.model.notSure}</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="w-req" className={labelCls}>
                  {w.requirement.label}{" "}
                  <span className="font-normal normal-case text-gray-400">({w.requirement.hint})</span>
                </label>
                <textarea id="w-req" name="requirement" rows={3} placeholder={w.requirement.placeholder} className={`${inputCls} resize-none`} />
              </div>

              <label className="flex cursor-pointer items-start gap-3">
                <input type="checkbox" name="consent" required className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/20 bg-white/5 accent-[#5170ff]" />
                <span className="text-xs leading-relaxed text-gray-400">{w.consent}</span>
              </label>

              {status === "error" && <p className="text-xs text-red-400">{w.error}</p>}

              <button
                type="submit"
                disabled={status === "sending"}
                onClick={() => events.ctaClicked(w.button, "partners_form")}
                className="rounded-full bg-[#5170ff] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#4560e6] disabled:opacity-60"
              >
                {status === "sending" ? w.sending : w.button}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
