'use client';

import { motion } from 'framer-motion';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import {
  Database, Shield, Eye, Cloud, Users, Settings,
  ArrowRight, CheckCircle, Mail, Wrench, Target,
  Package, Archive, TrendingUp, Globe, Brain, Network,
  Key, Phone, Server, HardDrive, Star, ChevronRight
} from 'lucide-react';

export default function ProduktePage() {
  const productCategories = [
    {
      id: 'management',
      title: 'Client Management',
      description: 'Professionelle IT-Verwaltung und Systemoptimierung',
      icon: Database,
      color: 'from-blue-600 to-blue-800',
      products: [
        {
          name: 'ACMP Standard',
          description: '15 professionelle Module für Einsteiger',
          href: '/acmp-standard',
          features: ['15 Module', 'Einfache Implementierung', '24/7 Support']
        },
        {
          name: 'ACMP Individual',
          description: 'Maßgeschneiderte IT-Verwaltungslösungen',
          href: '/acmp-individual',
          features: ['20+ Module', 'Premium Support', 'Vollständig anpassbar']
        },
        {
          name: 'Microsoft 365',
          description: 'Vollständige Produktivitätssuite',
          href: '/microsoft',
          features: ['Office Apps', 'Teams', 'Cloud Storage']
        }
      ]
    },
    {
      id: 'security',
      title: 'IT-Sicherheit',
      description: 'Umfassender Schutz vor Cyber-Bedrohungen',
      icon: Shield,
      color: 'from-red-600 to-red-800',
      products: [
        {
          name: 'Hornetsecurity',
          description: 'E-Mail-Sicherheit und Backup-Lösungen',
          href: '/hornetsecurity',
          features: ['Spam Protection', 'Email Backup', 'Threat Detection']
        },
        {
          name: 'Arctic Wolf',
          description: 'Managed Detection & Response Services',
          href: '/arctic-wolf',
          features: ['24/7 SOC', 'Threat Hunting', 'Incident Response']
        },
        {
          name: 'Secutec',
          description: 'SecureDNS & Darknet Monitoring',
          href: '/secutec',
          features: ['DNS Security', 'Darknet Scans', 'NIS2 Compliance']
        },
        {
          name: 'AuthN by GETIDEE',
          description: 'Multi-Faktor Authentifizierung',
          href: '/authn',
          features: ['TPM 2.0 MFA', 'Hardware-basiert', 'Zero-Trust']
        }
      ]
    },
    {
      id: 'services',
      title: 'IT-Services',
      description: 'Professionelle Dienstleistungen und Support',
      icon: Users,
      color: 'from-green-600 to-green-800',
      products: [
        {
          name: 'IT-Beratung',
          description: 'Strategische IT-Planung und Beratung',
          href: '/services',
          features: ['Strategieentwicklung', 'Technologie-Assessment', 'Budgetplanung']
        },
        {
          name: 'Implementation',
          description: 'Professionelle Systemeinführung',
          href: '/services',
          features: ['Projektmanagement', 'Migration', 'Schulung']
        },
        {
          name: 'Support & Wartung',
          description: '24/7 IT-Support und proaktive Wartung',
          href: '/services',
          features: ['24/7 Monitoring', 'Remote Support', 'Proaktive Wartung']
        },
        {
          name: 'IT-Projekte',
          description: 'Erfolgreiche Projektrealisierung',
          href: '/projekt',
          features: ['Projektmanagement', 'Zeitplan-Einhaltung', 'Qualitätssicherung']
        }
      ]
    },
    {
      id: 'cloud',
      title: 'Cloud-Lösungen',
      description: 'Moderne Cloud-Plattformen und Services',
      icon: Cloud,
      color: 'from-purple-600 to-purple-800',
      products: [
        {
          name: 'Microsoft Azure',
          description: 'Enterprise Cloud-Plattform',
          href: '/microsoft',
          features: ['Virtual Machines', 'App Services', 'AI & ML']
        },
        {
          name: 'Dynamics 365',
          description: 'CRM und ERP-Lösung',
          href: '/microsoft',
          features: ['Sales Automation', 'Customer Service', 'Analytics']
        }
      ]
    },
    {
      id: 'network',
      title: 'Netzwerk & Infrastruktur',
      description: 'Moderne Netzwerklösungen und Infrastruktur-Produkte',
      icon: Network,
      color: 'from-cyan-600 to-cyan-800',
      products: [
        {
          name: 'Sophos Firewalls',
          description: 'Next-Generation Firewall Protection',
          href: '/sophos',
          features: ['Advanced Threat Protection', 'Zero-Day Schutz', 'SD-WAN']
        },
        {
          name: '1Password',
          description: 'Professionelle Passwortverwaltung',
          href: '/1password',
          features: ['Zero-Knowledge Architektur', 'Team-Sharing', 'Biometrie']
        },
        {
          name: '3CX VoIP Telefonanlage',
          description: 'Cloud-basierte Business-Telefonie',
          href: '/3cx',
          features: ['HD Video-Konferenzen', 'CRM-Integration', 'Mobile Apps']
        },
        {
          name: 'VMware Virtualisierung',
          description: 'Enterprise Virtualisierungslösungen',
          href: '/vmware',
          features: ['vSphere Hypervisor', 'vSAN Storage', 'NSX Networking']
        },
        {
          name: 'Proxmox Virtualisierung',
          description: 'Open-Source Virtualisierung',
          href: '/proxmox',
          features: ['KVM & LXC Container', 'Web-Management', 'Kostenlos']
        }
      ]
    }
  ];

  const stats = [
    { label: 'Zufriedene Kunden', value: '600+', icon: Users },
    { label: 'Implementierte Lösungen', value: '1.500+', icon: CheckCircle },
    { label: 'Jahre Erfahrung', value: '15+', icon: Target },
    { label: 'Partner-Zertifizierungen', value: '25+', icon: Package }
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

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Unsere
              <span className="ml-2 bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
                IT-Lösungen
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Entdecken Sie unser umfassendes Portfolio an IT-Produkten und Services - alles aus einer Hand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-4 gap-6 mb-16"
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

      {/* Product Categories */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Alternative Layout: 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="group"
                >
                  <div className={`relative bg-gradient-to-br ${category.color} rounded-2xl p-6 text-white overflow-hidden h-72 flex flex-col justify-between hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-white rounded-full -mr-12 -mt-12"></div>
                      <div className="absolute bottom-0 left-0 w-20 h-20 bg-white rounded-full -ml-10 -mb-10"></div>
                      <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-white rounded-full -ml-8 -mt-8"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                      <p className="text-white/90 text-sm leading-relaxed mb-4">
                        {category.description}
                      </p>
                    </div>

                    {/* Products Preview */}
                    <div className="relative z-10">
                      <div className="space-y-2 mb-4">
                        {category.products.slice(0, 2).map((product, index) => (
                          <Link key={index} href={product.href}>
                            <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-2 rounded-lg hover:bg-white/30 transition-all duration-300 cursor-pointer">
                              <div className="flex items-center justify-between">
                                <span className="font-medium text-sm">{product.name}</span>
                                <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                              </div>
                            </div>
                          </Link>
                        ))}
                        {category.products.length > 2 && (
                          <div className="text-white/70 text-xs text-center">
                            +{category.products.length - 2} weitere Produkte
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Alternative: Timeline Layout für zusätzliche Produkte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-16"
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Alle Produkte im Überblick</h3>
              <p className="text-gray-600">Entdecken Sie unser vollständiges Portfolio</p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-600 to-purple-600 h-full rounded-full"></div>

              {productCategories.map((category, categoryIndex) => (
                <div key={category.id} className={`relative flex items-center mb-12 ${categoryIndex % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  {/* Timeline Dot */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r ${category.color} rounded-full border-4 border-white shadow-lg`}></div>

                  {/* Content Card */}
                  <div className={`w-5/12 ${categoryIndex % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                      <div className="flex items-center mb-4">
                        <category.icon className={`w-8 h-8 mr-3 bg-gradient-to-r ${category.color} text-white p-2 rounded-lg`} />
                        <h4 className="text-lg font-bold text-gray-900">{category.title}</h4>
                      </div>

                      <div className="grid grid-cols-1 gap-3">
                        {category.products.map((product, productIndex) => (
                          <Link key={productIndex} href={product.href}>
                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 group">
                              <div>
                                <span className="font-medium text-gray-900">{product.name}</span>
                                <p className="text-sm text-gray-600">{product.description}</p>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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