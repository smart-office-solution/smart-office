import { motion } from "framer-motion";
import { MessageSquare, Calendar, RefreshCw, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const pillars = [
  {
        icon: MessageSquare,
        color: "text-primary",
        bg: "bg-primary/10",
        number: "01",
        title: "Captación automática",
        subtitle: "Nunca pierdas un lead por no responder",
        description:
                "Cada mensaje que llega — por WhatsApp, Instagram, web o email — recibe respuesta inmediata, 24/7. El sistema identifica si es una oportunidad real, la cualifica y la guía hacia la cita. Sin que tú ni tu equipo tengáis que hacer nada.",
        stats: "< 2 min de tiempo de respuesta",
  },
  {
        icon: Calendar,
        color: "text-accent",
        bg: "bg-accent/10",
        number: "02",
        title: "Agenda inteligente",
        subtitle: "Citas que se reservan solas",
        description:
                "El paciente elige su horario directamente desde la conversación, según tu disponibilidad real. Sin llamadas, sin idas y vueltas, sin interrupciones para tu equipo. La agenda se rellena mientras tú te dedicas a lo que importa.",
        stats: "Cero llamadas para gestionar citas",
  },
  {
        icon: RefreshCw,
        color: "text-primary",
        bg: "bg-primary/10",
        number: "03",
        title: "Seguimiento automatizado",
        subtitle: "Recupera pacientes que no volvieron",
        description:
                "El sistema detecta automáticamente a pacientes que no reservaron, que no acudieron o que llevan tiempo sin visitarte — y los recontacta con el mensaje adecuado en el momento oportuno. Recuperas oportunidades que antes se perdían para siempre.",
        stats: "+35% de pacientes recuperados",
  },
  ];

const SolutionSection = () => {
    const scrollToAudit = () => {
          document.getElementById("audit")?.scrollIntoView({ behavior: "smooth" });
    };
  
    return (
          <section id="solution" className="py-20 md:py-32 bg-dark-section text-white">
                <div className="container mx-auto px-4">
                        <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="text-center mb-16"
                                  >
                                  <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4 px-3 py-1 bg-accent/15 rounded-full">
                                              Cómo funciona
                                  </span>span>
                                  <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                                              Un sistema que trabaja por ti,{" "}
                                              <span className="text-accent">las 24 horas del día</span>span>
                                  </h2>h2>
                                  <p className="text-white/60 max-w-2xl mx-auto text-lg">
                                              Smart Office automatiza los 3 momentos críticos que determinan si tu clínica crece o sigue perdiendo oportunidades cada día.
                                  </p>p>
                        </motion.div>motion.div>
                
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                          {pillars.map((pillar, index) => (
                        <motion.div
                                        key={pillar.number}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.15 }}
                                        className="relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 hover:border-white/20 transition-all duration-300"
                                      >
                                      <div className="flex items-start justify-between mb-6">
                                                      <div className={`${pillar.bg} rounded-xl p-3`}>
                                                                        <pillar.icon className={`h-6 w-6 ${pillar.color}`} />
                                                      </div>div>
                                                      <span className="text-4xl font-bold text-white/10">{pillar.number}</span>span>
                                      </div>div>
                        
                                      <h3 className="text-xl font-bold text-white mb-1">{pillar.title}</h3>h3>
                                      <p className="text-accent text-sm font-medium mb-4">{pillar.subtitle}</p>p>
                                      <p className="text-white/60 text-sm leading-relaxed mb-6">{pillar.description}</p>p>
                        
                                      <div className="border-t border-white/10 pt-4">
                                                      <span className="text-xs font-semibold text-white/40 uppercase tracking-wide">Resultado</span>span>
                                                      <p className="text-white font-semibold mt-1">{pillar.stats}</p>p>
                                      </div>div>
                        </motion.div>motion.div>
                      ))}
                        </div>div>
                
                        <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="text-center"
                                  >
                                  <p className="text-white/50 text-sm mb-4">
                                              ¿Quieres ver exactamente cómo funcionaría en tu clínica?
                                  </p>p>
                                  <Button
                                                onClick={scrollToAudit}
                                                size="lg"
                                                className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 font-semibold px-8"
                                              >
                                              Descúbrelo con tu auditoría gratuita
                                              <ArrowRight className="h-4 w-4" />
                                  </Button>Button>
                        </motion.div>motion.div>
                </div>div>
          </section>section>
        );
};

export default SolutionSection;
</section>import { motion } from "framer-motion";

const SolutionSection = () => (
  <section id="solution" className="py-20 md:py-28 bg-section-gradient">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
          LA SOLUCIÓN
        </p>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-5">
          <span className="text-gradient">S.O.S</span> — Smart Office System
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
          Un sistema que capta, atiende, agenda y recupera pacientes automáticamente
        </p>

        <p className="text-muted-foreground mb-4 leading-relaxed">
          Diseñado para clínicas que quieren dejar de perder oportunidades y empezar a tener un sistema que trabaja por ellas.
        </p>

        <p className="text-foreground font-display font-semibold text-lg">
          Sin depender de ti ni de tu equipo, <span className="text-accent font-bold">24/7</span>
        </p>
      </motion.div>
    </div>
  </section>
);

export default SolutionSection;
