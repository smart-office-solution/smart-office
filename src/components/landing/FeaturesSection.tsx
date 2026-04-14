import { motion } from "framer-motion";
import { MessageSquare, Calendar, RefreshCw, BellRing, Star } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Respuesta instantánea",
    desc: "Responde en segundos a cualquier mensaje de WhatsApp, Instagram o web, 24/7, sin intervención humana.",
    tag: "Core",
    gradient: "from-violet-500/15 to-violet-600/5",
    border: "border-violet-400/20",
    iconBg: "bg-violet-500/15",
    iconColor: "text-violet-500",
    tagColor: "bg-violet-100 text-violet-700",
    featured: false,
  },
  {
    icon: Calendar,
    title: "Agenda automática",
    desc: "El asistente agenda, confirma y reprograma citas directamente en tu calendario, sin fricciones.",
    tag: "Más popular",
    gradient: "from-amber-500/15 to-amber-600/5",
    border: "border-amber-400/20",
    iconBg: "bg-amber-500/15",
    iconColor: "text-amber-500",
    tagColor: "bg-amber-100 text-amber-700",
    featured: true,
  },
  {
    icon: RefreshCw,
    title: "Seguimiento inteligente",
    desc: "Detecta pacientes que no completaron su tratamiento o que llevan tiempo sin visitar y los recupera automáticamente.",
    tag: "Retención",
    gradient: "from-blue-500/15 to-blue-600/5",
    border: "border-blue-400/20",
    iconBg: "bg-blue-500/15",
    iconColor: "text-blue-500",
    tagColor: "bg-blue-100 text-blue-700",
    featured: false,
  },
  {
    icon: BellRing,
    title: "Recordatorios automáticos",
    desc: "Envía recordatorios de citas 24h y 1h antes, reduciendo las ausencias hasta un 40%.",
    tag: "Fidelización",
    gradient: "from-violet-500/15 to-violet-600/5",
    border: "border-violet-400/20",
    iconBg: "bg-violet-500/15",
    iconColor: "text-violet-500",
    tagColor: "bg-violet-100 text-violet-700",
    featured: false,
  },
  {
    icon: Star,
    title: "Solicitud de reseñas",
    desc: "Tras cada visita, el asistente invita automáticamente al paciente a dejar una reseña en Google, mejorando tu reputación online.",
    tag: "Reputación",
    gradient: "from-amber-500/15 to-amber-600/5",
    border: "border-amber-400/20",
    iconBg: "bg-amber-500/15",
    iconColor: "text-amber-500",
    tagColor: "bg-amber-100 text-amber-700",
    featured: false,
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-violet-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-semibold mb-6 border border-violet-200">
            Funcionalidades
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Todo lo que necesitas,{" "}
            <span className="bg-gradient-to-r from-violet-600 to-amber-500 bg-clip-text text-transparent">
              listo desde el día 1
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
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
                className={`relative bg-gradient-to-br ${feature.gradient} rounded-2xl p-6 border ${feature.border} hover:shadow-lg transition-all duration-300 ${feature.featured ? "ring-2 ring-amber-400/50" : ""}`}
              >
                {feature.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-amber-400 to-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
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
                      <h3 className="font-bold text-gray-900 text-base">{feature.title}</h3>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${feature.tagColor}`}>
                        {feature.tag}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
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
