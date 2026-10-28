import type { Case } from "@/data/cases";

const label = "font-mono text-[13px] text-night-faint";
const value = "mt-0.5 text-[14.5px] font-medium";

/** Um estudo de caso (v17, escuro). O título grande usa shortTitle; o completo fica no lead/metadata. */
export function CaseArticle({ c }: { c: Case }) {
  return (
    <article id={c.slug} aria-labelledby={`${c.slug}-t`} className="flex flex-col gap-7 [container-type:inline-size]">
      <div className="flex flex-col gap-3.5">
        <p className="flex flex-wrap items-center gap-2.5 font-mono text-[13.5px]">
          <span className="rounded-md bg-lilac px-2 py-0.5 text-ink">case {c.num}</span>
          <span className="text-night-muted">{c.category}</span>
        </p>
        <h2 id={`${c.slug}-t`} className="text-balance text-[length:clamp(30px,7cqi,56px)] font-bold uppercase leading-[.95] tracking-[-0.045em]">{c.shortTitle}</h2>
        <p className="max-w-[56ch] text-pretty text-[17px] leading-[1.55] text-night-muted">{c.lead}</p>
      </div>

      <dl className="grid gap-x-6 gap-y-3.5 border-t border-night-line pt-[18px] [grid-template-columns:repeat(auto-fit,minmax(min(100%,150px),1fr))]">
        <div><dt className={label}>papel</dt><dd className={value}>{c.role}</dd></div>
        {c.period && (
          <div><dt className={label}>período</dt><dd className={value}>{c.period}</dd></div>
        )}
        <div><dt className={label}>tipo</dt><dd className={value}>{c.type}</dd></div>
        <div><dt className={label}>stack</dt><dd className={value}>{c.stack}</dd></div>
      </dl>

      <div className="grid gap-2.5 [grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr))]">
        {[["./contexto", c.context, "text-lilac"], ["./problema", c.problem, "text-[#e08a9c]"]].map(([h, t, col]) => (
          <div key={h} className="rounded-2xl border border-night-line bg-night-2 p-5">
            <h3 className={`mb-2 font-mono text-[13.5px] font-medium ${col}`}>{h}</h3>
            <p className="text-pretty text-[14.5px] text-panel-muted">{t}</p>
          </div>
        ))}
      </div>

      <div>
        <h3 className="mb-2.5 font-mono text-[13.5px] font-medium text-lilac">./processo</h3>
        <ol>
          {c.steps.map((s, i) => (
            <li key={s.title} className="grid grid-cols-[44px_minmax(0,1fr)] gap-3.5 border-t border-night-line py-[18px]">
              <span className="text-[22px] font-bold leading-[1.1] tracking-[-0.04em] text-night-title">0{i + 1}</span>
              <span className="flex flex-col gap-1">
                <span className="text-[17px] font-semibold tracking-[-0.015em]">{s.title}</span>
                <span className="text-pretty text-[14.5px] text-night-muted">{s.text}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>

      <ul className="grid gap-2.5 [grid-template-columns:repeat(auto-fit,minmax(min(100%,190px),1fr))]">
        {c.results.map((r) => (
          <li key={r.value + r.label} className="flex flex-col gap-1.5 rounded-2xl bg-plum-bright p-5 text-white">
            <span className="text-[26px] font-bold leading-[1.05] tracking-[-0.035em]">{r.value}</span>
            <span className="text-pretty text-sm text-[#ece4f5]">{r.label}</span>
          </li>
        ))}
      </ul>

      {c.links.length > 0 && (
        <div className="flex flex-wrap gap-x-5 gap-y-1.5">
          {c.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener" className="flex min-h-11 items-center font-mono text-sm text-lilac hover:text-lilac-light">{l.label} ↗</a>
          ))}
        </div>
      )}
    </article>
  );
}
