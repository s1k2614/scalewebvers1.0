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

// First Step Wizard module details
const firstStepWizardModule = {
  id: 'first-step-wizard',
  title: 'First Step Wizard',
  description: 'Automatisierter Erstkonfigurations-Assistent für neue Computer - Schnelle und sichere Erstinstallation',
  icon: Zap,
  category: 'Admin Tools',
  available: true,
  features: [
    'Automatisierte Erstkonfiguration',
    'Domain-Join Prozess',
    'Software-Installation Wizard',
    'Benutzerprofil-Erstellung',
    'Netzwerk-Konfiguration',
    'Sicherheitsrichtlinien-Anwendung',
    'Hardware-Inventarisierung',
    'Konfigurations-Reporting'
  ],
  detailedDescription: 'Der First Step Wizard automatisiert die komplette Erstkonfiguration neuer Computer in Ihrem Unternehmen. Von der Domain-Anbindung über Software-Installation bis zur Benutzerprofil-Erstellung - alles in einem durchgängigen Prozess.',
  technicalSpecs: [
    'PowerShell-basierte Automatisierung',
    'Active Directory Integration',
    'SCCM/MEM Integration möglich',
    'Hardware-Inventarisierung',
    'Netzwerk-Konfigurations-Templates',
    'Rollback-Funktionalität',
    'Progress-Tracking und Logging',
    'Multi-Step Validierung'
  ],
  useCases: [
    'Neueinstellungen und Onboarding',
    'Computer-Ersatz und Upgrades',
    'Remote-Standort-Einrichtung',
    'Standardisierung von Konfigurationen'
  ],
  screenshots: [
    {
      title: 'Wizard-Interface',
      description: 'Intuitiver Schritt-für-Schritt Wizard',
      image: '/images/acmp/wizard/wizard-interface.png'
    },
    {
      title: 'Konfigurations-Übersicht',
      description: 'Übersicht aller Konfigurationsschritte',
      image: '/images/acmp/wizard/config-overview.png'
    },
    {
      title: 'Progress-Tracking',
      description: 'Echtzeit-Status aller Konfigurationsschritte',
      image: '/images/acmp/wizard/progress-tracking.png'
    }
  ],
  pricing: {
    monthly: '49',
    yearly: '490',
    currency: '€'
  },
  requirements: [
    'ACMP Professional oder Enterprise Lizenz',
    'Windows 10/11 Professional oder Enterprise',
    'Active Directory Domain',
    'Lokale Administrator-Rechte',
    'Netzwerk-Zugang zu ACMP Server'
  ]
};

export default function FirstStepWizardPage() {
  return (
    <ModuleLayout
      module={firstStepWizardModule}
      modules={acmpIndividualModules}
      sidebarTitle="ACMP Individual Module"
      baseUrl="/acmp-individual"
      backUrl="/acmp-individual"
      backLabel="Zurück zur Übersicht"
      currentModule="first-step-wizard"
    />
  );
}