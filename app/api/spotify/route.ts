import { NextResponse } from "next/server";

/**
 * GET /api/spotify → { live, title, artist, url, trackId, cover, playedAt } ou 204.
 * 1) tenta "tocando agora"; 2) se nada estiver tocando, pega a última faixa ouvida.
 * Variáveis em .env.local (ver README): SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN
 */
export const dynamic = "force-dynamic";

const { SPOTIFY_CLIENT_ID: id, SPOTIFY_CLIENT_SECRET: secret, SPOTIFY_REFRESH_TOKEN: refresh } = process.env;
const API = "https://api.spotify.com/v1/me/player";

type SpTrack = { id: string; name: string; artists: { name: string }[]; external_urls: { spotify: string }; album: { images: { url: string }[] } };

async function accessToken() {
  const r = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${id}:${secret}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ grant_type: "refresh_token", refresh_token: refresh! }),
    cache: "no-store",
  });
  if (!r.ok) throw new Error("token");
  return (await r.json()).access_token as string;
}

const shape = (t: SpTrack, live: boolean, playedAt?: string) => ({
  live, playedAt,
  title: t.name,
  artist: t.artists.map((a) => a.name).join(", "),
  url: t.external_urls.spotify,
  trackId: t.id,
  cover: t.album.images.at(-1)?.url, // a menor imagem
});

export async function GET() {
  if (!id || !secret || !refresh) return new NextResponse(null, { status: 204 });
  try {
    const token = await accessToken();
    const headers = { Authorization: `Bearer ${token}` };
    const cacheHeaders = { "Cache-Control": "public, s-maxage=30, stale-while-revalidate=60" };

    const now = await fetch(`${API}/currently-playing`, { headers, cache: "no-store" });
    if (now.status === 200) {
      const d = await now.json();
      if (d.is_playing && d.item?.type === "track") return NextResponse.json(shape(d.item, true), { headers: cacheHeaders });
    }

    const rec = await fetch(`${API}/recently-played?limit=1`, { headers, cache: "no-store" });
    if (rec.ok) {
      const item = (await rec.json()).items?.[0];
      if (item) return NextResponse.json(shape(item.track, false, item.played_at), { headers: cacheHeaders });
    }
    return new NextResponse(null, { status: 204 });
  } catch {
    return new NextResponse(null, { status: 204 });
  }
}
