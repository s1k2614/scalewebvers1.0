'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  const handleModuleClick = (moduleId: string) => {
    setActiveModule(activeModule === moduleId ? '' : moduleId);
  };

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
            <h1 className="text-6xl font-bold bg-gradient-to-r from-scaleit-red to-scaleit-purple bg-clip-text text-transparent mb-8">
              ACMP Individual Edition
            </h1>
            <p className="text-2xl text-scaleit-gray mb-8 max-w-4xl mx-auto">
              Spezialisierte Client Commands mit {modules.filter(m => !m.comingSoon).length} professionellen Modulen
            </p>
            <div className="flex items-center justify-center space-x-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-scaleit-red">{modules.filter(m => !m.comingSoon).length}</div>
                <div className="text-scaleit-gray">Verfügbare Module</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-scaleit-purple">20</div>
                <div className="text-scaleit-gray">Gesamtmodule</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-scaleit-black">100%</div>
                <div className="text-scaleit-gray">ScaleITS CI</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - Modules */}
            <div className="lg:col-span-3">
              <div className="space-y-6">
                {/* Render modules in rows of 3 */}
                {Array.from({ length: Math.ceil(modules.filter(m => !m.comingSoon).length / 3) }, (_, rowIndex) => {
                  const availableModules = modules.filter(m => !m.comingSoon);
                  const rowModules = availableModules.slice(rowIndex * 3, (rowIndex + 1) * 3);
                  const activeModuleInRow = rowModules.find(module => module.id === activeModule);

                  return (
                <div key={rowIndex} className="space-y-6">
                  {/* Row of modules */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {rowModules.map((module, index) => {
                      const IconComponent = module.icon;
                      const isActive = activeModule === module.id;
                      const globalIndex = rowIndex * 3 + index;

                      return (
                        <motion.div
                          key={module.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: globalIndex * 0.1 }}
                          onClick={() => handleModuleClick(module.id)}
                          className={`relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-105 cursor-pointer bg-gradient-to-r ${module.color} ${
                            isActive
                              ? 'ring-4 ring-scaleit-red shadow-2xl'
                              : 'hover:shadow-xl'
                          }`}
                        >
                          <div className="text-white">
                            <IconComponent className="w-12 h-12 mx-auto mb-4 text-white" />
                            <h3 className="text-xl font-bold mb-3">{module.name}</h3>
                            <p className="text-sm opacity-90 text-white mb-4">
                              {module.description}
                            </p>
                            <div className="absolute top-2 right-2 bg-green-500/90 text-white text-xs px-2 py-1 rounded-full">
                              Verfügbar
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Module Details for this row */}
                  {activeModuleInRow && (
                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: -20 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="overflow-hidden"
                      >
                        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                          <div className="flex items-center mb-6">
                            <div className={`p-4 rounded-2xl bg-gradient-to-r ${activeModuleInRow.color} mr-6`}>
                              {React.createElement(activeModuleInRow.icon, { className: "w-8 h-8 text-white" })}
                            </div>
                            <div className="flex-grow">
                              <h3 className="text-3xl font-bold text-scaleit-black mb-2">{activeModuleInRow.name}</h3>
                              <p className="text-lg text-scaleit-gray">{activeModuleInRow.description}</p>
                            </div>
                            <button
                              onClick={() => setActiveModule('')}
                              className="ml-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                            >
                              <X className="w-6 h-6 text-scaleit-gray" />
                            </button>
                          </div>

                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Features */}
                            <div>
                              <h4 className="text-xl font-semibold text-scaleit-black mb-4 flex items-center">
                                <CheckCircle className="w-5 h-5 text-scaleit-red mr-2" />
                                Features
                              </h4>
                              <ul className="space-y-2">
                                {activeModuleInRow.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-center text-scaleit-gray">
                                    <CheckCircle className="w-4 h-4 text-scaleit-red mr-3 flex-shrink-0" />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Module Visualization */}
                            <div>
                              <h4 className="text-xl font-semibold text-scaleit-black mb-4 flex items-center">
                                <Eye className="w-5 h-5 text-scaleit-red mr-2" />
                                Funktionsweise
                              </h4>
                              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 min-h-[200px] flex items-center justify-center">
                                {/* Individual Module Graphics */}
                                {activeModuleInRow.id === 'ad-logon-timestamp' && (
                                  <div className="text-center space-y-4">
                                    {/* AD Logon Timestamp Display */}
                                    <div className="grid grid-cols-2 gap-4">
                                      <div className="p-3 bg-blue-100 rounded-lg">
                                        <Users className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                                        <div className="text-xs text-blue-700 font-medium">Aktive User</div>
                                        <div className="text-sm font-bold text-blue-800">142</div>
                                      </div>
                                      <div className="p-3 bg-green-100 rounded-lg">
                                        <Clock className="w-6 h-6 text-green-600 mx-auto mb-1" />
                                        <div className="text-xs text-green-700 font-medium">Letzte Woche</div>
                                        <div className="text-sm font-bold text-green-800">98%</div>
                                      </div>
                                      <div className="p-3 bg-orange-100 rounded-lg">
                                        <AlertTriangle className="w-6 h-6 text-orange-600 mx-auto mb-1" />
                                        <div className="text-xs text-orange-700 font-medium">Inaktive</div>
                                        <div className="text-sm font-bold text-orange-800">23</div>
                                      </div>
                                      <div className="p-3 bg-purple-100 rounded-lg">
                                        <TrendingUp className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                                        <div className="text-xs text-purple-700 font-medium">Trend</div>
                                        <div className="text-sm font-bold text-purple-800">+12%</div>
                                      </div>
                                    </div>

                                    {/* Key Features */}
                                    <div className="flex justify-center space-x-4 text-xs">
                                      <div className="flex items-center text-blue-600">
                                        <Shield className="w-3 h-3 mr-1" />
                                        Security Audit
                                      </div>
                                      <div className="flex items-center text-green-600">
                                        <Target className="w-3 h-3 mr-1" />
                                        User Tracking
                                      </div>
                                      <div className="flex items-center text-purple-600">
                                        <Activity className="w-3 h-3 mr-1" />
                                        Compliance
                                      </div>
                                    </div>

                                    <p className="text-xs text-scaleit-gray font-medium">Vollständige AD-Login Überwachung und Analyse</p>
                                  </div>
                                )}

                                {activeModuleInRow.id === 'bitlocker-management' && (
                                  <div className="text-center space-y-6">
                                    {/* BitLocker Management Dashboard */}
                                    <div className="space-y-4">
                                      <div className="bg-white rounded-lg p-4 shadow-sm">
                                        <div className="text-sm font-bold text-gray-700 mb-2">BitLocker Status</div>
                                        <div className="grid grid-cols-2 gap-4 text-xs">
                                          <div className="text-center">
                                            <div className="text-lg font-bold text-green-600">89%</div>
                                            <div className="text-gray-500">Verschlüsselt</div>
                                          </div>
                                          <div className="text-center">
                                            <div className="text-lg font-bold text-orange-600">11%</div>
                                            <div className="text-gray-500">Ausstehend</div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="bg-white rounded-lg p-4 shadow-sm">
                                        <div className="text-sm font-bold text-gray-700 mb-2">Recovery Keys</div>
                                        <div className="flex items-center justify-center">
                                          <Shield className="w-8 h-8 text-green-500 mr-2" />
                                          <span className="text-sm text-green-700">Gesichert</span>
                                        </div>
                                      </div>
                                    </div>

                                    <p className="text-sm text-scaleit-gray font-medium">Zentrale BitLocker-Verschlüsselung und Key-Management</p>
                                  </div>
                                )}

                                {activeModuleInRow.id === 'password-reset' && (
                                  <div className="text-center space-y-6">
                                    {/* Password Reset Portal */}
                                    <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-xl p-4">
                                      <div className="text-sm font-bold text-cyan-700 mb-3">Self-Service Portal</div>

                                      {/* Reset Process */}
                                      <div className="space-y-4">
                                        <div className="flex items-center justify-center space-x-3">
                                          <div className="p-3 bg-blue-500 rounded-lg shadow-lg">
                                            <Users className="w-6 h-6 text-white" />
                                          </div>
                                          <ArrowRight className="w-6 h-6 text-scaleit-gray" />
                                          <div className="p-3 bg-green-500 rounded-lg shadow-lg">
                                            <Key className="w-6 h-6 text-white" />
                                          </div>
                                          <ArrowRight className="w-6 h-6 text-scaleit-gray" />
                                          <div className="p-3 bg-purple-500 rounded-lg shadow-lg">
                                            <CheckCircle className="w-6 h-6 text-white" />
                                          </div>
                                        </div>

                                        {/* Statistics */}
                                        <div className="bg-white rounded-lg p-3 shadow-sm">
                                          <div className="text-sm font-bold text-gray-700 mb-2">Reset-Statistiken</div>
                                          <div className="grid grid-cols-2 gap-2 text-xs">
                                            <div className="text-center">
                                              <div className="text-lg font-bold text-blue-600">247</div>
                                              <div className="text-gray-500">Dieser Monat</div>
                                            </div>
                                            <div className="text-center">
                                              <div className="text-lg font-bold text-green-600">98%</div>
                                              <div className="text-gray-500">Erfolgsrate</div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <p className="text-sm text-scaleit-gray font-medium">Self-Service Passwort-Reset ohne VPN</p>
                                  </div>
                                )}

                                {activeModuleInRow.id === 'software-assignment' && (
                                  <div className="text-center space-y-6">
                                    {/* Software Assignment Interface */}
                                    <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-4">
                                      <div className="text-sm font-bold text-emerald-700 mb-3">Software Assignment</div>

                                      {/* Assignment Process */}
                                      <div className="space-y-4">
                                        <div className="bg-white rounded-lg p-3 shadow-sm">
                                          <div className="text-sm font-bold text-gray-700 mb-2">Zuweisungs-Status</div>
                                          <div className="space-y-2">
                                            <div className="flex items-center justify-between">
                                              <div className="flex items-center space-x-2">
                                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                <span className="text-xs">Microsoft Office</span>
                                              </div>
                                              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Assigned</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                              <div className="flex items-center space-x-2">
                                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                                <span className="text-xs">Adobe Creative Suite</span>
                                              </div>
                                              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Installing</span>
                                            </div>
                                          </div>
                                        </div>

                                        {/* Auto-Reinstall */}
                                        <div className="bg-white rounded-lg p-3 shadow-sm">
                                          <div className="text-sm font-bold text-gray-700 mb-2">Auto-Reinstall</div>
                                          <div className="flex items-center justify-center">
                                            <RefreshCw className="w-8 h-8 text-green-500 mr-2" />
                                            <span className="text-sm text-green-700">Aktiviert</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <p className="text-sm text-scaleit-gray font-medium">Intelligente Software-Zuweisung und automatische Reinstallation</p>
                                  </div>
                                )}

                                {activeModuleInRow.id === 'o365-license-management' && (
                                  <div className="text-center space-y-6">
                                    {/* O365 License Management */}
                                    <div className="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-xl p-4">
                                      <div className="text-sm font-bold text-indigo-700 mb-3">Microsoft 365 Lizenzen</div>

                                      {/* License Overview */}
                                      <div className="space-y-4">
                                        <div className="bg-white rounded-lg p-3 shadow-sm">
                                          <div className="text-sm font-bold text-gray-700 mb-2">Lizenz-Verteilung</div>
                                          <div className="space-y-2">
                                            <div className="flex items-center justify-between">
                                              <div className="flex items-center space-x-2">
                                                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                                                <span className="text-xs">E3 Enterprise</span>
                                              </div>
                                              <span className="text-xs text-gray-600">142/150</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                              <div className="flex items-center space-x-2">
                                                <div className="w-3 h-3 bg-green-500 rounded"></div>
                                                <span className="text-xs">E5 Security</span>
                                              </div>
                                              <span className="text-xs text-gray-600">89/100</span>
                                            </div>
                                          </div>
                                        </div>

                                        {/* Cost Optimization */}
                                        <div className="bg-white rounded-lg p-3 shadow-sm">
                                          <div className="text-sm font-bold text-gray-700 mb-2">Kosteneinsparung</div>
                                          <div className="grid grid-cols-2 gap-2 text-xs">
                                            <div className="text-center">
                                              <div className="text-lg font-bold text-green-600">23%</div>
                                              <div className="text-gray-500">Einsparung</div>
                                            </div>
                                            <div className="text-center">
                                              <div className="text-lg font-bold text-blue-600">€12.5k</div>
                                              <div className="text-gray-500">Pro Jahr</div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <p className="text-sm text-scaleit-gray font-medium">Umfassende Microsoft 365 Lizenzverwaltung</p>
                                  </div>
                                )}

                                {activeModuleInRow.id === 'printer-management' && (
                                  <div className="text-center space-y-6">
                                    {/* Printer Management */}
                                    <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-xl p-4">
                                      <div className="text-sm font-bold text-amber-700 mb-3">Netzwerkdrucker-Verwaltung</div>

                                      {/* Building Plan */}
                                      <div className="space-y-4">
                                        <div className="bg-white rounded-lg p-3 shadow-sm">
                                          <div className="text-sm font-bold text-gray-700 mb-2">Gebäudeplan</div>
                                          <div className="grid grid-cols-2 gap-4">
                                            <div className="p-2 bg-blue-100 rounded text-center">
                                              <Building className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                                              <div className="text-xs text-blue-700">Hauptgebäude</div>
                                              <div className="text-sm font-bold text-blue-800">12 Drucker</div>
                                            </div>
                                            <div className="p-2 bg-green-100 rounded text-center">
                                              <Building className="w-6 h-6 text-green-600 mx-auto mb-1" />
                                              <div className="text-xs text-green-700">Nebengebäude</div>
                                              <div className="text-sm font-bold text-green-800">8 Drucker</div>
                                            </div>
                                          </div>
                                        </div>

                                        {/* Connection Status */}
                                        <div className="bg-white rounded-lg p-3 shadow-sm">
                                          <div className="text-sm font-bold text-gray-700 mb-2">Verbindungsstatus</div>
                                          <div className="flex justify-center space-x-2">
                                            <div className="flex items-center text-green-600 text-xs">
                                              <Wifi className="w-3 h-3 mr-1" />
                                              Online: 18
                                            </div>
                                            <div className="flex items-center text-orange-600 text-xs">
                                              <AlertTriangle className="w-3 h-3 mr-1" />
                                              Offline: 2
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <p className="text-sm text-scaleit-gray font-medium">Grafische Netzwerkdrucker-Verwaltung</p>
                                  </div>
                                )}

                                {/* Default visualization for other modules */}
                                {!activeModuleInRow.comingSoon && !['ad-logon-timestamp', 'bitlocker-management', 'password-reset', 'software-assignment', 'o365-license-management', 'printer-management'].includes(activeModuleInRow.id) && (
                                  <div className="text-center space-y-6">
                                    <div className="p-8 bg-gradient-to-r from-scaleit-gray to-scaleit-red rounded-xl">
                                      <div className={`p-6 rounded-full bg-gradient-to-r ${activeModuleInRow.color} mx-auto w-fit`}>
                                        {React.createElement(activeModuleInRow.icon, { className: "w-12 h-12 text-white" })}
                                      </div>
                                      <h4 className="text-xl font-bold text-white mt-4 mb-2">{activeModuleInRow.name}</h4>
                                      <p className="text-white/80 text-sm">Professionelle {activeModuleInRow.name.toLowerCase()} Lösung</p>
                                    </div>
                                    <p className="text-sm text-scaleit-gray font-medium">Modul-Details werden geladen...</p>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Details anschauen Button */}
                          <div className="mt-8 pt-6 border-t border-gray-200">
                            <div className="flex justify-center">
                              <Link href={`/acmp-individual/${activeModuleInRow.id}`}>
                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="inline-flex items-center bg-gradient-to-r from-scaleit-red to-scaleit-purple text-white px-8 py-3 rounded-full font-semibold text-lg hover:from-scaleit-red/90 hover:to-scaleit-purple/90 transition-all duration-300 shadow-xl"
                                >
                                  Details anschauen
                                  <ArrowRight className="w-5 h-5 ml-2" />
                                </motion.button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
