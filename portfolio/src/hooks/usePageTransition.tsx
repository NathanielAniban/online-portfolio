import { motion } from "framer-motion";

export function usePageTransition() {
  const MotionWrapper = ({ children }: { children: React.ReactNode }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}  // Start lower
      animate={{ opacity: 1, y: 0 }}    // Fade and rise
      exit={{ opacity: 0, y: -20 }}      // Fade and move up
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );

  return { MotionWrapper };
}
