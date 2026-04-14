import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, ArrowRight, ArrowLeft, Send } from "lucide-react";

const TOTAL_STEPS = 3;

interface FormData {
  contacto: string;
  email: string;
  telefono: string;
  webRedes: string;
  equipo: string;
  oportunidades: string[];
  oportunidadesOtro: string;
  tareas: string;
  urgencia: string;
  dispuesto: string;
  gestion: string;
}

const initialFormData: FormData = {
  contacto: "",
  email: "",
  telefono: "",
  webRedes: "",
  equipo: "",
  oportunidades: [],
  oportunidadesOtro: "",
  tareas: "",
  urgencia: "",
  dispuesto: "",
  gestion: "",
};

const RadioOption = ({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-all duration-200 ${
      selected
        ? "border-primary bg-primary/5 text-foreground font-medium ring-1 ring-primary/30"
        : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:bg-primary/[0.02]"
    }`}
  >
    {label}
  </button>
);

const CheckboxOption = ({
  label,
  checked,
  onClick,
}: {
  label: string;
  checked: boolean;
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-all duration-200 flex items-center gap-3 ${
      checked
        ? "border-primary bg-primary/5 text-foreground font-medium ring-1 ring-primary/30"
        : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:bg-primary/[0.02]"
    }`}
  >
    <div
      className={`h-4 w-4 rounded border shrink-0 flex items-center justify-center transition-colors ${
        checked ? "bg-primary border-primary" : "border-muted-foreground/40"
      }`}
    >
      {checked && <CheckCircle className="h-3 w-3 text-primary-foreground" />}
    </div>
    {label}
  </button>
);

const FieldLabel = ({ children }: { children: React.ReactNode }) => (
  <label className="block text-sm font-medium text-foreground mb-2">{children}</label>
);

const AuditForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const navigate = useNavigate();

  const update = (field: keyof FormData, value: string | string[]) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const toggleOportunidad = (val: string) => {
    setFormData((prev) => ({
      ...prev,
      oportunidades: prev.oportunidades.includes(val)
        ? prev.oportunidades.filter((v) => v !== val)
        : [...prev.oportunidades, val],
    }));
  };

  const canNext = () => {
    if (step === 1) return formData.contacto.trim() && formData.email.trim();
    if (step === 2) return formData.equipo.trim() && formData.oportunidades.length > 0;
    if (step === 3) return formData.urgencia && formData.dispuesto;
    return false;
  };

  const handleSubmit = () => {
    console.log("Audit form submitted:", formData);
    navigate("/gracias");
  };

  return (
    <div>
      {/* Progress */}
      <div className="flex items-center gap-2 mb-8">
        {Array.from({ length: TOTAL_STEPS }, (_, i) => (
          <div key={i} className="flex-1 flex items-center gap-2">
            <div
              className={`h-2 rounded-full flex-1 transition-colors duration-300 ${
                i + 1 <= step ? "bg-primary" : "bg-muted"
              }`}
            />
          </div>
        ))}
        <span className="text-xs text-muted-foreground font-medium ml-2">
          {step}/{TOTAL_STEPS}
        </span>
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-5"
          >
            <div>
              <FieldLabel>Persona de contacto</FieldLabel>
              <Input
                placeholder="Tu nombre"
                value={formData.contacto}
                onChange={(e) => update("contacto", e.target.value)}
                className="bg-background"
              />
            </div>
            <div>
              <FieldLabel>Email</FieldLabel>
              <Input
                type="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={(e) => update("email", e.target.value)}
                className="bg-background"
              />
            </div>
            <div>
              <FieldLabel>Teléfono <span className="text-muted-foreground font-normal">(opcional)</span></FieldLabel>
              <Input
                type="tel"
                placeholder="+34 600 000 000"
                value={formData.telefono}
                onChange={(e) => update("telefono", e.target.value)}
                className="bg-background"
              />
            </div>
            <div>
              <FieldLabel>Web y redes sociales</FieldLabel>
              <Input
                placeholder="Ej: www.tuclínica.com | Instagram: @tuclinica"
                value={formData.webRedes}
                onChange={(e) => update("webRedes", e.target.value)}
                className="bg-background"
              />
              <p className="text-xs text-muted-foreground mt-1.5">
                Así podremos analizar tu presencia digital y detectar oportunidades reales de mejora.
              </p>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <FieldLabel>¿Cuántas personas forman parte de tu equipo actualmente?</FieldLabel>
              <Input
                placeholder="Ej: 2, 5, 10…"
                value={formData.equipo}
                onChange={(e) => update("equipo", e.target.value)}
                className="bg-background"
              />
            </div>
            <div>
              <FieldLabel>¿Dónde sientes que estás perdiendo más oportunidades?</FieldLabel>
              <div className="space-y-2">
                {[
                  "No respondo lo suficientemente rápido",
                  "Se me acumulan mensajes",
                  "Pierdo pacientes antes de cerrar",
                  "No tengo un sistema claro",
                ].map((opt) => (
                  <CheckboxOption
                    key={opt}
                    label={opt}
                    checked={formData.oportunidades.includes(opt)}
                    onClick={() => toggleOportunidad(opt)}
                  />
                ))}
                <CheckboxOption
                  label="Otro"
                  checked={formData.oportunidades.includes("Otro")}
                  onClick={() => toggleOportunidad("Otro")}
                />
                {formData.oportunidades.includes("Otro") && (
                  <Input
                    placeholder="Cuéntanos..."
                    value={formData.oportunidadesOtro}
                    onChange={(e) => update("oportunidadesOtro", e.target.value)}
                    className="bg-background mt-1"
                  />
                )}
              </div>
            </div>
            <div>
              <FieldLabel>Si pudieras automatizar o delegar 3 tareas en tu negocio, ¿cuáles serían?</FieldLabel>
              <Textarea
                placeholder="Ej: gestión de citas, recordatorios a pacientes, respuestas a mensajes, publicaciones en redes, gestión administrativa…"
                value={formData.tareas}
                onChange={(e) => update("tareas", e.target.value)}
                rows={3}
                className="bg-background resize-none"
              />
              <p className="text-xs text-muted-foreground mt-1.5">
                Esto nos ayuda a detectar dónde puedes liberar más tiempo y mejorar tu sistema.
              </p>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <FieldLabel>¿Qué tan importante es para ti mejorar esto ahora?</FieldLabel>
              <div className="space-y-2">
                {[
                  "Urgente (estoy perdiendo pacientes)",
                  "Importante (quiero mejorar)",
                  "Solo estoy explorando",
                ].map((opt) => (
                  <RadioOption
                    key={opt}
                    label={opt}
                    selected={formData.urgencia === opt}
                    onClick={() => update("urgencia", opt)}
                  />
                ))}
              </div>
            </div>
            <div>
              <FieldLabel>Si detectamos oportunidades claras, ¿estarías dispuesto/a a implementar mejoras?</FieldLabel>
              <div className="space-y-2">
                {["Sí", "Depende", "No"].map((opt) => (
                  <RadioOption
                    key={opt}
                    label={opt}
                    selected={formData.dispuesto === opt}
                    onClick={() => update("dispuesto", opt)}
                  />
                ))}
              </div>
            </div>
            <div>
              <FieldLabel>Cuéntanos brevemente cómo gestionas actualmente la agendación de citas y el seguimiento a pacientes</FieldLabel>
              <Textarea
                placeholder="Ej: gestionamos citas por WhatsApp, usamos agenda manual, confirmamos citas manualmente…"
                value={formData.gestion}
                onChange={(e) => update("gestion", e.target.value)}
                rows={4}
                className="bg-background resize-none"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
        {step > 1 ? (
          <Button
            type="button"
            variant="ghost"
            onClick={() => setStep((s) => s - 1)}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" /> Anterior
          </Button>
        ) : (
          <div />
        )}

        {step < TOTAL_STEPS ? (
          <Button
            type="button"
            variant="hero"
            disabled={!canNext()}
            onClick={() => setStep((s) => s + 1)}
            className="gap-2 px-6"
          >
            Siguiente <ArrowRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button
            type="button"
            variant="hero"
            disabled={!canNext()}
            onClick={handleSubmit}
            className="gap-2 px-8"
          >
            <Send className="h-4 w-4" /> Solicitar auditoría gratuita
          </Button>
        )}
      </div>

      {step === TOTAL_STEPS && (
        <p className="text-xs text-muted-foreground text-center mt-4">
          Te responderemos con un diagnóstico claro, personalizado y accionable.
        </p>
      )}
    </div>
  );
};

const checklist = [
  "Dónde estás perdiendo clientes ahora mismo",
  "Qué está fallando en tu atención y respuesta",
  "Cómo mejorar tu captación sin trabajar más",
  "Qué puedes automatizar desde ya",
  "Oportunidades concretas de crecimiento",
];

const AuditSection = () => (
  <section id="audit" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto items-start">
        {/* Left — value proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:sticky lg:top-28"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <CheckCircle className="h-4 w-4" /> 100% Gratis — Sin compromiso
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Descubre por qué estás perdiendo clientes (aunque no lo veas)
          </h2>
          <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
            La mayoría de negocios ya están perdiendo oportunidades cada día sin darse cuenta.
            En esta auditoría analizamos tu presencia digital y tu sistema de atención para detectar exactamente dónde se están escapando esos clientes.
          </p>

          <div className="flex flex-col gap-3">
            {checklist.map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm text-foreground">
                <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-card rounded-2xl p-6 md:p-8 shadow-card-hover border border-border"
        >
          <h3 className="text-xl font-display font-bold text-foreground mb-1">
            Solicita tu auditoría gratuita
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            Responde estas preguntas y te enviaremos un análisis personalizado de tu clínica.
          </p>
          <AuditForm />
        </motion.div>
      </div>
    </div>
  </section>
);

export default AuditSection;
