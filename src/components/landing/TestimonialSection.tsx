import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section id="testimonio" className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold uppercase tracking-wider mb-6">
            <Star className="w-3.5 h-3.5 fill-current" />
            Lo que dicen de nosotros
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Clínicas que ya{" "}
            <span className="text-primary">trabajan en automático</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-lg shadow-primary/5 relative">
            <Quote className="absolute top-6 left-6 w-10 h-10 text-primary/20" />

            <div className="flex items-center gap-1 mb-6 justify-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>

            <blockquote className="text-lg md:text-xl text-foreground/90 leading-relaxed text-center mb-8 italic">
              "[Testimonio del cliente — pega aquí el texto real del testimonio. Describe brevemente cómo era la situación antes, qué cambió con S.O.S y qué resultados concretos ha obtenido (más citas, menos llamadas, horas recuperadas…)]"
            </blockquote>

            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-display font-bold text-xl">
                {/* Iniciales o foto */}
                NC
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">Nombre del cliente</p>
                <p className="text-sm text-muted-foreground">Cargo · Nombre de la clínica</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
