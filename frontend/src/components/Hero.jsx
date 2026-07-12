import React from 'react'

export default function Hero({ lang, onBook, onExplore }) {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* soft blob backdrops */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-lilac/70 rounded-blob blur-2xl animate-float" aria-hidden="true" />
      <div className="absolute top-40 -left-20 w-72 h-72 bg-slate/20 rounded-blob blur-2xl animate-float" style={{ animationDelay: '2s' }} aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-14 pb-20 md:pt-20 md:pb-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 bg-lilac/60 text-navy text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
            🦷 Built for Pakistan, urban &amp; rural
          </span>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-navy font-600">
            Making Pakistan&rsquo;s smiles even more{' '}
            <span className="text-dusty relative inline-block">
              contagious
              <SmileUnderline className="absolute left-0 -bottom-2 w-full h-3 text-lilac" />
            </span>{' '}
            and bright.
          </h1>

          {lang === 'ur' && (
            <p className="urdu text-xl mt-4 text-navy/80">
              پاکستان کی مسکراہٹوں کو مزید متعدی اور روشن بنانا۔
            </p>
          )}

          <p className="mt-6 text-lg text-navy/70 max-w-xl">
            Muskaan connects you with PMDC-certified dentists, brings oral health
            education in English &amp; Urdu, and helps you build habits that keep
            preventable dental disease away &mdash; from Karachi to Gilgit-Baltistan.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={onBook}
              className="bg-dusty hover:bg-navy text-cream font-semibold px-7 py-3.5 rounded-full shadow-md shadow-dusty/20 transition-all hover:-translate-y-0.5"
            >
              Book an Appointment
            </button>
            <button
              onClick={onExplore}
              className="bg-transparent border-2 border-dusty text-dusty hover:bg-lilac/40 font-semibold px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5"
            >
              Explore Resources
            </button>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-navy/60">
            <Stat number="500+" label="PMDC-certified dentists" />
            <Stat number="60+" label="cities &amp; towns covered" />
            <Stat number="2 min" label="daily brushing habit built" />
          </div>
        </div>

        <div className="relative flex justify-center">
          <SmileIllustration />
        </div>
      </div>

      <hr className="chalk-divider max-w-7xl mx-auto" />
    </section>
  )
}

function Stat({ number, label }) {
  return (
    <div>
      <p className="font-display text-xl text-navy font-600">{number}</p>
      <p dangerouslySetInnerHTML={{ __html: label }} />
    </div>
  )
}

function SmileUnderline({ className }) {
  return (
    <svg viewBox="0 0 120 12" className={className} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M2 8 Q 30 -2 60 6 T 118 4" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" />
    </svg>
  )
}

// Signature hero visual: a friendly hand-drawn smiling tooth character with
// sparkle accents, built entirely from the brand palette.
function SmileIllustration() {
  return (
    <div className="relative w-full max-w-md">
      <svg viewBox="0 0 400 400" className="w-full h-auto animate-float" xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="200" r="170" fill="#E2D4E0" opacity="0.55" />
        <circle cx="200" cy="200" r="130" fill="#FFFDF6" stroke="#949AB1" strokeWidth="2" strokeDasharray="6 8" />

        {/* Tooth body */}
        <path
          d="M200 90c-38 0-58 22-80 22-33 0-56 29-56 70 0 43 14 77 25 116 8 32 13 74 37 74 27 0 26-80 51-80s24 80 51 80c24 0 29-42 37-74 11-39 25-73 25-116 0-41-23-70-56-70-22 0-42-22-80-22Z"
          fill="#FFFDF6"
          stroke="#4C5372"
          strokeWidth="4"
          strokeLinejoin="round"
        />

        {/* Smiling face on the tooth */}
        <circle cx="172" cy="205" r="8" fill="#4C5372" />
        <circle cx="228" cy="205" r="8" fill="#4C5372" />
        <path d="M165 235 Q200 265 235 235" stroke="#4C5372" strokeWidth="6" fill="none" strokeLinecap="round" />
        <circle cx="150" cy="215" r="10" fill="#E2D4E0" opacity="0.8" />
        <circle cx="250" cy="215" r="10" fill="#E2D4E0" opacity="0.8" />

        {/* Sparkles */}
        <g className="animate-sparkle">
          <path d="M100 100 l6 16 16 6 -16 6 -6 16 -6 -16 -16 -6 16 -6Z" fill="#7C7E9D" />
        </g>
        <g className="animate-sparkle" style={{ animationDelay: '1s' }}>
          <path d="M310 130 l4 12 12 4 -12 4 -4 12 -4 -12 -12 -4 12 -4Z" fill="#949AB1" />
        </g>
        <g className="animate-sparkle" style={{ animationDelay: '1.6s' }}>
          <path d="M300 300 l5 14 14 5 -14 5 -5 14 -5 -14 -14 -5 14 -5Z" fill="#7C7E9D" />
        </g>
      </svg>
    </div>
  )
}
