import React, { useState } from 'react'
import { clinics } from '../data/mockData'

const TIME_SLOTS = ['9:00 AM', '10:30 AM', '12:00 PM', '2:00 PM', '4:30 PM', '6:00 PM']

export default function BookingModal({ open, onClose, preselectedClinic }) {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    clinicId: preselectedClinic?.id ?? '',
    date: '',
    time: '',
    concern: '',
  })

  React.useEffect(() => {
    if (preselectedClinic) {
      setForm((f) => ({ ...f, clinicId: preselectedClinic.id }))
    }
  }, [preselectedClinic])

  if (!open) return null

  const update = (key, val) => setForm((f) => ({ ...f, [key]: val }))

  const selectedClinic = clinics.find((c) => String(c.id) === String(form.clinicId))

  const canProceedStep1 = form.name.trim() && form.phone.trim() && form.clinicId
  const canProceedStep2 = form.date && form.time

  const handleClose = () => {
    onClose()
    setTimeout(() => setStep(1), 300)
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-navy/40 backdrop-blur-sm" onClick={handleClose}>
      <div
        className="bg-cream rounded-3xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-dusty text-cream px-6 py-5 flex items-center justify-between rounded-t-3xl">
          <div>
            <p className="font-display text-lg font-600">Book an Appointment</p>
            <p className="text-xs text-cream/80">Step {step} of 3</p>
          </div>
          <button onClick={handleClose} className="w-8 h-8 rounded-full bg-cream/20 hover:bg-cream/30 flex items-center justify-center">✕</button>
        </div>

        {/* progress */}
        <div className="h-1.5 bg-lilac/40">
          <div className="h-full bg-dusty transition-all duration-300" style={{ width: `${(step / 3) * 100}%` }} />
        </div>

        <div className="p-6">
          {step === 1 && (
            <div className="space-y-4">
              <Field label="Full Name">
                <input
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  placeholder="e.g. Ayesha Khan"
                  className="input"
                />
              </Field>
              <Field label="Phone Number">
                <input
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  placeholder="03XX-XXXXXXX"
                  className="input"
                />
              </Field>
              <Field label="Choose a Clinic">
                <select value={form.clinicId} onChange={(e) => update('clinicId', e.target.value)} className="input">
                  <option value="">Select a clinic...</option>
                  {clinics.map((c) => (
                    <option key={c.id} value={c.id}>{c.name} — {c.city}</option>
                  ))}
                </select>
              </Field>
              <Field label="Briefly describe your concern (optional)">
                <textarea
                  value={form.concern}
                  onChange={(e) => update('concern', e.target.value)}
                  placeholder="e.g. tooth pain, routine checkup, bleeding gums..."
                  rows={3}
                  className="input resize-none"
                />
              </Field>
            </div>
          )}

          {step === 2 && (
            <div>
              <p className="text-sm font-semibold text-navy mb-3">Pick a date</p>
              <input
                type="date"
                value={form.date}
                onChange={(e) => update('date', e.target.value)}
                className="input mb-6"
              />
              <p className="text-sm font-semibold text-navy mb-3">Pick a time</p>
              <div className="grid grid-cols-3 gap-2">
                {TIME_SLOTS.map((t) => (
                  <button
                    key={t}
                    onClick={() => update('time', t)}
                    className={`py-2.5 rounded-xl text-sm font-medium border transition-colors ${
                      form.time === t ? 'bg-dusty text-cream border-dusty' : 'bg-lilac/20 border-lilac text-navy hover:border-dusty'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center py-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-lilac/60 flex items-center justify-center text-3xl mb-4">✅</div>
              <h3 className="font-display text-xl font-600 text-navy">Appointment Requested!</h3>
              <p className="text-sm text-navy/60 mt-2 max-w-xs mx-auto">
                We've sent your request to {selectedClinic?.name ?? 'the clinic'}. You'll get an SMS confirmation shortly.
              </p>

              <div className="mt-6 bg-lilac/30 rounded-2xl p-4 text-left text-sm space-y-1.5">
                <SummaryRow label="Name" value={form.name} />
                <SummaryRow label="Clinic" value={selectedClinic?.name} />
                <SummaryRow label="Date" value={form.date} />
                <SummaryRow label="Time" value={form.time} />
              </div>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="px-6 pb-6 flex gap-3">
          {step > 1 && step < 3 && (
            <button onClick={() => setStep((s) => s - 1)} className="flex-1 border-2 border-lilac hover:border-dusty text-navy font-semibold py-3 rounded-full transition-colors">
              Back
            </button>
          )}
          {step === 1 && (
            <button
              disabled={!canProceedStep1}
              onClick={() => setStep(2)}
              className="flex-1 bg-dusty hover:bg-navy disabled:opacity-40 disabled:hover:bg-dusty text-cream font-semibold py-3 rounded-full transition-colors"
            >
              Continue
            </button>
          )}
          {step === 2 && (
            <button
              disabled={!canProceedStep2}
              onClick={() => setStep(3)}
              className="flex-1 bg-dusty hover:bg-navy disabled:opacity-40 disabled:hover:bg-dusty text-cream font-semibold py-3 rounded-full transition-colors"
            >
              Confirm Booking
            </button>
          )}
          {step === 3 && (
            <button onClick={handleClose} className="flex-1 bg-dusty hover:bg-navy text-cream font-semibold py-3 rounded-full transition-colors">
              Done
            </button>
          )}
        </div>
      </div>

      {/* scoped input styling */}
      <style>{`
        .input {
          width: 100%;
          background: rgba(226,212,224,0.25);
          border: 1px solid #E2D4E0;
          border-radius: 1rem;
          padding: 0.7rem 1rem;
          font-size: 0.875rem;
          color: #4C5372;
          outline: none;
        }
        .input:focus { background: rgba(226,212,224,0.45); border-color: #7C7E9D; }
      `}</style>
    </div>
  )
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-navy mb-1.5 block">{label}</span>
      {children}
    </label>
  )
}

function SummaryRow({ label, value }) {
  return (
    <div className="flex justify-between">
      <span className="text-navy/50">{label}</span>
      <span className="text-navy font-medium">{value || '—'}</span>
    </div>
  )
}
