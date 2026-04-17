import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Star, ChevronLeft, ChevronRight, Settings } from "lucide-react";

type StepKey = "1" | "2" | "3";

const steps: Record<
  StepKey,
  {
    number: string;
    title: string;
    sub: string;
    accent: string;
    accentBg: string;
    accentBgSoft: string;
    tagLabel: string;
    panelTitle: string;
    description: string;
    features: string[];
    metricNumber: string;
    metricText: string;
  }
> = {
  "1": {
    number: "1",
    title: "Captación automática",
    sub: "Nunca pierdas un lead",
    accent: "#c6990c",
    accentBg: "rgba(198,153,12,0.1)",
    accentBgSoft: "rgba(198,153,12,0.08)",
    tagLabel: "01 · Captación",
    panelTitle: "Cada mensaje recibe respuesta en segundos",
    description:
      "WhatsApp, Instagram, web — da igual desde dónde escriba el paciente. El asistente responde al instante, resuelve dudas y lo guía hasta pedir cita. Sin que tú levantes el teléfono.",
    features: [
      "Respuesta en menos de 2 minutos, 24/7",
      "WhatsApp, Instagram y chatbot en web",
      "Sin intervención humana",
    ],
    metricNumber: "78%",
    metricText: "de pacientes elige al primero en responder",
  },
  "2": {
    number: "2",
    title: "Gestión de agenda",
    sub: "Citas sin esfuerzo manual",
    accent: "#03a8a8",
    accentBg: "rgba(3,168,168,0.1)",
    accentBgSoft: "rgba(3,168,168,0.08)",
    tagLabel: "02 · Agenda",
    panelTitle: "Tu calendario se llena solo, sin llamadas",
    description:
      "El asistente confirma disponibilidad, reserva la cita directamente en tu agenda y manda recordatorios automáticos. Sin idas y venidas, sin llamadas perdidas.",
    features: [
      "Agenda directa en tu calendario",
      "Recordatorios 24h y 1h antes",
      "Cancelaciones y reprogramaciones automáticas",
    ],
    metricNumber: "−40%",
    metricText: "de citas no atendidas con recordatorios automáticos",
  },
  "3": {
    number: "3",
    title: "Seguimiento continuo",
    sub: "Pacientes que vuelven",
    accent: "#9b4ad4",
    accentBg: "rgba(155,74,212,0.1)",
    accentBgSoft: "rgba(155,74,212,0.08)",
    tagLabel: "03 · Seguimiento",
    panelTitle: "Cada paciente se convierte en un cliente fiel",
    description:
      "Después de cada visita, el sistema pide una reseña en Google, manda recordatorios de próximas citas y mantiene el contacto de forma personalizada.",
    features: [
      "Reseñas en Google automáticas tras cada visita",
      "Recordatorios de próximas revisiones",
      "Reactivación de pacientes inactivos",
    ],
    metricNumber: "+65%",
    metricText: "de pacientes recurrentes frente a gestión manual",
  },
};

const WhatsAppVisual = () => {
  const messages = [
    { type: "in", text: "Hola, ¿tenéis hueco esta semana para una limpieza dental?" },
    { type: "out", text: "¡Hola! Claro 😊 Tenemos disponibilidad el martes y el jueves. ¿Prefieres mañana o tarde?" },
    { type: "in", text: "Por la tarde mejor, después de las 17h" },
    { type: "out", text: "Perfecto ✅ Te anoto el martes 22 a las 17:30h. Recibirás confirmación ahora mismo." },
  ];
  return (
    <div className="mx-auto" style={{ width: 280 }}>
      <div style={{ background: "#111", borderRadius: 32, padding: "10px 8px" }}>
        <div className="bg-white overflow-hidden" style={{ borderRadius: 24 }}>
          <div className="flex items-center gap-2 px-3 py-2.5" style={{ background: "#075E54" }}>
            <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center text-white text-sm font-bold">C</div>
            <div className="flex-1">
              <p className="text-white text-[12px] font-semibold leading-none">Clínica Ejemplo</p>
              <p className="text-green-200 text-[10px] mt-0.5">● IA activa 24/7</p>
            </div>
          </div>
          <div className="px-2 py-2.5 space-y-1.5" style={{ background: "#ECE5DD", minHeight: 280 }}>
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.type === "out" ? "justify-end" : "justify-start"}`}>
                <div
                  className="max-w-[85%] px-2 py-1.5 shadow-sm"
                  style={{
                    background: m.type === "out" ? "#DCF8C6" : "#ffffff",
                    borderRadius: m.type === "out" ? "8px 2px 8px 8px" : "2px 8px 8px 8px",
                  }}
                >
                  <p className="text-[10px] leading-snug text-[#303030]">{m.text}</p>
                </div>
              </div>
            ))}
            <div className="pt-1.5">
              <span
                className="inline-flex items-center text-[9px] font-medium px-2 py-1 rounded-md"
                style={{ background: "rgba(3,168,168,0.1)", color: "#03a8a8" }}
              >
                ⚡ Respondido en 8 segundos · Sin intervención humana
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1.5" style={{ background: "#f0f0f0" }}>
            <div className="flex-1 bg-white rounded-full px-3 py-1 text-[10px] text-gray-400">Escribe un mensaje...</div>
            <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "#25D366" }}>
              <ArrowRight className="w-3 h-3 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CalendarVisual = () => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const today = 8;
  const withAppt = [3, 10, 15, 17, 22, 24];
  const newAppt = [11, 18];
  return (
    <div
      className="mx-auto bg-white"
      style={{ width: 280, borderRadius: 20, boxShadow: "0 20px 56px rgba(0,0,0,0.12)", overflow: "hidden" }}
    >
      <div className="px-4 py-3 flex items-center justify-between" style={{ background: "#1a1a1a" }}>
        <div>
          <p className="text-white text-[13px] font-semibold leading-tight">Agenda · Julio 2025</p>
          <p className="text-white/60 text-[10px] mt-0.5">8 citas nuevas esta semana</p>
        </div>
        <div className="flex gap-1">
          <button className="w-6 h-6 rounded-md bg-white/10 text-white flex items-center justify-center">
            <ChevronLeft className="w-3 h-3" />
          </button>
          <button className="w-6 h-6 rounded-md bg-white/10 text-white flex items-center justify-center">
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      </div>
      <div className="p-3.5">
        <div className="grid grid-cols-7 gap-1 mb-1.5">
          {["L", "M", "X", "J", "V", "S", "D"].map((d) => (
            <div key={d} className="text-center text-[9px] font-semibold text-gray-400">{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {days.map((d) => {
            const isToday = d === today;
            const isNew = newAppt.includes(d);
            const hasAppt = withAppt.includes(d);
            let style: React.CSSProperties = {};
            let cls = "text-gray-700";
            if (isToday) { style = { background: "#1a1a1a", color: "#fff" }; cls = ""; }
            else if (isNew) { style = { background: "#c6990c", color: "#fff" }; cls = ""; }
            else if (hasAppt) { style = { background: "rgba(198,153,12,0.15)", color: "#c6990c" }; cls = "font-semibold"; }
            return (
              <div
                key={d}
                className={`aspect-square rounded-md flex items-center justify-center text-[10px] ${cls}`}
                style={style}
              >
                {d}
              </div>
            );
          })}
        </div>
        <div className="mt-3 space-y-2">
          <div className="flex items-center gap-2 p-2 rounded-lg" style={{ background: "rgba(3,168,168,0.06)" }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#03a8a8" }} />
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-semibold text-gray-900 truncate">María López · Limpieza dental</p>
              <p className="text-[9px] text-gray-500">Hoy · 17:30h</p>
            </div>
            <span className="text-[8px] font-bold px-1.5 py-0.5 rounded" style={{ background: "#03a8a8", color: "#fff" }}>Nueva</span>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-lg" style={{ background: "rgba(198,153,12,0.06)" }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#c6990c" }} />
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-semibold text-gray-900 truncate">Carlos Ruiz · Revisión</p>
              <p className="text-[9px] text-gray-500">Mañana · 10:00h</p>
            </div>
            <span className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-green-500 text-white">Confirmada</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ReviewVisual = () => (
  <div className="mx-auto flex flex-col items-center gap-4" style={{ width: 280 }}>
    <div style={{ background: "#111", borderRadius: 28, padding: "10px 8px", width: "100%" }}>
      <div className="bg-white overflow-hidden" style={{ borderRadius: 22 }}>
        <div className="flex items-center gap-2 px-3 py-2.5" style={{ background: "#075E54" }}>
          <div className="w-7 h-7 rounded-full bg-green-400 flex items-center justify-center text-white text-xs font-bold">C</div>
          <div className="flex-1">
            <p className="text-white text-[11px] font-semibold leading-none">Clínica Ejemplo</p>
            <p className="text-green-200 text-[9px] mt-0.5">● Mensaje automático</p>
          </div>
        </div>
        <div className="px-2.5 py-3" style={{ background: "#ECE5DD" }}>
          <div className="bg-white shadow-sm p-2.5" style={{ borderRadius: "2px 8px 8px 8px" }}>
            <p className="text-[10px] leading-snug text-[#303030] mb-1.5">
              ¡Hola María! 😊 Esperamos que tu visita de hoy haya ido genial.
            </p>
            <p className="text-[10px] leading-snug text-[#303030] mb-2">
              ¿Podrías dejarnos una reseña en Google? Solo te lleva 1 minuto y nos ayuda muchísimo 🙏
            </p>
            <div className="text-center text-[14px] mb-2">⭐⭐⭐⭐⭐</div>
            <button
              className="w-full text-white text-[10px] font-semibold py-1.5 rounded-md flex items-center justify-center gap-1"
              style={{ background: "#03a8a8" }}
            >
              Dejar reseña en Google <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      className="bg-white flex items-center gap-3"
      style={{ borderRadius: 12, boxShadow: "0 8px 24px rgba(0,0,0,0.08)", padding: "10px 14px" }}
    >
      <Star className="w-6 h-6 fill-current" style={{ color: "#c6990c" }} />
      <div>
        <p className="font-display font-bold text-xl leading-none text-gray-900">4.9</p>
        <p className="text-[10px] text-gray-500 mt-0.5">+31 reseñas en 2 meses</p>
      </div>
    </div>
  </div>
);

const SolutionSection = () => {
  const [active, setActive] = useState<StepKey>("1");
  const step = steps[active];

  const renderVisual = () => {
    if (active === "1") return <WhatsAppVisual />;
    if (active === "2") return <CalendarVisual />;
    return <ReviewVisual />;
  };

  return (
    <section className="relative overflow-hidden" style={{ background: "#f4ede4", padding: "64px 16px" }}>
      <div className="mx-auto" style={{ maxWidth: 940 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20">
            <Settings className="w-4 h-4" />
            Cómo funciona
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Tres pasos.{" "}
            <span
              className="italic"
              style={{
                background: "linear-gradient(90deg, #c6990c 0%, #8a6200 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Una clínica que trabaja sola.
            </span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Sin complejidad técnica. Sin cambiar tu forma de trabajar. Activo en 7 días.
          </p>
        </motion.div>

        {/* Tabs */}
        <div
          className="bg-white mb-8"
          style={{ border: "1px solid rgba(26,26,26,0.1)", borderRadius: 16, padding: 6 }}
        >
          <div className="flex gap-1 overflow-x-auto scrollbar-none">
            {(Object.keys(steps) as StepKey[]).map((key) => {
              const s = steps[key];
              const isActive = key === active;
              return (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className="flex items-center gap-2.5 flex-1 min-w-[200px] text-left transition-all duration-200"
                  style={{
                    padding: "12px 16px",
                    borderRadius: 12,
                    background: isActive ? "#1a1a1a" : "transparent",
                    boxShadow: isActive ? "0 4px 16px rgba(0,0,0,0.15)" : "none",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.background = "rgba(198,153,12,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.background = "transparent";
                  }}
                >
                  <div
                    className="flex items-center justify-center font-semibold text-xs shrink-0"
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: isActive ? "#c6990c" : "#f4ede4",
                      color: isActive ? "#fff" : "#8a8580",
                    }}
                  >
                    {s.number}
                  </div>
                  <div className="min-w-0">
                    <p
                      className="font-medium leading-tight"
                      style={{ fontSize: 13, color: isActive ? "#fff" : "#1a1a1a" }}
                    >
                      {s.title}
                    </p>
                    <p
                      className="leading-tight mt-0.5"
                      style={{ fontSize: 11, color: isActive ? "rgba(255,255,255,0.55)" : "#5a5750" }}
                    >
                      {s.sub}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${active}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
            >
              <span
                className="inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-full mb-4"
                style={{ background: step.accentBg, color: step.accent }}
              >
                {step.tagLabel}
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 leading-tight">
                {step.panelTitle}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-5">{step.description}</p>
              <ul className="space-y-2.5 mb-6">
                {step.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 shrink-0 mt-0.5" style={{ color: step.accent }} />
                    <span className="text-sm text-foreground/85 leading-snug">{f}</span>
                  </li>
                ))}
              </ul>
              <div
                className="flex items-center gap-4 p-4 rounded-xl"
                style={{ background: step.accentBgSoft }}
              >
                <p
                  className="font-display font-bold text-3xl md:text-4xl leading-none"
                  style={{ color: step.accent }}
                >
                  {step.metricNumber}
                </p>
                <p className="text-sm text-foreground/75 leading-snug flex-1">{step.metricText}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`visual-${active}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="flex justify-center"
            >
              {renderVisual()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
