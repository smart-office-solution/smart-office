import { motion } from "framer-motion";
import { Search, Settings, Rocket, HeartHandshake } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Auditoría gratuita",
    desc: "Analizamos tu situación actual: canales, volumen de mensajes, puntos de fuga de clientes y oportunidades de mejora.",
    iconBg: "bg-primary/15",
    iconColor: "text-primary",
    stepColor: "text-primary/30",
    connector: "bg-gradient-to-b from-primary/40 to-accent/40",
  },
  {
    icon: Settings,
    step: "02",
    title: "Configuración a medida",
    desc: "Diseñamos e implementamos tu asistente con tu identidad, tus servicios y tu forma de comunicarte. En 7 días.",
    iconBg: "bg-accent/15",
    iconColor: "text-accent",
    stepColor: "text-accent/30",
    connector: "bg-gradient-to-b from-accent/40 to-blue-500/40",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Activación y prueba",
    desc: "El sistema empieza a responder, captar y agendar. Tú ves los resultados en tiempo real desde el primer día.",
    iconBg: "bg-blue-500/15",
    iconColor: "text-blue-400",
    stepColor: "text-blue-400/30",
    connector: "bg-gradient-to-b from-blue-500/40 to-primary/40",
  },
  {
    icon: HeartHandshake,
    step: "04",
    title: "Optimización continua",
    desc: "Analizamos el rendimiento cada mes y ajustamos para que el sistema mejore constantemente.",
    iconBg: "bg-primary/15",
    iconColor: "text-primary",
    stepColor: "text-primary/30",
    connector: null,
  },
];

const ProcessSection = () => (
  <section id="process" className="py-20 md:py-28 bg-dark-section relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/8 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-accent/8 rounded-full blur-3xl" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-sm font-semibold uppercase tracking-wider mb-6">
          El proceso
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
          De cero a funcionando{" "}
          <span className="text-primary">en 7 días</span>
        </h2>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
          Un proceso simple, sin complicaciones técnicas y con todo el soporte de nuestro equipo.
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        {steps.map(({ icon: Icon, step, title, desc, iconBg, iconColor, stepColor, connector }, i) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="relative"
          >
            <div className="flex gap-6 pb-2">
              <div className="flex flex-col items-center">
                <div className={`${iconBg} rounded-2xl p-4 border border-white/10 shadow-lg relative z-10`}>
                  <Icon className={`h-6 w-6 ${iconColor}`} />
                </div>
                {connector && (
                  <div className={`w-0.5 flex-1 ${connector} mt-2 mb-2 min-h-[40px]`} />
                )}
              </div>
              <div className="flex-1 pb-10">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-4xl font-display font-black ${stepColor} leading-none`}>{step}</span>
                  <h3 className="text-xl font-display font-bold text-white">{title}</h3>
                </div>
                <p className="text-white/55 leading-relaxed">{desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
