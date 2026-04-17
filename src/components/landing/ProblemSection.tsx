import { motion } from "framer-motion";
import { Clock, MessageSquareX, CalendarX, UserX } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Las respuestas lentas te cuestan clientes",
    desc: "Cuando respondes, muchas veces ya han elegido otra opción.\n\nHoy, quien responde primero… se queda con el cliente.",
    iconColor: "text-accent",
    iconBg: "bg-accent/10",
    border: "border-accent/15",
    cardBg: "bg-accent/5",
  },
  {
    icon: MessageSquareX,
    title: "Mensajes por todas partes, sin control real",
    desc: "WhatsApp, Instagram, email, web…\n\nLa información se dispersa y se pierden oportunidades.",
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    border: "border-primary/15",
    cardBg: "bg-primary/5",
  },
  {
    icon: CalendarX,
    title: "Gestionar citas se convierte en un cuello de botella",
    desc: "Entre atender, coordinar y organizar agendas…\n\ntu equipo pierde horas en tareas que podrían estar automatizadas.",
    iconColor: "text-violet",
    iconBg: "bg-violet/10",
    border: "border-violet/15",
    cardBg: "bg-violet/5",
  },
  {
    icon: UserX,
    title: "Tu negocio depende demasiado de estar disponible",
    desc: "Ya sea tú o tu equipo, si no hay respuesta rápida… el cliente se va.\n\nY eso limita tu crecimiento.",
    iconColor: "text-accent",
    iconBg: "bg-accent/10",
    border: "border-accent/15",
    cardBg: "bg-accent/5",
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
          Por qué tu clínica <span className="text-gradient">pierde pacientes</span> sin darse cuenta
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-center mb-14 max-w-2xl mx-auto"
      >
        <p className="text-muted-foreground text-lg mb-1">No es falta de esfuerzo.</p>
        <p className="text-muted-foreground text-lg">
          Es lo que no estás viendo lo que está frenando tu negocio.
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="text-center text-xl font-display font-semibold text-foreground/80 mb-10"
      >
        Lo que está pasando:
      </motion.p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {problems.map(({ icon: Icon, title, desc, iconColor, iconBg, border, cardBg }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative overflow-hidden rounded-2xl p-6 ${cardBg} border ${border} hover:shadow-md transition-all duration-300 group`}
          >
            <div className={`h-12 w-12 rounded-xl ${iconBg} flex items-center justify-center mb-5 relative`}>
              <Icon className={`h-6 w-6 ${iconColor}`} />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-3 text-xl leading-snug">{title}</h3>
            {desc.split("\n\n").map((paragraph, idx) => (
              <p key={idx} className="text-sm text-muted-foreground mb-2 last:mb-0 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
