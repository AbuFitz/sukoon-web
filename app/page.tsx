import { Nav } from "@/components/nav/Nav";
import { Hero } from "@/components/sections/Hero";
import { Benefits } from "@/components/sections/Benefits";
import { IngredientStory } from "@/components/sections/IngredientStory";
import { HowToUse } from "@/components/sections/HowToUse";
import { LifestyleSection } from "@/components/sections/LifestyleSection";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { Newsletter } from "@/components/sections/Newsletter";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Benefits />
        <IngredientStory />
        <HowToUse />
        <LifestyleSection />
        <TrustBadges />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
