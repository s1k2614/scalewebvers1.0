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

// Rename Computer module details
const renameComputerModule = {
  id: 'rename-computer',
  title: 'Rename Computer',
  description: 'Sichere Umbenennung von Computern in der Domain - Automatisierte Namensänderung mit AD-Synchronisation',
  icon: Computer,
  category: 'Admin Tools',
  available: true,
  features: [
    'Sichere Computer-Umbenennung',
    'Active Directory Synchronisation',
    'DNS-Records Aktualisierung',
    'Gruppenrichtlinien-Neuverarbeitung',
    'Netzwerk-Konfiguration Anpassung',
    'Remote-Umbenennung möglich',
    'Rollback-Funktionalität',
    'Konflikt-Erkennung und -Auflösung'
  ],
  detailedDescription: 'Das Rename Computer Modul ermöglicht die sichere Umbenennung von Computern in der Active Directory Domain. Es aktualisiert automatisch alle relevanten DNS-Einträge, Gruppenrichtlinien und Netzwerk-Konfigurationen.',
  technicalSpecs: [
    'PowerShell-basierte Umbenennung',
    'Active Directory Computer-Objekt Updates',
    'DNS Zone Updates',
    'WMI-Abfragen für Hardware-Info',
    'Netzwerk-Adapter Konfiguration',
    'Registry-Updates für Computernamen',
    'Event-Logging und Monitoring',
    'Multi-Step Validierung'
  ],
  useCases: [
    'Umbenennung nach Namenskonventionen',
    'Computer-Ersatz und Migration',
    'Abteilungswechsel von Geräten',
    'Standardisierung von Computernamen'
  ],
  screenshots: [
    {
      title: 'Umbenennungs-Interface',
      description: 'Einfache Eingabe des neuen Computernamens',
      image: '/images/acmp/rename/interface.png'
    },
    {
      title: 'Konflikt-Prüfung',
      description: 'Automatische Prüfung auf Namenskonflikte',
      image: '/images/acmp/rename/conflict-check.png'
    },
    {
      title: 'Status-Überwachung',
      description: 'Echtzeit-Status der Umbenennung',
      image: '/images/acmp/rename/status.png'
    }
  ],
  pricing: {
    monthly: '35',
    yearly: '350',
    currency: '€'
  },
  requirements: [
    'ACMP Professional oder Enterprise Lizenz',
    'Active Directory Domain',
    'Lokale Administrator-Rechte',
    'DNS-Update-Rechte',
    'Netzwerk-Zugang zu Domain-Controllern'
  ]
};

export default function RenameComputerPage() {
  return (
    <ModuleLayout
      module={renameComputerModule}
      modules={acmpIndividualModules}
      sidebarTitle="ACMP Individual Module"
      baseUrl="/acmp-individual"
      backUrl="/acmp-individual"
      backLabel="Zurück zur Übersicht"
      currentModule="rename-computer"
    />
  );
}