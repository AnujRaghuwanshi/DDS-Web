import React from "react"
import { useI18n } from "./i18n.jsx"
import { galleryData } from "../data/gallery.js"
import { motion } from "framer-motion";

export default function Gallery() {
  const { t } = useI18n()
  return (
    <section id="gallery" className="py-16 md:py-20 bg-muted/40">
      <motion.section
       id="gallery"
       className="py-20 px-4"
       initial={{ opacity: 0, y: 50 }}       // start hidden, slightly down
       whileInView={{ opacity: 1, y: 0 }}    // animate to visible and move up
       viewport={{ once: false, amount: 0.1 }} // trigger when 20% is in view, only once
       transition={{ duration: 1.5, ease: "easeOut", delay:0.3 }}
     >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary">{t.gallery.title}</h2>

        <div className="mt-8 space-y-12">
          {galleryData.map((group) => (
            <div key={group.year} id={`gallery-${group.year}`}>
              
              <div className="flex items-center justify-between">
                <h3 className="text-xl md:text-2xl font-semibold">{t.gallery.year}: {group.year}</h3>
                <a href="#home" className="text-sm text-primary hover:underline">↑ {t.nav?.home || "Home"}</a>
              </div>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {group.photos.map((src, idx) => (
                  <figure
                    key={idx}
                    className="rounded-xl overflow-hidden border border-muted bg-background shadow hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={src || "/placeholder.svg"}
                      alt={`Jhanki ${group.year} photo ${idx + 1}`}
                      className="w-full h-48 object-cover hover:scale-[1.02] transition-transform"
                    />
                    <figcaption className="p-3 text-sm">{`Jhanki ${group.year} #${idx + 1}`}</figcaption>
                  </figure>
                ))}
              </div>

            </div>
          ))}

        </div>
        
      </div>
      </motion.section>
    </section>
  )
}
