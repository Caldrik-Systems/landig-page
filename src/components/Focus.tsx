const sectors = [
  {
    index: "01",
    name: "BFSI",
    description:
      "AI lives alongside systems a decade older than it. Every output may face an audit.",
    callout: "every output traceable, every eval run logged",
    compliance: "Built for the RBI IT Governance Framework and DPDP Act — audit trails, data localisation, and access controls engineered in from day one.",
  },
  {
    index: "02",
    name: "Healthcare",
    description: 'Accuracy is clinical. "Mostly right" isn\'t a category.',
    callout: "acceptance criteria, before anything ships",
  },
  {
    index: "03",
    name: "Manufacturing",
    description: "Workflows cross OT and IT. Tolerance is measured, not felt.",
    callout: "deterministic thresholds, no tolerance for drift",
  },
];

export default function Focus() {
  return (
    <section
      id="focus"
      className="bg-[#080f19] py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-10">
          <p className="text-base/7 font-semibold text-brand">Focus</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Where mistakes are expensive.
          </h2>
        </div>

        {/* Industry rows — name first, readable, then constraint */}
        <div>
          {sectors.map((s) => (
            <div
              key={s.name}
              className="group border-t border-white/[0.12] py-8 -mx-6 px-6 lg:-mx-8 lg:px-8 transition-colors duration-300 hover:bg-white/[0.025]"
            >
              <div className="md:grid md:grid-cols-[280px_1fr] md:gap-12 md:items-center">

                {/* Left — industry name */}
                <div className="mb-4 md:mb-0">
                  <h3 className="text-3xl md:text-4xl font-bold text-white">{s.name}</h3>
                </div>

                {/* Right — constraint + callout */}
                <div className="flex flex-col gap-4">
                  <p className="text-base leading-7 text-gray-400">
                    {s.description}
                  </p>
                  <p className="font-mono text-sm text-brand">{s.callout}</p>
                  {"compliance" in s && (
                    <p className="text-xs text-gray-400 leading-6">{(s as typeof s & { compliance: string }).compliance}</p>
                  )}
                </div>

              </div>
            </div>
          ))}
          <div className="border-t border-white/[0.12] -mx-6 lg:-mx-8" />
        </div>


      </div>
    </section>
  );
}
