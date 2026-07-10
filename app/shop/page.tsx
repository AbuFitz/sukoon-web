import { SiteNav }           from "@/components/nav/SiteNav";
import { ShopHero }          from "@/components/shop/ShopHero";
import { ProductDetailGrid } from "@/components/shop/ProductDetailGrid";
import { IngredientsGrid }   from "@/components/sections/IngredientsGrid";
import { TrustStrip }        from "@/components/sections/TrustStrip";
import { EmailCapture }      from "@/components/sections/EmailCapture";
import { Footer }            from "@/components/sections/Footer";
import { getProductByHandle } from "@/lib/shopify";
import { products }           from "@/lib/products";

export default async function ShopPage() {
  // Fetch variantId for each product by handle in parallel
  const shopifyProducts = await Promise.all(
    products.map(p => getProductByHandle(p.slug).catch(() => null))
  );

  const variantIds: Record<string, string> = {};
  shopifyProducts.forEach((sp, i) => {
    if (sp?.variants.nodes[0]?.id) {
      variantIds[products[i].slug] = sp.variants.nodes[0].id;
    }
  });

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
