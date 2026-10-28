import { EDUCATION, JOBS } from "@/data/site";
import { card } from "./Section";

const h2 = "mb-2 text-[22px] font-semibold leading-tight tracking-[-0.02em]";
const li = "flex flex-col border-t border-line-soft py-3";
const period = "font-mono text-[13px]";

export function Experience() {
  return (
    <section id="experiencia" aria-labelledby="h-exp" className="grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))]">
      <div className={`px-5 pb-1.5 pt-[18px] ${card}`}>
        <p className="mb-0.5 font-mono text-sm text-plum">03 / trajetória</p>
        <h2 id="h-exp" className={h2}>Experiência</h2>
        <ol>
          {JOBS.map((j) => (
            <li key={j.org + j.period} className={li}>
              <span className={`${period} ${j.current ? "text-mint-ink" : "text-ink-3"}`}>{j.period}</span>
              <span className="font-semibold leading-snug">{j.role}</span>
              <span className="text-sm text-ink-2">{j.org}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="flex flex-col gap-3">
        <div className={`px-5 pb-1.5 pt-[18px] ${card}`}>
          <h2 className={h2}>Formação</h2>
          <ol>
            {EDUCATION.map((d) => (
              <li key={d.course} className={li}>
                <span className={`${period} text-ink-3`}>{d.period}</span>
                <span className="font-semibold leading-snug">{d.course}</span>
                <span className="text-sm text-ink-2">{d.org}</span>
              </li>
            ))}
          </ol>
        </div>
        <div id="sobre" className={`px-5 py-[18px] ${card}`}>
          <h2 className={h2}>Sobre</h2>
          <p className="text-pretty text-[14.5px] text-ink-2">
            Construo de ponta a ponta com React, Next.js e TypeScript na interface e Python e Node no backend. Automatizo processos que tomam horas de trabalho manual e integro IA quando ela resolve o problema.
          </p>
        </div>
      </div>
    </section>
  );
}
