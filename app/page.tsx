import CaseStudies from "@/components/home/case-studies";
import Footer from "@/components/home/footer";
import Hero from "@/components/home/hero";
import OperatingModel from "@/components/home/operating-model";
import Services from "@/components/home/services";
import Stats from "@/components/home/stats";
import Team from "@/components/home/team";
import TechLogos from "@/components/home/tech-logo";
import Testimonials from "@/components/home/testimonials";
import Workflow from "@/components/home/workflow";
import { FloatingNav } from "@/components/ui/floating-navbar";

export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      sm: true,
      lg: true,
    },
    {
      name: "Services",
      link: "#services",
      sm: true,
      lg: false,
    },
    {
      name: "Team",
      link: "#team",
      sm: true,
      lg: true,
    },
  ];
  return (
    <>
      <FloatingNav navItems={navItems} />
      <main>
        <Hero />
        <TechLogos />
        <Stats />
        <Services />
        <Team />
        <OperatingModel />
        <Workflow />
        <CaseStudies />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}
