// Dados que não mudam de idioma. Os textos traduzidos ficam em data/i18n.ts (mesma ordem das listas abaixo).

export const SITE = {
  github: "rafaelasv",
  githubUrl: "https://github.com/rafaelasv",
  linkedin: "https://linkedin.com/in/rafaela-s-tavares",
  email: "contato@rafaelatavares.dev",
  cv: "/curriculo-rafaela-tavares.pdf",
  casesUrl: "/cases" as string | null,
};

export const NAV = [
  { href: "#inicio", key: "inicio", id: "hero", d: "m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1z" },
  { href: "#projetos", key: "projetos", id: "projetos", d: "M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" },
  { href: "#experiencia", key: "experiencia", id: "experiencia", d: "M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M3 13h18" },
  { href: "#stack", key: "stack", id: "stack", d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z" },
  { href: "#contato", key: "contato", id: "contato", d: "M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z" },
] as const;

// Projetos: título e resumo vêm de i18n.projects[i]. Coloque as imagens em public/images/.
export const PROJECTS = [
  { img: "/images/mapa-hub.png", tech: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle", "Cloudflare Workers", "Docker", "CI/CD", "LLM (Claude)"], href: "/cases#case-08" as string | null },
  { img: "/images/hub-escola.png", tech: ["n8n", "Evolution API", "DeepSeek", "Redis", "PostgreSQL"], href: "/cases#case-06" },
  { img: "/images/baixa_nfse.png", tech: ["Python", "Selenium", "openpyxl"], href: "/cases#case-03" },
  { img: "/images/saigom-screenshot.png", tech: ["React", "JavaScript", "Vercel"], href: "https://saigom-contabilidade.vercel.app/" },
  { img: "/images/scaldini-screenshot.png", tech: ["Wix"], href: "https://www.scaldinigarcia.com.br/" },
];

// Ferramentas: a ordem bate com i18n.toolsUse. "abbr" escolhe o ícone em data/tool-icons.ts.
export const TOOLS = [
  { abbr: "Py", name: "Python" }, { abbr: "Nd", name: "Node.js" }, { abbr: "Pg", name: "PostgreSQL" }, { abbr: "Re", name: "React" },
  { abbr: "Nx", name: "Next.js" }, { abbr: "Ts", name: "TypeScript" }, { abbr: "n8", name: "n8n" }, { abbr: "Se", name: "Selenium" },
  { abbr: "AI", name: "LLMs" }, { abbr: "Gt", name: "Git" }, { abbr: "Vc", name: "Vercel" }, { abbr: "Fg", name: "Figma" },
];

// Experiência e formação: período e cargo/curso vêm de i18n.jobs / i18n.edu (mesma ordem).
export const JOBS = [
  { org: "Atende Direito", current: true },
  { org: "Hub Escola", current: true },
  { org: "Amanda Arrigo Teacher", current: false },
  { org: "e-Price Tecnologia", current: false },
  { org: "Scaldini Garcia Contabilidade", current: false },
];
export const EDU = [{ org: "UNINTER" }, { org: "IFSULDEMINAS" }];

export const SPOTIFY_FALLBACK_ID = "1eyzqe2QqGZUmfcPZtrIyt";
