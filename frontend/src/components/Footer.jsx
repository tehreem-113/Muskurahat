import React from 'react'
import { ToothMark } from './Navbar'

export default function Footer({ lang }) {
  return (
    <footer className="bg-navy text-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <ToothMark className="w-8 h-8" />
            <span className="font-display text-lg font-600">Muskaan</span>
          </div>
          <p className="text-sm text-cream/70 leading-relaxed">
            {lang === 'ur' ? (
              <span className="urdu">پاکستان بھر میں مریضوں اور دانتوں کے ماہرین کے درمیان فاصلہ ختم کرنا۔</span>
            ) : (
              'Bridging the gap between Pakistani patients and dental professionals — one smile at a time.'
            )}
          </p>
        </div>

        <FooterCol title="Platform" links={['Book an Appointment', 'Educational Hub', 'Brushing Timer', 'Clinic Locator']} />
        <FooterCol title="Company" links={['About Muskaan', 'Our PMDC Partners', 'Careers', 'Press']} />
        <FooterCol title="Support" links={['Help Center', 'Privacy Policy', 'Terms of Service', 'Contact Us']} />
      </div>

      <div className="border-t border-cream/10 py-6 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} Muskaan. Made with care for every smile in Pakistan.
      </div>
    </footer>
  )
}

function FooterCol({ title, links }) {
  return (
    <div>
      <p className="font-semibold text-sm mb-4 text-cream">{title}</p>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="text-sm text-cream/60 hover:text-cream transition-colors">{l}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
