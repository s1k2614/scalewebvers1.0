'use client';

import { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Star, Quote, Building2, Users, Award, CheckCircle, ArrowRight, MapPin, Calendar, Trophy } from 'lucide-react';

export default function ReferenzenPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Memoize hover handlers für Performance
  const handleMouseEnter = useCallback((cardId: string) => {
    setHoveredCard(cardId);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredCard(null);
  }, []);

  // Memoize testimonials data
  const testimonials = useMemo(() => [
    {
      id: 'testimonial-1',
      company: 'Ames Yavuz',
      industry: 'Kunstgalerie',
      size: 'International',
      logo: '/images/logos/ames-yavuz.svg',
      quote: 'Das Team von ScaleITS war 20% schneller mit der Umsetzung fertig als im Angebot angegeben. Sie sind wirklich professionell und die Zusammenarbeit lief hervorragend!',
      author: 'Glen Ames',
      position: 'CEO',
      rating: 5,
      services: ['beReady', 'beProductive', 'beSafe', 'Microsoft 365'],
      projectDuration: '4 Monate',
      location: 'Singapur, Sydney, München',
      featured: true,
      caseStudyLink: '/referenzen/ames-yavuz'
    },
    {
      id: 'testimonial-2',
      company: 'Kanzlei Schmidt & Partner',
      industry: 'Rechtsberatung',
      size: '25 Mitarbeiter',
      logo: '/images/logos/company2.svg',
      quote: 'Die Sicherheit unserer sensiblen Daten hat höchste Priorität. Mit ScaleITS und ihren Sicherheitslösungen fühlen wir uns optimal geschützt.',
      author: 'Frau Schmidt',
      position: 'Geschäftsführerin',
      rating: 5,
      services: ['Hornetsecurity', 'Secutec', 'Microsoft 365'],
      projectDuration: '4 Monate',
      location: 'Stuttgart'
    },
    {
      id: 'testimonial-3',
      company: 'TechStart Solutions AG',
      industry: 'Softwareentwicklung',
      size: '80 Mitarbeiter',
      logo: '/images/logos/company3.svg',
      quote: 'Als Tech-Unternehmen brauchen wir eine zuverlässige IT-Infrastruktur. ScaleITS liefert genau das - professionell und zuverlässig.',
      author: 'Herr Wagner',
      position: 'CTO',
      rating: 5,
      services: ['Proxmox', 'VMware', 'Arctic Wolf SOC'],
      projectDuration: '6 Monate',
      location: 'Berlin'
    },
    {
      id: 'testimonial-4',
      company: 'Handelsunternehmen KG',
      industry: 'Einzelhandel',
      size: '45 Mitarbeiter',
      logo: '/images/logos/company4.svg',
      quote: 'Die Umstellung auf die Cloud-Lösungen von ScaleITS war nahtlos. Unsere Filialen sind jetzt perfekt vernetzt und effizient.',
      author: 'Herr Bauer',
      position: 'Filialleiter',
      rating: 5,
      services: ['Microsoft Azure', '3CX Telefonie', 'Wartung'],
      projectDuration: '5 Monate',
      location: 'Hamburg'
    },
    {
      id: 'testimonial-5',
      company: 'Bildungseinrichtung GmbH',
      industry: 'Bildung',
      size: '200 Mitarbeiter',
      logo: '/images/logos/company5.svg',
      quote: 'Für unsere Schule war Datenschutz und Sicherheit entscheidend. ScaleITS hat alle Anforderungen perfekt umgesetzt.',
      author: 'Frau Weber',
      position: 'Schulleiterin',
      rating: 5,
      services: ['Client Management', 'Sicherheitslösungen', 'Support'],
      projectDuration: '9 Monate',
      location: 'Köln'
    },
    {
      id: 'testimonial-6',
      company: 'Logistik Gruppe',
      industry: 'Logistik',
      size: '300 Mitarbeiter',
      logo: '/images/logos/company6.svg',
      quote: 'Die 24/7-Verfügbarkeit unserer IT-Systeme ist kritisch für unser Geschäft. ScaleITS garantiert uns diese Sicherheit.',
      author: 'Herr Fischer',
      position: 'IT-Direktor',
      rating: 5,
      services: ['Managed SOC', '24/7 Monitoring', 'Notfall-Support'],
      projectDuration: '12 Monate',
      location: 'Frankfurt'
    },
    {
      id: 'testimonial-7',
      company: 'SPN Service Partner Netzwerk',
      industry: 'Automobil-Service',
      size: '1000+ Werkstätten',
      logo: '/images/logos/spn-logo.svg',
      quote: 'Mir gefällt, dass ich immer dieselben Personen am Telefon habe. Die kennen unsere Struktur, ich muss nichts erklären... Das fühlt sich gut an.',
      author: 'Dimitra Theocharidou-Sohns',
      position: 'Geschäftsführerin',
      rating: 5,
      services: ['beReady', 'beProductive', 'beSafe', 'beConnected', 'Microsoft 365', 'Hornetsecurity'],
      projectDuration: '18 Monate',
      location: 'Deutschland',
      featured: true,
      caseStudyLink: '/referenzen/spn-service-partner-netzwerk'
    }
  ], []);

  // Stats data
  const stats = useMemo(() => [
    {
      number: '150+',
      label: 'Zufriedene Kunden',
      icon: <Users className="w-8 h-8" />
    },
    {
      number: '98%',
      label: 'Kundenzufriedenheit',
      icon: <Trophy className="w-8 h-8" />
    },
    {
      number: '50+',
      label: 'Projekte/Jahr',
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      number: '10+',
      label: 'Jahre Erfahrung',
      icon: <Award className="w-8 h-8" />
    }
  ], []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <div className="p-4 bg-gradient-to-r from-scaleit-red to-red-600 text-white rounded-full">
              <Star className="w-12 h-12" />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-scaleit-black mb-6"
          >
            Unsere <span className="text-scaleit-red">Referenzen</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-scaleit-gray max-w-3xl mx-auto mb-8"
          >
            Erfahren Sie, wie wir Unternehmen aus verschiedenen Branchen bei ihrer
            digitalen Transformation unterstützt und erfolgreich begleitet haben.
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

      {/* Testimonials Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-scaleit-black text-center mb-16"
          >
            Was unsere Kunden sagen
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col min-h-[500px] ${testimonial.featured ? 'ring-2 ring-scaleit-red transform hover:scale-105' : ''}`}
                onMouseEnter={() => handleMouseEnter(testimonial.id)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-scaleit-red to-red-600 p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Building2 className="w-6 h-6" />
                      <div>
                        <h3 className="font-bold text-lg">{testimonial.company}</h3>
                        <p className="text-red-100 text-sm">{testimonial.industry} • {testimonial.size}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-red-100">
                    <MapPin className="w-4 h-4" />
                    <span>{testimonial.location}</span>
                    <span className="text-red-200">•</span>
                    <Calendar className="w-4 h-4" />
                    <span>{testimonial.projectDuration}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="mb-6">
                    <Quote className="w-8 h-8 text-scaleit-red mb-3" />
                    <p className="text-scaleit-gray italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  {/* Author */}
                  <div className="mb-4">
                    <div className="font-semibold text-scaleit-black">{testimonial.author}</div>
                    <div className="text-sm text-scaleit-gray">{testimonial.position}</div>
                  </div>

                  {/* Services */}
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-scaleit-black mb-2">Genutzte Services:</div>
                    <div className="flex flex-wrap gap-2">
                      {testimonial.services.map((service, serviceIndex) => (
                        <span
                          key={serviceIndex}
                          className="px-2 py-1 bg-red-50 text-scaleit-red text-xs rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Featured Case Study Link */}
                  {testimonial.featured && (
                    <div className="mt-auto">
                      <Link
                        href={testimonial.caseStudyLink}
                        className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-scaleit-red to-red-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 text-base"
                      >
                        Ausführliche Case Study lesen
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-scaleit-red to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Werden Sie Teil unserer Erfolgsgeschichte
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam Ihre IT-Infrastruktur optimieren und Ihre digitale Zukunft gestalten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-scaleit-red font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 shadow-lg"
              >
                Kostenlose Beratung
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-scaleit-red transition-all duration-200"
              >
                Unsere Services entdecken
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}