'use client';

import { motion } from 'framer-motion';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import {
  Server, CheckCircle, Star, ArrowRight,
  HardDrive, Network, Cloud, Monitor,
  Users, Award, ChevronRight, Zap, Database,
  Shield, BarChart3
} from 'lucide-react';

export default function VMwarePage() {
  const features = [
    'vSphere Hypervisor',
    'vCenter Management',
    'vSAN Software-Defined Storage',
    'NSX Network Virtualization',
    'Horizon Desktop Virtualization',
    'CloudHealth Cost Management',
    'vMotion Live Migration',
    'High Availability (HA)',
    'Distributed Resource Scheduler (DRS)',
    'VMware Tools',
    'vRealize Operations',
    'vRealize Automation'
  ];

  const benefits = [
    '95% bessere Ressourcenauslastung',
    'Reduzierte Betriebskosten um 50%',
    'Höhere Verfügbarkeit und Performance',
    'Einfache Migration und Skalierung',
    'Zentrales Management',
    'Automatisierte Workflows',
    'Multi-Cloud-Unterstützung',
    'Enterprise-Support'
  ];

  const stats = [
    { value: '1.000+', label: 'Virtualisierte Server', icon: Server },
    { value: '95%', label: 'Bessere Auslastung', icon: Zap },
    { value: '50%', label: 'Kosteneinsparung', icon: Award },
    { value: '99.9%', label: 'Verfügbarkeit', icon: Monitor }
  ];

  const virtualizationComponents = [
    {
      title: 'vSphere Hypervisor',
      description: 'Der branchenführende Hypervisor für die Virtualisierung von x86-Servern mit nahezu nativer Performance.',
      icon: Server
    },
    {
      title: 'vCenter Server',
      description: 'Zentrales Management für alle VMware-Infrastrukturkomponenten mit einheitlicher Benutzeroberfläche.',
      icon: Monitor
    },
    {
      title: 'vSAN',
      description: 'Software-definierter Storage, der lokale Festplatten in einen hochperformanten Shared-Storage-Pool verwandelt.',
      icon: HardDrive
    },
    {
      title: 'NSX',
      description: 'Netzwerk- und Sicherheitsvirtualisierung für agile, sichere und programmierbare Infrastrukturen.',
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
            <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-3 rounded-full mb-8">
              <Server className="w-6 h-6 mr-3" />
              <span className="text-lg font-bold">VMware Virtualisierung</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Enterprise
              <span className="block bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                Virtualisierung
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Leistungsstarke Virtualisierungslösungen für Server, Desktop und Cloud-Infrastruktur.
              Die weltweit führende Virtualisierungsplattform für Unternehmen jeder Größe.
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
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full mb-4">
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
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-8 text-white text-center h-96 flex flex-col justify-center items-center relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full -ml-12 -mb-12"></div>
                </div>

                <div className="relative z-10">
                  <Server className="w-20 h-20 mb-6 mx-auto" />
                  <h3 className="text-2xl font-bold mb-4">VMware</h3>
                  <p className="text-white/90 mb-6">Enterprise Virtualisierung</p>
                  <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 cursor-pointer">
                    <span>Beratungsgespräch</span>
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Virtualization Components Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16"
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          VMware Virtualisierungskomponenten
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {virtualizationComponents.map((component, index) => (
            <motion.div
              key={component.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <component.icon className="w-8 h-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">{component.title}</h3>
              </div>
              <p className="text-gray-600">{component.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Advanced Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-16 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Erweiterte Funktionen
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Live Migration</h3>
            <p className="text-gray-600">vMotion ermöglicht die Live-Migration von VMs ohne Ausfallzeiten</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">High Availability</h3>
            <p className="text-gray-600">Automatische Wiederherstellung bei Hardware-Ausfällen</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">DRS</h3>
            <p className="text-gray-600">Intelligente Lastverteilung und Ressourcenoptimierung</p>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Modernisieren Sie Ihre
              <span className="block">IT-Infrastruktur</span>
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              VMware hilft Ihnen, Ihre Server-Infrastruktur zu virtualisieren und
              signifikante Kosteneinsparungen sowie Performance-Verbesserungen zu erzielen.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50"
              >
                <Users className="w-5 h-5 mr-3" />
                Kostenlose Beratung
              </Link>
              <Link
                href="/produkte"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                <Server className="w-5 h-5 mr-3" />
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