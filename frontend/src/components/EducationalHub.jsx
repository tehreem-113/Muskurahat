import React, { useState } from 'react'
import { articles } from '../data/mockData'
import { SectionHeading } from './FeaturesGrid'

const tags = ['All', 'Procedure', 'Prevention', 'Awareness', 'Kids']

export default function EducationalHub({ lang, setLang }) {
  const [activeTag, setActiveTag] = useState('All')

  const filtered = activeTag === 'All' ? articles : articles.filter((a) => a.tag === activeTag)

  return (
    <section id="education" className="bg-lilac/25">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Educational Hub"
            titleEn="Accessible dental literature, in your language"
            titleUr="قابل رسائی دانتوں کی معلومات، آپ کی زبان میں"
            lang={lang}
          />

          <div className="flex items-center gap-2 bg-cream border border-lilac rounded-full p-1 self-start">
            <button
              onClick={() => setLang('en')}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${lang === 'en' ? 'bg-dusty text-cream' : 'text-navy/70'}`}
            >
              English
            </button>
            <button
              onClick={() => setLang('ur')}
              className={`px-4 py-2 rounded-full text-sm font-semibold urdu transition-colors ${lang === 'ur' ? 'bg-dusty text-cream' : 'text-navy/70'}`}
            >
              اردو
            </button>
          </div>
        </div>

        {/* Tag filters */}
        <div className="mt-8 flex flex-wrap gap-2">
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTag(t)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                activeTag === t
                  ? 'bg-navy text-cream border-navy'
                  : 'bg-cream text-navy/70 border-lilac hover:border-dusty'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((a) => (
            <article
              key={a.id}
              className={`rounded-3xl p-6 border flex flex-col gap-3 bg-cream transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-lilac/50 ${
                a.highlight ? 'border-dusty ring-2 ring-dusty/30' : 'border-lilac'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wide text-dusty">{a.tag}</span>
                <span className="text-xs text-navy/50">{a.readMins} min read</span>
              </div>

              {a.highlight && (
                <span className="text-xs font-semibold bg-navy text-cream px-3 py-1 rounded-full w-fit">
                  ⚠ Public Health Priority
                </span>
              )}

              <h3 className={`font-display font-600 text-lg text-navy ${lang === 'ur' ? 'urdu text-xl' : ''}`}>
                {lang === 'ur' ? a.titleUr : a.titleEn}
              </h3>
              <p className={`text-sm text-navy/70 leading-relaxed ${lang === 'ur' ? 'urdu text-base' : ''}`}>
                {lang === 'ur' ? a.bodyUr : a.bodyEn}
              </p>

              <button className="mt-2 text-sm font-semibold text-dusty hover:text-navy self-start inline-flex items-center gap-1">
                {lang === 'ur' ? <span className="urdu">مزید پڑھیں</span> : 'Read more'} →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
