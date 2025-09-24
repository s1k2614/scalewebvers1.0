'use client';

import { motion } from 'framer-motion';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import {
  Shield, Key, Phone, Server, HardDrive, ArrowRight,
  CheckCircle, Users, Globe, Lock, Network,
  Cloud, Monitor, Settings, Award, Star, ChevronRight
} from 'lucide-react';

export default function NetzwerkInfrastrukturPage() {
  const products = [
    {
      id: 'sophos',
      name: 'Sophos Firewalls',
      tagline: 'Next-Generation Firewall Protection',
      description: 'Umfassender Netzwerkschutz mit Advanced Threat Protection, Zero-Day-Schutz und intelligenter Traffic-Analyse.',
      icon: Shield,
      color: 'from-red-600 to-red-800',
      link: '/services/firewall',
      features: [
        'Next-Generation Firewall',
        'Advanced Threat Protection',
        'Zero-Day Malware Schutz',
        'SD-WAN Integration',
        'Cloud-basierte Management',
        'Security Updates 8-18 Uhr'
      ],
      benefits: [
        '99.9% Threat Detection Rate',
        'Reduzierte Sicherheitsvorfälle um 95%',
        'Einfache Verwaltung über Cloud',
        'Skalierbare Lösung für alle Unternehmensgrößen'
      ],
      image: '/images/sophos-firewall.svg'
    },
    {
      id: '1password',
      name: '1Password',
      tagline: 'Sichere Passwortverwaltung',
      description: 'Professionelle Passwortverwaltung mit Zero-Knowledge-Architektur und Team-Collaboration-Features.',
      icon: Key,
      color: 'from-blue-600 to-blue-800',
      link: '/services/password-management',
      features: [
        'Zero-Knowledge Architektur',
        'Team-Passwort-Sharing',
        'Automatische Passwort-Generierung',
        'Biometrische Authentifizierung',
        'Sichere Datei-Speicherung',
        'Emergency Access'
      ],
      benefits: [
        '100% Zero-Knowledge Sicherheit',
        'Reduzierte Support-Tickets um 80%',
        'Compliance mit DSGVO und ISO 27001',
        'Nahtlose Integration mit allen Systemen'
      ],
      image: '/images/1password-logo.svg'
    },
    {
      id: '3cx',
      name: '3CX VoIP Telefonanlage',
      tagline: 'Moderne Business-Telefonie',
      description: 'Cloud-basierte VoIP-Telefonanlage mit Video-Konferenzen, Chat und CRM-Integration.',
      icon: Phone,
      color: 'from-green-600 to-green-800',
      link: '/services/voip-telefonie',
      features: [
        'Cloud-basierte Telefonie',
        'HD Video-Konferenzen',
        'Live Chat & Presence',
        'CRM-Integration',
        'Mobile Apps',
        'Call Center Features'
      ],
      benefits: [
        'Bis zu 80% Kosteneinsparung',
        'Uneingeschränkte Mobilität',
        'Professionelle Unternehmenskommunikation',
        'Skalierbare Lösung für Wachstum'
      ],
      image: '/images/3cx-logo.svg'
    },
    {
      id: 'vmware',
      name: 'VMware Virtualisierung',
      tagline: 'Enterprise Virtualisierung',
      description: 'Leistungsstarke Virtualisierungslösungen für Server, Desktop und Cloud-Infrastruktur.',
      icon: Server,
      color: 'from-purple-600 to-purple-800',
      link: '/services/virtualisierung',
      features: [
        'vSphere Hypervisor',
        'vCenter Management',
        'vSAN Software-Defined Storage',
        'NSX Network Virtualization',
        'Horizon Desktop Virtualization',
        'CloudHealth Cost Management'
      ],
      benefits: [
        '95% bessere Ressourcenauslastung',
        'Reduzierte Betriebskosten um 50%',
        'Höhere Verfügbarkeit und Performance',
        'Einfache Migration und Skalierung'
      ],
      image: '/images/vmware-logo.svg'
    },
    {
      id: 'proxmox',
      name: 'Proxmox Virtualisierung',
      tagline: 'Open-Source Virtualisierung',
      description: 'Kostenlose Open-Source-Virtualisierung mit Web-Interface und Enterprise-Features.',
      icon: HardDrive,
      color: 'from-orange-600 to-orange-800',
      link: '/services/open-source-virtualisierung',
      features: [
        'KVM & LXC Container',
        'Web-basiertes Management',
        'Live Migration',
        'Backup & Restore',
        'High Availability Clustering',
        'Open-Source & Kostenlos'
      ],
      benefits: [
        '100% kostenlose Lösung',
        'Hohe Performance und Stabilität',
        'Umfangreiche Community-Unterstützung',
        'Flexible Anpassungsmöglichkeiten'
      ],
      image: '/images/proxmox-logo.svg'
    }
  ];

  const stats = [
    { value: '500+', label: 'Implementierte Firewalls', icon: Shield },
    { value: '10.000+', label: 'Verwaltete Passwörter', icon: Key },
    { value: '2.500+', label: 'VoIP-Endpunkte', icon: Phone },
    { value: '1.000+', label: 'Virtualisierte Server', icon: Server }
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
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full mb-8">
              <Network className="w-6 h-6 mr-3" />
              <span className="text-lg font-bold">Netzwerk & Infrastruktur</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Moderne
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                IT-Infrastruktur
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Entdecken Sie unsere bewährten Lösungen für Netzwerksicherheit, Passwortmanagement,
              Telefonie und Virtualisierung - alles aus einer Hand.
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
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full mb-4">
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

      {/* Products Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-20">
            {products.map((product, productIndex) => {
              const IconComponent = product.icon;
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: productIndex * 0.1 }}
                  className="relative"
                >
                  {/* Product Header */}
                  <div className="text-center mb-12">
                    <div className={`inline-flex items-center bg-gradient-to-r ${product.color} text-white px-6 py-3 rounded-full mb-6`}>
                      <IconComponent className="w-6 h-6 mr-3" />
                      <span className="text-lg font-bold">{product.name}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {product.name}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
                      {product.tagline}
                    </p>
                    <p className="text-lg text-gray-500 max-w-3xl mx-auto">
                      {product.description}
                    </p>
                  </div>

                  {/* Product Content */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Features */}
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Funktionen</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        {product.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-gray-700">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Vorteile</h3>
                      <div className="space-y-4">
                        {product.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-start">
                            <Star className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Visual */}
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      className="relative"
                    >
                      <div className={`bg-gradient-to-br ${product.color} rounded-3xl p-8 text-white text-center h-80 flex flex-col justify-center items-center relative overflow-hidden`}>
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16"></div>
                          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full -ml-12 -mb-12"></div>
                        </div>

                        <div className="relative z-10">
                          <IconComponent className="w-20 h-20 mb-6 mx-auto" />
                          <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
                          <p className="text-white/90 mb-6">{product.tagline}</p>
                          <Link
                            href={product.link}
                            className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all duration-300"
                          >
                            <span>Mehr erfahren</span>
                            <ChevronRight className="w-4 h-4 ml-2" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ihre IT-Infrastruktur
              <span className="block">zukunftssicher gestalten</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam die optimale Infrastruktur-Lösung für Ihr Unternehmen finden.
              Unsere Experten beraten Sie gerne persönlich.
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