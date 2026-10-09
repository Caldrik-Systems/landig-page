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

  const chosenChip = model ? (
    <span
      aria-live="polite"
      className="rounded-full border border-[#5170ff]/40 bg-[#5170ff]/15 px-3 py-1 font-mono text-xs font-semibold text-[#3b57d6]"
    >
      <span className="sr-only">{c.interestedIn} </span>
      {model}
    </span>
  ) : null;

  const bookButton = (size: string) => (
    <a
      href={bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => events.ctaClicked(c.button, "partners_book")}
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-[#5170ff] px-8 font-semibold text-white shadow-lg shadow-[#5170ff]/25 transition-colors hover:bg-[#4560e6] sm:w-auto",
        size,
      )}
    >
      {c.button} <span aria-hidden className="ml-2">→</span>
    </a>
  );

  return (
    <>
      {/* Before you ask: short answers, all visible, on a faint tinted band */}
      <section className="border-y border-white/[0.06] bg-white/[0.02] py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div id="faq" className="scroll-mt-20">
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">{faq.headline}</h2>
            <dl className="mt-14 grid gap-x-20 md:mt-20 md:grid-cols-2">
              {faq.items.map((item) => (
                <div key={item.q} className="border-t border-dashed border-white/[0.18] pb-10 pt-7">
                  <dt className="text-xl font-semibold text-white">{item.q}</dt>
                  <dd className="mt-3 text-base leading-7 text-gray-300">{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-[#080f19] py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* The one action: same block as the homepage's "Not every workflow is ready for AI. Yet." card */}
        <div
          id="doorway"
          className={cn(
            "relative scroll-mt-24 overflow-hidden rounded-3xl px-8 py-10 transition-shadow duration-500 md:px-16 md:py-12",
            flash && "shadow-[0_0_0_3px_rgba(81,112,255,0.7)]",
          )}
          style={{ background: "linear-gradient(135deg, #cbd4ff 0%, #dde3ff 50%, #f0f2ff 100%)" }}
        >
          <CardGrid />

          <div className="relative flex flex-col lg:flex-row lg:items-center lg:gap-0">
            {/* Left anchor: quote + the action, so the block keeps the homepage card's height */}
            <div className="hidden w-2/5 flex-col justify-center pr-12 lg:flex">
              <p
                className="text-3xl font-medium italic leading-snug text-gray-600"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                &ldquo;{c.smallPrint}&rdquo;
              </p>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#5170ff]/60">— Caldrik</p>
              <div className="mt-4 flex items-center gap-3">
                {bookButton("py-3 text-sm")}
                {chosenChip}
              </div>
            </div>

            {/* Vertical divider */}
            <div className="hidden w-px flex-shrink-0 self-stretch bg-[#5170ff]/20 lg:block" />

            {/* Right-aligned statement */}
            <div className="w-full text-right lg:w-3/5 lg:pl-12">
              <h2 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                {c.headline[0]} {c.headline[1]}
              </h2>
              <p className="mt-5 text-lg leading-8 text-gray-700 lg:mt-4 lg:text-sm lg:leading-6">{c.line}</p>

              {/* Small screens: the quote is hidden (as on the homepage), so the action and the line live here */}
              <div className="mt-7 flex flex-col items-end gap-4 lg:hidden">
                {chosenChip}
                {bookButton("w-full py-3.5 text-base")}
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#5170ff]/60">{c.smallPrint}</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
