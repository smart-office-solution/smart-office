import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle, Lock, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const perks = [
  "Revisión personalizada de tu web",
  "Te decimos dónde estás perdiendo clientes",
  "Plan de mejoras claro y aplicable ya",
  "Sin compromiso y sin venta dura",
];

const AuditSection = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xpwzgekb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setSubmitted(true);
        window.location.href = "/gracias";
      }
    } catch {
      // noop
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="audit" className="py-20 md:py-28 relative overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet/5 via-background to-primary/5" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet/10 border border-violet/20 text-violet text-sm font-semibold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                Auditoría Gratuita
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 leading-tight">
                Descubre cuántos clientes estás perdiendo cada semana
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Revisamos tu web y te decimos, en plata, qué cambiar para que empiece a traerte contactos y reservas.
              </p>
              
              <div className="space-y-3">
                {perks.map((perk) => (
                  <div key={perk} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-violet/10 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-3.5 h-3.5 text-violet" />
                    </div>
                    <span className="text-foreground/80 text-sm font-medium">{perk}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-2 text-muted-foreground text-xs">
                <Lock className="w-3.5 h-3.5" />
                Sin spam · Sin compromisos · 100% gratuita
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-card rounded-3xl p-8 shadow-2xl shadow-violet/10 border border-violet/15">
                {!submitted ? (
                  <>
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-violet to-violet/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-violet/30">
                        <Sparkles className="w-8 h-8 text-violet-foreground" />
                      </div>
                      <h3 className="text-xl font-display font-bold text-foreground mb-1">
                        Solicita tu Auditoría Gratuita
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Te respondemos en menos de 24h
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Tu email profesional
                        </label>
                        <Input
                          type="email"
                          placeholder="tunegocio@ejemplo.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="h-12 border-violet/20 focus:border-violet/60 focus:ring-violet/20 rounded-xl"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full h-12 bg-gradient-to-r from-violet to-violet/80 hover:from-violet/90 hover:to-violet/70 text-violet-foreground font-semibold rounded-xl shadow-lg shadow-violet/30 gap-2 transition-all duration-300"
                      >
                        {isLoading ? "Enviando..." : "Quiero mi Auditoría Gratuita"}
                        {!isLoading && <ArrowRight className="w-4 h-4" />}
                      </Button>
                    </form>

                    {/* Social proof mini */}
                    <div className="mt-6 pt-6 border-t border-border flex items-center justify-center gap-3">
                      <p className="text-xs text-muted-foreground">
                        Sin compromiso · Sin venta dura · 100% gratuita
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-accent/15 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">¡Solicitud enviada!</h3>
                    <p className="text-muted-foreground text-sm">Te contactamos en menos de 24h.</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditSection;
