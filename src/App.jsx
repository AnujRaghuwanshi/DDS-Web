import React, { useState } from "react"
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import About from "./components/About.jsx"
import Gallery from "./components/Gallery.jsx"
import ContactForm from "./components/ContactForm.jsx"
import Footer from "./components/Footer.jsx"
import { I18nProvider } from "./components/i18n.jsx"
import SoundLayer from "./components/SoundLayer";
import SplashScreen from "./components/SplashScreen";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <I18nProvider>
      
       {isLoading ? (
        <SplashScreen onFinish={() => setIsLoading(false)} />
        
      ) : (
        <div className="fade-in bg-background text-foreground min-h-screen">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Gallery />
            <ContactForm />
          </main>
          <Footer />
        </div>
      )}
      <SoundLayer />
    </I18nProvider>

  )
}
