"use client";
import { useRef } from "react";
import type { Dict } from "@/data/home/i18n";
import { usePeekCat } from "@/hooks/usePeekCat";

// Linha divisória com o gatinho espiando por cima.
export default function PeekDivider({ tx }: { tx: Dict }) {
  const ref = useRef<HTMLDivElement>(null);
  usePeekCat(ref);
  return (
    <div className="relative mb-[-40px] mt-6 h-px bg-night-line">
      <div
        ref={ref}
        role="button"
        tabIndex={0}
        aria-label={tx.peekLabel}
        title={tx.catTitle}
        className="absolute bottom-px right-[4%] w-[clamp(76px,12vw,112px)] cursor-pointer overflow-hidden [touch-action:manipulation]"
      />
    </div>
  );
}
