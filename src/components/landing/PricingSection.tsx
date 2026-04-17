import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Plus, Star, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const WHATSAPP_NUMBER = "34605588742";

type Plan = {
  badge: string;
  name: string;
  price: string;
  priceNote: string;
  monthly?: string;
  includesPrev?: string;
  idealSi: string;
  features: { text: string; bonus?: boolean }[];
  result?: string;
  ctaLabel: string;
  ctaMessage: string;
  variant: "light" | "dark" | "light";
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    badge: "PLAN ESENCIAL",
    name: "Presencia que Convierte",
    price: "€390",
    priceNote: "instalación única",
    monthly: "29€/mes mantenimiento",
    idealSi:
      "Para clínicas invisibles que están perdiendo pacientes cada día.",
    features: [
      { text: "Retoque de web o creación de landing page sencilla" },
      { text: "Botón de WhatsApp en tu web" },
      { text: "Creación u optimización de perfil Google Business" },
      { text: "Botón de WhatsApp directo en Google Business" },
      { text: "Formación básica para gestionar tus canales", bonus: true },
    ],
    result:
      "Empiezas a recibir mensajes de pacientes sin hacer nada extra.",
    ctaLabel: "Quiero saber más",
    ctaMessage:
      "Hola, quiero saber más sobre el plan Esencial de €390 + 29€/mes",
    variant: "light",
  },
  {
    badge: "PLAN INTELIGENTE",
    name: "Asistente que Capta y Filtra",
    price: "€649",
    priceNote: "instalación única",
    monthly: "69€/mes mantenimiento",
    includesPrev: "Incluye todo el plan Esencial",
    idealSi:
      "Quieres que tus pacientes reciban respuesta inmediata a cualquier hora y lleguen listos para pedir cita — sin que tú levantes el teléfono. Que ningún mensaje se pierda y captar pacientes fuera de tu horario.",
    features: [
      { text: "Bot en web que responde FAQs al instante" },
      { text: "Bot en WhatsApp que atiende 24/7" },
      { text: "Canalización activa hacia la cita (no solo informar)" },
      { text: "Personalizado con tus servicios, precios y tono" },
      { text: "Mantenimiento y actualizaciones mensuales" },
      { text: "Informe mensual de conversaciones y leads", bonus: true },
    ],
    ctaLabel: "Quiero saber más",
    ctaMessage:
      "Hola, quiero saber más sobre el plan Inteligente de €649 + 69€/mes",
    variant: "dark",
    highlighted: true,
  },
  {
    badge: "PLAN COMPLETO",
    name: "Clínica en Piloto Automático",
    price: "€1149",
    priceNote: "instalación única",
    monthly: "109€/mes mantenimiento",
    includesPrev: "Incluye todo el plan Inteligente",
    idealSi:
      "Quieres que el sistema gestione citas, mande recordatorios y consiga reseñas automáticamente — sin que tu equipo toque nada.",
    features: [
      { text: "Agenda automática en tu calendario sin fricciones" },
      { text: "Recordatorios de cita 24h y 1h antes" },
      { text: "Gestión de cancelaciones y reprogramaciones" },
      { text: "Solicitud automática de reseñas en Google post-visita" },
      { text: "Reactivación de pacientes inactivos" },
      { text: "Reporte mensual de ROI", bonus: true },
    ],
    ctaLabel: "Quiero este plan",
    ctaMessage:
      "Hola, quiero saber más sobre el plan Completo de €1149 + 109€/mes",
    variant: "light",
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-muted/20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold uppercase tracking-wider mb-6">
            ✨ Planes y precios
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
            Elige tu punto{" "}
            <span className="text-primary italic">de partida</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tres niveles de automatización. Empieza donde tiene sentido para tu clínica y escala cuando quieras.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, i) => {
            const isDark = plan.variant === "dark";
            const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(plan.ctaMessage)}`;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-3xl ${plan.highlighted ? "md:-mt-4 md:mb-0" : ""}`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 inset-x-0 flex justify-center z-10">
                    <div className="bg-accent text-accent-foreground text-xs font-bold px-5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                      <Star className="w-3 h-3 fill-current" />
                      Más popular
                    </div>
                  </div>
                )}

                <div
                  className={`rounded-3xl p-8 h-full flex flex-col border transition-all duration-300 ${
                    isDark
                      ? "bg-foreground text-background border-foreground shadow-2xl shadow-foreground/20"
                      : "bg-card text-card-foreground border-border hover:border-primary/30 hover:shadow-lg"
                  }`}
                >
                  {/* Badge */}
                  <p className={`text-xs font-bold tracking-widest mb-3 ${isDark ? "text-accent" : "text-primary"}`}>
                    {plan.badge}
                  </p>

                  {/* Name */}
                  <h3 className={`font-display font-bold text-2xl md:text-[1.65rem] leading-tight mb-6 ${isDark ? "text-accent" : ""}`}>
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display font-black text-5xl md:text-6xl">
                        {plan.price}
                      </span>
                    </div>
                    <p className={`text-sm mt-1 ${isDark ? "text-background/60" : "text-muted-foreground"}`}>
                      {plan.priceNote}
                    </p>
                    {plan.monthly && (
                      <div
                        className={`mt-3 inline-block px-3 py-1.5 rounded-lg text-sm font-medium ${
                          isDark ? "bg-background/10 text-background/90" : "bg-primary/10 text-primary"
                        }`}
                      >
                        + {plan.monthly}
                      </div>
                    )}
                  </div>

                  {/* Includes previous */}
                  {plan.includesPrev && (
                    <div
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold mb-5 border ${
                        isDark
                          ? "bg-accent/15 border-accent/30 text-accent"
                          : "bg-accent/10 border-accent/20 text-accent"
                      }`}
                    >
                      <Star className="w-3.5 h-3.5 fill-current shrink-0" />
                      {plan.includesPrev}
                    </div>
                  )}

                  {/* Ideal si */}
                  <div className="mb-5">
                    <p className={`text-xs font-bold tracking-widest mb-2 ${isDark ? "text-accent" : "text-primary"}`}>
                      IDEAL SI…
                    </p>
                    <p className={`text-sm leading-relaxed ${isDark ? "text-background/80" : "text-foreground/80"}`}>
                      {plan.idealSi}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className={`h-px mb-5 ${isDark ? "bg-background/15" : "bg-border"}`} />

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((f) => (
                      <li key={f.text} className="flex items-start gap-2.5">
                        {f.bonus ? (
                          <Plus className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? "text-accent" : "text-accent"}`} />
                        ) : (
                          <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? "text-accent" : "text-primary"}`} />
                        )}
                        <span className={`text-sm ${isDark ? "text-background/85" : "text-foreground/80"}`}>
                          {f.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {plan.result && (
                    <div
                      className={`rounded-xl p-3 mb-6 text-sm font-medium ${
                        isDark
                          ? "bg-accent/15 text-background"
                          : "bg-primary/5 text-foreground/90 border border-primary/10"
                      }`}
                    >
                      👉 {plan.result}
                    </div>
                  )}

                  {/* CTA */}
                  <Button
                    asChild
                    className={`w-full gap-2 rounded-xl h-12 mt-auto font-semibold ${
                      isDark
                        ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                        : "bg-background hover:bg-muted text-foreground border border-border"
                    }`}
                  >
                    <a href={waUrl} target="_blank" rel="noopener noreferrer">
                      {plan.ctaLabel}
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10 space-y-2"
        >
          <p className="text-muted-foreground text-sm">
            ¿No sabes qué plan elegir? Solicita tu auditoría gratuita y te asesoramos sin compromiso.
          </p>
          <p className="text-foreground/80 text-sm font-medium">
            ¿Necesitas algo distinto? También diseñamos planes a medida adaptados a tu clínica.
          </p>
        </motion.div>

        <ComparisonTable />
      </div>
    </section>
  );
};

const comparisonRows: { feature: string; esencial: boolean; inteligente: boolean; completo: boolean }[] = [
  { feature: "Retoque de web o landing page sencilla", esencial: true, inteligente: true, completo: true },
  { feature: "Botón de WhatsApp en tu web", esencial: true, inteligente: true, completo: true },
  { feature: "Perfil Google Business optimizado", esencial: true, inteligente: true, completo: true },
  { feature: "Botón de WhatsApp en Google Business", esencial: true, inteligente: true, completo: true },
  { feature: "Formación básica para gestionar canales", esencial: true, inteligente: true, completo: true },
  { feature: "Bot en web que responde FAQs al instante", esencial: false, inteligente: true, completo: true },
  { feature: "Bot en WhatsApp que atiende 24/7", esencial: false, inteligente: true, completo: true },
  { feature: "Canalización activa hacia la cita", esencial: false, inteligente: true, completo: true },
  { feature: "Personalización con tus servicios y tono", esencial: false, inteligente: true, completo: true },
  { feature: "Mantenimiento y actualizaciones mensuales", esencial: false, inteligente: true, completo: true },
  { feature: "Informe mensual de conversaciones y leads", esencial: false, inteligente: true, completo: true },
  { feature: "Agenda automática en tu calendario", esencial: false, inteligente: false, completo: true },
  { feature: "Recordatorios de cita 24h y 1h antes", esencial: false, inteligente: false, completo: true },
  { feature: "Gestión de cancelaciones y reprogramaciones", esencial: false, inteligente: false, completo: true },
  { feature: "Solicitud automática de reseñas en Google", esencial: false, inteligente: false, completo: true },
  { feature: "Reactivación de pacientes inactivos", esencial: false, inteligente: false, completo: true },
  { feature: "Reporte mensual de ROI", esencial: false, inteligente: false, completo: true },
];

const Cell = ({ included }: { included: boolean }) =>
  included ? (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[hsl(142_71%_45%/0.15)]">
      <Check className="w-4 h-4 text-[hsl(142_71%_38%)]" strokeWidth={3} />
    </span>
  ) : (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-destructive/10">
      <X className="w-4 h-4 text-destructive" strokeWidth={3} />
    </span>
  );

const ComparisonTable = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="max-w-5xl mx-auto mt-12">
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger asChild>
          <button className="w-full flex items-center justify-between gap-4 px-6 py-5 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-md transition-all text-left">
            <div>
              <p className="font-display font-bold text-lg text-foreground">
                Comparativa completa de los 3 planes
              </p>
              <p className="text-sm text-muted-foreground mt-0.5">
                Mira en detalle qué incluye cada plan
              </p>
            </div>
            <ChevronDown
              className={`w-5 h-5 text-foreground shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            />
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
          <div className="mt-4 rounded-2xl border border-border bg-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/40 border-b border-border">
                    <th className="text-left font-semibold text-foreground px-6 py-4 min-w-[260px]">
                      Servicio
                    </th>
                    <th className="font-semibold text-foreground px-4 py-4 text-center min-w-[110px]">
                      Esencial
                    </th>
                    <th className="font-semibold text-accent px-4 py-4 text-center min-w-[110px] bg-foreground/5">
                      Inteligente
                    </th>
                    <th className="font-semibold text-foreground px-4 py-4 text-center min-w-[110px]">
                      Completo
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, idx) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-border/60 last:border-0 ${idx % 2 === 1 ? "bg-muted/20" : ""}`}
                    >
                      <td className="px-6 py-3.5 text-foreground/85">{row.feature}</td>
                      <td className="px-4 py-3.5 text-center">
                        <div className="flex justify-center">
                          <Cell included={row.esencial} />
                        </div>
                      </td>
                      <td className="px-4 py-3.5 text-center bg-foreground/5">
                        <div className="flex justify-center">
                          <Cell included={row.inteligente} />
                        </div>
                      </td>
                      <td className="px-4 py-3.5 text-center">
                        <div className="flex justify-center">
                          <Cell included={row.completo} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default PricingSection;
