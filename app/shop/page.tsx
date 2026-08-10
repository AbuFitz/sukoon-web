import { SiteNav }           from "@/components/nav/SiteNav";
import { ShopHero }          from "@/components/shop/ShopHero";
import { ShopCollection }    from "@/components/shop/ShopCollection";
import { ShopTrustStrip }    from "@/components/shop/ShopTrustStrip";
import { Footer }            from "@/components/sections/Footer";
import { getVariantIdMap }   from "@/lib/shopify";
import type { VariantInfo }  from "@/lib/shopify";
import { products }          from "@/lib/products";

export const metadata = {
  title: "Shop — Sukoon",
  description: "Thoughtful skincare made with intention. Shop the Daily Solace collection.",
};

export default async function ShopPage() {
  const variantMap = await getVariantIdMap().catch(() => ({} as Record<string, VariantInfo>));

  const variantIds: Record<string, VariantInfo> = {};
  for (const p of products) {
    if (variantMap[p.slug]) variantIds[p.slug] = variantMap[p.slug];
  }

  return (
    <>
      <SiteNav />
      <main style={{ paddingBottom: "clamp(1rem, 2vw, 1.25rem)" }}>
        <ShopHero />
        <ShopCollection variantIds={variantIds} />
        <ShopTrustStrip />
      </main>
      <Footer />
    </>
  );
}
