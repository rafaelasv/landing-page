import { STICKER } from "@/data/site";

type Props = { name: string; className: string; rotate: string; duration?: number; delay?: number };

/** Adesivo decorativo que flutua devagar. Animação só em CSS; prefers-reduced-motion desliga no globals.css. */
export function Sticker({ name, className, rotate, duration = 6, delay = 0 }: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={STICKER(name)}
      alt=""
      aria-hidden
      className={`pointer-events-none absolute animate-bob ${className}`}
      style={{ "--r": rotate, "--dur": `${duration}s`, "--delay": `${delay}s`, transform: `rotate(${rotate})` } as React.CSSProperties}
    />
  );
}
