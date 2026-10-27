import { STACK } from "@/data/site";
import { SectionTitle } from "./Section";

export function Stack() {
  return (
    <section aria-labelledby="h-stack">
      <div className="mb-3.5"><SectionTitle eyebrow="stack" title="Ferramentas que uso" id="h-stack" /></div>
      <div className="flex flex-col gap-3">
        {STACK.map((s) => (
          <div key={s.group} className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="basis-[150px] font-mono text-sm text-ink-3">{s.group}</span>
            <ul className="flex flex-wrap gap-1.5">
              {s.items.map((t) => (
                <li key={t} className="rounded-full border border-line bg-white px-[11px] py-1 text-sm transition-colors hover:border-plum hover:text-plum">{t}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
