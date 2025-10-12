import React from "react"
import { useI18n } from "./i18n.jsx"

export default function LanguageSwitch() {
  const { lang, setLang } = useI18n()

  return (
    <div className="inline-flex rounded-lg overflow-hidden border border-accent">
      <button
        type="button"
        aria-pressed={lang === "en"}
        onClick={() => setLang("en")}
        className={`px-3 py-1 text-sm ${lang === "en" ? "bg-accent text-background" : "bg-background text-foreground hover:bg-muted"}`}
      >
        English
      </button>
      <button
        type="button"
        aria-pressed={lang === "hi"}
        onClick={() => setLang("hi")}
        className={`px-3 py-1 text-sm ${lang === "hi" ? "bg-accent text-background" : "bg-background text-foreground hover:bg-muted"}`}
      >
        हिन्दी
      </button>
    </div>
  )
}
