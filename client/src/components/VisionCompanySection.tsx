import { motion } from "framer-motion";
import { scrollAnimationConfig } from "@/hooks/useScrollAnimation";

export default function VisionCompanySection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, delay: 0.2 },
    },
  };

  return (
    <>
      {/* Vision Section */}
      <section id="vision" className="py-16 sm:py-24 md:py-32 bg-background">
        <div className="w-full px-4 sm:px-6 max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={scrollAnimationConfig.viewport}
            className="text-center"
          >
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-foreground">
              Our Vision
            </motion.h2>
            <motion.p variants={textVariants} className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We believe operating software should become dramatically simpler. As software systems continue to grow
              in complexity, intelligent infrastructure platforms will play an increasingly important role in helping
              teams build and scale with confidence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Company Section */}
      <section id="company" className="py-16 sm:py-24 md:py-32 bg-card border-t border-border">
        <div className="w-full px-4 sm:px-6 max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={scrollAnimationConfig.viewport}
            className="text-center"
          >
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-foreground">
              About Velpod
            </motion.h2>
            <motion.p variants={textVariants} className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-12">
              Velpod is an infrastructure software company focused on building AI-powered tooling for modern
              engineering organizations. We're based in India and working with engineering teams to solve the
              operational challenges of modern cloud-native systems.
            </motion.p>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 pt-8 sm:pt-12 border-t border-border">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">Location</p>
                <p className="text-base sm:text-lg font-semibold text-foreground">India</p>
              </motion.div>
              <div className="hidden sm:block w-px h-12 bg-border" />
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-full sm:w-auto"
              >
                <p className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">Email</p>
                <a href="mailto:sahil@velpod.dev" className="text-base sm:text-lg font-semibold text-primary hover:text-primary/80 transition-colors break-all sm:break-normal">
                  sahil@velpod.dev
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
