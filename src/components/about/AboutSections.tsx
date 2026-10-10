import Link from "next/link";
import { Reveal, SectionHeader } from "@/components/partners/PartnersSections";
import { closing, company, team, whyName } from "./content";

const initials = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export function AboutWhy() {
  return (
    <section className="bg-[#080f19] py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader label={whyName.label} headline={whyName.headline} className="max-w-5xl mb-10 md:mb-14" />
        <Reveal>
          <p className="max-w-3xl text-lg leading-8 text-gray-300 md:text-xl md:leading-9">{whyName.body}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function AboutCompany() {
  const facts = company.facts.filter((f) => f.value);
  return (
    <section className="bg-[#080f19] pb-24 md:pb-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <p className="text-base/7 font-semibold text-brand">{company.label}</p>
          <dl
            // One column per fact that is shown, so a hidden fact leaves no empty cell
            style={{ "--n": facts.length } as React.CSSProperties}
            className="mt-6 grid grid-cols-1 divide-y divide-dashed divide-white/[0.15] rounded-2xl border border-dashed border-white/[0.15] sm:divide-x sm:divide-y-0 sm:[grid-template-columns:repeat(var(--n),minmax(0,1fr))]"
          >
            {facts.map((f) => (
              <div key={f.label} className="p-6 md:p-8">
                <dt className="text-sm font-medium text-gray-400">{f.label}</dt>
                <dd className="mt-2 text-xl font-semibold text-white md:text-2xl">{f.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm text-gray-400">{company.note}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function AboutTeam() {
  // A member is shown only once every field is filled in (see content.ts).
  const members = team.members.filter((m) => m.name && m.role && m.line && m.linkedin);
  return (
    <section className="border-y border-white/[0.06] bg-white/[0.02] py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader label={team.label} headline={team.headline} line={team.line} />
        <Reveal className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {members.map((m) => (
            <div key={m.name} className="flex flex-col rounded-2xl border border-dashed border-white/[0.15] bg-[#0b1424] p-8">
              <span
                aria-hidden
                className="grid size-12 place-items-center rounded-full border border-brand/40 bg-brand/15 text-sm font-semibold text-brand"
              >
                {initials(m.name)}
              </span>
              <h3 className="mt-6 text-xl font-bold text-white">{m.name}</h3>
              <p className="mt-1 text-sm font-semibold text-brand">{m.role}</p>
              <p className="mt-4 flex-1 text-base leading-7 text-gray-300">{m.line}</p>
              <a
                href={m.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${m.name} on LinkedIn`}
                className="mt-6 w-fit text-sm font-semibold text-white/80 transition-colors hover:text-white"
              >
                {team.linkedinLabel} <span aria-hidden>→</span>
              </a>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function AboutClosing() {
  return (
    <section className="bg-[#080f19] py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <h2 className="text-4xl font-bold leading-[1.06] tracking-tight text-white md:text-5xl lg:text-6xl">
            {closing.headline.plain} <span className="block text-brand">{closing.headline.accent}</span>
          </h2>
          <Link
            href={closing.href}
            className="mt-10 inline-block rounded-full bg-[#5170ff] px-8 py-3 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            {closing.button} <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
