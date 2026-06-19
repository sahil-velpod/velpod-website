import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative min-h-screen pt-24 sm:pt-32 pb-12 sm:pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663775876534/MEFrF4th6YAXR5ehyBAFVW/hero-network-bg-fRscHCPMmU9WYhX5FN2S8L.webp"
          alt="Network visualization"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
      </div>

      {/* Content */}
      <div className="w-full px-4 sm:px-6 relative z-10 flex justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl w-full"
        >
          {/* Main Headline */}
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
              AI-Native Infrastructure
            </span>
            <br />
            <span className="text-foreground">for Modern Engineering Teams</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl leading-relaxed"
          >
            Velpod is building intelligent infrastructure tooling that helps engineering teams deploy, operate, and
            manage cloud-native applications with greater confidence and less operational overhead.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 h-auto w-full sm:w-auto"
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 font-semibold text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 h-auto w-full sm:w-auto"
              onClick={() => {
                const element = document.getElementById("problem");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
