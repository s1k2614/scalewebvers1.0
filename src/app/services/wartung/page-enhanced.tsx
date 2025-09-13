'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import { 
  CheckCircle, Wrench, Shield, Clock, Users, Zap, 
  Monitor, Phone, MessageSquare, Calendar, Settings, 
  AlertTriangle, Database, FileText, Award, Target,
  HeadphonesIcon, Cog, Activity, Search
} from 'lucide-react'
import Link from 'next/link'

export default function WartungPage() {
  const supportServices = [
    {
      icon: Phone,
      title: "First Level Support",
      description: "Schnelle Hilfe bei alltäglichen IT-Problemen",
      responseTime: "< 2 Stunden",
      availability: "Mo-Fr 9-18 Uhr",
      features: [
        "Telefon- und E-Mail Support",
        "Remote-Desktop Unterstützung",
        "Software-Problembehebung",
        "Benutzer-Account Management",
        "Standard-Konfigurationen",
        "Dokumentation aller Vorgänge"
      ],
      sla: "95% in < 2h"
    },
    {
      icon: Settings,
      title: "Second Level Support", 
      description: "Technische Expertise für komplexe Systemprobleme",
      responseTime: "< 4 Stunden",
      availability: "Mo-Fr 8-19 Uhr",
      features: [
        "Erweiterte Systemdiagnose",
        "Server- und Netzwerk-Support",
        "Datenbank-Optimierung",
        "Security-Incident Response",
        "Performance-Tuning",
        "Komplexe Konfigurationen"
      ],
      sla: "90% in < 4h"
    },
    {
      icon: Shield,
      title: "Präventive Wartung",
      description: "Proaktive Systemüberwachung und Wartung",
      responseTime: "Kontinuierlich",
      availability: "24/7 Monitoring",
      features: [
        "Automated System Monitoring",
        "Präventive Patch-Management",
        "Performance-Überwachung",
        "Backup-Verifikation",
        "Capacity Planning",
        "Sicherheits-Audits"
      ],
      sla: "99% Uptime"
    },
    {
      icon: Activity,
      title: "Emergency Support",
      description: "Notfall-Support für kritische Systemausfälle",
      responseTime: "< 30 Minuten",
      availability: "24/7 verfügbar",
      features: [
        "Sofortige Notfall-Response",
        "Disaster Recovery Support",
        "Kritische System-Wiederherstellung",
        "Escalation Management",
        "Post-Incident Analysis",
        "Business Continuity Support"
      ],
      sla: "30min Response"
    }
  ]

  const wartungspakete = [
    {
      name: "Basic Support",
      price: "ab €99",
      period: "/Monat pro Gerät",
      description: "Grundlegende Wartung für kleinere Umgebungen",
      features: [
        "First Level Support (Mo-Fr 9-17h)",
        "Remote-Desktop Support",
        "Software-Updates",
        "Basis-Monitoring",
        "E-Mail Support",
        "Monatliche Reports"
      ],
      responseTime: "< 4 Stunden",
      suitable: "Bis 10 Geräte",
      popular: false
    },
    {
      name: "Professional Support",
      price: "ab €189",
      period: "/Monat pro Gerät", 
      description: "Umfassende Wartung mit erweitertem Support",
      features: [
        "First & Second Level Support",
        "Erweiterte Support-Zeiten (Mo-Fr 8-19h)",
        "Proaktives Monitoring 24/7",
        "Automatisches Patch-Management",
        "Backup-Überwachung",
        "Telefon-Support",
        "Quarterly Business Reviews",
        "Dedicated Support-Manager"
      ],
      responseTime: "< 2 Stunden",
      suitable: "10-50 Geräte",
      popular: true
    },
    {
      name: "Enterprise Support",
      price: "ab €299",
      period: "/Monat pro Gerät",
      description: "Premium-Support für kritische Geschäftssysteme", 
      features: [
        "Multi-Level Support inkl. Emergency",
        "24/7 Notfall-Support",
        "Dedicated Technical Account Manager",
        "Proactive Health Checks",
        "Priority Patch-Management",
        "Advanced Security Monitoring",
        "Disaster Recovery Planning",
        "On-Site Support nach Bedarf",
        "Custom SLA Agreements",
        "Quarterly Strategic Reviews"
      ],
      responseTime: "< 30 Minuten",
      suitable: "50+ Geräte",
      popular: false
    }
  ]

  const supportChannels = [
    {
      icon: Phone,
      title: "Telefon-Support",
      description: "Direkte Verbindung zu unseren Experten",
      details: "+49 8171 908929-0",
      availability: "Mo-Fr 9:00-18:00 Uhr"
    },
    {
      icon: MessageSquare,
      title: "Ticket-System", 
      description: "Strukturierte Bearbeitung Ihrer Anfragen",
      details: "Über Kontaktformular",
      availability: "24/7 Eingang"
    },
    {
      icon: Monitor,
      title: "Remote-Support",
      description: "Schnelle Hilfe direkt auf Ihrem System",
      details: "TeamViewer & RDP",
      availability: "Nach Terminvereinbarung"
    },
    {
      icon: Calendar,
      title: "Vor-Ort Service",
      description: "Persönlicher Support in Ihrem Unternehmen", 
      details: "Raum München/Wolfratshausen",
      availability: "Nach Vereinbarung"
    }
  ]

  const supportStatistics = [
    {
      value: "< 30min",
      label: "Durchschnittliche Reaktionszeit",
      icon: Clock
    },
    {
      value: "99.2%", 
      label: "System Verfügbarkeit",
      icon: Shield
    },
    {
      value: "600+",
      label: "Zufriedene Kunden",
      icon: Users
    },
    {
      value: "95%",
      label: "First-Call-Resolution",
      icon: Target
    }
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      <Hero 
        title="IT-Support & Wartung"
        subtitle="Bester Service. Aus einer Hand. Weil wir es wollen."
        ctaText="Support anfragen"
        ctaLink="/contact"
        backgroundImage="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
      />

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Partner statt Kunde - Stets an Ihrer Seite
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Auch wir sind Unternehmer und wissen daher sehr genau wie zeitraubend und kostspielig Problemlösungen sein können. 
              Da ist es wichtig, einen Partner zu haben auf den man sich verlassen kann. Unsere geschulten Mitarbeiter aus dem 
              technischen Support, nehmen sich Ihrer Anliegen an und helfen Ihnen zeitnah.
            </p>
            <p className="text-lg text-gray-600">
              So lassen wir Sie auch nach einem Projekt nicht allein und garantieren Ihnen die bewährte ScaleITS Qualität!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Support Statistics */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportStatistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="bg-white bg-opacity-20 p-4 rounded-xl mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-red-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Unsere Support-Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Schneller, lösungsorientierter Support auf allen Ebenen
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {supportServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-red-500 to-purple-600 p-4 rounded-xl mr-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-red-50 p-3 rounded-lg text-center">
                    <Clock className="w-5 h-5 text-red-600 mx-auto mb-1" />
                    <div className="text-xs font-semibold text-red-900">Response</div>
                    <div className="text-xs text-red-700">{service.responseTime}</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg text-center">
                    <Calendar className="w-5 h-5 text-green-600 mx-auto mb-1" />
                    <div className="text-xs font-semibold text-green-900">Zeiten</div>
                    <div className="text-xs text-green-700">{service.availability}</div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg text-center">
                    <Target className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                    <div className="text-xs font-semibold text-purple-900">SLA</div>
                    <div className="text-xs text-purple-700">{service.sla}</div>
                  </div>
                </div>

                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Support-Kanäle
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Verschiedene Wege, um schnell Hilfe zu erhalten
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-red-500 to-purple-600 p-4 rounded-xl mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{channel.title}</h3>
                <p className="text-gray-600 mb-3">{channel.description}</p>
                <div className="text-sm text-red-600 font-semibold mb-1">{channel.details}</div>
                <div className="text-xs text-gray-500">{channel.availability}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wartungspakete */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Support & Wartungs-Pakete
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wählen Sie das passende Support-Level für Ihre Anforderungen
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {wartungspakete.map((paket, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative bg-white rounded-3xl p-8 shadow-xl border-2 transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                  paket.popular ? 'border-red-500 ring-4 ring-blue-100' : 'border-gray-200'
                }`}
              >
                {paket.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Beliebt
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{paket.name}</h3>
                  <p className="text-gray-600 mb-4">{paket.description}</p>
                  <div className="flex items-end justify-center mb-2">
                    <span className="text-4xl font-bold text-gray-900">{paket.price}</span>
                    <span className="text-gray-600 ml-1">{paket.period}</span>
                  </div>
                  <div className="flex justify-center gap-2 mb-4">
                    <div className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {paket.responseTime}
                    </div>
                    <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {paket.suitable}
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {paket.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className={`block w-full text-center py-4 rounded-2xl font-semibold transition-all duration-300 ${
                    paket.popular
                      ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-700 hover:to-orange-700 shadow-lg'
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

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Benötigen Sie sofortigen Support?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Unser Support-Team steht bereit, um Ihnen bei allen IT-Problemen schnell und zuverlässig zu helfen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:+4981719089290"
                className="bg-white text-red-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                <Phone className="w-5 h-5 inline mr-2" />
                +49 8171 908929-0
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-red-600 transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 inline mr-2" />
                Support-Ticket erstellen
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}




