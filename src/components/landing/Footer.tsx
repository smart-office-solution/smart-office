import { useState } from "react";
import { Zap, Mail, MapPin, Shield, FileText, X } from "lucide-react";

const PrivacyModal = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
    <div className="bg-card rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 relative">
      <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
        <X className="h-5 w-5" />
      </button>
      <h2 className="text-2xl font-bold mb-6">Política de Privacidad</h2>
      <div className="prose prose-sm text-muted-foreground space-y-4">
        <p><strong>Responsable del tratamiento:</strong> Silvia González Sierra, NIF: 78228267A</p>
        <h3 className="text-foreground font-semibold">Datos que recopilamos</h3>
        <p>Recopilamos únicamente los datos que tú nos proporcionas a través del formulario de contacto: dirección de correo electrónico.</p>
        <h3 className="text-foreground font-semibold">Finalidad del tratamiento</h3>
        <p>Los datos facilitados se utilizan exclusivamente para enviarte la auditoría personalizada que has solicitado y, con tu consentimiento, para mantenerte informado/a sobre nuestros servicios.</p>
        <h3 className="text-foreground font-semibold">Base jurídica</h3>
        <p>El tratamiento se basa en el consentimiento expreso del interesado, otorgado al enviar el formulario.</p>
        <h3 className="text-foreground font-semibold">Conservación de datos</h3>
        <p>Conservaremos tus datos mientras exista una relación comercial o hasta que solicites su supresión.</p>
        <h3 className="text-foreground font-semibold">Transferencias internacionales</h3>
        <p>No realizamos transferencias internacionales de datos fuera del Espacio Económico Europeo.</p>
        <h3 className="text-foreground font-semibold">Tus derechos</h3>
        <p>Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición y portabilidad escribiendo a <strong>silviagsierra@gmail.com</strong>.</p>
      </div>
    </div>
  </div>
);

const Footer = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <footer className="bg-gray-950 text-gray-400 py-12 border-t border-white/5">
      {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} />}

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-violet-700 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-bold text-lg">Smart Office AI</span>
            </div>
            <p className="text-sm leading-relaxed">
              Automatización inteligente para clínicas y negocios de salud. Tu asistente siempre activo.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-violet-400 shrink-0" />
                <a href="mailto:silviagsierra@gmail.com" className="hover:text-white transition-colors">
                  silviagsierra@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>España</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => setShowPrivacy(true)}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Shield className="w-4 h-4 text-blue-400 shrink-0" />
                  Política de privacidad
                </button>
              </li>
              <li className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-violet-400 shrink-0" />
                <span>RGPD Cumplimiento</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Smart Office AI · Silvia González Sierra</p>
          <p className="flex items-center gap-1">
            Hecho con
            <span className="text-violet-400 mx-1">♥</span>
            para clínicas que quieren crecer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
