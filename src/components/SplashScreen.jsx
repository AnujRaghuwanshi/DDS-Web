import { motion } from "framer-motion";
import { useEffect } from "react";
import durgaMa from "@/assets/maa.jpg";
import Flower from "./Flower";
import Fireworks from "./Fireworks";

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // trigger when animation completes
    }, 4000); // total duration in ms
    return () => clearTimeout(timer);
  }, [onFinish]);

  const flowers = [
    "https://res.cloudinary.com/dku72t1ue/image/upload/v1761294300/top-view-pink-flower-with-drops-removebg-preview_bnxbk7.png", 
    "https://res.cloudinary.com/dku72t1ue/image/upload/v1761294298/pink-flower-white-background-removebg-preview_wonjyo.png",
    "https://res.cloudinary.com/dku72t1ue/image/upload/v1761294298/f61004b9-c04b-4d54-9f02-53f0d2709cd8-removebg-preview_mtooit.png"];

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-[9999]">

      <div className="absolute inset-0 z-0">
      <Fireworks />
      </div>

      {/* Glowing Aura */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{
          opacity: [0, 0.8, 0.6],
          scale: [0.7, 1.1, 1],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
        }}
        className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-red-600 via-amber-400 to-yellow-200 blur-3xl"
      />

      {/* Goddess Image */}
      <motion.img
        src={durgaMa}
        alt="Goddess Durga"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="relative z-10 w-72 md:w-96 h-72 md:h-96 rounded-full object-cover border-4 border-amber-400 shadow-[0_0_50px_rgba(255,200,0,0.5)] drop-shadow-[0_0_30px_rgba(255,215,0,0.7)]"
        style={{ objectPosition: "center top" }}
      />

      {/* Text (जय माता दी) */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 1 }}
        className="mt-8 text-3xl md:text-4xl font-bold text-amber-400 drop-shadow-lg"
      >
        🌺 श्री दादा दरबार 🌺
      </motion.h1>

      {/* 🌸 Virtual Flower Offering Layer */}
      <div className="absolute inset-0 z-[15] pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <Flower
            key={i}
            src={flowers[Math.floor(Math.random() * flowers.length)]}
            left={Math.random() * 100}
            delay={Math.random() * 0.5}
          />
        ))}
      </div>
    </div>
  );
}
