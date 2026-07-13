import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { CartProvider } from "@/lib/cart-context";
import { AnnouncementBar } from "@/components/sections/AnnouncementBar";
import { CookieBanner } from "@/components/CookieBanner";
import { LoadingScreen } from "@/components/LoadingScreen";
import { ImageGuard } from "@/components/ImageGuard";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sukoon — Black Seed Face Oil",
  description:
    "A lightweight botanical face oil with black seed and argan. Nourishes, calms and supports a healthy glow. Made for everyday ritual.",
  keywords: ["skincare", "face oil", "black seed oil", "natural", "sukoon"],
  openGraph: {
    title: "Sukoon — Black Seed Face Oil",
    description:
      "A lightweight botanical face oil with black seed and argan. Nourishes, calms and supports a healthy glow.",
    siteName: "Sukoon",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} h-full`}>
      <body className="min-h-full">
        <ImageGuard />
        <ScrollProgress />
        <LoadingScreen />
        <AnnouncementBar />
        <CartProvider>{children}</CartProvider>
        <CookieBanner />
      </body>
    </html>
  );
}
