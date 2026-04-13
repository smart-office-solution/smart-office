import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, BarChart3, Lightbulb } from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";

const trustItems = [
  { icon: ShieldCheck, text: "No commitment" },
  { icon: BarChart3, text: "Personalized analysis" },
  { icon: Lightbulb, text: "Actionable insights" },
];

const HeroSection = () => {
  const scrollToAudit = () => document.getElementById("audit")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-section-gradient" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-foreground mb-6">
              Each unanswered message is a{" "}
              <span className="text-gradient">lost client</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              Handle every inquiry instantly and turn conversations into booked appointments — without extra effort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Button variant="hero" size="lg" className="px-8 py-6" onClick={scrollToAudit}>
                Request your free audit
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mb-8">
              Find out where your business is losing clients without realizing it.
            </p>
            <div className="flex flex-wrap gap-6">
              {trustItems.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon className="h-4 w-4 text-accent" />
                  {text}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <img
              src={heroImage}
              alt="Smart Office AI automation dashboard showing chat and calendar"
              width={1024}
              height={768}
              className="rounded-2xl shadow-card-hover animate-float"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
