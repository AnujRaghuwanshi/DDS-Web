import React from "react"
import { useI18n } from "./i18n.jsx"


function SocialIcon({ href, label, path, className = ""}) {
  return (
    <a href={href} aria-label={label} target="_blank" rel="noreferrer" className={`group p-2 rounded transition-transform hover:scale-125 ${className}`}>
      <svg width="20" height="20" viewBox="0 0 24 24" className="transition-all duration-300">
        {/* Define gradient */}
    <defs>
      <linearGradient id="instaGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#F58529" />   {/* orange */}
        <stop offset="30%" stopColor="#DD2A7B" />  {/* pink */}
        <stop offset="60%" stopColor="#8134AF" />  {/* purple */}
        <stop offset="100%" stopColor="#515BD4" /> {/* blue */}
      </linearGradient>
    </defs>
        <path fill="currentColor" d={path} className="text-foreground group-hover:fill-[url(#instaGradient)] transition-all duration-300" />
      </svg>
    </a>
  )
}

export default function Footer() {
  const { t } = useI18n()
  return (
    <footer className="border-t border-muted py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">{t.footer.rights}</p>
        <div className="flex items-center gap-2">
          <span className="text-sm mr-1">{t.footer.follow}:</span>
          
          <SocialIcon
            href="https://www.instagram.com/dds_ranipipariya?igsh=Y2ZobmJwaXN0dmMw"
            label="Instagram"
            path="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5m5 5a5 5 0 1 0 5 5a5 5 0 0 0-5-5m6-2a1 1 0 1 0 1 1a1 1 0 0 0-1-1Z"
          />    

        </div>
      </div>
    </footer>
  )
}
