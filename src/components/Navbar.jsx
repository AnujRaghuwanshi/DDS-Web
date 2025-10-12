import React, { useState } from "react";
import LanguageSwitch from "./LanguageSwitch.jsx";
import { useI18n } from "./i18n.jsx";
import LogoImage from "@/assets/logo.png";

const years = [2025, 2024, 2023, 2022, 2021];

export default function Navbar() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [openGallery, setOpenGallery] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-muted">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-2 font-bold text-xl text-primary"
          aria-label="Dada Darbar Samiti"
        >
          <img
            src={LogoImage}
            alt="Dada Darbar Samiti Logo"
            className="h-10 w-10 md:h-12 md:w-12 lg:h-12 lg:w-12 rounded-full hover:scale-105 transition-transform"
          />
          <span className="inline-block rounded-md bg-background text-background px-2 py-1">Dada Darbar Samiti</span>
          <span className="sr-only">(DDS)Dada Darbar Samiti</span>
        </a>

        <button
          className="md:hidden p-2 rounded hover:bg-muted"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="text-foreground"
          >
            <path
              fill="currentColor"
              d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
            />
          </svg>
        </button>

        <div className="hidden md:flex items-center gap-6">
          <a href="#home" className="hover:text-primary transition-colors">
            {t.nav.home}
          </a>
          <a href="#about" className="hover:text-primary transition-colors">
            {t.nav.about}
          </a>

          <div className="relative">
            <button
              className="inline-flex items-center gap-1 hover:text-primary transition-colors"
              aria-haspopup="menu"
              aria-expanded={openGallery}
              onClick={() => setOpenGallery((v) => !v)}
            >
              {t.nav.gallery}
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path fill="currentColor" d="m7 10l5 5l5-5z" />
              </svg>
            </button>
            {openGallery && (
              <ul
                role="menu"
                className="absolute mt-2 right-0 w-44 rounded-lg border border-muted bg-background shadow-lg p-2"
                onMouseLeave={() => setOpenGallery(false)}
              >
                {years.map((y) => (
                  <li key={y} role="none">
                    <a
                      role="menuitem"
                      href={`#gallery-${y}`}
                      className="block rounded px-3 py-2 hover:bg-muted"
                    >
                      {t.nav.years}: {y}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <a href="#contact" className="hover:text-primary transition-colors">
            {t.nav.contact}
          </a>
          <LanguageSwitch />
        </div>
      </nav>

      {/* Mobile */}
      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-muted">
          <div className="px-4 py-3 flex flex-col gap-3">
            <a
              onClick={() => setOpen(false)}
              href="#home"
              className="hover:text-primary"
            >
              {t.nav.home}
            </a>
            <a
              onClick={() => setOpen(false)}
              href="#about"
              className="hover:text-primary"
            >
              {t.nav.about}
            </a>

            <details>
              <summary className="cursor-pointer hover:text-primary">
                {t.nav.gallery}
              </summary>
              <ul className="mt-2 pl-4 flex flex-col gap-2">
                {years.map((y) => (
                  <li key={y}>
                    <a
                      onClick={() => setOpen(false)}
                      href={`#gallery-${y}`}
                      className="hover:text-primary"
                    >
                      {t.nav.years}: {y}
                    </a>
                  </li>
                ))}
              </ul>
            </details>

            <a
              onClick={() => setOpen(false)}
              href="#contact"
              className="hover:text-primary"
            >
              {t.nav.contact}
            </a>
            <LanguageSwitch />
          </div>
        </div>
      )}
    </header>
  );
}
