"use client";
import { useEffect, useState } from "react";

export type GhMap = Record<string, { n: number; l: number }>;
type Status = "loading" | "ok" | "error";

const CACHE_PREFIX = "gh-contrib-v1";
const TTL = 30 * 60 * 1000; // 30 min de cache no navegador

// Contribuições do último ano via github-contributions-api (sem token). Se falhar, o gráfico fica vazio.
export function useGithubContributions(user: string) {
  const [data, setData] = useState<GhMap | null>(null);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    let gone = false;
    const key = `${CACHE_PREFIX}-${user}`;
    try {
      const c = JSON.parse(localStorage.getItem(key) || "null");
      if (c && Date.now() - c.t < TTL && c.map) { setData(c.map); setStatus("ok"); return; }
    } catch {}
    (async () => {
      try {
        const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${user}?y=last`);
        if (!res.ok) throw new Error("HTTP " + res.status);
        const json = await res.json();
        if (!json.contributions?.length) throw new Error("resposta sem dados");
        const map: GhMap = {};
        json.contributions.forEach((c: { date: string; count: number; level: number }) => { map[c.date] = { n: c.count, l: c.level }; });
        try { localStorage.setItem(key, JSON.stringify({ t: Date.now(), map })); } catch {}
        if (!gone) { setData(map); setStatus("ok"); }
      } catch (e) {
        console.warn("GitHub: gráfico não carregou", e);
        if (!gone) setStatus("error");
      }
    })();
    return () => { gone = true; };
  }, [user]);

  return { data, status };
}
