import { V3Nav } from "@/components/v3/V3Nav";
import { V3Footer } from "@/components/v3/V3Footer";
import { HeroSection } from "@/components/v3/HeroSection";
import { AboutSection } from "@/components/v3/AboutSection";
import { TeamSection } from "@/components/v3/TeamSection";
import { PortfolioSection } from "@/components/v3/PortfolioSection";
import { ContactSection } from "@/components/v3/ContactSection";

export default function HomePage() {
  return (
    <>
      <V3Nav />
      <main id="main" tabIndex={-1}>
        <HeroSection />
        <AboutSection />
        <TeamSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <V3Footer />
    </>
  );
}
