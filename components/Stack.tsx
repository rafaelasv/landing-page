import { TOOLS } from "@/data/site";
import { BigTitle, homeSection } from "./Section";

/** "Ferramentas do dia a dia" (id="stack" mantido para o menu). */
export function Tools() {
  return (
    <section id="stack" aria-labelledby="h-stack" className={homeSection}>
      <BigTitle id="h-stack" top="Ferramentas" bottom="do dia a dia" />
      <ul className="grid gap-1.5 [grid-template-columns:repeat(auto-fill,minmax(min(100%,240px),1fr))]">
        {TOOLS.map((t) => (
          <li key={t.name} className="flex items-center gap-3.5 rounded-[14px] p-3 transition-colors hover:bg-night-2">
            <span aria-hidden className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-paper font-mono text-sm font-medium text-plum">{t.abbr}</span>
            <span className="flex min-w-0 flex-col">
              <span className="text-base font-semibold leading-snug">{t.name}</span>
              <span className="text-sm text-night-muted">{t.use}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
