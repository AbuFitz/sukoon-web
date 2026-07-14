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

const BASE_URL = "https://sukoon.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Sukoon — Waterless Face & Hairline Oil | 5 Active Ingredients",
    template: "%s | Sukoon",
  },
  description:
    "The Daily Solace Fluid — 100% waterless face and hairline oil with Black Seed, Olive Squalane, Vitamin B3, Vitamin E and Vanilla. Tackles acne, strengthens your skin barrier and reverses friction-induced hairline thinning. Made in the UK.",
  keywords: [
    "face oil", "black seed oil", "hairline thinning", "waterless skincare",
    "olive squalane", "vitamin b3", "acne face oil", "skin barrier", "UK skincare",
    "natural face oil", "sukoon", "sukoon skin", "daily solace fluid",
    "friction alopecia", "traction alopecia oil", "men skincare", "women skincare",
    "no filler skincare", "5 ingredient skincare",
  ],
  authors: [{ name: "Sukoon Skin", url: BASE_URL }],
  creator: "Sukoon Skin",
  publisher: "Sukoon Skin",
  category: "skincare",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
  openGraph: {
    title: "Sukoon — Waterless Face & Hairline Oil | 5 Active Ingredients",
    description:
      "100% waterless. 5 active ingredients. Made in the UK. The Daily Solace Fluid tackles acne, strengthens your skin barrier and reverses friction-induced hairline thinning — in under 60 seconds.",
    url: BASE_URL,
    siteName: "Sukoon",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sukoon Daily Solace Fluid — Waterless face and hairline oil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sukoon — Waterless Face & Hairline Oil",
    description:
      "100% waterless. 5 active ingredients. Made in the UK. Tackles acne, strengthens your skin barrier and reverses hairline thinning.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sukoon Skin",
  url: "https://sukoon.co.uk",
  logo: "https://sukoon.co.uk/Sukoonlogo.png",
  description: "Sukoon Skin creates waterless, high-performance skincare made in the UK with 5 active ingredients.",
  foundingLocation: { "@type": "Country", name: "United Kingdom" },
  contactPoint: { "@type": "ContactPoint", contactType: "customer service", url: "https://sukoon.co.uk/contact" },
  sameAs: [
    "https://www.instagram.com/sukoonskin",
    "https://www.tiktok.com/@sukoonskin",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
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
