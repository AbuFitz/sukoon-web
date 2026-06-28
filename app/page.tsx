import { SiteNav }        from "@/components/nav/SiteNav";
import { HeroSplit }       from "@/components/sections/HeroSplit";
import { LifestyleSplit }  from "@/components/sections/LifestyleSplit";
import { IngredientsGrid } from "@/components/sections/IngredientsGrid";
import { RitualSection }   from "@/components/sections/RitualSection";
import { ProductFeature }  from "@/components/sections/ProductFeature";
import { PrinciplesStrip } from "@/components/sections/PrinciplesStrip";
import { PhotoGallery }    from "@/components/sections/PhotoGallery";
import { EmailCapture }    from "@/components/sections/EmailCapture";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <HeroSplit />
        <LifestyleSplit />
        <IngredientsGrid />
        <RitualSection />
        <ProductFeature />
        <PrinciplesStrip />
        <PhotoGallery />
        <EmailCapture />
      </main>
    </>
  );
}
