import { CARD_BIO, CV_URL, EMAIL, LINKS, TERMINAL } from "@/data/site";
import { Spotify } from "./Spotify";

const ICON = {
  github: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 18c-4.51 2-5-2-7-2",
  linkedin: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z",
  mail: "M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zM22 7l-10 6L2 7",
};
const iconBtn = "grid h-11 w-11 place-items-center rounded-[10px] text-plum no-underline transition-colors hover:bg-plum-soft hover:text-plum";
const Icon = ({ d }: { d: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>
);

/** Card claro do topo/lateral: terminal (no lugar da foto), nome, bio, links e Spotify. */
export function ProfileCard() {
  return (
    <div className="relative flex flex-col items-center gap-[18px] overflow-hidden rounded-[20px] bg-paper px-7 pb-[26px] pt-7 text-center text-ink">
      {/* arcos tracejados decorativos */}
      <div aria-hidden className="pointer-events-none absolute -left-[90px] -top-[150px] h-[270px] w-[270px] rounded-full border-2 border-dashed border-plum" />
      <div aria-hidden className="pointer-events-none absolute -bottom-10 -left-[150px] h-[270px] w-[270px] rounded-full border-2 border-dashed border-lilac" />

      <div aria-label="resumo da stack" className="relative w-full overflow-hidden whitespace-nowrap rounded-[14px] bg-ink text-left font-mono text-[12.5px] leading-[1.75] shadow-[0_10px_30px_-12px_rgba(90,45,130,.45)]">
        <div className="flex items-center gap-1.5 border-b border-night-line px-3 py-[9px]">
          <span className="h-[9px] w-[9px] rounded-full bg-panel-line" /><span className="h-[9px] w-[9px] rounded-full bg-panel-line" /><span className="h-[9px] w-[9px] rounded-full bg-panel-line" />
          <span className="ml-1.5 text-xs text-panel-dim">zsh</span>
        </div>
        <div className="px-3.5 pb-3.5 pt-3 text-panel-text">
          <div><span className="text-lilac">$</span> whoami</div>
          <div className="text-[#9e98a6]">rafaela</div>
          <div className="mt-1.5"><span className="text-lilac">$</span> cat stack.txt</div>
          {TERMINAL.map(([k, v]) => <div key={k} className="whitespace-pre text-[#9e98a6]">{k.padEnd(6)}{v}</div>)}
          <div><span className="text-lilac">$</span> <span className="inline-block h-[15px] w-2 animate-blink bg-panel-text align-[-2px]" /></div>
        </div>
      </div>

      <div className="relative flex flex-col gap-1">
        <h1 className="text-[30px] font-bold leading-[1.1] tracking-[-0.035em]">Rafaela Tavares</h1>
        <p className="font-mono text-[13.5px] text-plum">~/full-stack · automação</p>
      </div>
      <p className="relative max-w-[28ch] text-balance text-[15px] leading-normal text-ink-2">{CARD_BIO}</p>

      <div className="relative flex gap-1.5">
        <a href={LINKS.github} target="_blank" rel="noopener" aria-label="GitHub" className={iconBtn}><Icon d={ICON.github} /></a>
        <a href={LINKS.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" className={iconBtn}><Icon d={ICON.linkedin} /></a>
        <a href={`mailto:${EMAIL}`} aria-label="E-mail" className={iconBtn}><Icon d={ICON.mail} /></a>
        <a href={CV_URL} download aria-label="Baixar currículo (PDF)" className="ml-1 flex h-11 items-center rounded-[10px] bg-ink px-3.5 font-mono text-[13.5px] text-panel-light no-underline transition-colors hover:bg-plum hover:text-panel-light">cv ↓</a>
      </div>

      <Spotify />
    </div>
  );
}
