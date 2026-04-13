import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2 font-display font-bold text-xl text-foreground">
          <Zap className="h-6 w-6 text-primary" />
          Smart Office
        </button>

        <div className="hidden md:flex items-center gap-8">
          {[
            ["Problem", "problem"],
            ["Solution", "solution"],
            ["Features", "features"],
            ["Benefits", "benefits"],
            ["Audit", "audit"],
          ].map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {label}
            </button>
          ))}
          <Button variant="hero" size="lg" onClick={() => scrollTo("audit")}>
            Request your free audit
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card border-b border-border px-4 pb-4 flex flex-col gap-3">
          {[
            ["Problem", "problem"],
            ["Solution", "solution"],
            ["Features", "features"],
            ["Benefits", "benefits"],
            ["Audit", "audit"],
          ].map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)} className="text-left text-sm text-muted-foreground hover:text-foreground py-1">
              {label}
            </button>
          ))}
          <Button variant="hero" onClick={() => scrollTo("audit")}>
            Request your free audit
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
