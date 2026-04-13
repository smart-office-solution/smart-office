import { motion } from "framer-motion";
import { Zap, LayoutGrid, CalendarCheck, Clock } from "lucide-react";

const solutions = [
  {
    icon: Zap,
    title: "Responde al instante, sin depender de ti ni de tu equipo",
    desc: "Cada mensaje recibe respuesta inmediata, sin esperas.\n\nNo importa cuándo escriban: tu negocio siempre está activo.",
  },
  {
    icon: LayoutGrid,
    title: "Centraliza todos tus canales en un solo sistema",
    desc: "WhatsApp, Instagram, email y web organizados en un mismo lugar.\n\nSin caos, sin mensajes perdidos.",
  },
  {
    icon: CalendarCheck,
    title: "Agenda citas automáticamente",
    desc: "El sistema gestiona tu calendario y reserva citas sin intervención manual.\n\nTu equipo deja de perder tiempo en tareas repetitivas.",
  },
  {
    icon: Clock,
    title: "Funciona 24/7 sin interrupciones",
    desc: "Mientras tú o tu equipo descansáis, el sistema sigue atendiendo clientes.\n\nMás oportunidades, sin más carga de trabajo.",
  },
];

const SolutionSection = () => (
  <section id="solution" className="py-20 md:py-28 bg-section-gradient">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-6"
      >
        <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
          <span className="text-primary font-bold">S.O.S</span> La Solución
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Conoce Smart Office System (<span className="text-primary">S.O.S</span>)
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-center mb-12 max-w-2xl mx-auto"
      >
        <p className="text-muted-foreground text-lg">
          Sistema 360 para ayudarte a gestionar tu negocio, automatizar tu atención al cliente y dejar de perder oportunidades.
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="text-center text-xl font-display font-semibold text-foreground mb-10"
      >
        Lo que este sistema hace por tu negocio:
      </motion.p>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {solutions.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex gap-4 bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300"
          >
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground mb-3">{title}</h3>
              {desc.split("\n\n").map((paragraph, idx) => (
                <p key={idx} className="text-sm text-muted-foreground mb-2 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
