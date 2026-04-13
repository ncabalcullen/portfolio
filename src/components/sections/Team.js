"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const MONO = { fontFamily: "'JetBrains Mono', 'Courier New', monospace" };

const stacks = [
  {
    area: "Frontend",
    accent: "#00fff0",
    icon: "⬡",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    area: "Backend",
    accent: "#a78bfa",
    icon: "⌬",
    items: ["Java Spring Boot", "Node.js", "REST APIs", "PostgreSQL", "MySQL"],
  },
  {
    area: "Automatización",
    accent: "#f59e0b",
    icon: "⟳",
    items: ["n8n", "Google Apps Script", "Zapier", "Webhooks", "Cron Jobs"],
  },
  {
    area: "Cloud & Productividad",
    accent: "#0ea5e9",
    icon: "◈",
    items: ["Microsoft 365", "Google Workspace", "Intune", "Azure AD", "GitHub Actions"],
  },
];

export default function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="about" ref={ref} style={{ padding: "120px 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "64px" }}
        >
          <p style={{ ...MONO, fontSize: "11px", color: "#00fff0", marginBottom: "16px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            01 — Stack tecnológico
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", alignItems: "end" }}>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "700", color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.08 }}>
              Las herramientas{" "}
              <span style={{ color: "rgba(255,255,255,0.3)" }}>
                con las que trabajamos.
              </span>
            </h2>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.38)", lineHeight: 1.7 }}>
              Un equipo completo de desarrollo: cubrimos desde la interfaz del usuario hasta la infraestructura de datos y la automatización de procesos.
            </p>
          </div>
        </motion.div>

        {/* Stack cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
          {stacks.map((stack, i) => (
            <motion.div
              key={stack.area}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: "relative",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.07)",
                background: "rgba(255,255,255,0.025)",
                padding: "28px",
                overflow: "hidden",
              }}
              whileHover={{ borderColor: `${stack.accent}30`, background: "rgba(255,255,255,0.038)" }}
            >
              {/* Top accent */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: `linear-gradient(90deg, transparent, ${stack.accent}70, transparent)` }} />

              {/* Icon */}
              <div style={{
                width: "44px", height: "44px", borderRadius: "12px", marginBottom: "20px",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "20px", color: stack.accent,
                background: `${stack.accent}10`, border: `1px solid ${stack.accent}22`,
              }}>
                {stack.icon}
              </div>

              {/* Area title */}
              <h3 style={{ fontSize: "14px", fontWeight: "600", color: "#fff", marginBottom: "16px", letterSpacing: "-0.02em" }}>
                {stack.area}
              </h3>

              {/* Tech pills */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {stack.items.map((tech) => (
                  <div key={tech} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: stack.accent, opacity: 0.6, flexShrink: 0 }} />
                    <span style={{ ...MONO, fontSize: "12px", color: "rgba(255,255,255,0.55)" }}>{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          style={{
            marginTop: "20px",
            padding: "18px 24px",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.06)",
            background: "rgba(255,255,255,0.015)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <p style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.5)" }}>
            Cobertura completa: <span style={{ color: "rgba(255,255,255,0.75)", fontWeight: "500" }}>Frontend · Backend · Cloud · Automatización</span>
          </p>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            style={{ ...MONO, fontSize: "12px", color: "#00fff0", textDecoration: "none", flexShrink: 0 }}
            data-cursor-hover
          >
            Trabajar juntos →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
