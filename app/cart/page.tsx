import type { Metadata } from "next";
import { SiteNav }  from "@/components/nav/SiteNav";
import { Footer }   from "@/components/sections/Footer";
import { CartView } from "@/components/shop/CartView";

export const metadata: Metadata = {
  title: "Your Bag — Sukoon",
};

export default function CartPage() {
  return (
    <>
      <SiteNav />
      <main
        className="stack-panel stack-panel--first stack-panel--last stack-inner"
        style={{ minHeight: "70vh", backgroundColor: "#FAFAFA" }}
      >
        <CartView />
      </main>
      <Footer />
    </>
  );
}
