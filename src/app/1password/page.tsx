'use client';

import { motion } from 'framer-motion';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import {
  Key, CheckCircle, Star, ArrowRight,
  Lock, Users, Shield, Smartphone, Cloud,
  Monitor, Award, ChevronRight, Zap
} from 'lucide-react';

export default function OnePasswordPage() {
  const features = [
    'Zero-Knowledge Architektur',
    'Team-Passwort-Sharing',
    'Automatische Passwort-Generierung',
    'Biometrische Authentifizierung',
    'Sichere Datei-Speicherung',
    'Emergency Access',
    'Device Trust',
    'Extended Access Management',
    'SSO-Integration',
    'Compliance-Management',
    'Security Reports',
    'Multi-Faktor Authentifizierung'
  ];

  const benefits = [
    '100% Zero-Knowledge Sicherheit',
    'Reduzierte Support-Tickets um 80%',
    'Compliance mit DSGVO und ISO 27001',
    'Nahtlose Integration mit allen Systemen',
    'Verbesserte Produktivität',
    'Automatische Sicherheitsupdates',
    'Zentrales Management',
    'Granulare Berechtigungen'
  ];

  const stats = [
    { value: '10.000+', label: 'Verwaltete Passwörter', icon: Key },
    { value: '100%', label: 'Zero-Knowledge', icon: Shield },
    { value: '80%', label: 'Weniger Support-Tickets', icon: Users },
    { value: 'GDPR', label: 'Compliant', icon: Award }
  ];

  const securityStats = [
    { value: '61%', label: 'Mitarbeiter mit schlechten Passwort-Praktiken', icon: Users },
    { value: '69%', label: 'Security Pros sagen SSO reicht nicht', icon: Shield },
    { value: '34%', label: 'Nutzen ungenehmigte Apps', icon: Smartphone }
  ];

  const enterpriseFeatures = [
    {
      title: 'Extended Access Management',
      description: 'Sichern Sie jeden Sign-in für jede App auf jedem Gerät. Verwalten und vereinfachen Sie Zugriffsberechtigungen für alle.',
      icon: Shield
    },
    {
      title: 'Device Trust',
      description: 'Stellen Sie sicher, dass jedes Gerät sicher und konform ist, indem Sie Mitarbeiter empowern, Gerätegesundheitsprobleme selbst zu beheben.',
      icon: Smartphone
    },
    {
      title: 'Compliance & Reporting',
      description: 'Erfüllen Sie Compliance-Anforderungen und generieren Sie detaillierte Berichte über Passwortsicherheit und Nutzung.',
      icon: Award
    },
    {
      title: 'Zero-Knowledge Architektur',
      description: 'Ihre Passwörter werden mit Zero-Knowledge-Verschlüsselung geschützt - selbst 1Password kann sie nicht lesen.',
      icon: Lock
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
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-full mb-8">
              <Key className="w-6 h-6 mr-3" />
              <span className="text-lg font-bold">1Password</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Sichere
              <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Passwortverwaltung
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Professionelle Passwortverwaltung mit Zero-Knowledge-Architektur und Team-Collaboration-Features.
              Schützen Sie Ihre digitalen Assets mit der weltweit vertrauenswürdigsten Lösung.
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
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full mb-4">
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

      {/* Security Statistics */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {securityStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center bg-red-50 rounded-xl p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-full mb-4">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold text-red-600 mb-2">{stat.value}</div>
                  <div className="text-red-700 font-medium">{stat.label}</div>
                  <div className="text-sm text-red-600 mt-2">Quelle: 1Password Security Report 2024</div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Enterprise-Grade Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Umfassende Sicherheitslösungen für moderne Unternehmen mit höchsten Ansprüchen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {enterpriseFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl flex items-center justify-center mb-6">
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

      {/* Business Solutions */}
      <section className="pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Business-Lösungen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Speziell entwickelte Lösungen für verschiedene Unternehmensgrößen und -anforderungen
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Teams</h3>
              <p className="text-gray-600 mb-6">
                Für kleine bis mittlere Teams, die einfache Passwortverwaltung und grundlegende Sicherheitsfunktionen benötigen.
              </p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Passwort-Manager für Teams
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Sichere Passwort-Freigabe
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  2FA für alle Konten
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg text-center border-2 border-blue-200"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business</h3>
              <p className="text-gray-600 mb-6">
                Vollständige Business-Lösung mit erweiterten Sicherheitsfunktionen und Compliance-Tools.
              </p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Erweiterte Berichterstattung
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Compliance-Management
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Priority Support
                </li>
              </ul>
              <div className="text-blue-600 font-semibold">Empfohlen für Unternehmen</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <p className="text-gray-600 mb-6">
                Maximale Sicherheit und Kontrolle für große Unternehmen mit komplexen Anforderungen.
              </p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Device Trust
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Extended Access Management
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Dedicated Support
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sichere Passwörter
              <span className="block">für Ihr ganzes Team</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Implementieren Sie 1Password in Ihrem Unternehmen und profitieren Sie von
              erstklassiger Sicherheit und Benutzerfreundlichkeit.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50"
              >
                <Users className="w-5 h-5 mr-3" />
                Kostenlose Beratung
              </Link>
              <Link
                href="/produkte"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                <Key className="w-5 h-5 mr-3" />
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