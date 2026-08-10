import { SiteNav } from "@/components/nav/SiteNav";
import { Footer } from "@/components/sections/Footer";
import { AccountForm } from "@/components/nav/AccountForm";
import { DropMark } from "@/components/ui/DropMark";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account — Sukoon",
};

export default function AccountPage() {
  return (
    <>
      <SiteNav />
      <main
        className="stack-panel stack-panel--first stack-panel--last stack-inner"
        style={{ backgroundColor: "#FAFAFA", minHeight: "80vh" }}
      >
        {/* Page header */}
        <div style={{
          padding: "0 clamp(1.5rem, 6vw, 6rem) clamp(2rem, 5vw, 3rem)",
        }}>
          <DropMark size={9} color="#111111" style={{ marginBottom: "0.875rem" }} />
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 600,
            color: "#969690", marginBottom: "0.875rem",
          }}>
            Your Account
          </p>
          <h1 style={{
            fontFamily: "var(--font-body)", fontWeight: 600,
            fontSize: "clamp(2rem, 4vw, 3.25rem)",
            lineHeight: 1.02, letterSpacing: "-0.03em",
            color: "#111111", margin: 0,
          }}>
            Welcome back.
          </h1>
        </div>

        {/* Account form */}
        <div style={{
          maxWidth: 440, margin: "0 auto",
          padding: "clamp(1.5rem, 4vw, 2.5rem) clamp(1.5rem, 5vw, 2rem) clamp(3rem, 6vw, 4.5rem)",
          backgroundColor: "#FFFFFF", borderRadius: 24,
        }}>
          <AccountForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
