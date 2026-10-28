import Link from "next/link";
import { CV_URL, EMAIL, LINKS } from "@/data/site";

const btn = "flex min-h-11 items-center rounded-lg px-4 no-underline transition-colors";
export const darkBtn = {
  primary: `${btn} bg-panel-light font-semibold text-ink hover:bg-white hover:text-ink`,
  secondary: `${btn} bg-panel font-medium text-panel-light hover:bg-panel-2 hover:text-panel-light`,
  outline: `${btn} border border-panel-line font-medium text-panel-light hover:border-panel-dim hover:text-panel-light`,
};

/** Bloco escuro de fechamento. Reaproveitado no fim de /cases com outro texto. */
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

export function Contact() {
  return (
    <DarkCta id="contato" eyebrow="04 / contato" title="Vamos conversar?" text="Respondo por e-mail ou LinkedIn. Também aceito freelances e colaborações.">
      <a href={`mailto:${EMAIL}`} className={`${darkBtn.primary} break-all`}>{EMAIL}</a>
      <a href={LINKS.linkedin} target="_blank" rel="noopener" className={darkBtn.secondary}>LinkedIn ↗</a>
      <a href={LINKS.github} target="_blank" rel="noopener" className={darkBtn.secondary}>GitHub ↗</a>
      <a href={CV_URL} download className={darkBtn.outline}>currículo (PDF) ↓</a>
    </DarkCta>
  );
}

export function Footer({ topHref }: { topHref: string }) {
  return (
    <footer className="flex flex-wrap justify-between gap-3 px-1 pb-2 font-mono text-[13.5px] text-ink-3">
      <span>rafaela tavares</span>
      <Link href={topHref} className="text-ink-3">voltar ao topo ↑</Link>
    </footer>
  );
}
