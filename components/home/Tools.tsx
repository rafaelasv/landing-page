import type { Dict } from "@/data/home/i18n";
import { TOOLS } from "@/data/home/site";
import { TOOL_ICONS } from "@/data/home/tool-icons";

export default function Tools({ tx }: { tx: Dict }) {
  return (
    <section id="stack" aria-labelledby="h-stack" className="flex flex-col gap-8">
      <h2 id="h-stack" className="m-0 text-[clamp(24px,4vw,30px)] font-bold leading-[1.15] tracking-[-0.03em]">
        <span>{tx.toolsTop}</span> <span className="text-ink-title">{tx.toolsBottom}</span>
      </h2>
      <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0">
        {TOOLS.map((t, i) => {
          const icon = TOOL_ICONS[t.abbr];
          return (
            <li key={t.abbr} title={tx.toolsUse[i]} className="flex items-center gap-2.5 rounded-xl border border-night-line bg-night-card py-1.5 pl-1.5 pr-3.5 text-[15px] font-medium">
              <span aria-hidden className="grid h-8 w-8 place-items-center rounded-lg bg-[#f5f4f2]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill={icon?.color} focusable="false"><path d={icon?.d} /></svg>
              </span>
              {t.name}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
