import React from "react";
import { useI18n } from "./i18n.jsx";
import { Typewriter } from "react-simple-typewriter";
import Galaxy from './Galaxy';

export default function Hero() {
  const { t } = useI18n();
  return (
    <section id="home" className="relative">

    <div style={{ width: '100%', height: '700px', position: 'relative' }}>
  <Galaxy 
    mouseRepulsion={true}
    mouseInteraction={true}
    density={1}
    glowIntensity={0.4}
    saturation={0.2}
    hueShift={240}
    twinkleIntensity={0.2}
    rotationSpeed={0.1}
    repulsionStrength={2}
    autoCenterRepulsion={0}
    starSpeed={0.5} 
    transparent={false}
  />
</div>

      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <h1 className="text-pretty text-amber-700 text-3xl md:text-5xl font-extrabold text-white drop-shadow">
            
            <Typewriter
              words={[t.hero.title]}
              loop={Infinity} // number of times to repeat
              cursor // show cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={80}
              delaySpeed={1200}
            />
            
          </h1>
          
          <p className="mt-4 text-lg md:text-xl text-gray-700 italic">
            “Let devotion be the light that guides your path.”
          </p>

          <a
            href="#gallery"
            className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-full bg-accent text-background font-semibold hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            {t.hero.cta}
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 4v12.17l4.59-4.58L18 13l-6 6l-6-6l1.41-1.41L11 16.17V4z"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
