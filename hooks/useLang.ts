"use client";
import { useCallback, useEffect, useState } from "react";
import { i18n, type Dict, type Lang } from "@/data/home/i18n";

// PT por padrão (igual no servidor e no cliente); depois de montar, usa o idioma salvo ou o do navegador.
export function useLang(): { lang: Lang; tx: Dict; toggle: () => void } {
  const [lang, setLang] = useState<Lang>("pt");

  useEffect(() => {
    let l: string | null = null;
    try { l = localStorage.getItem("lang"); } catch {}
    if (l !== "pt" && l !== "en") l = (navigator.language || "pt").toLowerCase().startsWith("en") ? "en" : "pt";
    setLang(l as Lang);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
  }, [lang]);

  const toggle = useCallback(() => {
    setLang((cur) => {
      const next: Lang = cur === "pt" ? "en" : "pt";
      try { localStorage.setItem("lang", next); } catch {}
      return next;
    });
  }, []);

  return { lang, tx: i18n[lang], toggle };
}
