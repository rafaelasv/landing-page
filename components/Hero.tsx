import { ABOUT, HERO_CARDS, STATS } from "@/data/site";

export function Hero() {
  return (
    <section id="hero" aria-labelledby="h-hero" className="flex flex-col gap-9 [container-type:inline-size]">
      <h2 id="h-hero" className="text-[length:clamp(34px,13.6cqi,112px)] font-bold uppercase leading-[.86] tracking-[-0.05em]">
        <span className="block whitespace-nowrap">Full&#8209;stack</span>
        <span className="block whitespace-nowrap text-night-title">+&nbsp;automação</span>
      </h2>
      <p className="max-w-[48ch] text-pretty text-[17px] leading-[1.55] text-night-muted">{ABOUT}</p>

      <div className="flex flex-wrap gap-11">
        {STATS.map((s) => (
          <div key={s.n + s.label} className="flex flex-col gap-1.5">
            <span className="text-[length:clamp(44px,6cqi,64px)] font-bold leading-none tracking-[-0.045em]">{s.n}</span>
            <span className="max-w-[12ch] font-mono text-[13px] uppercase leading-[1.35] text-night-muted">{s.label}</span>
          </div>
        ))}
      </div>

      <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr))]">
        {HERO_CARDS.map((c, i) => {
          const plum = i === 0;
          return (
            <a
              key={c.href}
              href={c.href}
              className={`relative flex min-h-[210px] flex-col justify-between gap-12 overflow-hidden rounded-2xl p-[22px] no-underline transition-transform hover:-translate-y-[3px] ${plum ? "bg-plum-bright text-white hover:text-white" : "bg-lilac text-ink hover:text-ink"}`}
            >
              {plum
                ? <span aria-hidden className="absolute -right-[60px] -top-[60px] h-[200px] w-[200px] rounded-full border-[28px] border-white/[.07]" />
                : <span aria-hidden className="absolute inset-0 bg-[repeating-linear-gradient(135deg,transparent_0_22px,rgba(90,45,130,.12)_22px_24px)]" />}
              <svg className="relative" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d={plum ? "M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" : "m16 18 6-6-6-6M8 6l-6 6 6 6"} />
              </svg>
              <span className="relative flex items-end justify-between gap-3">
                <span className="text-[21px] font-bold uppercase leading-[1.1] tracking-[-0.02em]">{c.lines[0]}<br />{c.lines[1]}</span>
                <span aria-hidden className="grid h-8 w-8 flex-none place-items-center rounded-lg border-[1.5px] border-current">→</span>
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
