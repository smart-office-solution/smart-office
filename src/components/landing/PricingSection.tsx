import { motion } from "framer-motion";
import { ArrowRight, Sparkles, X, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Presencia que Convierte",
    tagline: "Atrae clientes incluso cuando duermes",
    pain: "Pierdes pacientes porque tu web <strong>no transmite confianza</strong>… y <strong>nadie responde</strong> cuando te escriben.",
    solution: "<strong class='text-accent'>Optimizamos</strong> tu web para convertir visitas en citas, con un asistente que <strong>responde automáticamente</strong>.",
    transforms: [
      "De una web que no genera nada → a una web que <strong class='text-accent'>capta y responde por ti</strong>",
      "De una consulta en Google a una <strong class='text-accent'>cita agendada en minutos</strong>",
    ],
    price: "349€",
    monthly: "49€/mes",
    includes: [
      "Landing page optimizada",
      "Copy enfocado a captar pacientes",
      "Bot básico en web (FAQ + primer filtro)",
      "Botón directo a WhatsApp en web y Google Business",
      "Configuración inicial",
    ],
    popular: false,
    accent: "accent",
    highlightWords: ["Convierte"],
  },
  {
    name: "Agenda sin Caos",
    tagline: "Menos llamadas. Más citas. Gana hasta 10h a la semana",
    pain: "Pierdes horas respondiendo <strong>siempre lo mismo</strong>. Se te escapan pacientes <strong>fuera de horario</strong>.",
    solution: "Un asistente que <strong class='text-primary'>responde, filtra y agenda</strong> citas automáticamente en web y WhatsApp.",
    transforms: [
      "De responder el 40% → a cubrir <strong class='text-primary'>prácticamente todas las consultas</strong>",
      "Recuperas <strong class='text-primary'>varias horas a la semana</strong>",
      "Menos <strong class='text-primary'>citas perdidas</strong> gracias a recordatorios",
    ],
    price: "849€",
    monthly: "69€/mes",
    includes: [
      "Todo lo del paquete 1",
      "Integración con WhatsApp Business",
      "Asistente con respuestas personalizadas",
      "Sistema de solicitud de citas",
      "Recordatorios básicos de citas",
      "Ajuste inicial del flujo de conversación",
    ],
    popular: true,
    accent: "primary",
    highlightWords: ["sin Caos"],
  },
  {
    name: "Clínica Siempre Llena",
    tagline: "Llena los huecos de tu agenda sin depender de nuevos pacientes",
    pain: "Tienes días con <strong>huecos vacíos</strong>… y pacientes que <strong>no vuelven</strong> porque nadie les recuerda.",
    solution: "Sistema para <strong class='text-violet'>reactivar pacientes</strong> y rellenar tu agenda <strong class='text-violet'>automáticamente</strong>.",
    transforms: [
      "Menos <strong class='text-violet'>huecos vacíos</strong>",
      "<strong class='text-violet'>Más ingresos</strong> sin conseguir nuevos pacientes",
      "Mejor <strong class='text-violet'>aprovechamiento de tu agenda</strong>",
    ],
    price: "1.700€",
    monthly: "109€/mes",
    includes: [
      "Recordatorios de citas mejorado",
      "Mensajes automáticos para reactivar pacientes",
      "Secuencia tipo: \"hace tiempo que no vienes\"",
      "Estrategia básica de ocupación de agenda",
    ],
    popular: false,
    accent: "violet",
    highlightWords: ["Siempre Llena"],
  },
];

const accentStyles = {
  accent: {
    badge: "bg-accent/10 border-accent/20 text-accent",
    card: "border-accent/15 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1",
    painBg: "bg-destructive/5 border-destructive/10",
    solutionBg: "bg-accent/5 border-accent/10",
    checkColor: "text-accent",
    button: "border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground",
    priceBg: "bg-accent/5",
    titleColor: "text-accent",
  },
  primary: {
    badge: "bg-primary/10 border-primary/20 text-primary",
    card: "border-primary/20 hover:border-primary/40 shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/15 hover:-translate-y-1",
    painBg: "bg-destructive/5 border-destructive/10",
    solutionBg: "bg-primary/5 border-primary/10",
    checkColor: "text-primary",
    button: "bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-md shadow-primary/20",
    priceBg: "bg-primary/5",
    titleColor: "text-primary",
  },
  violet: {
    badge: "bg-violet/10 border-violet/20 text-violet",
    card: "border-violet/15 hover:border-violet/30 hover:shadow-lg hover:shadow-violet/10 hover:-translate-y-1",
    painBg: "bg-destructive/5 border-destructive/10",
    solutionBg: "bg-violet/5 border-violet/10",
    checkColor: "text-violet",
    button: "border-violet/30 text-violet hover:bg-violet hover:text-violet-foreground",
    priceBg: "bg-violet/5",
    titleColor: "text-violet",
  },
};

const highlightName = (name: string, highlights: string[], colorClass: string) => {
  let result = name;
  for (const word of highlights) {
    result = result.replace(word, `<span class="${colorClass} font-extrabold">${word}</span>`);
  }
  return result;
};

const PricingSection = () => {
  const scrollToAudit = () => {
    document.getElementById("audit")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Planes y precios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Elige el plan que{" "}
            <span className="text-primary">se adapta a ti</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Todos los planes incluyen configuración completa, formación y soporte. Sin permanencia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
          {plans.map((plan, i) => {
            const styles = accentStyles[plan.accent as keyof typeof accentStyles];

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-3xl overflow-hidden ${plan.popular ? "scale-[1.03]" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 inset-x-0 flex justify-center z-10">
                    <div className="bg-primary text-primary-foreground text-xs font-bold px-6 py-1.5 rounded-b-xl flex items-center gap-1.5">
                      <Star className="w-3 h-3" />
                      Más elegido
                    </div>
                  </div>
                )}

                <div className={`bg-card border ${styles.card} rounded-3xl p-6 md:p-7 h-full flex flex-col transition-all duration-300 cursor-default ${plan.popular ? "pt-10" : ""}`}>
                  {/* Title — centered */}
                  <h3
                    className="font-display font-bold text-xl md:text-2xl text-foreground mb-1 text-center"
                    dangerouslySetInnerHTML={{
                      __html: highlightName(plan.name, plan.highlightWords, styles.titleColor),
                    }}
                  />
                  <p className="text-sm text-muted-foreground mb-5 italic text-center">
                    "{plan.tagline}"
                  </p>

                  {/* Pain block */}
                  <div className={`rounded-xl border p-4 mb-4 ${styles.painBg}`}>
                    <div className="flex items-start gap-2.5">
                      <X className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground/80">{plan.pain}</p>
                    </div>
                  </div>

                  {/* Solution block */}
                  <div className={`rounded-xl border p-4 mb-4 ${styles.solutionBg}`}>
                    <p className="text-sm text-foreground/80">
                      <span className="font-semibold">{plan.solution}</span>
                    </p>
                  </div>

                  {/* Transforms */}
                  <div className="space-y-2 mb-5">
                    {plan.transforms.map((t) => (
                      <div key={t} className="flex items-start gap-2.5">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${styles.checkColor}`} />
                        <span className="text-sm text-foreground/80 font-medium">{t}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className={`rounded-xl p-4 mb-5 ${styles.priceBg} text-center`}>
                    <span className="text-2xl md:text-3xl font-display font-black text-foreground">
                      Desde {plan.price}
                    </span>
                    <span className="text-sm text-muted-foreground block mt-1">
                      + {plan.monthly}
                    </span>
                  </div>

                  {/* Includes */}
                  <details className="mb-5 group">
                    <summary className="text-sm font-semibold text-muted-foreground cursor-pointer select-none flex items-center justify-center gap-1">
                      <span>Qué incluye</span>
                      <ArrowRight className="w-3 h-3 transition-transform group-open:rotate-90" />
                    </summary>
                    <div className="mt-3 space-y-2">
                      {plan.includes.map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${styles.checkColor}`} />
                          <span className="text-sm text-foreground/70">{item}</span>
                        </div>
                      ))}
                    </div>
                  </details>

                  {/* CTA */}
                  <Button
                    onClick={scrollToAudit}
                    className={`w-full gap-2 rounded-xl h-11 mt-auto ${styles.button}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Quiero esto
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground/50 text-sm mt-8"
        >
          ¿No sabes qué plan elegir? Solicita tu auditoría gratuita y te asesoramos sin compromiso.
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
