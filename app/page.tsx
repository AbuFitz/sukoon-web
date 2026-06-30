import { SiteNav }        from "@/components/nav/SiteNav";
import { HeroSplit }       from "@/components/sections/HeroSplit";
import { CategoryTiles }   from "@/components/sections/CategoryTiles";
import { ProductRow }      from "@/components/sections/ProductRow";
import { LifestyleSplit }  from "@/components/sections/LifestyleSplit";
import { IngredientsGrid } from "@/components/sections/IngredientsGrid";
import { RitualSection }   from "@/components/sections/RitualSection";
import { ProductFeature }  from "@/components/sections/ProductFeature";
import { PrinciplesStrip } from "@/components/sections/PrinciplesStrip";
import { TrustStrip }      from "@/components/sections/TrustStrip";
import { PhotoGallery }    from "@/components/sections/PhotoGallery";
import { JournalRow }      from "@/components/sections/JournalRow";
import { EmailCapture }    from "@/components/sections/EmailCapture";
import { Footer }          from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <HeroSplit />
        <CategoryTiles />
        <ProductRow />
        <LifestyleSplit />
        <IngredientsGrid />
        <RitualSection />
        <ProductFeature />
        <TrustStrip />
        <PhotoGallery />
        <JournalRow />
        <EmailCapture />
      </main>
      <Footer />
    </>
  );
}
