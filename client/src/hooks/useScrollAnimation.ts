// Framer Motion's whileInView handles viewport detection natively
// This hook is a placeholder for consistent animation patterns

export const scrollAnimationConfig = {
  // Container animation - stagger children
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },

  // Item animation - fade and slide up
  item: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  },

  // Scale animation - subtle zoom
  scaleItem: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  },

  // Slide from left
  slideLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7 },
    },
  },

  // Slide from right
  slideRight: {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7 },
    },
  },

  // Viewport configuration for consistent trigger
  viewport: {
    once: true,
    margin: "-100px",
  },
};
