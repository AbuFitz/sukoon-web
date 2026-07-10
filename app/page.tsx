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
import { getVariantIdMap } from "@/lib/shopify";
import { products }        from "@/lib/products";

export default async function Home() {
  // Shopify is source of truth — fetch all product handles at build/request time
  const variantMap = await getVariantIdMap().catch(() => ({} as Record<string, string>));
  const heroProduct = products[0];
  const variantId = variantMap[heroProduct.slug];

  return (
    <>
      <SiteNav />
      <main>
        <HeroSplit />
        <ProductPurchase variantId={variantId} />
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
