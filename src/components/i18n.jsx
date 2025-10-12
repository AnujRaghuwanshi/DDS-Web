import React, { createContext, useContext, useEffect, useMemo, useState } from "react"

const I18nContext = createContext(null)

const dictionaries = {
  en: {
    nav: { home: "Home", about: "About", gallery: "Gallery", contact: "Contact", years: "Years" },
    hero: { title: "Welcome to Dada Darbar Samiti", cta: "Explore Gallery" },
    about: {
      title: "About Dada Darbar Samiti",
      body:
        "Dada Darbar Samiti is dedicated to preserving and celebrating our rich cultural heritage. Famous for the Goddess Durga’s Jhanki, the Samiti organizes devotional events, promotes community service, and fosters unity and tradition. Established in 2013, the Samiti has grown and evolved over the years, continuously enhancing the celebration of Goddess Durga's Jhanki. It is not merely a group of individuals but represents the entire village community — including children, teenagers, women, and adults — coming together in devotion, service, and cultural pride. Through its initiatives, Dada Darbar Samiti strengthens community bonds and ensures that our cherished traditions continue to flourish for generations to come."
    },
    gallery: { title: "Gallery", year: "Year" },
    contact: {
      title: "Contact Us",
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Submit",
      addressTitle: "Address",
      phoneTitle: "Phone"
    },
    footer: {
      rights: `Copyright © ${new Date().getFullYear()} Dada Darbar Samiti`,
      follow: "Follow us"
    }
  },
  hi: {
    nav: { home: "मुखपृष्ठ", about: "समिति परिचय", gallery: "गैलरी", contact: "संपर्क", years: "वर्ष" },
    hero: { title: "दादा दरबार समिति में आपका स्वागत है", cta: "गैलरी देखें" },
    about: {
      title: "दादा दरबार समिति",
      body:
        "दादा दरबार समिति हमारे समृद्ध सांस्कृतिक विरासत को संरक्षित और मनाने के लिए समर्पित है। देवी दुर्गा की झांकी के लिए प्रसिद्ध, यह समिति भक्तिमय कार्यक्रमों का आयोजन करती है, सामुदायिक सेवा को प्रोत्साहित करती है और एकता व परंपराओं को मजबूत करती है। 2013 में स्थापित, यह समिति वर्षों में लगातार विकसित हुई है और देवी दुर्गा की झांकी के आयोजन को और अधिक भव्य और सुंदर बनाया है। यह केवल कुछ लोगों का समूह नहीं है, बल्कि पूरे गाँव की समिति है — जिसमें बच्चे, किशोर, महिलाएँ और वयस्क सभी शामिल हैं — जो भक्ति, सेवा और सांस्कृतिक गर्व के साथ एकजुट होते हैं। अपनी पहलों के माध्यम से, दादा दरबार समिति समुदाय के बंधनों को मजबूत करती है और यह सुनिश्चित करती है कि हमारी प्रिय परंपराएँ आने वाली पीढ़ियों के लिए जीवित रहें।"
    },
    gallery: { title: "गैलरी", year: "वर्ष" },
    contact: {
      title: "हमसे संपर्क करें",
      name: "नाम",
      email: "ईमेल",
      message: "संदेश",
      submit: "जमा करें",
      addressTitle: "पता",
      phoneTitle: "फोन"
    },
    footer: {
      rights: `कॉपीराइट © ${new Date().getFullYear()} दादा दरबार समिति`,
      follow: "हमें फॉलो करें"
    }
  }
}

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem("dds-lang") || "en")

  useEffect(() => {
    localStorage.setItem("dds-lang", lang)
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "hi" ? "hi" : "en"
      document.documentElement.dir = "ltr"
    }
  }, [lang])

  const t = useMemo(() => dictionaries[lang], [lang])

  const value = useMemo(
    () => ({ lang, setLang, t }),
    [lang, t]
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used within I18nProvider")
  return ctx
}
