import { SiteNav }    from "@/components/nav/SiteNav";
import { Footer }     from "@/components/sections/Footer";
import { AboutContent } from "@/components/sections/AboutContent";

export const metadata = {
  title: "Our Story — Sukoon",
  description: "Why Sukoon exists — the gap in skincare no one was filling, and the one oil built to fill it.",
};

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <main style={{ paddingTop: "calc(1.75rem + 120px)" }}>
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}
