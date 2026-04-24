import { motion } from "framer-motion";
import { TrendingUp, Clock, Zap, Star } from "lucide-react";
import doctorImage from "@/assets/doctor-tablet.jpg";

const benefits = [
  {
    icon: Clock,
    metric: "+3h",
    label: "menos al día gestionando",
    desc: "Dejas de responder lo mismo una y otra vez. El sistema atiende, recuerda y reserva por ti.",
    bg: "bg-primary/8",
    border: "border-primary/20",
    iconBg: "bg-primary/15",
    iconColor: "text-primary",
    metricColor: "text-primary",
  },
  {
    icon: TrendingUp,
    metric: "+40%",
    label: "más reservas y contactos",
    desc: "Captas también a quien escribe por la noche, el fin de semana o cuando no puedes atender.",
    bg: "bg-accent/8",
    border: "border-accent/20",
    iconBg: "bg-accent/15",
    iconColor: "text-accent",
    metricColor: "text-accent",
  },
  {
    icon: Zap,
    metric: "< 2 min",
    label: "en responder a cada cliente",
    desc: "Quien escribe a tu negocio recibe respuesta al momento. Así nadie se va con la competencia.",
    bg: "bg-violet/8",
    border: "border-violet/20",
    iconBg: "bg-violet/15",
    iconColor: "text-violet",
    metricColor: "text-violet",
  },
  {
    icon: Star,
    metric: "5★",
    label: "imagen más profesional",
    desc: "Web clara, respuestas rápidas y seguimiento cuidado. Tus clientes notan la diferencia.",
    bg: "bg-primary/8",
    border: "border-primary/20",
    iconBg: "bg-primary/15",
    iconColor: "text-primary",
    metricColor: "text-primary",
  },
];

const BenefitsSection = () => (
  <section id="benefits" className="py-20 md:py-28 bg-background relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 border border-accent/20">
          Lo que vas a notar
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
          Más clientes, menos tiempo perdido,{" "}
          <span className="text-gradient">menos quebraderos de cabeza</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Mejoras simples en tu web y tus canales que se traducen en resultados reales para tu negocio.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14 rounded-2xl overflow-hidden shadow-lg max-w-3xl mx-auto"
      >
        <img src={doctorImage} alt="Doctor usando tecnología Smart Office" loading="lazy" width={800} height={600} className="w-full h-56 md:h-72 object-cover" />
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
              className={`relative ${b.bg} rounded-2xl p-6 border ${b.border} hover:shadow-lg transition-all duration-300`}
            >
              <div className={`w-12 h-12 rounded-xl ${b.iconBg} flex items-center justify-center mb-4`}>
                <Icon className={`w-6 h-6 ${b.iconColor}`} />
              </div>
              <div className={`text-4xl font-display font-black mb-1 ${b.metricColor}`}>
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
