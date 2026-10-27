import Link from "next/link";
import { CV_URL, EMAIL, LINKS } from "@/data/site";
import { Sticker } from "./Sticker";

const btn = "flex min-h-11 items-center rounded-[10px] px-4 no-underline transition-colors";
export const darkBtn = {
  primary: `${btn} bg-lilac font-semibold text-ink hover:bg-pink hover:text-ink`,
  secondary: `${btn} bg-panel-2 font-medium text-panel-light hover:bg-panel-line hover:text-panel-light`,
  outline: `${btn} border border-[#4a3866] font-medium text-panel-light hover:border-lilac hover:text-panel-light`,
};

/** Bloco escuro de fechamento. Reaproveitado no fim de /cases com outro texto. */
export function DarkCta({ id, eyebrow, title, text, children, sticker }: {
  id?: string; eyebrow?: string; title: string; text: string; children: React.ReactNode; sticker: string;
}) {
  return (
    <section id={id} aria-labelledby={id ? `h-${id}` : undefined} className="relative rounded-[20px] bg-ink p-7 text-panel-light">
      <Sticker name={sticker} rotate="10deg" delay={0.3} className="-top-4 right-5 w-[50px]" />
      {eyebrow && <p className="mb-0.5 font-mono text-sm text-pink">{eyebrow}</p>}
      <h2 id={id ? `h-${id}` : undefined} className="text-[22px] font-semibold leading-tight tracking-[-0.02em]">{title}</h2>
      <p className="mb-[18px] mt-2 max-w-[50ch] text-panel-text">{text}</p>
      <div className="flex flex-wrap gap-2">{children}</div>
    </section>
  );
}

export function Contact() {
  return (
    <DarkCta id="contato" eyebrow="contato" title="Vamos conversar?" sticker="hearts" text="Respondo por e-mail ou LinkedIn. Também aceito freelances e colaborações.">
      <a href={`mailto:${EMAIL}`} className={`${darkBtn.primary} break-all`}>{EMAIL}</a>
      <a href={LINKS.linkedin} target="_blank" rel="noopener" className={darkBtn.secondary}>LinkedIn ↗</a>
      <a href={LINKS.github} target="_blank" rel="noopener" className={darkBtn.secondary}>GitHub ↗</a>
      <a href={CV_URL} download className={darkBtn.outline}>currículo (PDF) ↓</a>
    </DarkCta>
  );
}

export function Footer({ topHref }: { topHref: string }) {
  return (
    <footer className="flex flex-wrap justify-between gap-3 px-1 pb-2 text-sm text-ink-3">
      <span>Rafaela Tavares</span>
      <Link href={topHref} className="text-ink-3">voltar ao topo ↑</Link>
    </footer>
  );
}
