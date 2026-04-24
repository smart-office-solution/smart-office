import { motion } from "framer-motion";
import { Search, Settings, Rocket, HeartHandshake } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Auditoría gratuita",
    desc: "Reviso tu web y tus canales, te digo por qué no están convirtiendo y qué se puede mejorar. En 30 minutos y sin compromiso.",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
    stepColor: "text-accent/25",
    connector: "bg-gradient-to-b from-accent/30 to-primary/30",
  },
  {
    icon: Settings,
    step: "02",
    title: "Plan a tu medida",
    desc: "Te propongo mejoras concretas para tu web, tus formularios y tus canales. Sin tecnicismos: tú decides qué aplicar.",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    stepColor: "text-primary/25",
    connector: "bg-gradient-to-b from-primary/30 to-violet/30",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Lo dejamos funcionando",
    desc: "Implemento las mejoras: landing, botón de WhatsApp, formularios o chatbot básico. En pocos días, tu web empieza a captar.",
    iconBg: "bg-violet/10",
    iconColor: "text-violet",
    stepColor: "text-violet/25",
    connector: "bg-gradient-to-b from-violet/30 to-accent/30",
  },
  {
    icon: HeartHandshake,
    step: "04",
    title: "Acompañamiento mensual",
    desc: "Reviso resultados cada mes y vamos ajustando para que cada vez te entren más clientes desde tu web.",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
    stepColor: "text-accent/25",
    connector: null,
  },
];

const ProcessSection = () => (
  <section id="process" className="py-20 md:py-28 bg-background relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold uppercase tracking-wider mb-6">
          El proceso
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
          De web que no convierte a{" "}
          <span className="text-gradient">web que te trae clientes</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Un proceso sencillo, sin tecnicismos y con acompañamiento real en cada paso.
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
                <div className={`${iconBg} rounded-2xl p-4 border border-border shadow-sm relative z-10`}>
                  <Icon className={`h-6 w-6 ${iconColor}`} />
                </div>
                {connector && (
                  <div className={`w-0.5 flex-1 ${connector} mt-2 mb-2 min-h-[40px]`} />
                )}
              </div>
              <div className="flex-1 pb-10">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-4xl font-display font-black ${stepColor} leading-none`}>{step}</span>
                  <h3 className="text-2xl font-display font-bold text-foreground">{title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-base">{desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
