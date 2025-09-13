'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SimplicityBanner from '../../components/SimplicityBanner';
import {
  Database, Package, ArrowRight, CheckCircle, Users, Settings,
  Zap, Shield, BarChart3, Star, Target, Award
} from 'lucide-react';
import Link from 'next/link';

export default function ACMPLandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center bg-gradient-to-r from-scaleit-red to-scaleit-purple text-white px-8 py-4 rounded-full shadow-2xl mb-8"
            >
              <Database className="w-8 h-8 mr-4" />
              <span className="text-xl font-bold">ACMP - Advanced Client Management Platform</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-6xl md:text-7xl font-bold text-scaleit-black mb-8"
            >
              Wählen Sie Ihre
              <span className="block bg-gradient-to-r from-scaleit-red to-scaleit-purple bg-clip-text text-transparent">
                ACMP Lösung
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl text-scaleit-gray max-w-4xl mx-auto leading-relaxed mb-16"
            >
              Entdecken Sie die perfekte ACMP-Lösung für Ihre Anforderungen.
              Von der Standard-Edition für Einsteiger bis zur Individual-Lösung für spezielle Bedürfnisse.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Product Selection */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* ACMP Standard */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <Link href="/acmp-standard">
                <div className="bg-gradient-to-br from-scaleit-gray to-scaleit-black rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 cursor-pointer h-full">
                  <div className="text-white">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-4 bg-white/20 rounded-2xl">
                          <Package className="w-10 h-10 text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold">ACMP Standard</h3>
                          <p className="text-scaleit-gray/80">Für Einsteiger & Neueinsteiger</p>
                        </div>
                      </div>
                      <ArrowRight className="w-8 h-8 text-scaleit-red group-hover:translate-x-2 transition-transform" />
                    </div>

                    {/* Description */}
                    <p className="text-lg mb-8 leading-relaxed">
                      Die ideale Lösung für Unternehmen, die neu mit ACMP beginnen oder grundlegende
                      IT-Verwaltungsfunktionen benötigen. Einfach zu implementieren und sofort einsatzbereit.
                    </p>

                    {/* Features */}
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-scaleit-red flex-shrink-0" />
                        <span>15 professionelle Module</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-scaleit-red flex-shrink-0" />
                        <span>Einfache Implementierung</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-scaleit-red flex-shrink-0" />
                        <span>Umfassende Dokumentation</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-scaleit-red flex-shrink-0" />
                        <span>24/7 Support</span>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-scaleit-red">15</div>
                        <div className="text-sm text-scaleit-gray/80">Module</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-scaleit-purple">100%</div>
                        <div className="text-sm text-scaleit-gray/80">ScaleITS CI</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-scaleit-gray">24/7</div>
                        <div className="text-sm text-scaleit-gray/80">Support</div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                      <div className="inline-flex items-center bg-gradient-to-r from-scaleit-red to-scaleit-red/90 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-scaleit-red/90 hover:to-scaleit-red/80 transition-all duration-300 shadow-xl">
                        ACMP Standard entdecken
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* ACMP Individual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group"
            >
              <Link href="/acmp-individual">
                <div className="bg-gradient-to-br from-scaleit-red to-scaleit-purple rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 cursor-pointer h-full">
                  <div className="text-white">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-4 bg-white/20 rounded-2xl">
                          <Settings className="w-10 h-10 text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold">ACMP Individual</h3>
                          <p className="text-scaleit-gray/80">Für spezielle Anforderungen</p>
                        </div>
                      </div>
                      <ArrowRight className="w-8 h-8 text-scaleit-gray group-hover:translate-x-2 transition-transform" />
                    </div>

                    {/* Description */}
                    <p className="text-lg mb-8 leading-relaxed">
                      Die maßgeschneiderte Lösung für Unternehmen mit speziellen IT-Verwaltungsanforderungen.
                      Individuelle Module und erweiterte Funktionen für komplexe Umgebungen.
                    </p>

                    {/* Features */}
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-scaleit-gray flex-shrink-0" />
                        <span>Individuelle Module</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-scaleit-gray flex-shrink-0" />
                        <span>Erweiterte Funktionen</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-scaleit-gray flex-shrink-0" />
                        <span>Maßgeschneiderte Lösungen</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-scaleit-gray flex-shrink-0" />
                        <span>Premium Support</span>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-scaleit-gray">∞</div>
                        <div className="text-sm text-scaleit-gray/80">Module</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-scaleit-black">100%</div>
                        <div className="text-sm text-scaleit-gray/80">Individual</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-scaleit-red">24/7</div>
                        <div className="text-sm text-scaleit-gray/80">Premium</div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                      <div className="inline-flex items-center bg-gradient-to-r from-scaleit-gray to-scaleit-gray/90 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-scaleit-gray/90 hover:to-scaleit-gray/80 transition-all duration-300 shadow-xl">
                        ACMP Individual entdecken
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <h3 className="text-3xl font-bold text-center text-scaleit-black mb-12">
                Vergleich der ACMP Editionen
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-4 px-6 text-lg font-semibold text-scaleit-black">Features</th>
                      <th className="text-center py-4 px-6 text-lg font-semibold text-scaleit-gray">ACMP Standard</th>
                      <th className="text-center py-4 px-6 text-lg font-semibold text-scaleit-red">ACMP Individual</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-6 font-medium text-scaleit-black">Anzahl Module</td>
                      <td className="text-center py-4 px-6 text-scaleit-gray">15 Standard-Module</td>
                      <td className="text-center py-4 px-6 text-scaleit-red">Unbegrenzt + Individual</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-6 font-medium text-scaleit-black">Zielgruppe</td>
                      <td className="text-center py-4 px-6 text-scaleit-gray">Einsteiger & Neueinsteiger</td>
                      <td className="text-center py-4 px-6 text-scaleit-red">Unternehmen mit speziellen Anforderungen</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-6 font-medium text-scaleit-black">Implementierung</td>
                      <td className="text-center py-4 px-6 text-scaleit-gray">Schnell & Einfach</td>
                      <td className="text-center py-4 px-6 text-scaleit-red">Maßgeschneidert</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-6 font-medium text-scaleit-black">Support</td>
                      <td className="text-center py-4 px-6 text-scaleit-gray">24/7 Standard</td>
                      <td className="text-center py-4 px-6 text-scaleit-red">24/7 Premium</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-6 font-medium text-scaleit-black">Anpassungen</td>
                      <td className="text-center py-4 px-6 text-scaleit-gray">Begrenzt</td>
                      <td className="text-center py-4 px-6 text-scaleit-red">Vollständig Individual</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-medium text-scaleit-black">Preis</td>
                      <td className="text-center py-4 px-6 text-scaleit-gray">Ab €999/Monat</td>
                      <td className="text-center py-4 px-6 text-scaleit-red">Individuelle Preisgestaltung</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SimplicityBanner />

      <Footer />
    </main>
  );
}
