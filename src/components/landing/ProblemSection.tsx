import { motion } from "framer-motion";
import { Clock, MessageSquareX, CalendarX, UserX } from "lucide-react";

const problems = [
  { icon: Clock, title: "Las respuestas lentas te cuestan clientes", desc: "Para cuando respondes, ya reservaron con otro. La velocidad gana." },
  { icon: MessageSquareX, title: "Mensajes por todos lados, control en ninguno", desc: "WhatsApp, Instagram, email, web — mantenerte al día es agotador y se te escapan cosas." },
  { icon: CalendarX, title: "No tienes tiempo para gestionar citas", desc: "Entre hacer el trabajo y la administración, agendar se vuelve un caos." },
  { icon: UserX, title: "Tu negocio no funciona sin ti", desc: "Si dejas de responder, todo se detiene. Eso no es un negocio — es una trampa." },
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
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">¿Te suena familiar?</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Trabajas más que nunca — y sigues perdiendo clientes
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Estos son los asesinos silenciosos de ingresos que la mayoría de los pequeños negocios ni siquiera saben que tienen.
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
