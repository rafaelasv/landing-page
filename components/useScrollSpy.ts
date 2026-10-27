"use client";
import { useEffect, useState } from "react";

/**
 * Diz qual seção está no meio da tela. Usado para destacar o item do menu.
 * rootMargin "-40% 0px -55% 0px" = só conta como "ativa" a seção que cruza a faixa central da tela.
 */
export function useScrollSpy(ids: string[], initial = ids[0]) {
  const [active, setActive] = useState(initial);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [ids.join(",")]); // eslint-disable-line react-hooks/exhaustive-deps

  return active;
}
