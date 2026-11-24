"use client";
import { useMemo } from "react";
import type { Dict, Lang } from "@/data/home/i18n";
import { SITE } from "@/data/home/site";
import { useGithubContributions } from "@/hooks/useGithubContributions";

const LEVELS = ["#2c2731", "#4b2f6b", "#5a2d82", "#9a73cc", "#c8b6e2"];
const p2 = (v: number) => String(v).padStart(2, "0");

export default function Github({ tx, lang }: { tx: Dict; lang: Lang }) {
  const { data, status } = useGithubContributions(SITE.github);

  const g = useMemo(() => {
    const map = data || {};
    const now = new Date();
    now.setHours(12, 0, 0, 0);
    const cells = 51 * 7 + now.getDay() + 1;
    const start = new Date(now);
    start.setDate(now.getDate() - (cells - 1));
    const cal: { bg: string; row: number; col: number; tip: string }[] = [];
    const months: { label: string; col: number }[] = [];
    let total = 0, active = 0, lastCol = -9;
    for (let i = 0; i < cells; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      const day = map[`${d.getFullYear()}-${p2(d.getMonth() + 1)}-${p2(d.getDate())}`];
      const n = day ? day.n : 0;
      const l = day ? Math.max(0, Math.min(4, day.l)) : 0;
      total += n;
      if (n) active++;
      const dd = lang === "en" ? `${tx.months[d.getMonth()]} ${d.getDate()}` : `${p2(d.getDate())}/${p2(d.getMonth() + 1)}`;
      const c = Math.floor(i / 7);
      cal.push({ bg: LEVELS[l], row: d.getDay() + 2, col: c + 2, tip: status !== "ok" ? dd : tx.tip(n, dd) });
      if (d.getDay() === 0 && d.getDate() <= 7 && c - lastCol >= 3) { months.push({ label: tx.months[d.getMonth()], col: c + 2 }); lastCol = c; }
    }
    return { cal, months, total, active };
  }, [data, status, lang, tx]);

  const ok = status === "ok";
  const statusText = ok ? "" : status === "loading" ? tx.ghLoading : tx.ghError;
  const alt = ok ? tx.ghAlt(g.total, g.active) : tx.ghAltNone;

  return (
    <section id="github" aria-labelledby="h-github" className="flex flex-col gap-5">
      <h2 id="h-github" className="m-0 text-[clamp(24px,4vw,30px)] font-bold leading-[1.15] tracking-[-0.03em]">{tx.ghHeading}</h2>
      <div aria-label={tx.ghAria} className="flex flex-col gap-2.5">
        <div className="gh-scroll overflow-x-auto pb-2.5">
          <div
            role="img"
            aria-label={alt}
            className="grid min-w-[560px] gap-[3px] text-[11px] text-ink-faint"
            style={{ gridTemplateColumns: "auto repeat(52, minmax(0, 1fr))", gridTemplateRows: "14px repeat(7, auto)" }}
          >
            {g.months.map((m) => (
              <span key={m.col} className="whitespace-nowrap leading-[14px]" style={{ gridRow: 1, gridColumn: `${m.col} / span 3` }}>{m.label}</span>
            ))}
            {[tx.wd1, tx.wd2, tx.wd3].map((w, i) => (
              <span key={w} className="self-center pr-1.5 leading-none" style={{ gridRow: 3 + i * 2, gridColumn: 1 }}>{w}</span>
            ))}
            {g.cal.map((c, i) => (
              <span key={i} title={c.tip} className="block aspect-square rounded-sm" style={{ gridRow: c.row, gridColumn: c.col, background: c.bg }} />
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5 text-[13px] text-ink-faint">
          <a href={SITE.githubUrl} target="_blank" rel="noopener" className="no-underline">
            {ok ? g.total : "–"} {tx.ghInYear} <span aria-hidden className="text-lilac">↗</span> <span>{statusText}</span>
          </a>
          <span className="flex items-center gap-1">
            {tx.less}
            {LEVELS.map((c) => <span key={c} aria-hidden className="h-2.5 w-2.5 rounded-sm" style={{ background: c }} />)}
            {tx.more}
          </span>
        </div>
      </div>
    </section>
  );
}
