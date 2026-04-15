import { motion } from "framer-motion";
import { MessageSquare, Calendar, BellRing, Star } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Respuesta instantánea",
    desc: "Responde en segundos a cualquier mensaje de WhatsApp, Instagram o web, 24/7, sin intervención humana.",
    tag: "Core",
    gradient: "from-primary/15 to-primary/5",
    border: "border-primary/20",
    iconBg: "bg-primary/15",
    iconColor: "text-primary",
    tagColor: "bg-primary/10 text-primary",
    featured: false,
  },
  {
    icon: Calendar,
    title: "Agenda automática",
    desc: "El asistente agenda, confirma y reprograma citas directamente en tu calendario, sin fricciones.",
    tag: "Más popular",
    gradient: "from-accent/15 to-accent/5",
    border: "border-accent/20",
    iconBg: "bg-accent/15",
    iconColor: "text-accent",
    tagColor: "bg-accent/10 text-accent",
    featured: true,
  },
  {
    icon: BellRing,
    title: "Recordatorios automáticos",
    desc: "Envía recordatorios de citas 24h y 1h antes, reduciendo las ausencias hasta un 40%.",
    tag: "Fidelización",
    gradient: "from-primary/15 to-primary/5",
    border: "border-primary/20",
    iconBg: "bg-primary/15",
    iconColor: "text-primary",
    tagColor: "bg-primary/10 text-primary",
    featured: false,
  },
  {
    icon: Star,
    title: "Solicitud de reseñas",
    desc: "Tras cada visita, el asistente invita automáticamente al paciente a dejar una reseña en Google, mejorando tu reputación online.",
    tag: "Reputación",
    gradient: "from-accent/15 to-accent/5",
    border: "border-accent/20",
    iconBg: "bg-accent/15",
    iconColor: "text-accent",
    tagColor: "bg-accent/10 text-accent",
    featured: false,
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20">
            Funcionalidades
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Todo lo que necesitas,{" "}
            <span className="text-gradient">listo desde el día 1</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Cada funcionalidad está diseñada para resolver los problemas reales de tu clínica, sin complejidad técnica.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`relative bg-gradient-to-br ${feature.gradient} rounded-2xl p-6 border ${feature.border} hover:shadow-lg transition-all duration-300 ${feature.featured ? "ring-2 ring-accent/50" : ""}`}
              >
                {feature.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-accent to-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      ⭐ Más elegido
                    </span>
                  </div>
                )}

                <div className="flex items-start gap-4">
                  <div className={`w-11 h-11 rounded-xl ${feature.iconBg} flex items-center justify-center shrink-0`}>
                    <Icon className={`w-5 h-5 ${feature.iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <h3 className="font-bold text-foreground text-base">{feature.title}</h3>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${feature.tagColor}`}>
                        {feature.tag}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
