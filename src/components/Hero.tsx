'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Shield, Server, Zap, Layers, Download } from 'lucide-react'

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: backgroundImage || 'linear-gradient(135deg, #1a0c19 0%, #000000 50%, #d8000c 100%)'
      }}
    >
      {/* ScaleITS Corporate Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-scaleit-red/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-scaleit-gray/20 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-scaleit-purple/30 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

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
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="mb-8"
          >
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-full shadow-2xl">
              <div className="w-10 h-10 bg-gradient-scaleit rounded-lg flex items-center justify-center mr-4">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">ScaleITS</div>
                <div className="text-scaleit-red/80 text-sm font-medium">SCALE IT SYSTEMS</div>
              </div>
            </div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title || 'Skalierbare IT-Lösungen'}
            <span className="block bg-gradient-to-r from-scaleit-red to-scaleit-gray bg-clip-text text-transparent">
              {title ? '' : 'für Ihr Wachstum'}
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-scaleit-gray/80 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {subtitle || 'Als Ihr strategischer IT-Partner kombinieren wir bewährte Technologien von ACMP, Hornetsecurity und Arctic Wolf zu maßgeschneiderten Lösungen, die mit Ihrem Unternehmen wachsen.'}
          </motion.p>

          {/* ScaleITS Core Values */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:border-scaleit-red/50 transition-all duration-300">
              <Shield className="w-12 h-12 text-scaleit-red mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-scaleit-gray/80">Umfassender Schutz für kritische Geschäftsprozesse</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:border-scaleit-gray/50 transition-all duration-300">
              <Server className="w-12 h-12 text-scaleit-gray mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Scalable Infrastructure</h3>
              <p className="text-scaleit-gray/80">Flexible IT-Systeme, die mit Ihnen wachsen</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:border-scaleit-red/50 transition-all duration-300">
              <Zap className="w-12 h-12 text-scaleit-red mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Performance Excellence</h3>
              <p className="text-scaleit-gray/80">Optimale Leistung für maximale Produktivität</p>
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
              href={ctaLink || "/contact"} 
              className="inline-flex items-center bg-gradient-to-r from-scaleit-red to-scaleit-red/90 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-scaleit-red/90 hover:to-scaleit-red/80 transition-all duration-300 shadow-2xl hover:shadow-scaleit-red/25 transform hover:scale-105"
            >
              {ctaText || "Kostenlose Beratung"} <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center border-2 border-scaleit-gray text-scaleit-gray hover:text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-scaleit-gray/20 hover:border-scaleit-gray/80 transition-all duration-300"
            >
              Unsere Lösungen entdecken
            </Link>
            <a
              href="/pdfs/scaleweb-unternehmensprospekt.pdf"
              download
              className="inline-flex items-center border-2 border-scaleit-red text-scaleit-red hover:text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-scaleit-red/20 hover:border-scaleit-red/80 transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              Unternehmensprospekt
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 pt-8 border-t border-white/20"
          >
            <p className="text-scaleit-gray text-sm mb-6">Vertrauensvolle Partnerschaften mit führenden Technologieanbietern</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-white">ACMP</div>
              <div className="w-1 h-1 bg-scaleit-gray rounded-full"></div>
              <div className="text-2xl font-bold text-white">Hornetsecurity</div>
              <div className="w-1 h-1 bg-scaleit-gray rounded-full"></div>
              <div className="text-2xl font-bold text-white">Arctic Wolf</div>
              <div className="w-1 h-1 bg-scaleit-gray rounded-full"></div>
              <div className="text-2xl font-bold text-white">Microsoft</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}




