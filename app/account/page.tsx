import { AccountForm } from "@/components/nav/AccountForm";

const INK  = "#111110";
const LINE = "#E3E1DA";

export default function AccountPage() {
  return (
    <div style={{ minHeight: "100dvh", backgroundColor: "#FFFFFF" }}>
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "1.5rem clamp(1.25rem, 5vw, 2rem)", borderBottom: `1px solid ${LINE}`,
      }}>
        <span style={{ fontFamily: "var(--font-body)", fontSize: "1.0625rem", fontWeight: 700, letterSpacing: "0.01em", color: INK }}>
          Account
        </span>
        <a href="/" aria-label="Close" style={{ color: INK, display: "flex" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
            <line x1="5" y1="5" x2="19" y2="19" /><line x1="19" y1="5" x2="5" y2="19" />
          </svg>
        </a>
      </div>
      <div style={{ padding: "1.75rem clamp(1.25rem, 5vw, 2rem) 2.25rem" }}>
        <AccountForm />
      </div>
    </div>
  );
}
