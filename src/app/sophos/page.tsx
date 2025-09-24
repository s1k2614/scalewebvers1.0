'use client';

import { motion } from 'framer-motion';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import {
  Shield, CheckCircle, Star, ArrowRight,
  Zap, Lock, Globe, Network, Cloud, Monitor,
  Users, Award, ChevronRight, Eye, Brain, Bot,
  Activity, Target, Layers, Database, AlertTriangle,
  FileText, Mail, Server, Smartphone, Laptop
} from 'lucide-react';

export default function SophosPage() {
  const sophosProducts = [
    {
      name: 'Endpoint Protection',
      description: 'Modernste Cybersecurity schützt Ihr Unternehmen und Ihre Daten vor Malware und komplexen Angriffen',
      icon: Laptop,
      features: ['Deep Learning AI', 'Behavioral Analysis', 'Exploit Prevention', 'Ransomware Protection']
    },
    {
      name: 'Network Security',
      description: 'Next-Gen Firewalls, Access Points und Switches für eine ZTNA-Architektur',
      icon: Network,
      features: ['ZTNA Integration', 'SD-WAN', 'Advanced Threat Protection', 'Deep Packet Inspection']
    },
    {
      name: 'Managed Detection and Response',
      description: 'Cybersecurity as a Service mit Schutz 8-18 Uhr vor Ransomware und Datenlecks',
      icon: Eye,
      features: ['Monitoring 8-18 Uhr', 'Threat Hunting', 'Incident Response', 'Expert Analysis']
    },
    {
      name: 'Email Security',
      description: 'Schutz vor Malware, Phishing und Spoofing-Versuchen',
      icon: Mail,
      features: ['AI-Powered Detection', 'Sandboxing', 'URL Protection', 'Data Loss Prevention']
    },
    {
      name: 'Cloud Security',
      description: 'Cloud Workload Protection mit CPSM-Prozessen zur Überwachung von Systemen und Infrastruktur',
      icon: Cloud,
      features: ['Multi-Cloud Support', 'Container Security', 'Compliance Monitoring', 'Vulnerability Assessment']
    }
  ];

  const keyStats = [
    { value: 'Gartner Leader', label: '16 Jahre in Folge', subtitle: 'Endpoint Protection Platforms', icon: Award },
    { value: '600.000+', label: 'Kunden weltweit', subtitle: 'Vertrauen auf Sophos', icon: Users },
    { value: '50+', label: 'GenAI & Deep Learning', subtitle: 'Funktionen integriert', icon: Brain },
    { value: '100+', label: 'Drittanbieter-Integrationen', subtitle: 'Offenes Ökosystem', icon: Layers }
  ];

  const aiFeatures = [
    {
      title: 'Dynamischer Schutz',
      description: 'Der Schutz wird basierend auf Echtzeiteingaben aktualisiert und adaptive Abwehrmaßnahmen reagieren automatisch auf Bedrohungen.',
      icon: Activity
    },
    {
      title: 'Modernste KI',
      description: 'Über 50 GenAI- und Deep Learning-Funktionen verbessern die Abwehr und beschleunigen Security Operations.',
      icon: Brain
    },
    {
      title: 'Offenes Ökosystem',
      description: 'Kompatibel mit Produkten von Sophos, Produkten anderer Anbieter oder einer beliebigen Kombination aus beidem.',
      icon: Globe
    }
  ];

  const useCases = [
    'Ransomware-Angriffe stoppen',
    'Remote- oder Hybrid-Mitarbeiter schützen',
    'Cyber-Versicherungsanforderungen erfüllen',
    'Microsoft-Umgebung schützen',
    'Compliance sicherstellen',
    'KI für Cybersecurity nutzen'
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navigation />

      {/* Hero Section with Advanced Background */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-indigo-500 rounded-full animate-bounce slow"></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full shadow-lg mb-6">
                <Award className="w-5 h-5 mr-2" />
                <span className="font-semibold">Gartner Leader 16 Jahre in Folge</span>
              </div>
              
              <h1 className="text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Sophos
                </span>
                <br />
                <span className="text-gray-900">Cybersecurity</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Modernste KI-native Cybersecurity-Plattform mit adaptivem Schutz. 
                Über 600.000 Kunden weltweit vertrauen auf Sophos für umfassende 
                Sicherheit vor Ransomware und komplexen Bedrohungen.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <Shield className="w-5 h-5 mr-3" />
                  Kostenlose Beratung
                </Link>
                <button className="inline-flex items-center border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
                  <FileText className="w-5 h-5 mr-3" />
                  Demo anfordern
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-white">
                    <Brain className="w-8 h-8 mb-3 text-blue-200" />
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-sm opacity-90">AI Funktionen</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-white">
                    <Shield className="w-8 h-8 mb-3 text-blue-200" />
                    <div className="text-2xl font-bold">8-18 Uhr</div>
                    <div className="text-sm opacity-90">MDR Service</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-white">
                    <Award className="w-8 h-8 mb-3 text-blue-200" />
                    <div className="text-2xl font-bold">Leader</div>
                    <div className="text-sm opacity-90">Gartner 2025</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-white">
                    <Users className="w-8 h-8 mb-3 text-blue-200" />
                    <div className="text-2xl font-bold">600K+</div>
                    <div className="text-sm opacity-90">Kunden</div>
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
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <p className="text-lg font-semibold text-blue-600 mb-1">{stat.label}</p>
                  <p className="text-sm text-gray-600">{stat.subtitle}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Sophos Produktpalette
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Synchronisierte Lösungen für intelligentere, schnellere und effektivere Abwehrmaßnahmen
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sophosProducts.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105"
                >
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                    <IconComponent className="w-12 h-12 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-blue-100 text-sm">{product.description}</p>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
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

      {/* AI Platform Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-6 py-3 rounded-full font-semibold mb-6">
              <Brain className="w-5 h-5 mr-2" />
              Adaptive, KI-native Cybersecurity-Plattform
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Sophos Central
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Sophos Central bietet Kunden erstklassigen Schutz und sorgt für mehr Effizienz bei der Abwehr. 
              Dynamischer Schutz, modernste KI und ein offenes Ökosystem mit vielen Integrationen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {aiFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 text-white rounded-full mb-6">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Wie können wir Ihnen helfen?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Sophos löst die wichtigsten Cybersecurity-Herausforderungen moderner Unternehmen
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center">
                  <Target className="w-6 h-6 text-blue-200 mr-4 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white font-semibold">{useCase}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Quote */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-12">
              <div className="text-5xl text-blue-600 mb-6">"</div>
              <blockquote className="text-2xl text-gray-700 font-medium mb-8 leading-relaxed">
                Die Herausforderungen in der IT haben sich im Laufe der Zeit deutlich geändert und sind sehr viel komplexer geworden. 
                Dank Sophos haben wir trotzdem den Überblick und können effektiv für Cybersicherheit sorgen.
              </blockquote>
              <div className="border-t pt-6">
                <p className="text-lg font-semibold text-gray-900">Stefan Sauerland</p>
                <p className="text-blue-600">Leiter Systemintegration, Kuchenmeister GmbH</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Stoppen Sie Bedrohungen rechtzeitig
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Mit Sophos erhalten Sie Cybersecurity ohne Kompromisse. Innovative KI gegen Bedrohungen und Experten, denen nichts entgeht.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50"
              >
                <Users className="w-5 h-5 mr-3" />
                Vertrieb kontaktieren
              </Link>
              <button className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                <Zap className="w-5 h-5 mr-3" />
                Kostenlos testen
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}