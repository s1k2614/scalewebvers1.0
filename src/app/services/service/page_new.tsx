'use client'

import { motion } from 'framer-motion'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
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
      color: "bg-gradient-scaleit"
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
      color: "bg-scaleit-gray"
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
      link: "/services/wartung",
      color: "bg-scaleit-purple"
    }
  ]

  const serviceAreas = [
    {
      title: "IT-Beratung",
      description: "Strategische Beratung für Ihre IT-Landschaft",
      icon: Search,
      link: "/services/beratung"
    },
    {
      title: "Systemimplementierung", 
      description: "Professionelle Umsetzung Ihrer IT-Projekte",
      icon: Code,
      link: "/services/implementation"
    },
    {
      title: "Wartung & Support",
      description: "Kontinuierliche Betreuung Ihrer IT-Systeme",
      icon: Wrench,
      link: "/services/wartung"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white font-roboto">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-scaleit-red/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-scaleit-purple/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center bg-gradient-scaleit text-white px-8 py-4 rounded-full shadow-2xl mb-8"
            >
              <Server className="w-6 h-6 mr-3" />
              <span className="text-lg font-semibold">Professionelle IT-Services</span>
            </motion.div>
            
            <h1 className="text-7xl font-bold text-scaleit-black mb-6">
              Ihre <span className="bg-gradient-scaleit bg-clip-text text-transparent">IT-Partner</span> für den Erfolg
            </h1>
            
            <p className="text-xl text-scaleit-gray max-w-4xl mx-auto mb-12">
              Von der strategischen Beratung bis zur technischen Umsetzung – wir bieten Ihnen 
              das komplette Spektrum professioneller IT-Services aus einer Hand.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-scaleit text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform">
                <MessageSquare className="w-5 h-5 inline mr-2" />
                Kostenlose Beratung
              </Link>
              <Link href="tel:+49-xxx-xxx-xxx" className="border-2 border-scaleit-red text-scaleit-red px-8 py-4 rounded-full font-semibold hover:bg-scaleit-red hover:text-white transition-colors">
                <Phone className="w-5 h-5 inline mr-2" />
                Sofort anrufen
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-scaleit-black mb-6">Unsere Hauptleistungen</h2>
            <p className="text-xl text-scaleit-gray max-w-3xl mx-auto">
              Drei Kernbereiche, die Ihr Unternehmen digital voranbringen
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className={`h-2 ${service.color}`}></div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-scaleit-black">{service.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-lg font-semibold text-scaleit-red mb-4">{service.subtitle}</p>
                  <p className="text-scaleit-gray mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-scaleit-red mr-3 flex-shrink-0" />
                        <span className="text-scaleit-gray">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    href={service.link}
                    className="inline-flex items-center bg-scaleit-gray text-white px-6 py-3 rounded-full font-semibold hover:bg-scaleit-red transition-colors group-hover:bg-scaleit-red"
                  >
                    Mehr erfahren
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Quick Access */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-scaleit-black mb-6">Direkter Zugang zu unseren Services</h2>
            <p className="text-xl text-scaleit-gray max-w-3xl mx-auto">
              Finden Sie schnell den passenden Service für Ihr Anliegen
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={area.link} className="block">
                  <div className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-gradient-scaleit hover:text-white transition-all duration-300 group-hover:scale-105">
                    <div className="w-20 h-20 bg-gradient-scaleit rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                      <area.icon className="w-10 h-10 text-white group-hover:text-scaleit-red" />
                    </div>
                    <h3 className="text-2xl font-bold text-scaleit-black group-hover:text-white mb-4">{area.title}</h3>
                    <p className="text-scaleit-gray group-hover:text-white/90">{area.description}</p>
                    <div className="mt-6">
                      <span className="inline-flex items-center text-scaleit-red group-hover:text-white font-semibold">
                        Service erkunden
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-scaleit-black mb-6">Warum ScaleITS?</h2>
            <p className="text-xl text-scaleit-gray max-w-3xl mx-auto">
              Ihre Vorteile bei der Zusammenarbeit mit uns
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Erfahrenes Team",
                description: "Über 10 Jahre Erfahrung in der IT-Branche"
              },
              {
                icon: Clock,
                title: "Schnelle Reaktion",
                description: "24/7 Support und kurze Reaktionszeiten"
              },
              {
                icon: Shield,
                title: "Höchste Sicherheit",
                description: "Compliance und Security by Design"
              },
              {
                icon: Award,
                title: "Bewährte Qualität",
                description: "Zertifizierte Prozesse und Methoden"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-scaleit rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-scaleit-black mb-3">{benefit.title}</h3>
                <p className="text-scaleit-gray">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-scaleit text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Lassen Sie uns Ihr IT-Partner werden</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Profitieren Sie von unserer Expertise und lassen Sie uns gemeinsam 
              Ihre IT-Herausforderungen meistern.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-scaleit-red px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform text-lg">
                <MessageSquare className="w-5 h-5 inline mr-2" />
                Projekt besprechen
              </Link>
              <Link href="tel:+49-xxx-xxx-xxx" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-scaleit-red transition-colors text-lg">
                <Phone className="w-5 h-5 inline mr-2" />
                Direkter Kontakt
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
