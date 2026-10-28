"use client";
import Link from "next/link";
import { CASES } from "@/data/cases";
import { CV_URL, LINKS } from "@/data/site";
import { useScrollSpy } from "./useScrollSpy";

/** Card claro de /cases: voltar, título, índice dos cases (o visível fica em ameixa) e links. */
export function CasesCard() {
  const active = useScrollSpy(CASES.map((c) => c.slug));
  const link = "flex h-11 items-center rounded-[10px] px-3 text-sm font-medium text-plum no-underline transition-colors hover:bg-plum-soft hover:text-plum";
  return (
    <div className="relative flex flex-col gap-[18px] overflow-hidden rounded-[20px] bg-paper px-6 pb-6 pt-7 text-ink">
      <div aria-hidden className="pointer-events-none absolute -right-[120px] -top-[150px] h-[270px] w-[270px] rounded-full border-2 border-dashed border-plum" />
      <div aria-hidden className="pointer-events-none absolute -bottom-[60px] -left-[170px] h-[270px] w-[270px] rounded-full border-2 border-dashed border-lilac" />

      <Link href="/" className="relative flex min-h-9 items-center self-start rounded-lg border border-[#d7d3db] px-3 font-mono text-[13px] text-ink-2 no-underline transition-colors hover:border-plum hover:text-plum">← ~/rafaela</Link>

      <div className="relative flex flex-col gap-1.5">
        <p className="font-mono text-[13.5px] text-plum">~/cases</p>
        <h1 className="text-[30px] font-bold leading-[1.05] tracking-[-0.035em]">Estudos de caso</h1>
        <p className="mt-1 text-pretty text-[14.5px] leading-normal text-ink-2">Seis projetos de ponta a ponta: contexto, problema, decisões e resultado. Os cases 01, 02, 04 e 05 são da mesma cliente.</p>
      </div>

      <nav aria-label="índice de cases" className="relative flex flex-col gap-0.5 rounded-[14px] border border-line bg-white p-1.5 text-sm">
        {CASES.map((c) => {
          const on = active === c.slug;
          return (
            <a
              key={c.slug}
              href={`#${c.slug}`}
              aria-current={on ? "location" : undefined}
              className={`grid min-h-10 grid-cols-[28px_1fr] items-center gap-1.5 rounded-[9px] px-2.5 py-1.5 leading-snug no-underline transition-colors ${on ? "bg-plum text-white hover:text-white" : "text-tag-ink hover:bg-tag hover:text-tag-ink"}`}
            >
              <span className={`font-mono ${on ? "text-[#e4d9f0]" : "text-ink-3"}`}>{c.num}</span>
              <span>{c.shortTitle}</span>
            </a>
          );
        })}
      </nav>

      <div className="relative flex flex-wrap gap-1.5">
        <a href={CV_URL} download className="flex h-11 items-center rounded-[10px] bg-ink px-3.5 font-mono text-[13.5px] text-panel-light no-underline transition-colors hover:bg-plum hover:text-panel-light">cv ↓</a>
        <a href={LINKS.github} target="_blank" rel="noopener" className={link}>GitHub ↗</a>
        <a href={LINKS.linkedin} target="_blank" rel="noopener" className={link}>LinkedIn ↗</a>
      </div>
    </div>
  );
}
