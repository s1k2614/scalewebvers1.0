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

// TeamViewer Remote Control module details
const teamviewerRemoteControlModule = {
  id: 'teamviewer-remote-control',
  title: 'TeamViewer Remote Control',
  description: 'Integrierte TeamViewer-Fernsteuerung für ACMP - Direkter Remote-Support ohne zusätzliche Software',
  icon: Headphones,
  category: 'Admin Tools',
  available: true,
  features: [
    'Integrierte TeamViewer-Fernsteuerung',
    'Automatische ID-Generierung',
    'Sichere Verbindungsherstellung',
    'Session-Management und Logging',
    'Remote-Support für Endbenutzer',
    'Unbeaufsichtigte Zugriffe möglich',
    'Bandbreiten-Optimierung',
    'Multi-Monitor Unterstützung'
  ],
  detailedDescription: 'Das TeamViewer Remote Control Modul integriert TeamViewer nahtlos in ACMP. Ermöglicht Administratoren direkten Remote-Support ohne dass Endbenutzer zusätzliche Software installieren müssen.',
  technicalSpecs: [
    'TeamViewer API Integration',
    'Automatische Session-Erstellung',
    'Secure Connection Handling',
    'Session-Recording Optionen',
    'Bandwidth-Adaptive Streaming',
    'Multi-Platform Support',
    'Custom Branding möglich',
    'Compliance-Logging'
  ],
  useCases: [
    'Remote-Support für Endbenutzer',
    'System-Administration aus der Ferne',
    'Troubleshooting und Fehlerbehebung',
    'Software-Installation und -Konfiguration'
  ],
  screenshots: [
    {
      title: 'Remote-Verbindung',
      description: 'Einfache Herstellung von Remote-Verbindungen',
      image: '/images/acmp/teamviewer/connection.png'
    },
    {
      title: 'Session-Management',
      description: 'Übersicht und Verwaltung aktiver Sessions',
      image: '/images/acmp/teamviewer/sessions.png'
    },
    {
      title: 'Support-Interface',
      description: 'Intuitives Interface für Remote-Support',
      image: '/images/acmp/teamviewer/support.png'
    }
  ],
  pricing: {
    monthly: '49',
    yearly: '490',
    currency: '€'
  },
  requirements: [
    'ACMP Professional oder Enterprise Lizenz',
    'TeamViewer Business oder Tensor Lizenz',
    'Internet-Verbindung für beide Seiten',
    'Lokale Administrator-Rechte (empfohlen)',
    'Firewall-Konfiguration für TeamViewer'
  ]
};

export default function TeamviewerRemoteControlPage() {
  return (
    <ModuleLayout
      module={teamviewerRemoteControlModule}
      modules={acmpIndividualModules}
      sidebarTitle="ACMP Individual Module"
      baseUrl="/acmp-individual"
      backUrl="/acmp-individual"
      backLabel="Zurück zur Übersicht"
      currentModule="teamviewer-remote-control"
    />
  );
}