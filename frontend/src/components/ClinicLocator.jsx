import React, { useMemo, useState } from 'react'
import { clinics } from '../data/mockData'
import { SectionHeading } from './FeaturesGrid'

const cities = ['All Cities', ...new Set(clinics.map((c) => c.city))]

export default function ClinicLocator({ lang, onBookClinic }) {
  const [query, setQuery] = useState('')
  const [city, setCity] = useState('All Cities')
  const [verifiedOnly, setVerifiedOnly] = useState(false)

  const filtered = useMemo(() => {
    return clinics.filter((c) => {
      const matchesQuery =
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.services.some((s) => s.toLowerCase().includes(query.toLowerCase()))
      const matchesCity = city === 'All Cities' || c.city === city
      const matchesVerified = !verifiedOnly || c.pmdcVerified
      return matchesQuery && matchesCity && matchesVerified
    })
  }, [query, city, verifiedOnly])

  return (
    <section id="clinics" className="bg-lilac/25">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <SectionHeading
          eyebrow="Clinic Locator"
          titleEn="Find a trusted dentist near you"
          titleUr="اپنے قریب قابل اعتماد دانتوں کے ڈاکٹر تلاش کریں"
          lang={lang}
        />

        {/* Search & filters */}
        <div className="mt-8 bg-cream border border-lilac rounded-3xl p-4 sm:p-5 flex flex-col sm:flex-row gap-3">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by clinic name or service (e.g. RCT, scaling)"
            className="flex-1 bg-lilac/20 focus:bg-lilac/40 rounded-full px-5 py-3 text-sm text-navy outline-none placeholder:text-navy/40"
          />
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="bg-lilac/20 focus:bg-lilac/40 rounded-full px-5 py-3 text-sm text-navy outline-none"
          >
            {cities.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <label className="flex items-center gap-2 px-4 text-sm text-navy/80 whitespace-nowrap">
            <input
              type="checkbox"
              checked={verifiedOnly}
              onChange={(e) => setVerifiedOnly(e.target.checked)}
              className="w-4 h-4 accent-[#7C7E9D] rounded"
            />
            PMDC verified only
          </label>
        </div>

        {/* Results */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((c) => (
            <div key={c.id} className="bg-cream border border-lilac rounded-3xl p-6 flex flex-col hover:-translate-y-1 hover:shadow-lg hover:shadow-lilac/50 transition-all">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display font-600 text-navy leading-snug">{c.name}</h3>
                  <p className="text-xs text-navy/50 mt-0.5">{c.area}, {c.city}</p>
                </div>
                {c.pmdcVerified && (
                  <span className="shrink-0 text-[10px] font-bold bg-dusty text-cream px-2 py-1 rounded-full">PMDC ✓</span>
                )}
              </div>

              <div className="flex items-center gap-3 mt-3 text-xs text-navy/60">
                <span>⭐ {c.rating}</span>
                <span>•</span>
                <span>{c.distanceKm} km away</span>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-3">
                {c.services.map((s) => (
                  <span key={s} className="text-[11px] bg-lilac/50 text-navy/80 px-2.5 py-1 rounded-full">{s}</span>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-lilac/60 flex items-center justify-between">
                <div>
                  <p className="text-[11px] text-navy/40">Next available</p>
                  <p className="text-sm font-semibold text-navy">{c.nextSlot}</p>
                </div>
                <button
                  onClick={() => onBookClinic(c)}
                  className="bg-dusty hover:bg-navy text-cream text-sm font-semibold px-4 py-2 rounded-full transition-colors"
                >
                  Book
                </button>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <p className="col-span-full text-center text-navy/50 py-10">
              No clinics match that search yet — try a different city or service.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
