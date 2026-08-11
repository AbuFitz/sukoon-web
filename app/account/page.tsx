import { SiteNav } from "@/components/nav/SiteNav";
import { Footer } from "@/components/sections/Footer";
import { AccountForm } from "@/components/nav/AccountForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account — Sukoon",
};

export default function AccountPage() {
  return (
    <>
      <SiteNav />
      <main className="container" style={{ minHeight: "70vh", paddingTop: "clamp(1rem, 2vw, 1.5rem)", paddingBottom: "clamp(1rem, 2vw, 1.25rem)" }}>
        <div style={{ maxWidth: 440, margin: "0 auto" }}>
          {/* Page header */}
          <div style={{ marginBottom: "1.25rem", textAlign: "center" }}>
            <h1 style={{
              fontFamily: "var(--font-body)", fontWeight: 700,
              fontSize: "clamp(1.875rem, 4vw, 2.5rem)",
              lineHeight: 1.05, letterSpacing: "-0.03em",
              color: "#0D0F10", margin: 0,
            }}>
              Welcome back.
            </h1>
          </div>

          {/* Account form */}
          <div className="card" style={{
            padding: "clamp(1.75rem, 4vw, 2.25rem)",
          }}>
            <AccountForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
