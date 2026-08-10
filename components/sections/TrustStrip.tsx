import { Leaf, MapPin, ShieldCheck, Truck } from "lucide-react";

const items = [
  { icon: Truck,       label: "Free Delivery",  tagline: "On UK orders over £40" },
  { icon: Leaf,        label: "Vegan",          tagline: "Cruelty-free, always" },
  { icon: ShieldCheck, label: "Fragrance-Free", tagline: "No synthetic perfumes" },
  { icon: MapPin,      label: "Made in the UK", tagline: "Formulated & manufactured" },
];

const DIVIDER = "1px solid #E3E3DF";

export function TrustStrip() {
  return (
    <section
      aria-label="Trust signals"
      style={{
        backgroundColor: "#F5F5F3",
        borderTop: DIVIDER,
        borderBottom: DIVIDER,
      }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 clamp(1.25rem, 3vw, 2.5rem)" }}>

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
              <item.icon style={{ flexShrink: 0, width: 24, height: 24, color: "#111111" }} strokeWidth={1.5} aria-hidden />
              <div>
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#111111",
                  margin: "0 0 0.25rem",
                }}>
                  {item.label}
                </p>
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8125rem",
                  lineHeight: 1.5,
                  color: "#676764",
                  margin: 0,
                }}>
                  {item.tagline}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile — stacked horizontally, first three shown */}
        <div className="flex md:hidden">
          {items.slice(0, 3).map((item, i, arr) => (
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
              <item.icon style={{ width: 20, height: 20, color: "#111111" }} strokeWidth={1.5} aria-hidden />
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.5625rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#111111",
                margin: 0,
              }}>
                {item.label}
              </p>
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.6875rem",
                lineHeight: 1.4,
                color: "#676764",
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
