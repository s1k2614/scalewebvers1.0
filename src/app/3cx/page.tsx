'use client';

import { motion } from 'framer-motion';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import {
  Phone, CheckCircle, Star, ArrowRight,
  Video, MessageSquare, Users, Smartphone,
  Monitor, Award, ChevronRight, Zap, Headphones, 
  Cloud, Server, Shield, Globe, Building, 
  HeartHandshake, TrendingUp, Mic, FileText,
  Brain, Activity, Database, Target, Settings,
  Lock
} from 'lucide-react';

export default function ThreeCXPage() {
  const keyStats = [
    { value: '12M+', label: 'Benutzer täglich', subtitle: 'Weltweit aktiv', icon: Users },
    { value: '350K+', label: 'Installationen', subtitle: 'Vertrauen uns', icon: Building },
    { value: '10K+', label: 'Partner', subtitle: 'In 190 Ländern', icon: HeartHandshake },
    { value: '20', label: 'Jahre', subtitle: 'Expertise seit 2005', icon: Award }
  ];

  const coreFeatures = [
    {
      name: 'PBX Telefonanlage',
      description: 'Vollständige IP-Telefonanlage mit modernen Funktionen für Unternehmen ab 25 Benutzern',
      icon: Phone,
      features: ['HD Audio Qualität', 'Auto Attendant', 'Call Routing', 'Call Recording']
    },
    {
      name: 'Contact Center',
      description: 'Professionelle Call Center-Funktionen ohne zusätzliche Kosten',
      icon: Headphones,
      features: ['Queue Strategien', 'Wallboards', 'Call Reports', 'Agent Management']
    },
    {
      name: 'Video Conferencing',
      description: 'Integrierte Videokonferenzen mit WebRTC-Technologie',
      icon: Video,
      features: ['HD Video', 'Screen Sharing', 'Meeting Recording', 'Mobile Apps']
    },
    {
      name: 'Live Chat & CRM',
      description: 'Integrierte Chat-Funktionen und CRM-Konnektivität',
      icon: MessageSquare,
      features: ['Website Chat', 'CRM Integration', 'Chat Bot', 'Customer History']
    },
    {
      name: 'AI Call Analytics',
      description: 'KI-gestützte Anrufanalyse für bessere Kundeneinblicke',
      icon: Brain,
      features: ['Sentiment Analysis', 'Call Transcription', 'Pattern Recognition', 'Performance Insights']
    },
    {
      name: 'Mobile & Remote',
      description: 'Vollständige mobile Unterstützung für Remote-Arbeit',
      icon: Smartphone,
      features: ['iOS/Android Apps', 'Softphone', 'Remote Working', 'BYOD Support']
    }
  ];

  const deploymentOptions = [
    {
      title: 'On-Premise',
      description: 'Vollständige Kontrolle über Ihre Kommunikationsinfrastruktur',
      icon: Server,
      benefits: ['Maximale Sicherheit', 'Volle Datenkontrolle', 'Anpassbare Konfiguration']
    },
    {
      title: 'Cloud Hosting',
      description: 'Gehostet auf Amazon AWS, Microsoft Azure oder Google Cloud',
      icon: Cloud,
      benefits: ['Schnelle Bereitstellung', 'Automatische Updates', 'Skalierbare Infrastruktur']
    },
    {
      title: '3CX Hosting',
      description: 'Vollständig verwaltete 3CX-Hosting-Lösung',
      icon: Shield,
      benefits: ['Professionelle Verwaltung', '99,9% Uptime SLA', 'Support 8-18 Uhr']
    }
  ];

  const industryFeatures = [
    'Keine Per-User Lizenzgebühren',
    'Eine jährliche Pauschallizenz',
    'Keine Datenübertragung an Dritte',
    'Sichere, private Kommunikation',
    'Flexible Hosting-Optionen',
    'WebRTC-basierte Technologie',
    'SIP-Standard kompatibel',
    'Offene API-Integration'
  ];

  const trustedCompanies = [
    'Air France', 'NHS', 'Best Western', 'PepsiCo', 
    'Carlton Blackpool', 'Kuchenmeister GmbH'
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-red-500 rounded-full animate-bounce slow"></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-pink-500 rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-full shadow-lg mb-6">
                <Award className="w-5 h-5 mr-2" />
                <span className="font-semibold">350.000+ Installationen weltweit</span>
              </div>
              
              <h1 className="text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  3CX
                </span>
                <br />
                <span className="text-gray-900">Phone System</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Die führende IP-Telefonanlage für moderne Unternehmen. 
                Keine Per-User-Lizenzgebühren, eine jährliche Pauschallizenz 
                für alle Funktionen. Vertraut von Air France, NHS und 350.000+ Unternehmen.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  Kostenlose Beratung
                </Link>
                <button className="inline-flex items-center border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-all duration-300">
                  <FileText className="w-5 h-5 mr-3" />
                  30 Tage kostenlos testen
                </button>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <p className="text-sm text-gray-600 mb-2">Vertraut von führenden Unternehmen:</p>
                <div className="flex flex-wrap gap-3">
                  {trustedCompanies.map((company, index) => (
                    <span key={index} className="text-sm font-medium text-orange-700 bg-orange-100 px-3 py-1 rounded-full">
                      {company}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-white">
                    <Users className="w-8 h-8 mb-3 text-orange-200" />
                    <div className="text-2xl font-bold">12M+</div>
                    <div className="text-sm opacity-90">Tägliche Benutzer</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-white">
                    <Building className="w-8 h-8 mb-3 text-orange-200" />
                    <div className="text-2xl font-bold">350K+</div>
                    <div className="text-sm opacity-90">Installationen</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-white">
                    <Globe className="w-8 h-8 mb-3 text-orange-200" />
                    <div className="text-2xl font-bold">190</div>
                    <div className="text-sm opacity-90">Länder</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-white">
                    <HeartHandshake className="w-8 h-8 mb-3 text-orange-200" />
                    <div className="text-2xl font-bold">10K+</div>
                    <div className="text-sm opacity-90">Partner</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <p className="text-lg font-semibold text-orange-600 mb-1">{stat.label}</p>
                  <p className="text-sm text-gray-600">{stat.subtitle}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Vollständige Kommunikationsplattform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Von der IP-Telefonanlage zur umfassenden Unified Communications-Lösung - 
              alles in einer Plattform, eine Lizenz
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105"
                >
                  <div className="bg-gradient-to-r from-orange-600 to-red-600 p-6 text-white">
                    <IconComponent className="w-12 h-12 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{feature.name}</h3>
                    <p className="text-orange-100 text-sm">{feature.description}</p>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Funktionen:</h4>
                    <ul className="space-y-2">
                      {feature.features.map((featureItem, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-sm">{featureItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-orange-100 text-orange-700 px-6 py-3 rounded-full font-semibold mb-6">
              <Settings className="w-5 h-5 mr-2" />
              Flexible Bereitstellungsoptionen
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Wählen Sie Ihre bevorzugte Hosting-Option
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              On-Premise, Cloud oder gehostet - 3CX passt sich Ihren Anforderungen an. 
              Eine Lizenz, alle Optionen verfügbar.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {deploymentOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-full mb-6">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{option.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{option.description}</p>
                  <ul className="space-y-2">
                    {option.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Features */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-red-700">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Warum 3CX die richtige Wahl ist
            </h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Brechen Sie frei von Per-User-Lizenzgebühren und erhalten Sie eine 
              vollständige Kommunikationsplattform zum Festpreis
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center">
                  <Target className="w-6 h-6 text-orange-200 mr-4 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white font-semibold">{feature}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Was unsere Kunden sagen
            </h2>
            <p className="text-xl text-gray-600">
              Über 350.000 Unternehmen weltweit vertrauen auf 3CX
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl shadow-lg p-8"
            >
              <div className="text-4xl text-orange-600 mb-4">"</div>
              <blockquote className="text-lg text-gray-700 font-medium mb-6 leading-relaxed">
                Dank 3CX konnten wir unsere Telefonkapazität um über 250% steigern, 
                um den Anforderungen der Covid-19-Krise gerecht zu werden. Wir konnten 
                eine flexible und schnelle Bereitstellung von verschiedenen Standorten 
                in Großbritannien gewährleisten.
              </blockquote>
              <div className="border-t pt-6">
                <p className="text-lg font-semibold text-gray-900">Matt Buckley</p>
                <p className="text-orange-600">Head of Enterprise Architecture & Design, NHS</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-3xl shadow-lg p-8"
            >
              <div className="text-4xl text-orange-600 mb-4">"</div>
              <blockquote className="text-lg text-gray-700 font-medium mb-6 leading-relaxed">
                3CX erfüllt alle Anforderungen. Der Ersatz unserer alten Telefonanlage 
                bedeutet, dass wir keine teuren Wartungsverträge mehr benötigen, 
                was uns jährlich Tausende von Pfund spart. 3CX ist sehr zuverlässig.
              </blockquote>
              <div className="border-t pt-6">
                <p className="text-lg font-semibold text-gray-900">Mohammad Umer</p>
                <p className="text-orange-600">Director of IT, Best Western Carlton Blackpool</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Starten Sie noch heute
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Erleben Sie die Zukunft der Unternehmenskommunikation. 
              30 Tage kostenlos testen, keine Verpflichtungen.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50"
              >
                <Users className="w-5 h-5 mr-3" />
                Beratung anfordern
              </Link>
              <button className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300">
                <Zap className="w-5 h-5 mr-3" />
                30 Tage kostenlos testen
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}