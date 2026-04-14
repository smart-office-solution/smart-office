import { motion } from "framer-motion";
import { MessageCircle, Instagram, Mail, Globe, Bot, Calendar, BarChart, Bell } from "lucide-react";

const channels = [
  { icon: MessageCircle, label: "WhatsApp", color: "text-green-400", bg: "bg-green-500/15", border: "border-green-500/25" },
  { icon: Instagram, label: "Instagram", color: "text-pink-400", bg: "bg-pink-500/15", border: "border-pink-500/25" },
  { icon: Mail, label: "Email", color: "text-blue-400", bg: "bg-blue-500/15", border: "border-blue-500/25" },
  { icon: Globe, label: "Web chat", color: "text-amber-400", bg: "bg-amber-500/15", border: "border-amber-500/25" },
];

const outputs = [
  { icon: Bot, label: "Respuesta IA", color: "text-violet-400", bg: "bg-violet-500/15" },
  { icon: Calendar, label: "Cita agendada", color: "text-amber-400", bg: "bg-amber-500/15" },
  { icon: BarChart, label: "CRM actualizado", color: "text-blue-400", bg: "bg-blue-500/15" },
  { icon: Bell, label: "Recordatorio enviado", color: "text-green-400", bg: "bg-green-500/15" },
];

const SystemSection = () => (
  <section id="system" className="py-20 md:py-28 relative overflow-hidden bg-section-gradient">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-semibold uppercase tracking-wider mb-6">
          El sistema
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
          Todos tus canales,{" "}
          <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
            un solo cerebro
          </span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Smart Office unifica todos tus canales de captación y los gestiona de forma automática e inteligente.
        </p>
      </motion.div>

      {/* System diagram */}
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Inputs: channels */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 text-center lg:text-left">
              Canales de entrada
            </p>
            {channels.map(({ icon: Icon, label, color, bg, border }) => (
              <div key={label} className={`flex items-center gap-3 p-3 bg-card rounded-xl border ${border} shadow-sm`}>
                <div className={`${bg} rounded-lg p-2`}>
                  <Icon className={`h-4 w-4 ${color}`} />
                </div>
                <span className="text-sm font-medium text-foreground">{label}</span>
                <div className="ml-auto flex gap-0.5">
                  <div className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Center: Smart Office brain */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center"
          >
            {/* Connecting arrows */}
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-violet-600 to-violet-800 rounded-3xl flex flex-col items-center justify-center shadow-2xl shadow-violet-600/30 relative z-10">
                <Bot className="h-10 w-10 text-white mb-1" />
                <span className="text-white text-xs font-bold tracking-wide">SMART OFFICE</span>
                <span className="text-violet-200/70 text-[10px]">IA 24/7</span>
                {/* Pulse ring */}
                <div className="absolute inset-0 rounded-3xl border-2 border-violet-400/30 animate-ping" />
              </div>
              {/* Horizontal arrows */}
              <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -left-16 w-16 h-0.5 bg-gradient-to-r from-violet-300/50 to-violet-500" />
              <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-16 w-16 h-0.5 bg-gradient-to-r from-violet-500 to-violet-300/50" />
            </div>
          </motion.div>

          {/* Outputs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-3"
          >
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 text-center lg:text-left">
              Acciones automáticas
            </p>
            {outputs.map(({ icon: Icon, label, color, bg }) => (
              <div key={label} className="flex items-center gap-3 p-3 bg-card rounded-xl border border-violet-200/50 shadow-sm">
                <div className={`${bg} rounded-lg p-2`}>
                  <Icon className={`h-4 w-4 ${color}`} />
                </div>
                <span className="text-sm font-medium text-foreground">{label}</span>
                <div className="ml-auto">
                  <div className="w-2 h-2 rounded-full bg-violet-500" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 grid grid-cols-3 gap-4"
        >
          {[
            { value: "24/7", label: "Disponible" },
            { value: "< 2s", label: "Tiempo de respuesta" },
            { value: "∞", label: "Mensajes simultáneos" },
          ].map(({ value, label }) => (
            <div key={label} className="bg-card border border-violet-200/50 rounded-2xl p-5 text-center shadow-sm">
              <div className="text-2xl font-display font-black text-violet-600 mb-1">{value}</div>
              <div className="text-xs text-muted-foreground font-medium">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default SystemSection;
