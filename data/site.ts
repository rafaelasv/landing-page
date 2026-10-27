// Tudo que é conteúdo fica aqui. Os componentes só cuidam do visual.

export const CV_URL = "/curriculo-rafaela-tavares.pdf";
export const EMAIL = "contato@rafaelatavares.dev";
export const LINKS = {
  github: "https://github.com/rafaelasv",
  linkedin: "https://linkedin.com/in/rafaela-s-tavares",
};
export const STICKER = (name: string) => `/stickers/sticker-${name}.png`;

export type Project = {
  category: string; title: string; desc: string; img: string; stack: string;
  href: string; cta: string; external: boolean;
};

export const LEAD_PROJECT: Project = {
  category: "IA e automação · Hub Escola",
  title: "Agente de triagem de candidatos via WhatsApp",
  desc: "Agente conversacional no WhatsApp que conduz a triagem de candidatos do primeiro contato à classificação automática (apto, reprovado ou desistente), com extração de 18 campos curriculares por IA. O portal de vagas foi adaptado a partir de uma base existente.",
  img: "/images/hub-escola.png",
  stack: "n8n · Evolution API · DeepSeek · Redis · PostgreSQL",
  href: "/cases#case-06", cta: "ver case completo", external: false,
};

export const PROJECTS: Project[] = [
  {
    category: "Automação em Python", title: "Automação de download de NFS-e",
    desc: "Interface gráfica que baixa NFS-e do Portal Nacional para várias empresas a partir de uma planilha, substituindo um processo manual de horas por alguns cliques.",
    img: "/images/baixa_nfse.png", stack: "Python · Selenium · openpyxl",
    href: "https://github.com/rafaelasv/baixa-nfse", cta: "código no GitHub", external: true,
  },
  {
    category: "Freelance", title: "Saigom Contabilidade",
    desc: "Site institucional desenvolvido para a Saigom Contabilidade, com design limpo e navegação direta.",
    img: "/images/saigom-screenshot.png", stack: "React · JavaScript",
    href: "https://saigom-contabilidade.vercel.app/", cta: "ver site", external: true,
  },
  {
    category: "Freelance", title: "Redesign do site do Scaldini Garcia",
    desc: "Redesign completo do site institucional, com foco em transmitir credibilidade e facilitar o contato com o escritório.",
    img: "/images/scaldini-screenshot.png", stack: "Wix",
    href: "https://www.scaldinigarcia.com.br/", cta: "ver site", external: true,
  },
];

export const JOBS = [
  { period: "jul/2026 – atual", role: "Desenvolvedora Full Stack Jr. (Freelance, PJ)", org: "Hub Escola", current: true },
  { period: "mai/2026 – jul/2026", role: "Assistente de Operações (Freelance, PJ)", org: "Amanda Arrigo Teacher", current: false },
  { period: "abr/2026 – jul/2026", role: "Estagiária de Suporte", org: "e-Price Tecnologia", current: false },
  { period: "abr/2024 – set/2025", role: "Técnico de Suporte", org: "Scaldini Garcia Contabilidade", current: false },
];

export const EDUCATION = [
  { period: "previsão jul/2027", course: "Análise e Desenvolvimento de Sistemas", org: "UNINTER" },
  { period: "2024", course: "Técnico em Informática para Internet", org: "IFSULDEMINAS" },
];

export const STACK = [
  { group: "automação e IA", items: ["n8n", "Make", "Selenium", "LLMs"] },
  { group: "backend e dados", items: ["Python", "Node.js", "PostgreSQL", "REST APIs"] },
  { group: "frontend", items: ["React", "Next.js", "TypeScript", "Tailwind"] },
  { group: "ferramentas", items: ["Git", "Figma", "VS Code", "Vercel"] },
];
