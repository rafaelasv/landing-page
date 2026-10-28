/** v15 (/cases): rótulo mono numerado + título de 22 px. */
export function SectionTitle({ eyebrow, title, id }: { eyebrow?: string; title: string; id?: string }) {
  return (
    <div>
      {eyebrow && <p className="mb-0.5 font-mono text-sm text-plum">{eyebrow}</p>}
      <h2 id={id} className="text-[22px] font-semibold leading-tight tracking-[-0.02em]">{title}</h2>
    </div>
  );
}

export const card = "rounded-xl border border-line bg-white";

/**
 * v17 (home): título gigante em caixa alta, 2ª linha apagada.
 * O tamanho acompanha a largura da seção (cqi), por isso a seção usa `homeSection`.
 */
export function BigTitle({ id, top, bottom }: { id?: string; top: string; bottom: string }) {
  return (
    <h2 id={id} className="text-[length:clamp(34px,11cqi,84px)] font-bold uppercase leading-[.9] tracking-[-0.045em]">
      <span className="block">{top}</span>
      <span className="block text-night-title">{bottom}</span>
    </h2>
  );
}
export const homeSection = "flex flex-col gap-8 [container-type:inline-size]";
