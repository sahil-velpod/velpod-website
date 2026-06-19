import { motion } from "framer-motion";
import { scrollAnimationConfig } from "@/hooks/useScrollAnimation";

export default function AISection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8 },
    },
  };

  const benefitVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7 },
    },
  };

  const numberVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.15,
      rotate: 360,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-background">
      <div className="w-full px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={scrollAnimationConfig.viewport}
        >
          {/* Section Title */}
          <motion.div variants={titleVariants} className="max-w-2xl mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-foreground">Built for the AI Era</h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Advances in AI create unprecedented opportunities to simplify infrastructure operations. Intelligent
              systems can now understand complex infrastructure patterns, predict issues, and automate solutions at
              scale. This allows engineering teams to focus on building products rather than managing operational
              complexity.
            </p>
          </motion.div>

          {/* Content Grid */}
          <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Column - Visual */}
            <motion.div variants={imageVariants} className="flex items-center justify-center order-2 md:order-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663775876534/MEFrF4th6YAXR5ehyBAFVW/ai-section-visual-3FJ8uwcDvqtyFrBWpBmMH9.webp"
                alt="AI and automation visualization"
                className="w-full h-auto rounded-lg"
              />
            </motion.div>

            {/* Right Column - Benefits */}
            <div className="space-y-6 sm:space-y-8 order-1 md:order-2">
              <motion.div variants={benefitVariants} className="flex gap-3 sm:gap-4 group">
                <motion.div
                  variants={numberVariants}
                  whileHover="hover"
                  className="flex-shrink-0 cursor-pointer"
                >
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-primary/20 text-primary font-semibold text-sm group-hover:bg-primary/30 transition-colors">
                    1
                  </div>
                </motion.div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                    Intelligent Automation
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    AI-powered systems learn from your infrastructure patterns and automate decisions that would
                    typically require human expertise.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={benefitVariants} className="flex gap-3 sm:gap-4 group">
                <motion.div
                  variants={numberVariants}
                  whileHover="hover"
                  className="flex-shrink-0 cursor-pointer"
                >
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-primary/20 text-primary font-semibold text-sm group-hover:bg-primary/30 transition-colors">
                    2
                  </div>
                </motion.div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                    Predictive Insights
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Anticipate infrastructure issues before they impact your systems, enabling proactive rather than
                    reactive operations.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={benefitVariants} className="flex gap-3 sm:gap-4 group">
                <motion.div
                  variants={numberVariants}
                  whileHover="hover"
                  className="flex-shrink-0 cursor-pointer"
                >
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-primary/20 text-primary font-semibold text-sm group-hover:bg-primary/30 transition-colors">
                    3
                  </div>
                </motion.div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                    Continuous Improvement
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Systems continuously learn and optimize, improving reliability and efficiency over time without
                    manual intervention.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
