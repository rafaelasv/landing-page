import type { Case } from "@/data/cases";
import { card } from "./Section";

const label = "font-mono text-sm text-ink-3";

export function CaseArticle({ c }: { c: Case }) {
  return (
    <article id={c.slug} aria-labelledby={`${c.slug}-t`} className="flex flex-col gap-3">
      <div className={`px-6 py-[22px] ${card}`}>
        <p className="mb-2.5 flex flex-wrap gap-1.5 text-sm">
          <span className="rounded-full bg-ink px-2.5 py-0.5 font-mono text-panel-light">case {c.num}</span>
          <span className="rounded-full bg-tag px-2.5 py-0.5 text-tag-ink">{c.category}</span>
        </p>
        <h2 id={`${c.slug}-t`} className="text-balance text-[22px] font-semibold leading-tight tracking-[-0.02em]">{c.title}</h2>
        <p className="mt-2 max-w-[62ch] text-pretty text-ink-2">{c.lead}</p>
        <dl className="mt-[18px] grid gap-x-5 gap-y-3 border-t border-line-soft pt-3.5 [grid-template-columns:repeat(auto-fit,minmax(min(100%,160px),1fr))]">
          <div><dt className={label}>papel</dt><dd className="mt-0.5 text-sm font-medium">{c.role}</dd></div>
          {c.period && (
            <div><dt className={label}>período</dt><dd className="mt-0.5 text-sm font-medium">{c.period}</dd></div>
          )}
          <div><dt className={label}>tipo</dt><dd className="mt-0.5 text-sm font-medium">{c.type}</dd></div>
          <div><dt className={label}>stack</dt><dd className="mt-0.5 text-sm font-medium">{c.stack}</dd></div>
        </dl>
      </div>

      <div className="grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
        <div className={`rise px-5 py-[18px] ${card}`}>
          <h3 className="mb-1.5 font-mono text-sm font-medium text-plum">contexto</h3>
          <p className="text-pretty text-sm text-ink-2">{c.context}</p>
        </div>
        <div className="rise rounded-[18px] border border-pink-line bg-pink-bg px-5 py-[18px]">
          <h3 className="mb-1.5 font-mono text-sm font-medium text-pink-ink">o problema</h3>
          <p className="text-pretty text-sm text-ink-2">{c.problem}</p>
        </div>
      </div>

      <div className={`rise px-5 pb-1.5 pt-[18px] ${card}`}>
        <h3 className="mb-1 font-mono text-sm font-medium text-plum">o processo</h3>
        <ol>
          {c.steps.map((s, i) => (
            <li key={s.title} className="grid grid-cols-[32px_1fr] gap-2.5 border-t border-line-soft py-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-tag font-mono text-sm text-tag-ink">0{i + 1}</span>
              <span className="flex flex-col gap-0.5">
                <span className="font-semibold">{s.title}</span>
                <span className="text-pretty text-sm text-ink-2">{s.text}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>

      <ul className="grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(min(100%,190px),1fr))]">
        {c.results.map((r) => (
          <li key={r.value} className="rise flex flex-col gap-1 rounded-[18px] bg-ink px-[18px] py-4 text-panel-light">
            <span className="text-xl font-semibold leading-tight tracking-[-0.02em] text-lilac">{r.value}</span>
            <span className="text-pretty text-sm text-panel-text">{r.label}</span>
          </li>
        ))}
      </ul>

      {c.links.length > 0 && (
        <div className="flex flex-wrap gap-x-5 gap-y-1.5">
          {c.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener" className="flex min-h-11 items-center font-medium text-plum">{l.label} ↗</a>
          ))}
        </div>
      )}
    </article>
  );
}
