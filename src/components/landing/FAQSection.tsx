import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";

const faqs = [
  {
    q: "¿En cuánto tiempo lo tengo funcionando?",
    a: "En 7 días tu web empieza a captar contactos. Nosotros nos ocupamos de todo: botón de WhatsApp, formularios, chatbot básico y conexión con tu agenda. Tú no tocas nada técnico.",
  },
  {
    q: "¿Tengo que saber de tecnología?",
    a: "Nada. Lo dejamos todo listo y te enseñamos a manejarlo en menos de 1 hora. Si tienes una duda, nos escribes y te ayudamos.",
  },
  {
    q: "¿Y si el cliente pregunta algo que el chatbot no sabe?",
    a: "El chatbot solo responde lo básico (horarios, precios, ubicación). Cuando hay una pregunta más compleja, te avisa para que entres tú. Lo mejor de los dos mundos: rapidez y trato humano.",
  },
  {
    q: "¿Funciona con mi web actual?",
    a: "En la mayoría de casos sí. En la Auditoría Gratuita revisamos tu web y te confirmamos qué se puede mejorar sin tener que rehacerla.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "Hay planes para distintos tamaños de negocio, desde 390€. La mayoría de clientes recupera la inversión el primer mes con los nuevos contactos. Pide tu Auditoría Gratuita y te decimos qué plan encaja mejor.",
  },
  {
    q: "¿Mis clientes sabrán que es un chatbot?",
    a: "El chatbot se presenta como el asistente de tu negocio, con tu nombre y tu tono. Resuelve dudas básicas y, cuando hace falta, te pasa la conversación a ti. Sin frialdad ni respuestas raras.",
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
            Resolvemos tus dudas antes de empezar
          </h2>
          <p className="text-muted-foreground text-lg">
            ¿Te queda alguna duda? Pide tu Auditoría Gratuita y te la resolvemos sin compromiso.
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
