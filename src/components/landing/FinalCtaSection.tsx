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
        className="text-center max-w-2xl mx-auto bg-hero-gradient rounded-2xl p-10 md:p-16 shadow-xl"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
          Cada día que pasa estás perdiendo clientes
        </h2>
        <p className="text-lg text-primary-foreground/80 mb-8">
          Y no es porque no tengas demanda…<br />
          es porque no puedes atender todo a tiempo.
        </p>
        <Button size="lg" className="px-10 py-6 text-lg gap-3 bg-white text-primary hover:bg-white/90 font-semibold shadow-lg">
          Solicita tu auditoría gratuita
          <ArrowRight className="h-5 w-5" />
        </Button>
        <p className="text-sm text-primary-foreground/70 mt-4">
          Descubre qué está fallando y cómo solucionarlo antes de seguir perdiendo oportunidades.
        </p>
      </motion.div>
    </div>
  </section>
);

export default FinalCtaSection;
