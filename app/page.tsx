import { SiteNav }         from "@/components/nav/SiteNav";
import { HeroSplit }       from "@/components/sections/HeroSplit";
import { TrustStrip }      from "@/components/sections/TrustStrip";
import { LifestyleSplit }  from "@/components/sections/LifestyleSplit";
import { ProductPurchase } from "@/components/sections/ProductPurchase";
import { IngredientsGrid } from "@/components/sections/IngredientsGrid";
import { RitualSection }   from "@/components/sections/RitualSection";
import { PhilosophyQuote } from "@/components/sections/PhilosophyQuote";
import { ForYou }          from "@/components/sections/ForYou";
import { EmailCapture }    from "@/components/sections/EmailCapture";
import { Footer }          from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <HeroSplit />
        <ProductPurchase />
        <TrustStrip />
        <LifestyleSplit />
        <IngredientsGrid />
        <RitualSection />
        <PhilosophyQuote />
        <ForYou />
        <EmailCapture />
      </main>
      <Footer />
    </>
  );
}
