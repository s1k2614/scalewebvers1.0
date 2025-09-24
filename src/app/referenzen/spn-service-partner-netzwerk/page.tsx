'use client';

import { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import { ArrowLeft, Quote, CheckCircle, Users, Globe, Shield, Zap, Award, Star, ArrowRight, MapPin, Calendar, AlertTriangle, Phone, Cloud, Lock } from 'lucide-react';

export default function SPNCaseStudyPage() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  // Memoize hover handlers für Performance
  const handleMouseEnter = useCallback((sectionId: string) => {
    setHoveredSection(sectionId);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredSection(null);
  }, []);

  // Project highlights
  const highlights = useMemo(() => [
    {
      title: '1000+ Werkstätten',
      description: 'Service Partner Netzwerk von ADAC und Ergo Versicherung',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: '18 Monate',
      description: 'Komplette IT-Transformation',
      icon: <Calendar className="w-6 h-6" />
    },
    {
      title: 'beReady, beProductive, beSafe, beConnected',
      description: 'Alle vier ScaleITS Module im Einsatz',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Premium ohne Premium-Zuschlag',
      description: 'Höchste Qualität zu fairen Preisen',
      icon: <Award className="w-6 h-6" />
    }
  ], []);

  // Case study sections
  const sections = useMemo(() => [
    {
      id: 'challenge',
      title: 'Die Herausforderung',
      subtitle: 'Von Freelancern zur professionellen IT-Infrastruktur',
      icon: <AlertTriangle className="w-8 h-8" />,
      color: 'from-red-500 to-red-600',
      content: `Bis Oktober 2022 arbeitete SPN mit Freelancern, die untereinander kaum vernetzt waren und ihre eigenen Computer nutzten. Dimitra Theocharidou-Sohns, die neue Geschäftsführerin, erkannte sofort die infrastrukturellen Engpässe:

**Hauptprobleme:**
• Keine zentrale IT-Verwaltung
• Fehlende Informationssicherheit
• Mangelnde Vernetzung zwischen Mitarbeitern
• Technische Herausforderungen bei Remote-Arbeit
• Eigene Computer und individuelle Software

„Wir brauchen IT-Unterstützung!" erkannte Dimitra Theocharidou-Sohns schnell und fand mit ScaleITS den perfekten Partner für die komplette Neuaufstellung des Unternehmens.`
    },
    {
      id: 'beready',
      title: 'beReady: IT, die läuft',
      subtitle: 'Endgeräte und Infrastruktur für maximale Verfügbarkeit',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-blue-500 to-indigo-600',
      content: `ScaleITS übernahm die komplette Beschaffung und Installation der Notebooks und iOS-Geräte. Die Infrastruktur wurde so aufgesetzt, dass SPN keinen Aufwand damit hat.

**Implementierte Lösungen:**
• Einheitliche Firmen-Notebooks und iOS-Geräte
• Zentrales Device-Management
• Remote-Support aus Wolfratshausen
• Automatische Updates und Sicherheitspatches
• 24/7 technische Unterstützung

„Das fühlt sich gut an. Ich bekomme ein Premium-Produkt, aber ohne Premium-Zuschlag", so Dimitra Theocharidou-Sohns über die faire Preisgestaltung von ScaleITS.`
    },
    {
      id: 'beproductive',
      title: 'beProductive: Vernetztes Arbeiten',
      subtitle: 'Microsoft 365 Premium für optimale Zusammenarbeit',
      icon: <Users className="w-8 h-8" />,
      color: 'from-green-500 to-teal-600',
      content: `In Q1 2023 wurde das vernetzte Arbeiten bei SPN auf ein neues Niveau gehoben. Die Empfehlung lautete Microsoft 365 Premium mit allen wichtigen Komponenten.

**Umgesetzte Features:**
• Outlook, Office, SharePoint und Teams
• OneDrive für zentrale Datenspeicherung
• Umfassende Schulungen für alle Mitarbeiter
• Nahtlose Zusammenarbeit ohne Ausfälle
• Effiziente Workflows und Prozesse

Mittlerweile ist das komplette Paket im Einsatz und alle Mitarbeiter sind untereinander perfekt vernetzt.`
    },
    {
      id: 'besafe',
      title: 'beSafe: Sicherheit, wenn\'s drauf ankommt',
      subtitle: 'Rundumschutz vor Cyberbedrohungen',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-purple-500 to-indigo-600',
      content: `Nach einem Cyberangriff bei einem wichtigen Dienstleister setzte SPN verstärkt auf IT-Sicherheit. ScaleITS implementierte umfassende Sicherheitslösungen.

**Sicherheitsmaßnahmen:**
• Mehrfaktoren-Authentifizierung
• Sichere VPN-Tunnels zu Partnernetzwerken
• Hornetsecurity für E-Mail-Schutz
• Backup und Disaster Recovery
• Compliance und Datenschutz

„Das ist Standard im beSafe-Modul von ScaleITS und das zu Recht. Jeder IT-Dienstleister sollte darauf bestehen, es bei seinen Kunden zu implementieren!", betont Dimitra Theocharidou-Sohns.`
    },
    {
      id: 'beconnected',
      title: 'beConnected: Telefonieren neu gedacht',
      subtitle: 'Cloud-basierte Telefonanlage für Remote-Arbeit',
      icon: <Phone className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      content: `Mit beConnected digitalisiert ScaleITS die komplette Telefonie. Die 3CX-Telefonanlage steht vollständig in der Cloud.

**Telefonie-Lösung:**
• Cloud-basierte 3CX-Telefonanlage
• Keine physische Infrastruktur notwendig
• Anrufe werden an die nächste freie Person weitergeleitet
• Kontaktdaten werden automatisch angezeigt
• Ausgehende Anrufe unter Firmenrufnummer

„Bei SPN kommen Anrufe über die zentrale (virtuelle) Telefonanlage herein und werden an die nächste freie Person weitergeleitet. Der Agent bekommt die Kontaktdaten des Anrufers angezeigt."`
    },
    {
      id: 'success',
      title: 'Der Erfolg',
      subtitle: 'Professionelle IT-Infrastruktur für den Service-Partner von ADAC und Ergo',
      icon: <Award className="w-8 h-8" />,
      color: 'from-green-500 to-green-600',
      content: `Nach zweieinhalb Jahren Zusammenarbeit ist Dimitra Theocharidou-Sohns vollends überzeugt von ScaleITS. Die Systeme laufen reibungslos und die Mitarbeiter sind jederzeit handlungsfähig.

**Erfolgsfaktoren:**
• Persönliche Betreuung durch feste Ansprechpartner
• Schnelle Reaktionszeiten und Lösungen
• Faire Preisgestaltung ohne versteckte Kosten
• Umfassende Beratung und Schulungen
• Zuverlässiger Support und Wartung

„Das Paket stimmt: Beratung, Kompetenz, Zwischenmenschliches und die Herangehensweise von ScaleITS sind sehr gut. Das im Zusammenspiel macht den Preis schon fast zu günstig!"`
    }
  ], []);

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <Link
                href="/referenzen"
                className="inline-flex items-center text-scaleit-gray hover:text-scaleit-red transition-colors duration-200 mb-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück zu allen Referenzen
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-scaleit-red to-red-600 text-white rounded-full">
                  <Award className="w-12 h-12" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-scaleit-black mb-6">
                Case Study: <span className="text-scaleit-red">SPN Service Partner Netzwerk</span>
              </h1>
              <p className="text-xl text-scaleit-gray max-w-4xl mx-auto mb-8">
                ADAC-Werkstattpartner optimal aufgestellt: ScaleITS schafft das perfekte Modern-Work-Umfeld für KMU
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-scaleit-gray">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-scaleit-red" />
                  <span>Deutschland (bundesweit)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-scaleit-red" />
                  <span>Projekt: Oktober 2022 - April 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-scaleit-red" />
                  <span>Service Partner Netzwerk ADAC/Ergo</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Highlights */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {highlights.map((highlight, index) => (
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
                        {highlight.icon}
                      </div>
                    </div>
                    <div className="text-lg font-bold text-scaleit-black mb-2">
                      {highlight.title}
                    </div>
                    <div className="text-scaleit-gray text-sm">
                      {highlight.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Introduction Quote */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-scaleit-red to-red-600 rounded-2xl p-8 md:p-12 text-white text-center"
            >
              <Quote className="w-16 h-16 mx-auto mb-6 opacity-50" />
              <blockquote className="text-2xl md:text-3xl font-light italic mb-8 leading-relaxed">
                "Das Paket stimmt: Beratung, Kompetenz, Zwischenmenschliches und die Herangehensweise von ScaleITS sind sehr gut."
              </blockquote>
              <div className="text-lg opacity-90">
                Dimitra Theocharidou-Sohns, Geschäftsführerin SPN Service Partner Netzwerk
              </div>
            </motion.div>
          </div>
        </section>

        {/* Case Study Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl ${
                  index % 2 === 1 ? 'lg:col-start-2' : ''
                }`}>
                  <div className={`w-full h-full bg-gradient-to-br ${section.color} flex items-center justify-center`}>
                    <div className="text-center text-white">
                      <div className="mb-4">
                        {section.icon}
                      </div>
                      <p className="font-semibold text-lg mb-2">{section.title}</p>
                      <p className="text-sm opacity-90">{section.subtitle}</p>
                    </div>
                  </div>
                </div>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 bg-gradient-to-r ${section.color} text-white rounded-lg`}>
                      {section.icon}
                    </div>
                    <div>
                      <h2 className="text-4xl md:text-5xl font-bold text-scaleit-black">
                        {section.title.split(':')[0]} <span className="text-scaleit-red">{section.title.split(':')[1] || ''}</span>
                      </h2>
                      <p className={`font-medium ${
                        section.color.includes('red') ? 'text-red-600' :
                        section.color.includes('blue') ? 'text-blue-600' :
                        section.color.includes('green') ? 'text-green-600' :
                        section.color.includes('purple') ? 'text-purple-600' :
                        'text-orange-600'
                      }`}>
                        {section.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="text-lg text-scaleit-gray leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-scaleit-red to-red-600">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Bereit für Ihre IT-Transformation?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Lassen Sie uns gemeinsam das perfekte Modern-Work-Umfeld für Ihr Unternehmen schaffen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-scaleit-red rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300"
                >
                  <Phone className="w-6 h-6 mr-3" />
                  Kostenlose Beratung
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-scaleit-red transition-all duration-300"
                >
                  <ArrowRight className="w-6 h-6 mr-3" />
                  Unsere Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}