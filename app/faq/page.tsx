import { SiteNav } from "@/components/nav/SiteNav";
import { Footer }  from "@/components/sections/Footer";
import { FAQContent } from "@/components/sections/FAQContent";

export const metadata = {
  title: "FAQ — Sukoon",
  description: "Honest answers about The Daily Solace Fluid — ingredients, shipping, returns, and how to use it.",
};

export default function FAQPage() {
  return (
    <>
      <SiteNav />
      <main style={{ paddingTop: "calc(1.75rem + 84px)" }}>
        <FAQContent />
      </main>
      <Footer />
    </>
  );
}
