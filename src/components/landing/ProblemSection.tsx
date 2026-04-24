import { motion } from "framer-motion";
import { Clock, MessageSquareX, CalendarX, UserX } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Tu web recibe visitas, pero no contactos",
    desc: "La gente entra, mira… y se va sin escribir.\n\nNo hay un camino claro que les diga qué hacer.",
    accent: "#c6990c",
    iconBg: "rgba(198,153,12,0.1)",
    badgeBg: "rgba(198,153,12,0.1)",
    stat: "Hasta 9 de cada 10 visitas se pierden",
  },
  {
    icon: MessageSquareX,
    title: "Cuando responden a un mensaje, ya es tarde",
    desc: "WhatsApp, Instagram, email, formulario…\n\nMientras contestas, el cliente ya ha elegido a otro.",
    accent: "#03a8a8",
    iconBg: "rgba(3,168,168,0.1)",
    badgeBg: "rgba(3,168,168,0.1)",
    stat: "El 78% elige al primero en responder",
  },
  {
    icon: CalendarX,
    title: "Pierdes horas gestionando lo de siempre",
    desc: "Atender mensajes, cuadrar citas, hacer seguimiento…\n\nTodo manual, todos los días, sin avanzar.",
    accent: "#9b4ad4",
    iconBg: "rgba(155,74,212,0.1)",
    badgeBg: "rgba(155,74,212,0.1)",
    stat: "+3h al día en tareas repetitivas",
  },
  {
    icon: UserX,
    title: "Tu negocio depende de que tú estés disponible",
    desc: "Si no contestas tú o tu equipo al momento, el cliente se va.\n\nAsí es imposible crecer con tranquilidad.",
    accent: "#1a1a1a",
    iconBg: "rgba(26,26,26,0.06)",
    badgeBg: "rgba(26,26,26,0.08)",
    stat: "Sin sistema, no hay crecimiento",
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
          Por qué tu web{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #c6990c 0%, #8a6200 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            no te trae clientes
          </span>{" "}
          (y cómo arreglarlo)
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-center mb-14 max-w-2xl mx-auto"
      >
        <p className="text-muted-foreground text-lg mb-1">No es por falta de trabajo.</p>
        <p className="text-muted-foreground text-lg">
          Es porque tu web y tus canales no están preparados para convertir.
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
