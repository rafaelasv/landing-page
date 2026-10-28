"use client";
import { useScrollSpy } from "./useScrollSpy";

// Ícones no estilo Lucide (traço 1.8).
const ITEMS = [
  { href: "#inicio", label: "início", id: "hero", d: "m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1z" },
  { href: "#projetos", label: "projetos", id: "projetos", d: "M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" },
  { href: "#experiencia", label: "experiência", id: "experiencia", d: "M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M3 13h18" },
  { href: "#stack", label: "ferramentas", id: "stack", d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z" },
  { href: "#contato", label: "contato", id: "contato", d: "M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z" },
];

export function IconNav() {
  const active = useScrollSpy(ITEMS.map((i) => i.id));
  return (
    <nav aria-label="principal" className="pointer-events-none sticky top-0 z-30 flex justify-center px-3 pt-4">
      <div className="pointer-events-auto flex items-center gap-0.5 rounded-[14px] border border-night-line bg-panel/90 p-1.5 backdrop-blur">
        {ITEMS.map((n) => {
          const on = active === n.id;
          return (
            <a
              key={n.href}
              href={n.href}
              aria-label={n.label}
              title={n.label}
              aria-current={on ? "location" : undefined}
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
