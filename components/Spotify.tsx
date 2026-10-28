"use client";
import { useEffect, useState } from "react";

export type SpotifyTrack = {
  live: boolean; // true = tocando agora; false = última ouvida
  title: string; artist: string; url: string; trackId: string;
  cover?: string; playedAt?: string; // ISO, só quando live = false
};

const rtf = new Intl.RelativeTimeFormat("pt-BR", { numeric: "auto" });
function ago(iso?: string) {
  if (!iso) return "";
  const min = Math.round((Date.now() - new Date(iso).getTime()) / 60000);
  if (min < 60) return rtf.format(-Math.max(1, min), "minute");
  if (min < 1440) return rtf.format(-Math.round(min / 60), "hour");
  return rtf.format(-Math.round(min / 1440), "day");
}

/**
 * Card "ouvindo agora / ouvi por último". Busca /api/spotify ao carregar e a cada 60 s.
 * Se a API falhar ou não estiver configurada, não renderiza nada.
 * O botão ▶ abre o player oficial (embed). Nada toca sem o visitante dar play.
 */
export function Spotify() {
  const [t, setT] = useState<SpotifyTrack | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let alive = true;
    const load = () => fetch("/api/spotify").then((r) => (r.ok ? r.json() : null)).then((d) => alive && setT(d)).catch(() => {});
    load();
    const id = setInterval(load, 60_000);
    return () => { alive = false; clearInterval(id); };
  }, []);

  if (!t) return null;
  const label = t.live ? "ouvindo agora" : `ouvi por último · ${ago(t.playedAt)}`;

  return (
    <div className="relative flex w-full flex-col gap-2">
      <div className="flex w-full items-center gap-3 rounded-xl border border-line bg-white py-2 pl-2 pr-3 text-left">
        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? "fechar player" : "tocar no Spotify"}
          title={open ? "fechar player" : "tocar no Spotify"}
          className="relative grid h-11 w-11 flex-none place-items-center overflow-hidden rounded-lg bg-ink text-lilac transition-colors hover:bg-plum hover:text-white"
        >
          {t.cover && <img src={t.cover} alt="" className={`absolute inset-0 h-full w-full object-cover ${t.live ? "opacity-60" : "opacity-35"}`} />}
          <svg className="relative" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d={open ? "M6 5h4v14H6zM14 5h4v14h-4z" : "M7 4.5v15l13-7.5z"} />
          </svg>
        </button>
        <a href={t.url} target="_blank" rel="noopener" aria-label={`Spotify: ${label}, ${t.title}, de ${t.artist}`} className="flex min-w-0 flex-1 flex-col text-ink no-underline hover:text-ink">
          <span className={`flex items-center gap-1.5 font-mono text-[11.5px] ${t.live ? "text-mint-ink" : "text-ink-3"}`}>
            {t.live && (
              <span aria-hidden className="flex h-2.5 items-end gap-0.5">
                {[0, 0.3, 0.6].map((d) => <span key={d} className="h-2.5 w-0.5 origin-bottom animate-eq bg-mint-ink" style={{ animationDelay: `${d}s` }} />)}
              </span>
            )}
            <span>{label}</span>
          </span>
          <span className={`truncate text-sm font-semibold leading-snug ${t.live ? "text-ink" : "text-tag-ink"}`}>{t.title}</span>
          <span className="truncate text-[13px] leading-snug text-ink-3">{t.artist}</span>
        </a>
        <svg aria-hidden className="flex-none" width="18" height="18" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="11" fill={t.live ? "#1db954" : "#8f8996"} />
          <path d="M7 9.5c3.5-1 7.2-.7 10 1M7.6 12.6c2.9-.8 5.8-.5 8.2.9M8.3 15.5c2.3-.6 4.5-.4 6.4.7" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
      </div>
      {open && (
        <iframe
          title="Player do Spotify"
          src={`https://open.spotify.com/embed/track/${t.trackId}?utm_source=generator&theme=0`}
          width="100%" height="80" loading="lazy"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          className="block rounded-xl border-0"
        />
      )}
    </div>
  );
}
