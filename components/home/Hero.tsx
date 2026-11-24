import type { Dict } from "@/data/home/i18n";
import { SITE } from "@/data/home/site";
import SocialIcons from "./SocialIcons";
import Spotify from "./Spotify";

export default function Hero({ tx }: { tx: Dict }) {
  return (
    <section id="hero" aria-label={tx.heroAria} className="flex animate-hero-in flex-col gap-7 pt-[clamp(40px,8vw,88px)]">
      <div className="flex min-w-0 flex-col gap-1">
        <h1 className="m-0 text-[clamp(34px,8vw,68px)] font-bold leading-[1.02] tracking-[-0.05em]">
          Rafaela <span className="text-lilac">Tavares</span>
        </h1>
        <p className="mb-0 mt-2.5 text-[17px] text-ink-muted">{tx.role}</p>
      </div>
      <p className="m-0 max-w-[62ch] text-pretty text-[17px] leading-[1.7] text-ink-muted">{tx.heroP}</p>
      <Spotify tx={tx} />
      <div className="flex flex-wrap items-center gap-1.5">
        <SocialIcons />
        <a
          href={SITE.cv}
          download
          aria-label={tx.cvAria}
          className="ml-2.5 underline decoration-ink-title underline-offset-[5px] hover:decoration-lilac"
        >
          {tx.cvLink}
        </a>
      </div>
    </section>
  );
}
