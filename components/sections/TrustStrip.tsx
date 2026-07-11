import Image from "next/image";

const items = [
  { src: "/icons/icon-natural.svg",     label: "Natural",     tagline: "100% natural ingredients",  mobile: true  },
  { src: "/icons/icon-ethical.svg",     label: "Ethical",     tagline: "Vegan & cruelty free",       mobile: true  },
  { src: "/icons/icon-pure.svg",        label: "Pure",        tagline: "No harmful chemicals",       mobile: true  },
  { src: "/icons/icon-sustainable.svg", label: "Sustainable", tagline: "Eco-friendly packaging",     mobile: false },
];

const DIVIDER = "1px solid rgba(180,172,158,0.35)";

export function TrustStrip() {
  return (
    <section
      aria-label="Trust signals"
      style={{
        backgroundColor: "#f5f1e8",
        borderTop: "1px solid rgba(180,172,158,0.3)",
        borderBottom: "1px solid rgba(180,172,158,0.3)",
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 clamp(1.5rem, 3vw, 2.5rem)" }}>

        {/* Desktop — all 4 */}
        <div className="hidden md:grid" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>
          {items.map((item, i) => (
            <div
              key={item.label}
              style={{
                padding: "1.875rem clamp(1rem, 2.5vw, 2rem)",
                display: "flex",
                alignItems: "center",
                gap: "1.125rem",
                borderRight: i < items.length - 1 ? DIVIDER : "none",
              }}
            >
              <div style={{
                flexShrink: 0,
                width: 36,
                height: 36,
                position: "relative",
                opacity: 0.8,
              }}>
                <Image src={item.src} alt="" fill sizes="36px"/>
              </div>
              <div>
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.5rem",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#45543d",
                  margin: "0 0 0.25rem",
                }}>
                  {item.label}
                </p>
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8125rem",
                  lineHeight: 1.5,
                  color: "#78736a",
                  margin: 0,
                }}>
                  {item.tagline}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile — 3 items stacked horizontally */}
        <div className="flex md:hidden">
          {items.filter(item => item.mobile).map((item, i, arr) => (
            <div
              key={item.label}
              style={{
                flex: 1,
                padding: "1.25rem 0.5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.5rem",
                textAlign: "center",
                borderRight: i < arr.length - 1 ? DIVIDER : "none",
              }}
            >
              <div style={{ width: 28, height: 28, position: "relative", opacity: 0.8 }}>
                <Image src={item.src} alt="" fill sizes="28px"/>
              </div>
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.45rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#45543d",
                margin: 0,
              }}>
                {item.label}
              </p>
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.6875rem",
                lineHeight: 1.4,
                color: "#78736a",
                margin: 0,
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
