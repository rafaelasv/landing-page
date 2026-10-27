import Image from "next/image";
import Link from "next/link";
import { LEAD_PROJECT, LINKS, PROJECTS, type Project } from "@/data/site";
import { card, cardHover, SectionTitle } from "./Section";

function ProjectLink({ p }: { p: Project }) {
  const cls = "mt-auto flex min-h-11 items-center self-start font-medium text-plum";
  return p.external
    ? <a href={p.href} target="_blank" rel="noopener" className={cls}>{p.cta} ↗</a>
    : <Link href={p.href} className={cls}>{p.cta} →</Link>;
}

const tag = "rounded-full bg-tag px-2.5 py-0.5 text-sm text-tag-ink";

export function Projects() {
  const p = LEAD_PROJECT;
  return (
    <section id="projetos" aria-labelledby="h-projetos">
      <div className="mb-4 flex items-end justify-between gap-3">
        <SectionTitle eyebrow="projetos" title="Trabalhos em destaque" id="h-projetos" />
        <Link href="/cases" className="flex min-h-10 items-center whitespace-nowrap rounded-full border border-line bg-white px-3 text-sm no-underline transition-colors hover:border-plum">
          todos os cases →
        </Link>
      </div>

      {/* Grade: o projeto principal ocupa a linha inteira; os outros 3 se ajustam (1 coluna no celular). */}
      <div className="grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr))]">
        <article className={`rise group col-span-full grid gap-1 p-1.5 [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))] ${card} ${cardHover}`}>
          <div className="overflow-hidden rounded-[13px] bg-[#efe8f8]">
            <Image src={p.img} alt={p.title} width={900} height={675} priority className="aspect-[4/3] h-full min-h-[220px] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" />
          </div>
          <div className="flex flex-col gap-2.5 px-4 pb-2.5 pt-4">
            <p className="flex flex-wrap gap-1.5 text-sm">
              <span className="rounded-full bg-[#fde8f2] px-2.5 py-0.5 text-pink-ink">em destaque</span>
              <span className={tag}>{p.category}</span>
            </p>
            <h3 className="text-balance text-[19px] font-semibold leading-snug tracking-[-0.015em]">{p.title}</h3>
            <p className="text-pretty text-ink-2">{p.desc}</p>
            <p className="font-mono text-sm text-ink-3">{p.stack}</p>
            <ProjectLink p={p} />
          </div>
        </article>

        {PROJECTS.map((p) => (
          <article key={p.title} className={`rise group flex flex-col gap-1 p-1.5 ${card} ${cardHover}`}>
            <div className="overflow-hidden rounded-[13px] bg-[#efe8f8]">
              <Image src={p.img} alt={p.title} width={640} height={400} className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]" />
            </div>
            <div className="flex flex-1 flex-col gap-2 px-3 pb-1.5 pt-3">
              <p className="text-sm"><span className={tag}>{p.category}</span></p>
              <h3 className="text-[17px] font-semibold leading-snug tracking-[-0.015em]">{p.title}</h3>
              <p className="text-pretty text-sm text-ink-2">{p.desc}</p>
              <p className="font-mono text-sm text-ink-3">{p.stack}</p>
              <ProjectLink p={p} />
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
