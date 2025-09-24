'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Partners from '../components/Partners'
import SimplicityBanner from '../components/SimplicityBanner'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen" style={{ background: 'linear-gradient(135deg, #1a0c19 0%, #000000 50%, #d8000c 70%)' }}>
        <Hero />
        <Services />
        <SimplicityBanner />
        <Partners />

        {/* Referenzen Banner */}
        <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Überzeugen Sie sich von unseren Erfolgen
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Erfahren Sie, wie wir Unternehmen aus verschiedenen Branchen bei ihrer digitalen Transformation unterstützt haben.
              </p>
              <Link
                href="/referenzen"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-scaleit-red to-red-600 text-white font-semibold rounded-full hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg"
              >
                Zu unseren Referenzen
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}




