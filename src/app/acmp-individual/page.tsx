'use client';'use client';



import React from 'react';import React from 'react';

import { motion, AnimatePresence } from 'framer-motion';import { motion } from 'framer-motion';

import Navigation from '../../components/Navigation';import Navigation from '../../components/Navigation';

import Footer from '../../components/Footer';import Footer from '../../components/Footer';

import {import {

  Database, Monitor, Settings, Shield, Users, BarChart3, ArrowRight, CheckCircle,  Database, Monitor, Settings, Shield, Users, BarChart3, ArrowRight, CheckCircle,

  Package, Download, Zap, Command, Layers, HardDrive, Wifi, Lock, Play,  Package, Download, Zap, Command, Layers, HardDrive, Wifi, Lock, Play,

  Terminal, Code, ChevronRight, Eye, Cpu, Network, Server, Cloud, UserPlus, Key,  Terminal, Code, ChevronRight, Eye, Cpu, Network, Server, Cloud, UserPlus, Key,

  X, TrendingUp, ShieldCheck, AlertTriangle, UserX, Clock, Timer, MousePointer, ArrowDown,  X, TrendingUp, ShieldCheck, AlertTriangle, UserX, Clock, Timer, MousePointer, ArrowDown,

  Calendar, FileText, Activity, Target, Gauge, Smartphone, Laptop, MonitorSpeaker,  Calendar, FileText, Activity, Target, Gauge, Smartphone, Laptop, MonitorSpeaker,

  Building, MapPin, Printer, RefreshCw, Archive, Search, Filter, Star,  Building, MapPin, Printer, RefreshCw, Archive, Search, Filter, Star,

  Wrench, Sliders, RotateCcw, CheckSquare, XSquare, Plus, Minus, UserMinus, Mail, MessageSquare, Send, Edit, Bell,  Wrench, Sliders, RotateCcw, CheckSquare, XSquare, Plus, Minus, UserMinus, Mail, MessageSquare, Send, Edit, Bell,

  Paintbrush, DollarSign, LogIn, Trash2, Headphones, Shield as CertificateIcon, Type, ArrowUpDown, Computer  Paintbrush, DollarSign, LogIn, Trash2, Headphones, Shield as CertificateIcon, Type, ArrowUpDown, Computer

} from 'lucide-react';} from 'lucide-react';

import Link from 'next/link';import Link from 'next/link';

import { useState } from 'react';import { useState } from 'react';



export default function ACMPIndividualPage() {export default function ACMPIndividualPage() {

  const [activeModule, setActiveModule] = useState<string>('');  const [activeModule, setActiveModule] = useState<string>('');

  const [selectedCommand, setSelectedCommand] = useState<any>(null);  const [selectedCommand, setSelectedCommand] = useState<any>(null);



  // ALLE ACMP INDIVIDUAL MODULES  // ALLE ACMP INDIVIDUAL MODULES

  const modules = [  const modules = [

    {    {

      id: 'ad-logon-timestamp',      id: 'ad-logon-timestamp',

      name: 'AD Last Logon Timestamp',      name: 'AD Last Logon Timestamp',

      description: 'Neues Anzeigefeld: AD Last Logon - Anzeige des letzten AD-Logins im ACMP Inventory',      description: 'Neues Anzeigefeld: AD Last Logon - Anzeige des letzten AD-Logins im ACMP Inventory',

      icon: Paintbrush,      icon: Paintbrush,

      color: 'from-scaleit-gray to-scaleit-black',      color: 'from-scaleit-gray to-scaleit-black',

      comingSoon: false,      comingSoon: false,

      features: [      features: [

        'Neues Anzeigefeld im ACMP Inventory',        'Neues Anzeigefeld im ACMP Inventory',

        'Anzeige des letzten Active Directory Logins',        'Anzeige des letzten Active Directory Logins',

        'Verbesserte Benutzerüberwachung',        'Verbesserte Benutzerüberwachung',

        'Erweiterte Inventarverwaltung'        'Erweiterte Inventarverwaltung'

      ]      ]

    },    },

    {    {

      id: 'bitlocker-management',      id: 'bitlocker-management',

      name: 'Bitlocker Management',      name: 'Bitlocker Management',

      description: 'Bitlocker Steuerung mit ACMP - Verwalten Sie BitLocker-Verschlüsselung und speichern Recovery-Schlüssel',      description: 'Bitlocker Steuerung mit ACMP - Verwalten Sie BitLocker-Verschlüsselung und speichern Recovery-Schlüssel',

      icon: HardDrive,      icon: HardDrive,

      color: 'from-scaleit-red to-scaleit-purple',      color: 'from-scaleit-red to-scaleit-purple',

      comingSoon: false,      comingSoon: false,

      features: [      features: [

        'BitLocker-Verschlüsselung steuern',        'BitLocker-Verschlüsselung steuern',

        'Recovery-Schlüssel speichern',        'Recovery-Schlüssel speichern',

        'Zentrale Verwaltung',        'Zentrale Verwaltung',

        'Sicherheitsrichtlinien durchsetzen'        'Sicherheitsrichtlinien durchsetzen'

      ]      ]

    },    },

    {    {

      id: 'password-reset',      id: 'password-reset',

      name: 'Password Reset',      name: 'Password Reset',

      description: 'Ändern des AD Kennworts ohne VPN-Tunnel - Ermöglichen Sie AD-Passwort-Änderungen ohne VPN',      description: 'Ändern des AD Kennworts ohne VPN-Tunnel - Ermöglichen Sie AD-Passwort-Änderungen ohne VPN',

      icon: Key,      icon: Key,

      color: 'from-scaleit-purple to-scaleit-black',      color: 'from-scaleit-purple to-scaleit-black',

      comingSoon: false,      comingSoon: false,

      features: [      features: [

        'AD-Passwort ändern ohne VPN',        'AD-Passwort ändern ohne VPN',

        'Self-Service Portal',        'Self-Service Portal',

        'Sichere Authentifizierung',        'Sichere Authentifizierung',

        'Remote-Zugriff Support'        'Remote-Zugriff Support'

      ]      ]

    },    },

    {    {

      id: 'software-assignment',      id: 'software-assignment',

      name: 'Software Assignment',      name: 'Software Assignment',

      description: 'Software bequem zuweisen und nach einem neuen Betriebssystemrollout automatisch wieder installieren',      description: 'Software bequem zuweisen und nach einem neuen Betriebssystemrollout automatisch wieder installieren',

      icon: Download,      icon: Download,

      color: 'from-scaleit-black to-scaleit-gray',      color: 'from-scaleit-black to-scaleit-gray',

      comingSoon: false,      comingSoon: false,

      features: [      features: [

        'Paketierte Software zuweisen',        'Paketierte Software zuweisen',

        'Automatische Reinstallation',        'Automatische Reinstallation',

        'Windows-Rollout Support',        'Windows-Rollout Support',

        'Spezialsoftware Management'        'Spezialsoftware Management'

      ]      ]

    },    },

    {    {

      id: 'o365-license-management',      id: 'o365-license-management',

      name: 'O365 License Management',      name: 'O365 License Management',

      description: 'Verwalten Sie Ihre Microsoft Cloud Lizenzen - Verwalten Sie Microsoft Cloud-Lizenzen direkt aus ACMP',      description: 'Verwalten Sie Ihre Microsoft Cloud Lizenzen - Verwalten Sie Microsoft Cloud-Lizenzen direkt aus ACMP',

      icon: DollarSign,      icon: DollarSign,

      color: 'from-scaleit-red to-scaleit-gray',      color: 'from-scaleit-red to-scaleit-gray',

      comingSoon: false,      comingSoon: false,

      features: [      features: [

        'Microsoft Cloud-Lizenzverwaltung',        'Microsoft Cloud-Lizenzverwaltung',

        'Direkte ACMP-Integration',        'Direkte ACMP-Integration',

        'Lizenzüberwachung',        'Lizenzüberwachung',

        'Kostenoptimierung'        'Kostenoptimierung'

      ]      ]

    },    },

    {    {

      id: 'printer-management',      id: 'printer-management',

      name: 'Printer Management',      name: 'Printer Management',

      description: 'Grafisches Verbinden von Netzwerkdruckern - Verbinden Sie Netzwerkdrucker über grafischen Gebäudeplan',      description: 'Grafisches Verbinden von Netzwerkdruckern - Verbinden Sie Netzwerkdrucker über grafischen Gebäudeplan',

      icon: Printer,      icon: Printer,

      color: 'from-scaleit-purple to-scaleit-red',      color: 'from-scaleit-purple to-scaleit-red',

      comingSoon: false,      comingSoon: false,

      features: [      features: [

        'Grafischer Gebäudeplan',        'Grafischer Gebäudeplan',

        'Netzwerkdrucker-Integration',        'Netzwerkdrucker-Integration',

        'Benutzerfreundliche Oberfläche',        'Benutzerfreundliche Oberfläche',

        'Automatische Treiberinstallation'        'Automatische Treiberinstallation'

      ]      ]

    },    },

    {    {

      id: 'ad-security-group-management',      id: 'ad-security-group-management',

      name: 'AD Security Group Management',      name: 'AD Security Group Management',

      description: 'Zentrale Verwaltung von Active Directory Sicherheitsgruppen über ACMP',      description: 'Zentrale Verwaltung von Active Directory Sicherheitsgruppen über ACMP',

      icon: Shield,      icon: Shield,

      color: 'from-scaleit-gray to-scaleit-red',      color: 'from-scaleit-gray to-scaleit-red',

      comingSoon: false,      comingSoon: false,

      features: [      features: [

        'Sicherheitsgruppen-Verwaltung',        'Sicherheitsgruppen-Verwaltung',

        'Zentrale AD-Integration',        'Zentrale AD-Integration',

        'Rollenbasierte Zugriffskontrolle',        'Rollenbasierte Zugriffskontrolle',

        'Automatisierte Gruppenzuweisungen'        'Automatisierte Gruppenzuweisungen'

      ]      ]

    },    },

    {    {

      id: 'deploy-outlook-signatur',      id: 'deploy-outlook-signatur',

      name: 'Deploy Outlook Signatur',      name: 'Deploy Outlook Signatur',

      description: 'Zentrale Verteilung von Outlook Signaturen - Verteilen Sie Outlook-Signaturen mit AD-Daten zentral',      description: 'Zentrale Verteilung von Outlook Signaturen - Verteilen Sie Outlook-Signaturen mit AD-Daten zentral',

      icon: Mail,      icon: Mail,

      color: 'from-scaleit-red to-scaleit-black',      color: 'from-scaleit-red to-scaleit-black',

      comingSoon: false,      comingSoon: false,

      features: [      features: [

        'Zentrale Signaturverteilung',        'Zentrale Signaturverteilung',

        'Active Directory Datenintegration',        'Active Directory Datenintegration',

        'Automatische Outlook-Konfiguration',        'Automatische Outlook-Konfiguration',

        'Corporate Identity Management'        'Corporate Identity Management'

      ]      ]

    },    },

    {    {

      id: 'first-step-wizard',      id: 'first-step-wizard',

      name: 'First Step Wizard',      name: 'First Step Wizard',

      description: 'Vorbereitung Ihrer ACMP Umgebung - Bereiten Sie Ihre ACMP-Umgebung für Client Commands vor',      description: 'Vorbereitung Ihrer ACMP Umgebung - Bereiten Sie Ihre ACMP-Umgebung für Client Commands vor',

      icon: Zap,      icon: Zap,

      color: 'from-scaleit-black to-scaleit-purple',      color: 'from-scaleit-black to-scaleit-purple',

      comingSoon: false,      comingSoon: false,

      features: [      features: [

        'ACMP-Umgebung vorbereiten',        'ACMP-Umgebung vorbereiten',

        'Client Commands Setup',        'Client Commands Setup',

        'Konfigurationsassistent',        'Konfigurationsassistent',

        'Systeminitialisierung'        'Systeminitialisierung'

      ]      ]

    },    },

    {    {

      id: 'next-free-computername',      id: 'next-free-computername',

      name: 'Next Free Computername',      name: 'Next Free Computername',

      description: 'ACMP schlägt automatisch den nächsten Computernamen vor - Automatische Vorschläge für verfügbare Computernamen',      description: 'ACMP schlägt automatisch den nächsten Computernamen vor - Automatische Vorschläge für verfügbare Computernamen',

      icon: Computer,      icon: Computer,

      color: 'from-scaleit-purple to-scaleit-gray',      color: 'from-scaleit-purple to-scaleit-gray',

      comingSoon: false,      comingSoon: false,

      features: [      features: [

        'Automatische Namensvorschläge',        'Automatische Namensvorschläge',

        'Verfügbarkeitsprüfung',        'Verfügbarkeitsprüfung',

        'Naming Convention Support',        'Naming Convention Support',

        'Zentrale Computerverwaltung'        'Zentrale Computerverwaltung'

      ]      ]

    },    },

    {    {

      id: 'on-und-offboarding-management',      id: 'on-und-offboarding-management',

      name: 'On- und Offboarding Management',      name: 'On- und Offboarding Management',

      description: 'Formular für Ein- und Austritt von Mitarbeitern - Verwalten Sie Mitarbeiter-Onboarding und Offboarding mit Assets',      description: 'Formular für Ein- und Austritt von Mitarbeitern - Verwalten Sie Mitarbeiter-Onboarding und Offboarding mit Assets',

      icon: UserPlus,      icon: UserPlus,

      color: 'from-scaleit-red to-scaleit-purple',      color: 'from-scaleit-red to-scaleit-purple',

      comingSoon: false,      comingSoon: false,

      features: [      features: [

        'Mitarbeiter Ein-/Austrittsprozesse',        'Mitarbeiter Ein-/Austrittsprozesse',

        'Asset-Management Integration',        'Asset-Management Integration',

        'Automatisierte Workflows',        'Automatisierte Workflows',

        'Compliance-konforme Abläufe'        'Compliance-konforme Abläufe'

      ]      ]

    },    },

    {    {

      id: 'rename-computer',      id: 'rename-computer',

      name: 'Rename Computer',      name: 'Rename Computer',

      description: 'Bequemes Umbenennen eines Computernamens aus der ACMP-Console heraus',      description: 'Bequemes Umbenennen eines Computernamens aus der ACMP-Console heraus',

      icon: Computer,      icon: Computer,

      color: 'from-scaleit-gray to-scaleit-purple',      color: 'from-scaleit-gray to-scaleit-purple',

      comingSoon: false,      comingSoon: false,

      features: [      features: [

        'Remote Computer umbenennen',        'Remote Computer umbenennen',

        'ACMP Console Integration',        'ACMP Console Integration',

        'Einfache Rechtsklik-Funktion',        'Einfache Rechtsklik-Funktion',

        'Ohne Fernwartungssitzung'        'Ohne Fernwartungssitzung'

      ]      ]

    },    },

    {    {

      id: 'reset-ad-user-password-console',      id: 'reset-ad-user-password-console',

      name: 'Reset AD User Password (Console)',      name: 'Reset AD User Password (Console)',

      description: 'Zurücksetzen von AD-Benutzerkennwörtern aus der ACMP Console heraus',      description: 'Zurücksetzen von AD-Benutzerkennwörtern aus der ACMP Console heraus',

      icon: Lock,      icon: Lock,

      color: 'from-scaleit-purple to-scaleit-red',      color: 'from-scaleit-purple to-scaleit-red',

      comingSoon: false,      comingSoon: false,

      features: [      features: [

        'AD-Kennwort zurücksetzen',        'AD-Kennwort zurücksetzen',

        'ACMP Console Integration',        'ACMP Console Integration',

        'Administrator-Funktionen',        'Administrator-Funktionen',

        'Zentrale Benutzerverwaltung'        'Zentrale Benutzerverwaltung'

      ]      ]

    },    },

    {    {

      id: 'set-auto-login',      id: 'set-auto-login',

      name: 'Set Auto Login',      name: 'Set Auto Login',

      description: 'Remote Einrichtung eines Auto Logins an einem Client',      description: 'Remote Einrichtung eines Auto Logins an einem Client',

      icon: LogIn,      icon: LogIn,

      color: 'from-scaleit-red to-scaleit-gray',      color: 'from-scaleit-red to-scaleit-gray',

      comingSoon: false,      comingSoon: false,

      features: [      features: [

        'Remote Auto-Login einrichten',        'Remote Auto-Login einrichten',

        'Für Terminals geeignet',        'Für Terminals geeignet',

        'Produktionsumgebungen',        'Produktionsumgebungen',

        'Maschinensteuerungen'        'Maschinensteuerungen'

      ]      ]

    },    },

    {    {

      id: 'software-assignment-transfer',      id: 'software-assignment-transfer',

      name: 'Software Assignment Transfer',      name: 'Software Assignment Transfer',

      description: 'Zugewiesene Software eines alten Clients auf einen neuen übertragen',      description: 'Zugewiesene Software eines alten Clients auf einen neuen übertragen',

      icon: ArrowUpDown,      icon: ArrowUpDown,

      color: 'from-scaleit-gray to-scaleit-red',      color: 'from-scaleit-gray to-scaleit-red',

      comingSoon: false,      comingSoon: false,

      features: [      features: [

        'Software-Zuweisung übertragen',        'Software-Zuweisung übertragen',

        'Hardware-Austausch Support',        'Hardware-Austausch Support',

        'Massenrollout-Unterstützung',        'Massenrollout-Unterstützung',

        'Spezialsoftware-Migration'        'Spezialsoftware-Migration'

      ]      ]

    },    },

    {    {

      id: 'software-uninstaller',      id: 'software-uninstaller',

      name: 'Software Uninstaller',      name: 'Software Uninstaller',

      description: 'Deinstallation gefundener Software direkt aus der ACMP Console',      description: 'Deinstallation gefundener Software direkt aus der ACMP Console',

      icon: Trash2,      icon: Trash2,

      color: 'from-scaleit-red to-scaleit-black',      color: 'from-scaleit-red to-scaleit-black',

      comingSoon: false,      comingSoon: false,

      features: [      features: [

        'Software direkt deinstallieren',        'Software direkt deinstallieren',

        'ACMP Console Integration',        'ACMP Console Integration',

        'Deinstallationsstring-Support',        'Deinstallationsstring-Support',

        'Bulk-Deinstallation'        'Bulk-Deinstallation'

      ]      ]

    },    },

    {    {

      id: 'ssl-certificate-management',      id: 'ssl-certificate-management',

      name: 'SSL Certificate Management',      name: 'SSL Certificate Management',

      description: 'Verwaltung und Austausch von SSL-Zertifikaten auf Zielsystemen',      description: 'Verwaltung und Austausch von SSL-Zertifikaten auf Zielsystemen',

      icon: CertificateIcon,      icon: Shield,

      color: 'from-scaleit-black to-scaleit-purple',      color: 'from-scaleit-black to-scaleit-purple',

      comingSoon: false,      comingSoon: false,

      features: [      features: [

        'SSL-Zertifikat Management',        'SSL-Zertifikat Management',

        'Wildcard-Zertifikat Support',        'Wildcard-Zertifikat Support',

        'Automatische Installation',        'Automatische Installation',

        'Asset Management Integration'        'Asset Management Integration'

      ]      ]

    },    },

    {    {

      id: 'teamviewer-remote-control',      id: 'teamviewer-remote-control',

      name: 'TeamViewer Remote Control',      name: 'TeamViewer Remote Control',

      description: 'TeamViewer Fernwartung ab sofort ganz einfach aus der ACMP Console heraus starten',      description: 'TeamViewer Fernwartung ab sofort ganz einfach aus der ACMP Console heraus starten',

      icon: Headphones,      icon: Headphones,

      color: 'from-scaleit-purple to-scaleit-gray',      color: 'from-scaleit-purple to-scaleit-gray',

      comingSoon: false,      comingSoon: false,

      features: [      features: [

        'TeamViewer Integration',        'TeamViewer Integration',

        'ACMP Console Fernwartung',        'ACMP Console Fernwartung',

        'Direkter Client-Zugriff',        'Direkter Client-Zugriff',

        'Helpdesk Integration'        'Helpdesk Integration'

      ]      ]

    },    },

    {    {

      id: 'windows-feature-management',      id: 'windows-feature-management',

      name: 'Windows Feature Management',      name: 'Windows Feature Management',

      description: 'Installation von Windows Features auf gewünschten Clients aus der ACMP Console',      description: 'Installation von Windows Features auf gewünschten Clients aus der ACMP Console',

      icon: Monitor,      icon: Monitor,

      color: 'from-scaleit-red to-scaleit-purple',      color: 'from-scaleit-red to-scaleit-purple',

      comingSoon: false,      comingSoon: false,

      features: [      features: [

        'Windows Features installieren',        'Windows Features installieren',

        'Bulk-Installation Support',        'Bulk-Installation Support',

        'ACMP Console Integration',        'ACMP Console Integration',

        'Abfrage-basierte Auswahl'        'Abfrage-basierte Auswahl'

      ]      ]

    },    },

    {    {

      id: 'windows-font-management',      id: 'windows-font-management',

      name: 'Windows Font Management',      name: 'Windows Font Management',

      description: 'Installation individueller Windows Schriftarten auf ausgewählten Clients',      description: 'Installation individueller Windows Schriftarten auf ausgewählten Clients',

      icon: Type,      icon: Type,

      color: 'from-scaleit-gray to-scaleit-purple',      color: 'from-scaleit-gray to-scaleit-purple',

      comingSoon: false,      comingSoon: false,

      features: [      features: [

        'Windows Schriftarten installieren',        'Windows Schriftarten installieren',

        'Benutzerfreundliche Oberfläche',        'Benutzerfreundliche Oberfläche',

        'Client-spezifische Installation',        'Client-spezifische Installation',

        'Corporate Identity Support'        'Corporate Identity Support'

      ]      ]

    }    }

  ];  ];



  const handleModuleClick = (moduleId: string) => {  return (

    setActiveModule(activeModule === moduleId ? '' : moduleId);    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">

  };      <Navigation />



  return (      {/* Hero Section */}

    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">      <section className="pt-32 pb-20">

      <Navigation />        <div className="max-w-7xl mx-auto px-4">

          <motion.div

      {/* Hero Section */}            initial={{ opacity: 0, y: 20 }}

      <section className="pt-32 pb-20">            animate={{ opacity: 1, y: 0 }}

        <div className="max-w-7xl mx-auto px-4 text-center">            transition={{ duration: 0.8 }}

          <motion.div            className="text-center"

            initial={{ opacity: 0, y: 20 }}          >

            animate={{ opacity: 1, y: 0 }}            <motion.div

            transition={{ duration: 0.8 }}              initial={{ scale: 0 }}

          >              animate={{ scale: 1 }}

            <h1 className="text-6xl font-bold bg-gradient-to-r from-scaleit-red to-scaleit-purple bg-clip-text text-transparent mb-8">              transition={{ duration: 0.8, delay: 0.2 }}

              ACMP Individual Edition              className="inline-flex items-center bg-gradient-to-r from-scaleit-red to-scaleit-purple text-white px-8 py-4 rounded-full shadow-2xl mb-8"

            </h1>            >

            <p className="text-2xl text-scaleit-gray mb-8 max-w-4xl mx-auto">              <Settings className="w-8 h-8 mr-4" />

              Spezialisierte Client Commands für individuelle Anforderungen mit {modules.filter(m => !m.comingSoon).length} professionellen Modulen              <span className="text-xl font-bold">ACMP Individual Edition</span>

            </p>            </motion.div>

            <div className="flex items-center justify-center space-x-8 mb-16">

              <div className="text-center">            <motion.h1

                <div className="text-4xl font-bold text-scaleit-red">{modules.filter(m => !m.comingSoon).length}</div>              initial={{ opacity: 0, y: 20 }}

                <div className="text-scaleit-gray">Verfügbare Module</div>              animate={{ opacity: 1, y: 0 }}

              </div>              transition={{ duration: 0.8, delay: 0.4 }}

              <div className="text-center">              className="text-5xl md:text-6xl font-bold text-scaleit-black mb-8"

                <div className="text-4xl font-bold text-scaleit-purple">20</div>            >

                <div className="text-scaleit-gray">Gesamtmodule</div>              Spezialisierte

              </div>              <span className="block bg-gradient-to-r from-scaleit-red to-scaleit-purple bg-clip-text text-transparent">

              <div className="text-center">                Client Commands

                <div className="text-4xl font-bold text-scaleit-black">100%</div>              </span>

                <div className="text-scaleit-gray">Individual</div>            </motion.h1>

              </div>

            </div>            <motion.p

          </motion.div>              initial={{ opacity: 0, y: 20 }}

        </div>              animate={{ opacity: 1, y: 0 }}

      </section>              transition={{ duration: 0.8, delay: 0.6 }}

              className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"

      {/* Modules Section */}            >

      <section className="pb-20">              Individuelle ACMP Module für spezifische Anforderungen.

        <div className="max-w-7xl mx-auto px-4">              Jedes Modul ist speziell auf Ihre Bedürfnisse zugeschnitten.

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">            </motion.p>

            {/* Main Content - Modules */}

            <div className="lg:col-span-3">            <motion.div

              <div className="space-y-6">              initial={{ opacity: 0, y: 20 }}

                {/* Render modules in rows of 3 */}              animate={{ opacity: 1, y: 0 }}

                {Array.from({ length: Math.ceil(modules.filter(m => !m.comingSoon).length / 3) }, (_, rowIndex) => {              transition={{ duration: 0.8, delay: 0.8 }}

                  const availableModules = modules.filter(m => !m.comingSoon);              className="flex flex-col sm:flex-row gap-6 justify-center"

                  const rowModules = availableModules.slice(rowIndex * 3, (rowIndex + 1) * 3);            >

                  const activeModuleInRow = rowModules.find(module => module.id === activeModule);              <Link

                href="/contact"

                  return (                className="inline-flex items-center bg-gradient-to-r from-scaleit-red to-scaleit-purple text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"

                <div key={rowIndex} className="space-y-6">              >

                  {/* Row of modules */}                <Users className="w-5 h-5 mr-3" />

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">                Beratungsgespräch

                    {rowModules.map((module, index) => {              </Link>

                      const IconComponent = module.icon;              <Link

                      const isActive = activeModule === module.id;                href="/acmp"

                      const globalIndex = rowIndex * 3 + index;                className="inline-flex items-center border-2 border-scaleit-red text-scaleit-red px-8 py-4 rounded-lg font-semibold hover:bg-scaleit-red hover:text-white transition-all duration-300"

              >

                      return (                <Database className="w-5 h-5 mr-3" />

                        <motion.div                ACMP Übersicht

                          key={module.id}              </Link>

                          initial={{ opacity: 0, y: 20 }}            </motion.div>

                          whileInView={{ opacity: 1, y: 0 }}          </motion.div>

                          transition={{ duration: 0.5, delay: globalIndex * 0.1 }}        </div>

                          onClick={() => handleModuleClick(module.id)}      </section>

                          className={`relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-105 cursor-pointer bg-gradient-to-r ${module.color} ${

                            isActive      {/* Stats Section */}

                              ? 'ring-4 ring-scaleit-red shadow-2xl'      <section className="pb-16">

                              : 'hover:shadow-xl'        <div className="max-w-7xl mx-auto px-4">

                          }`}          <motion.div

                        >            initial={{ opacity: 0, y: 30 }}

                          <div className="text-white">            whileInView={{ opacity: 1, y: 0 }}

                            <IconComponent className="w-12 h-12 mx-auto mb-4 text-white" />            transition={{ duration: 0.8 }}

                            <h3 className="text-xl font-bold mb-3">{module.name}</h3>            className="grid grid-cols-2 md:grid-cols-4 gap-8"

                            <p className="text-sm opacity-90 text-white mb-4">          >

                              {module.description}            <div className="text-center">

                            </p>              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-scaleit-red to-scaleit-purple text-white rounded-full mb-4">

                            <div className="absolute top-2 right-2 bg-green-500/90 text-white text-xs px-2 py-1 rounded-full">                <Package className="w-8 h-8" />

                              Verfügbar              </div>

                            </div>              <div className="text-3xl font-bold text-gray-900 mb-2">20+</div>

                          </div>              <div className="text-gray-600">Module</div>

                        </motion.div>            </div>

                      );            <div className="text-center">

                    })}              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-scaleit-purple to-scaleit-black text-white rounded-full mb-4">

                  </div>                <Zap className="w-8 h-8" />

              </div>

                  {/* Module Details for this row */}              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>

                  {activeModuleInRow && (              <div className="text-gray-600">Individual</div>

                    <AnimatePresence>            </div>

                      <motion.div            <div className="text-center">

                        initial={{ opacity: 0, height: 0, y: -20 }}              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-scaleit-black to-scaleit-gray text-white rounded-full mb-4">

                        animate={{ opacity: 1, height: 'auto', y: 0 }}                <Shield className="w-8 h-8" />

                        exit={{ opacity: 0, height: 0, y: -20 }}              </div>

                        transition={{ duration: 0.5 }}              <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>

                        className="overflow-hidden"              <div className="text-gray-600">Support</div>

                      >            </div>

                        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">            <div className="text-center">

                          <div className="flex items-center mb-6">              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-scaleit-gray to-scaleit-red text-white rounded-full mb-4">

                            <div className={`p-4 rounded-2xl bg-gradient-to-r ${activeModuleInRow.color} mr-6`}>                <Users className="w-8 h-8" />

                              {React.createElement(activeModuleInRow.icon, { className: "w-8 h-8 text-white" })}              </div>

                            </div>              <div className="text-3xl font-bold text-gray-900 mb-2"></div>

                            <div className="flex-grow">              <div className="text-gray-600">Skalierbar</div>

                              <h3 className="text-3xl font-bold text-scaleit-black mb-2">{activeModuleInRow.name}</h3>            </div>

                              <p className="text-lg text-scaleit-gray">{activeModuleInRow.description}</p>          </motion.div>

                            </div>        </div>

                            <button      </section>

                              onClick={() => setActiveModule('')}

                              className="ml-4 p-2 rounded-full hover:bg-gray-100 transition-colors"      {/* Modules Grid */}

                            >      <section className="pb-20">

                              <X className="w-6 h-6 text-scaleit-gray" />        <div className="max-w-7xl mx-auto px-4">

                            </button>          <motion.div

                          </div>            initial={{ opacity: 0, y: 20 }}

            whileInView={{ opacity: 1, y: 0 }}

                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">            transition={{ duration: 0.8 }}

                            {/* Features */}            className="text-center mb-16"

                            <div>          >

                              <h4 className="text-xl font-semibold text-scaleit-black mb-4 flex items-center">            <h2 className="text-4xl font-bold text-gray-900 mb-6">

                                <CheckCircle className="w-5 h-5 text-scaleit-red mr-2" />              Verfügbare Module

                                Features            </h2>

                              </h4>            <p className="text-xl text-gray-600 max-w-3xl mx-auto">

                              <ul className="space-y-2">              Entdecken Sie unsere spezialisierten ACMP Individual Module.

                                {activeModuleInRow.features.map((feature, idx) => (              Jedes Modul kann einzeln aktiviert und konfiguriert werden.

                                  <li key={idx} className="flex items-center text-scaleit-gray">            </p>

                                    <CheckCircle className="w-4 h-4 text-scaleit-red mr-3 flex-shrink-0" />          </motion.div>

                                    {feature}

                                  </li>          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                                ))}            {modules.map((module, index) => {

                              </ul>              const IconComponent = module.icon;

                            </div>              return (

                <motion.div

                            {/* Module Visualization */}                  key={module.id}

                            <div>                  initial={{ opacity: 0, y: 20 }}

                              <h4 className="text-xl font-semibold text-scaleit-black mb-4 flex items-center">                  whileInView={{ opacity: 1, y: 0 }}

                                <Eye className="w-5 h-5 text-scaleit-red mr-2" />                  transition={{ duration: 0.6, delay: index * 0.1 }}

                                Funktionsweise                  className="group"

                              </h4>                >

                              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 min-h-[200px] flex items-center justify-center">                  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 overflow-hidden">

                                {/* Individual Module Graphics */}                    {/* Header */}

                                {activeModuleInRow.id === 'ad-logon-timestamp' && (                    <div className={`bg-gradient-to-r ${module.color} p-6 text-white`}>

                                  <div className="text-center space-y-4">                      <div className="flex items-center justify-between mb-4">

                                    {/* AD Logon Timestamp Display */}                        <IconComponent className="w-12 h-12" />

                                    <div className="grid grid-cols-2 gap-4">                        <div className="text-right">

                                      <div className="p-3 bg-blue-100 rounded-lg">                          <div className="text-sm font-medium opacity-90">ACMP Individual</div>

                                        <UserPlus className="w-6 h-6 text-blue-600 mx-auto mb-1" />                          <div className="text-xs opacity-75">Modul</div>

                                        <div className="text-xs text-blue-700 font-medium">Last Login</div>                        </div>

                                        <div className="text-xs text-blue-600">2024-01-15 09:23</div>                      </div>

                                      </div>                      <h3 className="text-xl font-bold mb-2">{module.name}</h3>

                                      <div className="p-3 bg-green-100 rounded-lg">                      <p className="text-white/90 text-sm leading-relaxed">{module.description}</p>

                                        <Clock className="w-6 h-6 text-green-600 mx-auto mb-1" />                    </div>

                                        <div className="text-xs text-green-700 font-medium">Status</div>

                                        <div className="text-xs text-green-600">Active</div>                    {/* Content */}

                                      </div>                    <div className="p-6">

                                    </div>                      <div className="mb-6">

                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Funktionen</h4>

                                    {/* Key Features */}                        <ul className="space-y-2">

                                    <div className="flex justify-center space-x-4 text-xs">                          {module.features.map((feature, featureIndex) => (

                                      <div className="flex items-center text-blue-600">                            <li key={featureIndex} className="flex items-start text-gray-700">

                                        <Shield className="w-3 h-3 mr-1" />                              <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />

                                        Security                              <span className="text-sm">{feature}</span>

                                      </div>                            </li>

                                      <div className="flex items-center text-green-600">                          ))}

                                        <Activity className="w-3 h-3 mr-1" />                        </ul>

                                        Monitoring                      </div>

                                      </div>

                                      <div className="flex items-center text-purple-600">                      {/* Action Button */}

                                        <Target className="w-3 h-3 mr-1" />                      <Link

                                        Compliance                        href={`/acmp-individual/${module.id}`}

                                      </div>                        className="w-full inline-flex items-center justify-center bg-gradient-to-r from-scaleit-red to-scaleit-purple text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"

                                    </div>                      >

                        <span>Details ansehen</span>

                                    <p className="text-xs text-scaleit-gray font-medium">Erweiterte AD-Benutzerüberwachung</p>                        <ArrowRight className="w-4 h-4 ml-2" />

                                  </div>                      </Link>

                                )}                    </div>

                  </div>

                                {activeModuleInRow.id === 'bitlocker-management' && (                </motion.div>

                                  <div className="text-center space-y-6">              );

                                    {/* BitLocker Management Interface */}            })}

                                    <div className="space-y-4">          </div>

                                      <div className="bg-white rounded-lg p-4 shadow-sm">        </div>

                                        <div className="text-sm font-bold text-gray-700 mb-2">BitLocker Status</div>      </section>

                                        <div className="grid grid-cols-2 gap-4 text-xs">

                                          <div className="text-center">      {/* CTA Section */}

                                            <div className="text-lg font-bold text-green-600">85%</div>      <section className="py-20 bg-gradient-to-r from-scaleit-red to-scaleit-purple">

                                            <div className="text-gray-500">Verschlüsselt</div>        <div className="max-w-4xl mx-auto px-4 text-center">

                                          </div>          <motion.div

                                          <div className="text-center">            initial={{ opacity: 0, y: 20 }}

                                            <div className="text-lg font-bold text-blue-600">15%</div>            whileInView={{ opacity: 1, y: 0 }}

                                            <div className="text-gray-500">Ausstehend</div>            transition={{ duration: 0.8 }}

                                          </div>          >

                                        </div>            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">

                                      </div>              Ihr individuelles

              <span className="block">ACMP Setup</span>

                                      <div className="bg-white rounded-lg p-4 shadow-sm">            </h2>

                                        <div className="text-sm font-bold text-gray-700 mb-2">Recovery Keys</div>            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">

                                        <div className="flex items-center justify-center">              Wählen Sie die Module aus, die Sie wirklich brauchen.

                                          <Lock className="w-8 h-8 text-green-500 mr-2" />              Keine unnötigen Features, nur was Sie tatsächlich verwenden.

                                          <span className="text-sm text-green-700">Gesichert</span>            </p>

                                        </div>            <div className="flex flex-col sm:flex-row gap-6 justify-center">

                                      </div>              <Link

                                    </div>                href="/contact"

                className="inline-flex items-center bg-white text-scaleit-purple px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50"

                                    <p className="text-sm text-scaleit-gray font-medium">Zentrale BitLocker-Verwaltung mit Recovery-Management</p>              >

                                  </div>                <Users className="w-5 h-5 mr-3" />

                                )}                Individuelle Beratung

              </Link>

                                {activeModuleInRow.id === 'password-reset' && (              <Link

                                  <div className="text-center space-y-6">                href="/acmp-standard"

                                    {/* Password Reset Process */}                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-scaleit-purple transition-all duration-300"

                                    <div className="space-y-4">              >

                                      <div className="flex items-center justify-center space-x-3">                <Package className="w-5 h-5 mr-3" />

                                        <div className="p-3 bg-blue-500 rounded-lg shadow-lg">                Standard Edition

                                          <UserPlus className="w-6 h-6 text-white" />              </Link>

                                        </div>            </div>

                                        <ArrowRight className="w-6 h-6 text-scaleit-gray" />          </motion.div>

                                        <div className="p-3 bg-green-500 rounded-lg shadow-lg">        </div>

                                          <Key className="w-6 h-6 text-white" />      </section>

                                        </div>

                                        <ArrowRight className="w-6 h-6 text-scaleit-gray" />      <Footer />

                                        <div className="p-3 bg-purple-500 rounded-lg shadow-lg">    </main>

                                          <CheckCircle className="w-6 h-6 text-white" />  );

                                        </div>}

                                      </div>

                                      <div className="bg-white rounded-lg p-4 shadow-sm">
                                        <div className="text-sm font-bold text-gray-700 mb-2">Self-Service Portal</div>
                                        <div className="grid grid-cols-2 gap-2 text-xs">
                                          <div className="flex items-center text-blue-600">
                                            <CheckSquare className="w-3 h-3 mr-1" />
                                            Ohne VPN
                                          </div>
                                          <div className="flex items-center text-green-600">
                                            <CheckSquare className="w-3 h-3 mr-1" />
                                            Sicher
                                          </div>
                                          <div className="flex items-center text-purple-600">
                                            <CheckSquare className="w-3 h-3 mr-1" />
                                            Remote
                                          </div>
                                          <div className="flex items-center text-orange-600">
                                            <CheckSquare className="w-3 h-3 mr-1" />
                                            24/7
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <p className="text-sm text-scaleit-gray font-medium">Sicheres AD-Passwort-Reset ohne VPN-Tunnel</p>
                                  </div>
                                )}

                                {activeModuleInRow.id === 'software-assignment' && (
                                  <div className="text-center space-y-6">
                                    {/* Software Assignment Process */}
                                    <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl p-4">
                                      <div className="text-sm font-bold text-purple-700 mb-3">Software Assignment</div>

                                      {/* Assignment Tasks */}
                                      <div className="space-y-3">
                                        <div className="bg-white rounded-lg p-3 shadow-sm">
                                          <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs font-medium text-gray-700">Office 365 ProPlus</span>
                                            <div className="flex items-center text-green-600 text-xs">
                                              <CheckCircle className="w-3 h-3 mr-1" />
                                              Zugewiesen
                                            </div>
                                          </div>
                                          <div className="w-full bg-gray-200 rounded-full h-1.5">
                                            <div className="bg-green-500 h-1.5 rounded-full animate-pulse" style={{width: '100%'}}></div>
                                          </div>
                                        </div>

                                        <div className="bg-white rounded-lg p-3 shadow-sm">
                                          <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs font-medium text-gray-700">Adobe Creative Suite</span>
                                            <div className="flex items-center text-blue-600 text-xs">
                                              <Clock className="w-3 h-3 mr-1" />
                                              Installiert
                                            </div>
                                          </div>
                                          <div className="w-full bg-gray-200 rounded-full h-1.5">
                                            <div className="bg-blue-500 h-1.5 rounded-full" style={{width: '78%'}}></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <p className="text-sm text-scaleit-gray font-medium">Automatische Software-Zuweisung und Reinstallation</p>
                                  </div>
                                )}

                                {activeModuleInRow.id === 'o365-license-management' && (
                                  <div className="text-center space-y-6">
                                    {/* O365 License Management Dashboard */}
                                    <div className="space-y-4">
                                      <div className="bg-white rounded-lg p-4 shadow-sm">
                                        <div className="text-sm font-bold text-gray-700 mb-2">Lizenz-Übersicht</div>
                                        <div className="grid grid-cols-2 gap-4 text-xs">
                                          <div className="text-center">
                                            <div className="text-lg font-bold text-green-600">245</div>
                                            <div className="text-gray-500">Aktive Lizenzen</div>
                                          </div>
                                          <div className="text-center">
                                            <div className="text-lg font-bold text-blue-600">12</div>
                                            <div className="text-gray-500">Verfügbar</div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="bg-white rounded-lg p-4 shadow-sm">
                                        <div className="text-sm font-bold text-gray-700 mb-2">Compliance</div>
                                        <div className="flex items-center justify-center">
                                          <CheckCircle className="w-8 h-8 text-green-500 mr-2" />
                                          <span className="text-sm text-green-700">Audit-sicher</span>
                                        </div>
                                      </div>
                                    </div>

                                    <p className="text-sm text-scaleit-gray font-medium">Microsoft 365 Lizenzverwaltung direkt aus ACMP</p>
                                  </div>
                                )}

                                {activeModuleInRow.id === 'printer-management' && (
                                  <div className="text-center space-y-6">
                                    {/* Printer Management Interface */}
                                    <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-xl p-4">
                                      <div className="text-sm font-bold text-cyan-700 mb-3">Netzwerkdrucker-Verwaltung</div>

                                      {/* Building Map */}
                                      <div className="space-y-4">
                                        <div className="bg-white rounded-lg p-3 shadow-sm">
                                          <div className="text-sm font-bold text-gray-700 mb-2">Gebäudeplan</div>
                                          <div className="grid grid-cols-3 gap-2">
                                            <div className="p-2 bg-green-100 rounded text-center">
                                              <Printer className="w-4 h-4 text-green-600 mx-auto mb-1" />
                                              <div className="text-xs text-green-700">Erdgeschoss</div>
                                            </div>
                                            <div className="p-2 bg-blue-100 rounded text-center">
                                              <Printer className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                                              <div className="text-xs text-blue-700">1. Stock</div>
                                            </div>
                                            <div className="p-2 bg-purple-100 rounded text-center">
                                              <Printer className="w-4 h-4 text-purple-600 mx-auto mb-1" />
                                              <div className="text-xs text-purple-700">2. Stock</div>
                                            </div>
                                          </div>
                                        </div>

                                        {/* Printer Status */}
                                        <div className="bg-white rounded-lg p-3 shadow-sm">
                                          <div className="text-sm font-bold text-gray-700 mb-2">Drucker-Status</div>
                                          <div className="space-y-2 text-xs">
                                            <div className="flex items-center justify-between">
                                              <span>HP LaserJet Pro</span>
                                              <span className="text-green-600">Online</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                              <span>Epson Workforce</span>
                                              <span className="text-yellow-600">Wartung</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <p className="text-sm text-scaleit-gray font-medium">Grafische Netzwerkdrucker-Verwaltung</p>
                                  </div>
                                )}

                                {activeModuleInRow.id === 'ssl-certificate-management' && (
                                  <div className="text-center space-y-6">
                                    {/* SSL Certificate Management */}
                                    <div className="space-y-4">
                                      <div className="bg-white rounded-lg p-4 shadow-sm">
                                        <div className="text-sm font-bold text-gray-700 mb-2">Zertifikat-Status</div>
                                        <div className="grid grid-cols-2 gap-4 text-xs">
                                          <div className="text-center">
                                            <div className="text-lg font-bold text-green-600">23</div>
                                            <div className="text-gray-500">Aktiv</div>
                                          </div>
                                          <div className="text-center">
                                            <div className="text-lg font-bold text-orange-600">3</div>
                                            <div className="text-gray-500">Läuft ab</div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="bg-white rounded-lg p-4 shadow-sm">
                                        <div className="text-sm font-bold text-gray-700 mb-2">Wildcard Support</div>
                                        <div className="flex items-center justify-center">
                                          <Shield className="w-8 h-8 text-green-500 mr-2" />
                                          <span className="text-sm text-green-700">Unterstützt</span>
                                        </div>
                                      </div>
                                    </div>

                                    <p className="text-sm text-scaleit-gray font-medium">Automatisches SSL-Zertifikat-Management</p>
                                  </div>
                                )}

                                {/* Default visualization for other modules */}
                                {!['ad-logon-timestamp', 'bitlocker-management', 'password-reset', 'software-assignment', 'o365-license-management', 'printer-management', 'ssl-certificate-management'].includes(activeModuleInRow.id) && (
                                  <div className="text-center space-y-4">
                                    <div className={`p-6 rounded-full bg-gradient-to-r ${activeModuleInRow.color} shadow-2xl`}>
                                      {React.createElement(activeModuleInRow.icon, { className: "w-12 h-12 text-white" })}
                                    </div>
                                    <p className="text-sm text-scaleit-gray font-medium">Spezialisiertes ACMP Individual Modul</p>
                                    <p className="text-xs text-scaleit-gray">Für individuelle Anforderungen optimiert</p>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-gray-200">
                            <Link
                              href={`/acmp-individual/${activeModuleInRow.id}`}
                              className="flex-1 inline-flex items-center justify-center bg-gradient-to-r from-scaleit-red to-scaleit-purple text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                              <Eye className="w-5 h-5 mr-3" />
                              Details ansehen
                            </Link>
                            <Link
                              href="/contact"
                              className="flex-1 inline-flex items-center justify-center border-2 border-scaleit-red text-scaleit-red px-6 py-3 rounded-lg font-semibold hover:bg-scaleit-red hover:text-white transition-all duration-300"
                            >
                              <Users className="w-5 h-5 mr-3" />
                              Beratung anfordern
                            </Link>
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
                href="/acmp"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-scaleit-purple transition-all duration-300"
              >
                <Package className="w-5 h-5 mr-3" />
                ACMP Übersicht
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}