'use client';

import { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Users, Newspaper, Building2, Target, Heart, Award, ArrowRight, Users2, Shield } from 'lucide-react';

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
      id: 'it-updates',
      title: 'IT-Sicherheitsupdates',
      description: 'Bleiben Sie informiert über aktuelle IT-Sicherheitsvorfälle, Updates und wichtige Änderungen in der IT-Branche.',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-scaleit-red to-red-600',
      link: '/it-sicherheitsupdates',
      features: ['Sicherheitsvorfälle', 'Software-Updates', 'Compliance-Änderungen', 'IT-Trends']
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

      {/* Team Section - Unternehmensseite Preview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-gradient-to-r from-scaleit-red to-purple-600 text-white px-6 py-3 rounded-full mb-8">
              <Users2 className="w-6 h-6 mr-3" />
              <span className="text-lg font-bold">Unser Team</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-scaleit-black mb-6">
              Die Menschen hinter
              <span className="ml-2 bg-gradient-to-r from-scaleit-red to-purple-600 bg-clip-text text-transparent">
                ScaleITS
              </span>
            </h2>

            <p className="text-xl text-scaleit-gray max-w-3xl mx-auto mb-12">
              Erfahren Sie mehr über unser erfahrenes Team von IT-Experten, die Ihre digitale Zukunft gestalten.
              Von der Geschäftsführung über Technik bis zum Vertrieb - wir sind Ihr kompetenter Partner.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Team Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/unternehmen/team-all.png"
                  alt="ScaleITS Team"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay für bessere Lesbarkeit */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Team Stats Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold">50+</div>
                        <div className="text-sm text-white/80">Mitarbeiter</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">15+</div>
                        <div className="text-sm text-white/80">Jahre Erfahrung</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">100%</div>
                        <div className="text-sm text-white/80">Engagement</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Team Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold text-scaleit-black mb-4">
                  Unser Team im Überblick
                </h3>
                <p className="text-lg text-scaleit-gray leading-relaxed mb-6">
                  Bei ScaleITS arbeiten erfahrene IT-Experten aus verschiedenen Fachbereichen zusammen,
                  um Ihnen die besten Lösungen zu bieten. Von der strategischen Geschäftsführung über
                  technische Entwicklung bis hin zum kompetenten Vertrieb - wir sind ein eingespieltes Team.
                </p>
              </div>

              {/* Team Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-scaleit-red to-red-600 rounded-lg flex items-center justify-center mb-4">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-scaleit-black mb-2">Geschäftsführung</h4>
                  <p className="text-sm text-scaleit-gray">Strategische Vision und langfristige Partnerschaften</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-scaleit-black mb-2">Technik & Entwicklung</h4>
                  <p className="text-sm text-scaleit-gray">Innovative Lösungen und technische Exzellenz</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-800 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-scaleit-black mb-2">Sales & Vertrieb</h4>
                  <p className="text-sm text-scaleit-gray">Persönliche Betreuung und maßgeschneiderte Beratung</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-scaleit-black mb-2">Backoffice</h4>
                  <p className="text-sm text-scaleit-gray">Reibungslose Abläufe und höchste Qualität</p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <Link
                  href="/unternehmen"
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-scaleit-red to-red-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <span className="text-lg">Lernen Sie uns kennen</span>
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
                <p className="text-sm text-scaleit-gray mt-3">
                  Entdecken Sie unser vollständiges Team und unsere Unternehmensgeschichte
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-scaleit-black to-gray-800">
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
      <section className="py-20 bg-gradient-to-r from-scaleit-red to-red-600">
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
