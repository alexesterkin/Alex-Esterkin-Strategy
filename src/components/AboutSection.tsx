import { motion } from "framer-motion";

const howIWork = [
  "Rapid diagnostic — understand the business, market, and financials before proposing anything",
  "Financially grounded options — every strategic path is modelled with revenue, cost, and capital implications",
  "Clear strategic choices — no 80-slide decks; sharp recommendations the leadership team can act on",
  "Board & investor-ready outputs — materials built to withstand scrutiny from boards, lenders, and PE sponsors",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-6 max-w-[1100px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">About</h2>
          <div className="mt-1 w-12 h-0.5 bg-accent rounded-full" />

          <div className="mt-8 max-w-2xl space-y-4 text-foreground/80 leading-relaxed">
            <p>
              I'm Alex Esterkin — an independent strategy advisor working with founders, CEOs, and PE-backed leadership teams to solve commercially critical problems. My background spans six years as a Senior Manager at Mars & Co, one of the world's most selective strategy boutiques, preceded by four years of transformation consulting at North Highland, and most recently a Senior Strategy Manager role at Neuron Group — a high-growth, Silicon Valley–based AI infrastructure company.
            </p>
            <p>
              I specialise in growth strategy, capital raising strategy, commercial excellence, value creation planning, financial modelling, and stakeholder alignment. I hold an Economics BA from the University of Nottingham and am CIMA qualified — grounding every recommendation in financial rigour.
            </p>
          </div>

          <div className="mt-12 max-w-2xl">
            <h3 className="text-xl font-semibold text-foreground">How I Work</h3>
            <ul className="mt-4 space-y-3">
              {howIWork.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground/80">
                  <span className="mt-1.5 block w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
