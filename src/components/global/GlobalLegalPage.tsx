import type { ReactNode } from "react";
import GlobalNavigation from "./GlobalNavigation";
import GlobalFooter from "./GlobalFooter";
import type { LegalDoc } from "@/content/global-legal";

// Inline markup used in src/content/global-legal.ts: **bold** and [text](url).
function renderInline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1]) {
      out.push(<strong key={m.index} className="text-gray-300">{m[1]}</strong>);
    } else {
      const external = m[3].startsWith("http");
      out.push(
        <a
          key={m.index}
          href={m[3]}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="text-[#5170ff] hover:underline"
        >
          {m[2]}
        </a>,
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export default function GlobalLegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <div className="flex flex-col flex-1 bg-[#080f19]">
      <GlobalNavigation />
      <main className="flex-1 px-6 lg:px-8 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <div className="mb-14 space-y-3">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#5170ff]/70">Legal</p>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">{doc.title}</h1>
            <p className="text-sm text-gray-500">
              Effective date: {doc.effective} &nbsp;·&nbsp; Last updated: {doc.updated}
            </p>
          </div>

          <div className="space-y-10 text-sm">
            {doc.sections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h2 className="text-lg font-semibold text-white">{section.title}</h2>
                <div className="space-y-3 text-gray-400 leading-7">
                  {section.blocks.map((block, i) => {
                    if (block.type === "p") return <p key={i}>{renderInline(block.text)}</p>;
                    if (block.type === "ul")
                      return (
                        <ul key={i} className="list-disc list-inside space-y-2 text-gray-500 ml-2">
                          {block.items.map((item) => (
                            <li key={item}>{renderInline(item)}</li>
                          ))}
                        </ul>
                      );
                    return (
                      <div key={i} className="mt-2 space-y-1 text-gray-500">
                        {block.lines.map((line) => (
                          <p key={line}>{renderInline(line)}</p>
                        ))}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <GlobalFooter />
    </div>
  );
}
