import { motion } from "framer-motion";
import { Send, BarChart3, FileCheck } from "lucide-react";

const steps = [
  { icon: Send, num: "1", title: "Solicita tu auditoría", desc: "Cuéntanos brevemente sobre tu negocio y cómo gestionas tus clientes." },
  { icon: BarChart3, num: "2", title: "Analizamos tu situación real", desc: "Detectamos dónde estás perdiendo oportunidades y qué está frenando tu crecimiento." },
  { icon: FileCheck, num: "3", title: "Recibes un plan claro para mejorar", desc: "Te mostramos exactamente qué cambiar y cómo automatizar tu atención." },
];

const ProcessSection = () => (
  <section className="py-20 md:py-28 bg-section-gradient">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">CÓMO FUNCIONA</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          En solo 3 pasos empiezas a recuperar clientes
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {steps.map(({ icon: Icon, num, title, desc }, i) => (
          <motion.div
            key={num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center"
          >
            <div className="h-16 w-16 rounded-2xl bg-hero-gradient flex items-center justify-center mx-auto mb-5 shadow-lg">
              <Icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <div className="text-xs font-bold text-primary mb-2">PASO {num}</div>
            <h3 className="font-display font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
