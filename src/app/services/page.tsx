'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SimplicityBanner from '../../components/SimplicityBanner';

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  // Service-Kategorien
  const categories = useMemo(() => [
    { id: 'all', name: 'Alle Services', icon: '/icons/widgets_24dp_5F6368_FILL0_wght200_GRAD0_opsz24.svg' },
    { id: 'beratung', name: 'Beratung', icon: '/icons/psychology_alt_24dp_5F6368_FILL0_wght200_GRAD0_opsz24.svg' },
    { id: 'implementation', name: 'Implementation', icon: '/icons/settings_24dp_5F6368_FILL0_wght200_GRAD0_opsz24.svg' },
    { id: 'support', name: 'Support', icon: '/icons/help_24dp_5F6368_FILL0_wght200_GRAD0_opsz24.svg' }
  ], []);

  // Services Daten
  const services = useMemo(() => [
    {
      id: 'it-beratung',
      title: 'IT-Beratung & Strategie',
      description: 'Professionelle IT-Beratung für optimale Technologieentscheidungen und strategische Ausrichtung Ihres Unternehmens.',
      icon: '/icons/computer_24dp_5F6368_FILL0_wght200_GRAD0_opsz24.svg',
      category: 'beratung',
      features: [
        'Technologie-Assessment',
        'IT-Strategie Entwicklung',
        'Budgetplanung & Kostenoptimierung',
        'Compliance & Risikoanalyse'
      ],
      link: '/services/beratung'
    },
    {
      id: 'system-integration',
      title: 'Systemintegration',
      description: 'Nahtlose Integration verschiedener IT-Systeme für optimale Effizienz und Datenfluss.',
      icon: '/icons/hub_24dp_5F6368_FILL0_wght200_GRAD0_opsz24.svg',
      category: 'implementation',
      features: [
        'API-Entwicklung',
        'Middleware-Integration',
        'Datenmigration',
        'Systemoptimierung'
      ],
      link: '/services/implementation'
    },
    {
      id: 'cloud-services',
      title: 'Cloud-Services',
      description: 'Professionelle Cloud-Migration und -Management für skalierbare und sichere IT-Infrastruktur.',
      icon: '/icons/cloud_done_24dp_5F6368_FILL0_wght200_GRAD0_opsz24.svg',
      category: 'implementation',
      features: [
        'Cloud-Migration',
        'Infrastructure as Code',
        'Multi-Cloud-Management',
        'Security & Compliance'
      ],
      link: '/microsoft'
    },
    {
      id: 'wartung-support',
      title: 'Wartung & Support',
      description: 'Umfassender IT-Support und proaktive Wartung für maximale Systemverfügbarkeit.',
      icon: '/icons/security_24dp_5F6368_FILL0_wght200_GRAD0_opsz24.svg',
      category: 'support',
      features: [
        '24/7 Monitoring',
        'Proaktive Wartung',
        'Remote-Support',
        'Notfall-Intervention'
      ],
      link: '/services/wartung'
    },
    {
      id: 'projektmanagement',
      title: 'Projektmanagement',
      description: 'Professionelles Projektmanagement mit bewährten Methoden und transparenter Kommunikation.',
      icon: '/icons/timeline_24dp_5F6368_FILL0_wght200_GRAD0_opsz24.svg',
      category: 'beratung',
      features: [
        'Agile Methoden',
        'Risikomanagement',
        'Qualitätssicherung',
        'Stakeholder-Management'
      ],
      link: '/services/projekt'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Umfassender Schutz Ihrer IT-Infrastruktur vor aktuellen Bedrohungen und Angriffen.',
      icon: '/icons/verified_user_24dp_5F6368_FILL0_wght200_GRAD0_opsz24.svg',
      category: 'support',
      features: [
        'Sicherheitsaudits',
        'Firewall-Management',
        'Endpoint-Schutz',
        'Incident-Response'
      ],
      link: '/services/wartung'
    }
  ], []);

  // Gefilterte Services basierend auf aktiver Kategorie
  const filteredServices = useMemo(() => {
    if (activeCategory === 'all') return services;
    return services.filter(service => service.category === activeCategory);
  }, [activeCategory, services]);

  // Service-Karte Komponente
  const ServiceCard = ({ service, index }: {
    service: typeof services[0],
    index: number
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <Link href={service.link}>
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 h-full border border-scaleit-gray/10 hover:border-scaleit-red/20">
          {/* Icon */}
          <div className="w-16 h-16 bg-gradient-to-br from-scaleit-red to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <img
              src={service.icon}
              alt=""
              className="w-8 h-8 filter brightness-0 invert"
              onError={(e) => {
                // Fallback für fehlende Icons
                e.currentTarget.style.display = 'none';
                (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'block';
              }}
            />
            <div className="hidden w-8 h-8 bg-scaleit-gray rounded"></div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-scaleit-black group-hover:text-scaleit-red transition-colors">
              {service.title}
            </h3>

            <p className="text-scaleit-gray leading-relaxed">
              {service.description}
            </p>

            {/* Features */}
            <div className="space-y-2">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center text-sm text-scaleit-gray">
                  <div className="w-2 h-2 bg-scaleit-red rounded-full mr-3 flex-shrink-0"></div>
                  {feature}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-scaleit-gray/10">
              <div className="flex items-center justify-between">
                <span className="text-scaleit-red font-semibold">Mehr erfahren</span>
                <div className="w-8 h-8 bg-scaleit-red/10 rounded-full flex items-center justify-center group-hover:bg-scaleit-red group-hover:text-white transition-all duration-300">
                  <span className="text-scaleit-red group-hover:text-white">→</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-scaleit-white via-white to-scaleit-gray/5">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <div className="inline-flex items-center bg-gradient-to-r from-scaleit-red to-red-600 text-white px-6 py-3 rounded-full mb-8 shadow-lg">
                <img src="/icons/settings_24dp_5F6368_FILL0_wght200_GRAD0_opsz24.svg" alt="" className="w-5 h-5 mr-3 filter brightness-0 invert" />
                <span className="font-semibold">ScaleITS Services</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-scaleit-gray to-scaleit-red bg-clip-text text-transparent">
                  Professionelle IT-Services
                </span>
              </h1>

              <p className="text-xl text-scaleit-gray max-w-3xl mx-auto leading-relaxed">
                Von der strategischen Beratung über die Implementierung bis zum kontinuierlichen Support -
                wir begleiten Ihr Unternehmen auf dem Weg zur digitalen Exzellenz.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            >
              {[
                { value: '600+', label: 'Zufriedene Kunden', icon: '/icons/group_24dp_5F6368_FILL0_wght200_GRAD0_opsz24.svg' },
                { value: '200+', label: 'Erfolgreiche Projekte', icon: '/icons/emoji_events_24dp_5F6368_FILL0_wght200_GRAD0_opsz24.svg' },
                { value: '15+', label: 'Jahre Erfahrung', icon: '/icons/trending_up_24dp_5F6368_FILL0_wght200_GRAD0_opsz24.svg' },
                { value: '24/7', label: 'Support-Verfügbarkeit', icon: '/icons/notifications_24dp_5F6368_FILL0_wght200_GRAD0_opsz24.svg' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-scaleit-red to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <img src={stat.icon} alt="" className="w-7 h-7 filter brightness-0 invert" />
                  </div>
                  <div className="text-3xl font-bold text-scaleit-black mb-2">{stat.value}</div>
                  <div className="text-scaleit-gray font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="pb-12 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-scaleit-red to-red-600 text-white shadow-lg'
                      : 'bg-white text-scaleit-gray hover:bg-scaleit-gray/10 border border-scaleit-gray/20'
                  }`}
                >
                  <img
                    src={category.icon}
                    alt=""
                    className={`w-5 h-5 mr-3 filter ${
                      activeCategory === category.id ? 'brightness-0 invert' : 'brightness-0'
                    }`}
                  />
                  {category.name}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-scaleit-red to-red-600 rounded-3xl p-12 text-white shadow-2xl"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Bereit für Ihre digitale Transformation?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Lassen Sie uns gemeinsam die IT-Lösungen entwickeln, die Ihr Unternehmen voranbringen.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact"
                      className="inline-flex items-center px-8 py-4 bg-white text-scaleit-red rounded-full font-bold text-lg hover:bg-scaleit-gray/10 transition-all duration-300 hover:scale-105 shadow-lg">
                  <img src="/icons/contact_support_24dp_5F6368_FILL0_wght200_GRAD0_opsz24.svg" alt="" className="w-6 h-6 mr-3 filter brightness-0 invert-0" />
                  Kostenlose Beratung
                </Link>

                <Link href="/services/projekt"
                      className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-scaleit-red transition-all duration-300">
                  <img src="/icons/devices_24dp_5F6368_FILL0_wght200_GRAD0_opsz24.svg" alt="" className="w-6 h-6 mr-3 filter brightness-0 invert" />
                  Projekt starten
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <SimplicityBanner />
      <Footer />
    </>
  );
}
