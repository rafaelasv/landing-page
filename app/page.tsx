import { HomeShell } from "@/components/HomeShell";
import { ProfileCard } from "@/components/ProfileCard";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Tools } from "@/components/Stack";
import { Contact, Footer } from "@/components/Contact";

export default function Home() {
  return (
    <HomeShell card={<ProfileCard />}>
      <Hero />
      <Projects />
      <Experience />
      <Tools />
      <Contact />
      <Footer topHref="#inicio" dark />
    </HomeShell>
  );
}
