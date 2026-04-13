import { motion } from "framer-motion";
import { TrendingUp, Heart, FolderCheck, Award } from "lucide-react";

const benefits = [
  { icon: TrendingUp, title: "More clients, without working more", desc: "Automation captures and converts leads even while you're off the clock." },
  { icon: Heart, title: "More time, less stress", desc: "Reclaim your evenings and weekends. Let the AI handle the noise." },
  { icon: FolderCheck, title: "An organized business", desc: "Everything in one place — messages, bookings, client data. Finally." },
  { icon: Award, title: "Professional customer experience", desc: "Every client gets VIP treatment from the very first touchpoint." },
];

const BenefitsSection = () => (
  <section id="benefits" className="py-20 md:py-28 bg-section-gradient">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">The transformation</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          What changes when Smart Office works for you
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {benefits.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex gap-4 items-start"
          >
            <div className="h-12 w-12 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
              <Icon className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
