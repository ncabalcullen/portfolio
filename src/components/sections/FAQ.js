"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const MONO = { fontFamily: "'JetBrains Mono', 'Courier New', monospace" };

const faqs = [
  {
    q: "¿Cuánto tarda un proyecto típico?",
    a: "Depende del alcance. Un sitio web simple puede estar listo en 2 a 3 semanas. Proyectos más complejos los planificamos en etapas con entregas parciales desde el primer sprint.",
  },
  {
    q: "¿Trabajan de forma remota?",
    a: "Sí, trabajamos 100% en remoto. Nos comunicamos por la plataforma que prefieras (WhatsApp, Slack, email) y hacemos reuniones de seguimiento cuando necesitás.",
  },
  {
    q: "¿Ofrecen soporte después del lanzamiento?",
    a: "Sí. Siempre incluimos un período de soporte post-entrega para corregir cualquier detalle. Podemos acordar también un plan de mantenimiento continuo si lo necesitás.",
  },
  {
    q: "¿Cuánto cuesta un proyecto?",
    a: "El costo depende del alcance y la complejidad. Hacemos una consulta inicial sin costo para entender qué necesitás y luego te enviamos una propuesta detallada y sin compromiso.",
  },
  {
    q: "¿Pueden trabajar sobre sistemas que ya existen?",
    a: "Por supuesto. Podemos integrar nuevos módulos, automatizar procesos o mejorar el rendimiento de aplicaciones y sistemas que ya tenés funcionando.",
  },
];

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 0", background: "none", border: "none", textAlign: "left", cursor: "none" }}
        data-cursor-hover
      >
        <span style={{ fontSize: "14px", fontWeight: "500", color: open ? "#fff" : "rgba(255,255,255,0.75)", paddingRight: "32px", transition: "color 0.2s" }}>
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ flexShrink: 0, width: "24px", height: "24px", borderRadius: "50%", border: `1px solid ${open ? "rgba(0,255,240,0.3)" : "rgba(255,255,255,0.1)"}`, display: "flex", alignItems: "center", justifyContent: "center", color: open ? "#00fff0" : "rgba(255,255,255,0.3)", fontSize: "16px", lineHeight: 1, transition: "border-color 0.2s, color 0.2s" }}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p style={{ paddingBottom: "20px", fontSize: "13.5px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="faq" style={{ padding: "120px 0", borderTop: "1px solid rgba(255,255,255,0.05)" }} ref={ref}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "80px", alignItems: "start" }}>

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p style={{ ...MONO, fontSize: "11px", color: "#00fff0", marginBottom: "16px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              05 — FAQ
            </p>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", fontWeight: "700", color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              Preguntas{" "}
              <span style={{ color: "rgba(255,255,255,0.3)" }}>frecuentes.</span>
            </h2>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.38)", lineHeight: 1.7, marginTop: "20px" }}>
              ¿Tenés otra duda? Escribinos y te respondemos a la brevedad.
            </p>
          </motion.div>

          {/* Right — Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {faqs.map((f, i) => (
              <FAQItem key={i} item={f} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
