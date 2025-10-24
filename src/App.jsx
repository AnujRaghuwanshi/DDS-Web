import React, {Suspense, lazy, useState } from "react"
import Navbar from "./components/Navbar.jsx"

const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Gallery = lazy(() => import("./components/Gallery"));
const ContactForm = lazy(() => import("./components/ContactForm"));
const Footer = lazy(() => import("./components/Footer"));

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
         <Suspense fallback={<div className="text-center p-10 text-amber-400">Loading...</div>}>
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
        </Suspense>
      )}
      <SoundLayer />
    </I18nProvider>

  )
}
