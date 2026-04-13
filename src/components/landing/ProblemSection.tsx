import { motion } from "framer-motion";
import { Clock, MessageSquareX, CalendarX, UserX } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Las respuestas lentas te cuestan clientes",
    desc: "Cuando respondes, muchas veces ya han elegido otra opción.\n\nHoy, quien responde primero… se queda con el cliente.",
  },
  {
    icon: MessageSquareX,
    title: "Mensajes por todas partes, sin control real",
    desc: "WhatsApp, Instagram, email, web…\n\nLa información se dispersa y se pierden oportunidades.",
  },
  {
    icon: CalendarX,
    title: "Gestionar citas se convierte en un cuello de botella",
    desc: "Entre atender, coordinar y organizar agendas…\n\ntu equipo pierde horas en tareas que podrían estar automatizadas.",
  },
  {
    icon: UserX,
    title: "Tu negocio depende demasiado de estar disponible",
    desc: "Ya sea tú o tu equipo, si no hay respuesta rápida… el cliente se va.\n\nY eso limita tu crecimiento.",
  },
];

const ProblemSection = () => (
  <section id="problem" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-6"
      >
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
          ¿Te suena familiar?
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Trabajas más que nunca… y aun así se siguen escapando clientes
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-center mb-12 max-w-2xl mx-auto"
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
        className="text-center text-xl font-display font-semibold text-foreground mb-10"
      >
        Lo que está pasando:
      </motion.p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {problems.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300"
          >
            <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
              <Icon className="h-6 w-6 text-destructive" />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-3">{title}</h3>
            {desc.split("\n\n").map((paragraph, idx) => (
              <p key={idx} className="text-sm text-muted-foreground mb-2 last:mb-0">
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
