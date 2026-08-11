import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { CartProvider } from "@/lib/cart-context";
import { CustomerProvider } from "@/lib/customer-context";
import { CookieBanner } from "@/components/CookieBanner";
import { ImageGuard } from "@/components/ImageGuard";
import { TabAttention } from "@/components/TabAttention";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const BASE_URL = "https://sukoon.co.uk";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Sukoon Skin — Face & Hairline Oil",
    template: "%s | Sukoon Skin",
  },
  description:
    "The Daily Solace Fluid — a face and hairline oil with Black Seed, Olive Squalane, Vitamin B3, Vitamin E and Vanilla. Tackles acne, strengthens your skin barrier and reverses friction-induced hairline thinning. Made in the UK.",
  keywords: [
    "face oil", "black seed oil", "hairline thinning",
    "olive squalane", "vitamin b3", "acne face oil", "skin barrier", "UK skincare",
    "natural face oil", "sukoon", "sukoon skin", "daily solace fluid",
    "friction alopecia", "traction alopecia oil", "men skincare", "women skincare",
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
    title: "Sukoon Skin — Face & Hairline Oil",
    description:
      "5 active ingredients. Made in the UK. Tackles acne, strengthens your skin barrier and reverses friction-induced hairline thinning.",
    url: BASE_URL,
    siteName: "Sukoon",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Sukoon Daily Solace Fluid" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sukoon — Face & Hairline Oil",
    description: "5 active ingredients. Made in the UK.",
    images: ["/og-image.jpg"],
  },
  alternates: { canonical: BASE_URL },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sukoon Skin",
  url: "https://sukoon.co.uk",
  logo: "https://sukoon.co.uk/logo.png",
  description: "Sukoon Skin creates high-performance skincare made in the UK.",
  foundingLocation: { "@type": "Country", name: "United Kingdom" },
  contactPoint: { "@type": "ContactPoint", contactType: "customer service", url: "https://sukoon.co.uk/contact" },
  sameAs: [
    "https://www.instagram.com/sukoonskin",
    "https://www.tiktok.com/@sukoonskin",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="min-h-full">
        <ImageGuard />
        <TabAttention />
        <CustomerProvider>
          <CartProvider>{children}</CartProvider>
        </CustomerProvider>
        <CookieBanner />
      </body>
    </html>
  );
}
