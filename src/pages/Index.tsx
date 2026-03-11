import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Truck, Headphones, Handshake, ArrowRight, ChevronRight, Star, Cpu, Cog, Cable, ToggleRight, Zap, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { categories, products, testimonials } from "@/data/products";
import heroBg from "@/assets/hero-bg.jpg";

const iconMap: Record<string, React.ElementType> = { Cpu, Cog, Cable, ToggleRight, Zap, Radio };

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const benefits = [
  { icon: Shield, title: "Certified Quality", desc: "Every component meets rigorous quality standards and comes with full traceability." },
  { icon: Truck, title: "Fast Nationwide Delivery", desc: "Strategically located warehouses ensure rapid delivery across the country." },
  { icon: Headphones, title: "Technical Support", desc: "Our engineers provide expert guidance on component selection and integration." },
  { icon: Handshake, title: "Trusted Partnerships", desc: "Direct relationships with top manufacturers guarantee authentic components." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-electric text-sm font-medium mb-6">
              Nationwide Distribution
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
              Reliable Electronic & Electro-Mechanical Components for{" "}
              <span className="text-electric">Modern Industries</span>
            </h1>
            <p className="text-lg text-primary-foreground/70 mb-8 max-w-2xl leading-relaxed">
              Your trusted partner for high-quality components. From prototyping to production, we deliver the parts you need with the expertise you can count on.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-gradient-accent text-accent-foreground font-semibold px-8 hover:opacity-90 transition-opacity">
                <Link to="/products">Browse Components <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/contact">Request a Quote</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Product Categories
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground max-w-xl mx-auto">
              Browse our extensive catalog of components sourced from industry-leading manufacturers.
            </motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => {
              const Icon = iconMap[cat.icon] || Cpu;
              return (
                <motion.div key={cat.name} variants={fadeUp} custom={i}>
                  <Link
                    to={`/products?category=${encodeURIComponent(cat.name)}`}
                    className="group block p-6 rounded-xl bg-card shadow-card hover:shadow-elevated transition-all duration-300 border border-border hover:border-accent/30"
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-gradient-accent transition-all duration-300">
                      <Icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <h3 className="font-display font-semibold text-foreground mb-1">{cat.name}</h3>
                    <p className="text-sm text-muted-foreground">{cat.count.toLocaleString()}+ products</p>
                    <ChevronRight className="w-4 h-4 text-accent mt-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Why Beyond Components?
            </motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <motion.div key={b.title} variants={fadeUp} custom={i} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-accent mx-auto mb-5 flex items-center justify-center">
                  <b.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">Featured Products</h2>
              <p className="text-muted-foreground">Top-selling components trusted by engineers worldwide.</p>
            </div>
            <Button asChild variant="ghost" className="hidden md:flex text-accent hover:text-accent">
              <Link to="/products">View All <ArrowRight className="ml-1 w-4 h-4" /></Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="group rounded-xl bg-card border border-border hover:border-accent/30 shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-square bg-muted flex items-center justify-center p-8">
                  <Cpu className="w-16 h-16 text-muted-foreground/30 group-hover:text-accent/40 transition-colors" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-mono text-muted-foreground mb-1">{product.partNumber}</p>
                  <h3 className="font-display font-semibold text-foreground text-sm mb-2 group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-foreground">${product.price.toFixed(2)}</span>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${product.inStock ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>
                      {product.inStock ? "In Stock" : "Lead Time"}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="md:hidden mt-8 text-center">
            <Button asChild variant="outline">
              <Link to="/products">View All Products <ArrowRight className="ml-1 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-4">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-display font-bold text-primary-foreground text-center mb-12">
            Trusted by Industry Leaders
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-electric text-electric" />
                  ))}
                </div>
                <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">"{t.quote}"</p>
                <div>
                  <p className="font-display font-semibold text-primary-foreground text-sm">{t.name}</p>
                  <p className="text-primary-foreground/50 text-xs">{t.role}, {t.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Ready to Source Your Components?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Get competitive pricing, fast delivery, and expert technical support. Contact us today for a custom quote.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button asChild size="lg" className="bg-gradient-accent text-accent-foreground font-semibold px-8">
              <Link to="/products">Browse Components</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
