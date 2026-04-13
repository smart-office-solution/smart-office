import { Zap } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2 font-display font-bold text-foreground">
        <Zap className="h-5 w-5 text-primary" />
        Smart Office
      </div>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Smart Office. Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
