import type { Dict } from "@/data/home/i18n";

export default function Header({ tx, onToggleLang }: { tx: Dict; onToggleLang: () => void }) {
  return (
    <header className="mx-auto flex max-w-[860px] items-center justify-between gap-4 px-6 pt-5">
      <a
        href="#inicio"
        aria-label={tx.nav.inicio}
        className="font-display text-[20px] font-bold tracking-[-0.04em] text-ink-fg no-underline hover:text-ink-fg"
      >
        R<span className="text-lilac">T</span>
      </a>
      <nav aria-label={tx.navAria} className="flex flex-wrap items-center justify-end gap-0.5">
        <a className="navlink" href="#projetos">{tx.nav.projetos}</a>
        <a className="navlink" href="#experiencia">{tx.nav.experiencia}</a>
        <a className="navlink" href="#stack">{tx.nav.stack}</a>
        <a className="navlink" href="#contato">{tx.nav.contato}</a>
        <button
          onClick={onToggleLang}
          aria-label={tx.langAria}
          title={tx.langAria}
          className="navlink ml-1.5 cursor-pointer border border-night-line2 bg-transparent font-mono text-[13px] text-lilac"
        >
          {tx.langBtn}
        </button>
      </nav>
    </header>
  );
}
