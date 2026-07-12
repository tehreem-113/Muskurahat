import React from 'react'

const features = [
  {
    icon: '📅',
    title: 'Effortless Booking',
    desc: 'Find and book verified PMDC-certified dentists in a few taps, in your own city or town.',
  },
  {
    icon: '📚',
    title: 'Bilingual Education',
    desc: 'Clear, honest articles on procedures and prevention, written in both English and Urdu.',
  },
  {
    icon: '⏱️',
    title: '2-Minute Brushing Coach',
    desc: 'A visual timer that keeps kids and adults brushing for the full two minutes, every time.',
  },
  {
    icon: '💬',
    title: 'AI Dental Assistant',
    desc: 'Ask quick oral hygiene questions any time and get guided toward the right next step.',
  },
  {
    icon: '🗂️',
    title: 'Digital Dental Records',
    desc: 'Your treatment history, x-rays and prescriptions, kept in one place you can access anywhere.',
  },
  {
    icon: '📍',
    title: 'Clinic Locator',
    desc: 'Search and filter nearby clinics by service, rating and availability, from Karachi to Gilgit.',
  },
]

export default function FeaturesGrid({ lang }) {
  return (
    <section id="features" className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
      <SectionHeading
        eyebrow="The Ecosystem"
        titleEn="Everything your smile needs, in one place"
        titleUr="آپ کی مسکراہٹ کے لیے ہر ضرورت، ایک ہی جگہ"
        lang={lang}
      />

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
          <div
            key={f.title}
            className="group bg-cream border border-lilac rounded-3xl p-6 hover:border-dusty hover:shadow-lg hover:shadow-lilac/40 transition-all hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-2xl bg-lilac/60 flex items-center justify-center text-2xl mb-4 group-hover:bg-dusty/20 transition-colors">
              {f.icon}
            </div>
            <h3 className="font-display text-lg font-600 text-navy mb-2">{f.title}</h3>
            <p className="text-sm text-navy/70 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function SectionHeading({ eyebrow, titleEn, titleUr, lang, center = false }) {
  return (
    <div className={center ? 'text-center' : ''}>
      <span className="inline-block text-xs font-bold tracking-widest uppercase text-dusty bg-lilac/50 px-3 py-1 rounded-full">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl sm:text-4xl text-navy font-600 mt-4">
        {titleEn}
      </h2>
      {lang === 'ur' && titleUr && (
        <p className="urdu text-2xl text-navy/80 mt-2">{titleUr}</p>
      )}
    </div>
  )
}
