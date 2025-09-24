'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { 
  Shield, CheckCircle, ArrowRight, Users, Building, Globe, 
  Zap, Eye, Server, Lock, AlertTriangle, Database, Network,
  Monitor, Clock, TrendingUp, FileText, Download, Play,
  Search, UserX, CreditCard, ExternalLink, Target
} from 'lucide-react';
import Link from 'next/link';

export default function SecutecPage() {
  const [activeProduct, setActiveProduct] = useState('securedns');

  const products = [
    {
      id: 'securedns',
      name: 'SecureDNS',
      icon: Shield,
      description: 'DNS-basierte Sicherheitslösung',
      shortDesc: 'Malware und Phishing mit intelligenter DNS-Filterung überlisten'
    },
    {
      id: 'darknet',
      name: 'Darknet Monitoring',
      icon: Search,
      description: 'Darknet-Überwachung & Threat Intelligence',
      shortDesc: 'Bringen Sie Licht ins Darknet mit 24/7 Monitoring Service'
    }
  ];

  // SecureDNS Content
  const secureDnsFeatures = [
    {
      icon: Shield,
      title: "Proaktives Abwehren und Warnen",
      description: "Überwachen Sie Ihre DNS-Verbindungen 24/7. Alle Anfragen an schädlichen Domänen werden blockiert."
    },
    {
      icon: Network,
      title: "Vollständige Netzwerksicherheit",
      description: "SecureDNS schützt jedes Element in Ihrem Netzwerk - PCs, Server, IoT-Geräte und mehr."
    },
    {
      icon: Clock,
      title: "Schnelle Implementierung",
      description: "Der Service kann in weniger als 60 Minuten in jedes IT-Setup implementiert werden."
    },
    {
      icon: Users,
      title: "Maßgeschneiderte Lösung",
      description: "Individuell angepasste Allow- und Deny-Listings entsprechend Ihren Anforderungen."
    },
    {
      icon: Database,
      title: "Multi-Vendor-Datenbank",
      description: "Kombinierte Datenbank verschiedener namhafter Sicherheitsanbieter und CERT-Feeds."
    },
    {
      icon: Globe,
      title: "Systemunabhängig",
      description: "Nahtlose Integration in Ihr aktuelles Netzwerk- und Sicherheits-Setup."
    }
  ];

  const secureDnsStats = [
    { value: "70%", label: "der neu registrierten Domains sind für Cyberkriminalität eingerichtet" },
    { value: "20.000", label: "verdächtige URLs werden täglich analysiert" },
    { value: "60 Min", label: "Implementierungszeit" },
    { value: "24/7", label: "Überwachung Ihrer DNS-Verbindungen" }
  ];

  // Darknet Monitoring Content
  const darknetFeatures = [
    {
      icon: Search,
      title: "24/7 Darknet-Überwachung",
      description: "Kontinuierliche Filterung des Darknets nach Firmen- und Domänennamen, Marken und Schlüsselwörtern."
    },
    {
      icon: AlertTriangle,
      title: "Früherkennung von Datenschutzverletzungen",
      description: "Sofortige Benachrichtigung, wenn Ihre Unternehmensdaten im Darknet auftauchen."
    },
    {
      icon: UserX,
      title: "Gestohlene Zugangsdaten",
      description: "Überwachung von Passwörtern, Keylogger-Daten und Credentials Ihrer Organisation."
    },
    {
      icon: Building,
      title: "Third-Party-Überwachung",
      description: "Monitoring von Supply Chain-Risiken und Drittanbieter-Sicherheitsverletzungen."
    },
    {
      icon: TrendingUp,
      title: "Threat Intelligence",
      description: "Umfassendes Repository mit aktueller Cyber Threat Intelligence für bessere Risikoeinschätzung."
    },
    {
      icon: Target,
      title: "Priorisierte Risikobewertung",
      description: "Effiziente Priorisierung und schnelle Beseitigung potenzieller Sicherheitsrisiken."
    }
  ];

  const darknetStats = [
    { value: "33%", label: "der Ransomware-Opfer 2023 hatten zuvor eine Infostealer-Infektion" },
    { value: "24/7", label: "automatisierte Darknet-Scans" },
    { value: "SIAM", label: "Database Integration für umfassende Threat Intelligence" },
    { value: "Real-time", label: "Benachrichtigungen bei kritischen Funden" }
  ];

  const commonBenefits = [
    "NIS2-Compliance Unterstützung",
    "Integration mit bestehender Sicherheitsinfrastruktur",
    "Umfassendes Secutec-Portal Dashboard",
    "24/7 Support und Monitoring",
    "Keine zusätzliche Hardware erforderlich",
    "SIAM Database Access"
  ];

  const currentProduct = products.find(p => p.id === activeProduct);
  const currentFeatures = activeProduct === 'securedns' ? secureDnsFeatures : darknetFeatures;
  const currentStats = activeProduct === 'securedns' ? secureDnsStats : darknetStats;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="relative pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-sky-500 to-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                {currentProduct?.icon && <currentProduct.icon className="w-16 h-16 text-sky-200 mr-4" />}
                <h1 className="text-5xl font-bold">Secutec Cybersecurity</h1>
              </div>
              <p className="text-xl text-sky-100 mb-8 max-w-3xl mx-auto">
                Umfassende Cybersecurity-Lösungen für moderne Unternehmen - DNS-Schutz und Darknet-Intelligence
              </p>
              
              {/* Product Selection Tabs */}
              <div className="bg-white/20 backdrop-blur-md rounded-xl p-3 inline-flex mb-8 shadow-2xl border border-white/30">
                {products.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => setActiveProduct(product.id)}
                    className={`flex items-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform ${
                      activeProduct === product.id
                        ? 'bg-white text-sky-600 shadow-xl scale-105 border-2 border-sky-200'
                        : 'text-white hover:text-sky-100 hover:bg-white/20 hover:scale-102 border-2 border-transparent hover:shadow-lg'
                    }`}
                  >
                    <product.icon className={`w-6 h-6 mr-3 ${
                      activeProduct === product.id ? 'text-sky-500' : 'text-sky-200'
                    }`} />
                    <span className="text-lg">{product.name}</span>
                  </button>
                ))}
              </div>

              <motion.div
                key={activeProduct}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-8"
              >
                <h2 className="text-3xl font-bold mb-4">{currentProduct?.name}</h2>
                <p className="text-lg text-sky-100 max-w-2xl mx-auto">
                  {currentProduct?.shortDesc}
                </p>
              </motion.div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-sky-600 hover:bg-sky-50 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Kostenlose Demo anfordern
                </Link>
                <button className="border-2 border-sky-200 text-sky-100 hover:bg-sky-400 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Datenblatt herunterladen
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              key={`stats-${activeProduct}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {currentStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-4xl font-bold text-sky-600 mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Warum {currentProduct?.name}?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {activeProduct === 'securedns' 
                  ? "Umfassender DNS-Schutz, der Malware, Phishing und andere Cyber-Threats bereits am Netzwerk-Gateway stoppt"
                  : "Proaktive Darknet-Überwachung für frühzeitige Erkennung von Sicherheitsbedrohungen und Datenlecks"
                }
              </p>
            </motion.div>

            <motion.div
              key={`features-${activeProduct}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {currentFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Product-specific sections */}
        {activeProduct === 'securedns' && (
          <>
            {/* How SecureDNS Works Section */}
            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Wie SecureDNS funktioniert
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Intelligente DNS-Filterung mit der SIAM-Datenbank (Secutec Integrated Anti-Malware Database)
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="bg-sky-50 rounded-xl p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Der Prozess im Detail:</h3>
                      <div className="space-y-4">
                        {[
                          { step: 1, title: "DNS-Anfrage", desc: "Jede DNS-Anfrage wird an Secutec SecureDNS-Server weitergeleitet" },
                          { step: 2, title: "SIAM-Abgleich", desc: "Domain-Reputation wird mit der SIAM-Datenbank abgeglichen" },
                          { step: 3, title: "Sofortige Entscheidung", desc: "Blockierung oder Weiterleitung ohne Verzögerung" },
                          { step: 4, title: "Benachrichtigung", desc: "Sofortige Alerts bei kritischen Vorfällen" }
                        ].map((item, index) => (
                          <div key={index} className="flex items-start">
                            <div className="bg-sky-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">{item.step}</div>
                            <div>
                              <h4 className="font-semibold text-gray-900">{item.title}</h4>
                              <p className="text-gray-600">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                  >
                    <div className="bg-gradient-to-br from-sky-100 to-blue-100 rounded-xl p-8">
                      <Database className="w-24 h-24 text-sky-500 mx-auto mb-6" />
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">SIAM-Datenbank</h3>
                      <p className="text-gray-600 mb-6">
                        Die Secutec Integrated Advanced Malware Database führt Informationen aus Tausenden von Quellen zusammen 
                        und wird rund um die Uhr aktualisiert.
                      </p>
                      <div className="bg-white rounded-lg p-4">
                        <div className="text-sky-600 font-bold text-lg">Kontinuierliche Updates</div>
                        <div className="text-gray-500 text-sm">24/7 Threat Intelligence</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
          </>
        )}

        {activeProduct === 'darknet' && (
          <>
            {/* How Darknet Monitoring Works Section */}
            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Darknet-Überwachung im Detail
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Cyber Threat Intelligence kombiniert mit umfangreichen Datenquellen für proaktiven Schutz
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="bg-gray-900 text-white rounded-xl p-8">
                      <h3 className="text-2xl font-bold mb-6">Was wir überwachen:</h3>
                      <div className="space-y-4">
                        {[
                          { icon: Building, title: "Firmen- und Domänennamen", desc: "Kontinuierliche Überwachung Ihrer Unternehmensidentität" },
                          { icon: Target, title: "Marken und Schlüsselwörter", desc: "Schutz Ihres geistigen Eigentums und Ihrer Markenrechte" },
                          { icon: Users, title: "Management-Namen", desc: "Überwachung von Führungskräften und kritischen Personen" },
                          { icon: CreditCard, title: "Gestohlene Credentials", desc: "Erkennung kompromittierter Zugangsdaten und Passwörter" }
                        ].map((item, index) => (
                          <div key={index} className="flex items-start">
                            <item.icon className="w-6 h-6 text-sky-400 mr-4 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold">{item.title}</h4>
                              <p className="text-gray-300 text-sm">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="bg-sky-50 rounded-xl p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Proaktiver Schutz</h3>
                      <div className="space-y-6">
                        <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                          <h4 className="font-semibold text-gray-900">Früherkennung</h4>
                          <p className="text-gray-600 text-sm">Identifizierung von Bedrohungen bevor sie aktiv werden</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500">
                          <h4 className="font-semibold text-gray-900">Supply Chain</h4>
                          <p className="text-gray-600 text-sm">Überwachung von Drittanbieter-Risiken und Partnern</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                          <h4 className="font-semibold text-gray-900">Compliance</h4>
                          <p className="text-gray-600 text-sm">Unterstützung bei NIS2 und anderen Compliance-Anforderungen</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* Benefits Section */}
        <section className="py-20 bg-sky-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">
                Zusätzliche Vorteile
              </h2>
              <p className="text-xl text-sky-100 max-w-3xl mx-auto">
                Alle Secutec-Lösungen bieten weit mehr als nur Grundschutz
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commonBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center bg-sky-500 rounded-lg p-4"
                >
                  <CheckCircle className="w-6 h-6 text-sky-200 mr-3 flex-shrink-0" />
                  <span className="font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* NIS2 Compliance Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Der Weg zur NIS2-Compliance
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Secutec-Lösungen leisten einen wesentlichen Beitrag zur NIS2-Compliance Ihrer Organisation
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-sky-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Schützen</h3>
                      <p className="text-gray-600">Data Security, Protective Technology, Identity Management</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Eye className="w-6 h-6 text-sky-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Erkennen</h3>
                      <p className="text-gray-600">Anomalien und Ereignisse, kontinuierliche Sicherheitsüberwachung, Risk Assessment</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <TrendingUp className="w-6 h-6 text-sky-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Respond</h3>
                      <p className="text-gray-600">Analysen und Incident Response Procedures</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-sky-50 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Compliance-Unterstützung</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border-l-4 border-sky-500">
                    <h4 className="font-semibold text-gray-900">Kontinuierliche Überwachung</h4>
                    <p className="text-gray-600 text-sm">24/7 Monitoring entspricht den NIS2-Anforderungen</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-sky-500">
                    <h4 className="font-semibold text-gray-900">Incident Detection</h4>
                    <p className="text-gray-600 text-sm">Automatische Erkennung und Meldung von Sicherheitsvorfällen</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-sky-500">
                    <h4 className="font-semibold text-gray-900">Dokumentation</h4>
                    <p className="text-gray-600 text-sm">Umfassende Logs und Reports für Compliance-Nachweise</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-sky-500 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Bereit, Ihr Unternehmen vor Cyber-Threats zu schützen?
              </h2>
              <p className="text-xl text-sky-100 mb-8">
                Entdecken Sie aus erster Hand, wie Secutec-Lösungen Ihre digitalen Assets schützen können
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-sky-600 hover:bg-sky-50 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Kostenlose Demo anfordern
                </Link>
                <Link href="/contact" className="border-2 border-sky-200 text-sky-100 hover:bg-sky-400 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Beratung vereinbaren
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
