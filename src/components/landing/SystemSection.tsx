import { motion } from "framer-motion";
import { MessageSquare, Instagram, Globe, Brain, Calendar, BellRing, Star, ArrowRight } from "lucide-react";

const channels = [
  { icon: MessageSquare, label: "WhatsApp", color: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/20" },
  { icon: Instagram, label: "Instagram", color: "text-pink-500", bg: "bg-pink-500/10", border: "border-pink-500/20" },
  { icon: Globe, label: "Web", color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
];

const outputs = [
  { icon: Calendar, label: "Cita agendada", color: "text-violet-500", bg: "bg-violet-500/10", border: "border-violet-500/20" },
  { icon: BellRing, label: "Recordatorio enviado", color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/20" },
  { icon: Star, label: "Reseña solicitada", color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
];

const SystemSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-gray-950">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/8 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/15 text-violet-300 text-sm font-semibold mb-6 border border-violet-500/30">
            El Sistema
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Cómo trabaja{" "}
            <span className="bg-gradient-to-r from-violet-400 to-amber-400 bg-clip-text text-transparent">
              Smart Office AI
            </span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Un flujo simple pero potente: cada mensaje entra, la IA lo procesa y genera la acción correcta.
          </p>
        </motion.div>

        {/* System diagram */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4">

            {/* Input channels */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-3 w-full md:w-48"
            >
              <p className="text-white/40 text-xs font-semibold uppercase tracking-wider text-center mb-2">Canales</p>
              {channels.map((ch, i) => {
                const Icon = ch.icon;
                return (
                  <div key={i} className={`flex items-center gap-3 px-4 py-3 rounded-xl ${ch.bg} border ${ch.border} backdrop-blur-sm`}>
                    <Icon className={`w-5 h-5 ${ch.color}`} />
                    <span className="text-white/80 text-sm font-medium">{ch.label}</span>
                  </div>
                );
              })}
            </motion.div>

            {/* Arrow */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="hidden md:flex items-center"
            >
              <div className="flex items-center gap-1">
                <div className="w-8 h-px bg-gradient-to-r from-violet-500/50 to-violet-500" />
                <ArrowRight className="w-5 h-5 text-violet-400" />
              </div>
            </motion.div>

            {/* AI Brain */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-2 border-violet-500/30 animate-pulse" />
                {/* Middle ring */}
                <div className="absolute inset-3 rounded-full border border-violet-500/20" />
                {/* Core */}
                <div className="absolute inset-6 rounded-full bg-gradient-to-br from-violet-600 to-violet-800 flex items-center justify-center shadow-2xl shadow-violet-500/50">
                  <Brain className="w-10 h-10 md:w-12 md:h-12 text-white" />
                </div>
              </div>
              <p className="text-white font-bold mt-3 text-sm">Smart Office AI</p>
              <p className="text-violet-400 text-xs mt-1">Procesando en tiempo real</p>
            </motion.div>

            {/* Arrow */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="hidden md:flex items-center"
            >
              <div className="flex items-center gap-1">
                <div className="w-8 h-px bg-gradient-to-r from-amber-500 to-amber-500/50" />
                <ArrowRight className="w-5 h-5 text-amber-400" />
              </div>
            </motion.div>

            {/* Output actions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-3 w-full md:w-48"
            >
              <p className="text-white/40 text-xs font-semibold uppercase tracking-wider text-center mb-2">Resultados</p>
              {outputs.map((out, i) => {
                const Icon = out.icon;
                return (
                  <div key={i} className={`flex items-center gap-3 px-4 py-3 rounded-xl ${out.bg} border ${out.border} backdrop-blur-sm`}>
                    <Icon className={`w-5 h-5 ${out.color}`} />
                    <span className="text-white/80 text-sm font-medium">{out.label}</span>
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
