'use client';

import { motion } from 'framer-motion';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import {
  Phone, CheckCircle, Star, ArrowRight,
  Video, MessageSquare, Users, Smartphone,
  Monitor, Award, ChevronRight, Zap, Headphones, Cloud, Server
} from 'lucide-react';

export default function ThreeCXPage() {
  const features = [
    'Cloud-basierte Telefonie',
    'HD Video-Konferenzen',
    'Live Chat & Presence',
    'CRM-Integration',
    'Mobile Apps',
    'Call Center Features',
    'AI Call Transcription',
    'AI Call Analytics',
    'WebRTC Support',
    'SIP Trunk Integration',
    'Auto Attendant',
    'Call Queues'
  ];

  const benefits = [
    'Bis zu 80% Kosteneinsparung',
    'Uneingeschränkte Mobilität',
    'Professionelle Unternehmenskommunikation',
    'Skalierbare Lösung für Wachstum',
    'Einfache Administration',
    'Keine Vendor Lock-in',
    'Open Standards',
    '24/7 Verfügbarkeit'
  ];

  const stats = [
    { value: '2.500+', label: 'VoIP-Endpunkte', icon: Phone },
    { value: '80%', label: 'Kosteneinsparung', icon: Zap },
    { value: 'HD', label: 'Video-Qualität', icon: Video },
    { value: '24/7', label: 'Verfügbarkeit', icon: Monitor }
  ];

  const communicationFeatures = [
    {
      title: 'Unified Communications',
      description: 'Vereinen Sie alle Kommunikationskanäle in einer einzigen Plattform: Sprach-, Video-, Chat- und E-Mail-Kommunikation.',
      icon: MessageSquare
    },
    {
      title: 'AI-gestützte Features',
      description: 'Nutzen Sie KI für automatische Anruftranskription, Call Analytics und intelligente Anrufweiterleitung.',
      icon: Users
    },
    {
      title: 'Mobile-First Design',
      description: 'Vollständige Mobilität mit nativen Apps für iOS und Android mit allen Funktionen der Desktop-Version.',
      icon: Smartphone
    },
    {
      title: 'CRM-Integration',
      description: 'Nahtlose Integration mit beliebten CRM-Systemen für effizientere Kundenkommunikation und -verfolgung.',
      icon: Users
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
            <div className="inline-flex items-center bg-gradient-to-r from-green-600 to-green-800 text-white px-6 py-3 rounded-full mb-8">
              <Phone className="w-6 h-6 mr-3" />
              <span className="text-lg font-bold">3CX VoIP Telefonanlage</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Moderne
              <span className="block bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                Business-Telefonie
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Cloud-basierte VoIP-Telefonanlage mit Video-Konferenzen, Chat und CRM-Integration.
              Die Zukunft der Unternehmenskommunikation für moderne Arbeitsumgebungen.
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
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-full mb-4">
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

      {/* Communication Features */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Moderne Kommunikationsfunktionen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              3CX bietet alles, was moderne Unternehmen für effektive Kommunikation benötigen - alles in einer einzigen, skalierbaren Plattform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communicationFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-xl flex items-center justify-center mb-6">
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

      {/* Business Benefits */}
      <section className="pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Business-Vorteile
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Warum über 350.000 Unternehmen weltweit 3CX als ihre Kommunikationsplattform wählen
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Kosteneinsparung</h3>
              <p className="text-gray-600 text-sm">
                Reduzieren Sie Ihre Telekommunikationskosten um bis zu 80% durch cloud-basierte Lösungen.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Skalierbarkeit</h3>
              <p className="text-gray-600 text-sm">
                Wachsen Sie von 2 auf 1000+ Benutzer ohne Systemwechsel oder teure Upgrades.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Einfache Verwaltung</h3>
              <p className="text-gray-600 text-sm">
                Webbasierte Administration macht die Verwaltung Ihrer Telefonanlage zum Kinderspiel.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Keine Vendor Lock-in</h3>
              <p className="text-gray-600 text-sm">
                Offene Standards bedeuten Sie sind nicht an einen Anbieter gebunden - volle Kontrolle.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Flexible Bereitstellungsoptionen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wählen Sie die Bereitstellungsoption, die am besten zu Ihren Anforderungen passt
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-xl flex items-center justify-center mr-4">
                  <Cloud className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Cloud-Hosted</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Vollständig verwaltete Cloud-Lösung ohne Hardware-Investitionen. 3CX hostet und verwaltet Ihre Telefonanlage.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Keine Hardware-Kosten
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Automatische Updates
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  99.9% Uptime SLA
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Globale Rechenzentren
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-xl flex items-center justify-center mr-4">
                  <Server className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Self-Hosted</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Vollständige Kontrolle über Ihre Infrastruktur. Installieren Sie 3CX auf Ihrem eigenen Server oder in der Cloud.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Volle Kontrolle
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Eigene Sicherheitsrichtlinien
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Anpassbare Integrationen
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Keine Vendor Lock-in
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Zukunftssichere
              <span className="block">Kommunikationslösung</span>
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Ersetzen Sie Ihre veraltete Telefonanlage durch eine moderne 3CX-Lösung.
              Profitieren Sie von Kosteneinsparungen und neuen Funktionen.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50"
              >
                <Users className="w-5 h-5 mr-3" />
                Kostenlose Beratung
              </Link>
              <Link
                href="/produkte"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-3" />
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