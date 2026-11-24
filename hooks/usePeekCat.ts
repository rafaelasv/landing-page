// @ts-nocheck
'use client';
// Gatinho espiando por cima da linha: pixel art 40x36 extraída da folha de sprites da Rafaela.
// Pisca, olha para o mouse, mexe a orelha, brilhos piscam, coração flutua, sorri no hover e se esconde no clique.
// Para mudar o desenho, edite ROWS (cada letra é um pixel; . = transparente).
import { useEffect, type RefObject } from 'react';

export function usePeekCat(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const host = ref.current;
    if (!host) return;
    const offs: (() => void)[] = [];
    const on = (t, ev, fn) => { t.addEventListener(ev, fn); offs.push(() => t.removeEventListener(ev, fn)); };
    let peekTimer;
    const CW = 40, CH = 36, X0 = 8, W = 60, H = 36, MX = 39; // espelho local: x' = 39 - x
    const COL = { O: '#060607', k: '#22222a', L: '#9882c8', M: '#7e6cb0', D: '#62508f', Y: '#fcfcf0', y: '#e4e6cc', n: '#9c78d6', m: '#8a6cd0', S: '#3a3447', H: '#c6b8f4', V: '#8f66e8', E: '#55505f' };
    // sprite base 40x36 extraído da folha da Rafaela (olhos sem pupila; '.' = transparente)
    const ROWS = [
      '......OOOO....................OOOO......',
      '......OOOO....................OOOO......',
      '......OLLO....................MLDO......',
      '.....OkMLO....................MLMDOO....',
      '...OOODLLDO..................OMLLDOO....',
      '...OOODLLDkO................OkLLLDOO....',
      '...OOODLLDkO...............OkkLLLDOO....',
      '.OOOOMLLLDkO...............OkkMLLLLMOO..',
      '.OOOMLLLDDkO..............OkkkDMLLLDOO..',
      '.OOOLLLLDDkkO............OkkkkDMLLLDOO..',
      '.OOOLLLLDDDkkO...........OkkDDDMLLLDOO..',
      '.OOOLLLLMDDkkO...........OkkDDMMLLLDOO..',
      '.OOOLLLLLDDkkO...........OkkDDLLLLLDOO..',
      '.OOOLLLLLMDDkO...........OkkDDLLLLLDOO..',
      '.OOOLLLLLMDDkkOO........OkkkDDLLLLLDOO..',
      '.OOOLLLLDDDkkkkkOOOOOOOOkkkkDDDDLLLDOO..',
      '.OOOLLLLDDDkkkkOOOOOOOOOkkkkDDDDLLLDOO..',
      '.OOOODLLDDkkkkkkkkkkkkkkkkkkkkDDLLLDOO..',
      '..OOODLLDDkkkkkkkkkkkkkkkkkkkkDDLLOOO...',
      '...OODMMkkkkkkkkkkkkkkkkkkkkkkkkMMOOO...',
      '...OOODMkkkkkkkkkkkkkkkkkkkkkkkkMDOOO...',
      '...OOOOkkkkyyyykkkkkkkkkkyyyykkkkOOOO...',
      '.....OOOkkkYYYYkkkkkkkkkkYYYYkkkOOO.....',
      '...OOOOkkYYYYYYYYkkkkkkYYYYYYYDkkOOO....',
      '...OOOOkDYYYYYYYYkkkkkkYYYYYYYyDkOOO....',
      '...OOOkkYYYYYYYYYkkkkkkYYYYYYYYYkkOO....',
      '...OOOkkYYYYYYYYYkkkkkkYYYYYYYYYkkOO....',
      '...OOOkkYYYYYYYYYkkkkkkYYYYYYYYYkkOO....',
      '...OOOkkYYYYYYYYYkkkkkkYYYYYYYYYkkOO....',
      '..OOOOOOYYYYYYYYYkknnkkYYYYYYYYyOOOOOO..',
      '.OOOkkkOOYYYYYYyykknnkkyyYYYYYYOOkkkOOO.',
      'OOOkkkkkOOyYYYYkkkkkkkkkkYYYYYOOkkkkkOO.',
      'OOkkkkkkOODDDDDkkkkkkkkkkDDDDDOOkkkkkkOO',
      'OOkkkkkkOOkkkkkkkkkkkkkkkkkkkkOOkkkkkkOO',
      'OOOkkkkkOOOkkkkkkkkkkkkkkkkkkkOOOkkkkkOO',
      '.OOOOOOOOkkkkkkkkkkkkkkkkkkkkkkOOOOOOOO.'
    ];
    const base = ROWS.map(r => [...r].map(ch => ch === '.' ? null : ch));
    const ear = Array.from({ length: CH }, (_, y) => Array.from({ length: CW }, (_, x) => (y <= 9 ? (x < CW / 2 ? -1 : 1) : 0)));
    const cv = document.createElement('canvas');
    cv.width = W; cv.height = H;
    cv.style.cssText = 'display:block;width:100%;height:auto;image-rendering:pixelated;';
    host.appendChild(cv);
    const ctx = cv.getContext('2d');
    const px = (x, y, c) => { ctx.fillStyle = COL[c] || c; ctx.fillRect(x + X0, y, 1, 1); };
    const reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    let tick = 0, blink = 0, twitch = 0, twitchSide = -1, hover = 0, look = { x: 0, y: 0 }, busy = false;
    let nextBlink = 30, nextTwitch = 60;
    const EYES = [[8, 16], [23, 31]];
    const drawEye = (i, st) => {
      const [a, b] = EYES[i];
      const cells = [];
      for (let y = 21; y <= 32; y++) for (let x = a; x <= b; x++) { const ch = base[y][x]; if (ch === 'Y' || ch === 'y' || (ch === 'D' && y >= 31)) cells.push([x, y, ch]); }
      if (st === 'closed') { cells.forEach(([x, y]) => px(x, y, 'k')); for (let x = a; x <= b; x++) px(x, 27, 'E'); return; }
      if (st === 'happy') { cells.forEach(([x, y]) => px(x, y, 'k')); [[0, 28], [1, 27], [2, 26], [3, 25], [4, 25], [5, 25], [6, 25], [7, 26], [8, 27]].forEach(([dx, y]) => { px(a + dx, y, 'Y'); px(a + dx, y + 1, 'y'); }); return; }
      cells.forEach(([x, y, ch]) => px(x, y, st === 'sleepy' && y < 27 ? 'k' : ch));
      if (st === 'sleepy') { for (let x = a; x <= b; x++) px(x, 27, 'O'); return; }
      const ox = Math.max(-1, Math.min(1, look.x)), gy = look.y < 0 ? -1 : 0;
      const px0 = a + 5 + ox;
      for (let y = 24; y <= 28; y++) { px(px0, y + gy, 'O'); px(px0 + 1, y + gy, 'O'); }
    };
    const plus = (cx, cy, c) => { px(cx, cy, c); px(cx - 1, cy, c); px(cx + 1, cy, c); px(cx, cy - 1, c); px(cx, cy + 1, c); };
    const HEART = ['.XX..XX.', 'XXXXXXXX', 'XXXXXXXX', 'XXXXXXXX', '.XXXXXX.', '..XXXX..', '...XX...'];
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const tw = o => { const t = (Math.floor(tick / 4) + o) % 6; return t <= 1 ? 2 : t <= 3 ? 1 : t === 4 ? 2 : 0; };
      // brilhos e tracinhos (ficam atrás do gato)
      const a = tw(0), b = tw(3), c = tw(5);
      plus(42, 24, a === 2 ? 'D' : a === 1 ? 'S' : 'k');
      if (b) plus(-3, 24, b === 2 ? 'M' : 'S');
      if (c) px(-5, 29, c === 2 ? 'D' : 'S');
      px(-6, 19, b === 2 ? 'S' : 'k');
      for (let x = -1; x <= 2; x++) px(x, 29, 'S');
      for (let x = 41; x <= 44; x++) px(x, 28, 'S');
      // coração
      const hb = hover > 0 ? -3 : (Math.floor(tick / 6) % 2 ? 1 : 0);
      HEART.forEach((row, r) => [...row].forEach((ch, i) => {
        if (ch !== 'X') return;
        const edge = row[i - 1] !== 'X' || row[i + 1] !== 'X' || !HEART[r - 1] || HEART[r - 1][i] !== 'X' || !HEART[r + 1] || HEART[r + 1][i] !== 'X';
        px(42 + i, 8 + r + hb, edge ? 'D' : (r <= 1 && i <= 3) ? 'H' : r >= 4 ? 'm' : 'V');
      }));
      // corpo
      for (let y = 0; y < CH; y++) for (let x = 0; x < CW; x++) {
        const col = base[y][x]; if (!col) continue;
        const xx = (twitch > 0 && ear[y][x] === twitchSide && y <= 9) ? x + twitchSide : x;
        px(xx, y, col);
      }
      const st = blink === 2 ? 'closed' : blink > 0 ? 'sleepy' : hover > 0 ? 'happy' : 'open';
      drawEye(0, st); drawEye(1, st);
    };
    const onLook = e => { const r = cv.getBoundingClientRect(); const cx = r.left + r.width * .5, cy = r.top + r.height * .7; const dx = e.clientX - cx, dy = e.clientY - cy; look = { x: Math.abs(dx) < 30 ? 0 : Math.sign(dx), y: Math.abs(dy) < 30 ? 0 : (dy < 0 ? -1 : 1) }; if (reduced) draw(); };
    on(window, 'pointermove', onLook);
    on(host, 'pointerenter', () => { hover = 10; if (reduced) draw(); });
    on(host, 'pointerleave', () => { hover = 0; if (reduced) draw(); });
    const hide = () => {
      if (busy) return; busy = true;
      if (reduced) { busy = false; return; }
      const an = cv.animate([{ transform: 'translateY(0)' }, { transform: 'translateY(110%)', offset: .25 }, { transform: 'translateY(110%)', offset: .65 }, { transform: 'translateY(0)' }], { duration: 1200, easing: 'ease-in-out' });
      an.onfinish = () => { busy = false; };
    };
    on(host, 'click', hide);
    on(host, 'keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); hide(); } });
    draw();
    if (!reduced) {
      peekTimer = setInterval(() => {
        tick++;
        if (--nextBlink <= 0) { blink = 3; nextBlink = 28 + Math.random() * 40; }
        if (--nextTwitch <= 0) { twitch = 2; twitchSide = Math.random() < .5 ? -1 : 1; nextTwitch = 50 + Math.random() * 70; }
        if (blink > 0) blink--; if (twitch > 0) twitch--; if (hover > 0) hover--;
        draw();
      }, 100);
    }
    return () => { clearInterval(peekTimer); offs.forEach(f => f()); host.replaceChildren(); };
  }, [ref]);
}
