import { motion } from "framer-motion";
import { MessageSquare, Calendar, RefreshCw, BarChart2, BellRing, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Recepcionista 24/7",
    desc: "Responde a cada mensaje de WhatsApp, Instagram o web en menos de 2 minutos, cualquier día del año.",
    tag: "Core",
    gradient: "from-violet-500/15 to-violet-600/5",
    border: "border-violet-400/20",
    iconBg: "bg-violet-500/15",
    iconColor: "text-violet-500",
    tagColor: "bg-violet-100 text-violet-700",
    featured: true,
  },
  {
    icon: Calendar,
    title: "Agenda automática",
    desc: "El paciente reserva su cita directamente desde la conversación, sin llamadas ni interrupciones para tu equipo.",
    tag: "Core",
    gradient: "from-amber-500/15 to-amber-600/5",
    border: "border-amber-400/20",
    iconBg: "bg-amber-500/15",
    iconColor: "text-amber-500",
    tagColor: "bg-amber-100 text-amber-700",
    featured: false,
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
    icon: BarChart2,
    title: "Analítica en tiempo real",
    desc: "Dashboard con métricas de conversación, citas, pacientes recuperados y ROI. Todo en un solo lugar.",
    tag: "Analytics",
    gradient: "from-amber-500/15 to-amber-600/5",
    border: "border-amber-400/20",
    iconBg: "bg-amber-500/15",
    iconColor: "text-amber-500",
    tagColor: "bg-amber-100 text-amber-700",
    featured: false,
  },
  {
    icon: ShieldCheck,
    title: "RGPD y seguridad",
    desc: "Todos los datos de tus pacientes protegidos según la normativa europea. Hosting en servidores europeos.",
    tag: "Seguridad",
    gradient: "from-blue-500/15 to-blue-600/5",
    border: "border-blue-400/20",
    iconBg: "bg-blue-500/15",
    iconColor: "text-blue-500",
    tagColor: "bg-blue-100 text-blue-700",
    featured: false,
  },
];

const FeaturesSection = () => (
  <section id="features" className="py-20 md:py-28 bg-section-gradient relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-700 text-sm font-semibold uppercase tracking-wider mb-6">
          Funcionalidades
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
          Todo lo que necesitas,{" "}
          <span className="bg-gradient-to-r from-amber-500 to-violet-600 bg-clip-text text-transparent">
            ya incluido
          </span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Un sistema completo que gestiona cada punto de contacto con tus pacientes, de principio a fin.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map(({ icon: Icon, title, desc, tag, gradient, border, iconBg, iconColor, tagColor, featured }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`relative bg-gradient-to-br ${gradient} border ${border} rounded-2xl p-6 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300 group ${featured ? "ring-1 ring-violet-500/30" : ""}`}
          >
            {featured && (
              <div className="absolute -top-3 left-6">
                <span className="bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md shadow-violet-600/30">
                  Más popular
                </span>
              </div>
            )}
            <div className="flex items-start justify-between mb-4">
              <div className={`${iconBg} rounded-xl p-3 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className={`h-5 w-5 ${iconColor}`} />
              </div>
              <span className={`${tagColor} text-xs font-semibold px-2.5 py-1 rounded-full`}>{tag}</span>
            </div>
            <h3 className="font-display font-bold text-foreground mb-2 text-lg">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
