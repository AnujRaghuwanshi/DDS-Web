import React from "react"
import { useI18n } from "./i18n.jsx"
import { motion } from "framer-motion";

export default function About() {
  const { t } = useI18n()
  return (
    <section id="about" className="py-16 md:py-20">
      <motion.section
       id="about"
       className="py-20 px-4"
       initial={{ opacity: 0, y: 50 }}       // start hidden, slightly down
       whileInView={{ opacity: 1, y: 0 }}    // animate to visible and move up
       viewport={{ once: false, amount: 0.2 }} // trigger when 20% is in view, only once
       transition={{ duration: 1.5, ease: "easeOut", delay:0.5 }}
     >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-balance">{t.about.title}</h2>
        <p className="mt-4 leading-relaxed">{t.about.body}</p>
      </div>
    </motion.section>
    </section>
  )
}
