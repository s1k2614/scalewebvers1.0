'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Database, Shield, Zap, ArrowRight, CheckCircle, Users, Star } from 'lucide-react'
import { useState } from 'react'

export default function Services() {
  const [activeProduct, setActiveProduct] = useState('acmp')

  const services = [
    {
      id: 'acmp',
      name: 'ACMP',
      description: 'Professionelle Client-Management-Plattform für effiziente IT-Verwaltung',
      icon: Database,
      color: 'from-green-600 to-emerald-600',
      href: '/acmp',
      features: ['Asset Management', 'Software Deployment', 'Remote Control', 'Inventory Management'],
      packages: [
        { name: 'Starter', price: '€49/Monat', clients: '50 Clients', popular: false },
        { name: 'Professional', price: '€129/Monat', clients: '250 Clients', popular: true },
        { name: 'Enterprise', price: '€299/Monat', clients: 'Unbegrenzt', popular: false }
      ],
      modules: [
        'Asset Management',
        'Software Distribution', 
        'License Management',
        'Patch Management',
        'Remote Control',
        'Reporting & Analytics'
      ]
    },
    {
      id: 'hornetsecurity',
      name: 'Hornetsecurity',
      description: 'Umfassende E-Mail-Sicherheitslösungen zum Schutz vor modernen Bedrohungen',
      icon: Shield,
      color: 'from-orange-600 to-red-600',
      href: '/hornetsecurity',
      features: ['E-Mail Security', 'Backup & Archivierung', 'Compliance', 'Threat Protection'],
      packages: [
        { name: 'Essential', price: '€2.90/Mailbox', clients: 'Basic Security', popular: false },
        { name: 'Professional', price: '€4.50/Mailbox', clients: 'Advanced Features', popular: true },
        { name: 'Enterprise', price: '€6.90/Mailbox', clients: 'Full Security Suite', popular: false }
      ],
      modules: [
        'Email Security',
        'Email Archiving',
        'Email Encryption',
        'Security Awareness Training'
      ]
    },
    {
      id: 'arctic-wolf',
      name: 'Arctic Wolf',
      description: 'Managed Security Operations für kontinuierlichen Schutz und Überwachung',
      icon: Zap,
      color: 'from-red-600 to-red-400',
      href: '/arctic-wolf',
      features: ['SOC Operations', 'Threat Detection', 'Incident Response', '24/7 Monitoring'],
      packages: [
        { name: 'Essential', price: '€299/Monat', clients: '100 Endpoints', popular: false },
        { name: 'Professional', price: '€799/Monat', clients: '500 Endpoints', popular: true },
        { name: 'Enterprise', price: '€1.499/Monat', clients: 'Unbegrenzt', popular: false }
      ],
      modules: [
        'Managed Detection & Response',
        'Incident Response',
        'Threat Intelligence',
        'Security Awareness Training'
      ]
    }
  ]

  const bundlePackages = [
    {
      name: 'ScaleITS Complete',
      description: 'Alle drei Produkte in einem Paket',
      price: '€899',
      period: '/Monat',
      savings: '30% Ersparnis',
      includes: ['ACMP Professional', 'Hornetsecurity Professional', 'Arctic Wolf Essential'],
      popular: true
    },
    {
      name: 'ScaleITS Enterprise',
      description: 'Enterprise-Grade Security & Management',
      price: '€1.699',
      period: '/Monat',
      savings: '35% Ersparnis',
      includes: ['ACMP Enterprise', 'Hornetsecurity Enterprise', 'Arctic Wolf Professional'],
      popular: false
    }
  ]

  return (
    <section className="py-20 bg-scaleit-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Unsere Lösungen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie unsere drei Hauptprodukte mit allen Modulen und Paketen für moderne Unternehmensanforderungen
          </p>
        </motion.div>

        {/* Product Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <motion.button
                key={service.id}
                onClick={() => setActiveProduct(service.id)}
                className={`flex items-center px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                  activeProduct === service.id
                    ? 'border-red-500 bg-red-50 text-red-700'
                    : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent className="w-5 h-5 mr-2" />
                {service.name}
              </motion.button>
            )
          })}
        </div>

        {/* Active Product Details */}
        {services.map((service) => {
          if (service.id !== activeProduct) return null
          const IconComponent = service.icon
          
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-16"
            >
              <div className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mr-4`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">{service.name}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Verfügbare Module:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.modules.map((module, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center bg-gray-50 rounded-lg px-3 py-2"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{module}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={service.href}
                      className={`inline-flex items-center bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                    >
                      Mehr erfahren <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Verfügbare Pakete:</h4>
                    <div className="space-y-4">
                      {service.packages.map((pkg, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className={`relative p-4 rounded-xl border-2 transition-all duration-300 ${
                            pkg.popular
                              ? 'border-red-500 bg-red-50'
                              : 'border-gray-200 bg-white hover:border-gray-300'
                          }`}
                        >
                          {pkg.popular && (
                            <div className="absolute -top-2 -right-2">
                              <Star className="w-6 h-6 text-yellow-500 fill-current" />
                            </div>
                          )}
                          <div className="flex justify-between items-center">
                            <div>
                              <h5 className="font-semibold text-gray-900">{pkg.name}</h5>
                              <p className="text-sm text-gray-600">{pkg.clients}</p>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-gray-900">{pkg.price}</div>
                              {pkg.popular && (
                                <div className="text-xs text-red-600 font-semibold">Beliebt</div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}

        {/* Bundle Packages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            ScaleITS Komplett-Pakete
          </h3>
          <p className="text-lg text-gray-600">
            Sparen Sie mit unseren Kombinations-Paketen
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {bundlePackages.map((bundle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative bg-white rounded-3xl p-8 shadow-xl border-2 transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                bundle.popular ? 'border-red-500 ring-4 ring-blue-100' : 'border-gray-200'
              }`}
            >
              {bundle.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-red-600 to-red-400 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Empfohlen
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">{bundle.name}</h4>
                <p className="text-gray-600 mb-4">{bundle.description}</p>
                <div className="flex items-end justify-center mb-2">
                  <span className="text-4xl font-bold text-gray-900">{bundle.price}</span>
                  <span className="text-gray-600 ml-2">{bundle.period}</span>
                </div>
                <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {bundle.savings}
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <h5 className="font-semibold text-gray-900">Enthalten:</h5>
                {bundle.includes.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className={`block w-full text-center py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  bundle.popular
                    ? 'bg-gradient-to-r from-red-600 to-red-400 text-white hover:from-red-700 hover:to-red-500 shadow-lg'
                    : 'border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
                }`}
              >
                Angebot anfragen
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}




