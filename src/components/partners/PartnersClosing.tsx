"use client";

import { useEffect, useId, useState } from "react";
import { events } from "@/lib/gtag";
import { cn } from "@/lib/utils";
import { closing as c, faq } from "./content";

/* The site's closing-card texture (as on the quote and article CTA cards). */
function CardGrid() {
  const patternId = useId();
  const W = 24;
  const H = 24;
  const squares = [[0, 3], [2, 7], [3, 2], [4, 5], [1, 9], [5, 4], [6, 8], [7, 1], [2, 5], [4, 10]];
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-0 top-0 h-full w-3/5 overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, white 20%, transparent 90%)",
        WebkitMaskImage: "linear-gradient(to right, white 20%, transparent 90%)",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          maskImage: "radial-gradient(farthest-side at left center, white, transparent)",
          WebkitMaskImage: "radial-gradient(farthest-side at left center, white, transparent)",
        }}
      >
        <svg className="absolute inset-0 h-full w-full">
          <defs>
            <pattern id={patternId} width={W} height={H} patternUnits="userSpaceOnUse" x="-12" y="4">
              <path d={`M.5 ${H}V.5H${W}`} fill="none" stroke="rgba(81,112,255,0.25)" strokeWidth="0.75" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${patternId})`} strokeWidth={0} />
          <svg x="-12" y="4" className="overflow-visible">
            {squares.map(([sx, sy]) => (
              <rect key={`${sx}-${sy}`} width={W + 1} height={H + 1} x={sx * W} y={sy * H} fill="rgba(81,112,255,0.1)" strokeWidth={0} />
            ))}
          </svg>
        </svg>
      </div>
    </div>
  );
}

export default function PartnersClosing() {
  const [model, setModel] = useState("");
  const [flash, setFlash] = useState(false);

  // A "Choose" button in Ways to partner scrolls here and tells us which model was picked.
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const onChoose = (e: Event) => {
      setModel((e as CustomEvent<string>).detail);
      setFlash(true);
      clearTimeout(timer);
      timer = setTimeout(() => setFlash(false), 1800);
    };
    window.addEventListener("partners:model", onChoose);
    return () => {
      window.removeEventListener("partners:model", onChoose);
      clearTimeout(timer);
    };
  }, []);

  // Calendly pre-fills custom question 1 from ?a1=
  const bookingUrl = model ? `${c.calendlyUrl}${c.calendlyUrl.includes("?") ? "&" : "?"}a1=${encodeURIComponent(model)}` : c.calendlyUrl;

  return (
    <section className="bg-[#080f19] px-6 py-12 md:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Before you ask: short answers, all visible */}
        <div id="faq" className="scroll-mt-20">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">{faq.headline}</h2>
          <dl className="mt-8 grid gap-x-16 md:grid-cols-2">
            {faq.items.map((item) => (
              <div key={item.q} className="border-t border-dashed border-white/[0.15] pb-7 pt-5">
                <dt className="text-base font-semibold text-white">{item.q}</dt>
                <dd className="mt-2 text-sm leading-6 text-gray-400">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* The one action */}
        <div
          id="doorway"
          className={cn(
            "relative mt-12 scroll-mt-20 overflow-hidden rounded-3xl px-8 py-10 transition-shadow duration-500 lg:rounded-2xl lg:px-10 lg:py-7",
            flash && "shadow-[0_0_0_3px_rgba(81,112,255,0.7)]",
          )}
          style={{ background: "linear-gradient(135deg, #cbd4ff 0%, #dde3ff 50%, #f0f2ff 100%)" }}
        >
          <CardGrid />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.5fr_auto_1fr] lg:gap-10">
            {/* Pitch */}
            <div>
              <h2 className="text-4xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-5xl lg:text-4xl">
                {c.headline[0]} <br className="lg:hidden" />
                {c.headline[1]}
              </h2>
              <p className="mt-5 max-w-md text-lg leading-8 text-gray-700 lg:mt-3 lg:max-w-xl lg:text-base lg:leading-7">{c.line}</p>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#5170ff]/70 lg:mt-2">{c.smallPrint}</p>
            </div>

            <div aria-hidden className="hidden h-full w-px bg-[#5170ff]/20 lg:block" />

            {/* Action */}
            <div>
              {model && (
                <p className="mb-3 flex items-center gap-2 text-sm text-gray-700 lg:mb-2" aria-live="polite">
                  {c.interestedIn}
                  <span className="rounded-full border border-[#5170ff]/40 bg-[#5170ff]/15 px-3 py-1 font-mono text-xs font-semibold text-[#3b57d6]">{model}</span>
                </p>
              )}
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => events.ctaClicked(c.button, "partners_book")}
                className="inline-flex w-full items-center justify-center rounded-full bg-[#5170ff] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#5170ff]/25 transition-colors hover:bg-[#4560e6] sm:w-auto lg:py-3"
              >
                {c.button} <span aria-hidden className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
