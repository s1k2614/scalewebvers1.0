'use client';

import { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { ArrowLeft, FileText, Download, Eye, Shield, AlertTriangle } from 'lucide-react';

export default function AGBsPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleSectionClick = useCallback((sectionId: string) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  }, [activeSection]);

  const sections = useMemo(() => [
    {
      id: 'download',
      title: 'AGB-Dokument herunterladen',
      subtitle: 'PDF-Version zum Download',
      icon: <Download className="w-8 h-8" />,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'view',
      title: 'AGB-Dokument anzeigen',
      subtitle: 'Direkt im Browser betrachten',
      icon: <Eye className="w-8 h-8" />,
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 'contact',
      title: 'Fragen zu den AGBs?',
      subtitle: 'Kontaktieren Sie uns',
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
                <span className="text-scaleit-red">Allgemeine Geschäftsbedingungen</span>
              </h1>
              <p className="text-xl text-scaleit-gray max-w-4xl mx-auto mb-8">
                Unsere AGBs regeln die rechtlichen Rahmenbedingungen für die Zusammenarbeit mit ScaleITS GmbH.
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
                    Diese Allgemeinen Geschäftsbedingungen gelten für alle vertraglichen Beziehungen zwischen ScaleITS GmbH und ihren Kunden.
                    Bitte lesen Sie diese sorgfältig durch, bevor Sie unsere Dienstleistungen in Anspruch nehmen.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Options Grid */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {/* Download Option */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg">
                    <Download className="w-8 h-8" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-scaleit-black mb-4">
                    AGB-Dokument herunterladen
                  </h3>
                  <p className="text-scaleit-gray mb-6">
                    Laden Sie unsere vollständigen AGBs als PDF-Dokument herunter und speichern Sie diese lokal.
                  </p>
                  <a
                    href="/pdfs/agbs-scaleits.pdf"
                    download="AGBs_ScaleITS_GmbH.pdf"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-scaleit-red to-red-600 text-white rounded-lg font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 hover:scale-105"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    PDF herunterladen
                  </a>
                </div>
              </motion.div>

              {/* View Option */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg">
                    <Eye className="w-8 h-8" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-scaleit-black mb-4">
                    AGB-Dokument anzeigen
                  </h3>
                  <p className="text-scaleit-gray mb-6">
                    Betrachten Sie unsere AGBs direkt im Browser ohne Download.
                  </p>
                  <button
                    onClick={() => window.open('/pdfs/agbs-scaleits.pdf', '_blank')}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg font-semibold hover:from-teal-600 hover:to-green-700 transition-all duration-300 hover:scale-105"
                  >
                    <Eye className="w-5 h-5 mr-2" />
                    Im Browser anzeigen
                  </button>
                </div>
              </motion.div>

              {/* Contact Option */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg">
                    <Shield className="w-8 h-8" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-scaleit-black mb-4">
                    Fragen zu den AGBs?
                  </h3>
                  <p className="text-scaleit-gray mb-6">
                    Haben Sie Fragen zu unseren AGBs? Kontaktieren Sie unser Team.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                  >
                    <Shield className="w-5 h-5 mr-2" />
                    Kontakt aufnehmen
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* PDF Viewer Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-scaleit-black mb-4">
                  AGB-Dokument
                </h2>
                <p className="text-scaleit-gray">
                  Hier können Sie unsere Allgemeinen Geschäftsbedingungen direkt einsehen:
                </p>
              </div>

              <div className="flex justify-center">
                <div className="w-full max-w-4xl">
                  <iframe
                    src="/pdfs/agbs-scaleits.pdf"
                    className="w-full h-[600px] border-2 border-gray-200 rounded-lg"
                    title="AGBs ScaleITS GmbH"
                  >
                    <p>
                      Ihr Browser unterstützt keine eingebetteten PDF-Dateien.
                      <a href="/pdfs/agbs-scaleits.pdf" className="text-scaleit-red hover:text-red-800 underline ml-2">
                        Klicken Sie hier, um das PDF herunterzuladen.
                      </a>
                    </p>
                  </iframe>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-scaleit-gray text-sm">
                  Sollte das PDF nicht korrekt angezeigt werden, verwenden Sie bitte einen modernen Browser oder laden Sie das Dokument herunter.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-scaleit-black mb-8">
                Zusätzliche Informationen
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-scaleit-black mb-4">
                    Geltungsbereich
                  </h3>
                  <p className="text-scaleit-gray">
                    Diese AGBs gelten für alle vertraglichen Beziehungen zwischen ScaleITS GmbH und ihren Kunden,
                    soweit nicht ausdrücklich etwas anderes vereinbart wurde.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-scaleit-black mb-4">
                    Änderungen
                  </h3>
                  <p className="text-scaleit-gray">
                    Änderungen dieser AGBs werden unseren Kunden rechtzeitig bekannt gegeben.
                    Bei Vertragsabschluss gilt die jeweils aktuelle Fassung.
                  </p>
                </div>
              </div>

              <div className="mt-12">
                <div className="bg-gradient-to-r from-scaleit-red to-red-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">
                    Haben Sie Fragen?
                  </h3>
                  <p className="text-lg opacity-90 mb-6">
                    Bei Fragen zu unseren AGBs oder anderen rechtlichen Themen stehen wir Ihnen gerne zur Verfügung.
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
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}