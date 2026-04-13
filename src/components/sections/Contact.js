"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const MONO = { fontFamily: "'JetBrains Mono', 'Courier New', monospace" };

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    // TODO: connect to Formspree / EmailJS
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  };

  const inputStyle = {
    width: "100%",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "10px",
    padding: "12px 16px",
    fontSize: "14px",
    color: "#e8e8f0",
    outline: "none",
    fontFamily: "inherit",
    transition: "border-color 0.2s",
  };

  return (
    <section id="contact" style={{ padding: "120px 0", borderTop: "1px solid rgba(255,255,255,0.05)" }} ref={ref}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "80px", alignItems: "start" }}>

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            <div>
              <p style={{ ...MONO, fontSize: "11px", color: "#00fff0", marginBottom: "16px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                06 — Contacto
              </p>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", fontWeight: "700", color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                Contanos tu idea.
              </h2>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.42)", lineHeight: 1.7, marginTop: "16px" }}>
                Sin compromiso. Hacemos una consulta inicial para entender qué necesitás y te enviamos una propuesta clara en 48 horas.
              </p>
            </div>

            {/* Contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { key: "EMAIL", val: "hola@devsystem.studio" },
                { key: "BASE", val: "Buenos Aires, Argentina" },
                { key: "MODALIDAD", val: "100% remoto" },
              ].map(({ key, val }) => (
                <div key={key} style={{ display: "flex", gap: "16px", alignItems: "center", padding: "14px 18px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
                  <span style={{ ...MONO, fontSize: "10px", color: "#00fff0", flexShrink: 0 }}>{key}</span>
                  <span style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.6)" }}>{val}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {status === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ padding: "60px 40px", borderRadius: "16px", border: "1px solid rgba(0,255,240,0.2)", background: "rgba(0,255,240,0.04)", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}
              >
                <span style={{ fontSize: "40px" }}>✓</span>
                <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#fff" }}>¡Mensaje recibido!</h3>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)" }}>Te respondemos en las próximas 48 horas.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                {[
                  { id: "name", label: "NOMBRE / EMPRESA", type: "text", placeholder: "Ej: Juan García o Mi Empresa SRL" },
                  { id: "email", label: "EMAIL", type: "email", placeholder: "hola@tuempresa.com" },
                ].map((f) => (
                  <div key={f.id} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <label style={{ ...MONO, fontSize: "10px", color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em" }}>
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      required
                      value={form[f.id]}
                      onChange={(e) => setForm((p) => ({ ...p, [f.id]: e.target.value }))}
                      placeholder={f.placeholder}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(0,255,240,0.4)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>
                ))}

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={{ ...MONO, fontSize: "10px", color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em" }}>
                    ¿QUÉ NECESITÁS?
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    placeholder="Contanos brevemente qué querés resolver o construir..."
                    style={{ ...inputStyle, resize: "none" }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(0,255,240,0.4)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{ width: "100%", padding: "14px", borderRadius: "10px", fontWeight: "600", fontSize: "14px", color: "#0a0a0f", background: status === "sending" ? "rgba(0,255,240,0.6)" : "#00fff0", border: "none", boxShadow: "0 0 24px rgba(0,255,240,0.22)", cursor: "none", transition: "opacity 0.2s" }}
                  data-cursor-hover
                >
                  {status === "sending" ? "Enviando..." : "Enviar consulta →"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
