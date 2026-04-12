"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const MONO = { fontFamily: "'JetBrains Mono', 'Courier New', monospace" };

// Only honest, real projects — replace content with real ones when available
const projects = [
  {
    id: 1,
    label: "Finanzas Personal",
    title: "Sistema de Control Financiero",
    desc: "Aplicación web para gestión y simulación de finanzas personales con reportes visuales e integración de datos de mercado.",
    stack: ["React", "Spring Boot", "PostgreSQL", "Google Sheets API"],
    status: "Proyecto personal",
    accent: "#00fff0",
    link: null,
  },
  {
    id: 2,
    label: "RRHH & Operaciones",
    title: "Automatización de Onboarding",
    desc: "Flujo automatizado de incorporación de empleados, conectando formularios, Google Workspace y notificaciones por email sin intervención manual.",
    stack: ["n8n", "Google Workspace", "Apps Script"],
    status: "Proyecto personal",
    accent: "#a78bfa",
    link: null,
  },
  {
    id: 3,
    label: "E-Commerce",
    title: "Tienda Online para Emprendimiento",
    desc: "Portal de ventas con catálogo autogestionable, carrito de compras e integración con MercadoPago para un emprendimiento local.",
    stack: ["Next.js", "Node.js", "MercadoPago"],
    status: "En desarrollo",
    accent: "#0ea5e9",
    link: null,
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "relative",
        borderRadius: "16px",
        border: "1px solid rgba(255,255,255,0.07)",
        background: "rgba(255,255,255,0.02)",
        overflow: "hidden",
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
      whileHover={{ borderColor: `${project.accent}28` }}
      data-cursor-hover
    >
      {/* Top accent */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: `linear-gradient(90deg, transparent, ${project.accent}60, transparent)` }} />

      {/* Hover glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        style={{ position: "absolute", inset: 0, pointerEvents: "none", background: `radial-gradient(ellipse at 50% 0%, ${project.accent}06 0%, transparent 65%)` }}
      />

      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{
          ...MONO, fontSize: "11px", padding: "4px 10px", borderRadius: "100px",
          color: project.accent, background: `${project.accent}12`, border: `1px solid ${project.accent}28`,
        }}>
          {project.label}
        </span>
        <span style={{ ...MONO, fontSize: "10px", color: "rgba(255,255,255,0.25)", padding: "4px 8px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.07)" }}>
          {project.status}
        </span>
      </div>

      {/* Content */}
      <div style={{ flex: 1 }}>
        <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#fff", marginBottom: "10px", letterSpacing: "-0.02em" }}>
          {project.title}
        </h3>
        <p style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.48)", lineHeight: 1.65 }}>
          {project.desc}
        </p>
      </div>

      {/* Stack */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        {project.stack.map((tech) => (
          <span key={tech} style={{ ...MONO, fontSize: "11px", padding: "4px 10px", borderRadius: "6px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.4)" }}>
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="projects" style={{ padding: "120px 0", borderTop: "1px solid rgba(255,255,255,0.05)" }} ref={ref}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "56px" }}
        >
          <p style={{ ...MONO, fontSize: "11px", color: "#00fff0", marginBottom: "16px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            03 — Proyectos
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", alignItems: "end" }}>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "700", color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.08 }}>
              Lo que hemos{" "}
              <span style={{ color: "rgba(255,255,255,0.3)" }}>construido.</span>
            </h2>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.38)", lineHeight: 1.7 }}>
              Proyectos propios y desarrollos en curso. Cada uno refleja una solución real a un problema concreto.
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* Honest note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ ...MONO, fontSize: "12px", color: "rgba(255,255,255,0.2)", textAlign: "center", marginTop: "40px" }}
        >
          Estudio en crecimiento · Tu proyecto puede ser el próximo caso de éxito
        </motion.p>
      </div>
    </section>
  );
}
