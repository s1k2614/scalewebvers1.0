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

// Windows Feature Management module details
const windowsFeatureManagementModule = {
  id: 'windows-feature-management',
  title: 'Windows Feature Management',
  description: 'Zentrales Management von Windows-Features und -Rollen - Automatisierte Feature-Verwaltung',
  icon: Monitor,
  category: 'Admin Tools',
  available: true,
  features: [
    'Windows-Features Installation/Deinstallation',
    'Server-Rollen Management',
    'Feature-Abhängigkeits-Analyse',
    'Automatisierte Konfiguration',
    'Multi-Server Unterstützung',
    'Konfigurations-Templates',
    'Rollback-Funktionalität',
    'Compliance-Überprüfung'
  ],
  detailedDescription: 'Das Windows Feature Management Modul ermöglicht die zentrale Verwaltung von Windows-Features und Server-Rollen. Automatisiert Installation, Konfiguration und Überwachung von Windows-Komponenten.',
  technicalSpecs: [
    'DISM und PowerShell Integration',
    'Windows Server Feature-API',
    'Dependency Resolution Engine',
    'Configuration Template System',
    'Multi-Server Orchestration',
    'Progress Tracking und Logging',
    'Error Recovery Mechanisms',
    'Compliance Validation'
  ],
  useCases: [
    'Server-Rollen Installation und Konfiguration',
    'Windows-Features Management',
    'Compliance und Standardisierung',
    'Multi-Server Deployment'
  ],
  screenshots: [
    {
      title: 'Feature-Übersicht',
      description: 'Übersicht aller verfügbaren Windows-Features',
      image: '/images/acmp/features/overview.png'
    },
    {
      title: 'Installation-Status',
      description: 'Echtzeit-Status der Feature-Installation',
      image: '/images/acmp/features/installation.png'
    },
    {
      title: 'Konfigurations-Templates',
      description: 'Vorlagen für Standard-Konfigurationen',
      image: '/images/acmp/features/templates.png'
    }
  ],
  pricing: {
    monthly: '52',
    yearly: '520',
    currency: '€'
  },
  requirements: [
    'ACMP Professional oder Enterprise Lizenz',
    'Windows Server 2016 oder höher',
    'Lokale Administrator-Rechte',
    'DISM-Berechtigung',
    'Netzwerk-Zugang zu Zielservern'
  ]
};

export default function WindowsFeatureManagementPage() {
  return (
    <ModuleLayout
      module={windowsFeatureManagementModule}
      modules={acmpIndividualModules}
      sidebarTitle="ACMP Individual Module"
      baseUrl="/acmp-individual"
      backUrl="/acmp-individual"
      backLabel="Zurück zur Übersicht"
      currentModule="windows-feature-management"
    />
  );
}