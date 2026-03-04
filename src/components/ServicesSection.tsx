import { motion } from "framer-motion";

const services = [
  {
    title: "Growth Strategy & 3–5 Year Plan",
    when: "When a business needs to define its next phase of growth — whether entering new markets, launching new products, or scaling existing operations.",
    deliverables: [
      "Market opportunity assessment with addressable revenue sizing",
      "Strategic roadmap with prioritised initiatives and investment requirements",
      "Financial model linking strategic choices to P&L and cash flow impact",
    ],
  },
  {
    title: "Capital Raise & Investment Positioning",
    when: "When preparing to raise equity, secure debt, or present to investors and boards ahead of a funding round or transaction.",
    deliverables: [
      "Investor-grade equity story and strategic narrative",
      "Financial model with scenario analysis and return profiles",
      "Due diligence–ready data pack and management presentation",
    ],
  },
  {
    title: "Commercial & Margin Improvement",
    when: "When revenue growth has stalled, margins are under pressure, or pricing and go-to-market need restructuring.",
    deliverables: [
      "Revenue and margin diagnostic identifying leakage and upside",
      "Pricing architecture review with actionable recommendations",
      "Implementation roadmap with quick wins and structural changes",
    ],
  },
  {
    title: "Business Performance Analysis",
    when: "When leadership needs a clear, data-driven view of what's working, what isn't, and where the greatest value is being left on the table.",
    deliverables: [
      "End-to-end performance diagnostic across revenue, cost, and capital efficiency",
      "Benchmarked KPI framework with peer and sector comparisons",
      "Prioritised action plan with quantified upside and implementation sequencing",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6 max-w-[1100px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">Services</h2>
          <div className="mt-1 w-12 h-0.5 bg-accent rounded-full" />
        </motion.div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-background border border-border rounded-xl p-7 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{service.when}</p>
              <ul className="mt-4 space-y-2">
                {service.deliverables.map((d, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="mt-1.5 block w-1 h-1 rounded-full bg-accent shrink-0" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
