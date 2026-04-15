import { motion } from "framer-motion";
import { MessageSquare, Calendar, RefreshCw, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import clinicImage from "@/assets/clinic-interior.jpg";

const pillars = [
  {
    icon: MessageSquare,
    color: "text-primary",
    bg: "bg-primary/15",
    border: "border-primary/30",
    number: "01",
    title: "Captación automática",
    subtitle: "Nunca pierdas un lead por no responder",
    description:
      "Cada mensaje que llega — por WhatsApp, Instagram o web — recibe respuesta inmediata, 24/7. El asistente responde dudas y agenda citas sin intervención humana.",
    stats: "< 2 min de tiempo de respuesta",
  },
  {
    icon: Calendar,
    color: "text-accent",
    bg: "bg-accent/15",
    border: "border-accent/30",
    number: "02",
    title: "Gestión de agenda",
    subtitle: "Tu agenda llena, sin esfuerzo manual",
    description:
      "Confirmaciones automáticas, recordatorios personalizados y reprogramación de citas gestionados por el asistente. Reduce los no-shows y optimiza tu calendario.",
    stats: "-40% de citas no atendidas",
  },
  {
    icon: RefreshCw,
    color: "text-primary",
    bg: "bg-primary/15",
    border: "border-primary/30",
    number: "03",
    title: "Seguimiento continuo",
    subtitle: "Convierte pacientes puntuales en clientes fieles",
    description:
      "El sistema envía petición de reseñas, envía recordatorios de siguientes citas y mantiene el contacto con cada paciente de forma personalizada y consistente.",
    stats: "+65% de pacientes recurrentes",
  },
];

const WhatsAppMockup = () => {
  const messages = [
    { type: "user", text: "Hola! Quería saber si tenéis hueco esta semana para una limpieza dental", time: "10:32" },
    { type: "bot", text: "¡Hola! Claro, tenemos disponibilidad. ¿Te viene mejor por la mañana o por la tarde?", time: "10:32" },
    { type: "user", text: "Por la tarde, después de las 17h si puede ser", time: "10:33" },
    { type: "bot", text: "Perfecto. Tengo libre el miércoles 16 a las 17:30h y el jueves 17 a las 18:00h. ¿Cuál prefieres?", time: "10:33" },
    { type: "user", text: "El miércoles me viene genial", time: "10:34" },
    { type: "bot", text: "✅ ¡Reservado! Miércoles 16 a las 17:30h. Te enviaré un recordatorio el día anterior. ¿Necesitas algo más?", time: "10:34" },
  ];

  return (
    <div className="relative mx-auto w-[280px] sm:w-[320px]">
      <div className="relative bg-white rounded-[2.5rem] shadow-2xl shadow-black/30 overflow-hidden border-4 border-gray-800">
        <div className="bg-gray-800 px-6 py-2 flex justify-between items-center">
          <span className="text-white text-xs font-medium">10:34</span>
          <div className="flex gap-1">
            <div className="w-4 h-2 bg-white/70 rounded-sm" />
            <div className="w-1.5 h-1.5 bg-white/70 rounded-full mt-0.5" />
          </div>
        </div>
        <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold shadow">
            SO
          </div>
          <div className="flex-1">
            <p className="text-white text-sm font-semibold leading-none">Smart Office AI</p>
            <p className="text-green-300 text-xs mt-0.5">en línea</p>
          </div>
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        </div>
        <div className="bg-[#ECE5DD] px-3 py-3 space-y-2 h-72 overflow-hidden">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.3 }}
              className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className={`max-w-[82%] rounded-2xl px-3 py-2 shadow-sm ${msg.type === "user" ? "bg-[#DCF8C6] rounded-tr-sm" : "bg-white rounded-tl-sm"}`}>
                <p className="text-[#303030] text-[11px] leading-relaxed">{msg.text}</p>
                <div className="flex items-center justify-end gap-1 mt-0.5">
                  <span className="text-[#8E9194] text-[9px]">{msg.time}</span>
                  {msg.type === "bot" && <Check className="w-2.5 h-2.5 text-blue-500" />}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="bg-[#F0F0F0] px-3 py-2 flex items-center gap-2">
          <div className="flex-1 bg-white rounded-full px-4 py-1.5 text-[11px] text-gray-400">Escribe un mensaje...</div>
          <div className="w-8 h-8 rounded-full bg-[#075E54] flex items-center justify-center">
            <ArrowRight className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-primary/40 border border-primary/30">
        IA Activa 24/7
      </div>
      <div className="absolute -bottom-3 -left-3 bg-white text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        Respuesta en 30s
      </div>
    </div>
  );
};

const SolutionSection = () => {
  const scrollToAudit = () => {
    document.getElementById("audit")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20">
            <MessageSquare className="w-4 h-4" />
            Cómo funciona
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Tu asistente inteligente,{" "}
            <span className="text-gradient">siempre disponible</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Smart Office AI combina tres pilares que trabajan juntos para que tu negocio crezca solo.
          </p>
        </motion.div>

        {/* Clinic image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 rounded-2xl overflow-hidden shadow-lg max-w-4xl mx-auto"
        >
          <img src={clinicImage} alt="Recepción de clínica moderna" loading="lazy" width={1024} height={768} className="w-full h-64 md:h-80 object-cover" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`group relative p-6 rounded-2xl border ${pillar.border} bg-white hover:shadow-lg transition-all duration-300 cursor-default`}
                >
                  <div className="flex gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${pillar.bg} border ${pillar.border} flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${pillar.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-bold ${pillar.color} font-mono`}>{pillar.number}</span>
                        <h3 className="font-bold text-foreground text-base">{pillar.title}</h3>
                      </div>
                      <p className={`text-sm font-semibold ${pillar.color} mb-2`}>{pillar.subtitle}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{pillar.description}</p>
                      <div className={`mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${pillar.bg} ${pillar.color} text-xs font-semibold`}>
                        <Check className="w-3 h-3" />
                        {pillar.stats}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button
                onClick={scrollToAudit}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 gap-2 font-semibold rounded-xl"
              >
                Ver mi caso concreto
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <WhatsAppMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
