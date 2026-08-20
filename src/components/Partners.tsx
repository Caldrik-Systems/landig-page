// HIDDEN in production — visible in dev only (see page.tsx)
import Image from "next/image";

const badges = [
  { name: "AWS Partner",                    badge: "/logos/badge-aws-dark.png",          w: 1200, h: 900 },
  { name: "Google Cloud Partner",           badge: "/logos/badge-google-cloud-dark.png", w: 780,  h: 520 },
  { name: "Anthropic Partner",              badge: "/logos/badge-anthropic.png",         w: 600,  h: 600 },
  { name: "OpenAI Partner",                 badge: "/logos/badge-openai-dark.png",       w: 1125, h: 589 },
  { name: "Databricks Partner",             badge: "/logos/badge-databricks.svg",        w: 200,  h: 200 },
  { name: "Microsoft Solutions Partner",    badge: "/logos/badge-microsoft-dark.png",    w: 800,  h: 800 },
];

export default function Partners() {
  return (
    <section className="bg-[#080f19] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#5170ff]/70 mb-2">Partners & Affiliations</p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Built with the infrastructure that runs AI.
          </h2>
        </div>

        {/* Certification badges */}
        <div className="flex flex-wrap gap-4 mb-12">
          {badges.map((b) => (
            <div
              key={b.name}
              className="rounded-2xl p-5 flex items-center justify-center bg-white/[0.04] border border-white/[0.08]"
            >
              <Image
                src={b.badge}
                alt={b.name}
                width={b.w}
                height={b.h}
                className="w-28 h-auto"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
