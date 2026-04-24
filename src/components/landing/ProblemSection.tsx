import { motion } from "framer-motion";
import { Clock, MessageSquareX, CalendarX, UserX } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Tardas en responder y los clientes se van",
    desc: "Cuando contestas, muchos ya han llamado a otro.\n\nGana el primero que responde. Punto.",
    accent: "#c6990c",
    iconBg: "rgba(198,153,12,0.1)",
    badgeBg: "rgba(198,153,12,0.1)",
    stat: "El 78% elige al primero en responder",
  },
  {
    icon: MessageSquareX,
    title: "Mensajes por todos lados y se te escapan",
    desc: "WhatsApp, Instagram, email, formulario de la web…\n\nAl final algo se pierde y con ello, un cliente.",
    accent: "#03a8a8",
    iconBg: "rgba(3,168,168,0.1)",
    badgeBg: "rgba(3,168,168,0.1)",
    stat: "Hasta 4 canales sin unificar",
  },
  {
    icon: CalendarX,
    title: "Pierdes horas reservando citas a mano",
    desc: "Llamadas, mensajes y cuadrar huecos en la agenda.\n\nTiempo que tú o tu equipo no estáis dedicando a vuestros clientes.",
    accent: "#9b4ad4",
    iconBg: "rgba(155,74,212,0.1)",
    badgeBg: "rgba(155,74,212,0.1)",
    stat: "+3h/día en gestión manual",
  },
  {
    icon: UserX,
    title: "Si no estás tú, no entra ningún cliente",
    desc: "Tu negocio depende de que alguien esté pendiente del móvil todo el día.\n\nAsí no se puede crecer.",
    accent: "#1a1a1a",
    iconBg: "rgba(26,26,26,0.06)",
    badgeBg: "rgba(26,26,26,0.08)",
    stat: "Sin sistema = sin escala",
  },
];

const ProblemSection = () => (
  <section id="problem" className="py-20 md:py-28 bg-background relative overflow-hidden">
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-6"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold uppercase tracking-wider mb-6">
          ¿Te suena familiar?
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
          Por qué tu negocio{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #c6990c 0%, #8a6200 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            pierde clientes
          </span>{" "}
          sin darse cuenta
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-center mb-14 max-w-2xl mx-auto"
      >
        <p className="text-muted-foreground text-lg mb-1">No es que no trabajes lo suficiente.</p>
        <p className="text-muted-foreground text-lg">
          Es que tu web y tus canales tienen fugas. En la auditoría te las enseñamos.
        </p>
      </motion.div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 mx-auto"
        style={{ maxWidth: "860px", gap: "16px" }}
      >
        {problems.map(({ icon: Icon, title, desc, accent, iconBg, badgeBg, stat }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -3, boxShadow: "0 12px 36px rgba(0,0,0,0.07)" }}
            className="relative bg-white transition-all duration-300"
            style={{
              border: "1px solid rgba(26,26,26,0.1)",
              borderRadius: "20px",
              padding: "28px 26px",
            }}
          >
            {/* Vertical accent bar */}
            <span
              aria-hidden
              style={{
                position: "absolute",
                left: 0,
                top: 24,
                bottom: 24,
                width: "3px",
                borderRadius: "0 2px 2px 0",
                background: accent,
              }}
            />

            <div
              className="flex items-center justify-center mb-5"
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "10px",
                background: iconBg,
              }}
            >
              <Icon className="h-5 w-5" style={{ color: accent }} />
            </div>

            <h3 className="font-display font-semibold text-foreground mb-3 text-xl leading-snug">
              {title}
            </h3>

            {desc.split("\n\n").map((paragraph, idx) => (
              <p key={idx} className="text-sm text-muted-foreground mb-2 last:mb-0 leading-relaxed">
                {paragraph}
              </p>
            ))}

            <span
              className="inline-flex"
              style={{
                fontSize: "12px",
                fontWeight: 500,
                padding: "4px 10px",
                borderRadius: "8px",
                marginTop: "14px",
                background: badgeBg,
                color: accent,
              }}
            >
              {stat}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
