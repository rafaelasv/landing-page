import { Shell } from "@/components/Shell";
import { HomeSidebar, HOME_NAV } from "@/components/HomeSidebar";
import { Stack } from "@/components/Stack";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact, Footer } from "@/components/Contact";

// Stack primeiro: o recrutador vê as tecnologias antes de rolar.
export default function Home() {
  return (
    <Shell sidebar={<HomeSidebar />} nav={HOME_NAV}>
      <Stack />
      <Projects />
      <Experience />
      <Contact />
      <Footer topHref="#inicio" />
    </Shell>
  );
}
