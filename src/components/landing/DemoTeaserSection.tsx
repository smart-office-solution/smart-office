import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const DEMO_URL = "#"; // TODO: reemplazar con la URL real de la demo del bot

const stats = [
  { value: "<2s", label: "tiempo de respuesta" },
  { value: "24/7", label: "siempre activo" },
  { value: "0", label: "intervención humana" },
];

const DemoTeaserSection = () => {
  return (
    <section id="demo-teaser" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto rounded-2xl border border-border bg-card/50 px-6 py-8 md:px-10 md:py-10"
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-10">
            {/* Left: label + headline */}
            <div className="flex items-start gap-3 lg:max-w-xs">
              <span className="mt-1.5 h-3 w-3 rounded-full bg-accent shrink-0" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Demo en vivo
                </p>
                <h3 className="font-display font-bold text-foreground text-lg md:text-xl leading-snug">
                  ¿Quieres ver cómo responde el bot{" "}
                  <span className="italic text-accent font-normal">
                    antes de seguir leyendo?
                  </span>
                </h3>
              </div>
            </div>

            {/* Middle: stats */}
            <div className="flex flex-1 items-center justify-around lg:justify-center gap-6 md:gap-12">
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="font-display text-2xl md:text-3xl font-bold text-foreground">
                    {value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* Right: CTA */}
            <div className="flex flex-col items-center lg:items-end gap-2">
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border bg-background hover:bg-accent/5 hover:border-accent/40 transition-colors text-foreground font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                Probar el bot ahora
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-xs text-muted-foreground">
                Se abre en nueva pestaña · sin registro
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoTeaserSection;
