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
    gradient: "from-white to-violet-50/30",
    border: "border-violet-200/60",
    buttonVariant: "outline" as const,
    buttonClass: "border-violet-300 text-violet-700 hover:bg-violet-50",
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
    gradient: "from-violet-600 to-violet-800",
    border: "border-violet-500",
    buttonVariant: "default" as const,
    buttonClass: "bg-amber-400 hover:bg-amber-300 text-amber-950 font-bold shadow-lg shadow-amber-400/30",
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
    gradient: "from-white to-blue-50/30",
    border: "border-blue-200/60",
    buttonVariant: "outline" as const,
    buttonClass: "border-blue-300 text-blue-700 hover:bg-blue-50",
  },
];

const PricingSection = () => {
  const scrollToAudit = () => {
    document.getElementById("audit")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-20 md:py-28 bg-dark-section relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-sm font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Planes y precios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Elige el plan que{" "}
            <span className="text-amber-400">se adapta a ti</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
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
              className={`relative rounded-3xl overflow-hidden ${plan.popular ? "scale-105 shadow-2xl shadow-violet-500/20" : ""}`}
            >
              {plan.popular && (
                <div className="absolute top-0 inset-x-0 flex justify-center">
                  <div className="bg-amber-400 text-amber-950 text-xs font-bold px-6 py-1.5 rounded-b-xl flex items-center gap-1.5">
                    <Star className="w-3 h-3" />
                    Más elegido
                  </div>
                </div>
              )}

              <div className={`bg-gradient-to-b ${plan.gradient} border ${plan.border} rounded-3xl p-7 h-full flex flex-col ${plan.popular ? "pt-10" : ""}`}>
                <div className="mb-6">
                  <h3 className={`font-display font-bold text-xl mb-1 ${plan.popular ? "text-white" : "text-foreground"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-4 ${plan.popular ? "text-white/60" : "text-muted-foreground"}`}>{plan.desc}</p>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-3xl font-display font-black ${plan.popular ? "text-white" : "text-foreground"}`}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className={`text-sm ${plan.popular ? "text-white/60" : "text-muted-foreground"}`}>
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex-1 space-y-2.5 mb-8">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.popular ? "bg-amber-400/20" : "bg-violet-100"}`}>
                        <Check className={`w-2.5 h-2.5 ${plan.popular ? "text-amber-400" : "text-violet-600"}`} />
                      </div>
                      <span className={`text-sm ${plan.popular ? "text-white/80" : "text-foreground/80"}`}>{f}</span>
                    </div>
                  ))}
                  {plan.missing.map((f) => (
                    <div key={f} className="flex items-start gap-2.5 opacity-30">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-gray-200">
                        <div className="w-2 h-0.5 bg-gray-400 rounded" />
                      </div>
                      <span className={`text-sm ${plan.popular ? "text-white/40" : "text-muted-foreground"}`}>{f}</span>
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
          className="text-center text-white/30 text-sm mt-8"
        >
          ¿No sabes qué plan elegir? Solicita tu auditoría gratuita y te asesoramos sin compromiso.
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
