import type { Config } from "tailwindcss";

// Paleta da v15: neutra e escura, com ameixa só em rótulos e links.
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: { desk: "900px" }, // abaixo disso: layout de celular (barra no topo, painel vira topo da página)
      colors: {
        paper: "#f5f4f2",
        ink: { DEFAULT: "#16131a", 2: "#4a4550", 3: "#5f5a66" },
        line: { DEFAULT: "#e4e2e6", soft: "#efedf1", strong: "#b7b2bd" },
        plum: "#5a2d82",
        lilac: "#c8b6e2",
        mint: { DEFAULT: "#7bd88f", ink: "#2f7a45" },
        tag: { DEFAULT: "#f1eff3", ink: "#3a3540" },
        todo: "#8a3a4a",
        panel: { DEFAULT: "#221e27", 2: "#2c2731", line: "#36313c", term: "#0e0c11", text: "#dcd8e0", muted: "#c9c4cf", dim: "#8f8996", light: "#f2f0f4" },
      },
      fontFamily: {
        sans: ["var(--font-geist)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      keyframes: {
        "hero-in": { from: { opacity: "0", transform: "translateY(6px)" }, to: { opacity: "1", transform: "none" } },
        blink: { "50%": { opacity: "0" } },
      },
      animation: {
        "hero-in": "hero-in .35s ease-out both",
        blink: "blink 1.1s steps(1) infinite",
      },
    },
  },
} satisfies Config;
