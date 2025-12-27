import { Page } from "@/components/layout";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import HeroSection from "./hero";
import ProjectsSection from "./projects";
import SkillSection from "./skills";
import ContactsSection from "./contacts";

export default function HomePage() {
  return (
    <Page fullScreen className="snap-y snap-mandatory">
      <AnimatedThemeToggler className="fixed top-8 right-8 z-50" />
      <HeroSection />
      <ProjectsSection />
      <SkillSection />
      <ContactsSection />
    </Page>
  );
}
