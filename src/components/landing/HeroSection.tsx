import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, BarChart3, Lightbulb } from "lucide-react";
import heroCover from "@/assets/hero-cover.jpg";

const trustItems = [
  { icon: ShieldCheck, text: "Sin compromiso" },
  { icon: BarChart3, text: "Análisis personalizado" },
  { icon: Lightbulb, text: "Consejos accionables" },
];

const HeroSection = () => {
  const scrollToAudit = () => document.getElementById("audit")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-background">
      {/* Subtle glow accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-foreground mb-6">
              Chatbot con IA para clínicas:{" "}
              <span className="text-gradient">automatiza citas, WhatsApp y pacientes</span>
            </h1>
            <p className="sr-only">Haz que tu clínica deje de perder citas, tiempo y pacientes</p>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              Un sistema que capta, atiende, agenda y recupera pacientes automáticamente, 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Button variant="hero" size="lg" className="px-8 py-6" onClick={scrollToAudit}>
                Solicita tu auditoría gratuita
              </Button>
            </div>
            <p className="text-sm text-muted-foreground/70 mb-8">
              Descubre dónde estás perdiendo pacientes sin darte cuenta
            </p>
            <div className="flex flex-wrap gap-6">
              {trustItems.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon className="h-4 w-4 text-primary" />
                  {text}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <img
              src={heroCover}
              alt="Chatbot IA para clínicas gestionando citas en WhatsApp"
              width={1024}
              height={768}
              className="rounded-2xl shadow-xl shadow-primary/10 animate-float"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
