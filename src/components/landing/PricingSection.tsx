import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "Desde 297€",
    period: "/mes",
    desc: "Para clínicas que quieren empezar a automatizar sus respuestas.",
    features: [
      "Asistente WhatsApp 24/7",
      "Hasta 500 conversaciones/mes",
      "Agendado automático básico",
      "Recordatorios de cita",
      "Dashboard de métricas",
      "Soporte por email",
    ],
    missing: ["Seguimiento avanzado", "Integración CRM", "Gestor de campañas"],
    cta: "Empezar ahora",
    popular: false,
    cardBg: "bg-accent/5",
    border: "border-accent/15",
    checkColor: "text-accent",
    checkBg: "bg-accent/10",
    buttonVariant: "outline" as const,
    buttonClass: "border-accent/30 text-accent hover:bg-accent/5",
  },
  {
    name: "Pro",
    price: "Desde 497€",
    period: "/mes",
    desc: "Para clínicas que quieren automatizar todo el ciclo del paciente.",
    features: [
      "Asistente WhatsApp + Instagram 24/7",
      "Conversaciones ilimitadas",
      "Agendado automático avanzado",
      "Recordatorios inteligentes",
      "Seguimiento y recuperación",
      "Integración CRM",
      "Dashboard avanzado + reportes",
      "Soporte prioritario",
    ],
    missing: ["Gestor de campañas"],
    cta: "Solicitar auditoría",
    popular: true,
    cardBg: "bg-primary/5",
    border: "border-primary/20",
    checkColor: "text-primary",
    checkBg: "bg-primary/10",
    buttonVariant: "default" as const,
    buttonClass: "bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-md shadow-primary/20",
  },
  {
    name: "Enterprise",
    price: "A medida",
    period: "",
    desc: "Para grupos de clínicas o proyectos que requieren soluciones a medida.",
    features: [
      "Todo lo de Pro",
      "Múltiples sedes/clínicas",
      "Gestor de campañas de marketing",
      "Integraciones personalizadas",
      "IA entrenada con tu protocolo",
      "Account manager dedicado",
      "SLA garantizado",
      "Facturación personalizada",
    ],
    missing: [],
    cta: "Contactar",
    popular: false,
    cardBg: "bg-violet/5",
    border: "border-violet/15",
    checkColor: "text-violet",
    checkBg: "bg-violet/10",
    buttonVariant: "outline" as const,
    buttonClass: "border-violet/30 text-violet hover:bg-violet/5",
  },
];

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

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-3xl overflow-hidden ${plan.popular ? "scale-105 shadow-lg shadow-primary/10" : ""}`}
            >
              {plan.popular && (
                <div className="absolute top-0 inset-x-0 flex justify-center">
                  <div className="bg-primary text-primary-foreground text-xs font-bold px-6 py-1.5 rounded-b-xl flex items-center gap-1.5">
                    <Star className="w-3 h-3" />
                    Más elegido
                  </div>
                </div>
              )}

              <div className={`${plan.cardBg} border ${plan.border} rounded-3xl p-7 h-full flex flex-col ${plan.popular ? "pt-10" : ""}`}>
                <div className="mb-6">
                  <h3 className="font-display font-bold text-xl mb-1 text-foreground">
                    {plan.name}
                  </h3>
                  <p className="text-sm mb-4 text-muted-foreground">{plan.desc}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-display font-black text-foreground">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-sm text-muted-foreground">
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex-1 space-y-2.5 mb-8">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.checkBg}`}>
                        <Check className={`w-2.5 h-2.5 ${plan.checkColor}`} />
                      </div>
                      <span className="text-sm text-foreground/80">{f}</span>
                    </div>
                  ))}
                  {plan.missing.map((f) => (
                    <div key={f} className="flex items-start gap-2.5 opacity-30">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-muted">
                        <div className="w-2 h-0.5 bg-muted-foreground rounded" />
                      </div>
                      <span className="text-sm text-muted-foreground">{f}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={scrollToAudit}
                  className={`w-full gap-2 rounded-xl h-11 ${plan.buttonClass}`}
                  variant={plan.buttonVariant}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
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
