import { motion } from "framer-motion";
import { TrendingUp, Clock, Users, Zap, Star, BarChart3 } from "lucide-react";

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
    icon: Users,
    metric: "+35%",
    label: "pacientes recuperados",
    desc: "El seguimiento automático reactiva a los que no completaron su tratamiento.",
    color: "blue",
    gradient: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/25",
    iconBg: "bg-blue-500/15",
    iconColor: "text-blue-400",
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
  {
    icon: BarChart3,
    metric: "ROI",
    label: "desde el primer mes",
    desc: "El sistema se paga solo desde las primeras semanas gracias a los pacientes recuperados.",
    color: "blue",
    gradient: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/25",
    iconBg: "bg-blue-500/15",
    iconColor: "text-blue-400",
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
        className="text-center mb-14"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 border border-violet-200 text-violet-700 text-sm font-semibold uppercase tracking-wider mb-6">
          Resultados reales
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
          Lo que cambia cuando tu clínica{" "}
          <span className="bg-gradient-to-r from-violet-600 to-amber-500 bg-clip-text text-transparent">
            no duerme
          </span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Resultados medibles desde las primeras semanas de implementación.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {benefits.map(({ icon: Icon, metric, label, desc, gradient, border, iconBg, iconColor }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`bg-gradient-to-br ${gradient} border ${border} rounded-2xl p-6 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300 group`}
          >
            <div className="flex items-start gap-4">
              <div className={`${iconBg} rounded-xl p-3 shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className={`h-5 w-5 ${iconColor}`} />
              </div>
              <div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className={`text-2xl font-display font-bold ${iconColor}`}>{metric}</span>
                  <span className="text-sm font-medium text-foreground/70">{label}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
