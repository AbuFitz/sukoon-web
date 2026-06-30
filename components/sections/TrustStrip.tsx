function LeafIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 19c8-1 13-6 14-14-8 1-13 6-14 14z"/><path d="M5 19c2-4 5-8 9-11"/></svg>;
}
function DropIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M12 3c3 4.5 6 8 6 11.5a6 6 0 1 1-12 0C6 11 9 7.5 12 3z"/></svg>;
}
function FaceHairlineIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden><circle cx="12" cy="9" r="4.5"/><path d="M4.5 21c1.5-4 4-6 7.5-6s6 2 7.5 6"/></svg>;
}
function ShieldIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
}

const items = [
  { icon: <LeafIcon />,          label: "Natural & Botanical" },
  { icon: <DropIcon />,          label: "Waterless Formula" },
  { icon: <FaceHairlineIcon />,  label: "Face & Hairline" },
  { icon: <ShieldIcon />,        label: "Ethical & Transparent" },
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
