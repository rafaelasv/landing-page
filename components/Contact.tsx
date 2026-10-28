import Link from "next/link";
import { CV_URL, EMAIL, LINKS } from "@/data/site";
import { BigTitle, homeSection } from "./Section";

const btn = "flex min-h-11 items-center rounded-lg px-4 no-underline transition-colors";
export const darkBtn = {
  primary: `${btn} bg-panel-light font-semibold text-ink hover:bg-white hover:text-ink`,
  secondary: `${btn} bg-panel font-medium text-panel-light hover:bg-panel-2 hover:text-panel-light`,
  outline: `${btn} border border-panel-line font-medium text-panel-light hover:border-panel-dim hover:text-panel-light`,
};

/** Bloco escuro de fechamento de /cases (v15). */
export function DarkCta({ id, eyebrow, title, text, children }: {
  id?: string; eyebrow?: string; title: string; text: string; children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={id ? `h-${id}` : undefined} className="rounded-2xl bg-ink p-[26px] text-panel-light">
      {eyebrow && <p className="mb-0.5 font-mono text-sm text-lilac">{eyebrow}</p>}
      <h2 id={id ? `h-${id}` : undefined} className="text-[22px] font-semibold leading-tight tracking-[-0.02em]">{title}</h2>
      <p className="mb-[18px] mt-2 max-w-[50ch] text-panel-text">{text}</p>
      <div className="flex flex-wrap gap-2">{children}</div>
    </section>
  );
}

/** Contato da home (v17). */
export function Contact() {
  const b = "flex min-h-12 items-center rounded-[10px] px-[18px] no-underline transition-colors";
  return (
    <section id="contato" aria-labelledby="h-contato" className={`${homeSection} gap-6`}>
      <BigTitle id="h-contato" top="Vamos" bottom="conversar?" />
      <p className="max-w-[48ch] text-[17px] text-night-muted">Respondo por e-mail ou LinkedIn. Também aceito freelances e colaborações.</p>
      <div className="flex flex-wrap gap-2">
        <a href={`mailto:${EMAIL}`} className={`${b} break-all bg-lilac font-semibold text-ink hover:bg-lilac-light hover:text-ink`}>{EMAIL}</a>
        <a href={LINKS.linkedin} target="_blank" rel="noopener" className={`${b} bg-panel font-medium text-panel-light hover:bg-panel-2 hover:text-panel-light`}>LinkedIn ↗</a>
        <a href={LINKS.github} target="_blank" rel="noopener" className={`${b} bg-panel font-medium text-panel-light hover:bg-panel-2 hover:text-panel-light`}>GitHub ↗</a>
        <a href={CV_URL} download className={`${b} border border-panel-line font-medium text-panel-light hover:border-panel-dim hover:text-panel-light`}>currículo (PDF) ↓</a>
      </div>
    </section>
  );
}

export function Footer({ topHref, dark = false }: { topHref: string; dark?: boolean }) {
  return (
    <footer className={`flex flex-wrap justify-between gap-3 font-mono text-[13.5px] ${dark ? "border-t border-night-line px-3.5 pb-2 pt-6 text-night-faint" : "px-1 pb-2 text-ink-3"}`}>
      <span>rafaela tavares</span>
      <Link href={topHref} className={dark ? "text-night-faint hover:text-lilac" : "text-ink-3"}>voltar ao topo ↑</Link>
    </footer>
  );
}
