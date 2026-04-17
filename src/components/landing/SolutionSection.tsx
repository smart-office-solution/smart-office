import { motion } from "framer-motion";
import { MessageSquare, Calendar, RefreshCw, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    icon: MessageSquare,
    color: "text-primary",
    bg: "bg-primary/8",
    border: "border-primary/15",
    number: "01",
    title: "Captación automática",
    subtitle: "Nunca pierdas un lead por no responder",
    description:
      "Cada mensaje que llega — por WhatsApp, Instagram o web — recibe respuesta inmediata, 24/7. El asistente responde dudas y agenda citas sin intervención humana.",
    stats: "< 2 min de tiempo de respuesta",
    bullets: [
      "Respuesta instantánea en WhatsApp, Instagram y web",
      "Sin intervención humana, 24/7",
    ],
  },
  {
    icon: Calendar,
    color: "text-accent",
    bg: "bg-accent/8",
    border: "border-accent/15",
    number: "02",
    title: "Gestión de agenda",
    subtitle: "Tu agenda llena, sin esfuerzo manual",
    description:
      "Confirmaciones automáticas, recordatorios personalizados y reprogramación de citas gestionados por el asistente. Reduce los no-shows y optimiza tu calendario.",
    stats: "-40% de citas no atendidas",
    bullets: [
      "Agenda automática directa en tu calendario",
      "Recordatorios 24h y 1h antes de cada cita",
      "Gestión de cancelaciones y reprogramaciones",
    ],
  },
  {
    icon: RefreshCw,
    color: "text-primary",
    bg: "bg-primary/8",
    border: "border-primary/15",
    number: "03",
    title: "Seguimiento continuo",
    subtitle: "Convierte pacientes puntuales en clientes fieles",
    description:
      "El sistema envía petición de reseñas, envía recordatorios de siguientes citas y mantiene el contacto con cada paciente de forma personalizada y consistente.",
    stats: "+65% de pacientes recurrentes",
    bullets: [
      "Solicitud automática de reseñas en Google tras cada visita",
      "Recordatorios de seguimiento personalizados",
    ],
  },
];

const LaptopPhoneMockup = () => {
  const messages = [
    { type: "in", text: "Hola, querría saber si tenéis hueco esta semana para una limpieza dental" },
    { type: "out", text: "¡Hola! Claro, déjame comprobar. ¿Qué día prefieres?" },
    { type: "in", text: "Miércoles o jueves me viene bien" },
    { type: "out", text: "¿Por la mañana o por la tarde?" },
    { type: "in", text: "Por la tarde me viene mejor, a partir de las 17:00" },
    { type: "out", text: "Perfecto ✅ Te reservo el martes 22 a las 17:30h. ¿Te viene bien?" },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <div
        className="relative w-full max-w-[600px] mx-auto scale-[0.85] sm:scale-100 origin-center"
        style={{ filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.12))" }}
      >
        {/* Laptop */}
        <div className="relative w-full">
          {/* Laptop screen frame */}
          <div
            className="relative w-[88%] mx-auto"
            style={{ background: "#2a2a2a", borderRadius: "14px 14px 0 0", padding: "10px 10px 0 10px" }}
          >
            {/* Browser bar */}
            <div className="bg-white rounded-t-md px-3 py-2 flex items-center gap-2 border-b border-gray-200">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 mx-2 bg-gray-100 rounded px-2 py-0.5 text-[10px] text-gray-500 truncate">
                🔒 clinica-ejemplo.es
              </div>
            </div>

            {/* Website content */}
            <div className="relative bg-white h-[260px] overflow-hidden">
              {/* Nav */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-100">
                <span className="text-[11px] font-bold text-gray-800">🦷 Clínica DentalMed</span>
                <div className="flex gap-3 text-[9px] text-gray-500">
                  <span>Inicio</span>
                  <span>Servicios</span>
                  <span>Contacto</span>
                </div>
              </div>

              {/* Hero */}
              <div className="grid grid-cols-2 gap-3 px-4 py-4">
                <div className="flex flex-col justify-center">
                  <h4 className="text-[13px] font-bold text-gray-900 leading-tight mb-1.5">
                    Tu sonrisa en las mejores manos
                  </h4>
                  <p className="text-[8px] text-gray-500 leading-snug mb-2">
                    Especialistas en odontología estética y general. Pide cita en menos de un minuto.
                  </p>
                  <button
                    className="text-[9px] font-semibold text-white px-2.5 py-1 rounded w-fit"
                    style={{ background: "#c6990c" }}
                  >
                    Pedir cita
                  </button>
                </div>
                <div
                  className="rounded-md h-full min-h-[100px] flex items-center justify-center text-3xl"
                  style={{
                    background:
                      "linear-gradient(135deg, #e0f7f7 0%, #f4ede4 100%)",
                  }}
                >
                  🦷
                </div>
              </div>

              {/* Chat popup */}
              <div className="absolute right-3 bottom-14 w-[150px] rounded-lg overflow-hidden shadow-lg border border-gray-200 bg-white">
                <div className="px-2.5 py-1.5 flex items-center gap-1.5" style={{ background: "#03a8a8" }}>
                  <div className="w-4 h-4 rounded-full bg-white/30 flex items-center justify-center text-[8px]">🦷</div>
                  <div className="flex-1">
                    <p className="text-white text-[8px] font-semibold leading-none">Asistente</p>
                    <p className="text-white/80 text-[7px] mt-0.5">En línea</p>
                  </div>
                </div>
                <div className="p-2 bg-gray-50">
                  <div className="bg-white rounded-md p-1.5 text-[8px] text-gray-700 leading-snug shadow-sm">
                    👋 ¡Hola! ¿En qué puedo ayudarte hoy?
                  </div>
                </div>
                <div className="px-2 py-1.5 bg-white border-t border-gray-100 flex items-center gap-1">
                  <div className="flex-1 text-[7px] text-gray-400">Escribe un mensaje...</div>
                  <div className="w-3.5 h-3.5 rounded-full flex items-center justify-center" style={{ background: "#03a8a8" }}>
                    <ArrowRight className="w-2 h-2 text-white" />
                  </div>
                </div>
              </div>

              {/* Chat bubble */}
              <div
                className="absolute right-3 bottom-3 w-9 h-9 rounded-full flex items-center justify-center shadow-md"
                style={{ background: "#03a8a8" }}
              >
                <MessageSquare className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Laptop base */}
          <div className="w-[96%] h-2 mx-auto" style={{ background: "#d0ccc4", borderRadius: "0 0 4px 4px" }} />
          <div className="w-[40%] h-1.5 mx-auto" style={{ background: "#c4c0b8", borderRadius: "0 0 8px 8px" }} />
        </div>

        {/* Phone overlay */}
        <div
          className="absolute"
          style={{ right: "-30px", bottom: "0", zIndex: 2, width: "170px" }}
        >
          <div
            className="relative"
            style={{ background: "#1a1a1a", borderRadius: "22px", padding: "8px" }}
          >
            {/* Notch */}
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-12 h-3 bg-black rounded-full z-10" />
            <div className="bg-white rounded-[16px] overflow-hidden">
              {/* WhatsApp header */}
              <div className="px-2.5 py-2 flex items-center gap-1.5" style={{ background: "#075E54", paddingTop: "16px" }}>
                <div className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center text-[8px]">🦷</div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-[8px] font-semibold leading-none truncate">Clínica DentalMed</p>
                  <p className="text-green-200 text-[7px] mt-0.5">En línea</p>
                </div>
              </div>

              {/* Messages */}
              <div className="px-1.5 py-2 space-y-1" style={{ background: "#ECE5DD", height: "260px", overflow: "hidden" }}>
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 4 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.3 }}
                    className={`flex ${msg.type === "out" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className="max-w-[85%] px-1.5 py-1 shadow-sm"
                      style={{
                        background: msg.type === "out" ? "#DCF8C6" : "#ffffff",
                        borderRadius: msg.type === "out" ? "8px 2px 8px 8px" : "2px 8px 8px 8px",
                      }}
                    >
                      <p className="text-[7px] leading-snug text-[#303030]">{msg.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Input bar */}
              <div className="px-1.5 py-1.5 bg-white flex items-center gap-1 border-t border-gray-100">
                <div className="flex-1 bg-gray-100 rounded-full px-2 py-0.5 text-[7px] text-gray-400">Mensaje</div>
                <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ background: "#25D366" }}>
                  <ArrowRight className="w-2 h-2 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pills */}
      <div className="flex gap-3 mt-8 flex-wrap justify-center">
        <span
          className="inline-flex items-center text-xs font-medium px-3 py-1.5 rounded-lg"
          style={{ background: "rgba(3,168,168,0.1)", color: "#03a8a8" }}
        >
          🌐 Chatbot en tu web
        </span>
        <span
          className="inline-flex items-center text-xs font-medium px-3 py-1.5 rounded-lg"
          style={{ background: "rgba(37,211,102,0.1)", color: "#128C7E" }}
        >
          📱 Bot en WhatsApp
        </span>
      </div>
    </div>
  );
};

const SolutionSection = () => {
  const scrollToAudit = () => {
    document.getElementById("audit")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
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
            Así trabaja <span className="text-gradient">Smart Office IA</span> para ti
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Smart Office IA combina tres pilares que trabajan juntos para que tu negocio crezca solo.
          </p>
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
                      <ul className="mt-3 space-y-1.5">
                        {pillar.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <Check className={`w-4 h-4 ${pillar.color} shrink-0 mt-0.5`} />
                            <span className="text-sm text-foreground/80 leading-snug">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      <div className={`mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${pillar.bg} ${pillar.color} text-xs font-semibold`}>
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
            <LaptopPhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
