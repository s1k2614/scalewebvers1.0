'use client';

import { motion } from 'framer-motion';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import { 
  Settings, Code, Database, Cloud, Shield, Monitor,
  CheckCircle, ArrowRight, Zap, Users, Clock, Award,
  Target, GitBranch, Cog, Calendar, MessageSquare,
  FileText, Search, Phone, Wrench, Activity
} from 'lucide-react';
import Link from 'next/link';

export default function ImplementationPage() {
  const projectManagementFeatures = [
    {
      title: "Persönlicher Projektleiter",
      description: "Ihr dedizierter Ansprechpartner für das gesamte Projekt",
      icon: Users,
      details: [
        "Einzelner Ansprechpartner für alle Belange",
        "Umfassende Projektkoordination",
        "Regelmäßige Status-Updates",
        "Stakeholder Management"
      ]
    },
    {
      title: "Kostenmonitoring in Echtzeit", 
      description: "Transparente Kostenkontrolle während des gesamten Projekts",
      icon: Target,
      details: [
        "Live Budget-Tracking",
        "Kostenprognosen und Alerts",
        "Detaillierte Ausgabenberichte",
        "ROI-Berechnung"
      ]
    },
    {
      title: "Beste Konditionen bei Lieferanten",
      description: "Nutzen Sie unser umfangreiches Partnernetzwerk",
      icon: Award,
      details: [
        "Zugang zu Premium-Partnernetzwerk",
        "Verhandlung besserer Konditionen",
        "Bulk-Purchasing Vorteile",
        "Exklusive Partnerangebote"
      ]
    }
  ];

  const itBetriebServices = [
    {
      title: "Reibungslose Auslagerung Ihrer IT Prozesse",
      description: "Konzentrieren Sie sich auf das Wesentliche – den Rest machen wir",
      icon: Cog,
      content: "Wir unterstützen ganzheitlich mit all unserer Expertise. Als Experte in Ihrem Bereich benötigen Sie 100% Aufmerksamkeit für Ihre Kunden und effiziente Betriebsabläufe. Sie brennen für Ihre Produkte und Dienstleistungen. Damit Sie auf Erfolgskurs bleiben, müssen die Systeme im Hintergrund laufen.",
      benefits: [
        "Vollständige IT-Prozess Übernahme",
        "Entlastung Ihrer internen Teams",
        "Fokus auf Kerngeschäft",
        "Professionelle IT-Operations"
      ]
    },
    {
      title: "Immer Up-to-Date",
      description: "Ihre IT-Systeme bleiben immer auf dem neuesten Stand",
      icon: Monitor,
      content: "Durch kontinuierliche Überwachung und proaktive Updates stellen wir sicher, dass Ihre IT-Infrastruktur immer optimal funktioniert und aktuell bleibt.",
      benefits: [
        "Automatische System-Updates",
        "Proaktive Sicherheits-Patches",
        "Performance-Optimierung",
        "Technologie-Roadmap"
      ]
    },
    {
      title: "Rentabel",
      description: "Kosteneffiziente IT-Operations ohne Qualitätsverlust",
      icon: Zap,
      content: "Sie verfügen bereits über eine IT-Abteilung, doch das Budget ist knapp und weitere Mitarbeiter einzustellen ist keine Option? Holen Sie sich Experten ins Boot und entlasten Ihre Mitarbeiter.",
      benefits: [
        "Reduzierte Personalkosten",
        "Skalierbare Kostenstruktur",
        "Keine Recruiting-Kosten",
        "Planbare Ausgaben"
      ]
    }
  ];

  const implementationProcess = [
    {
      phase: "1",
      title: "Ist-Analyse & Projektplanung",
      description: "Umfassende Bewertung und detaillierte Planung",
      duration: "1-2 Wochen",
      activities: [
        "Ausführliche Ist-Analyse",
        "Anforderungserfassung",
        "Technische Machbarkeitsstudie",
        "Detaillierte Projektplanung",
        "Ressourcenplanung",
        "Risikobewertung"
      ]
    },
    {
      phase: "2", 
      title: "Beschaffung & Verhandlung",
      description: "Optimale Konditionen durch unser Lieferantennetzwerk",
      duration: "1-3 Wochen",
      activities: [
        "Lieferantenauswahl",
        "Konditionsverhandlung", 
        "Vertragsgestaltung",
        "Beschaffungsabwicklung",
        "Qualitätssicherung",
        "Lieferzeitoptimierung"
      ]
    },
    {
      phase: "3",
      title: "Implementation & Konfiguration", 
      description: "Professionelle Umsetzung mit Best Practices",
      duration: "2-8 Wochen",
      activities: [
        "Systeminstallation",
        "Konfiguration und Customizing",
        "Integration bestehender Systeme",
        "Datenimport und -migration",
        "Sicherheitskonfiguration",
        "Performance-Tuning"
      ]
    },
    {
      phase: "4",
      title: "Testing & Go-Live",
      description: "Umfassende Tests und erfolgreiche Produktivstellung",
      duration: "1-2 Wochen", 
      activities: [
        "Umfangreiche Systemtests",
        "User Acceptance Testing",
        "Load- und Performance-Tests",
        "Security-Testing",
        "Go-Live Vorbereitung",
        "Produktivstellung"
      ]
    },
    {
      phase: "5",
      title: "Support & Optimierung",
      description: "Kontinuierliche Betreuung und Optimierung",
      duration: "Laufend",
      activities: [
        "Post-Go-Live Support",
        "Performance-Monitoring",
        "Kontinuierliche Optimierung", 
        "User Training",
        "Dokumentation",
        "Wissenstransfer"
      ]
    }
  ];

  const implementationPackages = [
    {
      name: "Standard Implementation",
      price: "ab €5.990",
      duration: "4-8 Wochen",
      description: "Professionelle Basis-Implementierung für kleinere Projekte",
      features: [
        "Dedicated Projektmanager", 
        "Ist-Analyse und Planung",
        "Standard-Konfiguration",
        "Basis-Integrationen",
        "Go-Live Support",
        "30 Tage Post-Implementation Support",
        "Grundlegende Dokumentation",
        "Administrator Training (4h)"
      ],
      suitable: "Bis 50 User/Geräte",
      popular: false
    },
    {
      name: "Professional Implementation",
      price: "ab €12.990", 
      duration: "6-12 Wochen",
      description: "Umfassende Implementierung mit erweiterten Features",
      features: [
        "Senior Projektmanager + Team",
        "Detaillierte Ist-Analyse",
        "Custom Konfiguration",
        "Umfassende Integrationen",
        "Datenmigrationsservices",
        "Erweiterte Sicherheitskonfiguration",
        "Performance-Optimierung",
        "90 Tage Premium Support",
        "Umfassende Dokumentation",
        "Administrator + User Training (16h)",
        "Quarterly Business Reviews"
      ],
      suitable: "50-200 User/Geräte", 
      popular: true
    },
    {
      name: "Enterprise Implementation",
      price: "ab €24.990",
      duration: "8-20 Wochen", 
      description: "Vollumfängliche Enterprise-Implementierung",
      features: [
        "Dedicated Project Management Office",
        "Umfassende Unternehmensanalyse",
        "Enterprise-Architecture Design",
        "Vollständige System-Integration",
        "Advanced Security Implementation",
        "High-Availability Setup",
        "Disaster Recovery Planning",
        "Change Management Program",
        "6 Monate Premium Support",
        "24/7 Go-Live Support", 
        "Comprehensive Training Program",
        "Custom Development Services",
        "Executive Reporting"
      ],
      suitable: "200+ User/Geräte",
      popular: false
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-green-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-emerald-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
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
              className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full shadow-2xl mb-8"
            >
              <Settings className="w-6 h-6 mr-3" />
              <span className="text-lg font-semibold">Projektmanagement & Implementation</span>
            </motion.div>
            
            <h1 className="text-7xl font-bold text-gray-900 mb-6">
              Sie haben ein <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Projekt</span> – wir das Management
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              Das Ziel ist definiert, an der Organisation soll es nicht scheitern. Im Rahmen unseres Projektmanagements 
              stellen wir Ihnen unser Team zur Verfügung um Ihr Projekt, effizient und wirtschaftlich zum Erfolg zu führen.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Calendar className="w-5 h-5 inline mr-2" />
                Projekt starten
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                <FileText className="w-5 h-5 inline mr-2" />
                Projektberatung
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projektmanagement Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Professionelles Projektmanagement</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gemeinsam stark ist unsere Devise, weshalb wir Sie von der Ist-Analyse, der Projektplanung 
              sowie bei der Beschaffung und der Verhandlung mit Lieferanten unterstützen.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {projectManagementFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                
                <div className="space-y-3">
                  {feature.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Nutzen Sie unser umfangreiches Netzwerk
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Hier greifen wir auf unser umfangreiches Netzwerk zu und ermöglichen Ihnen bessere Konditionen.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Weitere Infos
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* IT-Betrieb Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">IT-Betrieb & Operations</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Konzentrieren Sie sich auf das Wesentliche – den Rest machen wir. Übergeben Sie uns Teilbereiche 
              Ihrer IT und atmen Sie endlich durch.
            </p>
          </motion.div>

          <div className="space-y-12">
            {itBetriebServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} items-center gap-12`}
              >
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl mr-4">
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-green-600 font-semibold">{service.description}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">{service.content}</p>
                  
                  <div className="space-y-3">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="bg-white rounded-2xl p-8 shadow-xl">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">24/7</div>
                        <div className="text-sm text-gray-600">Monitoring</div>
                      </div>
                      <div className="text-center p-4 bg-emerald-50 rounded-lg">
                        <div className="text-2xl font-bold text-emerald-600">99.9%</div>
                        <div className="text-sm text-gray-600">Uptime</div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">-40%</div>
                        <div className="text-sm text-gray-600">IT-Kosten</div>
                      </div>
                      <div className="text-center p-4 bg-emerald-50 rounded-lg">
                        <div className="text-2xl font-bold text-emerald-600">100%</div>
                        <div className="text-sm text-gray-600">Fokus</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Unser Implementierungs-Prozess</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bewährte Methodik für erfolgreiche IT-Projekte von der Analyse bis zum Go-Live
            </p>
          </motion.div>

          <div className="space-y-8">
            {implementationProcess.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-8"
              >
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{phase.phase}</span>
                </div>
                
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{phase.title}</h3>
                      <p className="text-gray-600">{phase.description}</p>
                    </div>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mt-2 lg:mt-0 w-fit">
                      {phase.duration}
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {phase.activities.map((activity, actIndex) => (
                      <div key={actIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Packages */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Implementation Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wählen Sie das passende Paket für Ihre Projektanforderungen
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {implementationPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white rounded-3xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                  pkg.popular ? 'ring-4 ring-green-200 border-2 border-green-500' : 'border border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold text-center mb-6">
                    Beliebt
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{pkg.price}</div>
                  <div className="flex justify-center gap-2">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {pkg.duration}
                    </span>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {pkg.suitable}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                  pkg.popular 
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-lg' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Angebot anfragen
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Bereit für Ihr nächstes Projekt?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Lassen Sie uns gemeinsam Ihr IT-Projekt zum Erfolg führen
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 inline mr-2" />
                Kostenlose Projektberatung
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
              >
                <Phone className="w-5 h-5 inline mr-2" />
                +49 8171 908929-0
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}




