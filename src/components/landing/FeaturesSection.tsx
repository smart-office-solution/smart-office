import { motion } from "framer-motion";
import { Globe, Filter, CalendarPlus, Clock4, MessageSquare, Share2 } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Respuestas en todos tus canales, sin esfuerzo",
    desc: "Web, WhatsApp, Instagram, Facebook…\n\nTodos los mensajes se gestionan en un solo sistema, sin que tú o tu equipo tengáis que estar pendientes.",
  },
  {
    icon: Filter,
    title: "Filtra clientes y prioriza los que realmente importan",
    desc: "El sistema identifica automáticamente oportunidades reales y evita que pierdas tiempo en consultas que no convierten.",
  },
  {
    icon: CalendarPlus,
    title: "Citas que se agendan solas",
    desc: "Tus clientes reservan directamente desde la conversación.\n\nSin llamadas, sin idas y vueltas, sin interrupciones para tu equipo.",
  },
  {
    icon: Clock4,
    title: "Tu negocio activo 24/7, sin interrupciones",
    desc: "Aunque tú o tu equipo no estéis disponibles, el sistema sigue atendiendo, respondiendo y generando oportunidades.",
  },
  {
    icon: MessageSquare,
    title: "Conversaciones naturales que generan confianza",
    desc: "Respuestas personalizadas que se sienten humanas, cercanas y profesionales.\n\nTu cliente no siente que habla con un robot.",
  },
  {
    icon: Share2,
    title: "Se integra con tu forma de trabajar",
    desc: "Conecta con tu calendario, CRM y herramientas actuales.\n\nSin cambios complicados, sin fricción para tu equipo.",
  },
];

const FeaturesSection = () => (
  <section id="features" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
          Recepcionista <span className="text-accent font-bold">24/7</span>
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Todo lo que necesitas para no perder oportunidades ni depender de estar disponible
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 group"
          >
            <div className="h-11 w-11 rounded-lg bg-hero-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-3">{title}</h3>
            {desc.split("\n\n").map((paragraph, idx) => (
              <p key={idx} className="text-sm text-muted-foreground mb-2 last:mb-0">
                {paragraph}
              </p>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
