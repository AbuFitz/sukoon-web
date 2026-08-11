import { SiteNav } from "@/components/nav/SiteNav";
import { Footer } from "@/components/sections/Footer";
import { AccountPageContent } from "@/components/nav/AccountPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account — Sukoon",
};

export default function AccountPage() {
  return (
    <>
      <SiteNav />
      <main className="container" style={{ minHeight: "70vh", paddingTop: "clamp(1rem, 2vw, 1.5rem)", paddingBottom: "clamp(1rem, 2vw, 1.25rem)" }}>
        <AccountPageContent />
      </main>
      <Footer />
    </>
  );
}
