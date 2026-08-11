"use client";

const INK   = "#0D0F10";
const LINE  = "#DCE1E3";
const CREAM = "#FFFFFF";

export function Panel({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: React.ReactNode }) {
  return (
    <div aria-hidden={!open} style={{ position: "fixed", inset: 0, zIndex: 80, pointerEvents: open ? "auto" : "none" }}>
      <div
        onClick={onClose}
        style={{
          position: "absolute", inset: 0,
          backgroundColor: "rgba(17,17,16,0.45)",
          opacity: open ? 1 : 0,
          transition: "opacity 0.35s ease",
        }}
      />
      <div
        className={`w-[88vw] max-w-[420px] transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? "translate-x-0" : "translate-x-[calc(100%+24px)]"}`}
        style={{
          position: "fixed",
          top: 12, right: 12, bottom: 12,
          borderRadius: 12,
          backgroundColor: CREAM,
          display: "flex", flexDirection: "column",
          overflow: "hidden",
          boxShadow: "0 24px 60px rgba(17,17,16,0.22)",
        }}
      >
        <div style={{
          display: "flex", alignItems: "center",
          justifyContent: title ? "space-between" : "flex-end",
          padding: "1.25rem clamp(1.25rem, 4vw, 2rem)",
          borderBottom: `1px solid ${LINE}`, flexShrink: 0,
        }}>
          {title && (
            <span style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 600, color: INK }}>{title}</span>
          )}
          <button aria-label="Close panel" onClick={onClose} style={{
            width: 36, height: 36, borderRadius: 8,
            background: "#ECEFF1", border: "none", color: INK, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center", padding: 0,
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
