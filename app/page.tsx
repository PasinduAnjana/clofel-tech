import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
import Stats from "@/components/home/stats";
import Team from "@/components/home/team";
import TechLogos from "@/components/home/tech-logo";

export default function Home() {
  return (
    <main>
      <Hero />
      <TechLogos />
      <Stats />
      <Services />
      <Team />
    </main>
  );
}
