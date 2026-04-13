"use client";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "40px 0" }}>
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
        textAlign: "center"
      }}>
        
        <span style={{ fontFamily: "'JetBrains Mono', 'Courier New', monospace", fontSize: "14px", color: "rgba(255,255,255,0.3)" }}>
          dev<span style={{ color: "rgba(0,255,240,0.6)" }}>system</span>.studio
        </span>

        <span style={{ fontFamily: "'JetBrains Mono', 'Courier New', monospace", fontSize: "12px", color: "rgba(255,255,255,0.2)" }}>
          © {year} — Buenos Aires, Argentina
        </span>

        <div style={{ display: "flex", gap: "24px", justifyContent: "center" }}>
          {["LinkedIn", "GitHub"].map((s) => (
            <a
              key={s}
              href="#"
              style={{
                fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                fontSize: "12px",
                color: "rgba(255,255,255,0.3)",
                textDecoration: "none",
                transition: "color 0.2s"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.3)"; }}
              data-cursor-hover
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
