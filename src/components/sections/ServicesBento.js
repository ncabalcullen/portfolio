"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const MONO = { fontFamily: "'JetBrains Mono', 'Courier New', monospace" };

const tiles = [
  {
    id: "web",
    gridArea: "web",
    title: "Desarrollo Web & Apps",
    question: "¿Necesitás una web o app a medida?",
    desc: "Aplicaciones modernas, webs corporativas y e-commerce de alto rendimiento.",
    examples: ["Sitios Institucionales", "E-Commerce", "Web Apps", "Landing Pages", "Portales B2B"],
    icon: "⬡",
    accent: "#00fff0",
    tag: "Fullstack Dev",
    metric: { value: "< 2s", label: "Tiempo de carga medio" },
  },
  {
    id: "automation",
    gridArea: "automation",
    title: "Automatización de Procesos",
    question: "¿Perdés horas en tareas manuales?",
    desc: "Workflows inteligentes que conectan tus herramientas y eliminan el trabajo repetitivo.",
    examples: ["Onboarding de clientes", "Carga de datos automática", "Sincronización de sistemas", "Reportes automatizados"],
    icon: "⟳",
    accent: "#a78bfa",
    tag: "n8n · Zapier",
    metric: { value: "80%", label: "Menos tareas manuales" },
  },
  {
    id: "cloud",
    gridArea: "cloud",
    title: "Administración Cloud",
    question: "¿Tu infraestructura crece sin control?",
    desc: "Gestión proactiva y segura de tus plataformas cloud empresariales.",
    examples: ["Migración a la nube", "Gestión de M365 / Workspace", "Seguridad y MDM (Intune)", "Auditoría de costos"],
    icon: "◈",
    accent: "#f59e0b",
    tag: "Cloud & DevSecOps",
    metric: { value: "99.9%", label: "Uptime garantizado" },
  },
  {
    id: "backend",
    gridArea: "backend",
    title: "Backend & APIs",
    question: "¿Necesitás potencia en el servidor?",
    desc: "Bases de datos optimizadas y microservicios diseñados para soportar alta demanda.",
    examples: ["Desarrollo de APIs REST", "Arquitectura de microservicios", "Optimización de bases de datos", "Integraciones de terceros"],
    icon: "⌬",
    accent: "#0ea5e9",
    tag: "Node · Java · SQL",
    metric: { value: "API", label: "Rendimiento y escala" },
  },
  {
    id: "integral",
    gridArea: "integral",
    title: "Servicio Integral / Proyecto Llave en Mano",
    question: "¿Tenés una idea completa y necesitás un equipo técnico que la ejecute?",
    desc: "Desde la recolección de requerimientos y diseño de arquitectura, hasta el despliegue final y la configuración del entorno cloud. Actuamos como tu equipo de tecnología dedicado.",
    examples: ["Sistemas ERP/CRM a medida", "Startups y MVPs completos", "Plataformas SaaS completas", "Transformación digital completa"],
    icon: "◉",
    accent: "#00fff0",
    tag: "Solución End-to-End",
    metric: { value: "360°", label: "Cobertura total" },
    featured: true,
  },
];

// Grid template areas — bento layout (3 cols)
const gridStyles = {
  display: "grid",
  gap: "16px",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridTemplateAreas: `
    "web      web      automation"
    "cloud    backend  automation"
    "integral integral integral"
  `,
};

const gridAreaMap = {
  web: "web",
  automation: "automation",
  cloud: "cloud",
  backend: "backend",
  integral: "integral",
};

function BentoTile({ tile, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
      style={{
        gridArea: gridAreaMap[tile.id],
        position: "relative",
        borderRadius: "16px",
        border: tile.featured
          ? `1px solid ${tile.accent}30`
          : "1px solid rgba(255,255,255,0.07)",
        background: tile.featured
          ? `linear-gradient(135deg, ${tile.accent}08 0%, rgba(255,255,255,0.02) 100%)`
          : "rgba(255,255,255,0.025)",
        overflow: "hidden",
        transition: "border-color 0.4s, background 0.4s",
      }}
      whileHover={{
        borderColor: tile.featured ? `${tile.accent}50` : "rgba(255,255,255,0.14)",
      }}
      data-cursor-hover
    >
      {/* Top accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: `linear-gradient(90deg, transparent, ${tile.accent}80, transparent)`,
        }}
      />

      <div style={{ padding: "32px", height: "100%", display: "flex", flexDirection: "column" }}>
        {/* Header row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
          <span style={{ fontSize: "28px", color: tile.accent }}>{tile.icon}</span>
        </div>

        {/* Body */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
          <p style={{ ...MONO, fontSize: "11px", color: "rgba(255,255,255,0.4)" }}>
            {tile.question}
          </p>
          <h3 style={{ fontSize: "17px", fontWeight: "600", color: "#fff", letterSpacing: "-0.02em" }}>
            {tile.title}
          </h3>
          <p style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.48)", lineHeight: "1.65", marginBottom: "4px" }}>
            {tile.desc}
          </p>

          {/* Examples */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto" }}>
            {tile.examples.map((ex) => (
              <span key={ex} style={{
                fontSize: "12px",
                color: "rgba(255,255,255,0.55)",
                padding: "3px 8px",
                borderRadius: "6px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                display: "inline-flex",
                alignItems: "center",
              }}>
                <span style={{ color: tile.accent, marginRight: "5px", opacity: 0.5 }}>✓</span> {ex}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "20px", marginTop: "24px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <span
            style={{
              ...MONO,
              fontSize: "11px",
              padding: "4px 10px",
              borderRadius: "100px",
              color: tile.accent,
              background: `${tile.accent}12`,
              border: `1px solid ${tile.accent}28`,
            }}
          >
            {tile.tag}
          </span>
          <span style={{ ...MONO, fontSize: "11px", color: "rgba(255,255,255,0.25)" }}>
            DETALLES →
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesBento() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="services" style={{ padding: "120px 0", borderTop: "1px solid rgba(255,255,255,0.05)", position: "relative" }} ref={ref}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "56px" }}
        >
          <p style={{ ...MONO, fontSize: "11px", color: "#00fff0", marginBottom: "16px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            02 — Servicios
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "700", color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.08 }}>
              Tus necesidades resueltas.
            </h2>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.38)", maxWidth: "360px", lineHeight: 1.65 }}>
              Desarrollamos soluciones prácticas enfocadas en solucionar tus problemas del día a día.
            </p>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div style={gridStyles}>
          {tiles.map((tile, i) => (
            <BentoTile key={tile.id} tile={tile} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
