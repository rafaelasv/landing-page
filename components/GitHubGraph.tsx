"use client";
import { useEffect, useMemo, useState } from "react";
import { GITHUB_USER } from "@/data/widgets";

type Day = { n: number; l: number };
type Status = "loading" | "ok" | "error";

const LEVELS = ["#2c2731", "#4b2f6b", "#5a2d82", "#9a73cc", "#c8b6e2"];
const MONTHS = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
const CACHE_KEY = `gh-contrib-${GITHUB_USER}-v1`;
const CACHE_MS = 30 * 60_000;
const p2 = (v: number) => String(v).padStart(2, "0");

/**
 * Gráfico de contribuições do último ano (API pública de terceiros, sem token).
 * Para contar commits de repositórios privados, ligue "Private contributions" no perfil do GitHub.
 * Mostra só números por dia: nenhum nome de repositório ou mensagem.
 */
export function GitHubGraph() {
  const [data, setData] = useState<Record<string, Day>>({});
  const [status, setStatus] = useState<Status>("loading");
  const [now, setNow] = useState<Date | null>(null); // só no cliente, evita erro de hidratação

  useEffect(() => {
    const d = new Date();
    d.setHours(12, 0, 0, 0);
    setNow(d);

    let alive = true;
    const apply = (map: Record<string, Day>) => { if (alive) { setData(map); setStatus("ok"); } };

    try {
      const c = JSON.parse(localStorage.getItem(CACHE_KEY) || "null");
      if (c && Date.now() - c.t < CACHE_MS && c.map) { apply(c.map); return () => { alive = false; }; }
    } catch {}

    fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=last`)
      .then((r) => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); })
      .then((json: { contributions?: { date: string; count: number; level: number }[] }) => {
        if (!json.contributions?.length) throw new Error("resposta sem dados");
        const map: Record<string, Day> = {};
        json.contributions.forEach((c) => { map[c.date] = { n: c.count, l: c.level }; });
        try { localStorage.setItem(CACHE_KEY, JSON.stringify({ t: Date.now(), map })); } catch {}
        apply(map);
      })
      .catch(() => { if (alive) setStatus("error"); });

    return () => { alive = false; };
  }, []);

  const cal = useMemo(() => {
    if (!now) return null;
    const cells = 51 * 7 + now.getDay() + 1; // 52 semanas, começando no domingo, até hoje
    const start = new Date(now);
    start.setDate(now.getDate() - (cells - 1));
    const out: { key: string; row: number; col: number; bg: string; tip: string }[] = [];
    const months: { label: string; col: number }[] = [];
    let total = 0, active = 0, lastAgo = -1, lastCol = -9;
    for (let i = 0; i < cells; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      const iso = `${d.getFullYear()}-${p2(d.getMonth() + 1)}-${p2(d.getDate())}`;
      const day = data[iso];
      const n = day?.n ?? 0;
      const l = day ? Math.max(0, Math.min(4, day.l)) : 0;
      total += n;
      if (n) { active++; lastAgo = cells - 1 - i; }
      const dd = `${p2(d.getDate())}/${p2(d.getMonth() + 1)}`;
      const col = Math.floor(i / 7);
      out.push({
        key: iso, row: d.getDay() + 2, col: col + 2, bg: LEVELS[l],
        tip: status !== "ok" ? dd : `${n === 0 ? "sem contribuições" : `${n} ${n === 1 ? "contribuição" : "contribuições"}`} em ${dd}`,
      });
      if (d.getDay() === 0 && d.getDate() <= 7 && col - lastCol >= 3) { months.push({ label: MONTHS[d.getMonth()], col: col + 2 }); lastCol = col; }
    }
    return { cells: out, months, total, active, lastAgo };
  }, [now, data, status]);

  const ok = status === "ok" && !!cal;
  const last = !ok ? "—" : cal.lastAgo < 0 ? "sem atividade recente" : cal.lastAgo === 0 ? "hoje" : cal.lastAgo === 1 ? "ontem" : `há ${cal.lastAgo} dias`;
  const sum = ok ? `${cal.active} dias ativos no último ano` : status === "loading" ? "buscando no GitHub…" : "ver perfil no GitHub";

  return (
    <div aria-label="atividade no GitHub" className="flex flex-col gap-4 rounded-2xl border border-night-line bg-night-2 p-5">
      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 font-mono text-[13px]">
        <span className="text-lilac">github · {GITHUB_USER}</span>
        <span className="text-xs text-night-faint">{status === "loading" ? "carregando…" : status === "error" ? "indisponível agora" : ""}</span>
      </div>

      <a href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noopener" className="flex items-center gap-3 rounded-xl bg-panel p-3 text-panel-light no-underline transition-colors hover:bg-panel-2 hover:text-panel-light">
        <span aria-hidden className="grid h-10 w-10 flex-none place-items-center rounded-lg bg-ink text-lilac">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M3 12h6M15 12h6" /></svg>
        </span>
        <span className="flex min-w-0 flex-1 flex-col">
          <span className="font-mono text-[11.5px] text-night-faint">última contribuição</span>
          <span className="truncate text-sm font-semibold leading-snug">{last}</span>
          <span className="font-mono text-[12.5px] text-night-muted">{sum}</span>
        </span>
        <span aria-hidden className="self-start text-lg text-lilac">↗</span>
      </a>

      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 font-mono text-[12.5px]">
          <span className="text-night-muted">contribuições · último ano</span>
          <span className="text-panel-light">{ok ? cal.total : "–"} no último ano</span>
        </div>

        <div className="gh-scroll overflow-x-auto pb-2.5">
          {cal && (
            <div
              role="img"
              aria-label={ok ? `Gráfico de contribuições do último ano: ${cal.total} contribuições em ${cal.active} dias` : "Gráfico de contribuições do GitHub"}
              className="grid gap-[3px] font-mono text-[11px] text-night-faint"
              style={{ minWidth: 560, gridTemplateColumns: "auto repeat(52, minmax(0, 1fr))", gridTemplateRows: "14px repeat(7, auto)" }}
            >
              {cal.months.map((m) => (
                <span key={m.col} className="whitespace-nowrap leading-[14px]" style={{ gridRow: 1, gridColumn: `${m.col} / span 3` }}>{m.label}</span>
              ))}
              {([["seg", 3], ["qua", 5], ["sex", 7]] as const).map(([label, row]) => (
                <span key={label} className="self-center pr-1.5 leading-none" style={{ gridRow: row, gridColumn: 1 }}>{label}</span>
              ))}
              {cal.cells.map((c) => (
                <span key={c.key} title={c.tip} className="block aspect-square rounded-[2px]" style={{ gridRow: c.row, gridColumn: c.col, background: c.bg }} />
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center justify-end gap-1 font-mono text-[11.5px] text-night-faint">
          menos
          {LEVELS.map((c) => <span key={c} aria-hidden className="h-2.5 w-2.5 rounded-[2px]" style={{ background: c }} />)}
          mais
        </div>
      </div>
    </div>
  );
}
