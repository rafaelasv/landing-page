import type { Config } from "tailwindcss";

// v17: home escura com card claro; /cases segue clara (v15).
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        desk: "900px", // /cases: painel lateral a partir daqui
        wide: "1100px", // home: card fixo à esquerda a partir daqui (abaixo, empilha)
        xwide: "1200px", // home: linhas de projeto com miniatura maior
      },
      colors: {
        paper: "#f5f4f2",
        ink: { DEFAULT: "#16131a", 2: "#4a4550", 3: "#5f5a66" },
        line: { DEFAULT: "#e4e2e6", soft: "#efedf1", strong: "#b7b2bd" },
        plum: { DEFAULT: "#5a2d82", bright: "#6b3a96", soft: "#e9e4ef" },
        lilac: { DEFAULT: "#c8b6e2", light: "#ddd0ee" },
        mint: { DEFAULT: "#7bd88f", ink: "#2f7a45" },
        tag: { DEFAULT: "#f1eff3", ink: "#3a3540" },
        todo: "#8a3a4a",
        spotify: "#1db954",
        panel: { DEFAULT: "#221e27", 2: "#2c2731", line: "#36313c", term: "#0e0c11", text: "#dcd8e0", muted: "#c9c4cf", dim: "#8f8996", light: "#f2f0f4" },
        // fundo escuro da home
        night: { DEFAULT: "#131115", 2: "#1f1b23", line: "#2c2731", title: "#5d5666", muted: "#a9a3b0", faint: "#8f8996" },
      },
      fontFamily: {
        sans: ["var(--font-geist)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      keyframes: {
        "hero-in": { from: { opacity: "0", transform: "translateY(6px)" }, to: { opacity: "1", transform: "none" } },
        blink: { "50%": { opacity: "0" } },
        eq: { "0%, 100%": { transform: "scaleY(.3)" }, "50%": { transform: "scaleY(1)" } },
      },
      animation: {
        "hero-in": "hero-in .35s ease-out both",
        blink: "blink 1.1s steps(1) infinite",
        eq: "eq .9s ease-in-out infinite",
      },
    },
  },
} satisfies Config;
