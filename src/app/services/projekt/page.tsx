'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import SimplicityBanner from '../../../components/SimplicityBanner';

export default function ProjektPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const projectTypes = [
    {
      id: 'migration',
      title: 'Cloud Migration',
      description: 'Nahtlose Migration Ihrer Infrastruktur in die Cloud',
      icon: '/icons/cloud_done_24dp_5F6368_FILL0_wght200_GRAD0_opsz24.svg',
      features: ['Azure Migration', 'AWS Migration', 'Hybrid Cloud Setup']
    },
    {
      id: 'implementation',
      title: 'System Implementation',
      description: 'Professionelle Implementierung neuer IT-Systeme',
      icon: '/icons/settings_24dp_5F6368_FILL0_wght200_GRAD0_opsz24.svg',
      features: ['Requirements Analysis', 'Custom Development', 'Testing & Deployment']
    },
    {
      id: 'integration',
      title: 'System Integration',
      description: 'Vereinheitlichung Ihrer IT-Landschaft',
      icon: '/icons/devices_24dp_5F6368_FILL0_wght200_GRAD0_opsz24.svg',
      features: ['API Integration', 'Data Synchronization', 'Workflow Automation']
    }
  ];

  const phases = [
    {
      phase: 'Planung',
      title: 'Anforderungsanalyse & Planung',
      description: 'Detaillierte Analyse Ihrer Anforderungen und Erstellung eines maßgeschneiderten Projektplans.',
      duration: '1-2 Wochen'
    },
    {
      phase: 'Design',
      title: 'Lösungsdesign & Architektur',
      description: 'Entwicklung der technischen Architektur und detaillierter Spezifikationen.',
      duration: '2-4 Wochen'
    },
    {
      phase: 'Implementation',
      title: 'Implementierung & Entwicklung',
      description: 'Professionelle Umsetzung der geplanten Lösungen mit regelmäßigen Status-Updates.',
      duration: 'Projektabhängig'
    },
    {
      phase: 'Testing',
      title: 'Testen & Qualitätssicherung',
      description: 'Umfassende Tests und Qualitätssicherung vor dem Go-Live.',
      duration: '1-3 Wochen'
    },
    {
      phase: 'Go-Live',
      title: 'Deployment & Go-Live',
      description: 'Reibungslose Einführung der neuen Lösungen mit umfassender Unterstützung.',
      duration: '1 Woche'
    },
    {
      phase: 'Support',
      title: 'Nachbetreuung & Support',
      description: 'Kontinuierliche Betreuung und Optimierung nach dem Go-Live.',
      duration: '3-6 Monate'
    }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-scaleit-white to-scaleit-gray/10">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <div className="inline-flex items-center bg-gradient-scaleit text-white px-8 py-4 rounded-full shadow-2xl mb-8">
                <img src="/icons/devices_24dp_5F6368_FILL0_wght200_GRAD0_opsz24.svg" alt="" className="w-6 h-6 mr-3 filter brightness-0 invert" />
                <span className="font-semibold text-lg">IT-Projekte & Migration</span>
              </div>

              <h1 className="text-6xl md:text-7xl font-bold mb-8">
                <span className="bg-gradient-to-r from-scaleit-gray to-scaleit-red bg-clip-text text-transparent">
                  Komplexe IT-Projekte
                </span>
              </h1>

              <p className="text-xl text-scaleit-gray max-w-3xl mx-auto leading-relaxed mb-8">
                Professionelle Durchführung Ihrer IT-Projekte von der Planung bis zum erfolgreichen Go-Live.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact"
                      className="inline-flex items-center px-8 py-4 bg-scaleit-red text-white rounded-full font-bold text-lg hover:bg-red-700 transition-all duration-300 hover:scale-105">
                  <img src="/icons/contact_support_24dp_5F6368_FILL0_wght200_GRAD0_opsz24.svg" alt="" className="w-6 h-6 mr-3 filter brightness-0 invert" />
                  Projekt anfragen
                </Link>
                <Link href="#projektarten"
                      className="inline-flex items-center px-8 py-4 border-2 border-scaleit-red text-scaleit-red rounded-full font-bold text-lg hover:bg-scaleit-red hover:text-white transition-all duration-300">
                  <img src="/icons/search_24dp_5F6368_FILL0_wght200_GRAD0_opsz24.svg" alt="" className="w-6 h-6 mr-3" />
                  Mehr erfahren
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Types */}
        <section id="projektarten" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-scaleit-gray to-scaleit-red bg-clip-text text-transparent">
                  Unsere Projektarten
                </span>
              </h2>
              <p className="text-xl text-scaleit-gray max-w-3xl mx-auto">
                Maßgeschneiderte Lösungen für Ihre individuellen Anforderungen
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {projectTypes.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-scaleit-gray/10 hover:border-scaleit-red/20"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-scaleit-red to-red-600 rounded-2xl flex items-center justify-center mb-6">
                    <img src={project.icon} alt="" className="w-8 h-8 filter brightness-0 invert" />
                  </div>

                  <h3 className="text-2xl font-bold text-scaleit-black mb-4">
                    {project.title}
                  </h3>

                  <p className="text-scaleit-gray leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-scaleit-gray">
                        <div className="w-2 h-2 bg-scaleit-red rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Phases */}
        <section className="py-16 px-4 bg-scaleit-gray/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-scaleit-gray to-scaleit-red bg-clip-text text-transparent">
                  Unser Projektprozess
                </span>
              </h2>
              <p className="text-xl text-scaleit-gray max-w-3xl mx-auto">
                Strukturierte Vorgehensweise für maximale Transparenz und Erfolg
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {phases.map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-8 border border-scaleit-gray/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-scaleit-red to-red-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-scaleit-black">{phase.phase}</h3>
                      <p className="text-scaleit-red font-medium text-sm">{phase.duration}</p>
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold text-scaleit-black mb-3">
                    {phase.title}
                  </h4>

                  <p className="text-scaleit-gray leading-relaxed">
                    {phase.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-scaleit rounded-3xl p-12 text-white"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Bereit für Ihr nächstes Projekt?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Lassen Sie uns gemeinsam Ihre IT-Vision verwirklichen.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact"
                      className="inline-flex items-center px-8 py-4 bg-white text-scaleit-red rounded-full font-bold text-lg hover:bg-scaleit-gray/10 transition-all duration-300 hover:scale-105">
                  <img src="/icons/contact_support_24dp_5F6368_FILL0_wght200_GRAD0_opsz24.svg" alt="" className="w-6 h-6 mr-3 filter brightness-0 invert-0" />
                  Projekt starten
                </Link>

                <Link href="/services"
                      className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-scaleit-red transition-all duration-300">
                  <img src="/icons/arrow_back_24dp_5F6368_FILL0_wght200_GRAD0_opsz24.svg" alt="" className="w-6 h-6 mr-3 filter brightness-0 invert" />
                  Zurück zu Services
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