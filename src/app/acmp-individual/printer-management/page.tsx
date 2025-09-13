'use client';

import React from 'react';
import ModuleLayout from '../../../components/ModuleLayout';
import { Clock, Computer, Key, HardDrive, Mail, Zap, FileText, UserPlus, Lock, Printer, Network, Monitor, ArrowUpDown, LogIn, Download, Trash2, Shield, Headphones, DollarSign, Type } from 'lucide-react';

// ACMP Individual modules for sidebar
const acmpIndividualModules = [
  { id: 'ad-logon-timestamp', title: 'AD Last Logon Timestamp', url: 'ad-logon-timestamp', icon: Clock, category: 'Admin Tools', available: true },
  { id: 'ad-security-group-management', title: 'AD Security Group Management', url: 'ad-security-group-management', icon: Shield, category: 'Admin Tools', available: true },
  { id: 'bitlocker-management', title: 'Bitlocker Management', url: 'bitlocker-management', icon: HardDrive, category: 'Admin Tools', available: true },
  { id: 'deploy-outlook-signatur', title: 'Deploy Outlook Signatur', url: 'deploy-outlook-signatur', icon: Mail, category: 'Corporate Identity', available: true },
  { id: 'first-step-wizard', title: 'First Step Wizard', url: 'first-step-wizard', icon: Zap, category: 'Admin Tools', available: true },
  { id: 'next-free-computername', title: 'Next Free Computername', url: 'next-free-computername', icon: Computer, category: 'Admin Tools', available: true },
  { id: 'o365-license-management', title: 'O365 License Management', url: 'o365-license-management', icon: DollarSign, category: 'Admin Tools', available: true },
  { id: 'on-und-offboarding-management', title: 'On- und Offboarding Management', url: 'on-und-offboarding-management', icon: UserPlus, category: 'Workflows', available: true },
  { id: 'password-reset', title: 'Password Reset', url: 'password-reset', icon: Key, category: 'User Self-Service', available: true },
  { id: 'printer-management', title: 'Printer Management', url: 'printer-management', icon: Printer, category: 'User Self-Service', available: true },
  { id: 'rename-computer', title: 'Rename Computer', url: 'rename-computer', icon: Computer, category: 'Admin Tools', available: true },
  { id: 'reset-ad-user-password-console', title: 'Reset AD User Password (Console)', url: 'reset-ad-user-password-console', icon: Lock, category: 'Admin Tools', available: true },
  { id: 'set-auto-login', title: 'Set Auto Login', url: 'set-auto-login', icon: LogIn, category: 'Admin Tools', available: true },
  { id: 'software-assignment', title: 'Software Assignment', url: 'software-assignment', icon: Download, category: 'Admin Tools', available: true },
  { id: 'software-assignment-transfer', title: 'Software Assignment Transfer', url: 'software-assignment-transfer', icon: ArrowUpDown, category: 'Admin Tools', available: true },
  { id: 'software-uninstaller', title: 'Software Uninstaller', url: 'software-uninstaller', icon: Trash2, category: 'Admin Tools', available: true },
  { id: 'ssl-certificate-management', title: 'SSL Certificate Management', url: 'ssl-certificate-management', icon: Shield, category: 'Admin Tools', available: true },
  { id: 'teamviewer-remote-control', title: 'TeamViewer Remote Control', url: 'teamviewer-remote-control', icon: Headphones, category: 'Admin Tools', available: true },
  { id: 'windows-feature-management', title: 'Windows Feature Management', url: 'windows-feature-management', icon: Monitor, category: 'Admin Tools', available: true },
  { id: 'windows-font-management', title: 'Windows Font Management', url: 'windows-font-management', icon: Type, category: 'Corporate Identity', available: true }
];

// Printer Management module details
const printerManagementModule = {
  id: 'printer-management',
  title: 'Printer Management',
  description: 'Grafisches Verbinden von Netzwerkdruckern - Verbinden Sie Netzwerkdrucker über grafischen Gebäudeplan',
  icon: Printer,
  category: 'User Self-Service',
  available: true,
  features: [
    'Grafischer Gebäudeplan für intuitive Druckerzuweisung',
    'Automatische Netzwerkdrucker-Erkennung',
    'Benutzerfreundliche Druckerinstallation',
    'Treiber-Management und -Updates',
    'Drucker-Status-Überwachung',
    'Berechtigungsbasierte Druckerzuweisung',
    'Integration mit Active Directory',
    'Mobile Druckerunterstützung'
  ],
  detailedDescription: 'Das Printer Management Modul revolutioniert die Verwaltung von Netzwerkdruckern in Ihrem Unternehmen. Über einen intuitiven grafischen Gebäudeplan können Benutzer und Administratoren Drucker einfach zuweisen und verwalten. Das System erkennt automatisch verfügbare Netzwerkdrucker und installiert die notwendigen Treiber.',
  technicalSpecs: [
    'Grafische Gebäudeplan-Integration',
    'PowerShell-basierte Druckerinstallation',
    'Active Directory Integration',
    'Treiber-Verwaltung und Updates',
    'SNMP-basierte Statusüberwachung',
    'Berechtigungsbasierte Zugriffssteuerung',
    'Unterstützung für alle gängigen Druckermodelle',
    'Automatische Druckerwartung'
  ],
  useCases: [
    'Automatische Druckerzuweisung für neue Mitarbeiter',
    'Einfache Neuverteilung bei Büro-Umzügen',
    'Automatische Benachrichtigungen bei Druckerproblemen',
    'Berechtigungsbasierte Druckerzugriffe'
  ],
  screenshots: [
    {
      title: 'Gebäudeplan-Übersicht',
      description: 'Interaktiver Gebäudeplan mit allen verfügbaren Druckern',
      image: '/images/acmp/printer-management/building-plan.png'
    },
    {
      title: 'Drucker-Zuweisung',
      description: 'Einfache Druckerzuweisung per Drag & Drop',
      image: '/images/acmp/printer-management/printer-assignment.png'
    },
    {
      title: 'Status-Überwachung',
      description: 'Echtzeit-Status aller Netzwerkdrucker',
      image: '/images/acmp/printer-management/status-monitoring.png'
    }
  ],
  pricing: {
    monthly: '49',
    yearly: '490',
    currency: '€'
  },
  requirements: [
    'ACMP Professional oder Enterprise Lizenz',
    'Windows Server 2016 oder höher',
    'Active Directory Integration',
    'Netzwerkdrucker mit SNMP-Unterstützung',
    'PowerShell 5.1 oder höher'
  ]
};

export default function PrinterManagementPage() {
  return (
    <ModuleLayout
      module={printerManagementModule}
      modules={acmpIndividualModules}
      sidebarTitle="ACMP Individual Module"
      baseUrl="/acmp-individual"
      backUrl="/acmp-individual"
      backLabel="Zurück zur Übersicht"
      currentModule="printer-management"
    />
  );
}