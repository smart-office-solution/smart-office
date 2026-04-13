import { motion } from "framer-motion";
import { TrendingUp, Heart, FolderCheck, Award } from "lucide-react";

const benefits = [
  { icon: TrendingUp, title: "Más clientes, sin trabajar más", desc: "La automatización captura y convierte leads incluso mientras descansas." },
  { icon: Heart, title: "Más tiempo, menos estrés", desc: "Recupera tus tardes y fines de semana. Deja que la IA se encargue del ruido." },
  { icon: FolderCheck, title: "Un negocio organizado", desc: "Todo en un solo lugar — mensajes, reservas, datos de clientes. Por fin." },
  { icon: Award, title: "Experiencia profesional para el cliente", desc: "Cada cliente recibe un trato VIP desde el primer contacto." },
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
        <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">La transformación</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Lo que cambia cuando Smart Office trabaja para ti
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {benefits.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex gap-4 items-start"
          >
            <div className="h-12 w-12 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
              <Icon className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
