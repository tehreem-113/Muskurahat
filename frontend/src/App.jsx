import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturesGrid from './components/FeaturesGrid'
import EducationalHub from './components/EducationalHub'
import Dashboard from './components/Dashboard'
import ClinicLocator from './components/ClinicLocator'
import BookingModal from './components/BookingModal'
import Chatbot from './components/Chatbot'
import Footer from './components/Footer'

export default function App() {
  const [lang, setLang] = useState('en') // 'en' | 'ur'
  const [bookingOpen, setBookingOpen] = useState(false)
  const [preselectedClinic, setPreselectedClinic] = useState(null)

  const openBooking = (clinic = null) => {
    setPreselectedClinic(clinic)
    setBookingOpen(true)
  }

  const scrollToEducation = () => {
    document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-cream">
      <Navbar lang={lang} setLang={setLang} onBook={() => openBooking(null)} />

      <main>
        <Hero lang={lang} onBook={() => openBooking(null)} onExplore={scrollToEducation} />
        <FeaturesGrid lang={lang} />
        <EducationalHub lang={lang} setLang={setLang} />
        <Dashboard lang={lang} />
        <ClinicLocator lang={lang} onBookClinic={(clinic) => openBooking(clinic)} />
      </main>

      <Footer lang={lang} />

      <BookingModal
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
        preselectedClinic={preselectedClinic}
      />

      <Chatbot />
    </div>
  )
}
