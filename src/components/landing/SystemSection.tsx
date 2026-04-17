import { motion } from "framer-motion";
import { MessageSquare, Instagram, Globe, Brain, Calendar, BellRing, Star, ArrowRight } from "lucide-react";

const channels = [
  { icon: MessageSquare, label: "WhatsApp", color: "text-accent", bg: "bg-accent/8", border: "border-accent/15" },
  { icon: Instagram, label: "Instagram", color: "text-violet", bg: "bg-violet/8", border: "border-violet/15" },
  { icon: Globe, label: "Web", color: "text-primary", bg: "bg-primary/8", border: "border-primary/15" },
];

const outputs = [
  { icon: Calendar, label: "Cita agendada", color: "text-accent", bg: "bg-accent/8", border: "border-accent/15" },
  { icon: BellRing, label: "Recordatorio enviado", color: "text-primary", bg: "bg-primary/8", border: "border-primary/15" },
  { icon: Star, label: "Reseña solicitada", color: "text-violet", bg: "bg-violet/8", border: "border-violet/15" },
];

const SystemSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-background">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
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
            El Sistema
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Cómo trabaja{" "}
            <span className="text-gradient">Smart Office IA</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Un flujo simple pero potente: cada mensaje entra, la IA lo procesa y genera la acción correcta.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-3 w-full md:w-48"
            >
              <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wider text-center mb-2">Canales</p>
              {channels.map((ch, i) => {
                const Icon = ch.icon;
                return (
                  <div key={i} className={`flex items-center gap-3 px-4 py-3 rounded-xl ${ch.bg} border ${ch.border}`}>
                    <Icon className={`w-5 h-5 ${ch.color}`} />
                    <span className="text-foreground/80 text-base font-medium">{ch.label}</span>
                  </div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="hidden md:flex items-center"
            >
              <div className="flex items-center gap-1">
                <div className="w-8 h-px bg-gradient-to-r from-primary/30 to-primary/60" />
                <ArrowRight className="w-5 h-5 text-primary" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40">
                <div className="absolute inset-0 rounded-full border-2 border-accent/20 animate-pulse" />
                <div className="absolute inset-3 rounded-full border border-violet/15" />
                <div className="absolute inset-6 rounded-full flex items-center justify-center shadow-xl" style={{ backgroundColor: "#9b4ad4" }}>
                  <Brain className="w-10 h-10 md:w-12 md:h-12 text-white" />
                </div>
              </div>
              <p className="text-foreground font-bold mt-3 text-sm">Smart Office IA</p>
              <p className="text-accent text-xs mt-1">Procesando en tiempo real</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="hidden md:flex items-center"
            >
              <div className="flex items-center gap-1">
                <div className="w-8 h-px bg-gradient-to-r from-accent/60 to-accent/30" />
                <ArrowRight className="w-5 h-5 text-accent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-3 w-full md:w-48"
            >
              <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wider text-center mb-2">Resultados</p>
              {outputs.map((out, i) => {
                const Icon = out.icon;
                return (
                  <div key={i} className={`flex items-center gap-3 px-4 py-3 rounded-xl ${out.bg} border ${out.border}`}>
                    <Icon className={`w-5 h-5 ${out.color}`} />
                    <span className="text-foreground/80 text-base font-medium">{out.label}</span>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemSection;
