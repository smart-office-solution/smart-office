import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Globe, Share2, Search, CalendarCheck, MessageCircle, CheckCircle } from "lucide-react";

const items = [
  { icon: Globe, text: "Website review" },
  { icon: Share2, text: "Social media presence" },
  { icon: Search, text: "Google visibility" },
  { icon: CalendarCheck, text: "Booking system" },
  { icon: MessageCircle, text: "Customer communication" },
];

const AuditSection = () => {
  const scrollToAudit = () => document.getElementById("audit-cta")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="audit" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-card rounded-2xl p-8 md:p-12 shadow-card-hover border border-border text-center"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <CheckCircle className="h-4 w-4" /> 100% Free — No strings attached
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Free Digital Presence &<br />Customer Acquisition Audit
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Discover exactly where your business is leaking leads and revenue. We'll analyze your entire digital presence and give you a clear action plan.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8 text-left max-w-md mx-auto">
            {items.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm text-foreground">
                <Icon className="h-4 w-4 text-accent shrink-0" />
                {text}
              </div>
            ))}
          </div>

          <Button variant="hero" size="lg" className="px-10 py-6" onClick={scrollToAudit}>
            Request your free audit
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AuditSection;
