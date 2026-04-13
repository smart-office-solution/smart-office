import { motion } from "framer-motion";
import { MessageCircle, Clock, CalendarCheck, Sparkles } from "lucide-react";

const solutions = [
  { icon: MessageCircle, title: "Automates customer communication", desc: "Every message gets a professional, instant reply — no matter the channel." },
  { icon: Clock, title: "Responds instantly, 24/7", desc: "Your AI receptionist never sleeps, never takes a break, and never misses a lead." },
  { icon: CalendarCheck, title: "Organizes & manages appointments", desc: "Bookings are handled automatically. No double-bookings, no back-and-forth." },
  { icon: Sparkles, title: "Improves customer experience", desc: "Clients feel heard and valued from the very first interaction." },
];

const SolutionSection = () => (
  <section id="solution" className="py-20 md:py-28 bg-section-gradient">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">The solution</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Meet Smart Office — your AI-powered business partner
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Stop chasing messages and start growing your business. Smart Office handles the communication so you can focus on what you do best.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {solutions.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex gap-4 bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300"
          >
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Icon className="h-6 w-6 text-primary" />
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

export default SolutionSection;
