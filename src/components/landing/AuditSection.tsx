import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Sparkles, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const perks = [
  "Análisis de tus canales de captación",
  "Identificación de pérdidas de pacientes",
  "Plan de automatización personalizado",
  "Estimación de ROI para tu clínica",
];

const AuditSection = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
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
      } else {
        toast({ title: "Error al enviar", description: "Inténtalo de nuevo.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Error de conexión", description: "Inténtalo de nuevo.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="audit" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-amber-50/50" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl" />
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
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 border border-violet-200 text-violet-700 text-sm font-semibold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                Auditoría gratuita
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 leading-tight">
                Descubre cuántos pacientes estás perdiendo cada semana
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                En 30 minutos te mostramos exactamente dónde se escapan tus oportunidades y cómo automatizarlas.
              </p>
              
              <div className="space-y-3">
                {perks.map((perk) => (
                  <div key={perk} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-3.5 h-3.5 text-violet-600" />
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
              <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-violet-500/10 border border-violet-100">
                {!submitted ? (
                  <>
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-violet-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-violet-500/30">
                        <Sparkles className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-display font-bold text-foreground mb-1">
                        Solicita tu auditoría gratuita
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Te contactamos en menos de 24h
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Tu email profesional
                        </label>
                        <Input
                          type="email"
                          placeholder="clinica@ejemplo.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="h-12 border-violet-200 focus:border-violet-400 focus:ring-violet-400/20 rounded-xl"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full h-12 bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-500 hover:to-violet-600 text-white font-semibold rounded-xl shadow-lg shadow-violet-500/30 gap-2 transition-all duration-300"
                      >
                        {isLoading ? "Enviando..." : "Quiero mi auditoría gratuita"}
                        {!isLoading && <ArrowRight className="w-4 h-4" />}
                      </Button>
                    </form>

                    {/* Social proof mini */}
                    <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-center gap-3">
                      <p className="text-xs text-muted-foreground">
                        Automatiza tu clínica con inteligencia artificial
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
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
