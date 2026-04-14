import { motion } from "framer-motion";

const SolutionSection = () => (
  <section id="solution" className="py-20 md:py-28 bg-section-gradient">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
          LA SOLUCIÓN
        </p>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-5">
          <span className="text-gradient">S.O.S</span> — Smart Office System
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
          Un sistema que capta, atiende, agenda y recupera pacientes automáticamente
        </p>

        <p className="text-muted-foreground mb-4 leading-relaxed">
          Diseñado para clínicas que quieren dejar de perder oportunidades y empezar a tener un sistema que trabaja por ellas.
        </p>

        <p className="text-foreground font-display font-semibold text-lg">
          Sin depender de ti ni de tu equipo, <span className="text-accent font-bold">24/7</span>
        </p>
      </motion.div>
    </div>
  </section>
);

export default SolutionSection;
