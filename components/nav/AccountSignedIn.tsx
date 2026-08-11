"use client";

import { useState } from "react";
import { useCustomer } from "@/lib/customer-context";

const INK   = "#0D0F10";
const MUTED = "#8A9296";

export function AccountSignedIn() {
  const { customer, signOut, loading } = useCustomer();
  const [signingOut, setSigningOut] = useState(false);

  if (!customer) return null;

  const handleSignOut = async () => {
    setSigningOut(true);
    await signOut();
    setSigningOut(false);
  };

  return (
    <div>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "#4A5256", lineHeight: 1.6, marginBottom: "1.5rem" }}>
        Signed in as
      </p>
      <p style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "1.0625rem", color: INK, margin: "0 0 0.25rem" }}>
        {[customer.firstName, customer.lastName].filter(Boolean).join(" ") || "Your Account"}
      </p>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: MUTED, margin: "0 0 1.75rem" }}>
        {customer.email}
      </p>
      <button
        type="button"
        onClick={handleSignOut}
        disabled={loading || signingOut}
        className="btn btn-outline"
        style={{ width: "100%", opacity: (loading || signingOut) ? 0.6 : 1 }}
      >
        {signingOut ? "Signing out…" : "Sign Out"}
      </button>
    </div>
  );
}
