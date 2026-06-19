import { motion } from "framer-motion";
import { scrollAnimationConfig } from "@/hooks/useScrollAnimation";

export default function ProblemSection() {
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

  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.2 },
    },
  };

  return (
    <section id="problem" className="py-16 sm:py-24 md:py-32 bg-background">
      <div className="w-full px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={scrollAnimationConfig.viewport}
        >
          {/* Section Title */}
          <motion.div variants={titleVariants} className="max-w-2xl mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
              Software Infrastructure Is Growing More Complex
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Modern systems involve multiple services, diverse environments, numerous deployments, intricate
              dependencies, various monitoring tools, and complex operational workflows. Managing this complexity
              manually is increasingly unsustainable.
            </p>
          </motion.div>

          {/* Problem Grid */}
          <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Left Column */}
            <div className="space-y-4 sm:space-y-6">
              <motion.div variants={itemVariants} className="flex gap-3 sm:gap-4 group">
                <div className="flex-shrink-0 w-1 bg-primary rounded-full group-hover:h-12 transition-all duration-300" />
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                    Operational Complexity
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Teams struggle to manage sprawling infrastructure across multiple cloud providers, regions, and
                    deployment strategies.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-3 sm:gap-4 group">
                <div className="flex-shrink-0 w-1 bg-primary rounded-full group-hover:h-12 transition-all duration-300" />
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                    Visibility Challenges
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Fragmented monitoring and observability tools make it difficult to understand system behavior and
                    troubleshoot issues quickly.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-3 sm:gap-4 group">
                <div className="flex-shrink-0 w-1 bg-primary rounded-full group-hover:h-12 transition-all duration-300" />
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                    Reliability Risks
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Manual processes and lack of intelligent automation increase the risk of human error and system
                    failures.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Visual */}
            <motion.div variants={imageVariants} className="flex items-center justify-center mt-6 sm:mt-0">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663775876534/MEFrF4th6YAXR5ehyBAFVW/problem-section-visual-PwzJV2eZSJ6gxjsr4EiJbb.webp"
                alt="Infrastructure complexity visualization"
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
