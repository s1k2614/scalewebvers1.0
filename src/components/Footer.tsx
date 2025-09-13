'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-scaleit-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-scaleit rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold">ScaleITS</span>
                <span className="text-scaleit-red text-sm -mt-1">SCALE IT SYSTEMS</span>
              </div>
            </div>
            <p className="text-scaleit-gray text-lg leading-relaxed mb-6 max-w-md">
              Ihr vertrauensvoller Partner für moderne IT-Lösungen. 
              Wir verbinden Unternehmen mit den besten Technologien von heute.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-scaleit-gray">
                <Mail className="w-5 h-5 mr-3" />
                <span>info@scaleits.de</span>
              </div>
              <div className="flex items-center text-scaleit-gray">
                <Phone className="w-5 h-5 mr-3" />
                <span>+49 8171 908 929-0</span>
              </div>
              <div className="flex items-center text-scaleit-gray">
                <MapPin className="w-5 h-5 mr-3" />
                <span>Jeschkenstraße 9, 82538 Geretsried</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Lösungen</h3>
            <div className="space-y-3">
              <Link href="/acmp" className="block text-scaleit-gray hover:text-scaleit-red transition-colors">
                ACMP
              </Link>
              <Link href="/hornetsecurity" className="block text-scaleit-gray hover:text-scaleit-red transition-colors">
                Hornetsecurity
              </Link>
              <Link href="/arctic-wolf" className="block text-scaleit-gray hover:text-scaleit-red transition-colors">
                Arctic Wolf
              </Link>
              <Link href="/microsoft" className="block text-scaleit-gray hover:text-scaleit-red transition-colors">
                Microsoft
              </Link>
              <Link href="/contact" className="block text-scaleit-gray hover:text-scaleit-red transition-colors">
                Kontakt
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <div className="space-y-3">
              <Link href="/services/beratung" className="block text-scaleit-gray hover:text-scaleit-red transition-colors">
                Beratung
              </Link>
              <Link href="/services/implementation" className="block text-scaleit-gray hover:text-scaleit-red transition-colors">
                Implementation
              </Link>
              <Link href="/services/service" className="block text-scaleit-gray hover:text-scaleit-red transition-colors">
                Service
              </Link>
              <Link href="/services/wartung" className="block text-scaleit-gray hover:text-scaleit-red transition-colors">
                Wartung
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-scaleit-gray/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-scaleit-gray text-sm">
            © 2025 ScaleITS. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-scaleit-gray hover:text-scaleit-red text-sm transition-colors">
              Datenschutz
            </Link>
            <Link href="/imprint" className="text-scaleit-gray hover:text-scaleit-red text-sm transition-colors">
              Impressum
            </Link>
            <Link href="/terms" className="text-scaleit-gray hover:text-scaleit-red text-sm transition-colors">
              AGB
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}




