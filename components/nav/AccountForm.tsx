"use client";

import { useState } from "react";
import { useCustomer } from "@/lib/customer-context";

const INK   = "#0D0F10";
const MUTED = "#8A9296";
const LINE  = "#DCE1E3";
const ERROR = "#B3261E";

const fieldStyle: React.CSSProperties = {
  width: "100%", padding: "0.875rem 1.25rem",
  fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: INK,
  border: `1px solid ${LINE}`, borderRadius: 8, outline: "none", backgroundColor: "#F4F6F7",
};

export function AccountForm() {
  const { signIn, signUp, loading } = useCustomer();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      if (mode === "signin") {
        await signIn(email, password);
      } else {
        await signUp(email, password, firstName, lastName);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#4A5256", lineHeight: 1.6, marginBottom: "1.75rem" }}>
        {mode === "signin"
          ? "Sign in to track your order, save your details, and join the waitlist for early access."
          : "Create an account to track orders and save your details."}
      </p>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
        {mode === "signup" && (
          <div style={{ display: "flex", gap: "0.875rem" }}>
            <input
              type="text" placeholder="First name" autoComplete="given-name" required
              value={firstName} onChange={e => setFirstName(e.target.value)}
              style={fieldStyle}
            />
            <input
              type="text" placeholder="Last name" autoComplete="family-name" required
              value={lastName} onChange={e => setLastName(e.target.value)}
              style={fieldStyle}
            />
          </div>
        )}
        <input
          type="email" placeholder="Email address" autoComplete="email" required
          value={email} onChange={e => setEmail(e.target.value)}
          style={fieldStyle}
        />
        <input
          type="password" placeholder="Password" autoComplete={mode === "signin" ? "current-password" : "new-password"} required
          value={password} onChange={e => setPassword(e.target.value)}
          style={fieldStyle}
        />

        {error && (
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: ERROR, margin: 0 }}>
            {error}
          </p>
        )}

        <button type="submit" disabled={loading} className="btn btn-dark" style={{ marginTop: "0.375rem", opacity: loading ? 0.6 : 1 }}>
          {loading ? "Please wait…" : mode === "signin" ? "Sign In" : "Create Account"}
        </button>
      </form>

      <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", margin: "1.75rem 0" }}>
        <span style={{ flex: 1, height: "1px", backgroundColor: LINE }} />
        <span style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 600, color: MUTED }}>
          {mode === "signin" ? "New here" : "Already have an account"}
        </span>
        <span style={{ flex: 1, height: "1px", backgroundColor: LINE }} />
      </div>

      <button
        type="button"
        className="btn btn-outline"
        style={{ width: "100%" }}
        onClick={() => { setMode(m => m === "signin" ? "signup" : "signin"); setError(null); }}
      >
        {mode === "signin" ? "Create Account" : "Sign In Instead"}
      </button>
    </>
  );
}
