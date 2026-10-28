"use client";
import Link from "next/link";
import { CV_URL, EMAIL, LINKS, TERMINAL } from "@/data/site";
import { SideLinks, SideNav, sidePill } from "./Shell";
import { useScrollSpy } from "./useScrollSpy";

export const HOME_NAV = [
  { href: "/#stack", label: "stack", id: "stack" },
  { href: "/#projetos", label: "projetos", id: "projetos" },
  { href: "/#experiencia", label: "experiência", id: "experiencia" },
  { href: "/#sobre", label: "sobre", id: "sobre" },
  { href: "/#contato", label: "contato", id: "contato" },
  { href: "/cases", label: "cases ↗" },
];

export function HomeSidebar() {
  const active = useScrollSpy(["stack", "projetos", "experiencia", "sobre", "contato"]);

  return (
    <>
      <Link href="/" className="hidden items-center gap-1.5 font-mono text-sm text-panel-light no-underline desk:flex">
        <span className="text-lilac">~/</span>rafaela-tavares
      </Link>

      <div className="flex flex-col gap-1 desk:mt-2">
        <h1 className="text-[26px] font-semibold leading-[1.15] tracking-[-0.03em] desk:text-[clamp(26px,2.3vw,30px)]">Rafaela Tavares</h1>
        <p className="text-base leading-snug text-panel-muted">Desenvolvedora full-stack / automação</p>
      </div>

      {/* Resumo da stack em "terminal". Conteúdo em data/site.ts (TERMINAL). */}
      <div aria-label="resumo da stack" className="overflow-hidden rounded-[10px] border border-panel-2 bg-panel-term font-mono text-[13.5px] leading-[1.7]">
        <div className="flex items-center gap-1.5 border-b border-panel-2 px-3 py-2">
          <span className="h-[9px] w-[9px] rounded-full bg-panel-line" /><span className="h-[9px] w-[9px] rounded-full bg-panel-line" /><span className="h-[9px] w-[9px] rounded-full bg-panel-line" />
          <span className="ml-1.5 text-[12.5px] text-panel-dim">zsh</span>
        </div>
        <div className="px-3 pb-3 pt-2.5 text-panel-text">
          <div><span className="text-lilac">$</span> cat stack.txt</div>
          {TERMINAL.map(([k, v]) => (
            <div key={k} className="whitespace-pre text-[#9e98a6]">{k.padEnd(6)}{v}</div>
          ))}
          <div><span className="text-lilac">$</span> <span className="inline-block h-[15px] w-2 animate-blink bg-panel-text align-[-2px]" /></div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <a href="#projetos" className="flex min-h-11 items-center justify-center rounded-lg bg-panel-light px-3.5 font-semibold text-ink no-underline transition-colors hover:bg-white hover:text-ink">ver projetos</a>
        <a href="#contato" className="flex min-h-11 items-center justify-center rounded-lg bg-panel px-3.5 font-medium text-panel-light no-underline transition-colors hover:bg-panel-2 hover:text-panel-light">falar comigo</a>
        <a href={CV_URL} download className="col-span-2 flex min-h-11 items-center justify-between rounded-lg border border-panel-line px-3.5 font-medium text-panel-light no-underline transition-colors hover:border-panel-dim hover:text-panel-light">
          <span>Baixar currículo</span><span className="font-mono text-sm text-panel-muted">.pdf ↓</span>
        </a>
      </div>

      <div className="hidden desk:block">
        <SideNav items={HOME_NAV} active={active} label="principal" />
      </div>

      <SideLinks>
        <a href={LINKS.github} target="_blank" rel="noopener" className={sidePill}>github ↗</a>
        <a href={LINKS.linkedin} target="_blank" rel="noopener" className={sidePill}>linkedin ↗</a>
        <a href={`mailto:${EMAIL}`} className={sidePill}>e-mail</a>
      </SideLinks>
    </>
  );
}
