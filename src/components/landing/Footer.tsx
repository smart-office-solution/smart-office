import { useState } from "react";
import { Zap, Mail, MapPin, Shield, FileText, X } from "lucide-react";

const PrivacyModal = ({ onClose }: { onClose: () => void }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <div className="bg-card rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 relative">
              <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
                      <X className="h-5 w-5" />
              </button>button>
              <h2 className="text-2xl font-bold mb-6">Política de Privacidad</h2>h2>
              <div className="prose prose-sm text-muted-foreground space-y-4">
                      <p><strong>Responsable del tratamiento:</strong>strong> Silvia González Sierra, NIF: 71506084G. Schuetzenstrasse 18, Marburg, Alemania. Email: silviagsierra@gmail.com</p>p>
                      <h3 className="text-foreground font-semibold">Datos que recopilamos</h3>h3>
                      <p>Recopilamos únicamente los datos que tú nos proporcionas a través del formulario de auditoría: dirección de correo electrónico y las respuestas al cuestionario. No recopilamos datos de navegación ni utilizamos cookies de seguimiento.</p>p>
                      <h3 className="text-foreground font-semibold">Finalidad del tratamiento</h3>h3>
                      <p>Los datos facilitados se utilizan exclusivamente para enviarte la auditoría personalizada solicitada y, con tu consentimiento, para mantenerte informado sobre servicios relacionados con la automatización de clínicas.</p>p>
                      <h3 className="text-foreground font-semibold">Base jurídica</h3>h3>
                      <p>El tratamiento se basa en el consentimiento expreso del interesado, otorgado al enviar el formulario de auditoría (Art. 6.1.a RGPD).</p>p>
                      <h3 className="text-foreground font-semibold">Conservación de datos</h3>h3>
                      <p>Conservamos tus datos durante el tiempo necesario para la prestación del servicio solicitado y hasta que revoques tu consentimiento.</p>p>
                      <h3 className="text-foreground font-semibold">Tus derechos</h3>h3>
                      <p>Tienes derecho a acceder, rectificar, suprimir, oponerte, limitar y portar tus datos. Puedes ejercerlos enviando un email a silviagsierra@gmail.com. Si consideras que el tratamiento no es conforme al RGPD, puedes reclamar ante la autoridad de control competente.</p>p>
                      <h3 className="text-foreground font-semibold">Transferencias internacionales</h3>h3>
                      <p>No realizamos transferencias internacionales de datos fuera del Espacio Económico Europeo.</p>p>
              </div>div>
        </div>div>
    </div>div>
  );

const LegalModal = ({ onClose }: { onClose: () => void }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <div className="bg-card rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 relative">
              <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
                      <X className="h-5 w-5" />
              </button>button>
              <h2 className="text-2xl font-bold mb-6">Aviso Legal</h2>h2>
              <div className="prose prose-sm text-muted-foreground space-y-4">
                      <h3 className="text-foreground font-semibold">Datos identificativos</h3>h3>
                      <p><strong>Titular:</strong>strong> Silvia González Sierra<br /><strong>NIF:</strong>strong> 71506084G<br /><strong>Domicilio:</strong>strong> Schuetzenstrasse 18, Marburg, Alemania<br /><strong>Email:</strong>strong> silviagsierra@gmail.com<br /><strong>Web:</strong>strong> smart-office.lovable.app</p>p>
                      <h3 className="text-foreground font-semibold">Objeto</h3>h3>
                      <p>Smart Office es un servicio de consultoría y automatización de procesos para clínicas y negocios del sector salud, mediante el uso de inteligencia artificial y herramientas de gestión digital.</p>p>
                      <h3 className="text-foreground font-semibold">Condiciones de uso</h3>h3>
                      <p>El acceso y uso de este sitio web implica la aceptación de las presentes condiciones. El titular se reserva el derecho de modificar el contenido del sitio sin previo aviso.</p>p>
                      <h3 className="text-foreground font-semibold">Propiedad intelectual</h3>h3>
                      <p>Todos los contenidos de este sitio web (textos, imágenes, diseño) son propiedad de Silvia González Sierra o cuentan con la licencia correspondiente. Queda prohibida su reproducción sin autorización expresa.</p>p>
                      <h3 className="text-foreground font-semibold">Limitación de responsabilidad</h3>h3>
                      <p>El titular no se hace responsable de los daños derivados del uso del sitio web o de la imposibilidad de acceder al mismo.</p>p>
                      <h3 className="text-foreground font-semibold">Legislación aplicable</h3>h3>
                      <p>Las presentes condiciones se rigen por la legislación española y europea aplicable. Para cualquier controversia, las partes se someten a los juzgados y tribunales competentes.</p>p>
              </div>div>
        </div>div>
    </div>div>
  );

const Footer = () => {
    const [showPrivacy, setShowPrivacy] = useState(false);
    const [showLegal, setShowLegal] = useState(false);
  
    const scrollTo = (id: string) => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };
  
    return (
          <>
            {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} />}
            {showLegal && <LegalModal onClose={() => setShowLegal(false)} />}
          
                <footer className="bg-dark-section text-white">
                        <div className="container mx-auto px-4 py-16">
                                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                                    {/* Brand */}
                                              <div>
                                                            <div className="flex items-center gap-2 mb-4">
                                                                            <Zap className="h-6 w-6 text-accent" />
                                                                            <span className="text-xl font-bold">Smart Office</span>span>
                                                            </div>div>
                                                            <p className="text-white/60 text-sm leading-relaxed mb-4">
                                                                            Automatización inteligente para clínicas que quieren crecer sin depender de estar siempre disponibles.
                                                            </p>p>
                                                            <div className="flex flex-col gap-2 text-sm text-white/50">
                                                                            <a href="mailto:silviagsierra@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                                                                                              <Mail className="h-4 w-4" />
                                                                                              silviagsierra@gmail.com
                                                                            </a>a>
                                                                            <span className="flex items-center gap-2">
                                                                                              <MapPin className="h-4 w-4" />
                                                                                              Marburg, Alemania
                                                                            </span>span>
                                                            </div>div>
                                              </div>div>
                                  
                                    {/* Navegación */}
                                              <div>
                                                            <h4 className="font-semibold text-white mb-4">Navegación</h4>h4>
                                                            <ul className="space-y-2 text-sm text-white/60">
                                                              {[
            { label: "El problema", id: "problem" },
            { label: "La solución", id: "solution" },
            { label: "Funciones", id: "features" },
            { label: "Beneficios", id: "benefits" },
            { label: "Precios", id: "pricing" },
            { label: "Solicitar auditoría", id: "audit" },
                            ].map((item) => (
                                                <li key={item.id}>
                                                                    <button
                                                                                            onClick={() => scrollTo(item.id)}
                                                                                            className="hover:text-accent transition-colors"
                                                                                          >
                                                                      {item.label}
                                                                    </button>button>
                                                </li>li>
                                              ))}
                                                            </ul>ul>
                                              </div>div>
                                  
                                    {/* Servicios */}
                                              <div>
                                                            <h4 className="font-semibold text-white mb-4">Servicios</h4>h4>
                                                            <ul className="space-y-2 text-sm text-white/60">
                                                                            <li>Recepcionista IA 24/7</li>li>
                                                                            <li>Agenda inteligente</li>li>
                                                                            <li>Gestión omnicanal</li>li>
                                                                            <li>Seguimiento automatizado</li>li>
                                                                            <li>Auditoría gratuita</li>li>
                                                            </ul>ul>
                                              </div>div>
                                  </div>div>
                        
                          {/* Bottom bar */}
                                  <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
                                              <p>© 2026 Smart Office — Silvia González Sierra. Todos los derechos reservados.</p>p>
                                              <div className="flex items-center gap-6">
                                                            <button
                                                                              onClick={() => setShowPrivacy(true)}
                                                                              className="flex items-center gap-1 hover:text-accent transition-colors"
                                                                            >
                                                                            <Shield className="h-3.5 w-3.5" />
                                                                            Política de Privacidad
                                                            </button>button>
                                                            <button
                                                                              onClick={() => setShowLegal(true)}
                                                                              className="flex items-center gap-1 hover:text-accent transition-colors"
                                                                            >
                                                                            <FileText className="h-3.5 w-3.5" />
                                                                            Aviso Legal
                                                            </button>button>
                                              </div>div>
                                  </div>div>
                        </div>div>
                </footer>footer>
          </>>
        );
};

export default Footer;
</></div>
