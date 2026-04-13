import { motion } from "framer-motion";
import { CheckCircle, Clock, AlertTriangle, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full text-center"
      >
        {/* Success header */}
        <div className="mb-10">
          <div className="h-16 w-16 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-accent" />
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            🎯 ¡Solicitud enviada!
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-lg mx-auto">
            Hemos recibido tu auditoría correctamente.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-lg mx-auto mt-3">
            Ahora mismo ya estás un paso por delante de la mayoría de negocios, que siguen perdiendo clientes sin saberlo.
          </p>
        </div>

        {/* What happens now */}
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 text-left mb-8">
          <h2 className="text-xl font-display font-bold text-foreground mb-5 flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-primary" />
            📌 ¿Qué pasa ahora?
          </h2>
          <p className="text-sm text-muted-foreground mb-4 font-medium">Vamos a analizar:</p>
          <ul className="space-y-3 mb-6">
            {[
              "Cómo estás gestionando tus mensajes",
              "Dónde estás perdiendo oportunidades",
              "Qué puedes automatizar para captar más clientes",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
          <div className="flex items-start gap-3 bg-primary/5 border border-primary/10 rounded-lg p-4">
            <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <p className="text-sm text-foreground">
              ⏳ En menos de 24–48h recibirás tu diagnóstico con puntos claros de mejora.
            </p>
          </div>
        </div>

        {/* Important note */}
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 text-left mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-foreground mb-2">⚠️ IMPORTANTE</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Esta auditoría no es genérica.
                <br />
                Analizamos tu caso concreto, así que cuanto más detalladas hayan sido tus respuestas, más valor te vas a llevar.
              </p>
            </div>
          </div>
        </div>

        {/* Final reflection */}
        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 md:p-8 text-center mb-10">
          <p className="text-foreground font-medium text-base leading-relaxed">
            👉 Mientras tanto, piensa esto:
          </p>
          <p className="text-muted-foreground text-sm mt-3 italic">
            ¿Cuántos clientes crees que estás perdiendo cada semana por no responder a tiempo?
          </p>
        </div>

        <Button variant="ghost" onClick={() => navigate("/")} className="text-muted-foreground">
          ← Volver al inicio
        </Button>
      </motion.div>
    </div>
  );
};

export default ThankYou;
