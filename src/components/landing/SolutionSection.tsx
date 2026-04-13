import { motion } from "framer-motion";
import { MessageCircle, Clock, CalendarCheck, Sparkles } from "lucide-react";

const solutions = [
  { icon: MessageCircle, title: "Automatiza la comunicación con clientes", desc: "Cada mensaje recibe una respuesta profesional e instantánea — sin importar el canal." },
  { icon: Clock, title: "Responde al instante, 24/7", desc: "Tu recepcionista IA nunca duerme, nunca descansa y nunca pierde un lead." },
  { icon: CalendarCheck, title: "Organiza y gestiona citas", desc: "Las reservas se manejan automáticamente. Sin duplicados, sin idas y vueltas." },
  { icon: Sparkles, title: "Mejora la experiencia del cliente", desc: "Los clientes se sienten escuchados y valorados desde la primera interacción." },
];

const SolutionSection = () => (
  <section id="solution" className="py-20 md:py-28 bg-section-gradient">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">La solución</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Conoce Smart Office — tu socio de negocio con IA
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Deja de perseguir mensajes y empieza a hacer crecer tu negocio. Smart Office se encarga de la comunicación para que tú te enfoques en lo que mejor haces.
        </p>
      </motion.div>

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
              <h3 className="font-display font-semibold text-foreground mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
