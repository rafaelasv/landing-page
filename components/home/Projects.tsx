import type { Dict } from "@/data/home/i18n";
import { PROJECTS, SITE } from "@/data/home/site";

function Card({ tx, i }: { tx: Dict; i: number }) {
  const p = PROJECTS[i];
  const t = tx.projects[i];
  const inner = (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={p.img} alt="" loading="lazy" className="block aspect-[16/10] w-full rounded-2xl border border-night-line bg-night-panel object-cover object-top" />
      <div className="flex min-w-0 flex-col gap-1.5">
        <span className="flex items-start justify-between gap-3">
          <span className="text-balance text-[19px] font-semibold leading-tight tracking-[-0.02em]">{t.title}</span>
          {p.href && <span aria-hidden className="flex-none text-lg text-lilac">{p.href.startsWith("http") ? "↗" : "→"}</span>}
        </span>
        <span className="text-pretty text-[15px] text-ink-muted">{t.short}</span>
        <span className="text-[13px] text-ink-faint">{p.tech.join(" · ")}</span>
      </div>
    </>
  );
  const cls = "flex flex-col gap-3.5 text-ink-fg no-underline hover:text-ink-fg";
  return p.href ? (
    <a href={p.href} {...(p.href.startsWith("http") && { target: "_blank", rel: "noopener" })} className={cls}>{inner}</a>
  ) : (
    <div className={cls}>{inner}</div>
  );
}

export default function Projects({ tx }: { tx: Dict }) {
  return (
    <section id="projetos" aria-labelledby="h-projetos" className="flex flex-col gap-8">
      <h2 id="h-projetos" className="m-0 text-[clamp(24px,4vw,30px)] font-bold leading-[1.15] tracking-[-0.03em]">
        <span>{tx.projTop}</span> <span className="text-ink-title">{tx.projBottom}</span>
      </h2>
      <div className="grid gap-x-6 gap-y-7" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))" }}>
        {PROJECTS.map((_, i) => <Card key={i} tx={tx} i={i} />)}
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
        {SITE.casesUrl && <a href={SITE.casesUrl} className="text-lilac">{tx.allCases}</a>}
        <a href={SITE.githubUrl} target="_blank" rel="noopener">{tx.otherRepos}</a>
      </div>
    </section>
  );
}
