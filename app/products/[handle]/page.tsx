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
