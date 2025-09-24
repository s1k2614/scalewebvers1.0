'use client';

import { motion } from 'framer-motion';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import {
  HardDrive, CheckCircle, Star, ArrowRight,
  Server, Network, Cloud, Monitor,
  Users, Award, ChevronRight, Zap, Database,
  Shield, Globe, Building, Calendar,
  TrendingUp, Layers, Activity, Settings,
  Lock, FileText, Brain, Cpu, Container
} from 'lucide-react';

export default function ProxmoxPage() {
  const keyStats = [
    { value: '2005', label: 'Gegründet', subtitle: 'über 20 Jahre Expertise', icon: Calendar },
    { value: '100%', label: 'Open Source', subtitle: 'Vollständig kostenlos', icon: Globe },
    { value: 'Tausende', label: 'Zufriedene Kunden', subtitle: 'Weltweit vertraut', icon: Users },
    { value: 'V9.0', label: 'Neueste Version', subtitle: 'Kontinuierlich verbessert', icon: TrendingUp }
  ];

  const coreProducts = [
    {
      name: 'Proxmox Virtual Environment',
      description: 'Vollständige Open-Source-Plattform für Enterprise-Virtualisierung mit integrierter Web-Oberfläche',
      icon: Server,
      version: '9.0',
      features: ['KVM Hypervisor', 'LXC Container', 'HA Clustering', 'Live Migration', 'ZFS Storage', 'Ceph Integration']
    },
    {
      name: 'Proxmox Backup Server',
      description: 'Enterprise-Backup-Lösung für VMs, Container und physische Hosts mit Deduplizierung',
      icon: Database,
      version: '4.0',
      features: ['Incremental Backups', 'Deduplizierung', 'Zstandard Compression', 'Authenticated Encryption', 'Web Interface', 'Restore from Web UI']
    },
    {
      name: 'Proxmox Mail Gateway',
      description: 'Open-Source E-Mail-Sicherheitslösung zum Schutz Ihres Mailservers vor allen E-Mail-Bedrohungen',
      icon: Shield,
      version: '8.2',
      features: ['Spam Protection', 'Virus Scanner', 'Attachment Blocking', 'Greylisting', 'TLS Support', 'Cluster Support']
    }
  ];

  const virtualizationFeatures = [
    {
      title: 'KVM Hypervisor',
      description: 'Vollständige Virtualisierung für Windows und Linux VMs mit Hardware-Unterstützung',
      icon: Cpu,
      benefits: ['Hardware-beschleunigte Virtualisierung', 'Live Migration', 'Snapshot Support', 'USB Passthrough']
    },
    {
      title: 'LXC Container',
      description: 'Leichtgewichtige Container-Virtualisierung für maximale Effizienz und Performance',
      icon: Container,
      benefits: ['Minimal Resource Overhead', 'Fast Boot Times', 'Native Performance', 'Integrated Backup']
    },
    {
      title: 'Software-Defined Storage',
      description: 'ZFS und Ceph Integration für hochverfügbare und skalierbare Speicherlösungen',
      icon: HardDrive,
      benefits: ['ZFS on Linux', 'Ceph Distributed Storage', 'Snapshot & Replication', 'Data Integrity']
    },
    {
      title: 'High Availability',
      description: 'Cluster-Management mit automatischem Failover für maximale Ausfallsicherheit',
      icon: Activity,
      benefits: ['Automatic Failover', 'Fence Devices', 'Quorum Management', 'Live Migration']
    }
  ];

  const enterpriseFeatures = [
    'Vollständig kostenlos - keine Lizenzgebühren',
    'Web-basiertes Management Interface',
    'RESTful API für Automation',
    'Role-based Access Control',
    'Multi-Master Cluster Management',
    'Live Migration ohne Downtime',
    'Integrierte Firewall und Security',
    'Backup und Disaster Recovery'
  ];

  const trustedCustomers = [
    'MeteoSwiss', 'Native Instruments', 'BMVIT',
    'Exa Networks', 'Rackspeed', 'Crate.io'
  ];

  const differentiators = [
    {
      title: 'Open-Source Stack',
      description: 'Vollständiger Zugang zum Quellcode garantiert höchste Sicherheit und Zuverlässigkeit',
      icon: Globe
    },
    {
      title: 'Unabhängigkeit',
      description: 'Unabhängiges, profitables Unternehmen ohne Vendor Lock-in oder versteckte Kosten',
      icon: Shield
    },
    {
      title: 'Benutzerfreundlichkeit',
      description: 'Automatische Installation und integrierte Web-Oberfläche für einfache Verwaltung',
      icon: Settings
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-500 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-emerald-500 rounded-full animate-bounce slow"></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-teal-500 rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full shadow-lg mb-6">
                <Award className="w-5 h-5 mr-2" />
                <span className="font-semibold">Seit 2005 - über 20 Jahre Expertise</span>
              </div>
              
              <h1 className="text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Proxmox
                </span>
                <br />
                <span className="text-gray-900">Virtualization</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Vollständige Open-Source-Plattform für Enterprise-Virtualisierung. 
                KVM, LXC Container, Software-Defined Storage und Networking - 
                alles in einer Lösung, 100% kostenlos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <Server className="w-5 h-5 mr-3" />
                  Kostenlose Beratung
                </Link>
                <button className="inline-flex items-center border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-300">
                  <FileText className="w-5 h-5 mr-3" />
                  Download starten
                </button>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <p className="text-sm text-gray-600 mb-2">Vertraut von führenden Unternehmen:</p>
                <div className="flex flex-wrap gap-3">
                  {trustedCustomers.map((customer, index) => (
                    <span key={index} className="text-sm font-medium text-green-700 bg-green-100 px-3 py-1 rounded-full">
                      {customer}
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
              <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-white">
                    <Calendar className="w-8 h-8 mb-3 text-green-200" />
                    <div className="text-2xl font-bold">2005</div>
                    <div className="text-sm opacity-90">Gegründet</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-white">
                    <Globe className="w-8 h-8 mb-3 text-green-200" />
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm opacity-90">Open Source</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-white">
                    <TrendingUp className="w-8 h-8 mb-3 text-green-200" />
                    <div className="text-2xl font-bold">V9.0</div>
                    <div className="text-sm opacity-90">Neueste Version</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-white">
                    <Users className="w-8 h-8 mb-3 text-green-200" />
                    <div className="text-2xl font-bold">1000s</div>
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
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <p className="text-lg font-semibold text-green-600 mb-1">{stat.label}</p>
                  <p className="text-sm text-gray-600">{stat.subtitle}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Products */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Proxmox Produktfamilie
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Umfassende Open-Source-Lösungen für Virtualisierung, Backup und E-Mail-Sicherheit
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {coreProducts.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105"
                >
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <IconComponent className="w-12 h-12" />
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                        v{product.version}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-green-100 text-sm">{product.description}</p>
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

      {/* Virtualization Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-green-100 text-green-700 px-6 py-3 rounded-full font-semibold mb-6">
              <Layers className="w-5 h-5 mr-2" />
              Compute, Network und Storage in einer Lösung
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Enterprise-Virtualisierung
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Proxmox VE kombiniert KVM-Hypervisor und Linux Container auf einer einzigen Plattform 
              mit software-definiertem Storage und Networking
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {virtualizationFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-full mb-6">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
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

      {/* What Makes Us Different */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-700">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Was uns unterscheidet
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Proxmox steht für Open-Source-Innovation, Unabhängigkeit und Benutzerfreundlichkeit
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {differentiators.map((differentiator, index) => {
              const IconComponent = differentiator.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm text-white rounded-full mb-6">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{differentiator.title}</h3>
                  <p className="text-green-100 leading-relaxed">{differentiator.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold text-white mb-8">Enterprise Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {enterpriseFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-200 mr-3 flex-shrink-0" />
                    <span className="text-white text-sm font-medium">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Starten Sie mit Proxmox
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Erleben Sie die Kraft der Open-Source-Virtualisierung. 
              Komplett kostenlos, ohne versteckte Kosten oder Lizenzgebühren.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50"
              >
                <Users className="w-5 h-5 mr-3" />
                Beratung anfordern
              </Link>
              <button className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300">
                <Zap className="w-5 h-5 mr-3" />
                Kostenlos herunterladen
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}