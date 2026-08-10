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
      <main className="container" style={{ minHeight: "60vh", paddingTop: "clamp(1rem, 2vw, 1.5rem)", paddingBottom: "clamp(1rem, 2vw, 1.25rem)" }}>
        <CartView />
      </main>
      <Footer />
    </>
  );
}
