import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const scrollToAudit = () => {
    document.getElementById("audit")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-20 md:py-28 bg-section-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3 px-3 py-1 bg-primary/10 rounded-full">
            Precios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Inversión clara, sin sorpresas
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Sin contratos de permanencia. Sin costes ocultos. Todo incluido desde el primer día.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Instalación */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl shadow-card p-8 border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 rounded-xl p-3">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Instalación</h3>
                <p className="text-muted-foreground text-sm">Pago único</p>
              </div>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold">997€</span>
              <span className="text-muted-foreground ml-2">pago único</span>
              <p className="text-sm text-muted-foreground mt-1">+ IVA si aplica</p>
            </div>
            <ul className="space-y-3 text-sm">
              {[
                "Configuración completa del sistema IA",
                "Integración con WhatsApp, Instagram y web",
                "Conexión con tu calendario y CRM",
                "Personalización con el tono de tu clínica",
                "Pruebas y ajustes durante 14 días",
                "Formación básica para tu equipo",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Mantenimiento */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-primary rounded-2xl shadow-card p-8 border border-primary text-primary-foreground relative overflow-hidden"
          >
            <div className="absolute top-4 right-4">
              <span className="bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                Recomendado
              </span>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white/20 rounded-xl p-3">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">Mantenimiento</h3>
                <p className="text-white/70 text-sm">Mensual, sin permanencia</p>
              </div>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">247€</span>
              <span className="text-white/70 ml-2">/mes</span>
              <p className="text-sm text-white/60 mt-1">+ IVA si aplica · Cancela cuando quieras</p>
            </div>
            <ul className="space-y-3 text-sm">
              {[
                "Monitorización y ajustes continuos",
                "Actualizaciones del sistema incluidas",
                "Nuevas integraciones sin coste extra",
                "Soporte por email en menos de 24h",
                "Soporte urgente por WhatsApp",
                "Informes mensuales de rendimiento",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-white/80 shrink-0 mt-0.5" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-muted-foreground text-sm mb-4">
            ¿No sabes si es lo que necesitas? Empieza con la auditoría gratuita y lo descubrimos juntas.
          </p>
          <Button onClick={scrollToAudit} size="lg" className="gap-2 px-8">
            Solicita tu auditoría gratuita
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
