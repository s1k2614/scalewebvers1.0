'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import {
  Database, Monitor, Settings, Shield, Users, BarChart3, ArrowRight, CheckCircle,
  Package, Download, Zap, Command, Layers, HardDrive, Wifi, Lock, Play,
  Terminal, Code, ChevronRight, Eye, Cpu, Network, Server, Cloud, UserPlus, Key,
  X, TrendingUp, ShieldCheck, AlertTriangle, UserX, Clock, Timer, MousePointer, ArrowDown,
  Calendar, FileText, Activity, Target, Gauge, Smartphone, Laptop, MonitorSpeaker,
  Building, MapPin, Printer, RefreshCw, Archive, Search, Filter, Star,
  Wrench, Sliders, RotateCcw, CheckSquare, XSquare, Plus, Minus, UserMinus, Mail, MessageSquare, Send, Edit, Bell,
  Paintbrush, DollarSign, LogIn, Trash2, Headphones, Shield as CertificateIcon, Type, ArrowUpDown, Computer
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function ACMPIndividualPage() {
  const [activeModule, setActiveModule] = useState<string>('');
  const [selectedCommand, setSelectedCommand] = useState<any>(null);

  // ALLE ACMP INDIVIDUAL MODULES
  const modules = [
    {
      id: 'ad-logon-timestamp',
      name: 'AD Last Logon Timestamp',
      description: 'Neues Anzeigefeld: AD Last Logon - Anzeige des letzten AD-Logins im ACMP Inventory',
      icon: Paintbrush,
      color: 'from-scaleit-gray to-scaleit-black',
      comingSoon: false,
      features: [
        'Neues Anzeigefeld im ACMP Inventory',
        'Anzeige des letzten Active Directory Logins',
        'Verbesserte Benutzerüberwachung',
        'Erweiterte Inventarverwaltung'
      ]
    },
    {
      id: 'bitlocker-management',
      name: 'Bitlocker Management',
      description: 'Bitlocker Steuerung mit ACMP - Verwalten Sie BitLocker-Verschlüsselung und speichern Recovery-Schlüssel',
      icon: HardDrive,
      color: 'from-scaleit-red to-scaleit-purple',
      comingSoon: false,
      features: [
        'BitLocker-Verschlüsselung steuern',
        'Recovery-Schlüssel speichern',
        'Zentrale Verwaltung',
        'Sicherheitsrichtlinien durchsetzen'
      ]
    },
    {
      id: 'password-reset',
      name: 'Password Reset',
      description: 'Ändern des AD Kennworts ohne VPN-Tunnel - Ermöglichen Sie AD-Passwort-Änderungen ohne VPN',
      icon: Key,
      color: 'from-scaleit-purple to-scaleit-black',
      comingSoon: false,
      features: [
        'AD-Passwort ändern ohne VPN',
        'Self-Service Portal',
        'Sichere Authentifizierung',
        'Remote-Zugriff Support'
      ]
    },
    {
      id: 'software-assignment',
      name: 'Software Assignment',
      description: 'Software bequem zuweisen und nach einem neuen Betriebssystemrollout automatisch wieder installieren',
      icon: Download,
      color: 'from-scaleit-black to-scaleit-gray',
      comingSoon: false,
      features: [
        'Paketierte Software zuweisen',
        'Automatische Reinstallation',
        'Windows-Rollout Support',
        'Spezialsoftware Management'
      ]
    },
    {
      id: 'o365-license-management',
      name: 'O365 License Management',
      description: 'Verwalten Sie Ihre Microsoft Cloud Lizenzen - Verwalten Sie Microsoft Cloud-Lizenzen direkt aus ACMP',
      icon: DollarSign,
      color: 'from-scaleit-red to-scaleit-gray',
      comingSoon: false,
      features: [
        'Microsoft Cloud-Lizenzverwaltung',
        'Direkte ACMP-Integration',
        'Lizenzüberwachung',
        'Kostenoptimierung'
      ]
    },
    {
      id: 'printer-management',
      name: 'Printer Management',
      description: 'Grafisches Verbinden von Netzwerkdruckern - Verbinden Sie Netzwerkdrucker über grafischen Gebäudeplan',
      icon: Printer,
      color: 'from-scaleit-purple to-scaleit-red',
      comingSoon: false,
      features: [
        'Grafischer Gebäudeplan',
        'Netzwerkdrucker-Integration',
        'Benutzerfreundliche Oberfläche',
        'Automatische Treiberinstallation'
      ]
    },
    {
      id: 'ad-security-group-management',
      name: 'AD Security Group Management',
      description: 'Zentrale Verwaltung von Active Directory Sicherheitsgruppen über ACMP',
      icon: Shield,
      color: 'from-scaleit-gray to-scaleit-red',
      comingSoon: false,
      features: [
        'Sicherheitsgruppen-Verwaltung',
        'Zentrale AD-Integration',
        'Rollenbasierte Zugriffskontrolle',
        'Automatisierte Gruppenzuweisungen'
      ]
    },
    {
      id: 'deploy-outlook-signatur',
      name: 'Deploy Outlook Signatur',
      description: 'Zentrale Verteilung von Outlook Signaturen - Verteilen Sie Outlook-Signaturen mit AD-Daten zentral',
      icon: Mail,
      color: 'from-scaleit-red to-scaleit-black',
      comingSoon: false,
      features: [
        'Zentrale Signaturverteilung',
        'Active Directory Datenintegration',
        'Automatische Outlook-Konfiguration',
        'Corporate Identity Management'
      ]
    },
    {
      id: 'first-step-wizard',
      name: 'First Step Wizard',
      description: 'Vorbereitung Ihrer ACMP Umgebung - Bereiten Sie Ihre ACMP-Umgebung für Client Commands vor',
      icon: Zap,
      color: 'from-scaleit-black to-scaleit-purple',
      comingSoon: false,
      features: [
        'ACMP-Umgebung vorbereiten',
        'Client Commands Setup',
        'Konfigurationsassistent',
        'Systeminitialisierung'
      ]
    },
    {
      id: 'next-free-computername',
      name: 'Next Free Computername',
      description: 'ACMP schlägt automatisch den nächsten Computernamen vor - Automatische Vorschläge für verfügbare Computernamen',
      icon: Computer,
      color: 'from-scaleit-purple to-scaleit-gray',
      comingSoon: false,
      features: [
        'Automatische Namensvorschläge',
        'Verfügbarkeitsprüfung',
        'Naming Convention Support',
        'Zentrale Computerverwaltung'
      ]
    },
    {
      id: 'on-und-offboarding-management',
      name: 'On- und Offboarding Management',
      description: 'Formular für Ein- und Austritt von Mitarbeitern - Verwalten Sie Mitarbeiter-Onboarding und Offboarding mit Assets',
      icon: UserPlus,
      color: 'from-scaleit-red to-scaleit-purple',
      comingSoon: false,
      features: [
        'Mitarbeiter Ein-/Austrittsprozesse',
        'Asset-Management Integration',
        'Automatisierte Workflows',
        'Compliance-konforme Abläufe'
      ]
    },
    {
      id: 'rename-computer',
      name: 'Rename Computer',
      description: 'Bequemes Umbenennen eines Computernamens aus der ACMP-Console heraus',
      icon: Computer,
      color: 'from-scaleit-gray to-scaleit-purple',
      comingSoon: false,
      features: [
        'Remote Computer umbenennen',
        'ACMP Console Integration',
        'Einfache Rechtsklik-Funktion',
        'Ohne Fernwartungssitzung'
      ]
    },
    {
      id: 'reset-ad-user-password-console',
      name: 'Reset AD User Password (Console)',
      description: 'Zurücksetzen von AD-Benutzerkennwörtern aus der ACMP Console heraus',
      icon: Lock,
      color: 'from-scaleit-purple to-scaleit-red',
      comingSoon: false,
      features: [
        'AD-Kennwort zurücksetzen',
        'ACMP Console Integration',
        'Administrator-Funktionen',
        'Zentrale Benutzerverwaltung'
      ]
    },
    {
      id: 'set-auto-login',
      name: 'Set Auto Login',
      description: 'Remote Einrichtung eines Auto Logins an einem Client',
      icon: LogIn,
      color: 'from-scaleit-red to-scaleit-gray',
      comingSoon: false,
      features: [
        'Remote Auto-Login einrichten',
        'Für Terminals geeignet',
        'Produktionsumgebungen',
        'Maschinensteuerungen'
      ]
    },
    {
      id: 'software-assignment-transfer',
      name: 'Software Assignment Transfer',
      description: 'Zugewiesene Software eines alten Clients auf einen neuen übertragen',
      icon: ArrowUpDown,
      color: 'from-scaleit-gray to-scaleit-red',
      comingSoon: false,
      features: [
        'Software-Zuweisung übertragen',
        'Hardware-Austausch Support',
        'Massenrollout-Unterstützung',
        'Spezialsoftware-Migration'
      ]
    },
    {
      id: 'software-uninstaller',
      name: 'Software Uninstaller',
      description: 'Deinstallation gefundener Software direkt aus der ACMP Console',
      icon: Trash2,
      color: 'from-scaleit-red to-scaleit-black',
      comingSoon: false,
      features: [
        'Software direkt deinstallieren',
        'ACMP Console Integration',
        'Deinstallationsstring-Support',
        'Bulk-Deinstallation'
      ]
    },
    {
      id: 'ssl-certificate-management',
      name: 'SSL Certificate Management',
      description: 'Verwaltung und Austausch von SSL-Zertifikaten auf Zielsystemen',
      icon: CertificateIcon,
      color: 'from-scaleit-black to-scaleit-purple',
      comingSoon: false,
      features: [
        'SSL-Zertifikat Management',
        'Wildcard-Zertifikat Support',
        'Automatische Installation',
        'Asset Management Integration'
      ]
    },
    {
      id: 'teamviewer-remote-control',
      name: 'TeamViewer Remote Control',
      description: 'TeamViewer Fernwartung ab sofort ganz einfach aus der ACMP Console heraus starten',
      icon: Headphones,
      color: 'from-scaleit-purple to-scaleit-gray',
      comingSoon: false,
      features: [
        'TeamViewer Integration',
        'ACMP Console Fernwartung',
        'Direkter Client-Zugriff',
        'Helpdesk Integration'
      ]
    },
    {
      id: 'windows-feature-management',
      name: 'Windows Feature Management',
      description: 'Installation von Windows Features auf gewünschten Clients aus der ACMP Console',
      icon: Monitor,
      color: 'from-scaleit-red to-scaleit-purple',
      comingSoon: false,
      features: [
        'Windows Features installieren',
        'Bulk-Installation Support',
        'ACMP Console Integration',
        'Abfrage-basierte Auswahl'
      ]
    },
    {
      id: 'windows-font-management',
      name: 'Windows Font Management',
      description: 'Installation individueller Windows Schriftarten auf ausgewählten Clients',
      icon: Type,
      color: 'from-scaleit-gray to-scaleit-purple',
      comingSoon: false,
      features: [
        'Windows Schriftarten installieren',
        'Benutzerfreundliche Oberfläche',
        'Client-spezifische Installation',
        'Corporate Identity Support'
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
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
              className="inline-flex items-center bg-gradient-to-r from-scaleit-red to-scaleit-purple text-white px-8 py-4 rounded-full shadow-2xl mb-8"
            >
              <Settings className="w-8 h-8 mr-4" />
              <span className="text-xl font-bold">ACMP Individual Edition</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-6xl font-bold text-scaleit-black mb-8"
            >
              Spezialisierte
              <span className="block bg-gradient-to-r from-scaleit-red to-scaleit-purple bg-clip-text text-transparent">
                Client Commands
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
            >
              Individuelle ACMP Module für spezifische Anforderungen.
              Jedes Modul ist speziell auf Ihre Bedürfnisse zugeschnitten.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-scaleit-red to-scaleit-purple text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Users className="w-5 h-5 mr-3" />
                Beratungsgespräch
              </Link>
              <Link
                href="/acmp"
                className="inline-flex items-center border-2 border-scaleit-red text-scaleit-red px-8 py-4 rounded-lg font-semibold hover:bg-scaleit-red hover:text-white transition-all duration-300"
              >
                <Database className="w-5 h-5 mr-3" />
                ACMP Übersicht
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-scaleit-red to-scaleit-purple text-white rounded-full mb-4">
                <Package className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">20+</div>
              <div className="text-gray-600">Module</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-scaleit-purple to-scaleit-black text-white rounded-full mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600">Individual</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-scaleit-black to-scaleit-gray text-white rounded-full mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-scaleit-gray to-scaleit-red text-white rounded-full mb-4">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2"></div>
              <div className="text-gray-600">Skalierbar</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Verfügbare Module
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entdecken Sie unsere spezialisierten ACMP Individual Module.
              Jedes Modul kann einzeln aktiviert und konfiguriert werden.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => {
              const IconComponent = module.icon;
              return (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 overflow-hidden">
                    {/* Header */}
                    <div className={g-gradient-to-r  p-6 text-white}>
                      <div className="flex items-center justify-between mb-4">
                        <IconComponent className="w-12 h-12" />
                        <div className="text-right">
                          <div className="text-sm font-medium opacity-90">ACMP Individual</div>
                          <div className="text-xs opacity-75">Modul</div>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{module.name}</h3>
                      <p className="text-white/90 text-sm leading-relaxed">{module.description}</p>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Funktionen</h4>
                        <ul className="space-y-2">
                          {module.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start text-gray-700">
                              <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Button */}
                      <Link
                        href={/acmp-individual/}
                        className="w-full inline-flex items-center justify-center bg-gradient-to-r from-scaleit-red to-scaleit-purple text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                      >
                        <span>Details ansehen</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-scaleit-red to-scaleit-purple">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ihr individuelles
              <span className="block">ACMP Setup</span>
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Wählen Sie die Module aus, die Sie wirklich brauchen.
              Keine unnötigen Features, nur was Sie tatsächlich verwenden.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-scaleit-purple px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50"
              >
                <Users className="w-5 h-5 mr-3" />
                Individuelle Beratung
              </Link>
              <Link
                href="/acmp-standard"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-scaleit-purple transition-all duration-300"
              >
                <Package className="w-5 h-5 mr-3" />
                Standard Edition
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
