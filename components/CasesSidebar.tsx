"use client";
import Link from "next/link";
import { CASES } from "@/data/cases";
import { CV_URL, LINKS } from "@/data/site";
import { SideLinks, SideNav, sidePill } from "./Shell";
import { useScrollSpy } from "./useScrollSpy";

export const CASES_NAV = [
  { href: "/#projetos", label: "Projetos" },
  { href: "/#experiencia", label: "Experiência" },
  { href: "/cases", label: "Cases" },
  { href: "/#contato", label: "Contato" },
];

export function CasesSidebar() {
  const active = useScrollSpy(CASES.map((c) => c.slug));
  const index = CASES.map((c) => ({ href: `#${c.slug}`, label: c.shortTitle, id: c.slug, num: c.num }));

  return (
    <>
      <Link href="/" className="hidden items-center gap-1.5 font-mono text-sm text-panel-light no-underline desk:flex">
        <span className="text-lilac">~/</span>rafaela-tavares
      </Link>
      <Link href="/" className={`${sidePill} min-h-9 self-start`}>← voltar ao início</Link>

      <div className="flex flex-col gap-3">
        <p className="font-mono text-sm text-lilac">~/cases</p>
        <h1 className="text-[24px] font-semibold leading-[1.15] tracking-[-0.03em] desk:text-[clamp(24px,2.1vw,28px)]">Estudos de caso</h1>
        <p className="text-pretty text-sm text-panel-text">Seis projetos de ponta a ponta: contexto, problema, decisões e resultado. Os cases 01, 02, 04 e 05 são da mesma cliente.</p>
      </div>

      <SideNav items={index} active={active} label="índice de cases" />

      <SideLinks>
        <a href={CV_URL} download className="flex min-h-10 items-center rounded-lg bg-panel-light px-3.5 text-sm font-semibold text-ink no-underline transition-colors hover:bg-white hover:text-ink">currículo (PDF) ↓</a>
        <a href={LINKS.github} target="_blank" rel="noopener" className={sidePill}>github ↗</a>
        <a href={LINKS.linkedin} target="_blank" rel="noopener" className={sidePill}>linkedin ↗</a>
      </SideLinks>
    </>
  );
}
