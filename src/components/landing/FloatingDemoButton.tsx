import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";

const DEMO_URL = "#"; // TODO: reemplazar con la URL real de la demo del bot
const SCROLL_DELAY_MS = 10_000;

const FloatingDemoButton = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    let timer: number | undefined;

    const startTimer = () => {
      if (timer) return;
      timer = window.setTimeout(() => setVisible(true), SCROLL_DELAY_MS);
    };

    const onScroll = () => {
      if (window.scrollY > 50) {
        startTimer();
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (timer) window.clearTimeout(timer);
    };
  }, []);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-5 right-5 z-50"
        >
          <div className="relative">
            <button
              type="button"
              aria-label="Cerrar"
              onClick={() => setDismissed(true)}
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-foreground text-background text-xs font-bold flex items-center justify-center shadow-md hover:scale-110 transition-transform"
            >
              ×
            </button>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 pl-4 pr-5 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
            >
              <span className="relative flex items-center justify-center w-7 h-7 rounded-full bg-primary-foreground/15">
                <MessageCircle className="w-4 h-4" />
                <span className="absolute inset-0 rounded-full bg-accent/60 animate-ping" />
              </span>
              Prueba el bot gratis
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingDemoButton;
