import { SiteNav }           from "@/components/nav/SiteNav";
import { ShopCollection }    from "@/components/shop/ShopCollection";
import { TrustStrip }        from "@/components/sections/TrustStrip";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { Footer }            from "@/components/sections/Footer";
import { getVariantIdMap }   from "@/lib/shopify";
import { products }          from "@/lib/products";

export default async function ShopPage() {
  const variantMap = await getVariantIdMap().catch(() => ({} as Record<string, string>));

  const variantIds: Record<string, string> = {};
  for (const p of products) {
    if (variantMap[p.slug]) variantIds[p.slug] = variantMap[p.slug];
  }

  return (
    <>
      <SiteNav />
      <main>
        <ShopCollection variantIds={variantIds} />
        <TrustStrip />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
