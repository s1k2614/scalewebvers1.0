'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import { 
  CheckCircle, Target, Cog, Database, Cloud, Shield, 
  Zap, Users, Clock, Award, ArrowRight, Calendar,
  MessageSquare, Phone, Settings, Search, FileText,
  GitBranch, Monitor, Code, Server, Wrench
} from 'lucide-react'
import Link from 'next/link'

export default function ServicePage() {
  const mainServices = [
    {
      icon: Target,
      title: "Strategische Planung",
      subtitle: "Gerne beraten wir Sie bei strategischen Entscheidungen Ihrer IT-Landschaft.",
      description: "Fokussieren Sie sich auf Ihre Stärken – bei IT vertrauen Sie auf Experten. Digitalisierung, Automatisierung, Kostendruck? Vertrauen Sie auf unsere Expertise.",
      features: [
        "Strategischer Partner",
        "Zugriff auf Expertenwissen", 
        "Persönliche Betreuung",
        "Digitale Transformation"
      ],
      link: "/services/beratung",
      color: "from-red-500 to-cyan-500"
    },
    {
      icon: Cog,
      title: "Projektmanagement", 
      subtitle: "Sie haben ein Projekt – wir das Management.",
      description: "Professionelle Projektleitung für erfolgreiche IT-Implementierungen von der Planung bis zum Go-Live.",
      features: [
        "Agile Methoden",
        "Risikomanagement",
        "Stakeholder Management",
        "Quality Assurance"
      ],
      link: "/services/implementation",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Settings,
      title: "Standardisierung & Automatisierung",
      subtitle: "Standardisieren, Automatisieren, Skalieren.",
      description: "Optimierung von IT-Prozessen durch Standardisierung und intelligente Automatisierung für maximale Effizienz.",
      features: [
        "Prozess-Standardisierung", 
        "Workflow-Automatisierung",
        "Skalierbare Lösungen",
        "Effizienzsteigerung"
      ],
      link: "/services/implementation",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Monitor,
      title: "IT-Betrieb",
      subtitle: "Konzentrieren Sie sich auf das Wesentliche – den Rest machen wir.",
      description: "Zuverlässiger IT-Betrieb und kontinuierliche Überwachung Ihrer IT-Infrastruktur für maximale Verfügbarkeit.",
      features: [
        "Monitoring 8-18 Uhr",
        "Proaktive Wartung", 
        "Performance Optimierung",
        "Incident Management"
      ],
      link: "/services/wartung",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: GitBranch,
      title: "Migrationen",
      subtitle: "Migrationen durchführen – neue Standards leben.",
      description: "Sichere und effiziente Migration Ihrer IT-Systeme zu modernen Plattformen und Cloud-Services.",
      features: [
        "Cloud Migration",
        "System-Upgrades",
        "Daten-Migration", 
        "Zero-Downtime"
      ],
      link: "/services/implementation",
      color: "from-teal-500 to-red-500"
    },
    {
      icon: Wrench,
      title: "IT-Support",
      subtitle: "Bester Service. Aus einer Hand. Weil wir es wollen.",
      description: "Schneller, lösungsorientierter Support von unseren erfahrenen Technikern. Partner statt Kunde – stets an Ihrer Seite.",
      features: [
        "Multi-Level Support",
        "Schnelle Reaktionszeit",
        "Remote & Vor-Ort",
        "Emergency 8-18 Uhr"
      ],
      link: "/services/wartung", 
      color: "from-indigo-500 to-purple-500"
    }
  ]

  const scaleitsValues = [
    {
      icon: Users,
      title: "Reduzierung der IT-Kosten",
      description: "Wir analysieren Ihre bestehende IT und optimieren da, wo es nötig ist. So entstehen effiziente IT-Landschaften mit reduzierten Kosten durch automatisierte Abläufe."
    },
    {
      icon: Shield, 
      title: "Nachhaltige und stabile IT-Strukturen",
      description: "Wir setzen neue Standards, die für klare Strukturen sorgen und für eine schnellere Behebung von IT-Problemen."
    },
    {
      icon: Zap,
      title: "Steigerung der Mitarbeiterzufriedenheit", 
      description: "Durch optimierte IT-Prozesse und zuverlässige Systeme können sich Ihre Mitarbeiter auf ihre Kernaufgaben konzentrieren."
    }
  ]

  const companyStats = [
    {
      value: "600+",
      label: "Zufriedene Kunden in 3 Jahren",
      icon: Users
    },
    {
      value: "15+",
      label: "Jahre Erfahrung",
      icon: Award
    },
    {
      value: "8-18 Uhr",
      label: "Support verfügbar", 
      icon: Clock
    },
    {
      value: "99.2%",
      label: "System Uptime",
      icon: Shield
    }
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      <Hero 
        title="ScaleITS Services & Solutions"
        subtitle="Vertrauen Sie Ihre IT-Landschaft nur Experten an"
        ctaText="Kostenlose Beratung"
        ctaLink="/contact"
        backgroundImage="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      />

      {/* Company Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              ScaleITS – Ihr zuverlässiger Experte für Ihr digitales Arbeitsleben
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Es gibt immer Luft nach oben. Auch für Ihre IT? Wir analysieren Ihre bestehende IT und optimieren da, 
              wo es nötig ist. So entsteht eine effiziente IT-Landschaft für Ihr Unternehmen, bei der Ihre IT-Kosten 
              aufgrund automatisierter Abläufe reduziert werden.
            </p>
            <p className="text-lg text-gray-600">
              Wir setzen neue Standards, die für klare Strukturen sorgen und für eine schnellere Behebung von IT-Problemen.
            </p>
          </motion.div>

          {/* Company Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {companyStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-red-50 to-purple-50 rounded-2xl"
              >
                <div className="bg-gradient-to-br from-red-500 to-purple-600 p-4 rounded-xl mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* ScaleITS Values */}
          <div className="grid md:grid-cols-3 gap-8">
            {scaleitsValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg"
              >
                <div className="bg-gradient-to-br from-red-500 to-purple-600 p-4 rounded-xl mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Unsere Services & Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Umfassende IT-Services für alle Aspekte Ihrer digitalen Transformation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="mb-6">
                  <div className={`bg-gradient-to-br ${service.color} p-4 rounded-xl mb-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-red-600 font-semibold mb-3">{service.subtitle}</p>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={service.link}
                  className="flex items-center justify-center w-full py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-2xl font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 group-hover:shadow-lg"
                >
                  Mehr erfahren
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Philosophy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Echter Service, Innovation und Kundenorientierung
              </h2>
              <h3 className="text-2xl font-semibold text-red-600 mb-4">
                Starkes Team – Starke Leistung
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Unsere Kunden erhalten den besten Service – hierzu leisten unsere Mitarbeiter den wichtigsten Beitrag. 
                Ein hohes Maß an Service und Qualität bei unseren Dienstleistungen ist für uns die absolute Priorität.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Nach diesem Leitbild stehen wir als Partner an Ihrer Seite und das Tag für Tag. 
                Wir sind stolz auf 600 zufriedene Kunden in 3 Jahren.
              </p>
              <p className="text-lg text-gray-600">
                Wir freuen uns auf Ihre Kontaktaufnahme und freuen uns Sie persönlich beraten zu dürfen.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-red-500 to-purple-600 p-6 rounded-2xl text-white">
                  <Search className="w-8 h-8 mb-3" />
                  <h4 className="font-semibold">Analyse & Planung</h4>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-teal-600 p-6 rounded-2xl text-white">
                  <Code className="w-8 h-8 mb-3" />
                  <h4 className="font-semibold">Implementation</h4>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-gradient-to-br from-orange-500 to-red-600 p-6 rounded-2xl text-white">
                  <Shield className="w-8 h-8 mb-3" />
                  <h4 className="font-semibold">Support & Wartung</h4>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-6 rounded-2xl text-white">
                  <Zap className="w-8 h-8 mb-3" />
                  <h4 className="font-semibold">Optimization</h4>
                </div>
              </div>
            </motion.div>
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
              Bereit für den nächsten Schritt?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam Ihre IT-Landschaft analysieren und optimieren. 
              Kostenlose Beratung und persönliche Betreuung garantiert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-red-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                <MessageSquare className="w-5 h-5 inline mr-2" />
                Kostenlose Beratung
              </Link>
              <Link
                href="tel:+4981719089290"
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-red-600 transition-all duration-300"
              >
                <Phone className="w-5 h-5 inline mr-2" />
                +49 8171 908929-0
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}




