import React from "react";

const items = [
  { label: "Natural",     tagline: "100% natural ingredients" },
  { label: "Ethical",     tagline: "Vegan & cruelty free"     },
  { label: "Pure",        tagline: "No harmful chemicals"     },
  { label: "Sustainable", tagline: "Eco-friendly packaging"   },
];

export function TrustStrip() {
  return (
    <section aria-label="Trust signals" style={{ backgroundColor: "#F7F4EF", borderBottom: "1px solid #EDE7DC" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>

        {/* Desktop */}
        <div className="hidden md:grid" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>
          {items.map((item, i) => (
            <React.Fragment key={item.label}>
              <div style={{
                padding: "1.875rem clamp(1.5rem, 3vw, 3rem)",
                display: "flex", alignItems: "center", gap: "1.125rem",
                borderRight: i < items.length - 1 ? "1px solid #EDE7DC" : "none",
              }}>
                <span style={{
                  width: 6, height: 6, borderRadius: "50%", backgroundColor: "#98A47D", flexShrink: 0,
                }} />
                <div>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 700,
                    letterSpacing: "0.14em", textTransform: "uppercase", color: "#2C2A1F", margin: "0 0 0.2rem",
                  }}>
                    {item.label}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "#8A8275", margin: 0,
                  }}>
                    {item.tagline}
                  </p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Mobile — scrollable */}
        <div className="flex md:hidden" style={{ overflowX: "auto", scrollSnapType: "x mandatory" }}>
          {items.slice(0, 3).map((item, i) => (
            <div key={item.label} style={{
              flex: "0 0 66vw", scrollSnapAlign: "start",
              padding: "1.375rem 1.25rem",
              display: "flex", alignItems: "center", gap: "0.875rem",
              borderRight: i < 2 ? "1px solid #EDE7DC" : "none",
            }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: "#98A47D", flexShrink: 0 }} />
              <div>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "0.5rem", fontWeight: 700,
                  letterSpacing: "0.14em", textTransform: "uppercase", color: "#2C2A1F", margin: "0 0 0.15rem",
                }}>
                  {item.label}
                </p>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "#8A8275", margin: 0,
                }}>
                  {item.tagline}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
