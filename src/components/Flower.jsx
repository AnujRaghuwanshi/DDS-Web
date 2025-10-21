import { motion } from "framer-motion";

export default function Flower({ src, left, delay }) {
  return (
    <motion.img
      src={src}
      alt="Flower Offering"
      initial={{ y: -100, opacity: 0, rotate: 0 }}
      animate={{
        y: "100vh",
        opacity: [0.8, 1, 0],
        rotate: [0, 360],
      }}
      transition={{
        duration: 4 + Math.random() * 2, // varies per flower
        delay,
        ease: "easeInOut",
      }}
      className="absolute w-10 h-10 object-contain pointer-events-none select-none"
      style={{ left: `${left}%` }}
    />
  );
}
