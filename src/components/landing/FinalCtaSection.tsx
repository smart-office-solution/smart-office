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
          Stop losing clients.<br />
          <span className="text-gradient">Start automating today.</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Every day without automation is another day of missed opportunities. Get your free audit and see the difference Smart Office can make.
        </p>
        <Button variant="hero" size="lg" className="px-10 py-6 text-lg gap-3">
          Request your free audit
          <ArrowRight className="h-5 w-5" />
        </Button>
      </motion.div>
    </div>
  </section>
);

export default FinalCtaSection;
