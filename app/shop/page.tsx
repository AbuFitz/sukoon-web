import { redirect } from "next/navigation";

export const metadata = {
  title: "Shop — Sukoon",
  description: "The Daily Solace Fluid — one formula, two sizes.",
};

export default function ShopPage() {
  redirect("/#fluid");
}
