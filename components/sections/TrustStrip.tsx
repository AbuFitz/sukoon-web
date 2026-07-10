import React from "react";
import Image from "next/image";

const items = [
  { src: "/icons/icon-natural.svg",     label: "Natural",     tagline: "100% natural ingredients", showMobile: true  },
  { src: "/icons/icon-ethical.svg",     label: "Ethical",     tagline: "Vegan & cruelty free",      showMobile: true  },
  { src: "/icons/icon-pure.svg",        label: "Pure",        tagline: "No harmful chemicals",      showMobile: true  },
  { src: "/icons/icon-sustainable.svg", label: "Sustainable", tagline: "Eco-friendly packaging",    showMobile: false },
];

export function TrustStrip() {
  return (
    <section aria-label="Trust signals" style={{ backgroundColor: "#FFFFFF", borderTop: "1px solid #E8E2D8", borderBottom: "1px solid #E8E2D8" }}>

      {/* Desktop */}
      <div className="hidden md:grid" style={{
        maxWidth: "1320px", margin: "0 auto",
        gridTemplateColumns: "repeat(4, 1fr)",
      }}>
        {items.map((item, i) => (
          <React.Fragment key={item.label}>
            <div style={{
              padding: "clamp(2.5rem, 4vw, 3.5rem) clamp(2rem, 3vw, 3rem)",
              display: "flex", flexDirection: "column", gap: "1.25rem",
              borderRight: i < items.length - 1 ? "1px solid #E8E2D8" : "none",
            }}>
              <Image src={item.src} alt="" width={32} height={32} style={{ objectFit: "contain" }} />
              <div>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 700,
                  letterSpacing: "0.14em", textTransform: "uppercase", color: "#2C2A1F",
                  marginBottom: "0.375rem",
                }}>
                  {item.label}
                </p>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "0.875rem",
                  color: "#98A47D", lineHeight: 1.55,
                }}>
                  {item.tagline}
                </p>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Mobile — 3 items, horizontal scroll if needed */}
      <div className="flex md:hidden" style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" as never }}>
        {items.filter(item => item.showMobile).map((item, i) => (
          <div key={item.label} style={{
            flex: "0 0 auto", width: "calc(100vw / 3)",
            padding: "1.75rem 1.25rem",
            display: "flex", flexDirection: "column", gap: "0.875rem",
            borderRight: i < 2 ? "1px solid #E8E2D8" : "none",
          }}>
            <Image src={item.src} alt="" width={26} height={26} style={{ objectFit: "contain" }} />
            <div>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "0.5rem", fontWeight: 700,
                letterSpacing: "0.14em", textTransform: "uppercase", color: "#2C2A1F",
                marginBottom: "0.25rem",
              }}>
                {item.label}
              </p>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "0.6875rem",
                color: "#98A47D", lineHeight: 1.5,
              }}>
                {item.tagline}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
