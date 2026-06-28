function LeafIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>;
}
function HeartIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>;
}
function DropIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>;
}
function SunIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>;
}
function ShieldIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
}

const principles = [
  { icon: <LeafIcon />, label: "Plant-Derived" },
  { icon: <HeartIcon />, label: "Cruelty Free" },
  { icon: <DropIcon />, label: "Non-Toxic" },
  { icon: <SunIcon />, label: "Ethically Sourced" },
  { icon: <ShieldIcon />, label: "Minimal Formula" },
];

export function PrinciplesStrip() {
  return (
    <section
      style={{
        backgroundColor: "#FBF8F3",
        borderTop: "1px solid #E8E1D8",
        padding: "clamp(3.5rem, 7vw, 7rem) clamp(1.5rem, 6vw, 5rem)",
      }}
    >
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "#9BA584", marginBottom: "1.5rem" }}>
          What We Stand For
        </p>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.875rem, 4vw, 3.25rem)",
            fontWeight: 400,
            letterSpacing: "-0.015em",
            color: "#2A2F1E",
            marginBottom: "clamp(2.5rem, 6vw, 4rem)",
          }}
        >
          Principles, not promises.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5" style={{ gap: "clamp(1.5rem, 4vw, 2.5rem)" }}>
          {principles.map((p) => (
            <div key={p.label} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "50%",
                  border: "1px solid #C4BAB0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#6B7451",
                }}
              >
                {p.icon}
              </div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "#2A2F1E", lineHeight: 1.4 }}>
                {p.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
