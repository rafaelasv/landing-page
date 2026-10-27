"use client";
import Link from "next/link";
import { CV_URL, EMAIL, LINKS } from "@/data/site";
import { SideLinks, SideNav, sidePill } from "./Shell";
import { Sticker } from "./Sticker";
import { useScrollSpy } from "./useScrollSpy";

export const HOME_NAV = [
  { href: "/#projetos", label: "Projetos", id: "projetos" },
  { href: "/#experiencia", label: "Experiência", id: "experiencia" },
  { href: "/#sobre", label: "Sobre", id: "sobre" },
  { href: "/#contato", label: "Contato", id: "contato" },
  { href: "/cases", label: "Cases ↗" }, // (5) antes apontava para "#"
];

/** Conteúdo do painel da home. Título, texto e botões já vêm no HTML; só o menu depende de JS. */
export function HomeSidebar() {
  const active = useScrollSpy(["projetos", "experiencia", "sobre", "contato"]);

  return (
    <>
      <Link href="/" className="hidden items-center gap-2.5 text-[15px] font-semibold tracking-tight text-panel-light no-underline desk:flex">
        <span className="h-2.5 w-2.5 rounded-[3px] bg-pink" />Rafaela Tavares
      </Link>

      <div className="flex flex-col gap-3.5">
        <p className="flex items-center gap-2 self-start rounded-full border border-panel-line px-2.5 py-1 text-sm text-panel-muted">
          <span className="h-[7px] w-[7px] rounded-full bg-mint shadow-[0_0_0_3px_rgba(143,227,168,.18)]" />
          Disponível · Trainee e Júnior, remoto
        </p>
        <h1 className="text-balance font-serif text-[26px] leading-[1.15] tracking-[-0.015em] desk:text-[clamp(26px,2.2vw,31px)]">
          Do <em className="text-lilac">backend</em> ao <em className="text-pink">frontend</em>, com automação e IA.
        </h1>
        <p className="text-pretty text-panel-text">Desenvolvedora Full Stack. Construo com Python, Node.js e React e automatizo o que consome tempo demais.</p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <a href="#projetos" className="flex min-h-11 items-center justify-center rounded-[10px] bg-lilac px-3.5 font-semibold text-ink no-underline transition hover:-translate-y-px hover:bg-pink hover:text-ink">ver projetos</a>
        <a href="#contato" className="flex min-h-11 items-center justify-center rounded-[10px] bg-panel-2 px-3.5 font-medium text-panel-light no-underline transition-colors hover:bg-panel-line hover:text-panel-light">falar comigo</a>
        <a href={CV_URL} download className="col-span-2 flex min-h-11 items-center justify-between rounded-[10px] border border-panel-line px-3.5 font-medium text-panel-light no-underline transition-colors hover:border-lilac hover:bg-[#241833] hover:text-panel-light">
          <span>Baixar currículo</span><span className="font-mono text-sm text-panel-muted">PDF ↓</span>
        </a>
      </div>

      <div className="hidden desk:block">
        <SideNav items={HOME_NAV} active={active} label="principal" />
      </div>

      <SideLinks>
        <a href={LINKS.github} target="_blank" rel="noopener" className={sidePill}>GitHub ↗</a>
        <a href={LINKS.linkedin} target="_blank" rel="noopener" className={sidePill}>LinkedIn ↗</a>
        <a href={`mailto:${EMAIL}`} className={sidePill}>E-mail</a>
      </SideLinks>

      <Sticker name="star" rotate="12deg" duration={5.5} className="right-5 top-5 w-[50px]" />
      <Sticker name="crow" rotate="-8deg" duration={7} delay={0.6} className="bottom-[70px] right-4 w-14" />
    </>
  );
}
