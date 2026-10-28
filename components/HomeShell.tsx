import { Gatinho } from "./Gatinho";
import { IconNav } from "./IconNav";

/**
 * Estrutura da home (v17):
 * - barra de ícones flutuante no topo (todas as larguras)
 * - >= 1100 px (wide): card claro fixo à esquerda, conteúdo à direita
 * - < 1100 px: card no topo (máx. 420 px), conteúdo embaixo
 * O padding à direita/embaixo do main evita que o gatinho fixo cubra conteúdo.
 */
export function HomeShell({ card, children }: { card: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-night text-panel-light">
      <IconNav />
      <div className="mx-auto grid max-w-[1180px] items-start gap-10 px-3 pt-7 wide:grid-cols-[minmax(290px,330px)_minmax(0,1fr)] wide:gap-[72px] wide:px-8 wide:pt-16">
        <aside id="inicio" className="mx-auto w-full max-w-[420px] animate-hero-in wide:sticky wide:top-24 wide:max-w-none">{card}</aside>
        <main className="flex min-w-0 flex-col gap-[104px] pb-[110px] wide:pb-6 wide:pr-16">{children}</main>
      </div>
      <Gatinho outline />
    </div>
  );
}
