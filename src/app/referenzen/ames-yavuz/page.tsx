'use client';

import { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import { ArrowLeft, Quote, CheckCircle, Users, Globe, Shield, Zap, Award, Star, ArrowRight, MapPin, Calendar, AlertTriangle } from 'lucide-react';

export default function AmesYavuzCaseStudyPage() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  // Memoize hover handlers für Performance
  const handleMouseEnter = useCallback((sectionId: string) => {
    setHoveredSection(sectionId);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredSection(null);
  }, []);

  // Case study sections
  const sections = useMemo(() => [
    {
      id: 'locations',
      title: 'Internationale Präsenz',
      subtitle: 'Standorte weltweit',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-blue-500 to-indigo-600',
      content: `Ames Yavuz ist eine der führenden kommerziellen Galerien im Asien-Pazifik-Raum mit Niederlassungen in:

• Singapur (Gillman Barracks)
• Sydney (Gadigal Land)  
• Manila
• München
• London (in Planung)

Die Galerie genießt bei Kunstsammlern, Museen und staatlichen Institutionen höchstes Ansehen und hat sich einen Namen für zeitgenössische Kunst und anspruchsvolle Sammlungen gemacht.`
    },
    {
      id: 'challenges',
      title: 'Die Herausforderungen',
      subtitle: 'Ein weltweiter IT-Mischmasch',
      icon: <Users className="w-8 h-8" />,
      color: 'from-red-500 to-red-600',
      content: `Glen Ames fasst das Problem zusammen: „Wir haben Mitarbeiterinnen in verschiedenen Ländern, von denen jede/r seinen eigenen Laptop verwendete und individuelle Softwareprogramme nutzte. Es war ein völliger Mischmasch. Ein IT-Dschungel."

**Hauptprobleme:**
• Keine zentrale IT-Verwaltung
• Individuelle Softwareprogramme pro Mitarbeiter
• Fehlende Standards und Konsistenz
• Umfirmierung von Yavuz Gallery zu Ames Yavuz
• E-Mail-Adressen mussten ohne Datenverlust umgestellt werden
• Jedes IT-Problem landete beim CEO

„Die Namensänderung war für uns eine komplexe Herausforderung, die wir unbedingt ohne Ausfallzeiten und E-Mail-Verlust meistern mussten", beschreibt Glen das Dilemma.`
    },
    {
      id: 'solutions',
      title: 'Unsere Lösungen',
      subtitle: 'ScaleITS beReady, beProductive & beSafe',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-green-500 to-teal-600',
      content: `ScaleITS implementierte einen dreistufigen Lösungsansatz:

**beReady - Die Schaltzentrale:**
• Einheitliche Firmen-MacBooks für alle Mitarbeiter
• Punktgenaue Anpassung an Abteilungsbedürfnisse
• Zentraler Überblick über alle Lizenzen
• Organisches Wachstum bei Personalveränderungen
• Automatische Software-Updates
• Remote-Support aus Wolfratshausen

**beProductive - Effiziente Zusammenarbeit:**
• Umstieg von Dropbox auf SharePoint
• Microsoft Identity Management
• Nahtlose Zusammenarbeit an Dokumenten
• Wegfall umständlicher Logins und Dateisuche
• Zeitersparnis durch optimierte Workflows

**beSafe - Uneinnehmbarer Cyberschutz:**
• Virenschutz und Firewall-Implementierung
• Mitarbeiterschulung zur Sicherheit
• Datenwiederherstellung bei Verlust
• Automatische Sicherheitsupdates
• Schutz vor Hackerangriffen und Schadsoftware

„Das alles musste installiert werden, ohne dass die Computer aus aller Welt nach Bayern geschickt wurden. Jonas Kuklinski löste das Problem, indem er die Galerie-Mitarbeiterin in Singapur in Videokonferenzen so schulte, dass sie ihre Teamkolleginnen schulen und über Remote-Zugriff die Installation ihrer Arbeitsgeräte vornehmen konnte."`
    },
    {
      id: 'testimonials',
      title: 'Kundenstimmen',
      subtitle: 'Das Ergebnis überzeugt',
      icon: <Quote className="w-8 h-8" />,
      color: 'from-purple-500 to-indigo-600',
      content: `**Glen Ames, CEO der Ames Yavuz:**

„Das Team von ScaleITS war 20 % schneller mit der Umsetzung fertig als im Angebot angegeben. Sie sind wirklich professionell und die Zusammenarbeit lief hervorragend!"

**Projekterfolg:**
• 20% schnellere Umsetzung als geplant
• Zero Downtime bei der Umfirmierung
• Kein E-Mail-Verlust
• Stabile, sichere und effiziente IT-Infrastruktur
• Zentralisierte Verwaltung aller Standorte
• Optimierte internationale Zusammenarbeit

„Bei der Entscheidung spielte Vertrauen eine große Rolle. Bei Jonas habe ich sofort gemerkt: Der spricht meine Sprache – auch wenn er Deutscher ist und ich Australier."

„Ein beruhigendes Gefühl", sagt Glen Ames über die neue IT-Sicherheit. „Ich schlafe besser, seit ich weiß, dass unsere Daten weder gestohlen noch verloren gehen können!"

Dank ScaleITS kann sich das Team der Ames Yavuz wieder voll auf das konzentrieren, was wirklich zählt: die Kunst.`
    }
  ], []);

  // Project highlights
  const highlights = useMemo(() => [
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Standorte',
      description: 'Singapur, Sydney, Manila, München & London'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Problem',
      description: 'IT-Mischmasch ohne zentrale Verwaltung'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Lösung',
      description: 'beReady, beProductive & beSafe implementiert'
    },
    {
      icon: <Quote className="w-6 h-6" />,
      title: 'Ergebnis',
      description: '20% schneller fertig, Zero Downtime'
    }
  ], []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />

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
              Case Study: <span className="text-scaleit-red">Ames Yavuz</span>
            </h1>
            <p className="text-xl text-scaleit-gray max-w-4xl mx-auto mb-8">
              Eine internationale Kunstgalerie setzt auf effiziente IT-Lösungen aus Bayern
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-scaleit-gray">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-scaleit-red" />
                <span>Singapur, Sydney, Manila, München, London</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-scaleit-red" />
                <span>Projekt: April - August 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-scaleit-red" />
                <span>Internationale Kunstgalerie</span>
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
              "Ein kreativer Kunde auf der Suche nach einer kreativen Lösung"
            </blockquote>
            <div className="text-lg opacity-90">
              Ames Yavuz ist eine der führenden kommerziellen Galerien im Asien-Pazifik-Raum
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study Content - New Format */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Panel 1: Standorte - Bild links, Text rechts */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24"
          >
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="text-center">
                  <Globe className="w-24 h-24 text-blue-500 mx-auto mb-4" />
                  <p className="text-blue-600 font-semibold text-lg">Internationale Standorte</p>
                  <p className="text-blue-500 text-sm">Asien-Pazifik Raum</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg">
                  <Globe className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-scaleit-black">
                    Internationale <span className="text-scaleit-red">Präsenz</span>
                  </h2>
                  <p className="text-blue-600 font-medium">Standorte weltweit</p>
                </div>
              </div>
              <p className="text-lg text-scaleit-gray leading-relaxed">
                Ames Yavuz ist eine der führenden kommerziellen Galerien im Asien-Pazifik-Raum mit Niederlassungen in verschiedenen Ländern.
                Diese internationale Präsenz erforderte eine IT-Lösung, die alle Standorte nahtlos miteinander verbindet.
              </p>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-scaleit-black">Unsere Standorte:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    <span className="text-scaleit-gray">Singapur (Gillman Barracks)</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    <span className="text-scaleit-gray">Sydney (Gadigal Land)</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    <span className="text-scaleit-gray">Manila</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    <span className="text-scaleit-gray">München & London (in Planung)</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Panel 2: Probleme - Text links, Bild rechts */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24"
          >
            <div className="space-y-6 lg:order-1">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg">
                  <Users className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-scaleit-black">
                    Die <span className="text-scaleit-red">Herausforderungen</span>
                  </h2>
                  <p className="text-red-600 font-medium">Ein weltweiter IT-Mischmasch</p>
                </div>
              </div>
              <p className="text-lg text-scaleit-gray leading-relaxed">
                Glen Ames fasst das Problem zusammen: „Wir haben Mitarbeiterinnen in verschiedenen Ländern, von denen jede/r seinen eigenen Laptop verwendete und individuelle Softwareprogramme nutzte. Es war ein völliger Mischmasch."
              </p>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-scaleit-black">Hauptprobleme:</h3>
                <ul className="space-y-3 text-scaleit-gray">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-scaleit-red rounded-full mt-2 flex-shrink-0"></div>
                    <span>Keine zentrale IT-Verwaltung</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-scaleit-red rounded-full mt-2 flex-shrink-0"></div>
                    <span>Individuelle Softwareprogramme pro Mitarbeiter</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-scaleit-red rounded-full mt-2 flex-shrink-0"></div>
                    <span>Umfirmierung von Yavuz Gallery zu Ames Yavuz</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-scaleit-red rounded-full mt-2 flex-shrink-0"></div>
                    <span>E-Mail-Adressen mussten ohne Datenverlust umgestellt werden</span>
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                <p className="text-red-800 italic">
                  „Die Namensänderung war für uns eine komplexe Herausforderung, die wir unbedingt ohne Ausfallzeiten und E-Mail-Verlust meistern mussten."
                </p>
                <p className="text-red-600 font-medium mt-2">- Glen Ames, CEO</p>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl lg:order-2">
              <div className="w-full h-full bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                <div className="text-center">
                  <AlertTriangle className="w-24 h-24 text-red-500 mx-auto mb-4" />
                  <p className="text-red-600 font-semibold text-lg">IT-Herausforderungen</p>
                  <p className="text-red-500 text-sm">Komplexe internationale Anforderungen</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Panel 3: Lösungen - Bild links, Text rechts */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24"
          >
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <div className="text-center">
                  <Zap className="w-24 h-24 text-green-500 mx-auto mb-4" />
                  <p className="text-green-600 font-semibold text-lg">ScaleITS Lösungen</p>
                  <p className="text-green-500 text-sm">beReady • beProductive • beSafe</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg">
                  <Zap className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-scaleit-black">
                    Unsere <span className="text-scaleit-red">Lösungen</span>
                  </h2>
                  <p className="text-green-600 font-medium">ScaleITS beReady, beProductive & beSafe</p>
                </div>
              </div>
              <p className="text-lg text-scaleit-gray leading-relaxed">
                ScaleITS implementierte einen dreistufigen Lösungsansatz, der perfekt auf die internationalen Anforderungen der Galerie zugeschnitten war.
              </p>

              <div className="space-y-6">
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-2">beReady - Die Schaltzentrale</h4>
                  <ul className="space-y-1 text-green-700 text-sm">
                    <li>• Einheitliche Firmen-MacBooks für alle Mitarbeiter</li>
                    <li>• Punktgenaue Anpassung an Abteilungsbedürfnisse</li>
                    <li>• Remote-Support aus Wolfratshausen</li>
                    <li>• Automatische Software-Updates</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-2">beProductive - Effiziente Zusammenarbeit</h4>
                  <ul className="space-y-1 text-blue-700 text-sm">
                    <li>• Umstieg von Dropbox auf SharePoint</li>
                    <li>• Microsoft Identity Management</li>
                    <li>• Nahtlose Zusammenarbeit an Dokumenten</li>
                    <li>• Zeitersparnis durch optimierte Workflows</li>
                  </ul>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-bold text-purple-800 mb-2">beSafe - Uneinnehmbarer Cyberschutz</h4>
                  <ul className="space-y-1 text-purple-700 text-sm">
                    <li>• Virenschutz & Firewall-Implementierung</li>
                    <li>• Mitarbeiterschulung zur Sicherheit</li>
                    <li>• Datenwiederherstellung bei Verlust</li>
                    <li>• Automatische Sicherheitsupdates</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Panel 4: Ergebnisse - Text links, Bild rechts */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24"
          >
            <div className="space-y-6 lg:order-1">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg">
                  <Quote className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-scaleit-black">
                    Kunden<span className="text-scaleit-red">stimmen</span>
                  </h2>
                  <p className="text-purple-600 font-medium">Das Ergebnis überzeugt</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border-l-4 border-purple-500">
                  <Quote className="w-8 h-8 text-purple-500 mb-4" />
                  <p className="text-lg text-scaleit-gray italic leading-relaxed mb-4">
                    "Das Team von ScaleITS war 20 % schneller mit der Umsetzung fertig als im Angebot angegeben. Sie sind wirklich professionell und die Zusammenarbeit lief hervorragend!"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                      GA
                    </div>
                    <div>
                      <p className="font-semibold text-scaleit-black">Glen Ames</p>
                      <p className="text-sm text-scaleit-gray">CEO der Ames Yavuz</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">20%</div>
                    <div className="text-sm text-green-700">Schneller fertig</div>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
                    <div className="text-sm text-blue-700">Zero Downtime</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-scaleit-black">Projekterfolg:</h3>
                  <ul className="space-y-2 text-scaleit-gray">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Stabile, sichere und effiziente IT-Infrastruktur</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Zentralisierte Verwaltung aller Standorte</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Optimierte internationale Zusammenarbeit</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Uneinnehmbarer Cyberschutz implementiert</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl lg:order-2">
              <div className="w-full h-full bg-gradient-to-br from-purple-100 to-indigo-200 flex items-center justify-center">
                <div className="text-center">
                  <Award className="w-24 h-24 text-purple-500 mx-auto mb-4" />
                  <p className="text-purple-600 font-semibold text-lg">Projekterfolg</p>
                  <p className="text-purple-500 text-sm">20% schneller • Zero Downtime</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Services Used */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ScaleITS Lösungen im Einsatz
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Die Ames Yavuz profitierte von unserem dreistufigen IT-Dienstleistungsansatz
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'beReady',
                description: 'Einheitliche IT-Infrastruktur und Geräteverwaltung',
                features: ['Zentralisierte Geräteverwaltung', 'Automatische Softwareverteilung', 'Remote-Support', 'Organisches Wachstum']
              },
              {
                name: 'beProductive',
                description: 'Maximale Effizienz im internationalen Team',
                features: ['SharePoint als zentrale Plattform', 'Microsoft Identity Management', 'Nahtlose Zusammenarbeit', 'Zeitersparnis']
              },
              {
                name: 'beSafe',
                description: 'Uneinnehmbarer Cyberschutz für sensible Daten',
                features: ['Virenschutz & Firewall', 'Datenwiederherstellung', 'Automatische Updates', 'Mitarbeiterschulung']
              }
            ].map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h3 className="text-2xl font-bold text-scaleit-black mb-4">{service.name}</h3>
                <p className="text-scaleit-gray mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-scaleit-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Quote */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-scaleit-red to-red-600 rounded-2xl p-8 md:p-12 text-white text-center"
          >
            <Quote className="w-16 h-16 mx-auto mb-6 opacity-50" />
            <blockquote className="text-2xl md:text-3xl font-light italic mb-8 leading-relaxed">
              "Das Team von ScaleITS war 20 % schneller mit der Umsetzung fertig als im Angebot angegeben. Sie sind wirklich professionell und die Zusammenarbeit lief hervorragend!"
            </blockquote>
            <div className="text-lg font-semibold">
              Glen Ames
            </div>
            <div className="text-red-100">
              CEO der Ames Yavuz
            </div>
          </motion.div>
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
              Bereit für Ihre digitale Transformation?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam Ihre IT-Infrastruktur optimieren und Ihre Produktivität steigern.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-scaleit-red font-semibold rounded-full hover:bg-gray-50 transition-all duration-200 shadow-lg"
              >
                Kostenlose Beratung
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/referenzen"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-scaleit-red transition-all duration-200"
              >
                Mehr Referenzen ansehen
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}