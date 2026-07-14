import { SiteNav }                from "@/components/nav/SiteNav";
import { HeroSection }            from "@/components/home/HeroSection";
import { FeaturedProductsSection } from "@/components/home/FeaturedProductsSection";
import { BrandStorySection }      from "@/components/home/BrandStorySection";
import { IngredientsSection }     from "@/components/home/IngredientsSection";
import { BenefitsSection }        from "@/components/home/BenefitsSection";
import { ManifestoSection }       from "@/components/home/ManifestoSection";
import { NewsletterSection }      from "@/components/home/NewsletterSection";
import { Footer }                 from "@/components/sections/Footer";
import { getProducts, formatPrice } from "@/lib/shopify";
import { featuredProductHandles, productFallbackPrices, productFallbackTitles, type FeaturedHandle } from "@/lib/homepage";
import type { FeaturedProduct } from "@/components/home/FeaturedProductsSection";

export default async function HomePage() {
  const allProducts = await getProducts().catch(() => []);
  const productByHandle = Object.fromEntries(allProducts.map(p => [p.handle, p]));

  const featuredProducts: FeaturedProduct[] = featuredProductHandles.map(handle => {
    const shopify = productByHandle[handle];
    const v = shopify?.variants.nodes[0];
    const variantId = v?.id;
    const availableForSale = v?.availableForSale;
    const shopifyPrice = v?.priceV2;
    const priceAmount = parseFloat(shopifyPrice?.amount ?? "0");
    const price = (shopifyPrice && priceAmount > 0)
      ? formatPrice(shopifyPrice.amount, shopifyPrice.currencyCode)
      : productFallbackPrices[handle as FeaturedHandle];

    return {
      handle,
      title: (shopify?.title && !shopify.title.match(/^[a-z0-9-]+$/))
        ? shopify.title
        : productFallbackTitles[handle as FeaturedHandle],
      price,
      variantId,
      availableForSale,
    };
  });

  return (
    <>
      <SiteNav />
      <main>
        <HeroSection />
        <FeaturedProductsSection products={featuredProducts} />
        <BrandStorySection />
        <IngredientsSection />
        <ManifestoSection />
        <BenefitsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
