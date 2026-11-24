"use client";
import { useEffect, useState } from "react";
import type { Dict } from "@/data/home/i18n";
import { SPOTIFY_FALLBACK_ID } from "@/data/home/site";

type Track = { live: boolean; track: string; artist: string; url: string; id: string };

// Card "ouvindo agora" / "ouvi por último". Busca /api/spotify (veja o README). Sem as variáveis de ambiente, não aparece.
export default function Spotify({ tx }: { tx: Dict }) {
  const [t, setT] = useState<Track | null>(null);
  const [open, setOpen] = useState(false);

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
  const label = t.live ? tx.spLive : tx.spLastShort;
  const aria = `Spotify: ${label} ${t.track}, ${t.artist}`;
  const embed = `https://open.spotify.com/embed/track/${t.id || SPOTIFY_FALLBACK_ID}?utm_source=generator&theme=0`;
  return (
    <div className="flex w-full max-w-[420px] flex-col gap-2">
      <div className="flex w-full items-center gap-3 rounded-[14px] border border-night-line bg-night-3 py-2 pl-2 pr-3 text-left">
        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? tx.spClose : tx.spOpenLbl}
          title={open ? tx.spClose : tx.spOpenLbl}
          className="grid h-11 w-11 flex-none cursor-pointer place-items-center rounded-[10px] border-0 bg-night-line p-0 text-lilac transition-colors hover:bg-plum hover:text-white"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d={open ? "M6 5h4v14H6zM14 5h4v14h-4z" : "M7 4.5v15l13-7.5z"} /></svg>
        </button>
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
      {open && (
        <iframe
          title={tx.spFrame}
          src={embed}
          width="100%"
          height="80"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="block rounded-xl border-0"
        />
      )}
    </div>
  );
}
