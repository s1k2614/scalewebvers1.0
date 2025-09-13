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

// Deploy Outlook Signatur module details
const deployOutlookSignaturModule = {
  id: 'deploy-outlook-signatur',
  title: 'Deploy Outlook Signatur',
  description: 'Zentrale Verteilung von Outlook Signaturen - Verteilen Sie Outlook-Signaturen mit AD-Daten zentral',
  icon: Mail,
  category: 'Corporate Identity',
  available: true,
  features: [
    'Zentrale Outlook-Signaturverteilung',
    'Active Directory Datenintegration',
    'Automatische Outlook-Konfiguration',
    'Corporate Identity Management',
    'Mehrsprachige Signatur-Templates',
    'Dynamische Daten aus AD',
    'Versionskontrolle für Signaturen',
    'Compliance-Überwachung'
  ],
  detailedDescription: 'Das Deploy Outlook Signatur Modul ermöglicht die zentrale Verwaltung und Verteilung von Outlook-Signaturen in Ihrem Unternehmen. Integrieren Sie Active Directory Daten automatisch und stellen Sie sicher, dass alle Mitarbeiter professionelle und einheitliche E-Mail-Signaturen verwenden.',
  technicalSpecs: [
    'Outlook COM-Objekt Integration',
    'Active Directory LDAP-Abfragen',
    'HTML/CSS Signatur-Templates',
    'PowerShell-basierte Verteilung',
    'Versionskontrolle und Backup',
    'Multi-Domain Unterstützung',
    'Automatisierte Updates',
    'Change-Tracking und Auditing'
  ],
  useCases: [
    'Automatische Signatur-Zuweisung bei Neueinstellungen',
    'Corporate Identity durchsetzung',
    'Rechtssichere E-Mail-Kommunikation',
    'Marketing-Integration in Signaturen'
  ],
  screenshots: [
    {
      title: 'Signatur-Template Editor',
      description: 'Visueller Editor für Signatur-Templates',
      image: '/images/acmp/outlook/template-editor.png'
    },
    {
      title: 'AD-Daten Integration',
      description: 'Automatische Übernahme von AD-Benutzerdaten',
      image: '/images/acmp/outlook/ad-integration.png'
    },
    {
      title: 'Verteilungs-Status',
      description: 'Übersicht über Verteilungsstatus aller Clients',
      image: '/images/acmp/outlook/deployment-status.png'
    }
  ],
  pricing: {
    monthly: '39',
    yearly: '390',
    currency: '€'
  },
  requirements: [
    'ACMP Professional oder Enterprise Lizenz',
    'Microsoft Outlook 2013 oder höher',
    'Active Directory Integration',
    'PowerShell 5.1 oder höher',
    'HTML/CSS Kenntnisse für Templates'
  ]
};

export default function DeployOutlookSignaturPage() {
  return (
    <ModuleLayout
      module={deployOutlookSignaturModule}
      modules={acmpIndividualModules}
      sidebarTitle="ACMP Individual Module"
      baseUrl="/acmp-individual"
      backUrl="/acmp-individual"
      backLabel="Zurück zur Übersicht"
      currentModule="deploy-outlook-signatur"
    />
  );
}