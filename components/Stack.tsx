import { STACK } from "@/data/site";
import { SectionTitle } from "./Section";

export function Stack() {
  return (
    <section id="stack" aria-labelledby="h-stack">
      <div className="mb-3.5"><SectionTitle eyebrow="01 / stack" title="O que uso no dia a dia" id="h-stack" /></div>
      {/* gap de 1px sobre fundo cinza = linhas finas entre as colunas */}
      <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line [grid-template-columns:repeat(auto-fit,minmax(min(100%,190px),1fr))]">
        {STACK.map((s) => (
          <div key={s.group} className="flex flex-col gap-2 bg-white px-4 py-3.5">
            <span className="font-mono text-[13px] text-ink-3">{s.group}</span>
            <ul className="flex flex-col gap-0.5">
              {s.items.map((t) => <li key={t} className="text-[15px] font-medium">{t}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
