import { motion } from "framer-motion";
import { Bot, ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const DEMO_URL = "#"; // TODO: reemplazar con la URL real de la demo del bot

const DemoSection = () => {
  return (
    <section id="demo" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Pruébalo tú mismo
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              Habla con nuestro{" "}
              <span className="text-gradient">asistente en vivo</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Mira cómo responde, filtra y agenda citas como lo haría en tu propia clínica. Sin instalación, sin compromiso.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-xl shadow-primary/10 text-center"
          >
            <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
              <Bot className="w-10 h-10 text-primary" />
            </div>

            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
              Demo interactiva del bot
            </h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Haz preguntas reales, pide cita, simula ser un paciente. El bot reaccionará igual que en una clínica configurada con Smart Office IA.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 font-semibold px-8 py-6 rounded-xl shadow-lg shadow-primary/20"
              >
                <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Probar la demo ahora
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>

            <p className="text-muted-foreground/60 text-xs mt-6">
              Se abre en una nueva pestaña · No requiere registro
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
