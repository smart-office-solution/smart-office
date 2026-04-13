import { motion } from "framer-motion";
import { TrendingUp, Clock, FolderCheck, Award } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Más clientes, sin dejar oportunidades escapar",
    desc: "Cada mensaje se responde al instante.\nCada oportunidad se atiende.\nEmpiezas a convertir lo que antes perdías.",
  },
  {
    icon: Clock,
    title: "Más tiempo para ti y para tu equipo",
    desc: "Menos interrupciones, menos carga operativa.\nTu equipo se centra en lo importante, no en tareas repetitivas.",
  },
  {
    icon: FolderCheck,
    title: "Un negocio realmente organizado",
    desc: "Mensajes, citas y clientes en un solo sistema.\nSin caos, sin información perdida, sin improvisación.",
  },
  {
    icon: Award,
    title: "Una experiencia que convierte desde el primer contacto",
    desc: "Respuestas rápidas, claras y profesionales.\nTu cliente siente que está en buenas manos desde el inicio.",
  },
];

const BenefitsSection = () => (
  <section id="benefits" className="py-20 md:py-28 bg-section-gradient">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">LA TRANSFORMACIÓN</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Lo que cambia cuando tu negocio deja de depender de estar disponible
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {benefits.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300"
          >
            <div className="h-12 w-12 rounded-full bg-accent/15 flex items-center justify-center mb-4">
              <Icon className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-3">{title}</h3>
            {desc.split("\n").map((line, idx) => (
              <p key={idx} className="text-sm text-muted-foreground mb-1 last:mb-0">
                {line}
              </p>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
