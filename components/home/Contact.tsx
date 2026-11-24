import type { Dict } from "@/data/home/i18n";
import { SITE } from "@/data/home/site";

const secondary = "flex min-h-12 items-center rounded-[10px] bg-night-panel px-[18px] font-medium text-ink-fg no-underline hover:bg-night-line hover:text-ink-fg";

export default function Contact({ tx }: { tx: Dict }) {
  return (
    <section id="contato" aria-labelledby="h-contato" className="relative flex flex-col items-center gap-6 text-center">
      <h2 id="h-contato" className="m-0 text-[clamp(24px,4vw,30px)] font-bold leading-[1.15] tracking-[-0.03em]">
        <span>{tx.contactTop}</span> <span className="text-ink-title">{tx.contactBottom}</span>
      </h2>
      <p className="m-0 max-w-[48ch] text-[17px] text-ink-muted">{tx.contactP}</p>
      <div className="flex flex-wrap justify-center gap-2">
        <a href={`mailto:${SITE.email}`} className="flex min-h-12 items-center rounded-[10px] bg-lilac px-[18px] font-semibold text-[#16131a] no-underline [overflow-wrap:anywhere] hover:bg-lilac-light hover:text-[#16131a]">{SITE.email}</a>
        <a href={SITE.linkedin} target="_blank" rel="noopener" className={secondary}>LinkedIn ↗</a>
        <a href={SITE.githubUrl} target="_blank" rel="noopener" className={secondary}>GitHub ↗</a>
        <a href={SITE.cv} download className="flex min-h-12 items-center rounded-[10px] border border-night-line2 px-[18px] font-medium text-ink-fg no-underline hover:border-ink-faint hover:text-ink-fg">{tx.cvPdf}</a>
      </div>
    </section>
  );
}
