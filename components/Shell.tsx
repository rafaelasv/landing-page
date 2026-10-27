"use client";
import Link from "next/link";
import { useState } from "react";
import { CV_URL } from "@/data/site";

export type NavItem = { href: string; label: string };

/**
 * Estrutura comum da home e de /cases:
 * - celular (< 900 px): barra fixa no topo com "CV" e "menu"; o painel vira o topo da página.
 * - desktop: painel escuro fixo à esquerda, conteúdo rolando à direita.
 */
export function Shell({ sidebar, nav, children }: { sidebar: React.ReactNode; nav: NavItem[]; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 px-2 pt-2 desk:hidden">
        <div className="rounded-[14px] bg-ink/95 backdrop-blur">
          <div className="flex min-h-14 items-center justify-between gap-3 py-1.5 pl-4 pr-2">
            <Link href="/" className="flex min-h-11 items-center font-semibold tracking-tight text-panel-light no-underline">Rafaela Tavares</Link>
            <div className="flex items-center gap-1.5">
              <a href={CV_URL} download className="flex min-h-11 items-center rounded-[10px] bg-lilac px-3 text-sm font-semibold text-ink no-underline">CV ↓</a>
              <button
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                aria-controls="menu-mobile"
                className="min-h-11 rounded-[10px] border border-[#4a3866] px-3 text-sm text-panel-light"
              >
                {open ? "fechar" : "menu"}
              </button>
            </div>
          </div>
          {open && (
            <nav id="menu-mobile" aria-label="principal" className="flex flex-col px-4 pb-2">
              {nav.map((n) => (
                <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="flex min-h-12 items-center border-t border-panel-line text-[15px] text-panel-light no-underline">
                  {n.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      <div className="grid items-start gap-2 p-2 desk:grid-cols-[minmax(300px,360px)_minmax(0,1fr)] desk:gap-7 desk:p-3">
        <aside
          id="inicio"
          className="no-scrollbar flex flex-col overflow-y-auto overflow-x-hidden rounded-[20px] bg-ink text-panel-light desk:sticky desk:top-3 desk:h-[calc(100vh-24px)]"
        >
          <div className="relative flex flex-1 animate-hero-in flex-col gap-5 px-7 pb-5 pt-7">{sidebar}</div>
        </aside>
        <main className="flex min-w-0 max-w-[900px] flex-col gap-14 px-2 pb-4 pt-8 desk:pb-6 desk:pl-0 desk:pr-6 desk:pt-9">
          {children}
        </main>
      </div>
    </>
  );
}

/** Menu do painel: o item da seção visível ganha fundo e um ponto rosa. */
export function SideNav({ items, active, label }: { items: (NavItem & { id?: string; num?: string })[]; active: string; label: string }) {
  return (
    <nav aria-label={label} className="flex flex-col gap-0.5 rounded-[14px] bg-panel p-1.5 text-sm">
      {items.map((n) => {
        const on = n.id === active;
        return (
          <Link
            key={n.href}
            href={n.href}
            aria-current={on ? "location" : undefined}
            className={`flex min-h-9 items-center justify-between gap-2 rounded-[9px] px-3 py-1.5 leading-snug no-underline transition-colors hover:text-panel-light ${on ? "bg-panel-3 text-panel-light" : "text-panel-muted"}`}
          >
            <span className="flex gap-2">
              {n.num && <span className={`font-mono ${on ? "text-pink" : "text-[#a796c2]"}`}>{n.num}</span>}
              {n.label}
            </span>
            <span className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors ${on ? "bg-pink" : "bg-transparent"}`} />
          </Link>
        );
      })}
    </nav>
  );
}

const pill = "flex min-h-10 items-center rounded-full border border-panel-line px-3 text-sm text-panel-text no-underline transition-colors hover:border-lilac hover:text-panel-light";
export function SideLinks({ children }: { children: React.ReactNode }) {
  return <div className="mt-auto flex flex-wrap gap-1.5">{children}</div>;
}
export { pill as sidePill };
