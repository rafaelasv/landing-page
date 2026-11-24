"use client";
import { useLang } from "@/hooks/useLang";
import { useActiveSection } from "@/hooks/useActiveSection";
import { EDU, JOBS } from "@/data/home/site";
import Header from "./Header";
import Dock from "./Dock";
import Hero from "./Hero";
import PeekDivider from "./PeekDivider";
import Github from "./Github";
import Projects from "./Projects";
import Timeline from "./Timeline";
import Tools from "./Tools";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Portfolio() {
  const { lang, tx, toggle } = useLang();
  const active = useActiveSection(["hero", "projetos", "experiencia", "stack", "contato"]);

  const jobs = JOBS.map((j, i) => ({ org: j.org, sub: tx.jobs[i].role, period: tx.jobs[i].period, highlight: j.current }));
  const edu = EDU.map((e, i) => ({ org: e.org, sub: tx.edu[i].course, period: tx.edu[i].period }));

  return (
    <div className="home-v18 relative mx-auto min-h-screen bg-night text-ink-fg">
      <Header tx={tx} onToggleLang={toggle} />
      <Dock tx={tx} active={active} />
      <div className="mx-auto max-w-[860px] px-6">
        <span id="inicio" aria-hidden />
        <main className="flex min-w-0 flex-col gap-[104px] pb-[150px]">
          <Hero tx={tx} />
          <PeekDivider tx={tx} />
          <Github tx={tx} lang={lang} />
          <Projects tx={tx} />
          <Timeline id="experiencia" title={tx.expTop} rows={jobs} />
          <Timeline id="formacao" title={tx.eduTitle} rows={edu} className="-mt-12" />
          <Tools tx={tx} />
          <Contact tx={tx} />
          <Footer tx={tx} />
        </main>
      </div>
    </div>
  );
}
