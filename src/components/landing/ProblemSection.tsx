import { motion } from "framer-motion";
import { Clock, MessageSquareX, CalendarX, UserX } from "lucide-react";

const problems = [
  { icon: Clock, title: "Slow replies cost you clients", desc: "By the time you respond, they've already booked with someone else. Speed wins." },
  { icon: MessageSquareX, title: "Messages everywhere, control nowhere", desc: "WhatsApp, Instagram, email, website — keeping up is exhausting and things slip through the cracks." },
  { icon: CalendarX, title: "No time to manage bookings", desc: "Between doing the actual work and handling admin, scheduling becomes chaos." },
  { icon: UserX, title: "Your business can't run without you", desc: "If you stop answering, everything stops. That's not a business — it's a trap." },
];

const ProblemSection = () => (
  <section id="problem" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Sound familiar?</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          You're working harder than ever — and still losing clients
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          These are the silent revenue killers that most small businesses don't even realize they have.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {problems.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300"
          >
            <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
              <Icon className="h-6 w-6 text-destructive" />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
