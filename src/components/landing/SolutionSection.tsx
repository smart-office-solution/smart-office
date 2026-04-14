import { motion } from "framer-motion";
import { MessageSquare, Calendar, RefreshCw, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    icon: MessageSquare,
    color: "text-violet-400",
    bg: "bg-violet-500/15",
    border: "border-violet-500/30",
    number: "01",
    title: "Captación automática",
    subtitle: "Nunca pierdas un lead por no responder",
    description:
      "Cada mensaje que llega — por WhatsApp, Instagram, web o email — recibe respuesta inmediata, 24/7. El sistema identifica si es una oportunidad real, la cualifica y la guía hacia la cita. Sin que tú ni tu equipo tengáis que hacer nada.",
    stats: "< 2 min de tiempo de respuesta",
  },
  {
    icon: Calendar,
    color: "text-amber-400",
    bg: "bg-amber-500/15",
    border: "border-amber-500/30",
    number: "02",
    title: "Agenda inteligente",
    subtitle: "Citas que se reservan solas",
    description:
      "El paciente elige su horario directamente desde la conversación, según tu disponibilidad real. Sin llamadas, sin idas y vueltas, sin interrupciones para tu equipo. La agenda se rellena mientras tú te dedicas a lo que importa.",
    stats: "Cero llamadas para gestionar citas",
  },
  {
    icon: RefreshCw,
    color: "text-blue-400",
    bg: "bg-blue-500/15",
    border: "border-blue-500/30",
    number: "03",
    title: "Seguimiento automatizado",
    subtitle: "Recupera pacientes que no volvieron",
    description:
      "El sistema detecta automáticamente a pacientes que no reservaron, que no acudieron o que llevan tiempo sin visitarte — y los recontacta con el mensaje adecuado en el momento oportuno. Recuperas oportunidades que antes se perdían para siempre.",
    stats: "+35% de pacientes recuperados",
  },
];

const WhatsAppMockup = () => (
  <div className="relative mx-auto w-[280px] sm:w-[320px]">
    {/* Phone frame */}
    <div className="bg-[#1a1a2e] rounded-[2.5rem] p-3 shadow-2xl shadow-violet-900/40 border border-white/10">
      <div className="bg-[#ECE5DD] rounded-[2rem] overflow-hidden">
        {/* WhatsApp header */}
        <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-violet-500 flex items-center justify-center text-white text-sm font-bold shadow-lg">
            SO
          </div>
          <div className="flex-1">
            <p className="text-white text-sm font-semibold leading-none">Smart Office</p>
            <p className="text-green-300 text-xs mt-0.5">en línea</p>
          </div>
          <div className="flex gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
          </div>
        </div>
        
        {/* Chat messages */}
        <div className="px-3 py-4 space-y-3 bg-[#ECE5DD] min-h-[320px]" style={{backgroundImage: "url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c5b8aa' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")" }}>
          
          {/* User message */}
          <div className="flex justify-end">
            <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-sm px-3 py-2 max-w-[75%] shadow-sm">
              <p className="text-[#303030] text-xs leading-relaxed">Hola, me interesa reservar una consulta de ortodoncia</p>
              <p className="text-[#888] text-[10px] text-right mt-1">10:32 ✓✓</p>
            </div>
          </div>
          
          {/* Bot response */}
          <div className="flex justify-start">
            <div className="bg-white rounded-2xl rounded-tl-sm px-3 py-2 max-w-[80%] shadow-sm">
              <p className="text-[#303030] text-xs leading-relaxed">¡Hola! 👋 Perfecto, te ayudo enseguida. ¿Prefieres mañana por la mañana o por la tarde?</p>
              <p className="text-[#888] text-[10px] text-right mt-1">10:32</p>
            </div>
          </div>
          
          {/* User */}
          <div className="flex justify-end">
            <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-sm px-3 py-2 max-w-[75%] shadow-sm">
              <p className="text-[#303030] text-xs">Por la mañana, mejor</p>
              <p className="text-[#888] text-[10px] text-right mt-1">10:33 ✓✓</p>
            </div>
          </div>
          
          {/* Bot */}
          <div className="flex justify-start">
            <div className="bg-white rounded-2xl rounded-tl-sm px-3 py-2 max-w-[85%] shadow-sm">
              <p className="text-[#303030] text-xs leading-relaxed">Tengo disponible mañana a las <strong>9:30h</strong> o las <strong>11:00h</strong>. ¿Cuál prefieres?</p>
              <p className="text-[#888] text-[10px] text-right mt-1">10:33</p>
            </div>
          </div>
          
          {/* User */}
          <div className="flex justify-end">
            <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-sm px-3 py-2 max-w-[75%] shadow-sm">
              <p className="text-[#303030] text-xs">Las 11:00h perfecto</p>
              <p className="text-[#888] text-[10px] text-right mt-1">10:33 ✓✓</p>
            </div>
          </div>
          
          {/* Bot confirmation */}
          <div className="flex justify-start">
            <div className="bg-white rounded-2xl rounded-tl-sm px-3 py-2 max-w-[85%] shadow-sm">
              <p className="text-[#303030] text-xs leading-relaxed">✅ ¡Perfecto! Tu cita queda confirmada para <strong>mañana a las 11:00h</strong>. Te enviaré un recordatorio el día antes. ¡Hasta pronto! 😊</p>
              <p className="text-[#888] text-[10px] text-right mt-1">10:33</p>
            </div>
          </div>
        </div>
        
        {/* Input bar */}
        <div className="bg-[#F0F0F0] px-3 py-2 flex items-center gap-2">
          <div className="flex-1 bg-white rounded-full px-4 py-1.5 text-[#888] text-xs">
            Escribe un mensaje...
          </div>
          <div className="w-8 h-8 rounded-full bg-[#075E54] flex items-center justify-center">
            <div className="w-3 h-3 border-2 border-white rounded-full" />
          </div>
        </div>
      </div>
    </div>
    
    {/* Floating badge */}
    <div className="absolute -top-4 -right-4 bg-violet-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-violet-600/40 flex items-center gap-1.5">
      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
      Respuesta en &lt;2 min
    </div>
  </div>
);

const SolutionSection = () => {
  const scrollToAudit = () => {
    document.getElementById("audit")?.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <section id="solution" className="py-20 md:py-32 bg-dark-section text-white relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-amber-500/8 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-6">
            Cómo funciona
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Un sistema que trabaja por ti,{" "}
            <span className="text-amber-400">las 24 horas del día</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Smart Office automatiza los 3 momentos críticos que determinan si tu clínica crece o sigue perdiendo oportunidades cada día.
          </p>
        </motion.div>

        {/* WhatsApp demo + pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center mb-20">
          {/* WhatsApp mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col items-center gap-6"
          >
            <WhatsAppMockup />
            <div className="flex flex-col gap-2 text-center">
              <p className="text-white/50 text-sm">Así responde tu asistente inteligente</p>
              <div className="flex items-center justify-center gap-4 text-xs text-white/40">
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-green-400" /> 24/7</span>
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-green-400" /> Sin errores</span>
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-green-400" /> Instantáneo</span>
              </div>
            </div>
          </motion.div>

          {/* Pillars */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative bg-white/[0.04] border ${pillar.border} rounded-2xl p-6 hover:bg-white/[0.07] transition-all duration-300 group`}
              >
                <div className="flex items-start gap-4">
                  <div className={`${pillar.bg} rounded-xl p-3 shrink-0 border ${pillar.border}`}>
                    <pillar.icon className={`h-5 w-5 ${pillar.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-base font-bold text-white">{pillar.title}</h3>
                      <span className="text-2xl font-bold text-white/8 ml-2">{pillar.number}</span>
                    </div>
                    <p className={`${pillar.color} text-xs font-medium mb-2`}>{pillar.subtitle}</p>
                    <p className="text-white/55 text-sm leading-relaxed mb-3">{pillar.description}</p>
                    <div className="border-t border-white/10 pt-3 flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-green-400 shrink-0" />
                      <span className="text-white/70 text-xs font-medium">{pillar.stats}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-white/50 text-sm mb-4">
            ¿Quieres ver exactamente cómo funcionaría en tu clínica?
          </p>
          <Button
            onClick={scrollToAudit}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 font-semibold px-8"
          >
            Descúbrelo con tu auditoría gratuita
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
