function ShippingIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect x="1" y="6" width="14" height="11"/><path d="M15 9h4l3 3v5h-7z"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/></svg>;
}
function LockIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect x="4" y="11" width="16" height="9" rx="1"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>;
}
function ShieldIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
}
function HeartIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>;
}

const items = [
  { icon: <ShippingIcon />, label: "Complimentary UK shipping" },
  { icon: <LockIcon />,     label: "Secure checkout" },
  { icon: <ShieldIcon />,   label: "UK Halal Certified" },
  { icon: <HeartIcon />,    label: "Cruelty-free & vegan" },
];

export function TrustStrip() {
  return (
    <section
      aria-label="Trust signals"
      style={{
        backgroundColor: "#FBF8F3",
        borderTop: "1px solid #E8D4AE",
        padding: "clamp(2rem, 5vw, 3rem) clamp(1.5rem, 6vw, 5rem)",
      }}
    >
      <div className="grid grid-cols-2 md:grid-cols-4" style={{
        maxWidth: "1320px", margin: "0 auto", gap: "clamp(1.5rem, 4vw, 2rem)",
      }}>
        {items.map((it) => (
          <div key={it.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", textAlign: "center" }}>
            <span style={{ color: "#6B7B5C" }}>{it.icon}</span>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "#2C2A1F", letterSpacing: "0.02em" }}>
              {it.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
