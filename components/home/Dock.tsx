import type { Dict } from "@/data/home/i18n";
import { NAV } from "@/data/home/site";
import SocialIcons from "./SocialIcons";
import { PathIcon } from "./Icons";

export default function Dock({ tx, active }: { tx: Dict; active: string }) {
  return (
    <nav aria-label={tx.dockAria} className="pointer-events-none fixed inset-x-0 bottom-4 z-30 flex justify-center px-3">
      <div className="pointer-events-auto flex items-center gap-0.5 rounded-2xl border border-night-line bg-night-panel/90 p-1.5 backdrop-blur-md max-[420px]:[&_.ico]:w-9">
        {NAV.map((n) => {
          const on = active === n.id;
          return (
            <a
              key={n.href}
              href={n.href}
              aria-label={tx.nav[n.key]}
              title={tx.nav[n.key]}
              aria-current={on ? "location" : undefined}
              className={`grid h-11 w-9 min-[420px]:w-[46px] place-items-center rounded-xl no-underline transition-colors hover:bg-night-line hover:text-ink-fg ${on ? "bg-plum text-white" : "text-ink-muted"}`}
            >
              <PathIcon d={n.d} />
            </a>
          );
        })}
        <span aria-hidden className="mx-1 h-[22px] w-px bg-night-line2" />
        <SocialIcons />
      </div>
    </nav>
  );
}
