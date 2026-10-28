"use client";
import { useScrollSpy } from "./useScrollSpy";

// Ícones no estilo Lucide (traço 1.8).
const D = {
  home: "m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1z",
  folder: "M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
  case: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M8 13h8M8 17h5",
  bag: "M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M3 13h18",
  tool: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z",
  pen: "M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z",
};
type Item = { href: string; label: string; d: string; id?: string };

const HOME: Item[] = [
  { href: "#inicio", label: "início", id: "hero", d: D.home },
  { href: "#projetos", label: "projetos", id: "projetos", d: D.folder },
  { href: "#experiencia", label: "experiência", id: "experiencia", d: D.bag },
  { href: "#stack", label: "ferramentas", id: "stack", d: D.tool },
  { href: "#contato", label: "contato", id: "contato", d: D.pen },
];
const CASES: Item[] = [
  { href: "/#inicio", label: "início", d: D.home },
  { href: "/#projetos", label: "projetos", d: D.folder },
  { href: "/cases", label: "cases", id: "cases", d: D.case },
  { href: "/#experiencia", label: "experiência", d: D.bag },
  { href: "/#contato", label: "contato", d: D.pen },
];

/** page="home": destaca a seção visível. page="cases": destaca sempre o ícone de cases. */
export function IconNav({ page = "home" }: { page?: "home" | "cases" }) {
  const items = page === "home" ? HOME : CASES;
  const spy = useScrollSpy(HOME.map((i) => i.id!));
  const active = page === "home" ? spy : "cases";
  return (
    <nav aria-label="principal" className="pointer-events-none sticky top-0 z-30 flex justify-center px-3 pt-4">
      <div className="pointer-events-auto flex items-center gap-0.5 rounded-[14px] border border-night-line bg-panel/90 p-1.5 backdrop-blur">
        {items.map((n) => {
          const on = !!n.id && active === n.id;
          return (
            <a
              key={n.href}
              href={n.href}
              aria-label={n.label}
              title={n.label}
              aria-current={on ? (page === "home" ? "location" : "page") : undefined}
              className={`grid h-11 w-[46px] place-items-center rounded-[10px] no-underline transition-colors ${on ? "bg-plum text-white hover:text-white" : "text-night-muted hover:bg-panel-2 hover:text-panel-light"}`}
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={n.d} /></svg>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
