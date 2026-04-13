import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const checklist = [
  "Dónde estás perdiendo clientes ahora mismo",
  "Qué está fallando en tu atención y respuesta",
  "Cómo mejorar tu captación sin trabajar más",
  "Qué puedes automatizar desde ya",
  "Oportunidades concretas de crecimiento",
];

const AuditSection = () => {
  const scrollToAudit = () => document.getElementById("audit-cta")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="audit" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-card rounded-2xl p-8 md:p-12 shadow-card-hover border border-border text-center"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <CheckCircle className="h-4 w-4" /> 100% Gratis — Sin compromiso
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Descubre por qué estás perdiendo clientes (aunque no lo veas)
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-lg leading-relaxed">
            La mayoría de negocios ya están perdiendo oportunidades cada día sin darse cuenta.
            En esta auditoría analizamos tu presencia digital y tu sistema de atención para detectar exactamente dónde se están escapando esos clientes.
          </p>

          <div className="flex flex-col gap-3 mb-8 text-left max-w-md mx-auto">
            {checklist.map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm text-foreground">
                <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
          </div>

          <Button variant="hero" size="lg" className="px-10 py-6" onClick={scrollToAudit}>
            Solicita tu auditoría gratuita
          </Button>
          <p className="text-xs text-muted-foreground mt-3">
            Sin compromiso. Te llevas un diagnóstico claro y accionable.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AuditSection;
