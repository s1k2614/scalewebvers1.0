'use client';

import { motion } from 'framer-motion';
import Hero from '../../../components/Hero';
import Footer from '../../../components/Footer';
import { 
  Lightbulb, Users, Target, CheckCircle, Clock, 
  Award, Shield, TrendingUp, BarChart3, Phone,
  MessageSquare, Calendar, FileText, Search,
  Zap, Settings, Database, Monitor, Building,
  Globe, Cpu, Layers, Network, HardDrive
} from 'lucide-react';
import Link from 'next/link';

export default function BeratungPage() {
  const beratungsServices = [
    {
      icon: Search,
      title: "IT-Strategie & Analyse",
      description: "Umfassende Analyse Ihrer IT-Landschaft und strategische Beratung",
      features: [
        "IT-Assessment & IST-Analyse",
        "Technologie-Roadmap Entwicklung",
        "Digital Transformation Strategy",
        "IT-Budget Optimierung",
        "Risk Assessment & Security Audit",
        "Compliance & Governance Beratung"
      ],
      duration: "2-6 Wochen",
      priceRange: "€3.500 - €15.000"
    },
    {
      icon: Building,
      title: "Infrastruktur-Beratung",
      description: "Optimierung und Modernisierung Ihrer IT-Infrastruktur",
      features: [
        "Server & Storage Konzepte",
        "Netzwerk-Design & Optimierung",
        "Cloud Migration Strategien",
        "Virtualisierung & Containerisierung",
        "Backup & Disaster Recovery",
        "Performance & Capacity Planning"
      ],
      duration: "3-8 Wochen",
      priceRange: "€4.500 - €25.000"
    },
    {
      icon: Shield,
      title: "Security Consulting",
      description: "Ganzheitliche IT-Sicherheitsberatung und Compliance",
      features: [
        "Security Assessment & Penetration Testing",
        "GDPR/DSGVO Compliance Beratung",
        "Incident Response Planning",
        "Security Awareness Training",
        "Multi-Factor Authentication Setup",
        "Zero-Trust Architecture Design"
      ],
      duration: "2-5 Wochen",
      priceRange: "€2.500 - €18.000"
    },
    {
      icon: Globe,
      title: "Cloud Consulting",
      description: "Strategische Cloud-Beratung und Migration Planning",
      features: [
        "Cloud-First Strategy Entwicklung",
        "Multi-Cloud & Hybrid-Cloud Konzepte",
        "Azure/AWS/Google Cloud Beratung",
        "Cloud Cost Optimization",
        "DevOps & CI/CD Implementation",
        "Cloud Security & Governance"
      ],
      duration: "4-10 Wochen",
      priceRange: "€5.500 - €35.000"
    }
  ];

  const beratungsProzess = [
    {
      step: 1,
      title: "Erstberatung & Zielsetzung",
      description: "Kostenlose Erstberatung und Definition Ihrer Ziele",
      icon: Lightbulb,
      duration: "1-2 Tage",
      activities: [
        "Kostenlose Erstberatung (90 min)",
        "Zieldefinition & Erwartungsmanagement",
        "Grober Scope & Budget-Rahmen",
        "Stakeholder Identifikation",
        "Quick Win Potentiale",
        "Projektplanung & Timeline"
      ]
    },
    {
      step: 2,
      title: "Detaillierte Analyse",
      description: "Umfassende IST-Aufnahme und Anforderungsanalyse",
      icon: Search,
      duration: "1-3 Wochen",
      activities: [
        "IT-Landschaft Dokumentation",
        "Stakeholder Interviews",
        "Technical Deep-Dive Sessions",
        "Gap-Analyse & Pain Points",
        "Benchmark & Best-Practice Research",
        "Risiko- & Abhängigkeitsanalyse"
      ]
    },
    {
      step: 3,
      title: "Konzept & Empfehlungen",
      description: "Strategische Konzepte und detaillierte Empfehlungen",
      icon: FileText,
      duration: "1-2 Wochen",
      activities: [
        "Zielarchitektur & Design",
        "Detaillierte Empfehlungen",
        "ROI-Berechnung & Business Case",
        "Implementierung-Roadmap",
        "Technologie-Evaluation",
        "Vendor-Auswahl & Bewertung"
      ]
    },
    {
      step: 4,
      title: "Präsentation & Abstimmung",
      description: "Ergebnispräsentation und finale Abstimmung",
      icon: Users,
      duration: "1 Woche",
      activities: [
        "Management-Präsentation",
        "Technical Deep-Dive Workshops",
        "Feedback-Integration",
        "Konzept-Finalisierung",
        "Q&A Sessions",
        "Entscheidungsvorlage"
      ]
    },
    {
      step: 5,
      title: "Umsetzungsbegleitung",
      description: "Optionale Begleitung bei der Umsetzung",
      icon: Target,
      duration: "Nach Bedarf",
      activities: [
        "Implementation Support",
        "Change Management",
        "Vendor Management",
        "Quality Assurance",
        "Progress Monitoring",
        "Success Measurement"
      ]
    }
  ];

  const beratungsPakete = [
    {
      name: "Quickcheck",
      price: "€1.990",
      description: "Schnelle IT-Bewertung mit konkreten Empfehlungen",
      duration: "1 Woche",
      features: [
        "2 Tage Vor-Ort Assessment",
        "IT-Security Quickcheck",
        "Performance & Kapazitäts-Analyse",
        "Quick Win Identifikation",
        "Kompakte Empfehlungs-Liste",
        "1 Follow-up Meeting"
      ],
      suitable: "Kleine Unternehmen",
      deliverables: "Kompaktbericht (15-20 Seiten)",
      popular: false
    },
    {
      name: "Comprehensive Analysis",
      price: "€7.990",
      description: "Detaillierte IT-Analyse mit strategischen Empfehlungen",
      duration: "3-4 Wochen",
      features: [
        "Umfassende IT-Landschaft Analyse",
        "Stakeholder Workshops",
        "Technologie-Roadmap",
        "ROI-Berechnung & Business Case",
        "Detaillierte Implementierungsplanung",
        "3 Monate Follow-up Support",
        "Executive Summary für C-Level",
        "Technical Deep-Dive Dokumentation"
      ],
      suitable: "Mittelständische Unternehmen",
      deliverables: "Vollständiger Report (60-80 Seiten)",
      popular: true
    },
    {
      name: "Strategic Transformation",
      price: "€19.990",
      description: "Ganzheitliche Transformationsberatung mit Umsetzungsbegleitung",
      duration: "8-12 Wochen",
      features: [
        "Enterprise-Level IT-Strategy",
        "Multi-Stakeholder Workshops",
        "Change Management Konzept",
        "Vendor Evaluation & RFP Support",
        "Implementation Roadmap (3-5 Jahre)",
        "6 Monate Implementation Support",
        "Dedicated Senior Consultant",
        "C-Level Advisory Sessions",
        "Custom KPI Dashboard",
        "Quarterly Strategy Reviews"
      ],
      suitable: "Große Unternehmen & Konzerne",
      deliverables: "Executive Strategy Document (100+ Seiten)",
      popular: false
    }
  ];

  const expertiseAreas = [
    {
      icon: Cpu,
      title: "Infrastructure & Cloud",
      specializations: [
        "Hybrid Cloud Strategien",
        "Azure/AWS/Google Cloud",
        "VMware vSphere & Hyper-V",
        "Storage & Backup Konzepte",
        "Network Design & Security",
        "Disaster Recovery Planning"
      ]
    },
    {
      icon: Database,
      title: "Data & Analytics",
      specializations: [
        "SQL Server & Oracle Beratung",
        "Data Warehouse Design",
        "Business Intelligence Strategien",
        "Big Data & Analytics Platforms",
        "Data Migration Konzepte",
        "GDPR/DSGVO Compliance"
      ]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      specializations: [
        "IT-Security Assessment",
        "Penetration Testing",
        "GDPR/DSGVO Implementation",
        "ISO 27001 Beratung",
        "Zero Trust Architecture",
        "Incident Response Planning"
      ]
    },
    {
      icon: Layers,
      title: "Application & Integration",
      specializations: [
        "Enterprise Architecture",
        "API Strategy & Design",
        "Microservices Architecture",
        "DevOps & CI/CD",
        "Legacy System Modernization",
        "Software Selection & Evaluation"
      ]
    }
  ];

  const consultingBenefits = [
    {
      icon: Target,
      title: "Strategische Klarheit",
      description: "Klare IT-Vision und Roadmap für nachhaltigen Erfolg"
    },
    {
      icon: TrendingUp,
      title: "Kostenoptimierung",
      description: "Durchschnittlich 25% Kostenreduktion durch optimierte Prozesse"
    },
    {
      icon: Shield,
      title: "Risikominimierung",
      description: "Proaktive Identifikation und Minimierung von IT-Risiken"
    },
    {
      icon: Zap,
      title: "Innovation Enabler",
      description: "Technologische Grundlage für zukünftiges Wachstum"
    },
    {
      icon: Award,
      title: "Best Practice Know-how",
      description: "Bewährte Lösungsansätze aus 200+ erfolgreichen Projekten"
    },
    {
      icon: Users,
      title: "Change Management",
      description: "Begleitung Ihrer Teams durch den Transformationsprozess"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100">
      <Hero />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-green-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-teal-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
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
              className="inline-flex items-center bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-full shadow-2xl mb-8"
            >
              <Lightbulb className="w-6 h-6 mr-3" />
              <span className="text-lg font-semibold">IT-Beratung</span>
            </motion.div>
            
            <h1 className="text-7xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Strategische</span> IT-Beratung. Für Ihren Erfolg.
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Unsere erfahrenen IT-Berater entwickeln mit Ihnen maßgeschneiderte Strategien und Lösungskonzepte, 
              die Ihr Unternehmen nachhaltig voranbringen und Ihre IT-Investitionen optimal ausrichten.
            </p>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              Mit über 15 Jahren Beratungserfahrung und 200+ erfolgreichen Projekten sind wir Ihr verlässlicher 
              Partner für strategische IT-Entscheidungen und digitale Transformation.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Phone className="w-5 h-5 inline mr-2" />
                Kostenlose Erstberatung
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                <FileText className="w-5 h-5 inline mr-2" />
                Unverbindliche Analyse
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Consulting Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Warum IT-Beratung mit ScaleITS?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profitieren Sie von unserer langjährigen Erfahrung und bewährten Beratungsmethodik
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultingBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-green-500 to-teal-600 p-4 rounded-xl mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Beratungs-Services */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Unsere Beratungs-Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Spezialisierte Beratung für alle Bereiche Ihrer IT-Landschaft
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {beratungsServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-green-500 to-teal-600 p-4 rounded-xl mr-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 p-3 rounded-lg text-center">
                    <Clock className="w-5 h-5 text-green-600 mx-auto mb-1" />
                    <div className="text-xs font-semibold text-green-900">Dauer</div>
                    <div className="text-xs text-green-700">{service.duration}</div>
                  </div>
                  <div className="bg-teal-50 p-3 rounded-lg text-center">
                    <BarChart3 className="w-5 h-5 text-teal-600 mx-auto mb-1" />
                    <div className="text-xs font-semibold text-teal-900">Investition</div>
                    <div className="text-xs text-teal-700">{service.priceRange}</div>
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

      {/* Expertise Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Unsere Expertise-Bereiche</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tiefes Fachwissen in allen relevanten IT-Technologien und -Methoden
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-green-500 to-teal-600 p-4 rounded-xl mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">{area.title}</h3>
                <div className="space-y-2">
                  {area.specializations.map((spec, specIndex) => (
                    <div key={specIndex} className="flex items-center">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-xs text-gray-700">{spec}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Beratungs-Prozess */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Unser Beratungs-Prozess</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strukturierte Herangehensweise für optimale Beratungsergebnisse
            </p>
          </motion.div>

          <div className="space-y-8">
            {beratungsProzess.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-br from-green-500 to-teal-600 p-4 rounded-xl mr-4">
                        <phase.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-green-600 mb-1">Phase {phase.step}</div>
                        <h3 className="text-xl font-bold text-gray-900">{phase.title}</h3>
                        <p className="text-gray-600">{phase.description}</p>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-3 rounded-lg mb-6 text-center">
                      <div className="text-sm font-semibold text-green-900">Typische Dauer</div>
                      <div className="text-lg font-bold text-green-700">{phase.duration}</div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-3">
                      {phase.activities.map((activity, activityIndex) => (
                        <div key={activityIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {phase.step}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Beratungs-Pakete */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Beratungs-Pakete</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wählen Sie das passende Beratungspaket für Ihre Anforderungen
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {beratungsPakete.map((paket, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative bg-white rounded-3xl p-8 shadow-xl border-2 transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                  paket.popular ? 'border-green-500 ring-4 ring-green-100' : 'border-gray-200'
                }`}
              >
                {paket.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Beliebt
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{paket.name}</h3>
                  <p className="text-gray-600 mb-4">{paket.description}</p>
                  <div className="flex items-end justify-center mb-2">
                    <span className="text-4xl font-bold text-gray-900">{paket.price}</span>
                  </div>
                  <div className="flex justify-center gap-2 mb-4">
                    <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {paket.duration}
                    </div>
                    <div className="inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {paket.suitable}
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {paket.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-green-50 p-3 rounded-lg mb-6 text-center">
                  <div className="text-sm font-semibold text-green-900">Deliverables</div>
                  <div className="text-sm text-green-700">{paket.deliverables}</div>
                </div>

                <Link
                  href="/contact"
                  className={`block w-full text-center py-4 rounded-2xl font-semibold transition-all duration-300 ${
                    paket.popular
                      ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white hover:from-green-700 hover:to-teal-700 shadow-lg'
                      : 'border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
                  }`}
                >
                  Angebot anfragen
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Bereit für strategische IT-Beratung?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Lassen Sie uns gemeinsam Ihre IT-Strategie entwickeln und Ihr Unternehmen digital voranbringen.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Phone className="w-5 h-5 inline mr-2" />
                Kostenlose Erstberatung
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 inline mr-2" />
                Unverbindliche Anfrage
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}




