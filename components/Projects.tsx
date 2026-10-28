import Image from "next/image";
import Link from "next/link";
import { LINKS, PROJECTS, type Project } from "@/data/site";
import { BigTitle, homeSection } from "./Section";

function Row({ p, first }: { p: Project; first: boolean }) {
  const cls = "grid grid-cols-[84px_minmax(0,1fr)_auto] items-center gap-[22px] rounded-2xl p-3.5 text-panel-light no-underline transition-colors hover:bg-night-2 hover:text-panel-light xwide:grid-cols-[120px_minmax(0,1fr)_auto]";
  const body = (
    <>
      <Image src={p.img} alt="" width={240} height={240} priority={first} className="aspect-square w-full rounded-[10px] bg-panel object-cover object-top" />
      <div className="flex min-w-0 flex-col gap-1.5">
        <span className="text-balance text-[21px] font-semibold leading-tight tracking-[-0.025em]">{p.title}</span>
        <span className="text-pretty text-[15px] text-night-muted">{p.short}</span>
        <span className="font-mono text-[12.5px] text-night-faint">{p.tech.join(" · ")}</span>
      </div>
      <span aria-hidden className="self-start text-lg text-lilac">↗</span>
    </>
  );
  return p.href.startsWith("http")
    ? <a href={p.href} target="_blank" rel="noopener" className={cls}>{body}</a>
    : <Link href={p.href} className={cls}>{body}</Link>;
}

export function Projects() {
  return (
    <section id="projetos" aria-labelledby="h-projetos" className={homeSection}>
      <BigTitle id="h-projetos" top="Projetos" bottom="recentes" />
      <div className="flex flex-col gap-1.5">
        {PROJECTS.map((p, i) => <Row key={p.title} p={p} first={i === 0} />)}
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-2 pl-3.5 font-mono text-sm">
        <Link href="/cases" className="text-lilac hover:text-lilac-light">todos os cases →</Link>
        <a href={LINKS.github} target="_blank" rel="noopener" className="text-panel-light hover:text-lilac">outros repositórios ↗</a>
      </div>
    </section>
  );
}
