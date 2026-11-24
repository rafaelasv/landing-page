// @ts-nocheck
'use client';
// Gatinho de corpo inteiro do rodapé (pixel art 33x48): pisca, balança o rabo, dorme se você ficar parada,
// faz carinho se passar o mouse e pula no clique (hopRef.current()).
import { useEffect, type MutableRefObject, type RefObject } from 'react';

export function useLiveCat(ref: RefObject<HTMLElement | null>, hopRef: MutableRefObject<(() => void) | null>) {
  useEffect(() => {
    const host = ref.current;
    if (!host) return;
    const offs: (() => void)[] = [];
    const on = (t, ev, fn) => { t.addEventListener(ev, fn); offs.push(() => t.removeEventListener(ev, fn)); };
    let catTimer;
    const SP = [".............OO...........OO.....","............OLKO.........OKLO....","............OLPKO.......OKPLO....","............OLPKO.......OKPLO....","...........OLLPKKO.....OKKPLLO...","...........OLLPKKO.....OKKPLLO...","...........OLLLPKO.....OKPLLLO...","...........OLLLPKKO...OKKPLLLO...","...........OLLLPKKO...OKKPLLLO...","...........OLLLPKKO...OKKPLLLO...","...........OLLLPKKKOOOKKKPLLLO...","............OPKKKKKKKKKKKKKPO....","............OKKyYYKKKKKyYYKKO....","............OKyyYOYKKKyOYYYKO....","........O...OKyYYOYKKKyOYYYKO...O",".........OO.OKYYYOYKKKYOYYYKO.OO.","............OKYYYYYKLKYYYYYKO....","............OKKYYYKKKKKYYYKKO....","............OKKKKKKKKKKKKKKKO....",".........OO..OKKKKKKKKKKKKKO..OO.","........O.....OOKKKKKKKKKOO.....O","................OOOOOOOOO........","..................OKKKO..........",".OO..............OKKKKKO.........","OKKO.............OKKKKKO.........","OKKKO...........OKKKKKKKO........",".OKKKO..........OKKKKKKKO........","..OKKO..........OKKKKKKKO........","...OKO..........OKKKKKKKO........","...OKKO........OKKKKKKKKKO.......","...OKKO........OKKKKKKKKKO.......","....OKKO.......OKKKKKKKKKO.......","....OKKO.......OKKKKKKKKKO.......",".....OKO.......OKKKKKKKKKO.......",".....OKKO......OKKKKKKKKKO.......",".....OKKO.....OOKKKKKKKKKO.......",".....OOKKO...OOOKKKKKKKKKO.......","......OKKKO..OKOKKKKKKKKKO.......",".......OKKO..OOOKKKKKKKKKO.......",".......OOKKOOOOOKKKKKKKKKO.......","........OOKKKOKOOKKKKKKKKKO......","..........OOOOKKOKKKKKKKOKO......","............OKKKOKKKKKKKOKO......","............OKKKOKKKKKKKOKO......","............OKKKOKKKKKKKOKO......","............OKKKKOKKKKKOKKO......",".............OOOKOKKKKKOOO.......","................OKKK.KKKO........",".................OOO.OOO........."];
    const W = 33, H = SP.length, PAD = 4, PADT = 10;
    const C = { O: '#0a0a0c', K: '#262628', L: '#8a80c8', P: '#6a60a8', Y: '#eef1f2', y: '#ffffff', m: '#8a80c8', h: '#e0708f', b: '#c95a7c' };
    const el = (tag, css, parent) => { const e = document.createElement(tag); e.style.cssText = css; (parent || host).appendChild(e); return e; };
    const shadow = el('div', 'position:absolute;left:38%;right:14%;bottom:-2px;height:6px;border-radius:50%;background:#8a80c8;opacity:.35;');
    const cv = el('canvas', 'position:relative;display:block;width:100%;height:100%;image-rendering:pixelated;touch-action:none;pointer-events:auto;');
    const opaque = e => { const r = cv.getBoundingClientRect(); const x = Math.floor((e.clientX - r.left) / r.width * cv.width), y = Math.floor((e.clientY - r.top) / r.height * cv.height); for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) { const yy = y + dy, xx = x + dx; if (xx >= 0 && yy >= 0 && xx < cv.width && yy < cv.height && ctx.getImageData(xx, yy, 1, 1).data[3] > 0) return true; } return false; };
    const below = e => { cv.style.pointerEvents = 'none'; const t = document.elementFromPoint(e.clientX, e.clientY); cv.style.pointerEvents = 'auto'; return t; };
    cv.addEventListener('click', e => { if (!opaque(e)) { e.stopPropagation(); e.preventDefault(); const t = below(e); t && t.click(); } }, true);
    cv.addEventListener('pointermove', e => { cv.style.cursor = opaque(e) ? 'pointer' : 'auto'; });
    cv.width = W + PAD * 2; cv.height = H + PADT;
    const ctx = cv.getContext('2d');
    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let look = null;
    const onLook = e => { const r = cv.getBoundingClientRect(); const cx = r.left + r.width * 0.5, cy = r.top + r.height * 0.33; const dx = e.clientX - cx, dy = e.clientY - cy; look = { x: Math.abs(dx) < 25 ? 0 : Math.sign(dx), y: Math.abs(dy) < 25 ? 0 : Math.sign(dy) }; };
    on(window, 'pointermove', onLook);
    let blink = 0, wag = 0, hover = 0, hop = 0, tick = 0, idle = 0, pet = 0, petDist = 0, lastX = null, lastY = null;
    const parts = [];
    const HEART = ['.X.X.', 'XXXXX', '.XXX.', '..X..'], ZED = ['XXX', '.X.', 'XXX'];
    const px = (x, y, c) => { ctx.fillStyle = C[c]; ctx.fillRect(x, y, 1, 1); };
    const LE = 14, RE = 22;
    const mood = () => pet > 0 ? 'carinho' : idle > 220 ? 'dormindo' : idle > 130 ? 'sonolento' : 'normal';
    const draw = () => {
      const md = mood();
      ctx.clearRect(0, 0, cv.width, cv.height);
      const slow = md === 'dormindo' || md === 'sonolento';
      const breath = !reduced && Math.floor(tick / (slow ? 22 : 14)) % 2 ? 1 : 0;
      const wagShift = wag > 0 ? (Math.floor(wag / 2) % 2 ? -1 : 1) : 0;
      const droop = md === 'dormindo' ? 1 : 0;
      for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
        let c = SP[y][x]; if (c === '.') continue;
        const inEye = y >= 12 && y <= 17 && ((x >= LE && x <= LE + 4) || (x >= RE && x <= RE + 4)) && 'YyO'.includes(c);
        if (inEye) {
          if (c === 'O') c = 'Y';
          if (blink > 0 || md === 'dormindo' || md === 'carinho') c = 'K';
          else if (md === 'sonolento') { if (y <= 14) c = 'K'; }
        }
        let dx = 0, dy = 0;
        if (y <= 21) dy = breath + droop;
        if (x < 13 && y >= 22 && y <= 36) dx = Math.round(wagShift * (36 - y) / 10);
        px(PAD + x + dx, PADT + y + dy, c);
      }
      const hy = PADT + breath + droop;
      if (!blink && (md === 'normal' || md === 'sonolento')) [LE, RE].forEach((ex, i) => {
        const ox = look ? look.x : (i ? -1 : 1), oy = look ? look.y : 0;
        for (let r = 13; r <= 15; r++) { const yy = r + oy; if (md === 'sonolento' && yy <= 14) continue; px(PAD + ex + 2 + ox, hy + yy, 'O'); }
      });
      if (blink > 0 || md === 'dormindo') [LE, RE].forEach(ex => { for (let i = 0; i <= 4; i++) px(PAD + ex + i, hy + 15, 'm'); });
      else if (md === 'carinho') [LE, RE].forEach(ex => { px(PAD + ex, hy + 15, 'm'); px(PAD + ex + 1, hy + 14, 'm'); px(PAD + ex + 2, hy + 14, 'm'); px(PAD + ex + 3, hy + 14, 'm'); px(PAD + ex + 4, hy + 15, 'm'); });
      else if (md === 'sonolento') [LE, RE].forEach(ex => { for (let i = 0; i <= 4; i++) px(PAD + ex + i, hy + 15, 'P'); });
      if (md === 'carinho') { [[13, 17], [27, 17]].forEach(([x, y]) => { px(PAD + x, hy + y, 'b'); px(PAD + x + 1, hy + y, 'b'); }); px(PAD + 19, hy + 18, 'h'); px(PAD + 20, hy + 18, 'h'); }
      if (wag > 0 && md !== 'dormindo') [[1, 25], [0, 26], [0, 27], [1, 28]].forEach(([x, y]) => px(x, PADT + y, 'm'));
      if (hover > 0 && md === 'normal') [[36, 9], [37, 8], [38, 11], [39, 11]].forEach(([x, y]) => px(x, y, 'm'));
      if (hop > 0) [[12, 46], [11, 47], [29, 46], [30, 47]].forEach(([x, y]) => px(x, PADT + y - 4, 'm'));
      parts.forEach(p => (p.kind === 'h' ? HEART : ZED).forEach((row, r) => [...row].forEach((ch, i) => ch === 'X' && px(Math.round(p.x) + i, Math.round(p.y) + r, p.kind === 'h' ? 'h' : 'm'))));
    };
    let nextBlink = 25, nextWag = 30;
    catTimer = setInterval(() => {
      const md = mood();
      if (!reduced) {
        tick++; idle++;
        if (--nextBlink <= 0) { blink = md === 'sonolento' ? 6 : 2; nextBlink = (md === 'sonolento' ? 15 : 25) + Math.random() * 35; }
        if (--nextWag <= 0) { if (md === 'normal' || md === 'carinho') wag = 12; nextWag = 35 + Math.random() * 30; }
        if (md === 'carinho' && tick % 5 === 0) parts.push({ kind: 'h', x: 14 + Math.random() * 14, y: 12, vx: (Math.random() - .5) * .4, life: 22 });
        if (md === 'dormindo' && tick % 14 === 0) parts.push({ kind: 'z', x: 31, y: 14, vx: .25, life: 26 });
        for (let i = parts.length - 1; i >= 0; i--) { const p = parts[i]; p.y -= .5; p.x += p.vx; if (--p.life <= 0 || p.y < -4) parts.splice(i, 1); }
      }
      if (blink > 0) blink--; if (wag > 0) wag--; if (hover > 0) hover--; if (hop > 0) hop--; if (pet > 0) pet--;
      draw();
    }, 100);
    draw();
    const wake = () => { const was = mood(); idle = 0; return was === 'dormindo' || was === 'sonolento'; };
    on(host, 'pointerenter', e => { lastX = e.clientX; lastY = e.clientY; petDist = 0; if (wake()) blink = 0; if (!reduced) hover = 8; });
    on(host, 'pointerleave', () => { lastX = null; petDist = 0; });
    on(host, 'pointermove', e => {
      idle = 0;
      if (lastX !== null) { petDist += Math.hypot(e.clientX - lastX, e.clientY - lastY); if (petDist > 60) { pet = 15; if (!wag) wag = 10; } }
      lastX = e.clientX; lastY = e.clientY;
    });
    hopRef.current = () => {
      wake(); blink = 2;
      if (reduced) { draw(); return; }
      if (pet > 0) return;
      hop = 6; wag = 8;
      cv.animate([{ transform: 'translateY(0) scale(1,1)' }, { transform: 'translateY(2px) scale(1.04,.96)', offset: .15 }, { transform: 'translateY(-14px) scale(.97,1.03)', offset: .5 }, { transform: 'translateY(0) scale(1.03,.97)', offset: .85 }, { transform: 'translateY(0) scale(1,1)' }], { duration: 560, easing: 'ease-out' });
      shadow.animate([{ transform: 'scale(1)', opacity: .35 }, { transform: 'scale(.6)', opacity: .15, offset: .5 }, { transform: 'scale(1)', opacity: .35 }], { duration: 560, easing: 'ease-out' });
    };
    return () => { clearInterval(catTimer); offs.forEach(f => f()); hopRef.current = null; host.replaceChildren(); };
  }, [ref, hopRef]);
}
