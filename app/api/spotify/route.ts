import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const { SPOTIFY_CLIENT_ID: id, SPOTIFY_CLIENT_SECRET: secret, SPOTIFY_REFRESH_TOKEN: refresh } = process.env;

async function accessToken() {
  const r = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { Authorization: "Basic " + Buffer.from(`${id}:${secret}`).toString("base64"), "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "refresh_token", refresh_token: refresh! }),
    cache: "no-store",
  });
  if (!r.ok) throw new Error("token " + r.status);
  return (await r.json()).access_token as string;
}

type Item = { id: string; name: string; artists: { name: string }[]; external_urls: { spotify: string } };
const shape = (t: Item, live: boolean) => ({ live, id: t.id, track: t.name, artist: t.artists.map((a) => a.name).join(", "), url: t.external_urls.spotify });

// Tenta "tocando agora"; se nada estiver tocando, devolve a última faixa. Sem variáveis de ambiente: 204 (o card some).
export async function GET() {
  if (!id || !secret || !refresh) return new NextResponse(null, { status: 204 });
  try {
    const token = await accessToken();
    const h = { Authorization: `Bearer ${token}` };
    const now = await fetch("https://api.spotify.com/v1/me/player/currently-playing", { headers: h, next: { revalidate: 30 } });
    if (now.status === 200) {
      const j = await now.json();
      if (j?.is_playing && j.item?.type === "track") return NextResponse.json(shape(j.item, true));
    }
    const rec = await fetch("https://api.spotify.com/v1/me/player/recently-played?limit=1", { headers: h, next: { revalidate: 30 } });
    if (rec.ok) {
      const j = await rec.json();
      const t = j?.items?.[0]?.track;
      if (t) return NextResponse.json(shape(t, false));
    }
  } catch (e) {
    console.warn("spotify:", e);
  }
  return new NextResponse(null, { status: 204 });
}
