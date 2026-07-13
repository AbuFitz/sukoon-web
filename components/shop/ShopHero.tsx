import Image from "next/image";

const BRANCH_SRC = "/images/shop/shop-olive-branch.png";

const principles = [
  "Simple Ingredients",
  "No Fillers",
  "Made With Intention",
  "Cruelty Free",
];

export function ShopHero() {
  return (
    <section
      aria-label="Shop"
      style={{
        position: "relative",
        overflow: "hidden",
        isolation: "isolate",
        minHeight: 520,
        backgroundColor: "#faf8f4",
        borderBottom: "1px solid rgba(53,65,47,0.1)",
      }}
    >
      {/* Olive branch — top-right overflow, behind content */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          zIndex: 1,
          top: 40,
          right: -200,
          width: "clamp(600px, 62vw, 1040px)",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        <Image
          src={BRANCH_SRC}
          alt=""
          width={1100}
          height={760}
          priority
          sizes="(min-width: 1200px) 52vw, (min-width: 768px) 58vw, 92vw"
          style={{ display: "block", width: "100%", height: "auto" }}
        />
      </div>

      {/* Content */}
      <div style={{
        position: "relative",
        zIndex: 2,
        maxWidth: 1400,
        margin: "0 auto",
        padding: "calc(1.75rem + 84px + 2.5rem) clamp(2rem, 5vw, 3.5rem) clamp(3rem, 6vw, 4rem)",
        minHeight: 520,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}>
        {/* Heading + copy */}
        <div style={{ maxWidth: 580 }}>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 400,
            fontSize: "clamp(3.25rem, 5vw, 5rem)",
            lineHeight: 0.98, letterSpacing: "-0.03em",
            color: "#252820", margin: 0,
          }}>
            Shop Sukoon
          </h1>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.0625rem", lineHeight: 1.65,
            color: "#4f534a",
            maxWidth: 460,
            marginTop: "1.5rem", marginBottom: 0,
          }}>
            Thoughtful care, made with intention. Simple, effective formulas for your daily ritual.
          </p>
        </div>

        {/* Principles row */}
        <div style={{
          display: "flex", flexWrap: "wrap",
          alignItems: "center",
          marginTop: "clamp(2.5rem, 5vw, 4rem)",
        }}>
          {principles.map((label, i) => (
            <div key={label} style={{
              display: "inline-flex", alignItems: "center",
              padding: i === 0 ? "0 1.5rem 0 0" : "0 1.5rem",
              minHeight: 34,
              borderRight: i < principles.length - 1 ? "1px solid rgba(53,65,47,0.2)" : "none",
              fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 600,
              letterSpacing: "0.11em", textTransform: "uppercase",
              color: "#45543d",
            }}>
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
