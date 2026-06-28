import { SiteNav } from "@/components/nav/SiteNav";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { LifestyleStrip } from "@/components/sections/LifestyleStrip";
import { EmailCapture } from "@/components/sections/EmailCapture";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <HeroSection />
        <TrustStrip />
        <LifestyleStrip />
        <EmailCapture />
      </main>
    </>
  );
}
