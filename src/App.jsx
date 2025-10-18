import React from "react"
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import About from "./components/About.jsx"
import Gallery from "./components/Gallery.jsx"
import ContactForm from "./components/ContactForm.jsx"
import Footer from "./components/Footer.jsx"
import { I18nProvider } from "./components/i18n.jsx"
import SoundLayer from "./components/SoundLayer";

export default function App() {
  return (
    <I18nProvider>
      <div className="bg-background text-foreground min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <SoundLayer />
          <About />
          <Gallery />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  )
}
