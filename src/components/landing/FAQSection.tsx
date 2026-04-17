import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";

const faqs = [
  {
    q: "¿Cuánto tiempo lleva poner en marcha el sistema?",
    a: "En 2 semanas tu asistente está activo. Nosotros nos encargamos de toda la configuración técnica: integración con WhatsApp, personalización de respuestas, conexión con tu agenda y pruebas de calidad. Tú no tienes que hacer nada técnico.",
  },
  {
    q: "¿Necesito tener conocimientos técnicos?",
    a: "En absoluto. El sistema está diseñado para que tú te limites a gestionar tu clínica. Nosotros configuramos todo, te formamos en 2 horas y te damos soporte continuo. Si tienes dudas, escribes y te respondemos.",
  },
  {
    q: "¿Qué pasa si el paciente hace una pregunta que el asistente no sabe responder?",
    a: "El sistema está entrenado para saber cuándo escalar una conversación a un humano. En esos casos, te notifica y puedes tomar el control de la conversación en cualquier momento. Lo mejor de dos mundos: automatización + toque humano cuando se necesita.",
  },
  {
    q: "¿Se puede integrar con mi software de gestión actual?",
    a: "Sí. Trabajamos con los sistemas de gestión más habituales del sector dental y médico. Durante la auditoría gratuita analizamos tu caso concreto y te confirmamos la compatibilidad antes de empezar.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "Tenemos planes adaptados al tamaño de tu clínica. El ROI medio de nuestros clientes es positivo desde el primer mes. Solicita tu auditoría gratuita y te presentamos una propuesta personalizada sin compromiso.",
  },
  {
    q: "¿Los pacientes sabrán que hablan con una IA?",
    a: "El sistema se presenta como el asistente de tu clínica, no como un robot genérico. Las respuestas están personalizadas con tu nombre, tu tono y tu información. La mayoría de pacientes no distinguen si hablan con una persona o con el asistente.",
  },
];

const FAQItem = ({ q, a, index }: { q: string; a: string; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="border border-violet-200/60 rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm hover:border-violet-300/80 transition-colors duration-200"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 p-6 text-left group"
      >
        <span className="font-display font-semibold text-foreground text-base leading-snug group-hover:text-violet-700 transition-colors">
          {q}
        </span>
        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${open ? "bg-violet-600 rotate-180" : "bg-violet-100 group-hover:bg-violet-200"}`}>
          <ChevronDown className={`w-4 h-4 ${open ? "text-white" : "text-violet-600"}`} />
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <div className="h-px bg-violet-100 mb-4" />
              <p className="text-muted-foreground leading-relaxed text-sm">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => (
  <section id="faq" className="py-20 md:py-28 bg-section-gradient relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 right-0 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 border border-violet-200 text-violet-700 text-sm font-semibold uppercase tracking-wider mb-6">
            <MessageCircle className="w-3.5 h-3.5" />
            Preguntas frecuentes
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Preguntas frecuentes sobre automatización para clínicas
          </h2>
          <p className="sr-only">Todo lo que necesitas saber</p>
          <p className="text-muted-foreground text-lg">
            ¿Tienes más preguntas? Escríbenos y te respondemos en menos de 24h.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FAQSection;
