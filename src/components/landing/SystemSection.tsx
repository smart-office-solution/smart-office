import { motion } from "framer-motion";
import { UserPlus, CalendarClock, RefreshCcw } from "lucide-react";

const blocks = [
  {
    icon: UserPlus,
    title: "Captación automática",
    text: "Cada paciente que escribe recibe respuesta inmediata.\nNo pierdes oportunidades por falta de tiempo.",
  },
  {
    icon: CalendarClock,
    title: "Agenda inteligente",
    text: "Las citas se organizan automáticamente según tu disponibilidad.\nSin interrupciones, sin errores.",
  },
  {
    icon: RefreshCcw,
    title: "Seguimiento automático",
    text: "Pacientes que no reservaron o no acudieron vuelven a ser contactados.\nRecuperas oportunidades que antes perdías.",
  },
];

const SystemSection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
          EL SISTEMA
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Smart Office System{" "}
          <span className="text-gradient">(S.O.S)</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Un sistema que capta, agenda y recupera pacientes automáticamente
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {blocks.map((block, i) => (
          <motion.div
            key={block.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-2xl p-6 md:p-8 text-center shadow-card hover:shadow-card-hover transition-shadow duration-300"
          >
            <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <block.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-lg font-display font-bold text-foreground mb-3">
              {block.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
              {block.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SystemSection;
