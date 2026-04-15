import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCtaSection = () => {
  const scrollToAudit = () => {
    document.getElementById("audit")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-dark-section">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "linear-gradient(hsl(38 75% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(38 75% 50%) 1px, transparent 1px)", backgroundSize: "60px 60px"}} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 text-primary text-sm font-semibold mb-8">
            <Sparkles className="w-4 h-4" />
            Oferta limitada: primeras plazas
          </div>

          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Tu clínica trabajando{" "}
            <span className="relative">
              <span className="relative z-10 text-gradient">mientras duermes</span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 to-accent/50 blur-sm" />
            </span>
          </h2>

          <p className="text-white/60 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Únete a las clínicas que ya han automatizado su captación, agenda y seguimiento. Sin esfuerzo. Sin perder el trato humano.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <Clock className="w-4 h-4 text-primary" />
              Activo en 7 días
            </div>
            <div className="w-1 h-1 rounded-full bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <Shield className="w-4 h-4 text-accent" />
              Sin permanencia
            </div>
            <div className="w-1 h-1 rounded-full bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <Sparkles className="w-4 h-4 text-blue-400" />
              Configuración incluida
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={scrollToAudit}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 gap-2 font-semibold px-8 py-6 text-base rounded-xl"
            >
              Solicitar mi auditoría gratuita
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              onClick={scrollToAudit}
              variant="ghost"
              size="lg"
              className="text-white/60 hover:text-white hover:bg-white/5 gap-2 font-medium px-6 py-6 text-sm rounded-xl border border-white/10 hover:border-white/20"
            >
              Ver cómo funciona primero
            </Button>
          </div>

          <p className="text-white/30 text-xs mt-8">
            Sin compromisos · Respuesta en menos de 24h · 100% gratuita
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
