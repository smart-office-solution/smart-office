import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-smart-office.jpg";

const navLinks = [
  { label: "Solución", href: "#solution" },
  { label: "Funcionalidades", href: "#features" },
  { label: "Precios", href: "#pricing" },
  { label: "Proceso", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAudit = () => {
    setMobileOpen(false);
    document.getElementById("audit")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-amber-500/5 border-b border-amber-100/50"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <img src={logo} alt="Smart Office" className="h-8 w-auto" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  scrolled
                    ? "text-foreground/70 hover:text-amber-700 hover:bg-amber-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Button
              onClick={scrollToAudit}
              size="sm"
              className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground shadow-md shadow-amber-500/25 rounded-lg gap-1.5 font-semibold"
            >
              Auditoría gratis
            </Button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-foreground hover:bg-amber-50" : "text-white hover:bg-white/10"}`}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-100 shadow-xl shadow-amber-500/10 p-4"
          >
            <div className="flex flex-col gap-1 mb-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left px-4 py-3 text-sm font-medium text-foreground/80 hover:text-amber-700 hover:bg-amber-50 rounded-xl transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
            <Button
              onClick={scrollToAudit}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl gap-2"
            >
              Solicita tu auditoría gratuita
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
