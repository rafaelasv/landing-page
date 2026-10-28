/** Rótulo mono numerado + título de seção (todos com 22 px). */
export function SectionTitle({ eyebrow, title, id }: { eyebrow?: string; title: string; id?: string }) {
  return (
    <div>
      {eyebrow && <p className="mb-0.5 font-mono text-sm text-plum">{eyebrow}</p>}
      <h2 id={id} className="text-[22px] font-semibold leading-tight tracking-[-0.02em]">{title}</h2>
    </div>
  );
}

export const card = "rounded-xl border border-line bg-white";
