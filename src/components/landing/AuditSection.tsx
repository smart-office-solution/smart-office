import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, ArrowRight, ArrowLeft, Send } from "lucide-react";

const TOTAL_STEPS = 3;

interface FormData {
    email: string;
    equipo: string;
    oportunidades: string[];
    oportunidadesOtro: string;
    tareas: string;
    urgencia: string;
    dispuesto: string;
    gestion: string;
}

const initialFormData: FormData = {
    email: "",
    equipo: "",
    oportunidades: [],
    oportunidadesOtro: "",
    tareas: "",
    urgencia: "",
    dispuesto: "",
    gestion: "",
};

import { Label } from "@/components/ui/label";

const FieldLabel = ({ children }: { children: React.ReactNode }) => (
    <Label className="text-sm font-medium text-foreground mb-1.5 block">{children}</Label>Label>
  );

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
    </button>button>
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
                          checked ? "bg-primary border-primary" : "bg-muted-foreground/40"
                }`}
              >
          {checked && <CheckCircle className="h-3 w-3 text-white" />}
        </div>div>
      {label}
    </button>button>
  );

const AuditSection = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [submitted, setSubmitted] = useState(false);
  
    const update = (field: keyof FormData, value: string | string[]) => {
          setFormData((prev) => ({ ...prev, [field]: value }));
    };
  
    const toggleOportunidad = (value: string) => {
          setFormData((prev) => ({
                  ...prev,
                  oportunidades: prev.oportunidades.includes(value)
                            ? prev.oportunidades.filter((o) => o !== value)
                            : [...prev.oportunidades, value],
          }));
    };
  
    const handleNext = () => {
          if (step < TOTAL_STEPS) setStep((s) => s + 1);
    };
  
    const handleBack = () => {
          if (step > 1) setStep((s) => s - 1);
    };
  
    const handleSubmit = () => {
          setSubmitted(true);
          setTimeout(() => navigate("/thank-you"), 1500);
    };
  
    if (submitted) {
          return (
                  <section id="audit" className="py-20 md:py-28">
                          <div className="container mx-auto px-4 max-w-2xl text-center">
                                    <motion.div
                                                  initial={{ opacity: 0, scale: 0.9 }}
                                                  animate={{ opacity: 1, scale: 1 }}
                                                  className="flex flex-col items-center gap-4"
                                                >
                                                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                                                              <CheckCircle className="h-8 w-8 text-primary" />
                                                </div>div>
                                                <h2 className="text-2xl font-bold">¡Solicitud recibida!</h2>h2>
                                                <p className="text-muted-foreground">
                                                              Analizaremos tu negocio y te enviaremos tu auditoría personalizada en 24-48h.
                                                </p>p>
                                    </motion.div>motion.div>
                          </div>div>
                  </section>section>
                );
    }
  
    return (
          <section id="audit" className="py-20 md:py-28">
                <div className="container mx-auto px-4 max-w-2xl">
                        <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="text-center mb-10"
                                  >
                                  <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3 px-3 py-1 bg-primary/10 rounded-full">
                                              100% Gratis — Sin compromiso
                                  </span>span>
                                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                              Descubre por qué estás perdiendo clientes (aunque no lo veas)
                                  </h2>h2>
                                  <p className="text-muted-foreground max-w-xl mx-auto">
                                              La mayoría de negocios ya están perdiendo oportunidades cada día sin darse cuenta. En
                                              esta auditoría analizamos tu presencia digital y tu sistema de atención para detectar
                                              exactamente dónde se están escapando esos clientes.
                                  </p>p>
                                  <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-left max-w-lg mx-auto">
                                    {[
                                                  "Dónde estás perdiendo clientes ahora mismo",
                                                  "Qué está fallando en tu atención y respuesta",
                                                  "Cómo mejorar tu captación sin trabajar más",
                                                  "Qué puedes automatizar desde ya",
                                                  "Oportunidades concretas de crecimiento",
                                                ].map((item) => (
                                                                <li key={item} className="flex items-start gap-2">
                                                                                <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                                                                <span>{item}</span>span>
                                                                </li>li>
                                                              ))}
                                  </ul>ul>
                        </motion.div>motion.div>
                
                        <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="bg-card rounded-2xl shadow-card p-8"
                                  >
                                  <div className="mb-6">
                                              <h3 className="font-semibold text-lg mb-1">Solicita tu auditoría gratuita</h3>h3>
                                              <p className="text-sm text-muted-foreground">
                                                            Responde estas preguntas y te enviaremos un análisis personalizado de tu clínica.
                                              </p>p>
                                  </div>div>
                        
                          {/* Progress */}
                                  <div className="flex items-center gap-2 mb-8">
                                    {Array.from({ length: TOTAL_STEPS }, (_, i) => (
                                                  <div key={i} className="flex-1 flex items-center gap-2">
                                                                  <div
                                                                                      className={`h-2 rounded-full flex-1 transition-colors duration-300 ${
                                                                                                            i + 1 <= step ? "bg-primary" : "bg-muted"
                                                                                        }`}
                                                                                    />
                                                  </div>div>
                                                ))}
                                              <span className="text-xs text-muted-foreground font-medium ml-2">
                                                {step}/{TOTAL_STEPS}
                                              </span>span>
                                  </div>div>
                        
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
                                                                                    <FieldLabel>Email</FieldLabel>FieldLabel>
                                                                                    <Input
                                                                                                          type="email"
                                                                                                          placeholder="tu@email.com"
                                                                                                          value={formData.email}
                                                                                                          onChange={(e) => update("email", e.target.value)}
                                                                                                          className="bg-background"
                                                                                                        />
                                                                                    <p className="text-xs text-muted-foreground mt-1.5">
                                                                                                        Te enviaremos tu auditoría personalizada a este email.
                                                                                      </p>p>
                                                                  </div>div>
                                                  </motion.div>motion.div>
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
                                                                                    <FieldLabel>¿Cuántas personas forman parte de tu equipo actualmente?</FieldLabel>FieldLabel>
                                                                                    <Input
                                                                                                          placeholder="Ej: 2, 5, 10…"
                                                                                                          value={formData.equipo}
                                                                                                          onChange={(e) => update("equipo", e.target.value)}
                                                                                                          className="bg-background"
                                                                                                        />
                                                                  </div>div>
                                                                  <div>
                                                                                    <FieldLabel>
                                                                                                        ¿Cuál es el mayor cuello de botella en tu negocio ahora mismo?
                                                                                      </FieldLabel>FieldLabel>
                                                                                    <div className="space-y-2">
                                                                                      {[
                                                                                          "Responder mensajes y consultas a tiempo",
                                                                                          "Gestionar y organizar las citas",
                                                                                          "Recuperar pacientes que no volvieron",
                                                                                          "Conseguir nuevos pacientes",
                                                                                          "Organización interna del equipo",
                                                                                        ].map((op) => (
                                                                                                                <RadioOption
                                                                                                                                          key={op}
                                                                                                                                          label={op}
                                                                                                                                          selected={formData.tareas === op}
                                                                                                                                          onClick={() => update("tareas", op)}
                                                                                                                                        />
                                                                                                              ))}
                                                                                      </div>div>
                                                                  </div>div>
                                                  </motion.div>motion.div>
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
                                                                                    <FieldLabel>¿Qué es lo más importante para ti ahora mismo?</FieldLabel>FieldLabel>
                                                                                    <div className="space-y-2">
                                                                                      {[
                                                                                          "Tener más pacientes nuevos",
                                                                                          "Recuperar pacientes que ya tenía",
                                                                                          "Ahorrar tiempo en gestión",
                                                                                          "Mejorar la experiencia del paciente",
                                                                                          "Automatizar para crecer sin contratar",
                                                                                        ].map((op) => (
                                                                                                                <RadioOption
                                                                                                                                          key={op}
                                                                                                                                          label={op}
                                                                                                                                          selected={formData.urgencia === op}
                                                                                                                                          onClick={() => update("urgencia", op)}
                                                                                                                                        />
                                                                                                              ))}
                                                                                      </div>div>
                                                                  </div>div>
                                                                  <div>
                                                                                    <FieldLabel>¿Algo más que quieras contarnos?</FieldLabel>FieldLabel>
                                                                                    <Textarea
                                                                                                          placeholder="Cuéntanos tu situación actual, dudas o cualquier detalle que nos ayude a personalizar tu auditoría..."
                                                                                                          value={formData.gestion}
                                                                                                          onChange={(e) => update("gestion", e.target.value)}
                                                                                                          className="bg-background resize-none"
                                                                                                          rows={4}
                                                                                                        />
                                                                  </div>div>
                                                  </motion.div>motion.div>
                                                )}
                                  </AnimatePresence>AnimatePresence>
                        
                                  <div className="flex justify-between mt-8">
                                    {step > 1 ? (
                                                  <Button variant="outline" onClick={handleBack} className="gap-2">
                                                                  <ArrowLeft className="h-4 w-4" /> Anterior
                                                  </Button>Button>
                                                ) : (
                                                  <div />
                                                )}
                                    {step < TOTAL_STEPS ? (
                                                  <Button onClick={handleNext} className="gap-2 ml-auto">
                                                                  Siguiente <ArrowRight className="h-4 w-4" />
                                                  </Button>Button>
                                                ) : (
                                                  <Button onClick={handleSubmit} className="gap-2 ml-auto">
                                                                  Enviar auditoría <Send className="h-4 w-4" />
                                                  </Button>Button>
                                              )}
                                  </div>div>
                        </motion.div>motion.div>
                </div>div>
          </section>section>
        );
};

export default AuditSection;
</Label>
