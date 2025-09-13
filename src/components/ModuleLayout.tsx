import React from 'react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import Footer from './Footer';
import ModuleSidebar from './ModuleSidebar';
import { Check, ExternalLink, ArrowRight, Shield, Zap, Users, Clock } from 'lucide-react';
import Link from 'next/link';

interface ModuleLayoutProps {
  module: {
    id: string;
    title: string;
    description: string;
    icon: React.ComponentType<any>;
    category: string;
    features: string[];
    detailedDescription?: string;
    technicalSpecs?: string[];
    systemRequirements?: string[];
    benefits?: string[];
    useCases?: string[];
    available: boolean;
    comingSoon?: boolean;
  };
  modules: Array<{
    id: string;
    title: string;
    url: string;
    icon: React.ComponentType<any>;
    category?: string;
    available?: boolean;
    comingSoon?: boolean;
  }>;
  sidebarTitle: string;
  baseUrl: string;
  backUrl: string;
  backLabel: string;
  currentModule: string;
}

export default function ModuleLayout({
  module,
  modules,
  sidebarTitle,
  baseUrl,
  backUrl,
  backLabel,
  currentModule
}: ModuleLayoutProps) {
  const Icon = module.icon;

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />

      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-8">
            {/* Sidebar */}
            <div className="hidden lg:block flex-shrink-0">
              <div className="sticky top-24">
                <ModuleSidebar
                  title={sidebarTitle}
                  modules={modules}
                  currentModule={currentModule}
                  baseUrl={baseUrl}
                  backUrl={backUrl}
                  backLabel={backLabel}
                />
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 max-w-4xl">
              {/* Hero Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-2xl shadow-xl p-8 mb-8"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mr-6 ${
                      module.comingSoon 
                        ? 'bg-yellow-100 text-yellow-600' 
                        : 'bg-gradient-to-r from-scaleit-red to-scaleit-purple text-white'
                    }`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h1 className="text-3xl font-bold text-scaleit-black mb-2">
                        {module.title}
                      </h1>
                      <span className="inline-block bg-scaleit-gray/10 text-scaleit-gray px-3 py-1 rounded-full text-sm">
                        {module.category}
                      </span>
                    </div>
                  </div>
                  {module.comingSoon && (
                    <div className="bg-yellow-100 border border-yellow-300 rounded-lg px-4 py-2">
                      <div className="flex items-center text-yellow-800">
                        <Clock className="w-4 h-4 mr-2" />
                        <span className="font-semibold text-sm">Coming Soon</span>
                      </div>
                    </div>
                  )}
                </div>

                <p className="text-lg text-scaleit-gray mb-6 leading-relaxed">
                  {module.description}
                </p>

                {module.detailedDescription && (
                  <p className="text-scaleit-gray mb-6 leading-relaxed">
                    {module.detailedDescription}
                  </p>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {module.available && !module.comingSoon && (
                    <button className="inline-flex items-center justify-center bg-gradient-to-r from-scaleit-red to-scaleit-purple text-white px-6 py-3 rounded-full font-semibold hover:from-scaleit-purple hover:to-scaleit-red transition-all duration-300">
                      Modul aktivieren
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </button>
                  )}
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center border-2 border-scaleit-red text-scaleit-red px-6 py-3 rounded-full font-semibold hover:bg-scaleit-red hover:text-white transition-all duration-300"
                  >
                    Beratung anfordern
                  </Link>
                </div>
              </motion.div>

              {/* Features Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-8 mb-8"
              >
                <h2 className="text-2xl font-bold text-scaleit-black mb-6 flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-scaleit-red" />
                  Features & Funktionen
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {module.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-scaleit-gray">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Technical Specs */}
              {module.technicalSpecs && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="bg-white rounded-2xl shadow-xl p-8 mb-8"
                >
                  <h2 className="text-2xl font-bold text-scaleit-black mb-6 flex items-center">
                    <Zap className="w-6 h-6 mr-3 text-scaleit-red" />
                    Technische Spezifikationen
                  </h2>
                  <div className="space-y-3">
                    {module.technicalSpecs.map((spec, index) => (
                      <div key={index} className="flex items-start">
                        <ArrowRight className="w-4 h-4 text-scaleit-red mr-3 mt-1 flex-shrink-0" />
                        <span className="text-scaleit-gray">{spec}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Benefits */}
              {module.benefits && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="bg-white rounded-2xl shadow-xl p-8 mb-8"
                >
                  <h2 className="text-2xl font-bold text-scaleit-black mb-6 flex items-center">
                    <Users className="w-6 h-6 mr-3 text-scaleit-red" />
                    Vorteile für Ihr Unternehmen
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {module.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-scaleit-gray">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Use Cases */}
              {module.useCases && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="bg-white rounded-2xl shadow-xl p-8 mb-8"
                >
                  <h2 className="text-2xl font-bold text-scaleit-black mb-6">
                    Anwendungsfälle
                  </h2>
                  <div className="space-y-4">
                    {module.useCases.map((useCase, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <span className="text-scaleit-gray">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* System Requirements */}
              {module.systemRequirements && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="bg-white rounded-2xl shadow-xl p-8 mb-8"
                >
                  <h2 className="text-2xl font-bold text-scaleit-black mb-6">
                    Systemanforderungen
                  </h2>
                  <div className="space-y-3">
                    {module.systemRequirements.map((requirement, index) => (
                      <div key={index} className="flex items-start">
                        <ArrowRight className="w-4 h-4 text-scaleit-red mr-3 mt-1 flex-shrink-0" />
                        <span className="text-scaleit-gray">{requirement}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="bg-gradient-to-r from-scaleit-red to-scaleit-purple rounded-2xl p-8 text-white text-center"
              >
                <h2 className="text-2xl font-bold mb-4">
                  Bereit für {module.title}?
                </h2>
                <p className="text-white/90 mb-6">
                  Kontaktieren Sie uns für eine individuelle Beratung und Konfiguration.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-white text-scaleit-red px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
                  >
                    Jetzt konfigurieren
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <Link
                    href={backUrl}
                    className="inline-flex items-center border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-scaleit-red transition-all duration-300"
                  >
                    Weitere Module
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}