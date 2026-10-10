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
    <section className="bg-[#080f19] py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="max-w-5xl mb-14 md:mb-20">
          <p className="text-base/7 font-semibold text-brand">Partners &amp; Affiliations</p>
          <h2 className="mt-3 text-balance text-4xl font-bold leading-[1.06] tracking-tight text-white md:text-5xl lg:text-6xl">
            Built with the infrastructure that runs AI.
          </h2>
        </div>

        {/* Certification badges */}
        <div className="flex flex-wrap gap-4">
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
