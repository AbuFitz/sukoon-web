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
      <main style={{
        minHeight: "70vh",
        backgroundColor: "#F5F5F3",
      }}>
        <CartView />
      </main>
      <Footer />
    </>
  );
}
