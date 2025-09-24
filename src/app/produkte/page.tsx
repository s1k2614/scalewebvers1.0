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
  Lock, Cpu, Globe2, BarChart3, HeadphonesIcon
} from 'lucide-react';

export default function ProduktePage() {
  const productCategories = [
    {
      id: 'client-management',
      title: 'Client Management',
      subtitle: 'Professionelle Endpunkt-Verwaltung',
      description: 'Vollständige Kontrolle über Ihre IT-Infrastruktur mit modernen Management-Lösungen.',
      icon: Database,
      color: 'from-scaleit-red to-red-700',
      bgColor: 'from-red-50 to-red-100',
      products: [
        {
          name: 'ACMP Standard',
          description: '15 professionelle Module für den Einstieg',
          href: '/acmp-standard',
          features: ['Asset Management', 'Softwareverteilung', 'Remote Control'],
          price: 'ab 2.500€',
          popular: false
        },
        {
          name: 'ACMP Individual',
          description: 'Maßgeschneiderte Enterprise-Lösung',
          href: '/acmp-individual',
          features: ['20+ Module', 'Premium Support', 'Vollständig anpassbar'],
          price: 'ab 5.000€',
          popular: true
        }
      ]
    },
    {
      id: 'productivity',
      title: 'Produktivität & Collaboration',
      subtitle: 'Moderne Arbeitsumgebungen',
      description: 'Steigern Sie die Produktivität Ihres Teams mit professionellen Collaboration-Tools.',
      icon: Users,
      color: 'from-scaleit-red to-red-700',
      bgColor: 'from-red-50 to-red-100',
      products: [
        {
          name: 'Microsoft 365',
          description: 'Komplette Produktivitätssuite',
          href: '/microsoft',
          features: ['Office Apps', 'Teams', 'Cloud Storage'],
          price: 'ab 8€/User',
          popular: true
        },
        {
          name: 'Dynamics 365',
          description: 'CRM & ERP in der Cloud',
          href: '/microsoft',
          features: ['Sales Automation', 'Customer Service', 'Analytics'],
          price: 'ab 65€/User',
          popular: false
        }
      ]
    },
    {
      id: 'security',
      title: 'IT-Sicherheit',
      subtitle: 'Umfassender Cyber-Schutz',
      description: 'Schützen Sie Ihr Unternehmen vor modernen Bedrohungen mit bewährten Sicherheitslösungen.',
      icon: Shield,
      color: 'from-scaleit-gray to-gray-700',
      bgColor: 'from-gray-50 to-gray-100',
      products: [
        {
          name: 'Hornetsecurity',
          description: 'E-Mail-Sicherheit & Backup',
          href: '/hornetsecurity',
          features: ['Spam Protection', 'Email Backup', 'Threat Detection'],
          price: 'ab 2€/User',
          popular: false
        },
        {
          name: 'Arctic Wolf',
          description: 'Managed Detection & Response',
          href: '/arctic-wolf',
          features: ['24/7 SOC', 'Threat Hunting', 'Incident Response'],
          price: 'auf Anfrage',
          popular: true
        },
        {
          name: 'Secutec',
          description: 'SecureDNS & Darknet Monitoring',
          href: '/secutec',
          features: ['DNS Security', 'Darknet Scans', 'NIS2 Compliance'],
          price: 'ab 500€',
          popular: false
        },
        {
          name: 'AuthN by GETIDEE',
          description: 'Hardware-basierte MFA',
          href: '/authn',
          features: ['TPM 2.0 MFA', 'Zero-Trust', 'Hardware Security'],
          price: 'ab 3€/User',
          popular: false
        }
      ]
    },
    {
      id: 'infrastructure',
      title: 'Netzwerk & Infrastruktur',
      subtitle: 'Moderne IT-Infrastruktur',
      description: 'Skalierbare Netzwerklösungen und Infrastruktur für wachsende Unternehmen.',
      icon: Network,
      color: 'from-scaleit-black to-gray-800',
      bgColor: 'from-gray-50 to-gray-100',
      products: [
        {
          name: 'Sophos Firewalls',
          description: 'Next-Generation Firewall Protection',
          href: '/sophos',
          features: ['Advanced Threat Protection', 'SD-WAN', 'Zero-Day Schutz'],
          price: 'ab 1.200€',
          popular: false
        },
        {
          name: '3CX Telefonanlage',
          description: 'Cloud-basierte Business-Telefonie',
          href: '/3cx',
          features: ['HD Video-Konferenzen', 'CRM-Integration', 'Mobile Apps'],
          price: 'ab 15€/User',
          popular: false
        },
        {
          name: 'VMware Virtualisierung',
          description: 'Enterprise Virtualisierungslösungen',
          href: '/vmware',
          features: ['vSphere Hypervisor', 'vSAN Storage', 'NSX Networking'],
          price: 'auf Anfrage',
          popular: true
        },
        {
          name: 'Proxmox Virtualisierung',
          description: 'Open-Source Virtualisierung',
          href: '/proxmox',
          features: ['KVM & LXC Container', 'Web-Management', 'Kostenlos'],
          price: 'kostenlos',
          popular: false
        }
      ]
    },
    {
      id: 'cloud',
      title: 'Cloud-Plattformen',
      subtitle: 'Skalierbare Cloud-Infrastruktur',
      description: 'Nutzen Sie die Vorteile der Cloud für mehr Flexibilität und Skalierbarkeit.',
      icon: Cloud,
      color: 'from-scaleit-red to-red-700',
      bgColor: 'from-red-50 to-red-100',
      products: [
        {
          name: 'Microsoft Azure',
          description: 'Enterprise Cloud-Plattform',
          href: '/microsoft',
          features: ['Virtual Machines', 'App Services', 'AI & ML'],
          price: 'Pay-as-you-go',
          popular: true
        }
      ]
    }
  ];

  const stats = [
    { label: 'IT-Produkte', value: '14+', icon: Package, color: 'from-scaleit-red to-red-600' },
    { label: 'Kategorien', value: '5', icon: Layers, color: 'from-scaleit-gray to-gray-600' },
    { label: 'Partner', value: '10+', icon: HeartHandshake, color: 'from-scaleit-black to-gray-700' },
    { label: 'Erfahrung', value: '15+', icon: TrendingUp, color: 'from-scaleit-red to-red-600' }
  ];

  const services = [
    {
      title: 'IT-Beratung',
      description: 'Strategische Planung Ihrer IT-Zukunft',
      icon: Target,
      href: '/services/beratung',
      color: 'from-scaleit-red to-red-700'
    },
    {
      title: 'Implementation',
      description: 'Professionelle Systemeinführung',
      icon: Settings,
      href: '/services/implementation',
      color: 'from-scaleit-gray to-gray-700'
    },
    {
      title: 'Support & Wartung',
      description: 'IT-Support 8-18 Uhr und proaktive Wartung',
      icon: HeadphonesIcon,
      href: '/services/wartung',
      color: 'from-scaleit-black to-gray-800'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-scaleit-red/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-scaleit-gray/20 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-600/10 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-gradient-to-r from-scaleit-red to-purple-600 text-white px-6 py-3 rounded-full mb-8 shadow-lg">
              <Package className="w-6 h-6 mr-3" />
              <span className="text-lg font-bold">ScaleITS Produktportfolio</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-scaleit-black mb-6">
              Unsere
              <span className="ml-3 bg-gradient-to-r from-scaleit-red to-purple-600 bg-clip-text text-transparent">
                IT-Lösungen
              </span>
            </h1>

            <p className="text-xl text-scaleit-gray max-w-4xl mx-auto mb-12 leading-relaxed">
              Entdecken Sie unser umfassendes Portfolio an IT-Produkten und Services.
              Alles aus einer Hand, perfekt aufeinander abgestimmt, für Ihre digitale Zukunft.
            </p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${stat.color} text-white rounded-xl mb-4`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="text-2xl font-bold text-scaleit-black mb-1">{stat.value}</div>
                    <div className="text-sm text-scaleit-gray font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-scaleit-black mb-6">
              Unsere Produktkategorien
            </h2>
            <p className="text-xl text-scaleit-gray max-w-3xl mx-auto">
              Strukturiert nach Ihren IT-Anforderungen - finden Sie die passende Lösung für Ihr Unternehmen
            </p>
          </motion.div>

          <div className="space-y-16">
            {productCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                  className="relative"
                >
                  {/* Category Header */}
                  <div className={`bg-gradient-to-r ${category.bgColor} rounded-3xl p-6 md:p-8 mb-6`}>
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                      <div className={`flex-shrink-0 w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>

                      <div className="text-center md:text-left flex-1">
                        <h3 className="text-3xl md:text-4xl font-bold text-scaleit-black mb-2">
                          {category.title}
                        </h3>
                        <p className="text-lg font-semibold text-scaleit-red mb-3">
                          {category.subtitle}
                        </p>
                        <p className="text-lg text-scaleit-gray leading-relaxed max-w-2xl">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Products Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.products.map((product, productIndex) => (
                      <motion.div
                        key={productIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: productIndex * 0.1 }}
                        className="group relative"
                      >
                        <Link href={product.href}>
                          <div className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105 border-2 ${product.popular ? 'border-scaleit-red' : 'border-transparent'}`}>
                            {product.popular && (
                              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                                <span className="bg-gradient-to-r from-scaleit-red to-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                                  Beliebt
                                </span>
                              </div>
                            )}

                            {/* Product Header */}
                            <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                              <h4 className="text-xl font-bold mb-2">{product.name}</h4>
                              <p className="text-white/90 text-sm leading-relaxed">{product.description}</p>
                            </div>

                            {/* Product Content */}
                            <div className="p-6">
                              <div className="flex items-center justify-between mb-4">
                                <span className="text-2xl font-bold text-scaleit-black">{product.price}</span>
                                <ArrowRight className="w-5 h-5 text-scaleit-gray group-hover:text-scaleit-red group-hover:translate-x-1 transition-all" />
                              </div>

                              <div className="space-y-2">
                                {product.features.map((feature, featureIndex) => (
                                  <div key={featureIndex} className="flex items-center text-scaleit-gray">
                                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                    <span className="text-sm">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-br from-scaleit-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Mehr als nur Produkte
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Neben unseren IT-Produkten bieten wir umfassende Services für Ihre komplette IT-Betreuung
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={service.href}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-6 shadow-lg`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                      <div className="flex items-center text-white group-hover:text-scaleit-red transition-colors">
                        <span className="font-semibold">Mehr erfahren</span>
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-scaleit-red to-purple-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Bereit für Ihre IT-Transformation?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam die perfekte IT-Lösung für Ihr Unternehmen entwickeln.
              Kontaktieren Sie uns für eine kostenlose Erstberatung.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-scaleit-red px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-scaleit-red/25 transform hover:scale-105"
              >
                <Users className="w-6 h-6 mr-3" />
                Kostenlose Beratung
              </Link>

              <Link
                href="/webshop"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-scaleit-red transition-all duration-300"
              >
                <Package className="w-6 h-6 mr-3" />
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