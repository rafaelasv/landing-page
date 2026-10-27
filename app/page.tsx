import { Shell } from "@/components/Shell";
import { HomeSidebar, HOME_NAV } from "@/components/HomeSidebar";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Stack } from "@/components/Stack";
import { Contact, Footer } from "@/components/Contact";

// Ordem pensada para leitura em < 1 min: quem é (painel) → projetos → trajetória → stack → contato.
export default function Home() {
  return (
    <Shell sidebar={<HomeSidebar />} nav={HOME_NAV}>
      <Projects />
      <Experience />
      <Stack />
      <Contact />
      <Footer topHref="#inicio" />
    </Shell>
  );
}
