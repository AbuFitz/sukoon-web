import { SiteNav }                from "@/components/nav/SiteNav";
import { HeroSection }            from "@/components/home/HeroSection";
import { FeaturedProductsSection } from "@/components/home/FeaturedProductsSection";
import { BrandStorySection }      from "@/components/home/BrandStorySection";
import { IngredientsSection }     from "@/components/home/IngredientsSection";
import { BenefitsSection }        from "@/components/home/BenefitsSection";
import { NewsletterSection }      from "@/components/home/NewsletterSection";
import { Footer }                 from "@/components/sections/Footer";
import { getProducts, formatPrice } from "@/lib/shopify";
import { featuredProductHandles, productFallbackPrices, type FeaturedHandle } from "@/lib/homepage";
import type { FeaturedProduct } from "@/components/home/FeaturedProductsSection";

export default async function HomePage() {
  // Fetch Shopify products; gracefully degrade if unavailable
  const allProducts = await getProducts().catch(() => []);

  const productByHandle = Object.fromEntries(allProducts.map(p => [p.handle, p]));

  const featuredProducts: FeaturedProduct[] = featuredProductHandles.map(handle => {
    const shopify = productByHandle[handle];
    const variantId = shopify?.variants.nodes[0]?.id;
    const price = shopify?.variants.nodes[0]?.priceV2
      ? formatPrice(shopify.variants.nodes[0].priceV2.amount, shopify.variants.nodes[0].priceV2.currencyCode)
      : productFallbackPrices[handle as FeaturedHandle];

    return {
      handle,
      title: shopify?.title ?? handle,
      price,
      variantId,
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
        <BenefitsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
