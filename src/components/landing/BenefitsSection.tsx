import { motion } from "framer-motion";
import { TrendingUp, Clock, Zap, Star } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    metric: "+3h",
    label: "recuperadas al día",
    desc: "Tu equipo deja de gestionar manualmente cada consulta, recordatorio y seguimiento.",
    color: "violet",
    gradient: "from-violet-500/20 to-violet-600/5",
    border: "border-violet-500/25",
    iconBg: "bg-violet-500/15",
    iconColor: "text-violet-400",
  },
  {
    icon: TrendingUp,
    metric: "+40%",
    label: "más citas reservadas",
    desc: "Cada lead que llega fuera de horario ahora tiene respuesta inmediata y se convierte.",
    color: "amber",
    gradient: "from-amber-500/20 to-amber-600/5",
    border: "border-amber-500/25",
    iconBg: "bg-amber-500/15",
    iconColor: "text-amber-400",
  },
  {
    icon: Zap,
    metric: "< 2min",
    label: "tiempo de respuesta",
    desc: "24 horas al día, 7 días a la semana. Nunca más pierdes un paciente por tardar.",
    color: "violet",
    gradient: "from-violet-500/20 to-violet-600/5",
    border: "border-violet-500/25",
    iconBg: "bg-violet-500/15",
    iconColor: "text-violet-400",
  },
  {
    icon: Star,
    metric: "5★",
    label: "experiencia del paciente",
    desc: "Respuestas personalizadas, recordatorios puntuales y seguimiento profesional.",
    color: "amber",
    gradient: "from-amber-500/20 to-amber-600/5",
    border: "border-amber-500/25",
    iconBg: "bg-amber-500/15",
    iconColor: "text-amber-400",
  },
];

const BenefitsSection = () => (
  <section id="benefits" className="py-20 md:py-28 bg-section-gradient relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-semibold mb-6 border border-violet-200">
          Resultados reales
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
          Lo que consiguen{" "}
          <span className="bg-gradient-to-r from-violet-600 to-amber-500 bg-clip-text text-transparent">
            nuestros clientes
          </span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Métricas reales de clínicas que ya trabajan con Smart Office AI.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((b, i) => {
          const Icon = b.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative bg-gradient-to-br ${b.gradient} rounded-2xl p-6 border ${b.border} hover:shadow-lg transition-all duration-300`}
            >
              <div className={`w-12 h-12 rounded-xl ${b.iconBg} flex items-center justify-center mb-4`}>
                <Icon className={`w-6 h-6 ${b.iconColor}`} />
              </div>
              <div className={`text-4xl font-display font-black mb-1 ${b.iconColor}`}>
                {b.metric}
              </div>
              <div className="text-foreground font-semibold text-sm mb-2">{b.label}</div>
              <p className="text-muted-foreground text-xs leading-relaxed">{b.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
