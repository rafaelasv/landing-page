"use client";
import Link from "next/link";
import { useState } from "react";
import { CV_URL } from "@/data/site";
import { Gatinho } from "./Gatinho";

export type NavItem = { href: string; label: string };

/**
 * Estrutura comum da home e de /cases:
 * - celular (< 900 px): barra fixa no topo com "CV" e "menu"; o painel vira o topo da página.
 * - desktop: painel escuro fixo à esquerda, conteúdo rolando à direita.
 * O conteúdo tem uma margem à direita (desk:pr-[104px]) e embaixo (pb-24 no celular) para o gatinho fixo não cobrir nada.
 */
export function Shell({ sidebar, nav, children }: { sidebar: React.ReactNode; nav: NavItem[]; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 px-2 pt-2 desk:hidden">
        <div className="rounded-xl bg-ink/95 backdrop-blur">
          <div className="flex min-h-14 items-center justify-between gap-3 py-1.5 pl-4 pr-2">
            <Link href="/" className="flex min-h-11 items-center gap-2 font-mono text-sm text-panel-light no-underline"><span className="text-lilac">~/</span>rafaela</Link>
            <div className="flex items-center gap-1.5">
              <a href={CV_URL} download className="flex min-h-11 items-center rounded-lg bg-panel-light px-3 text-sm font-semibold text-ink no-underline">CV ↓</a>
              <button
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                aria-controls="menu-mobile"
                className="min-h-11 rounded-lg border border-panel-line px-3 font-mono text-sm text-panel-light"
              >
                {open ? "fechar" : "menu"}
              </button>
            </div>
          </div>
          {open && (
            <nav id="menu-mobile" aria-label="principal" className="flex flex-col px-4 pb-2">
              {nav.map((n) => (
                <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="flex min-h-12 items-center border-t border-panel-2 text-[15px] text-panel-light no-underline">
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
          className="no-scrollbar flex flex-col overflow-y-auto overflow-x-hidden rounded-2xl bg-ink text-panel-light desk:sticky desk:top-3 desk:h-[calc(100vh-24px)]"
        >
          <div className="flex flex-1 animate-hero-in flex-col gap-[22px] px-[26px] pb-5 pt-[26px]">{sidebar}</div>
        </aside>
        <main className="flex min-w-0 max-w-[900px] flex-col gap-[52px] px-2 pb-24 pt-7 desk:pb-6 desk:pl-0 desk:pr-[104px] desk:pt-9">
          {children}
        </main>
      </div>

      <Gatinho />
    </>
  );
}

/** Menu do painel em estilo terminal: o item da seção visível ganha fundo e um "›". */
export function SideNav({ items, active, label }: { items: (NavItem & { id?: string; num?: string })[]; active: string; label: string }) {
  return (
    <nav aria-label={label} className="flex flex-col gap-0.5 font-mono text-sm">
      {items.map((n) => {
        const on = n.id === active;
        return (
          <Link
            key={n.href}
            href={n.href}
            aria-current={on ? "location" : undefined}
            className={`flex min-h-[34px] items-center gap-2 rounded-md px-2.5 py-1 leading-snug no-underline transition-colors hover:text-panel-light ${on ? "bg-panel text-panel-light" : "text-[#a9a3b0]"}`}
          >
            <span className={`w-2.5 ${on ? "text-lilac" : "text-transparent"}`}>›</span>
            {n.num && <span className={on ? "text-lilac" : "text-panel-dim"}>{n.num}</span>}
            <span>{n.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

const pill = "flex min-h-10 items-center rounded-lg border border-panel-line px-3 font-mono text-[13.5px] text-panel-text no-underline transition-colors hover:border-panel-dim hover:text-panel-light";
export function SideLinks({ children }: { children: React.ReactNode }) {
  return <div className="mt-auto flex flex-wrap gap-1.5">{children}</div>;
}
export { pill as sidePill };
