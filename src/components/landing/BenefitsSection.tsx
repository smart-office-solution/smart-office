import { motion } from "framer-motion";
import { TrendingUp, Clock, Zap, Star } from "lucide-react";
import doctorImage from "@/assets/doctor-tablet.jpg";

const benefits = [
  {
    icon: Clock,
    metric: "+3h",
    label: "menos al día gestionando mensajes",
    desc: "Tu equipo deja de perder tiempo respondiendo lo mismo una y otra vez.",
    bg: "bg-primary/8",
    border: "border-primary/20",
    iconBg: "bg-primary/15",
    iconColor: "text-primary",
    metricColor: "text-primary",
  },
  {
    icon: TrendingUp,
    metric: "+40%",
    label: "más contactos desde tu web",
    desc: "Quien entra en tu web ahora encuentra un camino claro para escribirte o reservar.",
    bg: "bg-accent/8",
    border: "border-accent/20",
    iconBg: "bg-accent/15",
    iconColor: "text-accent",
    metricColor: "text-accent",
  },
  {
    icon: Zap,
    metric: "< 2min",
    label: "en responder cada mensaje",
    desc: "Día y noche. Nunca más pierdes un cliente por contestar tarde.",
    bg: "bg-violet/8",
    border: "border-violet/20",
    iconBg: "bg-violet/15",
    iconColor: "text-violet",
    metricColor: "text-violet",
  },
  {
    icon: Star,
    metric: "5★",
    label: "más reseñas en Google",
    desc: "Cada cliente recibe la invitación para dejarte reseña justo cuando toca.",
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
          Resultados reales
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
          Lo que vas a notar{" "}
          <span className="text-gradient">en tu negocio</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Más contactos, más reservas y menos tiempo perdido. Eso es lo que cambia desde el primer mes.
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
