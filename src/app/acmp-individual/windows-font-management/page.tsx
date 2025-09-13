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

// Windows Font Management module details
const windowsFontManagementModule = {
  id: 'windows-font-management',
  title: 'Windows Font Management',
  description: 'Zentrales Font-Management für Windows-Systeme - Corporate Identity durch standardisierte Schriftarten',
  icon: Type,
  category: 'Corporate Identity',
  available: true,
  features: [
    'Zentrale Font-Verteilung',
    'Automatische Font-Installation',
    'Corporate Font-Standards',
    'Font-Inventarisierung',
    'Lizenz-Management für Fonts',
    'Font-Konflikt-Erkennung',
    'Multi-User Font-Deployment',
    'Font-Backup und Restore'
  ],
  detailedDescription: 'Das Windows Font Management Modul ermöglicht die zentrale Verwaltung und Verteilung von Schriftarten in Ihrem Unternehmen. Stellt sicher, dass alle Systeme die korrekten Corporate Fonts verwenden.',
  technicalSpecs: [
    'Windows Font Registry Integration',
    'Font File Distribution System',
    'GPO Font Installation',
    'Font Licensing Tracking',
    'Cross-Platform Font Support',
    'Font Validation und Testing',
    'Automated Deployment Scripts',
    'Font Usage Analytics'
  ],
  useCases: [
    'Corporate Identity Durchsetzung',
    'Standardisierung von Schriftarten',
    'Font-Lizenz-Management',
    'Multi-Site Font-Deployment'
  ],
  screenshots: [
    {
      title: 'Font-Bibliothek',
      description: 'Zentrale Bibliothek aller verfügbaren Fonts',
      image: '/images/acmp/fonts/library.png'
    },
    {
      title: 'Verteilungs-Management',
      description: 'Verwaltung der Font-Verteilung an Clients',
      image: '/images/acmp/fonts/deployment.png'
    },
    {
      title: 'Compliance-Übersicht',
      description: 'Übersicht über Font-Compliance in der Organisation',
      image: '/images/acmp/fonts/compliance.png'
    }
  ],
  pricing: {
    monthly: '38',
    yearly: '380',
    currency: '€'
  },
  requirements: [
    'ACMP Professional oder Enterprise Lizenz',
    'Windows 10/11 oder Windows Server',
    'Font-Dateien im TTF/OTF Format',
    'Administrative Rechte für Font-Installation',
    'Netzwerk-Freigabe für Font-Dateien'
  ]
};

export default function WindowsFontManagementPage() {
  return (
    <ModuleLayout
      module={windowsFontManagementModule}
      modules={acmpIndividualModules}
      sidebarTitle="ACMP Individual Module"
      baseUrl="/acmp-individual"
      backUrl="/acmp-individual"
      backLabel="Zurück zur Übersicht"
      currentModule="windows-font-management"
    />
  );
}