import { notFound } from "next/navigation";
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

export default async function ProductPage({ params }: Props) {
  const { handle } = await params;

  // Static fallback from lib/products.ts
  const staticProduct = products.find(p => p.slug === handle);
  if (!staticProduct) notFound();

  // Enrich from Shopify if available
  const shopifyProduct = await getProductByHandle(handle).catch(() => null);

  const variantId = shopifyProduct?.variants.nodes[0]?.id;
  const price = shopifyProduct?.variants.nodes[0]?.priceV2
    ? `£${parseFloat(shopifyProduct.variants.nodes[0].priceV2.amount).toFixed(0)}`
    : staticProduct.price;
  const title   = shopifyProduct?.title ?? staticProduct.name;
  const desc    = shopifyProduct?.description ?? staticProduct.description;
  const imgSrc  = shopifyProduct?.featuredImage?.url ?? staticProduct.src;

  return (
    <>
      <SiteNav />
      <main>
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
