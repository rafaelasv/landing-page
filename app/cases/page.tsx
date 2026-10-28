import type { Metadata } from "next";
import Link from "next/link";
import { HomeShell } from "@/components/HomeShell";
import { CasesCard } from "@/components/CasesCard";
import { CaseArticle } from "@/components/CaseArticle";
import { BigTitle, homeSection } from "@/components/Section";
import { Footer } from "@/components/Contact";
import { CASES } from "@/data/cases";
import { CV_URL } from "@/data/site";

export const metadata: Metadata = { title: "Cases · Rafaela Tavares · Desenvolvedora full-stack / automação" };

const b = "flex min-h-12 items-center rounded-[10px] px-[18px] no-underline transition-colors";

export default function CasesPage() {
  return (
    <HomeShell card={<CasesCard />} page="cases" gap="gap-[120px]">
      {CASES.map((c) => <CaseArticle key={c.slug} c={c} />)}

      <section className={`${homeSection} gap-6`}>
        <BigTitle top="Gostou do" bottom="processo?" />
        <p className="max-w-[48ch] text-[17px] text-night-muted">Disponível para vagas de Trainee e Júnior (remoto), freelances e colaborações.</p>
        <div className="flex flex-wrap gap-2">
          <Link href="/#contato" className={`${b} bg-lilac font-semibold text-ink hover:bg-lilac-light hover:text-ink`}>Falar comigo →</Link>
          <Link href="/#projetos" className={`${b} bg-panel font-medium text-panel-light hover:bg-panel-2 hover:text-panel-light`}>Ver projetos</Link>
          <a href={CV_URL} download className={`${b} border border-panel-line font-medium text-panel-light hover:border-panel-dim hover:text-panel-light`}>currículo (PDF) ↓</a>
        </div>
      </section>

      <Footer topHref="#inicio" dark />
    </HomeShell>
  );
}
