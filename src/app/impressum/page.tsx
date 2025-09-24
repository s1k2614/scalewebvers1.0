'use client';

import { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { ArrowLeft, Building2, Phone, Mail, MapPin, FileText, Shield, AlertTriangle } from 'lucide-react';

export default function ImpressumPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleSectionClick = useCallback((sectionId: string) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  }, [activeSection]);

  const sections = useMemo(() => [
    {
      id: 'company',
      title: 'Unternehmensdaten',
      subtitle: 'ScaleITS GmbH',
      icon: <Building2 className="w-8 h-8" />,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'contact',
      title: 'Kontakt',
      subtitle: 'Wie Sie uns erreichen',
      icon: <Phone className="w-8 h-8" />,
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 'legal',
      title: 'Rechtliche Informationen',
      subtitle: 'Impressum & Haftung',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-purple-500 to-indigo-600'
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
                href="/"
                className="inline-flex items-center text-scaleit-gray hover:text-scaleit-red transition-colors duration-200 mb-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück zur Startseite
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
                  <FileText className="w-12 h-12" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-scaleit-black mb-6">
                <span className="text-scaleit-red">Impressum</span>
              </h1>
              <p className="text-xl text-scaleit-gray max-w-4xl mx-auto mb-8">
                Rechtliche Informationen und Kontaktdaten der ScaleITS GmbH gemäß § 5 TMG.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg"
            >
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">Wichtiger Hinweis</h3>
                  <p className="text-yellow-700">
                    Dieses Impressum gilt für die Website der ScaleITS GmbH. Bei Fragen zu unseren Dienstleistungen
                    oder rechtlichen Themen kontaktieren Sie uns gerne.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >

              {/* Company Information */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg mr-4">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-scaleit-black">ScaleITS GmbH</h2>
                    <p className="text-scaleit-gray">IT-Dienstleistungen & Beratung</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-scaleit-black mb-2">Adresse</h3>
                      <div className="flex items-start text-scaleit-gray">
                        <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          Jeschkenstraße 9<br />
                          82538 Geretsried
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-scaleit-black mb-2">Handelsregister</h3>
                      <p className="text-scaleit-gray">
                        HRB 250748<br />
                        Registergericht: Amtsgericht München
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-scaleit-black mb-2">Vertretungsberechtigte</h3>
                      <p className="text-scaleit-gray">
                        Patrick Hack<br />
                        Stephan Oesten
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-scaleit-black mb-2">Umsatzsteuer-ID</h3>
                      <p className="text-scaleit-gray">
                        DE325786076<br />
                        <span className="text-sm">gemäß §27 a Umsatzsteuergesetz</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg mr-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-scaleit-black">Kontakt</h2>
                    <p className="text-scaleit-gray">Wie Sie uns erreichen</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <Phone className="w-6 h-6 text-green-600 mr-4" />
                      <div>
                        <p className="font-semibold text-scaleit-black">Telefon</p>
                        <p className="text-scaleit-gray">+49 8171 908929-0</p>
                      </div>
                    </div>

                    <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <Mail className="w-6 h-6 text-green-600 mr-4" />
                      <div>
                        <p className="font-semibold text-scaleit-black">E-Mail</p>
                        <p className="text-scaleit-gray">info@scaleits.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                      <MapPin className="w-6 h-6 text-green-600 mr-4 mt-1" />
                      <div>
                        <p className="font-semibold text-scaleit-black">Adresse</p>
                        <p className="text-scaleit-gray">
                          Jeschkenstraße 9<br />
                          82538 Geretsried
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legal Information */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg mr-4">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-scaleit-black">Rechtliche Informationen</h2>
                    <p className="text-scaleit-gray">Impressum & Haftung</p>
                  </div>
                </div>

                <div className="space-y-8">
                  {/* Verantwortlich für den Inhalt */}
                  <div>
                    <h3 className="text-xl font-semibold text-scaleit-black mb-4">
                      Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-scaleit-gray">
                        Patrick Hack & Stephan Oesten<br />
                        ScaleITS GmbH<br />
                        Jeschkenstraße 9<br />
                        D-82538 Geretsried
                      </p>
                    </div>
                  </div>

                  {/* Streitschlichtung */}
                  <div>
                    <h3 className="text-xl font-semibold text-scaleit-black mb-4">Streitschlichtung</h3>
                    <p className="text-scaleit-gray mb-4">
                      Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                    </p>
                    <a
                      href="https://ec.europa.eu/consumers/odr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-scaleit-red hover:text-red-800 underline"
                    >
                      https://ec.europa.eu/consumers/odr
                    </a>
                    <p className="text-scaleit-gray mt-4">
                      Unsere E-Mail-Adresse finden Sie oben im Impressum.
                    </p>
                    <p className="text-scaleit-gray mt-2">
                      <strong>Hinweis:</strong> Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                    </p>
                  </div>

                  {/* Urheberrecht */}
                  <div>
                    <h3 className="text-xl font-semibold text-scaleit-black mb-4">Urheberrecht</h3>
                    <div className="text-scaleit-gray space-y-3">
                      <p>
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                        Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
                        bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                      </p>
                      <p>
                        Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                      </p>
                      <p>
                        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet.
                        Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung
                        aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
                        wir derartige Inhalte umgehend entfernen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-gradient-to-r from-scaleit-red to-red-600 rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Haben Sie Fragen?</h3>
                <p className="text-lg opacity-90 mb-6">
                  Bei Fragen zu diesem Impressum oder anderen rechtlichen Themen stehen wir Ihnen gerne zur Verfügung.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 bg-white text-scaleit-red rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                  >
                    Kontakt aufnehmen
                  </Link>
                  <a
                    href="tel:+4981719089290"
                    className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-scaleit-red transition-all duration-300"
                  >
                    Anrufen
                  </a>
                </div>
              </div>

            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}