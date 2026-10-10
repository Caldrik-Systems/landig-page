import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Reveal, SectionHeader } from "@/components/partners/PartnersSections";
import { team, whyName } from "./content";

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

export function AboutTeam() {
  // A member is shown only once every field is filled in and they are not marked hidden (see content.ts).
  const members = team.members.filter((m) => !("hidden" in m && m.hidden) && m.name && m.role && m.line && m.linkedin);
  const n = members.length;

  // Columns: up to 3 on desktop, up to 2 on tablet. The cells are separated by hairlines drawn by the grid gap,
  // so any unfilled cells in the last row get a blank filler cell (shown only at the breakpoints where needed).
  const cols3 = Math.min(n, 3);
  const cols2 = Math.min(n, 2);
  const fill3 = cols3 ? (cols3 - (n % cols3)) % cols3 : 0;
  const fill2 = cols2 ? (cols2 - (n % cols2)) % cols2 : 0;
  const fillers = [0, 1].map((i) => {
    const lg = i < fill3;
    const sm = i < fill2;
    return lg && sm ? "hidden sm:block" : sm ? "hidden sm:block lg:hidden" : lg ? "hidden lg:block" : "hidden";
  });

  return (
    <section className="border-y border-white/[0.06] bg-white/[0.02] py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader label={team.label} headline={team.headline} line={team.line} />
        <Reveal>
          <div
            style={{ "--c2": cols2, "--c3": cols3 } as React.CSSProperties}
            className={`grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.12] bg-white/[0.12] sm:[grid-template-columns:repeat(var(--c2),minmax(0,1fr))] lg:[grid-template-columns:repeat(var(--c3),minmax(0,1fr))] ${n === 1 ? "md:max-w-lg" : ""}`}
          >
            {members.map((m) => {
              const [department, title] = m.role.split(" · ");
              return (
                <div
                  key={m.name}
                  className="group flex flex-col gap-5 bg-[#0b1424] p-6 transition-colors duration-200 hover:bg-[#0e1a30] sm:p-8"
                >
                  <div className="flex items-center gap-4">
                    <Avatar className="size-16 border border-brand/40">
                      {m.photo ? (
                        <AvatarImage
                          src={m.photo}
                          alt={m.name}
                          className="grayscale transition-all duration-300 group-hover:grayscale-0"
                        />
                      ) : null}
                      <AvatarFallback className="bg-brand/15 text-sm font-semibold text-brand">{initials(m.name)}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col items-start gap-1">
                      {title ? <Badge variant="secondary" className="text-[11px] font-medium">{department}</Badge> : null}
                      <h3 className="text-lg font-bold leading-snug text-white">{m.name}</h3>
                      <span className="text-sm text-gray-400">{title ?? department}</span>
                    </div>
                  </div>

                  <p className="flex-1 text-base leading-7 text-gray-300">{m.line}</p>

                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${m.name} on LinkedIn`}
                    className="w-fit text-sm font-semibold text-white/80 transition-colors hover:text-white"
                  >
                    {team.linkedinLabel} <span aria-hidden>→</span>
                  </a>
                </div>
              );
            })}
            {fillers.map((cls, i) => (
              <div key={i} aria-hidden className={`${cls} bg-[#0b1424]`} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
