"use client";

import { useEffect, useId, useState } from "react";
import { CalendarDays } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { events } from "@/lib/gtag";
import { cn } from "@/lib/utils";
import { closing as c, faq, writeUs } from "./content";

/* The site's closing-card texture (as on the quote and article CTA cards). */
function CardGrid() {
  const patternId = useId();
  const W = 24;
  const H = 24;
  const squares = [[0, 3], [2, 7], [3, 2], [4, 5], [1, 9], [5, 4], [6, 8], [7, 1], [2, 5], [4, 10]];
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden"
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
      className="rounded-full border border-[#5170ff]/40 bg-[#5170ff]/15 px-3 py-1 font-mono text-xs font-semibold text-[#9db0ff]"
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
    <section className="border-y border-white/[0.06] bg-white/[0.02] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div id="faq" className="grid scroll-mt-20 gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start lg:gap-20">
          {/* Left: the statement and the one action. Sticks while the answers scroll past. */}
          <div className="flex flex-col gap-5 lg:sticky lg:top-28">
            <p className="text-base/7 font-semibold text-brand">
              {faq.headline}
            </p>
            <h2 className="text-balance text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl">
              {c.headline[0]} <span className="text-brand">{c.headline[1]}</span>
            </h2>
            <p className="text-base leading-7 text-gray-300">{c.line}</p>

            <div
              id="doorway"
              className={cn(
                "relative mt-2 scroll-mt-24 overflow-hidden rounded-2xl border border-dashed border-white/[0.18] bg-[#0b1424] p-5 transition-shadow duration-500",
                flash && "shadow-[0_0_0_3px_rgba(81,112,255,0.7)]",
              )}
            >
              <CardGrid />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#5170ff] text-white">
                    <CalendarDays className="size-5" aria-hidden />
                  </span>
                  <div className="flex flex-col leading-tight">
                    <p className="text-base font-semibold text-white">{c.button}</p>
                    <p className="mt-1 text-sm text-gray-400">{c.smallPrint}</p>
                  </div>
                </div>
                {model ? <div className="mt-4">{chosenChip}</div> : null}
                <div className="mt-4 flex">{bookButton("w-full py-3 text-sm")}</div>
                <p className="mt-3 text-center text-sm text-gray-400">
                  <a href="#write" className="underline underline-offset-4 transition-colors hover:text-white">
                    {writeUs.link}
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Right: short answers, one open at a time */}
          <Accordion type="single" collapsible defaultValue="item-0" className="border-t border-dashed border-white/[0.12]">
            {faq.items.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`}>
                <AccordionTrigger className="py-5 text-left text-lg font-semibold text-white hover:no-underline md:text-xl">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 pr-8 text-base leading-7 text-gray-300">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
