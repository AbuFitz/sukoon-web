import { SiteNav }           from "@/components/nav/SiteNav";
import { ShopHero }          from "@/components/shop/ShopHero";
import { ProductDetailGrid } from "@/components/shop/ProductDetailGrid";
import { IngredientsGrid }   from "@/components/sections/IngredientsGrid";
import { TrustStrip }        from "@/components/sections/TrustStrip";
import { EmailCapture }      from "@/components/sections/EmailCapture";
import { Footer }            from "@/components/sections/Footer";

export default function ShopPage() {
  return (
    <>
      <SiteNav />
      <main>
        <ShopHero />
        <ProductDetailGrid />
        <IngredientsGrid />
        <TrustStrip />
        <EmailCapture />
      </main>
      <Footer />
    </>
  );
}
