import { motion } from "framer-motion";
import profileImg from "@/assets/alex-profile.png";

const HeroSection = () => {
  return (
    <section className="min-h-[70vh] flex items-center pt-28 md:pt-32 pb-10">
      <div className="container mx-auto px-6 max-w-[1100px]">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] leading-tight font-semibold text-foreground tracking-tight">
              Strategy That Drives{" "}
              <span className="text-accent">Real Results.</span>
            </h1>

            <p className="mt-5 text-lg text-muted-foreground font-medium">
              Helping founders, CEOs and leadership teams make sharper decisions.
            </p>

            <p className="mt-4 text-base text-foreground/75 leading-relaxed max-w-xl">
              I work hands-on with leadership to figure out where to compete, how to win, how to fund growth, and how to turn strategy into numbers that matter. No fluff — just clear, actionable thinking.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </a>

              <a
                href="https://www.linkedin.com/in/alex-esterkin-98168051"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-sm font-medium border border-border text-foreground rounded-full hover:bg-secondary transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <div className="w-60 h-60 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ring-2 ring-border/50">
              <img
                src={profileImg}
                alt="Alex Esterkin — Strategy Advisor"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
