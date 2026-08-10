import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteNav }        from "@/components/nav/SiteNav";
import { ProductDetail }  from "@/components/shop/ProductDetail";
import { TrustStrip }     from "@/components/sections/TrustStrip";
import { Footer }         from "@/components/sections/Footer";
import { getProductByHandle } from "@/lib/shopify";
import { products }       from "@/lib/products";

type Props = { params: Promise<{ handle: string }> };

export async function generateStaticParams() {
  return products.map(p => ({ handle: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { handle } = await params;
  const staticProduct = products.find(p => p.slug === handle);
  if (!staticProduct) return {};
  const shopifyProduct = await getProductByHandle(handle).catch(() => null);
  const title = (shopifyProduct?.title && !shopifyProduct.title.match(/^[a-z0-9-]+$/))
    ? shopifyProduct.title : staticProduct.name;
  const desc = shopifyProduct?.description?.trim() || staticProduct.description;
  const imgSrc = shopifyProduct?.featuredImage?.url ?? staticProduct.src;
  return {
    title,
    description: desc,
    openGraph: {
      title: `${title} | Sukoon`,
      description: desc,
      images: [{ url: imgSrc, alt: title }],
      type: "website",
    },
    alternates: { canonical: `https://sukoon.co.uk/products/${handle}` },
  };
}

export default async function ProductPage({ params }: Props) {
  const { handle } = await params;

  // Static fallback from lib/products.ts
  const staticProduct = products.find(p => p.slug === handle);
  if (!staticProduct) notFound();

  // Enrich from Shopify if available
  const shopifyProduct = await getProductByHandle(handle).catch(() => null);

  const variant   = shopifyProduct?.variants.nodes[0];
  const variantId = variant?.id;

  // Use Shopify price only if > £0 (avoid showing £0 for misconfigured products)
  const priceNum = parseFloat(variant?.priceV2?.amount ?? "0");
  const price = (variant?.priceV2 && priceNum > 0)
    ? `£${priceNum % 1 === 0 ? priceNum.toFixed(0) : priceNum.toFixed(2)}`
    : staticProduct.price;

  // Use Shopify title only if it looks like a real title (not a slug)
  const title = (shopifyProduct?.title && !shopifyProduct.title.match(/^[a-z0-9-]+$/))
    ? shopifyProduct.title
    : staticProduct.name;

  const desc   = (shopifyProduct?.description?.trim())
    ? shopifyProduct.description
    : staticProduct.description;
  const imgSrc = shopifyProduct?.featuredImage?.url ?? staticProduct.src;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: title,
    description: desc,
    image: imgSrc,
    brand: { "@type": "Brand", name: "Sukoon" },
    offers: {
      "@type": "Offer",
      url: `https://sukoon.co.uk/products/${handle}`,
      priceCurrency: "GBP",
      price: price.replace(/[^0-9.]/g, ""),
      availability: variant?.availableForSale === false
        ? "https://schema.org/OutOfStock"
        : "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "Sukoon Skin" },
    },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Formula", value: "5 Active Ingredients" },
      { "@type": "PropertyValue", name: "Origin", value: "Made in the UK" },
      { "@type": "PropertyValue", name: "Key Ingredients", value: "Black Seed Oil, Olive Squalane, Vitamin B3, Vitamin E, Vanilla Extract" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <SiteNav />
      <main style={{ paddingBottom: "clamp(1rem, 2vw, 1.25rem)" }}>
        <ProductDetail
          handle={handle}
          title={title}
          size={staticProduct.size}
          price={price}
          description={desc}
          imageSrc={imgSrc}
          tag={staticProduct.tag}
          variantId={variantId}
        />
        <TrustStrip />
      </main>
      <Footer />
    </>
  );
}
