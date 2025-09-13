'use client';

import { motion } from 'framer-motion';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import {
  HardDrive, CheckCircle, Star, ArrowRight,
  Server, Network, Cloud, Monitor,
  Users, Award, ChevronRight, Zap, Database,
  Shield
} from 'lucide-react';

export default function ProxmoxPage() {
  const features = [
    'KVM & LXC Container',
    'Web-basiertes Management',
    'Live Migration',
    'Backup & Restore',
    'High Availability Clustering',
    'Open-Source & Kostenlos',
    'ZFS & Ceph Integration',
    'Firewall & Security',
    'API für Automation',
    'Snapshot Management',
    'Live Backup',
    'Multi-Storage Support'
  ];

  const benefits = [
    '100% kostenlose Lösung',
    'Hohe Performance und Stabilität',
    'Umfangreiche Community-Unterstützung',
    'Flexible Anpassungsmöglichkeiten',
    'Enterprise-Grade Features',
    'Nahezu unbegrenzte Skalierbarkeit',
    'Vollständige Kontrolle über die Infrastruktur',
    'Regelmäßige Updates und Sicherheitspatches'
  ];

  const stats = [
    { value: '100%', label: 'Kostenlos', icon: Award },
    { value: 'KVM+LXC', label: 'Virtualisierung', icon: Server },
    { value: '24/7', label: 'Community Support', icon: Users },
    { value: 'Open', label: 'Source', icon: Database }
  ];

  const virtualizationTypes = [
    {
      title: 'KVM (Kernel-based Virtual Machine)',
      description: 'Vollständige Virtualisierung für Windows, Linux und andere Betriebssysteme mit nahezu nativer Performance.',
      icon: Server
    },
    {
      title: 'LXC Container',
      description: 'Leichte Container-Virtualisierung für Linux-Systeme mit minimalem Overhead und schnellerem Start.',
      icon: Database
    },
    {
      title: 'Proxmox Backup Server',
      description: 'Dediziertes Backup-System für sichere Datensicherung mit Deduplizierung und Verschlüsselung.',
      icon: HardDrive
    },
    {
      title: 'Proxmox Mail Gateway',
      description: 'E-Mail-Sicherheitslösung mit Anti-Spam, Anti-Virus und Verschlüsselung für Unternehmenskommunikation.',
      icon: Network
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
            <div className="inline-flex items-center bg-gradient-to-r from-orange-600 to-orange-800 text-white px-6 py-3 rounded-full mb-8">
              <HardDrive className="w-6 h-6 mr-3" />
              <span className="text-lg font-bold">Proxmox Virtualisierung</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Open-Source
              <span className="block bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
                Virtualisierung
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Kostenlose Open-Source-Virtualisierung mit Web-Interface und Enterprise-Features.
              Die flexible Alternative zu kommerziellen Virtualisierungslösungen.
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
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-600 to-orange-800 text-white rounded-full mb-4">
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

      {/* Features & Benefits */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Funktionen</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">Vorteile</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
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
              <div className="bg-gradient-to-br from-orange-600 to-orange-800 rounded-3xl p-8 text-white text-center h-96 flex flex-col justify-center items-center relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full -ml-12 -mb-12"></div>
                </div>

                <div className="relative z-10">
                  <HardDrive className="w-20 h-20 mb-6 mx-auto" />
                  <h3 className="text-2xl font-bold mb-4">Proxmox VE</h3>
                  <p className="text-white/90 mb-6">Open-Source Virtualisierung</p>
                  <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 cursor-pointer">
                    <span>Download starten</span>
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Virtualization Types Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16"
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Proxmox Produktpalette
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {virtualizationTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <type.icon className="w-8 h-8 text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">{type.title}</h3>
              </div>
              <p className="text-gray-600">{type.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Advanced Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-16 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Erweiterte Funktionen
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Live Migration</h3>
            <p className="text-gray-600">Nahtloses Verschieben von VMs zwischen Hosts ohne Ausfallzeiten</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">High Availability</h3>
            <p className="text-gray-600">Automatisches Failover und Load Balancing für maximale Verfügbarkeit</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Cloud className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Ceph Integration</h3>
            <p className="text-gray-600">Software-definierter Storage mit automatischer Replikation</p>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Kostenlose
              <span className="block">Virtualisierungslösung</span>
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Proxmox VE bietet Ihnen eine vollständig kostenlose Alternative zu kommerziellen
              Virtualisierungslösungen mit allen wichtigen Enterprise-Features.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50"
              >
                <Users className="w-5 h-5 mr-3" />
                Kostenlose Beratung
              </Link>
              <Link
                href="/produkte"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300"
              >
                <HardDrive className="w-5 h-5 mr-3" />
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