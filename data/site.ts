// Tudo que é conteúdo fica aqui. Os componentes só cuidam do visual.

export const CV_URL = "/curriculo-rafaela-tavares.pdf";
export const EMAIL = "contato@rafaelatavares.dev";
export const LINKS = {
  github: "https://github.com/rafaelasv",
  linkedin: "https://linkedin.com/in/rafaela-s-tavares",
};
// Linhas do "terminal" do painel: [rótulo, tecnologias].
export const TERMINAL: [string, string][] = [
  ["back", "python, node, postgres"],
  ["front", "react, next, typescript"],
  ["auto", "n8n, selenium, llms"],
];

// Frase curta do card de perfil.
export const CARD_BIO = "Desenvolvedora que transforma processos manuais em sistemas que rodam sozinhos.";
// Parágrafo abaixo do título grande.
export const ABOUT = "Construo de ponta a ponta com React, Next.js e TypeScript na interface e Python e Node no backend. Automatizo processos que tomam horas de trabalho manual e integro IA quando ela resolve o problema.";

// [PREENCHER: números reais] — ou deixe a lista vazia para esconder a linha.
export const STATS = [
  { n: "+2", label: "anos em tecnologia" },
  { n: "4", label: "projetos entregues" },
  { n: "18", label: "campos lidos por ia" },
];

// Os dois cards coloridos do topo (ameixa e lilás).
export const HERO_CARDS = [
  { lines: ["Automação, IA", "e integrações"], href: "#experiencia" },
  { lines: ["React, Next.js,", "Python, n8n"], href: "#projetos" },
];

export type Project = {
  /** resumo de 1 linha usado na lista da home */
  short: string;
  category: string; title: string; desc: string; img: string; tech: string[];
  /** link principal: case interno ("/cases#...") ou site externo ("https://...") */
  href: string; cta: string;
  /** repositório público, se houver */
  repo?: string;
  /** true = mostra "repo privado (cliente)" */
  privateRepo?: boolean;
};

// Ordem da lista na home.
export const PROJECTS: Project[] = [
  {
    short: "Agente no WhatsApp que conduz a triagem do primeiro contato à classificação, com extração de 18 campos curriculares por IA.",
    category: "ia + automação · hub escola", title: "Agente de triagem de candidatos via WhatsApp",
    desc: "Agente conversacional no WhatsApp que conduz a triagem de candidatos do primeiro contato à classificação automática (apto, reprovado ou desistente), com extração de 18 campos curriculares por IA. O portal de vagas foi adaptado a partir de uma base existente.",
    img: "/images/hub-escola.png", tech: ["n8n", "Evolution API", "DeepSeek", "Redis", "PostgreSQL"],
    href: "/cases#case-06", cta: "case completo →", privateRepo: true,
  },
  {
    short: "Baixa NFS-e do Portal Nacional para várias empresas a partir de uma planilha.",
    category: "automação · python", title: "Automação de download de NFS-e",
    desc: "Interface gráfica que baixa NFS-e do Portal Nacional para várias empresas a partir de uma planilha, substituindo um processo manual de horas por alguns cliques.",
    img: "/images/baixa_nfse.png", tech: ["Python", "Selenium", "openpyxl"],
    href: "/cases#case-03", cta: "case →", repo: "https://github.com/rafaelasv/baixa-nfse",
  },
  {
    short: "Site institucional com design limpo e navegação direta.",
    category: "freelance · front-end", title: "Saigom Contabilidade",
    desc: "Site institucional desenvolvido para a Saigom Contabilidade, com design limpo e navegação direta.",
    img: "/images/saigom-screenshot.png", tech: ["React", "JavaScript", "Vercel"],
    href: "https://saigom-contabilidade.vercel.app/", cta: "site ↗", // [PREENCHER: repo, se for público]
  },
  {
    short: "Redesign com foco em credibilidade e contato com o escritório.",
    category: "freelance · web", title: "Redesign do site do Scaldini Garcia",
    desc: "Redesign completo do site institucional, com foco em transmitir credibilidade e facilitar o contato com o escritório.",
    img: "/images/scaldini-screenshot.png", tech: ["Wix"],
    href: "https://www.scaldinigarcia.com.br/", cta: "site ↗",
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
  { group: "backend + dados", items: ["Python", "Node.js", "PostgreSQL", "REST APIs"] },
  { group: "frontend", items: ["React", "Next.js", "TypeScript", "Tailwind"] },
  { group: "automação + ia", items: ["n8n", "Make", "Selenium", "LLMs"] },
  { group: "ferramentas", items: ["Git", "VS Code", "Vercel", "Figma"] },
];

// "Ferramentas do dia a dia" na home. abbr = sigla no quadradinho.
export const TOOLS = [
  { abbr: "Py", name: "Python", use: "scripts e automação" },
  { abbr: "Nd", name: "Node.js", use: "APIs e backend" },
  { abbr: "Pg", name: "PostgreSQL", use: "banco de dados" },
  { abbr: "Re", name: "React", use: "interfaces" },
  { abbr: "Nx", name: "Next.js", use: "apps e sites" },
  { abbr: "Ts", name: "TypeScript", use: "tipagem no front e back" },
  { abbr: "n8", name: "n8n", use: "fluxos e integrações" },
  { abbr: "Se", name: "Selenium", use: "automação de navegador" },
  { abbr: "AI", name: "LLMs", use: "agentes e extração de dados" },
  { abbr: "Gt", name: "Git", use: "versionamento" },
  { abbr: "Vc", name: "Vercel", use: "deploy" },
  { abbr: "Fg", name: "Figma", use: "protótipos" },
];
