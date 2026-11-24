"use client";
import { useEffect, useState } from "react";
import type { Dict } from "@/data/home/i18n";

type Track = { live: boolean; track: string; artist: string; url: string; cover?: string; playedAt?: string };

function ago(iso: string | undefined, locale: string) {
  if (!iso) return "";
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
  const min = Math.round((Date.now() - new Date(iso).getTime()) / 60000);
  if (min < 60) return rtf.format(-Math.max(1, min), "minute");
  if (min < 1440) return rtf.format(-Math.round(min / 60), "hour");
  return rtf.format(-Math.round(min / 1440), "day");
}

// Card "ouvindo agora" / "ouvi por último". Busca /api/spotify (veja o README). Sem as variáveis de ambiente, não aparece.
// O botão de play e o texto abrem a faixa no Spotify, em nova aba.
export default function Spotify({ tx }: { tx: Dict }) {
  const [t, setT] = useState<Track | null>(null);

  useEffect(() => {
    let gone = false;
    const load = async () => {
      try {
        const r = await fetch("/api/spotify");
        if (!r.ok) return;
        const j = await r.json();
        if (!gone && j && j.track) setT(j);
      } catch {}
    };
    load();
    const iv = setInterval(load, 60_000);
    return () => { gone = true; clearInterval(iv); };
  }, []);

  if (!t) return null;
  const label = t.live ? tx.spLive : `${tx.spLastShort} ${ago(t.playedAt, tx.locale)}`.trim();
  const aria = `Spotify: ${label} ${t.track}, ${t.artist}`;
  return (
    <div className="flex w-full max-w-[420px] items-center gap-3 rounded-[14px] border border-night-line bg-night-3 py-2 pl-2 pr-3 text-left">
      <a
        href={t.url}
        target="_blank"
        rel="noopener"
        aria-label={tx.spOpenLbl}
        title={tx.spOpenLbl}
        className="relative grid h-11 w-11 flex-none place-items-center overflow-hidden rounded-[10px] bg-night-line text-lilac no-underline transition-colors hover:bg-plum hover:text-white"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {t.cover && <img src={t.cover} alt="" className={`absolute inset-0 h-full w-full object-cover ${t.live ? "opacity-60" : "opacity-35"}`} />}
        <svg className="relative" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M7 4.5v15l13-7.5z" /></svg>
      </a>
      <a href={t.url} target="_blank" rel="noopener" aria-label={aria} className="flex min-w-0 flex-1 flex-col no-underline hover:text-ink-fg">
        <span className="flex items-center gap-1.5 text-xs" style={{ color: t.live ? "#5fd08a" : "#8f8996" }}>
          {t.live && (
            <span aria-hidden className="flex h-2.5 items-end gap-0.5">
              {[0, 0.3, 0.6].map((d) => (
                <span key={d} className="h-2.5 w-0.5 origin-bottom animate-eq bg-mint" style={{ animationDelay: `${d}s` }} />
              ))}
            </span>
          )}
          {label}
        </span>
        <span className="truncate text-sm font-semibold leading-[1.3]">{t.track}</span>
        <span className="truncate text-[13px] leading-[1.3] text-ink-faint">{t.artist}</span>
      </a>
      <svg aria-hidden className="flex-none" width="18" height="18" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="11" fill={t.live ? "#1db954" : "#8f8996"} />
        <path d="M7 9.5c3.5-1 7.2-.7 10 1M7.6 12.6c2.9-.8 5.8-.5 8.2.9M8.3 15.5c2.3-.6 4.5-.4 6.4.7" stroke="#16131a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}
