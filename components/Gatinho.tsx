"use client";
import { useEffect, useRef } from "react";
import { GATINHO_CORES as C, GATINHO_SPRITE as SP } from "@/data/gatinho";

/**
 * Mascote fixo no canto inferior direito, desenhado num <canvas> de pixel art.
 * Comportamentos:
 * - respira, pisca e balança o rabo sozinho
 * - os olhos seguem o mouse enquanto está acordado
 * - carinho: passar o mouse/dedo várias vezes por cima → olhos ^^, bochechas e corações
 * - sono: ~13 s sem interação fica sonolento; ~22 s dorme (Z). Mouse ou clique acorda.
 * - clique: pulinho com sombra
 * Só os pixels do gato recebem clique; áreas transparentes repassam o clique para o que está atrás.
 * prefers-reduced-motion: fica parado (só pisca ao clicar).
 */
const W = 33, H = SP.length, PAD = 4, PADT = 10, LE = 14, RE = 22;
const HEART = [".X.X.", "XXXXX", ".XXX.", "..X.."], ZED = ["XXX", ".X.", "XXX"];
type Mood = "normal" | "carinho" | "sonolento" | "dormindo";
type Part = { kind: "h" | "z"; x: number; y: number; vx: number; life: number };

export function Gatinho({ outline = false }: { outline?: boolean }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const cvRef = useRef<HTMLCanvasElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current, cv = cvRef.current, shadow = shadowRef.current;
    const ctx = cv?.getContext("2d");
    if (!host || !cv || !shadow || !ctx) return;
    cv.width = W + PAD * 2; cv.height = H + PADT;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let blink = 0, wag = 0, hover = 0, hop = 0, tick = 0, idle = 0, pet = 0, petDist = 0;
    let lastX: number | null = null, lastY = 0, nextBlink = 25, nextWag = 30;
    let look: { x: number; y: number } | null = null;
    const parts: Part[] = [];

    const px = (x: number, y: number, c: string) => { ctx.fillStyle = C[c]; ctx.fillRect(x, y, 1, 1); };
    const mood = (): Mood => (pet > 0 ? "carinho" : idle > 220 ? "dormindo" : idle > 130 ? "sonolento" : "normal");

    const draw = () => {
      const md = mood();
      ctx.clearRect(0, 0, cv.width, cv.height);
      const slow = md === "dormindo" || md === "sonolento";
      const breath = !reduced && Math.floor(tick / (slow ? 22 : 14)) % 2 ? 1 : 0;
      const wagShift = wag > 0 ? (Math.floor(wag / 2) % 2 ? -1 : 1) : 0;
      const droop = md === "dormindo" ? 1 : 0;

      for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
        let c = SP[y][x];
        if (c === ".") continue;
        const inEye = y >= 12 && y <= 17 && ((x >= LE && x <= LE + 4) || (x >= RE && x <= RE + 4)) && "YyO".includes(c);
        if (inEye) {
          if (c === "O") c = "Y"; // pupila original some; é redesenhada abaixo na posição do olhar
          if (blink > 0 || md === "dormindo" || md === "carinho") c = "K";
          else if (md === "sonolento" && y <= 14) c = "K";
        }
        const dy = y <= 21 ? breath + droop : 0; // cabeça sobe/desce
        const dx = x < 13 && y >= 22 && y <= 36 ? Math.round((wagShift * (36 - y)) / 10) : 0; // rabo
        px(PAD + x + dx, PADT + y + dy, c);
      }

      const hy = PADT + breath + droop;
      if (!blink && (md === "normal" || md === "sonolento")) [LE, RE].forEach((ex, i) => {
        const ox = look ? look.x : i ? -1 : 1, oy = look ? look.y : 0;
        for (let r = 13; r <= 15; r++) { const yy = r + oy; if (md === "sonolento" && yy <= 14) continue; px(PAD + ex + 2 + ox, hy + yy, "O"); }
      });
      if (blink > 0 || md === "dormindo") [LE, RE].forEach((ex) => { for (let i = 0; i <= 4; i++) px(PAD + ex + i, hy + 15, "m"); });
      else if (md === "carinho") [LE, RE].forEach((ex) => { px(PAD + ex, hy + 15, "m"); for (let i = 1; i <= 3; i++) px(PAD + ex + i, hy + 14, "m"); px(PAD + ex + 4, hy + 15, "m"); });
      else if (md === "sonolento") [LE, RE].forEach((ex) => { for (let i = 0; i <= 4; i++) px(PAD + ex + i, hy + 15, "P"); });
      if (md === "carinho") {
        [[13, 17], [27, 17]].forEach(([x, y]) => { px(PAD + x, hy + y, "b"); px(PAD + x + 1, hy + y, "b"); });
        px(PAD + 19, hy + 18, "h"); px(PAD + 20, hy + 18, "h");
      }
      if (wag > 0 && md !== "dormindo") [[1, 25], [0, 26], [0, 27], [1, 28]].forEach(([x, y]) => px(x, PADT + y, "m"));
      if (hover > 0 && md === "normal") [[36, 9], [37, 8], [38, 11], [39, 11]].forEach(([x, y]) => px(x, y, "m"));
      if (hop > 0) [[12, 46], [11, 47], [29, 46], [30, 47]].forEach(([x, y]) => px(x, PADT + y - 4, "m"));
      parts.forEach((p) => (p.kind === "h" ? HEART : ZED).forEach((row, r) =>
        [...row].forEach((ch, i) => ch === "X" && px(Math.round(p.x) + i, Math.round(p.y) + r, p.kind === "h" ? "h" : "m"))));
    };

    const timer = window.setInterval(() => {
      const md = mood();
      if (!reduced) {
        tick++; idle++;
        if (--nextBlink <= 0) { blink = md === "sonolento" ? 6 : 2; nextBlink = (md === "sonolento" ? 15 : 25) + Math.random() * 35; }
        if (--nextWag <= 0) { if (md === "normal" || md === "carinho") wag = 12; nextWag = 35 + Math.random() * 30; }
        if (md === "carinho" && tick % 5 === 0) parts.push({ kind: "h", x: 14 + Math.random() * 14, y: 12, vx: (Math.random() - 0.5) * 0.4, life: 22 });
        if (md === "dormindo" && tick % 14 === 0) parts.push({ kind: "z", x: 31, y: 14, vx: 0.25, life: 26 });
        for (let i = parts.length - 1; i >= 0; i--) { const p = parts[i]; p.y -= 0.5; p.x += p.vx; if (--p.life <= 0 || p.y < -4) parts.splice(i, 1); }
      }
      if (blink > 0) blink--; if (wag > 0) wag--; if (hover > 0) hover--; if (hop > 0) hop--; if (pet > 0) pet--;
      draw();
    }, 100);
    draw();

    // só pixels pintados contam como "o gato"
    const opaque = (e: MouseEvent) => {
      const r = cv.getBoundingClientRect();
      const x = Math.floor(((e.clientX - r.left) / r.width) * cv.width), y = Math.floor(((e.clientY - r.top) / r.height) * cv.height);
      for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
        const xx = x + dx, yy = y + dy;
        if (xx >= 0 && yy >= 0 && xx < cv.width && yy < cv.height && ctx.getImageData(xx, yy, 1, 1).data[3] > 0) return true;
      }
      return false;
    };
    const wake = () => { const was = mood(); idle = 0; if (was === "dormindo" || was === "sonolento") blink = 0; };

    const onLook = (e: PointerEvent) => {
      const r = cv.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width * 0.5), dy = e.clientY - (r.top + r.height * 0.33);
      look = { x: Math.abs(dx) < 25 ? 0 : Math.sign(dx), y: Math.abs(dy) < 25 ? 0 : Math.sign(dy) };
    };
    const onEnter = (e: PointerEvent) => { lastX = e.clientX; lastY = e.clientY; petDist = 0; wake(); if (!reduced) hover = 8; };
    const onLeave = () => { lastX = null; petDist = 0; };
    const onMove = (e: PointerEvent) => {
      cv.style.cursor = opaque(e) ? "pointer" : "auto";
      idle = 0;
      if (lastX !== null) { petDist += Math.hypot(e.clientX - lastX, e.clientY - lastY); if (petDist > 60) { pet = 15; if (!wag) wag = 10; } }
      lastX = e.clientX; lastY = e.clientY;
    };
    const onClick = (e: MouseEvent) => {
      if (!opaque(e)) { // clique no vazio: repassa para o elemento de trás
        cv.style.pointerEvents = "none";
        const below = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
        cv.style.pointerEvents = "auto";
        below?.click();
        return;
      }
      wake(); blink = 2;
      if (reduced || pet > 0) return;
      hop = 6; wag = 8;
      cv.animate([
        { transform: "translateY(0) scale(1,1)" },
        { transform: "translateY(2px) scale(1.04,.96)", offset: 0.15 },
        { transform: "translateY(-14px) scale(.97,1.03)", offset: 0.5 },
        { transform: "translateY(0) scale(1.03,.97)", offset: 0.85 },
        { transform: "translateY(0) scale(1,1)" },
      ], { duration: 560, easing: "ease-out" });
      shadow.animate([{ transform: "scale(1)", opacity: 0.35 }, { transform: "scale(.6)", opacity: 0.15, offset: 0.5 }, { transform: "scale(1)", opacity: 0.35 }], { duration: 560, easing: "ease-out" });
    };

    window.addEventListener("pointermove", onLook);
    cv.addEventListener("pointerenter", onEnter);
    cv.addEventListener("pointerleave", onLeave);
    cv.addEventListener("pointermove", onMove);
    cv.addEventListener("click", onClick);
    return () => {
      clearInterval(timer);
      window.removeEventListener("pointermove", onLook);
      cv.removeEventListener("pointerenter", onEnter);
      cv.removeEventListener("pointerleave", onLeave);
      cv.removeEventListener("pointermove", onMove);
      cv.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <div
      ref={hostRef}
      role="img"
      aria-label="gatinho preto em pixel art"
      className="pointer-events-none fixed bottom-1.5 right-4 z-40 h-[86px] w-[60px] wide:h-[118px] wide:w-[82px]"
    >
      <div ref={shadowRef} className="absolute bottom-[-2px] left-[38%] right-[14%] h-1.5 rounded-[50%] bg-[#8a80c8] opacity-35" />
      <canvas
        ref={cvRef}
        className="pointer-events-auto relative block h-full w-full touch-none [image-rendering:pixelated]"
        // outline: contorno cinza para o gato preto não sumir no fundo escuro (home v17)
        style={outline ? { filter: "drop-shadow(1.5px 0 0 #4a4452) drop-shadow(-1.5px 0 0 #4a4452) drop-shadow(0 1.5px 0 #4a4452) drop-shadow(0 -1.5px 0 #4a4452)" } : undefined}
      />
    </div>
  );
}
