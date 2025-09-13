'use client';

import { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function ServicesPage() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  // Memoize hover handlers für Performance
  const handleMouseEnter = useCallback((serviceId: string) => {
    setHoveredService(serviceId);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredService(null);
  }, []);

  // Memoize service data to prevent unnecessary re-renders
  const coreServices = useMemo(() => [
    {
      id: 'beratung',
      title: 'IT-Beratung & Strategische Planung',
      description: 'Professionelle IT-Beratung für optimale Technologieentscheidungen und strategische Ausrichtung Ihres Unternehmens.',
      icon: '⚙️',
      color: 'from-scaleit-red to-red-600',
      link: '/services/beratung',
      features: ['Technologie-Assessment', 'IT-Strategie', 'Budgetplanung', 'Compliance-Beratung']
    },
    {
      id: 'implementation',
      title: 'Implementation & Deployment',
      description: 'Reibungslose Implementierung und Bereitstellung von IT-Lösungen mit minimalen Ausfallzeiten.',
      icon: '🚀',
      color: 'from-scaleit-red to-red-600',
      link: '/services/implementation',
      features: ['System-Migration', 'Software-Rollout', 'Integration', 'Testing & QA']
    },
    {
      id: 'wartung',
      title: 'Wartung & Support',
      description: '24/7 Wartung und Support für alle Ihre IT-Systeme mit proaktiver Überwachung und schneller Problemlösung.',
      icon: '🔧',
      color: 'from-scaleit-red to-red-600',
      link: '/services/wartung',
      features: ['24/7 Monitoring', 'Proaktive Wartung', 'Remote Support', 'Update Management']
    }
  ], []);

  const managedServices = useMemo(() => [
    {
      id: 'acmp',
      title: 'ACMP Client Management',
      description: 'Advanced Client Management Platform für umfassende IT-Asset-Verwaltung und Systemoptimierung.',
      icon: '🛡️',
      color: 'from-scaleit-red to-red-600',
      link: '/acmp',
      features: ['Asset Management', 'Software Deployment', 'Patch Management', 'Reporting']
    },
    {
      id: 'hornetsecurity',
      title: 'Hornetsecurity E-Mail Security',
      description: 'Umfassende E-Mail-Sicherheitslösungen mit Spam-Schutz, Archivierung und Backup-Services.',
      icon: '📧',
      color: 'from-scaleit-red to-red-600',
      link: '/hornetsecurity',
      features: ['Spam Protection', 'Email Archiving', 'Backup Service', 'Threat Protection']
    },
    {
      id: 'arctic-wolf',
      title: 'Arctic Wolf Managed Detection',
      description: 'Professionelle Managed Detection and Response Services für maximale IT-Sicherheit.',
      icon: '👁️',
      color: 'from-scaleit-red to-red-600',
      link: '/arctic-wolf',
      features: ['24/7 SOC', 'Threat Hunting', 'Incident Response', 'Security Analytics']
    }
  ], []);

  const enterpriseServices = useMemo(() => [
    {
      id: 'microsoft',
      title: 'Microsoft 365 & Azure',
      description: 'Vollständige Microsoft Cloud-Lösungen von der Migration bis zur fortlaufenden Optimierung.',
      icon: '🏢',
      color: 'from-scaleit-red to-red-600',
      link: '/microsoft',
      features: ['Office 365', 'Azure Cloud', 'Teams Setup', 'Security & Compliance']
    },
    {
      id: 'projekt',
      title: 'IT-Projekte & Migration',
      description: 'Komplexe IT-Projekte und Migrationen mit professionellem Projektmanagement und bewährten Methoden.',
      icon: '📊',
      color: 'from-scaleit-red to-red-600',
      link: '/projekt',
      features: ['Projektmanagement', 'Cloud Migration', 'System Integration', 'Change Management']
    }
  ], []);

  const stats = useMemo(() => [
    { label: 'Zufriedene Kunden', value: '600+', icon: '👥' },
    { label: 'Erfolgreiche Projekte', value: '200+', icon: '✅' },
    { label: 'Jahre Erfahrung', value: '15+', icon: '🏆' },
    { label: 'Support Verfügbarkeit', value: '24/7', icon: '🕒' }
  ], []);

  // Service Card Component - optimiert für Performance
  const ServiceCard = ({ service, index }: { 
    service: {
      id: string;
      title: string;
      description: string;
      icon: string;
      color: string;
      link: string;
      features: string[];
    }, 
    index: number 
  }) => {
    // Memoize hover state für Performance
    const isHovered = hoveredService === service.id;
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative"
        onMouseEnter={() => handleMouseEnter(service.id)}
        onMouseLeave={handleMouseLeave}
      >
        <Link href={service.link}>
          <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${service.color} p-8 h-full min-h-[320px] 
                         transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer`}>
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-32 h-32 rounded-full bg-white/20"></div>
              <div className="absolute bottom-4 left-4 w-20 h-20 rounded-full bg-white/10"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col">
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm text-3xl">
                  {service.icon}
                </div>
              </div>

              {/* Title & Description */}
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-200 transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/90 text-base leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature: string, idx: number) => (
                  <div key={idx} className="flex items-center text-white/80 text-sm">
                    <span className="w-4 h-4 mr-2 text-white/60">✓</span>
                    {feature}
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="flex items-center justify-between">
                <span className="text-white/80 text-sm font-medium">Mehr erfahren</span>
                <div className={`w-10 h-10 bg-white/20 rounded-full flex items-center justify-center 
                               transform transition-transform duration-300 
                               ${isHovered ? 'translate-x-2' : ''}`}>
                  <span className="text-white">→</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-scaleit-white to-scaleit-gray/10">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-scaleit-red/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-scaleit-gray/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <div className="inline-flex items-center bg-gradient-scaleit text-white px-8 py-4 rounded-full shadow-2xl mb-8">
                <span className="mr-3 text-xl">⚙️</span>
                <span className="font-semibold text-lg">Alle Services im Überblick</span>
              </div>

              <h1 className="text-6xl md:text-7xl font-bold mb-8">
                <span className="bg-gradient-to-r from-gray-900 to-red-600 bg-clip-text text-transparent">
                  Unsere Dienstleistungen
                </span>
              </h1>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Umfassende IT-Services für Ihr Unternehmen - von strategischer Beratung über 
                Managed Services bis hin zu komplexen Enterprise-Lösungen.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-scaleit-red to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Core Services */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-scaleit-red to-red-600 bg-clip-text text-transparent">
                  Core Services
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Unsere Grundleistungen für eine solide IT-Infrastruktur
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {coreServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Managed Services */}
        <section className="py-20 px-4 bg-white/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-scaleit-red to-red-600 bg-clip-text text-transparent">
                  Managed Services
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Spezialisierte Managed Services für maximale Sicherheit und Effizienz
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {managedServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Services */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-scaleit-red to-red-600 bg-clip-text text-transparent">
                  Enterprise Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Umfassende Enterprise-Lösungen für komplexe Anforderungen
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {enterpriseServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-scaleit rounded-3xl p-12 text-white"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Bereit für den nächsten Schritt?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Lassen Sie uns gemeinsam die perfekte IT-Lösung für Ihr Unternehmen finden.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" 
                      className="inline-flex items-center px-8 py-4 bg-white text-scaleit-red rounded-full font-bold text-lg hover:bg-scaleit-gray/10 transition-all duration-300 hover:scale-105">
                  <span className="mr-3">📞</span>
                  Kostenlose Beratung
                </Link>
                
                <Link href="/projekt"
                      className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-300">
                  <span className="mr-3">📊</span>
                  Projekt starten
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
    <Footer />
    </>
  );
}
