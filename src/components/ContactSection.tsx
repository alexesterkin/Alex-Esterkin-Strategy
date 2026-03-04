import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:ajesterkin@gmail.com?subject=Inquiry from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`;
  };

  return (
    <section id="contact" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6 max-w-[1100px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">Contact</h2>
          <div className="mt-1 w-12 h-0.5 bg-accent rounded-full" />

          <div className="mt-8 grid md:grid-cols-2 gap-12">
            {/* Info */}
            <div className="space-y-5">
              <div className="flex items-center gap-3 text-foreground/80">
                <Mail className="w-5 h-5 text-accent" />
                <a href="mailto:ajesterkin@gmail.com" className="hover:text-foreground transition-colors">
                  ajesterkin@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-foreground/80">
                <Linkedin className="w-5 h-5 text-accent" />
                <a
                  href="https://www.linkedin.com/in/alex-esterkin-98168051"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring/30 transition-shadow"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring/30 transition-shadow"
              />
              <textarea
                placeholder="Message"
                rows={4}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring/30 transition-shadow resize-none"
              />
              <button
                type="submit"
                className="px-6 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Final CTA */}
          <div className="mt-20 text-center">
            <p className="text-2xl font-serif font-medium text-foreground italic">
              "Need sharper strategy — not more slides? Let's talk."
            </p>
            <a
              href="mailto:ajesterkin@gmail.com"
              className="mt-6 inline-flex items-center px-6 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
