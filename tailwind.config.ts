import type { Config } from "tailwindcss";

// Paleta da v8. Contraste conferido: textos ink-2/ink-3 sobre paper/branco e panel-* sobre ink passam AA.
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: { desk: "900px" }, // abaixo disso: layout de celular (barra no topo, painel vira hero)
      colors: {
        paper: "#f6f3fb",
        ink: { DEFAULT: "#1e1330", 2: "#3f3354", 3: "#5b4f70" },
        line: { DEFAULT: "#e7def3", soft: "#efe8f8" },
        plum: "#6b2fb3",
        lilac: "#c9a8ff",
        pink: { DEFAULT: "#ffb8da", ink: "#9b2763", bg: "#fdf2f7", line: "#f6d6e6" },
        mint: "#8fe3a8",
        tag: { DEFAULT: "#f1eaf9", ink: "#4b2a7a" },
        panel: { DEFAULT: "#241833", 2: "#2a1d3d", 3: "#33244a", line: "#3a2a52", text: "#e4daf3", muted: "#d6cbe6", light: "#f4eefc" },
      },
      fontFamily: {
        sans: ["var(--font-geist)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        serif: ["var(--font-fraunces)", "serif"],
      },
      keyframes: {
        "hero-in": { from: { opacity: "0", transform: "translateY(6px)" }, to: { opacity: "1", transform: "none" } },
        bob: {
          "0%,100%": { transform: "translateY(0) rotate(var(--r))" },
          "50%": { transform: "translateY(-7px) rotate(calc(var(--r) + 5deg))" },
        },
      },
      animation: {
        "hero-in": "hero-in .35s ease-out both", // teto de 0,4 s
        bob: "bob var(--dur, 6s) var(--delay, 0s) ease-in-out infinite",
      },
    },
  },
} satisfies Config;
