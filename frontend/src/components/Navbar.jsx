import React, { useState } from 'react'

const links = [
  { href: '#features', enLabel: 'Ecosystem', urLabel: 'نظام' },
  { href: '#education', enLabel: 'Learn', urLabel: 'سیکھیں' },
  { href: '#tools', enLabel: 'Tools', urLabel: 'اوزار' },
  { href: '#clinics', enLabel: 'Find a Clinic', urLabel: 'کلینک تلاش کریں' },
]

// Small hand-drawn-style tooth mark used as the brand logo throughout the app
export function ToothMark({ className = 'w-9 h-9' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M24 6c-4.5 0-6.8 2.6-9.4 2.6-3.9 0-6.6 3.4-6.6 8.2 0 5 1.7 9 2.9 13.6 1 3.8 1.5 8.6 4.3 8.6 3.1 0 3-9.4 6-9.4s2.9 9.4 6 9.4c2.8 0 3.3-4.8 4.3-8.6 1.2-4.6 2.9-8.6 2.9-13.6 0-4.8-2.7-8.2-6.6-8.2C30.8 8.6 28.5 6 24 6Z"
        fill="#E2D4E0"
        stroke="#7C7E9D"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Navbar({ lang, setLang, onBook, onNav }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-cream/90 backdrop-blur-md border-b border-lilac">
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 shrink-0" onClick={() => onNav?.('top')}>
          <ToothMark />
          <span className="font-display text-xl font-600 text-navy">Muskaan</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-navy/80 hover:text-dusty transition-colors"
            >
              {lang === 'ur' ? <span className="urdu text-base">{l.urLabel}</span> : l.enLabel}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <LangToggle lang={lang} setLang={setLang} />
          <button
            onClick={onBook}
            className="bg-dusty hover:bg-navy text-cream text-sm font-semibold px-5 py-2.5 rounded-full transition-colors shadow-sm"
          >
            {lang === 'ur' ? <span className="urdu">اپائنٹمنٹ بک کریں</span> : 'Book an Appointment'}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-lilac/50"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-navy transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-6 bg-navy transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-navy transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden border-t border-lilac bg-cream px-5 pb-5 pt-3 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-navy font-medium">
              {lang === 'ur' ? <span className="urdu text-base">{l.urLabel}</span> : l.enLabel}
            </a>
          ))}
          <div className="flex items-center justify-between pt-2">
            <LangToggle lang={lang} setLang={setLang} />
          </div>
          <button
            onClick={() => { setOpen(false); onBook?.() }}
            className="bg-dusty text-cream text-sm font-semibold px-5 py-3 rounded-full w-full"
          >
            {lang === 'ur' ? <span className="urdu">اپائنٹمنٹ بک کریں</span> : 'Book an Appointment'}
          </button>
        </div>
      )}
    </header>
  )
}

export function LangToggle({ lang, setLang }) {
  return (
    <div className="flex items-center bg-lilac/60 rounded-full p-1 text-sm font-semibold">
      <button
        onClick={() => setLang('en')}
        className={`px-3 py-1.5 rounded-full transition-colors ${lang === 'en' ? 'bg-dusty text-cream' : 'text-navy/70'}`}
      >
        EN
      </button>
      <button
        onClick={() => setLang('ur')}
        className={`px-3 py-1.5 rounded-full transition-colors urdu text-base leading-none ${lang === 'ur' ? 'bg-dusty text-cream' : 'text-navy/70'}`}
      >
        اردو
      </button>
    </div>
  )
}
