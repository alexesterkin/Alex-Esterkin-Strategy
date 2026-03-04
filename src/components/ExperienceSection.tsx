import { motion } from "framer-motion";

const timeline = [
  {
    company: "Neuron Group",
    role: "Senior Strategy Manager",
    period: "2025–26",
    description: "AI infrastructure developer spanning GPU deployment and AI-ready data centre construction.",
    bullets: [
      "Prepared investor materials and financial models for seed-stage ($5–15M cheques), Series A / PE investors ($600–700M total), and debt providers ($3B+).",
      "Developed and executed the company's fundraising strategy in direct support of the CEO.",
      "Structured capital raise narratives and data packs tailored to different investor profiles and risk appetites.",
    ],
  },
  {
    company: "Mars & Co",
    role: "Senior Manager",
    period: "2019–2025",
    bullets: [
      "Managed complex strategy engagements for FTSE-listed and PE-backed clients across consumer, industrial, and services sectors.",
      "Built growth strategies, value creation plans, and financial models that supported capital raises exceeding $200M in aggregate.",
      "Led teams of 3–8 consultants; responsible for client delivery, team development, and commercial relationships.",
    ],
  },
  {
    company: "North Highland",
    role: "Consultant",
    period: "2015–2019",
    bullets: [
      "Delivered transformation and operational improvement programmes across FTSE 100 organisations.",
      "Developed business cases and programme roadmaps adopted at executive committee level.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6 max-w-[1100px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">Experience</h2>
          <div className="mt-1 w-12 h-0.5 bg-accent rounded-full" />
        </motion.div>

        <div className="mt-10 relative">
          {/* Timeline line */}
          <div className="absolute left-3 top-2 bottom-2 w-px bg-border hidden md:block" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="md:pl-10 relative"
              >
                {/* Dot */}
                <div className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-accent border-2 border-background hidden md:block" />

                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                  <h3 className="text-lg font-semibold text-foreground">{item.company}</h3>
                  <span className="text-sm text-muted-foreground">
                    {item.role} · {item.period}
                  </span>
                </div>
                {item.description && (
                  <p className="mt-1 text-sm text-muted-foreground italic">{item.description}</p>
                )}
                <ul className="mt-3 space-y-2">
                  {item.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="mt-1.5 block w-1 h-1 rounded-full bg-muted-foreground/40 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
