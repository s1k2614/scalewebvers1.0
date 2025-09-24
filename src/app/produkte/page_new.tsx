'use client';

import { motion } from 'framer-motion';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import {
  Database, Shield, Eye, Cloud, Users, Settings,
  ArrowRight, CheckCircle, Mail, Wrench, Target,
  Package, Archive, TrendingUp, Globe, Brain, Network,
  Key, Phone, Server, HardDrive, Star, ChevronRight,
  Monitor, Laptop, Zap, Layers, Building, HeartHandshake,
  Lock
} from 'lucide-react';

export default function ProduktePage() {
  const allProducts = [
    // Client Management
    {
      name: 'ACMP Standard',
      category: 'Client Management',
      description: '15 professionelle Module für Einsteiger',
      href: '/acmp-standard',
      icon: Database,
      color: 'from-blue-500 to-blue-700',
      features: ['15 Module', 'Einfache Implementierung', 'Support 8-18 Uhr'],
      price: 'ab 2.500€'
    },
    {
      name: 'ACMP Individual',
      category: 'Client Management',
      description: 'Maßgeschneiderte IT-Verwaltungslösungen',
      href: '/acmp-individual',
      icon: Settings,
      color: 'from-purple-500 to-purple-700',
      features: ['20+ Module', 'Premium Support', 'Vollständig anpassbar'],
      price: 'ab 5.000€'
    },
    {
      name: 'Microsoft 365',
      category: 'Client Management',
      description: 'Vollständige Produktivitätssuite',
      href: '/microsoft',
      icon: Monitor,
      color: 'from-red-500 to-red-700',
      features: ['Office Apps', 'Teams', 'Cloud Storage'],
      price: 'ab 8€/User'
    },

    // IT-Sicherheit
    {
      name: 'Hornetsecurity',
      category: 'IT-Sicherheit',
      description: 'E-Mail-Sicherheit und Backup-Lösungen',
      href: '/hornetsecurity',
      icon: Mail,
      color: 'from-orange-500 to-orange-700',
      features: ['Spam Protection', 'Email Backup', 'Threat Detection'],
      price: 'ab 2€/User'
    },
    {
      name: 'Arctic Wolf',
      category: 'IT-Sicherheit',
      description: 'Managed Detection & Response Services',
      href: '/arctic-wolf',
      icon: Eye,
      color: 'from-cyan-500 to-cyan-700',
      features: ['24/7 SOC', 'Threat Hunting', 'Incident Response'],
      price: 'auf Anfrage'
    },
    {
      name: 'Secutec',
      category: 'IT-Sicherheit',
      description: 'SecureDNS & Darknet Monitoring',
      href: '/secutec',
      icon: Shield,
      color: 'from-green-500 to-green-700',
      features: ['DNS Security', 'Darknet Scans', 'NIS2 Compliance'],
      price: 'ab 500€'
    },
    {
      name: 'AuthN by GETIDEE',
      category: 'IT-Sicherheit',
      description: 'Multi-Faktor Authentifizierung',
      href: '/authn',
      icon: Key,
      color: 'from-indigo-500 to-indigo-700',
      features: ['TPM 2.0 MFA', 'Hardware-basiert', 'Zero-Trust'],
      price: 'ab 3€/User'
    },

    // Netzwerk & Infrastruktur
    {
      name: 'Sophos Firewalls',
      category: 'Netzwerk & Infrastruktur',
      description: 'Next-Generation Firewall Protection',
      href: '/sophos',
      icon: Network,
      color: 'from-blue-600 to-blue-800',
      features: ['Advanced Threat Protection', 'Zero-Day Schutz', 'SD-WAN'],
      price: 'ab 1.200€'
    },
    {
      name: '1Password',
      category: 'Netzwerk & Infrastruktur',
      description: 'Professionelle Passwortverwaltung',
      href: '/1password',
      icon: Lock,
      color: 'from-gray-500 to-gray-700',
      features: ['Zero-Knowledge Architektur', 'Team-Sharing', 'Biometrie'],
      price: 'ab 3€/User'
    },
    {
      name: '3CX VoIP Telefonanlage',
      category: 'Netzwerk & Infrastruktur',
      description: 'Cloud-basierte Business-Telefonie',
      href: '/3cx',
      icon: Phone,
      color: 'from-orange-600 to-orange-800',
      features: ['HD Video-Konferenzen', 'CRM-Integration', 'Mobile Apps'],
      price: 'ab 15€/User'
    },
    {
      name: 'VMware Virtualisierung',
      category: 'Netzwerk & Infrastruktur',
      description: 'Enterprise Virtualisierungslösungen',
      href: '/vmware',
      icon: Server,
      color: 'from-blue-700 to-blue-900',
      features: ['vSphere Hypervisor', 'vSAN Storage', 'NSX Networking'],
      price: 'auf Anfrage'
    },
    {
      name: 'Proxmox Virtualisierung',
      category: 'Netzwerk & Infrastruktur',
      description: 'Open-Source Virtualisierung',
      href: '/proxmox',
      icon: HardDrive,
      color: 'from-green-600 to-green-800',
      features: ['KVM & LXC Container', 'Web-Management', 'Kostenlos'],
      price: 'kostenlos'
    },

    // Cloud-Lösungen
    {
      name: 'Microsoft Azure',
      category: 'Cloud-Lösungen',
      description: 'Enterprise Cloud-Plattform',
      href: '/microsoft',
      icon: Cloud,
      color: 'from-blue-500 to-blue-700',
      features: ['Virtual Machines', 'App Services', 'AI & ML'],
      price: 'Pay-as-you-go'
    },
    {
      name: 'Dynamics 365',
      category: 'Cloud-Lösungen',
      description: 'CRM und ERP-Lösung',
      href: '/microsoft',
      icon: Building,
      color: 'from-purple-500 to-purple-700',
      features: ['Sales Automation', 'Customer Service', 'Analytics'],
      price: 'ab 65€/User'
    }
  ];

  const categories = [
    { name: 'Client Management', count: 3, color: 'from-blue-500 to-blue-700' },
    { name: 'IT-Sicherheit', count: 4, color: 'from-red-500 to-red-700' },
    { name: 'Netzwerk & Infrastruktur', count: 5, color: 'from-green-500 to-green-700' },
    { name: 'Cloud-Lösungen', count: 2, color: 'from-purple-500 to-purple-700' }
  ];

  const stats = [
    { label: 'Produkte im Portfolio', value: '14+', icon: Package },
    { label: 'Kategorien', value: '4', icon: Layers },
    { label: 'Partner-Hersteller', value: '10+', icon: HeartHandshake },
    { label: 'Jahre Erfahrung', value: '15+', icon: TrendingUp }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-gradient-to-r from-red-600 to-purple-600 text-white px-6 py-3 rounded-full mb-8">
              <Package className="w-6 h-6 mr-3" />
              <span className="text-lg font-bold">ScaleITS Produktportfolio</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Alle unsere
              <span className="ml-2 bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
                IT-Produkte
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Entdecken Sie unser vollständiges Portfolio an IT-Lösungen - alles aus einer Hand, alles aufeinander abgestimmt.
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
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-600 to-purple-600 text-white rounded-full mb-4">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-base text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Category Overview */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Produktkategorien</h2>
            <p className="text-xl text-gray-600">Strukturiert nach Ihren IT-Anforderungen</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${category.color} rounded-2xl p-6 text-white text-center hover:shadow-xl transition-all duration-300 hover:scale-105`}
              >
                <div className="text-3xl font-bold mb-2">{category.count}</div>
                <div className="text-lg font-semibold">{category.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Products Grid */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Alle Produkte im Überblick</h2>
            <p className="text-xl text-gray-600">Vom Client Management bis zur Cloud - alles was Sie brauchen</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allProducts.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="group"
                >
                  <Link href={product.href}>
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105 h-full">
                      {/* Header */}
                      <div className={`bg-gradient-to-r ${product.color} p-6 text-white`}>
                        <div className="flex items-center justify-between mb-3">
                          <IconComponent className="w-8 h-8" />
                          <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                            {product.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                        <p className="text-white/90 text-sm leading-relaxed">{product.description}</p>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
                        </div>

                        <div className="space-y-2">
                          {product.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-gray-700">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Mehr als nur Produkte
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Neben unseren Produkten bieten wir auch umfassende IT-Services: Beratung, Implementation, Support & Wartung
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="inline-flex items-center bg-gradient-to-r from-red-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Wrench className="w-5 h-5 mr-3" />
                Unsere Services entdecken
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-300"
              >
                <Users className="w-5 h-5 mr-3" />
                Individuelle Beratung
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Bereit für Ihre IT-Transformation?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam die perfekte IT-Lösung für Ihr Unternehmen finden.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-red-600 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50 text-lg"
              >
                <Users className="w-5 h-5 mr-3" />
                Kostenlose Beratung
              </Link>
              <Link
                href="/webshop"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 text-lg"
              >
                <Package className="w-5 h-5 mr-3" />
                Zum Webshop
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}