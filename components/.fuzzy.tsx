import { motion } from "framer-motion";

const FuzzyOverlay = () => {
  return (
    <motion.div
      initial={{ transform: "translateX(-20%) translateY(-20%)" }}
      animate={{
        transform: "translateX(10%) translateY(10%)",
      }}
      transition={{
        repeat: Infinity,
        duration: 0.2,
        ease: "linear",
        repeatType: "mirror",
      }}
      style={{
        backgroundImage: 'url("https://www.hover.dev/black-noise.png")',
      }}
      className="pointer-events-none absolute  -inset-[100%] opacity-[10%]"
    />
  );
};

export default FuzzyOverlay;