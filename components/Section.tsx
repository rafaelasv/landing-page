/** Rótulo pequeno + título de seção. Mantém todos os títulos com o mesmo tamanho (22 px). */
export function SectionTitle({ eyebrow, title, id, eyebrowClass = "text-plum" }: { eyebrow?: string; title: string; id?: string; eyebrowClass?: string }) {
  return (
    <div>
      {eyebrow && <p className={`mb-0.5 font-mono text-sm ${eyebrowClass}`}>{eyebrow}</p>}
      <h2 id={id} className="text-[22px] font-semibold leading-tight tracking-[-0.02em]">{title}</h2>
    </div>
  );
}

export const card = "rounded-[18px] border border-line bg-white shadow-[0_1px_2px_rgba(30,19,48,.04)]";
export const cardHover = "transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(30,19,48,.10)]";
