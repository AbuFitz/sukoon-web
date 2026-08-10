import { DropMark } from "@/components/ui/DropMark";

export function ManifestoSection() {
  return (
    <section className="stack-panel grain" style={{
      backgroundColor: "#111111",
      minHeight: "clamp(440px, 42vw, 560px)",
      display: "flex",
      alignItems: "center",
      padding: "clamp(3rem, 6vw, 5rem) clamp(1.5rem, 6vw, 5rem)",
    }}>
      <DropMark
        size={220}
        color="#FAFAFA"
        style={{ position: "absolute", right: "clamp(-2rem, 2vw, 4rem)", bottom: "clamp(-3rem, -2vw, -1rem)", opacity: 0.05, pointerEvents: "none" }}
      />
      <div style={{ maxWidth: 780, position: "relative" }}>
        <p style={{
          fontFamily: "var(--font-body)",
          fontWeight: 600,
          fontSize: "clamp(2.25rem, 5vw, 4rem)",
          lineHeight: 1.02,
          color: "#FAFAFA",
          margin: "0 0 1.25rem",
          letterSpacing: "-0.035em",
        }}>
          Skin care shouldn&apos;t require a chemistry degree.
        </p>
        <p style={{
          fontFamily: "var(--font-body)",
          fontWeight: 500,
          fontSize: "clamp(1rem, 1.4vw, 1.1875rem)",
          lineHeight: 1.5,
          color: "#9C968A",
          margin: 0,
          letterSpacing: "-0.005em",
        }}>
          Five ingredients. Sixty seconds.
        </p>
      </div>
    </section>
  );
}
