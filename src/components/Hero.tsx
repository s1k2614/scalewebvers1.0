'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Shield, Server, Zap, Layers, Download, Target, Heart, Users, Database, Monitor, Cloud, ChevronDown, Building, Briefcase } from 'lucide-react'

interface HeroProps {
  title?: string
  subtitle?: string
  ctaText?: string
  ctaLink?: string
  backgroundImage?: string
}

export default function Hero({ title, subtitle, ctaText, ctaLink, backgroundImage }: HeroProps = {}) {
  return (
    <section
      className="relative min-h-screen flex items-start justify-center overflow-hidden pt-20"
    >
      {/* Logo oben links */}
      <div className="fixed top-6 left-6 z-50">
        <Link href="/" className="block">
          <img
            src="/home/scaleits_logo_r_white_929x174.png"
            alt="ScaleITS Logo"
            className="h-12 w-auto hover:opacity-80 transition-opacity duration-300"
          />
        </Link>
      </div>
      {/* ScaleITS Corporate Background Animation */}

      {/* Corporate Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-scaleit-red/30 to-transparent transform -skew-y-12"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-scaleit-gray/30 to-transparent transform skew-y-12"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* ScaleITS Logo und Branding */}

          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title || 'Ihre IT-Transformation'}
            <span className="block bg-gradient-to-r from-scaleit-red to-scaleit-gray bg-clip-text text-transparent">
              {title ? '' : 'beginnt hier'}
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-scaleit-gray/80 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {subtitle || 'Als Ihr strategischer IT-Partner verbinden wir bewährte Technologien mit maßgeschneiderter Beratung. Unsere Spezialgebiete Client Management und Microsoft 365 ermöglichen es uns, Ihre IT-Infrastruktur optimal zu skalieren und Ihre Produktivität nachhaltig zu steigern.'}
          </motion.p>

          {/* ScaleITS Firmenphilosophie */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full mb-8 border border-scaleit-red/30">
              <Target className="w-5 h-5 text-scaleit-red mr-3" />
              <span className="text-white font-semibold">Unsere Philosophie: Einfach. Skalierbar. Zuverlässig.</span>
            </div>
          </motion.div>

          {/* ScaleITS Spezialbereiche */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="p-8 rounded-2xl border border-scaleit-red/30 hover:border-scaleit-red/60 transition-all duration-300">
              <Database className="w-16 h-16 text-scaleit-red mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Client Management</h3>
              <p className="text-scaleit-gray/80 text-lg leading-relaxed mb-4">
                Vollständige Verwaltung Ihrer Endgeräte mit ACMP - von der automatischen Softwareverteilung bis zur Sicherheitspolitik.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-scaleit-red/20 text-scaleit-red px-3 py-1 rounded-full text-sm">ACMP Standard</span>
                <span className="bg-scaleit-red/20 text-scaleit-red px-3 py-1 rounded-full text-sm">ACMP Individual</span>
                <span className="bg-scaleit-red/20 text-scaleit-red px-3 py-1 rounded-full text-sm">Endpoint Security</span>
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-scaleit-gray/30 hover:border-scaleit-gray/60 transition-all duration-300">
              <Monitor className="w-16 h-16 text-scaleit-gray mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Microsoft 365</h3>
              <p className="text-scaleit-gray/80 text-lg leading-relaxed mb-4">
                Maximale Produktivität durch vollständige Integration von Office 365, Teams, SharePoint und Azure AD.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-scaleit-gray/20 text-scaleit-gray px-3 py-1 rounded-full text-sm">Office 365</span>
                <span className="bg-scaleit-gray/20 text-scaleit-gray px-3 py-1 rounded-full text-sm">Teams</span>
                <span className="bg-scaleit-gray/20 text-scaleit-gray px-3 py-1 rounded-full text-sm">Azure Integration</span>
              </div>
            </div>
          </motion.div>

          {/* ScaleITS Core Values */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="p-6 rounded-2xl border border-scaleit-red/30 hover:border-scaleit-red/60 transition-all duration-300">
              <Heart className="w-12 h-12 text-scaleit-red mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Partnerschaftlich</h3>
              <p className="text-scaleit-gray/80">Wir sehen uns als Ihren strategischen Partner, nicht nur als Dienstleister</p>
            </div>
            <div className="p-6 rounded-2xl border border-scaleit-gray/30 hover:border-scaleit-gray/60 transition-all duration-300">
              <Zap className="w-12 h-12 text-scaleit-gray mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Innovativ</h3>
              <p className="text-scaleit-gray/80">Stets auf dem neuesten Stand der Technik für Ihre Zukunftssicherheit</p>
            </div>
            <div className="p-6 rounded-2xl border border-scaleit-red/30 hover:border-scaleit-red/60 transition-all duration-300">
              <Shield className="w-12 h-12 text-scaleit-red mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Verlässlich</h3>
              <p className="text-scaleit-gray/80">Maximale Sicherheit und Verfügbarkeit für Ihren Geschäftserfolg</p>
            </div>
          </motion.div>

          {/* ScaleITS CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link
              href="/services"
              className="inline-flex items-center bg-gradient-to-r from-scaleit-gray to-scaleit-red text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-scaleit-gray/90 hover:to-scaleit-red/90 transition-all duration-300 shadow-2xl hover:shadow-scaleit-red/25 transform hover:scale-105"
            >
              Unsere Services entdecken <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/produkte"
              className="inline-flex items-center bg-gradient-to-r from-scaleit-gray to-scaleit-red text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-scaleit-gray/90 hover:to-scaleit-red/90 transition-all duration-300 shadow-2xl hover:shadow-scaleit-red/25 transform hover:scale-105"
            >
              Unsere Lösungen entdecken <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/ueber-scaleits"
              className="inline-flex items-center bg-gradient-to-r from-scaleit-gray to-scaleit-red text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-scaleit-gray/90 hover:to-scaleit-red/90 transition-all duration-300 shadow-2xl hover:shadow-scaleit-red/25 transform hover:scale-105"
            >
              Lernen Sie uns kennen <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


