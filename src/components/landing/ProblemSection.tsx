import { motion } from "framer-motion";
import { Clock, MessageSquareX, CalendarX, UserX } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Las respuestas lentas te cuestan clientes",
    desc: "Cuando respondes, muchas veces ya han elegido otra opción.\n\nHoy, quien responde primero… se queda con el cliente.",
    color: "from-primary/20 to-primary/10",
    iconColor: "text-primary",
    iconBg: "bg-primary/20",
  },
  {
    icon: MessageSquareX,
    title: "Mensajes por todas partes, sin control real",
    desc: "WhatsApp, Instagram, email, web…\n\nLa información se dispersa y se pierden oportunidades.",
    color: "from-accent/20 to-accent/10",
    iconColor: "text-accent",
    iconBg: "bg-accent/20",
  },
  {
    icon: CalendarX,
    title: "Gestionar citas se convierte en un cuello de botella",
    desc: "Entre atender, coordinar y organizar agendas…\n\ntu equipo pierde horas en tareas que podrían estar automatizadas.",
    color: "from-blue-500/20 to-blue-600/10",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/20",
  },
  {
    icon: UserX,
    title: "Tu negocio depende demasiado de estar disponible",
    desc: "Ya sea tú o tu equipo, si no hay respuesta rápida… el cliente se va.\n\nY eso limita tu crecimiento.",
    color: "from-rose-500/20 to-rose-600/10",
    iconColor: "text-rose-400",
    iconBg: "bg-rose-500/20",
  },
];

const ProblemSection = () => (
  <section id="problem" className="py-20 md:py-28 bg-dark-section relative overflow-hidden">
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-6"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-semibold uppercase tracking-wider mb-6">
          ¿Te suena familiar?
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
          Trabajas más que nunca… y aun así se siguen escapando clientes
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-center mb-14 max-w-2xl mx-auto"
      >
        <p className="text-white/60 text-lg mb-1">No es falta de esfuerzo.</p>
        <p className="text-white/60 text-lg">
          Es lo que no estás viendo lo que está frenando tu negocio.
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="text-center text-xl font-display font-semibold text-white/80 mb-10"
      >
        Lo que está pasando:
      </motion.p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {problems.map(({ icon: Icon, title, desc, color, iconColor, iconBg }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br ${color} border border-white/10 hover:border-white/20 transition-all duration-300 group`}
          >
            <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className={`h-12 w-12 rounded-xl ${iconBg} flex items-center justify-center mb-5 relative`}>
              <Icon className={`h-6 w-6 ${iconColor}`} />
            </div>
            <h3 className="font-display font-semibold text-white mb-3 text-base leading-snug">{title}</h3>
            {desc.split("\n\n").map((paragraph, idx) => (
              <p key={idx} className="text-sm text-white/55 mb-2 last:mb-0 leading-relaxed">
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
