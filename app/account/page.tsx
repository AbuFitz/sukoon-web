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
      <main style={{ paddingTop: "calc(1.75rem + 120px)", backgroundColor: "#faf8f3", minHeight: "80vh" }}>
        {/* Page header */}
        <div style={{
          borderBottom: "1px solid #dedfd8",
          padding: "clamp(3rem, 7vw, 4.5rem) clamp(2rem, 7vw, 7rem) clamp(2rem, 5vw, 3rem)",
          backgroundColor: "#FFFFFF",
        }}>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 500,
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: "#78836e", marginBottom: "0.875rem",
          }}>
            Your Account
          </p>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 400,
            fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
            lineHeight: 0.98, letterSpacing: "-0.025em",
            color: "#292b25", margin: 0,
          }}>
            Welcome back.
          </h1>
        </div>

        {/* Account form */}
        <div style={{
          maxWidth: 480, margin: "0 auto",
          padding: "clamp(3rem, 7vw, 5rem) clamp(1.5rem, 5vw, 2rem)",
        }}>
          <AccountForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
