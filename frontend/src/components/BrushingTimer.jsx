import React, { useEffect, useRef, useState } from 'react'

const TOTAL_SECONDS = 120
const QUADRANTS = [
  { label: 'Upper Right', endsAt: 90 },
  { label: 'Upper Left', endsAt: 60 },
  { label: 'Lower Left', endsAt: 30 },
  { label: 'Lower Right', endsAt: 0 },
]

export default function BrushingTimer() {
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS)
  const [running, setRunning] = useState(false)
  const [finished, setFinished] = useState(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (running && secondsLeft > 0) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft((s) => {
          if (s <= 1) {
            clearInterval(intervalRef.current)
            setRunning(false)
            setFinished(true)
            return 0
          }
          return s - 1
        })
      }, 1000)
    }
    return () => clearInterval(intervalRef.current)
  }, [running])

  const toggle = () => {
    if (secondsLeft === 0) {
      reset()
      setRunning(true)
      return
    }
    setRunning((r) => !r)
  }

  const reset = () => {
    clearInterval(intervalRef.current)
    setRunning(false)
    setFinished(false)
    setSecondsLeft(TOTAL_SECONDS)
  }

  const progress = 1 - secondsLeft / TOTAL_SECONDS // 0 -> 1
  const circumference = 2 * Math.PI * 90
  const dashOffset = circumference * (1 - progress)

  const mins = Math.floor(secondsLeft / 60)
  const secs = String(secondsLeft % 60).padStart(2, '0')

  const currentQuadrant = QUADRANTS.find((q) => secondsLeft > q.endsAt) ?? QUADRANTS[QUADRANTS.length - 1]

  return (
    <div className="bg-cream border border-lilac rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center">
      <h3 className="font-display text-xl font-600 text-navy">2-Minute Brushing Timer</h3>
      <p className="text-sm text-navy/60 mt-1 mb-6 max-w-xs">
        Dentists recommend brushing for a full 2 minutes. Follow the prompts for each part of your mouth.
      </p>

      <div className="relative w-56 h-56">
        <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
          <circle cx="100" cy="100" r="90" fill="none" stroke="#E2D4E0" strokeWidth="14" />
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="#7C7E9D"
            strokeWidth="14"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            style={{ transition: 'stroke-dashoffset 1s linear' }}
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {finished ? (
            <>
              <span className="text-4xl" role="img" aria-label="celebration">✨😁</span>
              <span className="text-sm font-semibold text-navy mt-2">Great job!</span>
            </>
          ) : (
            <>
              <span className="font-display text-4xl font-600 text-navy">{mins}:{secs}</span>
              <span className="text-xs font-semibold text-dusty mt-2 uppercase tracking-wide">
                {running ? currentQuadrant.label : 'Ready when you are'}
              </span>
            </>
          )}
        </div>
      </div>

      {/* Quadrant progress dots */}
      <div className="flex gap-2 mt-6">
        {QUADRANTS.slice().reverse().map((q) => {
          const done = secondsLeft <= q.endsAt || (secondsLeft === 0)
          const active = currentQuadrant.label === q.label && running
          return (
            <span
              key={q.label}
              title={q.label}
              className={`w-3 h-3 rounded-full transition-colors ${
                done ? 'bg-dusty' : active ? 'bg-dusty/60 animate-pulse' : 'bg-lilac'
              }`}
            />
          )
        })}
      </div>

      <div className="flex gap-3 mt-8">
        <button
          onClick={toggle}
          className="bg-dusty hover:bg-navy text-cream font-semibold px-6 py-3 rounded-full transition-colors min-w-[120px]"
        >
          {secondsLeft === 0 ? 'Brush Again' : running ? 'Pause' : 'Start'}
        </button>
        <button
          onClick={reset}
          className="border-2 border-lilac hover:border-dusty text-navy font-semibold px-6 py-3 rounded-full transition-colors"
        >
          Reset
        </button>
      </div>

      <p className="text-xs text-navy/40 mt-5">🔊 Catchy brushing tune plays here in the full app</p>
    </div>
  )
}
