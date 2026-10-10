import Link from "next/link";

const grid = "rgba(81,112,255,0.14)";
const fade = "radial-gradient(ellipse at top left, black, transparent 60%)";

export default function PartnerTeaser() {
  return (
    <section id="partner-teaser" aria-labelledby="partner-teaser-heading" className="bg-[#080f19] px-6 pt-24 md:pt-36 lg:px-8">
      <div className="mx-auto max-w-[76rem]">
        <div
          className="relative overflow-hidden rounded-3xl border border-white/[0.08]"
          style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.01))" }}
        >
          {/* Top glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-[10%] top-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(81,112,255,0.7), transparent)" }}
          />

          {/* Grid texture */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              backgroundImage: `linear-gradient(${grid} 1px, transparent 1px), linear-gradient(90deg, ${grid} 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
              maskImage: fade,
              WebkitMaskImage: fade,
            }}
          />

          <div className="relative grid grid-cols-1 gap-14 px-6 py-10 md:px-14 md:py-16 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            {/* Left: the claim */}
            <div>
              <p className="text-base/7 font-semibold text-brand">For technology services firms</p>
              <h2 id="partner-teaser-heading" className="mt-3 text-3xl font-bold leading-[1.12] tracking-tight md:text-5xl">
                <span className="text-white">48%</span>
                <span className="text-white/40"> of MSPs say </span>
                <span className="text-white">AI is their clients&apos; top need.</span>
                <span className="text-white/40"> Only </span>
                <span className="text-brand">13% earn real revenue from it.</span>
              </h2>
              <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-white/30">Source · Kaseya, 2026</p>
            </div>

            {/* Right: the offer */}
            <div>
              <p className="text-base leading-7 text-gray-300 md:text-lg md:leading-8">
                We partner with consultancies and MSPs to engineer, evaluate and run production AI for their clients. The client relationship stays yours.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["White-label", "Co-delivery", "Referral"].map((tag) => (
                  <span key={tag} className="rounded-full border border-white/[0.25] px-3 py-1 text-xs text-white/70">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href="/partners/"
                className="mt-7 inline-block rounded-full bg-[#5170ff] px-6 py-2.5 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                Explore partnership <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
