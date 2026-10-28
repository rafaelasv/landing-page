import { EDUCATION, JOBS } from "@/data/site";
import { BigTitle, homeSection } from "./Section";

export function Experience() {
  return (
    <section id="experiencia" aria-labelledby="h-exp" className={homeSection}>
      <BigTitle id="h-exp" top="Experiência" bottom="& formação" />
      <ol className="flex flex-col">
        {JOBS.map((j) => (
          <li key={j.org + j.period} className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-1 border-t border-night-line px-3.5 py-[22px]">
            <div className="flex min-w-0 flex-col gap-0.5">
              <span className="text-[21px] font-semibold tracking-[-0.025em]">{j.org}</span>
              <span className="text-[15px] text-night-muted">{j.role}</span>
            </div>
            <span className={`font-mono text-[13px] ${j.current ? "text-lilac" : "text-night-faint"}`}>{j.period}</span>
          </li>
        ))}
      </ol>
      <ol className="grid gap-2.5 [grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr))]">
        {EDUCATION.map((d) => (
          <li key={d.course} className="flex flex-col gap-0.5 rounded-2xl border border-night-line bg-night-2 p-5">
            <span className="font-mono text-[13px] text-night-faint">{d.period}</span>
            <span className="font-semibold leading-snug">{d.course}</span>
            <span className="text-sm text-night-muted">{d.org}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
