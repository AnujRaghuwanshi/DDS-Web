import React, { useState } from "react"
import { useI18n } from "./i18n.jsx"
import { motion } from "framer-motion";

export default function ContactForm() {
  const { t } = useI18n()
  const [status, setStatus] = useState("idle")

  function handleSubmit(e) {
    e.preventDefault()
    setStatus("submitting")
    setTimeout(() => {
      setStatus("success")
      e.target.reset()
      setTimeout(() => setStatus("idle"), 2500)
    }, 800)
  }

  return (
    <section id="contact" className="py-16 md:py-20">
       <motion.section
             id="contact"
             className="py-20 px-4"
             initial={{ opacity: 0, y: 50 }}       // start hidden, slightly down
             whileInView={{ opacity: 1, y: 0 }}    // animate to visible and move up
             viewport={{ once: false}}             
             transition={{ duration: 1.5, ease: "easeOut", delay:0.5 }}
           >
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[2fr,1fr] gap-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary">{t.contact.title}</h2>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm mb-1" htmlFor="name">{t.contact.name}</label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-muted bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-accent"
                placeholder={t.contact.name}
              />
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="email">{t.contact.email}</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-muted bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-accent"
                placeholder={t.contact.email}
              />
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="message">{t.contact.message}</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full rounded-lg border border-muted bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-accent"
                placeholder={t.contact.message}
              />
            </div>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-white px-5 py-2.5 font-semibold hover:opacity-95 disabled:opacity-70"
            >
              {t.contact.submit}
              {status === "submitting" && (
                <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 4a8 8 0 1 0 8 8h2A10 10 0 1 1 12 2z"/>
                </svg>
              )}
            </button>
            {status === "success" && (
              <p className="text-green-700 mt-2">Thank you! We received your message.</p>
            )}
          </form>
        </div>

        <aside className="rounded-xl border border-muted bg-muted/40 p-5 h-fit">
          <h3 className="font-semibold">{t.contact.addressTitle}</h3>
          <p className="text-sm mt-1">Dada Darbar Samiti Rani Pipariya, Tehsil Sohagpur, District Narmadapuram, Madhya Pradesh, India</p>
          <h3 className="font-semibold mt-4">{t.contact.phoneTitle}</h3>
          <p className="text-sm mt-1">+91 9340026873</p>
          <p className="text-sm mt-1">+91 9713404190</p>
          <p className="text-sm mt-1">+91 8109221542</p>
        </aside>
      </div>
      </motion.section>
    </section>
  )
}
