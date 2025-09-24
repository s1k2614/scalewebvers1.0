'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Wrench, Target, Settings, Shield, Users, Star, ArrowRight } from 'lucide-react'

export default function Services() {
  const services = [
    {
      name: 'IT-Beratung',
      description: 'Strategische IT-Planung und Technologieberatung für Ihr Unternehmen',
      icon: Target,
      href: '/services/beratung',
      features: [
        'IT-Strategie Entwicklung',
        'Technologie-Assessment',
        'Budgetplanung & Kostenanalyse',
        'Roadmap-Entwicklung',
        'Risikoanalyse'
      ]
    },
    {
      name: 'System-Implementation',
      description: 'Professionelle Einführung und Migration Ihrer IT-Systeme',
      icon: Settings,
      href: '/services/implementation',
      features: [
        'Projektmanagement',
        'Datenmigration',
        'Systemintegration',
        'Schulung & Training',
        'Go-Live-Begleitung'
      ]
    },
    {
      name: 'IT-Support & Wartung',
      description: '24/7 IT-Support und proaktive Systemwartung',
      icon: Wrench,
      href: '/services/wartung',
      features: [
        'Helpdesk-Support',
        'Proaktive Wartung',
        'Security-Updates',
        'Performance-Optimierung',
        'Backup & Recovery'
      ]
    },
    {
      name: 'Service',
      description: 'Umfassender Schutz vor Cyber-Bedrohungen und Datenschutz',
      icon: Shield,
      href: '/services/service',
      features: [
        'Security-Assessment',
        'Endpoint-Protection',
        'DDoS-Schutz',
        'Datenschutzberatung',
        'Incident-Response'
      ]
    }
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-black/30 backdrop-blur-sm border border-scaleit-red/30 rounded-xl p-8 hover:shadow-2xl hover:shadow-scaleit-red/20 transition-all duration-300 hover:border-scaleit-red/60 hover:scale-105 flex flex-col h-full"
            >
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-scaleit-red to-scaleit-red/80 rounded-lg flex items-center justify-center mr-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                </div>
              </div>

              <ul className="space-y-2 mb-8 flex-grow">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-scaleit-red rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex justify-end mt-auto">
                <Link
                  href={service.name === 'Service' ? '/services/service' : service.href}
                  className="inline-flex items-center bg-gradient-to-r from-scaleit-gray to-scaleit-red text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-scaleit-gray/90 hover:to-scaleit-red/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Mehr erfahren
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-black/20 backdrop-blur-sm rounded-2xl p-12 text-center border border-scaleit-red/20"
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Warum ScaleITS?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-scaleit-gray rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Persönlicher Service</h4>
              <p className="text-gray-300">Direkter Ansprechpartner für alle Ihre IT-Anliegen</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-scaleit-gray rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Sicherheit zuerst</h4>
              <p className="text-gray-300">Höchste Standards für Datenschutz und Sicherheit</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-scaleit-gray rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Qualität garantiert</h4>
              <p className="text-gray-300">Zertifizierte Prozesse und bewährte Methoden</p>
            </div>
          </div>

          <Link
            href="/unternehmen"
            className="inline-flex items-center bg-gradient-to-r from-scaleit-gray to-scaleit-red text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300"
          >
            Lernen Sie uns kennen
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}




