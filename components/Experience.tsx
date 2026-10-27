import { EDUCATION, JOBS } from "@/data/site";
import { card } from "./Section";

const h2 = "mb-2 text-[22px] font-semibold leading-tight tracking-[-0.02em]";
const li = "border-t border-line-soft py-3";

/** Experiência, formação e sobre em cards lado a lado (empilham abaixo de ~700 px). */
export function Experience() {
  return (
    <section id="experiencia" aria-labelledby="h-exp" className="grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))]">
      <div className={`rise px-[22px] pb-2 pt-5 ${card}`}>
        <p className="mb-0.5 font-mono text-sm text-plum">trajetória</p>
        <h2 id="h-exp" className={h2}>Experiência</h2>
        <ol>
          {JOBS.map((j) => (
            <li key={j.org + j.period} className={`grid grid-cols-[14px_1fr] gap-3 ${li}`}>
              <span className={`mt-[7px] h-[9px] w-[9px] rounded-full ${j.current ? "bg-mint shadow-[0_0_0_3px_rgba(143,227,168,.25)]" : "bg-[#c4b3dc]"}`} />
              <span className="flex flex-col">
                <span className="font-semibold leading-snug">{j.role}</span>
                <span className="text-sm text-ink-2">{j.org}</span>
                <span className="font-mono text-sm text-ink-3">{j.period}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>

      <div className="flex flex-col gap-3">
        <div className={`rise px-[22px] pb-2 pt-5 ${card}`}>
          <h2 className={h2}>Formação</h2>
          <ol>
            {EDUCATION.map((d) => (
              <li key={d.course} className={`flex flex-col ${li}`}>
                <span className="font-semibold leading-snug">{d.course}</span>
                <span className="text-sm text-ink-2">{d.org}</span>
                <span className="font-mono text-sm text-ink-3">{d.period}</span>
              </li>
            ))}
          </ol>
        </div>
        <div id="sobre" className={`rise px-[22px] py-5 ${card}`}>
          <h2 className={h2}>Sobre</h2>
          <p className="text-pretty text-sm text-ink-2">
            Construo de ponta a ponta com React, Next.js e TypeScript na interface e Python e Node no backend. Automatizo processos que tomam horas de trabalho manual e integro IA quando ela resolve o problema.
          </p>
        </div>
      </div>
    </section>
  );
}
