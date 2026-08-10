import { SiteNav }           from "@/components/nav/SiteNav";
import { ShopConfigurator }  from "@/components/shop/ShopConfigurator";
import { ShopTrustStrip }    from "@/components/shop/ShopTrustStrip";
import { Footer }            from "@/components/sections/Footer";
import { getVariantIdMap }   from "@/lib/shopify";
import type { VariantInfo }  from "@/lib/shopify";
import { products }          from "@/lib/products";

export const metadata = {
  title: "Shop — Sukoon",
  description: "The Daily Solace Fluid — one formula, two sizes.",
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
        <ShopConfigurator variantIds={variantIds} />
        <ShopTrustStrip />
      </main>
      <Footer />
    </>
  );
}
