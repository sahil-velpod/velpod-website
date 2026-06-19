import { motion } from "framer-motion";
import { scrollAnimationConfig } from "@/hooks/useScrollAnimation";

const features = [
  {
    title: "Infrastructure Automation",
    description: "Automate routine infrastructure tasks and reduce manual operational overhead.",
    icon: "https://d2xsxph8kpxj0f.cloudfront.net/310519663775876534/MEFrF4th6YAXR5ehyBAFVW/feature-icon-automation-jTeJTWFQaAUeTwdQPhTvgE.webp",
  },
  {
    title: "Deployment Workflows",
    description: "Streamline deployment processes with intelligent, reliable automation.",
    icon: "https://d2xsxph8kpxj0f.cloudfront.net/310519663775876534/MEFrF4th6YAXR5ehyBAFVW/feature-icon-deployment-bWFiS4YVQRTWoLY9fz6aXb.webp",
  },
  {
    title: "Operational Visibility",
    description: "Gain comprehensive insights into your infrastructure and application behavior.",
    icon: "https://d2xsxph8kpxj0f.cloudfront.net/310519663775876534/MEFrF4th6YAXR5ehyBAFVW/feature-icon-visibility-C22EmWLnD982FvgDjYjh2C.webp",
  },
  {
    title: "Observability",
    description: "Unified monitoring and observability to understand system performance.",
    icon: "https://d2xsxph8kpxj0f.cloudfront.net/310519663775876534/MEFrF4th6YAXR5ehyBAFVW/feature-icon-observability-nTrYqtFEcLj5tZCmsoR8pX.webp",
  },
  {
    title: "Reliability Engineering",
    description: "Build resilient systems with intelligent reliability practices and tooling.",
    icon: "https://d2xsxph8kpxj0f.cloudfront.net/310519663775876534/MEFrF4th6YAXR5ehyBAFVW/feature-icon-reliability-FQknrAEYv9s2jRjGwM7y3a.webp",
  },
  {
    title: "Developer Productivity",
    description: "Empower teams to focus on building products, not managing infrastructure.",
    icon: "https://d2xsxph8kpxj0f.cloudfront.net/310519663775876534/MEFrF4th6YAXR5ehyBAFVW/feature-icon-productivity-7kMNbNmBTiBJsdnjijssb7.webp",
  },
];

export default function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 },
    },
    hover: {
      y: -8,
      transition: { duration: 0.3 },
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

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.1 },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="features" className="py-16 sm:py-24 md:py-32 bg-background">
      <div className="w-full px-4 sm:px-6 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollAnimationConfig.viewport}
          variants={titleVariants}
          className="max-w-2xl mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-foreground">What We Focus On</h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            We build intelligent infrastructure tooling that addresses the core challenges modern engineering teams
            face.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={scrollAnimationConfig.viewport}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="group p-4 sm:p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 backdrop-blur-sm cursor-pointer"
            >
              {/* Icon */}
              <motion.div
                variants={iconVariants}
                whileHover="hover"
                className="w-12 sm:w-16 h-12 sm:h-16 mb-3 sm:mb-4 flex items-center justify-center"
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-full h-full object-contain"
                />
              </motion.div>

              {/* Title */}
              <motion.h3
                className="text-base sm:text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                {feature.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                className="text-xs sm:text-sm text-muted-foreground leading-relaxed"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
