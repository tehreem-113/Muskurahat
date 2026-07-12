import React, { useState } from 'react'
import BrushingTimer from './BrushingTimer'
import { SectionHeading } from './FeaturesGrid'

export default function Dashboard({ lang }) {
  return (
    <section id="tools" className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
      <SectionHeading
        eyebrow="Interactive Tools"
        titleEn="Your daily oral hygiene dashboard"
        titleUr="آپ کا روزانہ کا ڈیش بورڈ"
        lang={lang}
      />

      <div className="mt-12 grid lg:grid-cols-3 gap-6 items-start">
        <div className="lg:col-span-1">
          <BrushingTimer />
        </div>

        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
          <ToothbrushReminderCard />
          <DigitalRecordsCard />
          <CareReminderCard />
          <StreakCard />
        </div>
      </div>
    </section>
  )
}

function CardShell({ children, className = '' }) {
  return (
    <div className={`bg-cream border border-lilac rounded-3xl p-6 flex flex-col ${className}`}>
      {children}
    </div>
  )
}

function ToothbrushReminderCard() {
  // Demo state: a brush "aged" 76 days out of a 90-day replacement cycle
  const daysUsed = 76
  const cycle = 90
  const pct = Math.min(100, Math.round((daysUsed / cycle) * 100))

  return (
    <CardShell>
      <div className="flex items-center justify-between">
        <span className="text-2xl">🪥</span>
        <span className="text-xs font-semibold bg-lilac/60 text-navy px-3 py-1 rounded-full">
          {cycle - daysUsed} days left
        </span>
      </div>
      <h3 className="font-display font-600 text-navy mt-4">Toothbrush Reminder</h3>
      <p className="text-sm text-navy/60 mt-1 flex-1">
        Replace your toothbrush every 3 months, or sooner if bristles are frayed.
      </p>
      <div className="mt-4 h-2 rounded-full bg-lilac/50 overflow-hidden">
        <div className="h-full bg-dusty rounded-full transition-all" style={{ width: `${pct}%` }} />
      </div>
      <p className="text-xs text-navy/40 mt-2">{daysUsed} of {cycle} days used</p>
    </CardShell>
  )
}

function DigitalRecordsCard() {
  const records = [
    { label: 'Scaling & Polishing', date: 'Mar 2026' },
    { label: 'X-Ray (Panoramic)', date: 'Jan 2026' },
    { label: 'Filling — Lower Left Molar', date: 'Oct 2025' },
  ]
  return (
    <CardShell>
      <div className="flex items-center justify-between">
        <span className="text-2xl">🗂️</span>
        <span className="text-xs font-semibold bg-lilac/60 text-navy px-3 py-1 rounded-full">3 records</span>
      </div>
      <h3 className="font-display font-600 text-navy mt-4">Digital Dental Records</h3>
      <ul className="mt-3 space-y-2 flex-1">
        {records.map((r) => (
          <li key={r.label} className="flex items-center justify-between text-sm border-b border-lilac/60 pb-2 last:border-none">
            <span className="text-navy/80">{r.label}</span>
            <span className="text-navy/40 text-xs">{r.date}</span>
          </li>
        ))}
      </ul>
      <button className="mt-4 text-sm font-semibold text-dusty hover:text-navy self-start">View full history →</button>
    </CardShell>
  )
}

function CareReminderCard() {
  const [reminders, setReminders] = useState([
    { id: 1, text: 'Morning brush', done: true },
    { id: 2, text: 'Floss before bed', done: false },
    { id: 3, text: 'Mouthwash rinse', done: false },
  ])

  const toggle = (id) =>
    setReminders((rs) => rs.map((r) => (r.id === id ? { ...r, done: !r.done } : r)))

  return (
    <CardShell>
      <div className="flex items-center justify-between">
        <span className="text-2xl">🔔</span>
        <span className="text-xs font-semibold bg-lilac/60 text-navy px-3 py-1 rounded-full">Today</span>
      </div>
      <h3 className="font-display font-600 text-navy mt-4">Personalized Care Reminders</h3>
      <ul className="mt-3 space-y-2 flex-1">
        {reminders.map((r) => (
          <li key={r.id}>
            <label className="flex items-center gap-3 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={r.done}
                onChange={() => toggle(r.id)}
                className="w-4 h-4 accent-[#7C7E9D] rounded"
              />
              <span className={r.done ? 'line-through text-navy/40' : 'text-navy/80'}>{r.text}</span>
            </label>
          </li>
        ))}
      </ul>
    </CardShell>
  )
}

function StreakCard() {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  const completed = [true, true, true, false, true, true, false]
  return (
    <CardShell>
      <div className="flex items-center justify-between">
        <span className="text-2xl">🔥</span>
        <span className="text-xs font-semibold bg-lilac/60 text-navy px-3 py-1 rounded-full">5-day streak</span>
      </div>
      <h3 className="font-display font-600 text-navy mt-4">Brushing Streak</h3>
      <p className="text-sm text-navy/60 mt-1 flex-1">Keep it up! Consistency prevents most cavities and gum disease.</p>
      <div className="mt-4 flex justify-between">
        {days.map((d, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <span className="text-xs text-navy/40">{d}</span>
            <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${completed[i] ? 'bg-dusty text-cream' : 'bg-lilac/40 text-navy/30'}`}>
              {completed[i] ? '✓' : ''}
            </span>
          </div>
        ))}
      </div>
    </CardShell>
  )
}
