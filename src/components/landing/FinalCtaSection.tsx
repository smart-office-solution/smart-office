import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCtaSection = () => (
  <section id="audit-cta" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
          Deja de perder clientes.<br />
          <span className="text-gradient">Empieza a automatizar hoy.</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Cada día sin automatización es otro día de oportunidades perdidas. Solicita tu auditoría gratis y descubre la diferencia que Smart Office puede hacer.
        </p>
        <Button variant="hero" size="lg" className="px-10 py-6 text-lg gap-3">
          Solicita tu auditoría gratis
          <ArrowRight className="h-5 w-5" />
        </Button>
      </motion.div>
    </div>
  </section>
);

export default FinalCtaSection;
