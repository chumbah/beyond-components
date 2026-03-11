import { motion } from "framer-motion";
import { Target, Users, Globe, Factory, Radio, Cpu, Zap } from "lucide-react";
import Layout from "@/components/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const industries = [
  { icon: Factory, name: "Manufacturing", desc: "Components for assembly lines, robotics, and production equipment." },
  { icon: Radio, name: "Telecommunications", desc: "RF components, connectors, and networking hardware." },
  { icon: Cpu, name: "Industrial Automation", desc: "PLCs, sensors, actuators, and control system components." },
  { icon: Zap, name: "Energy", desc: "Power electronics, transformers, and grid infrastructure components." },
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-hero py-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
            Built on Trust, Driven by <span className="text-electric">Expertise</span>
          </h1>
          <p className="text-lg text-primary-foreground/70 leading-relaxed">
            For over two decades, Beyond Components has been the trusted source for electronic and electro-mechanical components, serving engineers and procurement teams across the nation.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Mission */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: Target, title: "Our Mission", text: "To provide reliable, high-quality components with unmatched technical support, enabling our customers to build the technologies of tomorrow." },
            { icon: Users, title: "Customer First", text: "Every relationship begins with understanding our customer's unique requirements. We assign dedicated account managers who become true extensions of your team." },
            { icon: Globe, title: "Nationwide Reach", text: "With strategically located distribution centers, we deliver components to any location in the country within 24-48 hours." },
          ].map((item, i) => (
            <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="text-center md:text-left">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 mx-auto md:mx-0">
                <item.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display font-semibold text-foreground text-xl mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "20+", label: "Years in Business" },
            { value: "50K+", label: "Components in Stock" },
            { value: "5,000+", label: "Active Customers" },
            { value: "99.8%", label: "Order Accuracy" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl font-display font-bold text-accent mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Industries */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-12">Industries We Serve</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="flex gap-5 p-6 rounded-xl bg-card border border-border shadow-card"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center shrink-0">
                <ind.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">{ind.name}</h3>
                <p className="text-sm text-muted-foreground">{ind.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
