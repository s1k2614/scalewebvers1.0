'use client';

import { motion } from 'framer-motion';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SimplicityBanner from '../../components/SimplicityBanner';
import Link from 'next/link';
import { 
  Shield, Cloud, Users, Monitor, Database, Lock,
  CheckCircle, ArrowRight, Zap, Globe, Brain, Settings,
  Mail, Calendar, FileText, Video, MessageSquare, Award, TrendingUp, Download
} from 'lucide-react';
import { useState } from 'react';

export default function MicrosoftPage() {
  const [activeTab, setActiveTab] = useState('office365');

  const microsoftSolutions = [
    {
      id: 'office365',
      name: 'Microsoft 365',
      icon: Mail,
      description: 'Vollständige Produktivitätssuite für moderne Arbeitsplätze',
      features: [
        'Word, Excel, PowerPoint, Outlook',
        'Teams für Collaboration',
        'OneDrive Cloud Storage',
        'SharePoint Intranet',
        'Exchange Online',
        'Power Platform'
      ],
      benefits: [
        'Überall verfügbar',
        'Automatische Updates',
        'Enterprise Security',
        'Skalierbare Lizenzen'
      ]
    },
    {
      id: 'azure',
      name: 'Microsoft Azure',
      icon: Cloud,
      description: 'Enterprise Cloud-Plattform für moderne Anwendungen',
      features: [
        'Virtual Machines',
        'App Services',
        'SQL Database',
        'Azure Active Directory',
        'Storage Solutions',
        'AI & Machine Learning'
      ],
      benefits: [
        'Global verfügbar',
        'Pay-as-you-use',
        'Enterprise Grade',
        'Hybrid Integration'
      ]
    },
    {
      id: 'dynamics',
      name: 'Dynamics 365',
      icon: TrendingUp,
      description: 'CRM und ERP-Lösung für intelligente Geschäftsprozesse',
      features: [
        'Sales Automation',
        'Customer Service',
        'Marketing Automation',
        'Finance & Operations',
        'Supply Chain',
        'HR Management'
      ],
      benefits: [
        'KI-gestützte Insights',
        'Nahtlose Integration',
        'Mobile-first Design',
        'Branchenspezifisch'
      ]
    }
  ];

  const securityFeatures = [
    {
      title: "Zero Trust Security",
      description: "Umfassende Sicherheit durch Zero Trust Architektur",
      icon: Shield,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Advanced Threat Protection",
      description: "KI-basierte Bedrohungserkennung und -abwehr",
      icon: Brain,
      color: "from-red-500 to-red-600"
    },
    {
      title: "Identity Management",
      description: "Zentrale Identitäts- und Zugriffsverwaltung",
      icon: Lock,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Data Loss Prevention",
      description: "Schutz sensibler Daten vor ungewolltem Verlust",
      icon: Database,
      color: "from-purple-500 to-indigo-500"
    }
  ];

  // Microsoft Teams Animation
  const TeamsCollaboration = () => {
    return (
      <div className="bg-gradient-to-br from-purple-900 to-red-900 rounded-2xl p-8 text-white relative overflow-hidden">
        <h3 className="text-2xl font-bold mb-6">Microsoft Teams - Sicherer Videocall & Chat</h3>
        
        <div className="grid grid-cols-2 gap-8">
          {/* Videocall Bereich */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-center">Sicherer Videocall</h4>
            
            {/* Video Grid (2x2) - gleiche Höhe wie Chat */}
            <div className="grid grid-cols-2 gap-2 h-40">
              {[
                { id: 1, name: "Lena Maier" },
                { id: 2, name: "Max Muster" },
                { id: 3, name: "Anna Schmidt" },
                { id: 4, name: "Tom Weber" }
              ].map((user, index) => (
                <motion.div
                  key={user.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-2 flex items-center justify-center relative border border-green-400 overflow-hidden"
                >
                  {/* Video Feed Simulation */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-30"></div>
                  
                  {/* User Avatar */}
                  <div className="relative z-10 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  
                  {/* Live Video Indicator */}
                  <motion.div
                    className="absolute top-1 left-1 bg-red-500 text-white text-xs px-1 rounded flex items-center space-x-1"
                    animate={{ opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <span className="text-xs">LIVE</span>
                  </motion.div>
                  
                  {/* Mikrofon Status */}
                  <motion.div
                    className="absolute top-1 right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  >
                    <div className="w-2 h-2 bg-white rounded-sm"></div>
                  </motion.div>
                  
                  {/* Audio Wellen Animation - nur wenn User gerade spricht */}
                  {index === Math.floor((Date.now() / 3000) % 4) && (
                    <motion.div
                      className="absolute bottom-1 left-1 flex space-x-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {[1, 2, 3].map((bar) => (
                        <motion.div
                          key={bar}
                          className="w-1 bg-green-400 rounded-full"
                          animate={{ height: ["2px", "8px", "2px"] }}
                          transition={{ 
                            duration: 0.8, 
                            repeat: Infinity, 
                            delay: bar * 0.1
                          }}
                        />
                      ))}
                    </motion.div>
                  )}
                  
                  {/* User Name */}
                  <div className="absolute bottom-1 right-1 text-white text-xs bg-black bg-opacity-50 px-1 rounded">
                    {user.name}
                  </div>
                  
                  {/* Video Quality Indicator */}
                  <motion.div
                    className="absolute inset-0 border-2 border-transparent"
                    animate={{ 
                      borderColor: ["rgba(34, 197, 94, 0)", "rgba(34, 197, 94, 0.5)", "rgba(34, 197, 94, 0)"]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  />
                </motion.div>
              ))}
            </div>
            
            {/* Verschlüsselungs-Indikator */}
            <motion.div
              className="flex items-center justify-center space-x-2 bg-green-600 bg-opacity-30 rounded-lg p-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <Shield className="w-5 h-5 text-green-300" />
              <span className="text-sm">End-to-End verschlüsselt</span>
            </motion.div>
          </div>
          
          {/* Chat Bereich */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-center">Sicherer Chat</h4>
            
            {/* Chat Fenster */}
            <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4 h-40 space-y-3 border border-blue-400 overflow-y-auto">{/* Chat Nachrichten */}
              <motion.div
                className="flex items-start space-x-2"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-xs">A</span>
                </div>
                <div className="bg-blue-600 rounded-lg px-3 py-1 max-w-20">
                  <p className="text-xs">Hallo Team!</p>
                </div>
              </motion.div>
              
              <motion.div
                className="flex items-start space-x-2 justify-end"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2 }}
              >
                <div className="bg-purple-600 rounded-lg px-3 py-1 max-w-20">
                  <p className="text-xs">Hi! Alles bereit?</p>
                </div>
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-xs">B</span>
                </div>
              </motion.div>
              
              {/* Typing Indicator */}
              <motion.div
                className="flex items-center space-x-1 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 2.5 }}
              >
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span className="text-xs text-gray-400">tippt...</span>
              </motion.div>
            </div>
            
            {/* Chat Verschlüsselungs-Indikator */}
            <motion.div
              className="flex items-center justify-center space-x-2 bg-green-600 bg-opacity-30 rounded-lg p-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <Lock className="w-5 h-5 text-green-300" />
              <span className="text-sm">Verschlüsselter Chat</span>
            </motion.div>
          </div>
        </div>
        
        {/* Sicherheits-Badge */}
        <motion.div
          className="absolute top-4 right-4 bg-green-500 bg-opacity-80 rounded-full p-2"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Shield className="w-6 h-6 text-white" />
        </motion.div>
        
        {/* Datenfluss Animation */}
        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 3 }}
        >
          <div className="flex items-center space-x-2 bg-blue-600 bg-opacity-30 rounded-full px-3 py-1">
            <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
            <span className="text-xs">Sicherer Datenfluss</span>
            <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 to-indigo-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-red-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-4 rounded-full shadow-2xl mb-8"
            >
              <Globe className="w-6 h-6 mr-3" />
              <span className="text-lg font-semibold">Microsoft Partner</span>
            </motion.div>
            
            <h1 className="text-7xl font-bold text-gray-900 mb-6">
              Microsoft <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">Lösungen</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              Als zertifizierter Microsoft Partner bieten wir Ihnen die gesamte Palette 
              moderner Microsoft-Technologien für Ihr Unternehmen.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Calendar className="w-5 h-5 inline mr-2" />
                Demo vereinbaren
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                <a href="/pdfs/microsoft-produktinfo.pdf" download className="flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  Produktinfo herunterladen
                </a>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Microsoft Business Lizenzen Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-scaleit-black mb-6">
              Microsoft 365 Business <span className="text-scaleit-red">Lizenzen</span>
            </h2>
            <p className="text-xl text-scaleit-gray max-w-3xl mx-auto">
              Die richtige Lizenz für jedes Unternehmen - von Basic bis Premium
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Business Basic */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="bg-gradient-to-r from-scaleit-gray to-scaleit-black text-white p-6">
                <h3 className="text-2xl font-bold mb-2">Business Basic</h3>
                <div className="text-3xl font-bold">6 €<span className="text-lg font-normal">/Monat</span></div>
                <div className="text-sm opacity-90">pro Benutzer</div>
              </div>

              <div className="p-6">
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-scaleit-black">Web-Apps & Mobile Apps</div>
                      <div className="text-sm text-scaleit-gray">Word, Excel, PowerPoint, Outlook</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-scaleit-black">1 TB OneDrive Speicher</div>
                      <div className="text-sm text-scaleit-gray">Cloud-Speicher für Dateien</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-scaleit-black">Teams</div>
                      <div className="text-sm text-scaleit-gray">Chat, Audio- und Videokonferenzen</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-scaleit-black">Exchange Online</div>
                      <div className="text-sm text-scaleit-gray">E-Mail mit 50 GB Postfach</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-scaleit-black">SharePoint & OneDrive</div>
                      <div className="text-sm text-scaleit-gray">Dateifreigabe und Zusammenarbeit</div>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-scaleit-gray to-scaleit-black text-white py-3 rounded-lg font-semibold hover:from-scaleit-black hover:to-gray-800 transition-all duration-300">
                  Jetzt starten
                </button>
              </div>
            </motion.div>

            {/* Business Standard */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl border-2 border-scaleit-red overflow-hidden hover:shadow-2xl transition-all duration-300 relative"
            >
              <div className="absolute top-4 right-4 bg-scaleit-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                Beliebt
              </div>

              <div className="bg-gradient-to-r from-scaleit-red to-red-600 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">Business Standard</h3>
                <div className="text-3xl font-bold">12 €<span className="text-lg font-normal">/Monat</span></div>
                <div className="text-sm opacity-90">pro Benutzer</div>
              </div>

              <div className="p-6">
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-scaleit-black">Vollständige Office-Apps</div>
                      <div className="text-sm text-scaleit-gray">Desktop-Apps für Windows/Mac</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-scaleit-black">1 TB OneDrive Speicher</div>
                      <div className="text-sm text-scaleit-gray">Erweiterter Cloud-Speicher</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-scaleit-black">Teams mit erweiterten Features</div>
                      <div className="text-sm text-scaleit-gray">Besprechungsaufzeichnung, Live-Events</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-scaleit-black">Exchange Online</div>
                      <div className="text-sm text-scaleit-gray">E-Mail mit 50 GB Postfach</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-scaleit-black">SharePoint Online</div>
                      <div className="text-sm text-scaleit-gray">Team-Websites und Intranet</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-scaleit-black">Azure AD Premium P1</div>
                      <div className="text-sm text-scaleit-gray">Erweiterte Identitätsverwaltung</div>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-scaleit-red to-red-600 text-white py-3 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300">
                  Jetzt starten
                </button>
              </div>
            </motion.div>

            {/* Business Premium */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="bg-gradient-to-r from-scaleit-purple to-purple-600 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">Business Premium</h3>
                <div className="text-3xl font-bold">22 €<span className="text-lg font-normal">/Monat</span></div>
                <div className="text-sm opacity-90">pro Benutzer</div>
              </div>

              <div className="p-6">
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-scaleit-black">Alle Business Standard Features</div>
                      <div className="text-sm text-scaleit-gray">Plus erweiterte Sicherheitsfeatures</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-scaleit-black">5 TB OneDrive Speicher</div>
                      <div className="text-sm text-scaleit-gray">Erheblich mehr Cloud-Speicher</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-scaleit-black">Azure AD Premium P1</div>
                      <div className="text-sm text-scaleit-gray">Erweiterte Identitätsverwaltung</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-scaleit-black">Intune</div>
                      <div className="text-sm text-scaleit-gray">Mobile Device Management</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-scaleit-black">Azure Information Protection</div>
                      <div className="text-sm text-scaleit-gray">Erweiterter Datenschutz</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-scaleit-black">Windows 10/11 Pro Upgrade</div>
                      <div className="text-sm text-scaleit-gray">Lizenz für Windows Pro</div>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-scaleit-purple to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-300">
                  Jetzt starten
                </button>
              </div>
            </motion.div>
          </div>

          {/* Vergleichstabelle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 bg-gray-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-scaleit-black text-center mb-8">
              Detaillierter Funktionsvergleich
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-4 font-semibold text-scaleit-black">Funktion</th>
                    <th className="text-center py-4 px-4 font-semibold text-scaleit-gray">Business Basic</th>
                    <th className="text-center py-4 px-4 font-semibold text-scaleit-gray">Business Standard</th>
                    <th className="text-center py-4 px-4 font-semibold text-scaleit-gray">Business Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Office Web Apps", basic: true, standard: true, premium: true },
                    { feature: "Office Desktop Apps", basic: false, standard: true, premium: true },
                    { feature: "OneDrive Speicher", basic: "1 TB", standard: "1 TB", premium: "5 TB" },
                    { feature: "Teams", basic: true, standard: true, premium: true },
                    { feature: "Exchange Online", basic: "50 GB", standard: "50 GB", premium: "100 GB" },
                    { feature: "SharePoint Online", basic: true, standard: true, premium: true },
                    { feature: "Azure AD Premium", basic: false, standard: "P1", premium: "P1" },
                    { feature: "Intune", basic: false, standard: false, premium: true },
                    { feature: "Windows 10/11 Pro", basic: false, standard: false, premium: true },
                    { feature: "Azure Information Protection", basic: false, standard: false, premium: true }
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium text-scaleit-black">{row.feature}</td>
                      <td className="py-3 px-4 text-center">
                        {typeof row.basic === 'boolean' ? (
                          row.basic ? <CheckCircle className="w-5 h-5 text-green-500 mx-auto" /> : <span className="text-gray-400">-</span>
                        ) : (
                          <span className="text-scaleit-gray">{row.basic}</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {typeof row.standard === 'boolean' ? (
                          row.standard ? <CheckCircle className="w-5 h-5 text-green-500 mx-auto" /> : <span className="text-gray-400">-</span>
                        ) : (
                          <span className="text-scaleit-gray">{row.standard}</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {typeof row.premium === 'boolean' ? (
                          row.premium ? <CheckCircle className="w-5 h-5 text-green-500 mx-auto" /> : <span className="text-gray-400">-</span>
                        ) : (
                          <span className="text-scaleit-gray">{row.premium}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Microsoft Produktpalette</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Umfassende Lösungen für moderne Arbeitsplätze und digitale Transformation
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-lg p-2 flex flex-wrap gap-2">
              {microsoftSolutions.map((solution) => (
                <button
                  key={solution.id}
                  onClick={() => setActiveTab(solution.id)}
                  className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                    activeTab === solution.id
                      ? 'bg-white text-red-600 shadow-md'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                  }`}
                >
                  <solution.icon className="w-5 h-5 inline mr-2" />
                  {solution.name}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          {microsoftSolutions.map((solution) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: activeTab === solution.id ? 1 : 0,
                y: activeTab === solution.id ? 0 : 20,
                display: activeTab === solution.id ? 'block' : 'none'
              }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-red-500 to-indigo-500 rounded-lg mr-4">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{solution.name}</h3>
                </div>
                
                <p className="text-lg text-gray-600 mb-8">{solution.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Features</h4>
                    <div className="space-y-2">
                      {solution.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Vorteile</h4>
                    <div className="space-y-2">
                      {solution.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <Zap className="w-5 h-5 text-red-500" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Link
                    href={solution.id === 'office365' ? '/microsoft/office365' : solution.id === 'azure' ? '/microsoft/azure' : '/microsoft/dynamics'}
                    className="inline-flex items-center bg-gradient-to-r from-red-600 to-red-800 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-700 hover:to-red-900 transition-all duration-300"
                  >
                    Mehr erfahren
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
              
              <div>
                {solution.id === 'office365' && <TeamsCollaboration />}
                {solution.id === 'azure' && (
                  <div className="bg-gradient-to-br from-red-900 to-purple-900 rounded-2xl p-8 text-white">
                    <h4 className="text-2xl font-bold mb-6">Azure Cloud Services</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {['Virtual Machines', 'App Services', 'SQL Database', 'AI Services'].map((service, index) => (
                        <motion.div
                          key={service}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="bg-white/10 rounded-lg p-4 text-center"
                        >
                          <Cloud className="w-8 h-8 mx-auto mb-2" />
                          <span className="text-sm">{service}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
                {solution.id === 'dynamics' && (
                  <div className="bg-gradient-to-br from-green-900 to-red-900 rounded-2xl p-8 text-white">
                    <h4 className="text-2xl font-bold mb-6">Business Intelligence</h4>
                    <div className="space-y-4">
                      {['Sales Pipeline', 'Customer Insights', 'Financial Reports', 'Performance KPIs'].map((item, index) => (
                        <motion.div
                          key={item}
                          initial={{ x: -50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-center space-x-3"
                        >
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                            <TrendingUp className="w-4 h-4" />
                          </div>
                          <span>{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Enterprise Security</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Umfassende Sicherheitslösungen für den Schutz Ihrer Unternehmensdaten
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mx-auto mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Microsoft Partner Vorteile</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Als zertifizierter Microsoft Partner bieten wir Ihnen exklusive Vorteile
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Zertifizierte Experten",
                description: "Microsoft-zertifizierte Spezialisten für alle Produkte",
                icon: Award,
                color: "from-yellow-500 to-orange-500"
              },
              {
                title: "Direkte Unterstützung",
                description: "Direkter Draht zu Microsoft für technischen Support",
                icon: Settings,
                color: "from-red-500 to-indigo-500"
              },
              {
                title: "Sonderkonditionen",
                description: "Spezielle Partnerpreise und Lizenzmodelle",
                icon: TrendingUp,
                color: "from-green-500 to-emerald-500"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${benefit.color} flex items-center justify-center mx-auto mb-6`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Bereit für Microsoft?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Lassen Sie uns die beste Microsoft-Lösung für Ihr Unternehmen finden
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageSquare className="w-5 h-5 inline mr-2" />
              Kostenlose Beratung
            </motion.button>
          </motion.div>
        </div>
      </section>

      <SimplicityBanner />

      <Footer />
    </main>
  );
}



