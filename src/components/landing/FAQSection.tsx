import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";

const faqs = [
  {
    q: "¿Cuánto tiempo lleva ponerlo en marcha?",
    a: "Depende del alcance, pero la mayoría de mejoras (landing, botón de WhatsApp, formularios, chatbot básico) están listas en pocos días. Yo me encargo de toda la parte técnica, tú solo das el visto bueno.",
  },
  {
    q: "¿Necesito tener conocimientos técnicos?",
    a: "Para nada. Está pensado justo para lo contrario: que tú no tengas que pelearte con tecnología. Yo lo configuro todo, te explico lo básico y te doy soporte cuando lo necesites.",
  },
  {
    q: "¿Qué pasa si el bot no sabe responder algo?",
    a: "El chatbot está pensado para resolver lo habitual (precios, horarios, disponibilidad…). Cuando una consulta se sale de ahí, te avisa y tú continúas la conversación. Lo justo de automatización + tu toque humano cuando hace falta.",
  },
  {
    q: "¿Funciona con mi web actual?",
    a: "En la mayoría de casos sí, sin tocar todo. Si tu web tiene algún problema serio, te lo digo en la auditoría y te propongo la mejor opción (mejora puntual o landing nueva sencilla).",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "Hay planes para distintos tamaños de negocio y también propuestas a medida. En la auditoría gratuita te digo qué necesitas realmente — sin venderte nada que no te haga falta.",
  },
  {
    q: "¿Para qué tipo de negocios es esto?",
    a: "Para pymes con web que no convierte: clínicas dentales, fisios, estética, cervecerías artesanales, tiendas, negocios con citas o productos… Si tienes web pero los clientes no llegan, te puedo ayudar.",
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
            Lo que sueles preguntarme antes de empezar
          </h2>
          <p className="text-muted-foreground text-lg">
            ¿Te queda alguna duda? Escríbeme y te respondo en menos de 24h.
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
