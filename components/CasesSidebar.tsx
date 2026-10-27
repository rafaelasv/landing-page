"use client";
import Link from "next/link";
import { CASES } from "@/data/cases";
import { CV_URL, LINKS } from "@/data/site";
import { SideLinks, SideNav, sidePill } from "./Shell";
import { Sticker } from "./Sticker";
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
      <Link href="/" className="hidden items-center gap-2.5 text-[15px] font-semibold tracking-tight text-panel-light no-underline desk:flex">
        <span className="h-2.5 w-2.5 rounded-[3px] bg-pink" />Rafaela Tavares
      </Link>
      <Link href="/" className={`${sidePill} min-h-9 self-start`}>← voltar ao início</Link>

      <div className="flex flex-col gap-3">
        <p className="font-mono text-sm text-pink">estudos de caso</p>
        <h1 className="text-balance font-serif text-[24px] leading-[1.18] tracking-[-0.015em] desk:text-[clamp(24px,2.1vw,29px)]">
          Como eu <em className="text-lilac">penso</em>, não só o que eu entrego.
        </h1>
        <p className="text-pretty text-sm text-panel-text">Seis projetos de ponta a ponta: contexto, problema, decisões e resultado. Os cases 01, 02, 04 e 05 são da mesma cliente.</p>
      </div>

      <SideNav items={index} active={active} label="índice de cases" />

      <SideLinks>
        <a href={CV_URL} download className="flex min-h-10 items-center rounded-full bg-lilac px-3.5 text-sm font-semibold text-ink no-underline transition-colors hover:bg-pink hover:text-ink">currículo (PDF) ↓</a>
        <a href={LINKS.github} target="_blank" rel="noopener" className={sidePill}>GitHub ↗</a>
        <a href={LINKS.linkedin} target="_blank" rel="noopener" className={sidePill}>LinkedIn ↗</a>
      </SideLinks>

      <Sticker name="hearts" rotate="10deg" className="right-5 top-5 w-[50px]" />
    </>
  );
}
