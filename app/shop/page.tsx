import { SiteNav }           from "@/components/nav/SiteNav";
import { ShopHero }          from "@/components/shop/ShopHero";
import { ProductDetailGrid } from "@/components/shop/ProductDetailGrid";
import { IngredientsGrid }   from "@/components/sections/IngredientsGrid";
import { TrustStrip }        from "@/components/sections/TrustStrip";
import { EmailCapture }      from "@/components/sections/EmailCapture";
import { Footer }            from "@/components/sections/Footer";
import { getVariantIdMap }   from "@/lib/shopify";
import { products }          from "@/lib/products";

export default async function ShopPage() {
  // Fetch all variant IDs from Shopify in one request; map by handle
  const variantMap = await getVariantIdMap().catch(() => ({} as Record<string, string>));

  // Build slug → variantId map for the product selector
  const variantIds: Record<string, string> = {};
  for (const p of products) {
    if (variantMap[p.slug]) variantIds[p.slug] = variantMap[p.slug];
  }

  return (
    <>
      <SiteNav />
      <main>
        <ShopHero />
        <ProductDetailGrid variantIds={variantIds} />
        <IngredientsGrid />
        <TrustStrip />
        <EmailCapture />
      </main>
      <Footer />
    </>
  );
}
