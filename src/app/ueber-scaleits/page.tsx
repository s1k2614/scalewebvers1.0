'use client';

import { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Users, Newspaper, Building2, Target, Heart, Award } from 'lucide-react';

export default function UeberScaleITSPage() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  // Memoize hover handlers für Performance
  const handleMouseEnter = useCallback((sectionId: string) => {
    setHoveredSection(sectionId);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredSection(null);
  }, []);

  // Memoize section data
  const sections = useMemo(() => [
    {
      id: 'unternehmen',
      title: 'Unser Unternehmen',
      description: 'Erfahren Sie mehr über ScaleITS - unsere Geschichte, Werte und Vision für die Zukunft der IT.',
      icon: <Building2 className="w-8 h-8" />,
      color: 'from-scaleit-red to-red-600',
      link: '/unternehmen',
      features: ['Unternehmensgeschichte', 'Unsere Werte', 'Team & Kultur', 'Zertifizierungen']
    },
    {
      id: 'neuigkeiten',
      title: 'Neuigkeiten & Jobs',
      description: 'Bleiben Sie auf dem Laufenden mit aktuellen Stellenangeboten und Unternehmensnews.',
      icon: <Newspaper className="w-8 h-8" />,
      color: 'from-scaleit-purple to-purple-600',
      link: '/ueber-scaleits/neuigkeiten',
      features: ['Stellenangebote', 'Unternehmensnews', 'Karrierechancen', 'Events & Veranstaltungen']
    }
  ], []);

  // Company stats
  const stats = useMemo(() => [
    {
      number: '50+',
      label: 'Mitarbeiter',
      icon: <Users className="w-6 h-6" />
    },
    {
      number: '10+',
      label: 'Jahre Erfahrung',
      icon: <Award className="w-6 h-6" />
    },
    {
      number: '500+',
      label: 'Projekte',
      icon: <Target className="w-6 h-6" />
    },
    {
      number: '100%',
      label: 'Kundenzufriedenheit',
      icon: <Heart className="w-6 h-6" />
    }
  ], []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-scaleit-black mb-6"
          >
            Über <span className="text-scaleit-red">ScaleITS</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-scaleit-gray max-w-3xl mx-auto mb-12"
          >
            Wir sind Ihr vertrauensvoller Partner für IT-Lösungen. Erfahren Sie mehr über unser Unternehmen,
            unsere Dienstleistungen und wie wir Ihnen helfen können, Ihre IT-Ziele zu erreichen.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-scaleit-red to-red-600 text-white rounded-lg">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-scaleit-black mb-2">
                    {stat.number}
                  </div>
                  <div className="text-scaleit-gray font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sections */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-scaleit-black text-center mb-16"
          >
            Mehr erfahren
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                onMouseEnter={() => handleMouseEnter(section.id)}
                onMouseLeave={handleMouseLeave}
              >
                <div className={`bg-gradient-to-r ${section.color} p-6 text-white`}>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white/20 rounded-lg">
                      {section.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{section.title}</h3>
                      <p className="text-white/90 mt-1">{section.description}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-scaleit-black mb-3">Enthält:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {section.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-scaleit-red rounded-full"></div>
                          <span className="text-sm text-scaleit-gray">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={section.link}
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-scaleit-red to-red-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200"
                  >
                    Mehr erfahren
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gradient-to-r from-scaleit-black to-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Unsere Mission
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Wir machen IT einfach, sicher und effizient. Mit unserem Expertenwissen und unserer
              Leidenschaft für Technologie helfen wir Unternehmen, ihre digitale Zukunft zu gestalten.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-lg font-semibold text-white mb-2">Innovation</h3>
                <p className="text-gray-300 text-sm">Stets auf dem neuesten Stand der Technologie</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-lg font-semibold text-white mb-2">Sicherheit</h3>
                <p className="text-gray-300 text-sm">Höchste Standards in Cybersecurity</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-lg font-semibold text-white mb-2">Partnerschaft</h3>
                <p className="text-gray-300 text-sm">Langfristige Zusammenarbeit mit unseren Kunden</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-scaleit-red to-red-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Bereit für die Zukunft?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Kontaktieren Sie uns und erfahren Sie, wie wir Ihr Unternehmen voranbringen können.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-scaleit-red font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              Kontakt aufnehmen
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
