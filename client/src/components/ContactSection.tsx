import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useState } from "react";
import { scrollAnimationConfig } from "@/hooks/useScrollAnimation";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    focus: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 bg-card border-t border-border">
      <div className="w-full px-4 sm:px-6 max-w-2xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={scrollAnimationConfig.viewport}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-foreground">Get in Touch</h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Interested in learning more about Velpod? We'd love to hear from you.
            </p>
          </motion.div>

          {/* Contact Form */}
          {!submitted ? (
            <motion.form onSubmit={handleSubmit} variants={containerVariants} className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <motion.div variants={inputVariants}>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <motion.input
                    whileFocus="focus"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 sm:py-3 rounded-lg bg-background border border-border text-foreground text-sm placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                  />
                </motion.div>
                <motion.div variants={inputVariants}>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <motion.input
                    whileFocus="focus"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 sm:py-3 rounded-lg bg-background border border-border text-foreground text-sm placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                  />
                </motion.div>
              </div>

              <motion.div variants={inputVariants}>
                <label htmlFor="company" className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                  Company
                </label>
                <motion.input
                  whileFocus="focus"
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 sm:py-3 rounded-lg bg-background border border-border text-foreground text-sm placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                />
              </motion.div>

              <motion.div variants={inputVariants}>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <motion.textarea
                  whileFocus="focus"
                  id="message"
                  name="message"
                  placeholder="Tell us about your infrastructure challenges..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 sm:py-3 rounded-lg bg-background border border-border text-foreground text-sm placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all min-h-28 sm:min-h-32 resize-none"
                />
              </motion.div>

              <motion.div variants={inputVariants}>
                <motion.button
                  type="submit"
                  className="w-full px-6 sm:px-8 py-5 sm:py-6 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-sm sm:text-base transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </motion.div>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center py-12 sm:py-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="inline-flex items-center justify-center w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-primary/20 mb-4"
              >
                <motion.svg
                  className="w-7 sm:w-8 h-7 sm:h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </motion.svg>
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl sm:text-2xl font-bold text-foreground mb-2"
              >
                Message Sent!
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-sm sm:text-base text-muted-foreground"
              >
                Thank you for reaching out. We'll get back to you soon.
              </motion.p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
