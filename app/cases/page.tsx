import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/Shell";
import { CasesSidebar, CASES_NAV } from "@/components/CasesSidebar";
import { CaseArticle } from "@/components/CaseArticle";
import { DarkCta, darkBtn, Footer } from "@/components/Contact";
import { CASES } from "@/data/cases";
import { CV_URL } from "@/data/site";

export const metadata: Metadata = { title: "Cases · Rafaela Tavares · Full-stack, Automação & IA" };

export default function CasesPage() {
  return (
    <Shell sidebar={<CasesSidebar />} nav={CASES_NAV}>
      {/* gap maior entre cases do que dentro deles, para separar visualmente */}
      <div className="flex flex-col gap-12">
        {CASES.map((c) => <CaseArticle key={c.slug} c={c} />)}
      </div>

      <DarkCta title="Gostou do processo?" sticker="sparkles" text="Disponível para vagas de Trainee e Júnior (remoto), freelances e colaborações.">
        <Link href="/#contato" className={darkBtn.primary}>Falar comigo →</Link>
        <Link href="/#projetos" className={darkBtn.secondary}>Ver projetos</Link>
        <a href={CV_URL} download className={darkBtn.outline}>currículo (PDF) ↓</a>
      </DarkCta>

      <Footer topHref="#inicio" />
    </Shell>
  );
}
