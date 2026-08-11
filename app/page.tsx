import type { Metadata } from "next";
import { SiteNav }                from "@/components/nav/SiteNav";
import { HeroSection }            from "@/components/home/HeroSection";
import { CollectionSection }      from "@/components/home/CollectionSection";
import { BrandStorySection }      from "@/components/home/BrandStorySection";
import { IngredientsSection }     from "@/components/home/IngredientsSection";
import { BenefitsSection }        from "@/components/home/BenefitsSection";
import { Footer }                 from "@/components/sections/Footer";
import { getProducts, formatPrice } from "@/lib/shopify";
import {
  featuredProductHandles,
  productFallbackPrices,
  productFallbackTitles,
  type FeaturedHandle,
  type FeaturedProduct,
} from "@/lib/homepage";

export const metadata: Metadata = {
  alternates: { canonical: "https://sukoon.co.uk" },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Sukoon",
  url: "https://sukoon.co.uk",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://sukoon.co.uk/shop?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <SiteNav />
      <main style={{ paddingBottom: "clamp(1rem, 2vw, 1.25rem)" }}>
        <HeroSection />
        <div style={{ backgroundColor: "#F5F7F8" }}>
          <CollectionSection products={featuredProducts} />
          <BenefitsSection />
          <IngredientsSection />
          <div style={{ height: "clamp(2.5rem, 5vw, 4rem)" }} />
        </div>
        <BrandStorySection />
      </main>
      <Footer />
    </>
  );
}
