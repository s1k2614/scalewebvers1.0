'use client';

import { motion } from 'framer-motion';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import {
  TrendingUp, Users, ShoppingCart, Truck, Settings, Brain,
  ArrowRight, CheckCircle, Target, BarChart3, Zap, Award,
  ArrowLeft, DollarSign, Clock, Shield
} from 'lucide-react';
import Link from 'next/link';

export default function DynamicsPage() {
  const dynamicsModules = [
    {
      category: "Sales & Marketing",
      icon: TrendingUp,
      modules: [
        {
          name: "Dynamics 365 Sales",
          description: "Verkaufsautomatisierung und Lead-Management",
          features: [
            "Lead- und Opportunity-Management",
            "Verkaufsprognosen und Analytics",
            "Automatisierte Workflows",
            "Mobile Sales Apps",
            "Integration mit Outlook und Teams"
          ]
        },
        {
          name: "Dynamics 365 Marketing",
          description: "Marketing Automation und Customer Journey",
          features: [
            "E-Mail-Marketing Kampagnen",
            "Lead-Scoring und -Nurturing",
            "Event-Management",
            "Customer Journey Mapping",
            "Marketing Analytics"
          ]
        }
      ]
    },
    {
      category: "Customer Service",
      icon: Users,
      modules: [
        {
          name: "Dynamics 365 Customer Service",
          description: "Omnichannel Customer Service Lösung",
          features: [
            "Multi-Channel Support (Chat, E-Mail, Telefon)",
            "Knowledge Base Management",
            "Case Management und SLA-Tracking",
            "Customer Self-Service Portal",
            "AI-gestützte Chatbots"
          ]
        },
        {
          name: "Dynamics 365 Field Service",
          description: "Field Service Management für Außendienst",
          features: [
            "Arbeitsauftrags-Management",
            "Ressourcen-Planung und -Optimierung",
            "Mobile Apps für Techniker",
            "IoT-Integration für Predictive Maintenance",
            "Zeiterfassung und Abrechnung"
          ]
        }
      ]
    },
    {
      category: "Finance & Operations",
      icon: DollarSign,
      modules: [
        {
          name: "Dynamics 365 Finance",
          description: "Finanzmanagement und Buchhaltung",
          features: [
            "Finanzberichterstattung",
            "Budgetierung und Planung",
            "Kostenrechnung",
            "Anlagenbuchhaltung",
            "Cashflow-Management"
          ]
        },
        {
          name: "Dynamics 365 Supply Chain Management",
          description: "Lieferketten- und Lageroptimierung",
          features: [
            "Bestandsmanagement",
            "Nachfrageplanung",
            "Lieferantenmanagement",
            "Qualitätsmanagement",
            "Transport- und Logistikoptimierung"
          ]
        }
      ]
    },
    {
      category: "Human Resources",
      icon: Users,
      modules: [
        {
          name: "Dynamics 365 Human Resources",
          description: "HR-Management und Mitarbeiterentwicklung",
          features: [
            "Mitarbeiter-Onboarding",
            "Leistungsmanagement",
            "Vergütungsmanagement",
            "Urlaubs- und Abwesenheitsverwaltung",
            "Recruiting und Talent-Management"
          ]
        }
      ]
    }
  ];

  const dynamicsBenefits = [
    {
      title: "KI-gestützte Insights",
      description: "Intelligente Analysen und Vorhersagen für bessere Entscheidungen",
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Nahtlose Integration",
      description: "Vollständige Integration mit Microsoft 365 und Azure",
      icon: Settings,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Mobile-First Design",
      description: "Optimierte Benutzeroberfläche für alle Geräte",
      icon: Zap,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Branchenspezifisch",
      description: "Vorgefertigte Lösungen für verschiedene Branchen",
      icon: Target,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <Link
              href="/microsoft"
              className="inline-flex items-center text-scaleit-gray hover:text-scaleit-red transition-colors duration-200 mb-8"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Zurück zu Microsoft
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full shadow-2xl mb-8"
            >
              <TrendingUp className="w-8 h-8 mr-4" />
              <span className="text-xl font-bold">Dynamics 365</span>
            </motion.div>

            <h1 className="text-7xl font-bold text-gray-900 mb-6">
              Intelligente Business
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Applications
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              Dynamics 365 ist die KI-gestützte Business-Applikationsplattform von Microsoft,
              die Vertriebs-, Service- und Finanzprozesse intelligent miteinander verbindet.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Dynamics Beratung
                <ArrowRight className="w-5 h-5 inline ml-2" />
              </Link>

              <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                <a href="https://dynamics.microsoft.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Dynamics 365 entdecken
                </a>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dynamics Modules Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Dynamics 365 Module</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Umfassende Lösungen für alle Geschäftsbereiche Ihres Unternehmens
            </p>
          </motion.div>

          <div className="space-y-16">
            {dynamicsModules.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              >
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-4">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{category.category}</h3>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {category.modules.map((module, moduleIndex) => (
                    <motion.div
                      key={module.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: moduleIndex * 0.1 }}
                      className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300"
                    >
                      <h4 className="text-2xl font-bold text-gray-900 mb-4">{module.name}</h4>
                      <p className="text-gray-600 mb-6">{module.description}</p>

                      <div className="space-y-3">
                        {module.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Warum Dynamics 365?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Die Vorteile der intelligenten Business-Applikationsplattform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dynamicsBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${benefit.color} flex items-center justify-center mx-auto mb-6`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Professionelle Implementierung
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Wir begleiten Sie von der Planung bis zur erfolgreichen Einführung Ihrer Dynamics 365 Lösung.
                Profitieren Sie von unserer langjährigen Erfahrung und Microsoft-Zertifizierungen.
              </p>

              <div className="space-y-4">
                {[
                  "Anforderungsanalyse und Konzeption",
                  "Systemarchitektur und Integration",
                  "Datenmigration und Customizing",
                  "Schulung und Change Management",
                  "Go-Live Support und Wartung"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Dynamics 365 FastTrack</h3>
              <div className="space-y-4">
                {[
                  "Schnellere Implementierung",
                  "Bewährte Methoden",
                  "Expertenunterstützung",
                  "Kosteneinsparungen"
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <Award className="w-4 h-4" />
                    </div>
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Branchenspezifische Lösungen</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vorgefertigte Lösungen für verschiedene Branchen und Geschäftsmodelle
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                industry: "Fertigung",
                features: ["Produktionsplanung", "Qualitätsmanagement", "Supply Chain", "IoT-Integration"]
              },
              {
                industry: "Handel",
                features: ["Omnichannel-Commerce", "Bestandsoptimierung", "Kundenbindung", "Analytics"]
              },
              {
                industry: "Dienstleistungen",
                features: ["Projektmanagement", "Ressourcenplanung", "Zeiterfassung", "Rechnungswesen"]
              },
              {
                industry: "Gesundheitswesen",
                features: ["Patientenmanagement", "Compliance", "Telemedizin", "Datenschutz"]
              },
              {
                industry: "Finanzdienstleistungen",
                features: ["Risikomanagement", "Compliance", "Kunden-Onboarding", "Analytics"]
              },
              {
                industry: "Bauwesen",
                features: ["Projektmanagement", "Ressourcenplanung", "Kostenkontrolle", "Qualitätsmanagement"]
              }
            ].map((solution, index) => (
              <motion.div
                key={solution.industry}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.industry}</h3>
                <div className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md-text-5xl font-bold text-white mb-6">
              Transformieren Sie Ihr Business
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Entdecken Sie, wie Dynamics 365 Ihr Unternehmen intelligenter macht
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Kostenlose Dynamics Beratung
              </Link>
              <Link
                href="/microsoft"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Alle Microsoft Produkte
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}