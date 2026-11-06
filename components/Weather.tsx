"use client";
import { useEffect, useState, type ReactNode } from "react";
import { WEATHER } from "@/data/widgets";

type Kind = "sun" | "moon" | "cloud-sun" | "cloud-moon" | "cloud" | "fog" | "drizzle" | "rain" | "snow" | "storm";
type Now = { temp: number; code: number; isDay: boolean; time: string };

/** Códigos WMO do Open-Meteo -> texto em português + ícone. */
function describe(code: number, isDay: boolean): { text: string; kind: Kind } {
  if (code === 0) return { text: "céu limpo", kind: isDay ? "sun" : "moon" };
  if (code === 1) return { text: "poucas nuvens", kind: isDay ? "cloud-sun" : "cloud-moon" };
  if (code === 2) return { text: "parcialmente nublado", kind: isDay ? "cloud-sun" : "cloud-moon" };
  if (code === 3) return { text: "nublado", kind: "cloud" };
  if (code === 45 || code === 48) return { text: "neblina", kind: "fog" };
  if (code >= 51 && code <= 57) return { text: "garoa", kind: "drizzle" };
  if (code >= 61 && code <= 67) return { text: "chuva", kind: "rain" };
  if (code >= 71 && code <= 77) return { text: "neve", kind: "snow" };
  if (code >= 80 && code <= 82) return { text: "pancadas de chuva", kind: "rain" };
  if (code === 85 || code === 86) return { text: "neve", kind: "snow" };
  if (code >= 95) return { text: "trovoada", kind: "storm" };
  return { text: "tempo instável", kind: "cloud" };
}

const CLOUD = "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z";
const RAIN_CLOUD = "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242";

// Ícones de traço (estilo Lucide, ISC).
const ICONS: Record<Kind, ReactNode> = {
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" /></>,
  moon: <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />,
  "cloud-sun": <><path d="M12 2v2M4.93 4.93l1.41 1.41M20 12h2M19.07 4.93l-1.41 1.41M15.947 12.65a4 4 0 0 0-5.925-4.128M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" /></>,
  "cloud-moon": <path d="M13 16a3 3 0 0 1 0 6H7a5 5 0 1 1 4.9-6ZM10.1 9A6 6 0 0 1 16 4a4.24 4.24 0 0 0 6 6 6 6 0 0 1-3 5.197" />,
  cloud: <path d={CLOUD} />,
  fog: <path d={`${RAIN_CLOUD}M16 17H7M17 21H9`} />,
  drizzle: <path d={`${RAIN_CLOUD}M8 19v1M8 14v1M16 19v1M16 14v1M12 21v1M12 16v1`} />,
  rain: <path d={`${RAIN_CLOUD}M16 14v6M8 14v6M12 16v6`} />,
  snow: <path d={`${RAIN_CLOUD}M8 15h.01M8 19h.01M12 17h.01M12 21h.01M16 15h.01M16 19h.01`} />,
  storm: <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973M13 12l-3 5h4l-3 5" />,
};

const URL_API =
  `https://api.open-meteo.com/v1/forecast?latitude=${WEATHER.latitude}&longitude=${WEATHER.longitude}` +
  `&current=temperature_2m,weather_code,is_day&timezone=${encodeURIComponent(WEATHER.timezone)}`;

/**
 * Card de clima (Open-Meteo, sem chave). Atualiza a cada 15 min.
 * Se a API falhar, não renderiza nada (igual ao Spotify).
 */
export function Weather() {
  const [w, setW] = useState<Now | null>(null);

  useEffect(() => {
    let alive = true;
    const load = () =>
      fetch(URL_API)
        .then((r) => (r.ok ? r.json() : null))
        .then((d) => {
          if (!alive || !d?.current) return;
          setW({
            temp: Math.round(d.current.temperature_2m),
            code: d.current.weather_code,
            isDay: d.current.is_day === 1,
            time: String(d.current.time).slice(11, 16), // "HH:MM" no fuso pedido
          });
        })
        .catch(() => {});
    load();
    const id = setInterval(load, 15 * 60_000);
    return () => { alive = false; clearInterval(id); };
  }, []);

  if (!w) return null;
  const { text, kind } = describe(w.code, w.isDay);

  return (
    <div className="relative flex w-full items-center gap-3 rounded-xl border border-line bg-white py-2 pl-2 pr-3 text-left" aria-label={`Clima em ${WEATHER.place}: ${w.temp} graus, ${text}`}>
      <span aria-hidden className="grid h-11 w-11 flex-none place-items-center rounded-lg bg-ink text-lilac">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{ICONS[kind]}</svg>
      </span>
      <span className="flex min-w-0 flex-1 flex-col text-ink">
        <span className="font-mono text-[11.5px] text-ink-3">agora · {w.time}</span>
        <span className="truncate text-sm font-semibold leading-snug">{w.temp}°C · {text}</span>
        <span className="text-[13px] leading-snug text-ink-3">{WEATHER.place}</span>
      </span>
    </div>
  );
}
