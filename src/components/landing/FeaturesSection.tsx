import { motion } from "framer-motion";
import { Globe, MessageSquare, UserCheck, CalendarPlus, Clock4, Share2 } from "lucide-react";

const features = [
  { icon: Globe, title: "Multi-channel replies", desc: "Website, WhatsApp, Instagram, Facebook — all handled in one place." },
  { icon: UserCheck, title: "Lead qualification", desc: "Automatically filters serious prospects from casual inquiries." },
  { icon: CalendarPlus, title: "Appointment booking", desc: "Clients book directly from the conversation. No phone tag." },
  { icon: Clock4, title: "24/7 availability", desc: "Works nights, weekends, and holidays. Never misses an opportunity." },
  { icon: MessageSquare, title: "Smart conversations", desc: "Natural, personalized responses that feel human — not robotic." },
  { icon: Share2, title: "Seamless integrations", desc: "Connects with your existing tools, calendar, and CRM." },
];

const FeaturesSection = () => (
  <section id="features" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">AI Receptionist</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Everything you need to never miss a client again
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 group"
          >
            <div className="h-11 w-11 rounded-lg bg-hero-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
