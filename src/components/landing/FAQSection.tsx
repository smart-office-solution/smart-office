import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Tengo que cambiar todas mis herramientas actuales?",
    answer:
      "No. Smart Office se integra con lo que ya usas: tu calendario de Google, tu CRM, WhatsApp Business, Instagram y cualquier herramienta de gestión de citas. No tienes que aprender nada nuevo ni cambiar tus procesos. El sistema se adapta a ti, no al revés.",
  },
  {
    question: "¿Cuánto tiempo tarda en estar funcionando?",
    answer:
      "La implementación completa tarda entre 7 y 14 días. En la primera semana configuramos el sistema, lo conectamos con tus canales y lo personalizamos con el tono y la información de tu clínica. En la segunda semana hacemos pruebas y ajustes. A partir del día 15, el sistema trabaja de forma autónoma.",
  },
  {
    question: "¿Los pacientes sabrán que están hablando con una IA?",
    answer:
      "El sistema está diseñado para responder de forma natural, cercana y profesional — exactamente como lo haría un miembro de tu equipo. Sin embargo, siempre es transparente cuando el paciente pregunta directamente. Y si en algún momento la conversación lo requiere, puede derivar al equipo humano sin que el paciente note la transición.",
  },
  {
    question: "¿Qué pasa si tengo una pregunta o necesito ayuda después de la instalación?",
    answer:
      "Incluimos soporte continuo en todos los planes. El mantenimiento mensual cubre ajustes, actualizaciones del sistema, nuevas integraciones y soporte por email con respuesta en menos de 24h. Para consultas urgentes, también ofrecemos soporte por WhatsApp.",
  },
  {
    question: "¿Puedo cancelar el servicio cuando quiera?",
    answer:
      "Sí. No hay permanencia mínima. Puedes cancelar el mantenimiento mensual con 30 días de antelación. La instalación inicial es un pago único que no se devuelve, pero el sistema quedará configurado y funcionando en tus herramientas aunque decidas no continuar con el mantenimiento.",
  },
];

const FAQItem = ({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <div className="border border-border rounded-xl overflow-hidden">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-muted/30 transition-colors"
    >
      <span className="font-semibold text-foreground pr-4">{faq.question}</span>
      <ChevronDown
        className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-5 text-muted-foreground leading-relaxed border-t border-border pt-4">
            {faq.answer}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3 px-3 py-1 bg-primary/10 rounded-full">
            Preguntas frecuentes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Todo lo que necesitas saber
          </h2>
          <p className="text-muted-foreground">
            Si tienes alguna duda que no está aquí, escríbenos a{" "}
            <a href="mailto:silviagsierra@gmail.com" className="text-primary hover:underline">
              silviagsierra@gmail.com
            </a>
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <FAQItem
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
