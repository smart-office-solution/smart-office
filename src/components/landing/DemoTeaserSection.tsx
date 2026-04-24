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
    <section id="demo-teaser" className="py-6 md:py-8 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto rounded-xl border border-border bg-card/50 px-5 py-4 md:px-6 md:py-4"
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8">
            {/* Left: label + headline */}
            <div className="flex items-start gap-2.5 lg:max-w-[260px]">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent shrink-0" />
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">
                  Demo en vivo
                </p>
                <h3 className="font-display font-semibold text-foreground text-sm md:text-base leading-snug">
                  ¿Quieres ver cómo respondería en tu negocio{" "}
                  <span className="italic text-accent font-normal">
                    antes de seguir?
                  </span>
                </h3>
              </div>
            </div>

            {/* Middle: stats */}
            <div className="flex flex-1 items-center justify-around lg:justify-center gap-4 md:gap-10">
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="font-display text-xl md:text-2xl font-bold text-foreground leading-none">
                    {value}
                  </div>
                  <div className="text-[11px] md:text-xs text-muted-foreground mt-1">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* Right: CTA */}
            <div className="flex flex-col items-center lg:items-end gap-1">
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-background hover:bg-accent/5 hover:border-accent/40 transition-colors text-foreground text-sm font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                Probar el bot ahora
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <p className="text-[11px] text-muted-foreground">
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
