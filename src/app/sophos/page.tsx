'use client';

import { motion } from 'framer-motion';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import {
  Shield, CheckCircle, Star, ArrowRight,
  Zap, Lock, Globe, Network, Cloud, Monitor,
  Users, Award, ChevronRight
} from 'lucide-react';

export default function SophosPage() {
  const features = [
    'Next-Generation Firewall',
    'Advanced Threat Protection',
    'Zero-Day Malware Schutz',
    'SD-WAN Integration',
    'Cloud-basierte Management',
    '24/7 Security Updates',
    'Active Threat Response',
    'Synchronized Security',
    'TLS 1.3 Decryption',
    'Deep Packet Inspection',
    'Application Boost',
    'Central Cloud Management'
  ];

  const benefits = [
    '99.9% Threat Detection Rate',
    'Reduzierte Sicherheitsvorfälle um 95%',
    'Einfache Verwaltung über Cloud',
    'Skalierbare Lösung für alle Unternehmensgrößen',
    'Automatische Bedrohungsreaktion',
    'Nahezu native Performance',
    'Branchenführende Preis-Leistung',
    'Umfassende Integration mit Sophos-Ökosystem'
  ];

  const stats = [
    { value: '500+', label: 'Implementierte Firewalls', icon: Shield },
    { value: '99.9%', label: 'Threat Detection Rate', icon: Zap },
    { value: '24/7', label: 'Security Monitoring', icon: Monitor },
    { value: '95%', label: 'Weniger Sicherheitsvorfälle', icon: Lock }
  ];

  const advancedFeatures = [
    {
      title: 'Active Threat Response',
      description: 'Stoppt aktive Bedrohungen automatisch und koordiniert die Reaktion mit anderen Sophos-Produkten.',
      icon: Zap
    },
    {
      title: 'Xstream Architecture',
      description: 'Beschleunigt und entlastet wichtigen SaaS-, SD-WAN-, VPN- und Cloud-Traffic auf Hardware- oder Softwareebene.',
      icon: Network
    },
    {
      title: 'Synchronized Security',
      description: 'Koordiniert Sicherheitsmaßnahmen über alle Sophos-Produkte hinweg für umfassenden Schutz.',
      icon: Shield
    },
    {
      title: 'Cloud-basierte Bedrohungsanalyse',
      description: 'Offloaded Analyse von Bedrohungen in die Cloud für maximale Performance und Sicherheit.',
      icon: Cloud
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-gradient-to-r from-red-600 to-red-800 text-white px-6 py-3 rounded-full mb-8">
              <Shield className="w-6 h-6 mr-3" />
              <span className="text-lg font-bold">Sophos Firewalls</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Next-Generation
              <span className="block bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                Firewall Protection
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Umfassender Netzwerkschutz mit Advanced Threat Protection, Zero-Day-Schutz und intelligenter Traffic-Analyse.
              Schützen Sie Ihr Unternehmen vor modernen Cyber-Bedrohungen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-full mb-4">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Erweiterte Sicherheitsfunktionen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sophos Firewall bietet mehr als nur Firewall-Funktionalität - es ist das Herzstück der besten Netzwerksicherheitsplattform der Welt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advancedFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Highlights */}
      <section className="pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Technologie-Highlights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Branchenführende Technologien für maximale Sicherheit und Performance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Network className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Xstream SD-WAN</h3>
              <p className="text-gray-600 mb-4">
                Optimale Netzwerk-Performance, Flexibilität und Resilienz mit der neuesten SD-WAN-Technologie.
              </p>
              <ul className="text-left space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Xstream FastPath Beschleunigung
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Performance-basierte Routenoptimierung
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Point-and-Click Orchestrierung
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Cloud className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud-Integration</h3>
              <p className="text-gray-600 mb-4">
                Nahtlose Integration mit Cloud-Sicherheitsdiensten für erweiterten Schutz und Performance.
              </p>
              <ul className="text-left space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Network Detection and Response (NDR)
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  DNS Protection
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Zero-Day Threat Protection
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Monitor className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Central Management</h3>
              <p className="text-gray-600 mb-4">
                Einheitliche Cloud-Management-Konsole für alle Sophos-Produkte und -Dienste.
              </p>
              <ul className="text-left space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Single Console für alle Produkte
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Cloud-basierte Berichterstattung
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Zero-Touch Deployment
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Schützen Sie Ihr Netzwerk
              <span className="block">mit Sophos Firewalls</span>
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam die optimale Firewall-Lösung für Ihr Unternehmen finden.
              Unsere zertifizierten Sophos-Experten beraten Sie gerne.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-red-600 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50"
              >
                <Users className="w-5 h-5 mr-3" />
                Kostenlose Beratung
              </Link>
              <Link
                href="/produkte"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300"
              >
                <Network className="w-5 h-5 mr-3" />
                Alle Produkte
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}