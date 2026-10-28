import Image from "next/image";
import Link from "next/link";
import { LINKS, PROJECTS, type Project } from "@/data/site";
import { card, SectionTitle } from "./Section";

function MainLink({ p }: { p: Project }) {
  const cls = "flex min-h-10 items-center text-plum";
  return p.href.startsWith("http")
    ? <a href={p.href} target="_blank" rel="noopener" className={cls}>{p.cta}</a>
    : <Link href={p.href} className={cls}>{p.cta}</Link>;
}

export function Projects() {
  return (
    <section id="projetos" aria-labelledby="h-projetos">
      <div className="mb-3.5 flex items-end justify-between gap-3">
        <SectionTitle eyebrow="02 / projetos" title="Trabalhos em destaque" id="h-projetos" />
        <Link href="/cases" className="flex min-h-10 items-center whitespace-nowrap rounded-lg border border-line bg-white px-3 font-mono text-[13.5px] no-underline transition-colors hover:border-plum">
          todos os cases →
        </Link>
      </div>

      {/* O primeiro projeto (lead) ocupa a linha inteira e, no desktop, fica com imagem ao lado do texto. */}
      <div className="grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr))]">
        {PROJECTS.map((p, i) => (
          <article
            key={p.title}
            className={`grid overflow-hidden transition-colors hover:border-line-strong ${card} ${i === 0 ? "col-span-full desk:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]" : ""}`}
          >
            <div className="border-b border-line bg-[#eceaee]">
              <Image src={p.img} alt={p.title} width={900} height={560} priority={i === 0} className="aspect-[16/10] h-full w-full object-cover object-top" />
            </div>
            <div className="flex flex-col gap-2 px-4 pb-3 pt-3.5">
              <p className="font-mono text-[13px] text-ink-3">{p.category}</p>
              <h3 className="text-balance text-[17px] font-semibold leading-snug tracking-[-0.015em]">{p.title}</h3>
              <p className="text-pretty text-[14.5px] text-ink-2">{p.desc}</p>
              <ul className="flex flex-wrap gap-1">
                {p.tech.map((t) => <li key={t} className="rounded bg-tag px-[7px] py-px font-mono text-[12.5px] text-tag-ink">{t}</li>)}
              </ul>
              <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-line-soft pt-1.5 font-mono text-[13.5px]">
                <MainLink p={p} />
                {p.repo && <a href={p.repo} target="_blank" rel="noopener" className="flex min-h-10 items-center">repo ↗</a>}
                {p.privateRepo && <span className="text-ink-3">repo privado (cliente)</span>}
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-3.5 text-sm text-ink-3">
        Projetos de estudo e outros repositórios no <a href={LINKS.github} target="_blank" rel="noopener">GitHub ↗</a>
      </p>
    </section>
  );
}
