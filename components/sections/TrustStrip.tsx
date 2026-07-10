import Image from "next/image";

const items = [
  { src: "/icons/icon-natural.svg",     label: "Natural",     tagline: "100% natural ingredients",  mobile: true  },
  { src: "/icons/icon-ethical.svg",     label: "Ethical",     tagline: "Vegan & cruelty free",       mobile: true  },
  { src: "/icons/icon-pure.svg",        label: "Pure",        tagline: "No harmful chemicals",       mobile: true  },
  { src: "/icons/icon-sustainable.svg", label: "Sustainable", tagline: "Eco-friendly packaging",     mobile: false },
];

export function TrustStrip() {
  return (
    <section aria-label="Trust signals" style={{ backgroundColor: "#F7F4EF", borderBottom: "1px solid #EDE7DC" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>

        {/* Desktop — all 4 */}
        <div className="hidden md:grid" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>
          {items.map((item, i) => (
            <div key={item.label} style={{
              padding: "2rem clamp(1.5rem, 3vw, 3rem)",
              display: "flex", alignItems: "center", gap: "1.25rem",
              borderRight: i < items.length - 1 ? "1px solid #EDE7DC" : "none",
            }}>
              <div style={{ flexShrink: 0, width: 32, height: 32, position: "relative", opacity: 0.85 }}>
                <Image src={item.src} alt={item.label} fill sizes="32px" />
              </div>
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
          ))}
        </div>

        {/* Mobile — first 3 only, inline */}
        <div className="flex md:hidden">
          {items.filter(item => item.mobile).map((item, i, arr) => (
            <div key={item.label} style={{
              flex: 1,
              padding: "1.375rem 0.75rem",
              display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", textAlign: "center",
              borderRight: i < arr.length - 1 ? "1px solid #EDE7DC" : "none",
            }}>
              <div style={{ width: 26, height: 26, position: "relative", opacity: 0.85 }}>
                <Image src={item.src} alt={item.label} fill sizes="26px" />
              </div>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "0.475rem", fontWeight: 700,
                letterSpacing: "0.13em", textTransform: "uppercase", color: "#2C2A1F", margin: 0,
              }}>
                {item.label}
              </p>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "0.6875rem", color: "#8A8275", margin: 0, lineHeight: 1.4,
              }}>
                {item.tagline}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
