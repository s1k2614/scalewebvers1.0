'use client';

import { motion } from 'framer-motion';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import {
  Mail, FileText, Video, Calendar, Cloud, Users,
  ArrowRight, CheckCircle, Shield, Zap, Globe, Settings,
  ArrowLeft, MessageSquare, BarChart3, Smartphone, Monitor, Award
} from 'lucide-react';
import Link from 'next/link';

export default function Office365Page() {
  const officeApps = [
    {
      category: "Kernanwendungen",
      icon: FileText,
      apps: [
        {
          name: "Word",
          description: "Professionelle Textverarbeitung und Dokumentenerstellung",
          features: [
            "Erweiterte Formatierungsoptionen",
            "Zusammenarbeit in Echtzeit",
            "Intelligente Rechtschreibprüfung",
            "Cloud-Speicherung und -Freigabe",
            "Mobile Apps für alle Geräte"
          ]
        },
        {
          name: "Excel",
          description: "Leistungsstarke Tabellenkalkulation und Datenanalyse",
          features: [
            "Erweiterte Formeln und Funktionen",
            "Pivot-Tabellen und Datenanalyse",
            "Diagramme und Visualisierungen",
            "Power Query für Datenimport",
            "Zusammenarbeit und Kommentare"
          ]
        },
        {
          name: "PowerPoint",
          description: "Professionelle Präsentationen und visuelle Kommunikation",
          features: [
            "Designer für automatische Layouts",
            "3D-Modelle und Animationen",
            "Presenter Coach für bessere Vorträge",
            "Zusammenarbeit in Echtzeit",
            "Streaming und Live-Präsentationen"
          ]
        }
      ]
    },
    {
      category: "Kommunikation & Zusammenarbeit",
      icon: Users,
      apps: [
        {
          name: "Outlook",
          description: "Professionelles E-Mail-Management und Kalender",
          features: [
            "Intelligente E-Mail-Organisation",
            "Kalender-Management und Terminplanung",
            "Aufgaben und Erinnerungen",
            "Integration mit Teams und anderen Apps",
            "Mobile Synchronisation"
          ]
        },
        {
          name: "Teams",
          description: "Vereinheitlichte Kommunikations- und Kollaborationsplattform",
          features: [
            "Chat und Videokonferenzen",
            "Dateifreigabe und Zusammenarbeit",
            "Integration mit Office-Apps",
            "Live-Events und Webinare",
            "Mobile Apps und Desktop-Client"
          ]
        },
        {
          name: "OneDrive",
          description: "Persönlicher Cloud-Speicher für Dateien und Dokumente",
          features: [
            "1 TB Speicherplatz (erweiterbar)",
            "Automatische Synchronisation",
            "Dateifreigabe und Zusammenarbeit",
            "Versionsverlauf und Wiederherstellung",
            "Offline-Zugriff"
          ]
        }
      ]
    },
    {
      category: "Business-Apps",
      icon: BarChart3,
      apps: [
        {
          name: "SharePoint",
          description: "Plattform für Intranet, Dokumentenmanagement und Team-Websites",
          features: [
            "Team-Websites und Intranet",
            "Dokumentenbibliotheken",
            "Workflows und Automatisierung",
            "Suchfunktionen und Metadaten",
            "Integration mit Office-Apps"
          ]
        },
        {
          name: "OneNote",
          description: "Digitales Notizbuch für Ideen, Notizen und Zusammenarbeit",
          features: [
            "Strukturierte Notizen und Skizzen",
            "Audio- und Videoaufzeichnungen",
            "Zusammenarbeit in Echtzeit",
            "Integration mit anderen Office-Apps",
            "Web-Clipper für Web-Inhalte"
          ]
        },
        {
          name: "Planner",
          description: "Aufgabenverwaltung und Projektplanung für Teams",
          features: [
            "Aufgabenlisten und Boards",
            "Zeitplanung und Meilensteine",
            "Dateianhänge und Kommentare",
            "Berichte und Fortschrittsverfolgung",
            "Integration mit Teams"
          ]
        }
      ]
    }
  ];

  const officeBenefits = [
    {
      title: "Immer verfügbar",
      description: "Zugriff auf Ihre Dateien und Apps von überall und jedem Gerät",
      icon: Globe,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Automatische Updates",
      description: "Stets die neuesten Features und Sicherheitsupdates",
      icon: Zap,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Enterprise Security",
      description: "Umfassender Schutz Ihrer Daten und Kommunikation",
      icon: Shield,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "KI-gestützte Features",
      description: "Intelligente Assistenten und automatisierte Workflows",
      icon: Settings,
      color: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-green-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
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
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-full shadow-2xl mb-8"
            >
              <Mail className="w-8 h-8 mr-4" />
              <span className="text-xl font-bold">Microsoft 365</span>
            </motion.div>

            <h1 className="text-7xl font-bold text-gray-900 mb-6">
              Moderne Produktivität für
              <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                jedes Unternehmen
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              Microsoft 365 ist die vollständige Cloud-basierte Produktivitätsplattform,
              die Office-Anwendungen, Cloud-Speicher und KI-gestützte Tools vereint.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Microsoft 365 Beratung
                <ArrowRight className="w-5 h-5 inline ml-2" />
              </Link>

              <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                <a href="https://www.microsoft.com/de-de/microsoft-365" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Monitor className="w-5 h-5 mr-2" />
                  Microsoft 365 entdecken
                </a>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Office Apps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Microsoft 365 Anwendungen</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Umfassende Suite an Produktivitätsanwendungen für moderne Arbeitsplätze
            </p>
          </motion.div>

          <div className="space-y-16">
            {officeApps.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              >
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg mr-4">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{category.category}</h3>
                </div>

                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {category.apps.map((app, appIndex) => (
                    <motion.div
                      key={app.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: appIndex * 0.1 }}
                      className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300"
                    >
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{app.name}</h4>
                      <p className="text-gray-600 mb-4">{app.description}</p>

                      <div className="space-y-2">
                        {app.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Warum Microsoft 365?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Die Vorteile der modernen Cloud-basierten Produktivitätsplattform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {officeBenefits.map((benefit, index) => (
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

      {/* Plans Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Microsoft 365 Business Pläne</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Der richtige Plan für jedes Unternehmen und jede Anforderung
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: "Business Basic",
                price: "6 €/Monat",
                features: [
                  "Web- und Mobile-Apps",
                  "1 TB OneDrive Speicher",
                  "Teams für Chat und Meetings",
                  "Exchange Online (50 GB)",
                  "SharePoint und OneDrive"
                ],
                popular: false
              },
              {
                name: "Business Standard",
                price: "12 €/Monat",
                features: [
                  "Alle Business Basic Features",
                  "Desktop-Apps für Windows/Mac",
                  "Azure AD Premium P1",
                  "Intune für Geräteverwaltung",
                  "Teams mit erweiterten Features"
                ],
                popular: true
              },
              {
                name: "Business Premium",
                price: "22 €/Monat",
                features: [
                  "Alle Business Standard Features",
                  "Azure AD Premium P1",
                  "Intune für erweiterte Sicherheit",
                  "Azure Information Protection",
                  "5 TB OneDrive Speicher",
                  "Windows 10/11 Pro Upgrade"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white rounded-2xl shadow-xl border-2 ${
                  plan.popular ? 'border-blue-500' : 'border-gray-100'
                } overflow-hidden hover:shadow-2xl transition-all duration-300 relative`}
              >
                {plan.popular && (
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Beliebt
                  </div>
                )}

                <div className="p-6 bg-gradient-to-r from-gray-50 to-blue-50">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-1">{plan.price}</div>
                  <div className="text-gray-600">pro Benutzer/Monat</div>
                </div>

                <div className="p-6">
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white hover:from-blue-700 hover:to-green-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}>
                    {plan.popular ? 'Jetzt starten' : 'Plan wählen'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Enterprise-Grade Sicherheit
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Microsoft 365 bietet umfassende Sicherheitsfeatures zum Schutz Ihrer Daten
                und zur Einhaltung gesetzlicher Vorschriften.
              </p>

              <div className="space-y-4">
                {[
                  "Azure Active Directory für Identitätsverwaltung",
                  "Multi-Factor Authentication (MFA)",
                  "Data Loss Prevention (DLP)",
                  "Advanced Threat Protection",
                  "Compliance Manager für regulatorische Anforderungen",
                  "Endpoint Manager für Gerätesicherheit"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-900 to-green-900 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Microsoft Defender</h3>
              <div className="space-y-4">
                {[
                  "Endpoint Protection",
                  "Email Security",
                  "Identity Protection",
                  "Information Protection",
                  "Cloud Security"
                ].map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <Award className="w-4 h-4" />
                    </div>
                    <span>{service}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md-text-5xl font-bold text-white mb-6">
              Bereit für Microsoft 365?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Starten Sie Ihre digitale Transformation mit der weltweit führenden Produktivitätsplattform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Kostenlose Microsoft 365 Beratung
              </Link>
              <Link
                href="/microsoft"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
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