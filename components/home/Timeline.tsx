import type { ReactNode } from "react";

export type Row = { org: string; sub: string; period: string; highlight?: boolean };

// Lista com linhas separadas (usada em Experiência e Formação).
export default function Timeline({ id, title, rows, className = "" }: { id: string; title: ReactNode; rows: Row[]; className?: string }) {
  return (
    <section id={id} aria-labelledby={`h-${id}`} className={`flex flex-col gap-8 ${className}`}>
      <h2 id={`h-${id}`} className="m-0 text-[clamp(24px,4vw,30px)] font-bold leading-[1.15] tracking-[-0.03em]">{title}</h2>
      <ol className="m-0 flex list-none flex-col p-0">
        {rows.map((r) => (
          <li key={r.org} className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-1 border-t border-night-line px-3.5 py-[22px]">
            <div className="flex min-w-0 flex-col gap-0.5">
              <span className="text-[21px] font-semibold tracking-[-0.025em]">{r.org}</span>
              <span className="text-[15px] text-ink-muted">{r.sub}</span>
            </div>
            <span className={`text-sm ${r.highlight ? "text-lilac" : "text-ink-faint"}`}>{r.period}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
