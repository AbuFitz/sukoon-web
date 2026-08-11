"use client";

import { useCustomer } from "@/lib/customer-context";
import { AccountForm } from "./AccountForm";
import { AccountSignedIn } from "./AccountSignedIn";

export function AccountPageContent() {
  const { customer } = useCustomer();

  return (
    <div style={{ maxWidth: 440, margin: "0 auto" }}>
      {/* Page header */}
      <div style={{ marginBottom: "1.25rem", textAlign: "center" }}>
        <h1 style={{
          fontFamily: "var(--font-body)", fontWeight: 700,
          fontSize: "clamp(1.875rem, 4vw, 2.5rem)",
          lineHeight: 1.05, letterSpacing: "-0.03em",
          color: "#0D0F10", margin: 0,
        }}>
          {customer ? `Welcome back, ${customer.firstName ?? "there"}.` : "Sign in."}
        </h1>
      </div>

      <div className="card" style={{ padding: "clamp(1.75rem, 4vw, 2.25rem)" }}>
        {customer ? <AccountSignedIn /> : <AccountForm />}
      </div>
    </div>
  );
}
