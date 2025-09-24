'use client'

import { motion } from 'framer-motion'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import { 
  CheckCircle, Code, Server, Shield, Database, Cloud, 
  Settings, Users, Clock, Target, Zap, Monitor,
  GitBranch, TestTube, Rocket, FileCheck, Award, 
  Calendar, MessageSquare, ArrowRight, Cog, Download
} from 'lucide-react'
import Link from 'next/link'

export default function ImplementationPage() {
  const implementationServices = [
    {
      icon: Server,
      title: "ACMP Implementation",
      description: "Vollständige Implementierung der Asset & Configuration Management Platform",
      duration: "4-8 Wochen",
      complexity: "Hoch",
      features: [
        "Systeminstallation und -konfiguration",
        "Asset Discovery Setup",
        "Software Distribution Konfiguration", 
        "License Management Integration",
        "Benutzer- und Rechteverwaltung",
        "Custom Dashboards und Reports",
        "Integration mit bestehenden Systemen",
        "Schulung der Administratoren"
      ],
      modules: [
        "Asset Management", 
        "Software Distribution",
        "License Management",
        "Compliance Monitoring",
        "Remote Desktop",
        "Mobile Device Management"
      ]
    },
    {
      icon: Shield,
      title: "Hornetsecurity Implementation", 
      description: "Umfassende E-Mail-Security und Backup-Lösung Implementierung",
      duration: "2-4 Wochen",
      complexity: "Mittel",
      features: [
        "E-Mail-Security Gateway Setup",
        "Spam- und Malware-Filter Konfiguration",
        "Advanced Threat Protection",
        "E-Mail Backup & Archivierung",
        "Data Loss Prevention (DLP)",
        "Compliance-konforme Archivierung",
        "Mobile Device Protection",
        "Administrator Training"
      ],
      modules: [
        "Email Security",
        "Advanced Threat Protection", 
        "Email Backup & Archiving",
        "Compliance Archiving",
        "Security Awareness Service"
      ]
    },
    {
      icon: Monitor,
      title: "Arctic Wolf Implementation",
      description: "24/7 Security Operations Center als Managed Service",
      duration: "2-3 Wochen",
      complexity: "Mittel",
      features: [
        "SOC-Sensor Installation",
        "Netzwerk-Monitoring Setup",
        "SIEM Integration",
        "Incident Response Workflows",
        "Threat Hunting Konfiguration",
        "Custom Alert Rules",
        "Compliance Reporting Setup",
        "Team Onboarding"
      ],
      modules: [
        "Managed Detection & Response",
        "Managed Risk Assessment", 
        "Incident Response",
        "Security Awareness Training",
        "Vulnerability Management"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Sichere Migration zu Microsoft 365 und Azure Cloud Services",
      duration: "6-12 Wochen", 
      complexity: "Hoch",
      features: [
        "Migration Strategy & Planning",
        "Daten- und E-Mail Migration",
        "Active Directory Integration",
        "Security & Compliance Setup",
        "Teams & SharePoint Konfiguration",
        "Backup & Disaster Recovery",
        "User Training & Support",
        "Go-Live Support"
      ],
      modules: [
        "Exchange Online",
        "SharePoint Online",
        "Microsoft Teams",
        "Azure Active Directory",
        "Microsoft Defender"
      ]
    }
  ]

  const implementationProcess = [
    {
      phase: "1",
      title: "Projektplanung",
      description: "Detaillierte Projektplanung und Ressourcenallokation",
      duration: "1 Woche",
      activities: [
        "Projekt-Kickoff Meeting",
        "Detaillierte Anforderungsanalyse", 
        "Technische Architektur Design",
        "Projektplan und Meilensteine",
        "Risk Assessment",
        "Team Assignment"
      ],
      deliverables: ["Projektplan", "Technische Spezifikation", "Risk Register"]
    },
    {
      phase: "2",
      title: "Systemvorbereitung",
      description: "Vorbereitung der Infrastruktur und Systeme",
      duration: "1-2 Wochen",
      activities: [
        "Hardware/Server Vorbereitung",
        "Netzwerk Konfiguration",
        "Sicherheits-Setup",
        "Backup-Strategien",
        "Test-Umgebung Setup",
        "Dokumentation"
      ],
      deliverables: ["Systemdokumentation", "Test-Umgebung", "Backup-Konzept"]
    },
    {
      phase: "3",
      title: "Installation & Konfiguration",
      description: "Kerninstallation und Basiskonfiguration",
      duration: "2-4 Wochen", 
      activities: [
        "Software Installation",
        "Grundkonfiguration",
        "Integration Setup",
        "Datenimport/-migration",
        "Benutzerkonten Setup",
        "Erste Funktionstests"
      ],
      deliverables: ["Installierte Systeme", "Basiskonfiguration", "Testprotokolle"]
    },
    {
      phase: "4",
      title: "Customization & Testing",
      description: "Anpassungen und umfassende Tests",
      duration: "1-3 Wochen",
      activities: [
        "Custom Entwicklungen",
        "Workflow Konfiguration", 
        "Umfangreiche Tests",
        "Performance Optimierung",
        "Security Testing",
        "User Acceptance Tests"
      ],
      deliverables: ["Angepasste Lösung", "Testergebnisse", "Performance Report"]
    },
    {
      phase: "5",
      title: "Go-Live & Support",
      description: "Produktivstellung und Initial Support",
      duration: "1-2 Wochen",
      activities: [
        "Produktivstellung",
        "User Training",
        "Go-Live Support",
        "Monitoring Setup",
        "Issue Resolution",
        "Dokumentationsübergabe"
      ],
      deliverables: ["Live System", "Schulungsunterlagen", "Support-Dokumentation"]
    }
  ]

  const implementationPackages = [
    {
      name: "Standard Implementation",
      price: "ab €4.990",
      duration: "2-4 Wochen",
      description: "Basis-Implementierung für kleinere Umgebungen",
      features: [
        "Standard Installation & Setup",
        "Basis-Konfiguration",
        "Standard-Integrationen",
        "Administrator Training (4h)",
        "30 Tage Support",
        "Standard-Dokumentation"
      ],
      suitable: "Bis 50 Benutzer",
      popular: false
    },
    {
      name: "Professional Implementation", 
      price: "ab €9.990",
      duration: "4-8 Wochen",
      description: "Umfassende Implementierung mit Anpassungen",
      features: [
        "Vollständige Installation & Setup",
        "Custom Konfiguration",
        "Alle Standard-Integrationen",
        "2 Custom Entwicklungen",
        "Administrator Training (8h)",
        "User Training (4h)",
        "90 Tage Support",
        "Umfassende Dokumentation",
        "Performance Monitoring"
      ],
      suitable: "50-200 Benutzer",
      popular: true
    },
    {
      name: "Enterprise Implementation",
      price: "ab €19.990", 
      duration: "8-16 Wochen",
      description: "Vollumfängliche Enterprise-Implementierung",
      features: [
        "Komplette Enterprise Setup",
        "Vollständige Customization",
        "Alle Integrationen + Custom APIs",
        "Unlimited Custom Entwicklungen",
        "Umfassendes Training-Programm",
        "Change Management Support",
        "6 Monate Premium Support",
        "Dedicated Project Manager",
        "Go-Live Support 8-18 Uhr",
        "Advanced Monitoring & Alerting"
      ],
      suitable: "200+ Benutzer",
      popular: false
    }
  ]

  const methodologies = [
    {
      icon: GitBranch,
      title: "Agile Implementation",
      description: "Iterative Entwicklung mit schnellen Feedback-Zyklen"
    },
    {
      icon: TestTube,
      title: "Test-Driven Deployment",
      description: "Umfassende Tests vor jeder Produktivstellung"
    },
    {
      icon: Rocket,
      title: "Phased Rollout",
      description: "Schrittweise Einführung zur Risikominimierung"
    },
    {
      icon: FileCheck,
      title: "Quality Assurance",
      description: "Strenge Qualitätskontrollen in allen Phasen"
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-scaleit-red/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-scaleit-purple/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
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
              <Rocket className="w-6 h-6 mr-3" />
              <span className="text-lg font-semibold">Implementation Services</span>
            </motion.div>
            
            <h1 className="text-7xl font-bold text-scaleit-black mb-6">
              Professionelle <span className="bg-gradient-scaleit bg-clip-text text-transparent">System-Implementierung</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              Expertenwissen für erfolgreiche IT-Projekte – von der Planung bis zum Go-Live. 
              ScaleITS macht Ihre Vision zur Realität.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-scaleit text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Rocket className="w-5 h-5 inline mr-2" />
                Projekt starten
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                <a href="/pdfs/implementation-produktinfo.pdf" download className="flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  Service-Info herunterladen
                </a>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Implementation Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-scaleit-black mb-4">
              Unsere Implementierungs-Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professionelle Umsetzung führender IT-Lösungen mit bewährten Methoden
            </p>
          </motion.div>

          <div className="space-y-12">
            {implementationServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-br from-red-500 to-purple-600 p-4 rounded-xl mr-4">
                        <service.icon className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-red-50 p-3 rounded-lg text-center">
                        <Clock className="w-5 h-5 text-red-600 mx-auto mb-1" />
                        <div className="text-sm font-semibold text-red-900">Dauer</div>
                        <div className="text-sm text-red-700">{service.duration}</div>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg text-center">
                        <Cog className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                        <div className="text-sm font-semibold text-purple-900">Komplexität</div>
                        <div className="text-sm text-purple-700">{service.complexity}</div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Hauptmodule:</h4>
                      <div className="space-y-2">
                        {service.modules.map((module, moduleIndex) => (
                          <div key={moduleIndex} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{module}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold text-gray-900 mb-4">Implementierungs-Features:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Unser Implementierungs-Prozess
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bewährte Methodik für erfolgreiche Projekte
            </p>
          </motion.div>

          <div className="space-y-8">
            {implementationProcess.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} items-center gap-8`}
              >
                <div className="lg:w-1/3 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-white">{phase.phase}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                  <p className="text-gray-600 mb-4">{phase.description}</p>
                  <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold">
                    {phase.duration}
                  </div>
                </div>
                
                <div className="lg:w-2/3 bg-white rounded-2xl p-6 shadow-lg">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Aktivitäten:</h4>
                      <div className="space-y-2">
                        {phase.activities.map((activity, actIndex) => (
                          <div key={actIndex} className="flex items-center">
                            <ArrowRight className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Deliverables:</h4>
                      <div className="space-y-2">
                        {phase.deliverables.map((deliverable, delIndex) => (
                          <div key={delIndex} className="flex items-center">
                            <FileCheck className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Implementierungs-Pakete
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wählen Sie das passende Paket für Ihre Anforderungen
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {implementationPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative bg-white rounded-3xl p-8 shadow-xl border-2 transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                  pkg.popular ? 'border-red-500 ring-4 ring-blue-100' : 'border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-scaleit text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Beliebt
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="flex items-end justify-center mb-2">
                    <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                  </div>
                  <div className="flex justify-center gap-2 mb-4">
                    <div className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {pkg.duration}
                    </div>
                    <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {pkg.suitable}
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className={`block w-full text-center py-4 rounded-2xl font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-gradient-scaleit text-white hover:opacity-90 shadow-lg'
                      : 'border-2 border-scaleit-red text-scaleit-red hover:bg-scaleit-red hover:text-white'
                  }`}
                >
                  Angebot anfragen
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodologies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Unsere Methodik
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bewährte Ansätze für erfolgreiche Implementierungen
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodologies.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-red-500 to-purple-600 p-4 rounded-xl mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-scaleit">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Starten Sie Ihr Projekt heute
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns Ihre IT-Vision gemeinsam in die Realität umsetzen. 
              Professionell, termingerecht und im Budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-scaleit-red px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                <MessageSquare className="w-5 h-5 inline mr-2" />
                Kostenloses Beratungsgespräch
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-scaleit-red transition-all duration-300"
              >
                <Calendar className="w-5 h-5 inline mr-2" />
                Projekttermin vereinbaren
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}




