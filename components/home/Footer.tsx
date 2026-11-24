"use client";
import { useRef } from "react";
import type { Dict } from "@/data/home/i18n";
import { useLiveCat } from "@/hooks/useLiveCat";

// Rodapé com o gatinho de corpo inteiro sentado na linha.
export default function Footer({ tx }: { tx: Dict }) {
  const catRef = useRef<HTMLButtonElement>(null);
  const hopRef = useRef<(() => void) | null>(null);
  useLiveCat(catRef, hopRef);
  return (
    <footer className="relative mt-7 flex flex-wrap justify-between gap-3 border-t border-night-line px-3.5 pb-2 pt-6 font-mono text-[13.5px] text-ink-faint">
      <button
        ref={catRef}
        onClick={() => hopRef.current?.()}
        aria-label={tx.catLabel}
        title={tx.catTitle}
        className="pointer-events-none absolute bottom-[calc(100%+1px)] right-3.5 z-[5] h-[86px] w-[60px] min-[1100px]:h-[118px] min-[1100px]:w-[82px] cursor-pointer border-0 bg-transparent p-0"
        style={{ filter: "drop-shadow(1.5px 0 0 #4a4452) drop-shadow(-1.5px 0 0 #4a4452) drop-shadow(0 1.5px 0 #4a4452) drop-shadow(0 -1.5px 0 #4a4452)" }}
      />
      <span>rafaela tavares</span>
      <a href="#inicio" className="text-ink-faint">{tx.toTop}</a>
    </footer>
  );
}
