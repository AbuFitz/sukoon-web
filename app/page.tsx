import { SiteNav } from "@/components/nav/SiteNav";
import { EditorialHero } from "@/components/sections/EditorialHero";
import { Philosophy } from "@/components/sections/Philosophy";
import { Ingredients } from "@/components/sections/Ingredients";
import { Ritual } from "@/components/sections/Ritual";
import { ProductPreview } from "@/components/sections/ProductPreview";
import { BrandValues } from "@/components/sections/BrandValues";
import { Gallery } from "@/components/sections/Gallery";
import { EmailCapture } from "@/components/sections/EmailCapture";
import { MinimalFooter } from "@/components/sections/MinimalFooter";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <EditorialHero />
        <Philosophy />
        <Ingredients />
        <Ritual />
        <ProductPreview />
        <BrandValues />
        <Gallery />
        <EmailCapture />
      </main>
      <MinimalFooter />
    </>
  );
}
