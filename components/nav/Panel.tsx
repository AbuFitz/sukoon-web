"use client";

const INK  = "#2C2A1F";
const LINE = "#DDD5C8";

export function Panel({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: React.ReactNode }) {
  return (
    <div aria-hidden={!open} style={{ position: "fixed", inset: 0, zIndex: 80, pointerEvents: open ? "auto" : "none" }}>
      <div
        onClick={onClose}
        style={{
          position: "absolute", inset: 0,
          backgroundColor: "rgba(44,42,31,0.4)",
          opacity: open ? 1 : 0,
          transition: "opacity 0.35s ease",
        }}
      />
      <div
        className={`max-h-[85vh] md:max-h-full md:w-[420px] md:rounded-none rounded-t-3xl md:inset-y-0 md:right-0 md:left-auto md:bottom-auto inset-x-0 bottom-0 transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? "translate-y-0 md:translate-x-0" : "translate-y-full md:translate-y-0 md:translate-x-full"}`}
        style={{
          position: "fixed",
          backgroundColor: "#FFFFFF",
          display: "flex", flexDirection: "column",
          boxShadow: "0 -10px 40px rgba(44,42,31,0.18)",
        }}
      >
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "1.5rem clamp(1.25rem, 4vw, 2rem)", borderBottom: `1px solid ${LINE}`, flexShrink: 0,
        }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", color: INK }}>{title}</span>
          <button aria-label={`Close ${title}`} onClick={onClose} style={{
            background: "none", border: "none", color: INK, cursor: "pointer", padding: "0.25rem", display: "flex",
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
              <line x1="5" y1="5" x2="19" y2="19" /><line x1="19" y1="5" x2="5" y2="19" />
            </svg>
          </button>
        </div>
        <div style={{ overflowY: "auto", flex: 1, padding: "1.75rem clamp(1.25rem, 4vw, 2rem) 2.25rem" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
