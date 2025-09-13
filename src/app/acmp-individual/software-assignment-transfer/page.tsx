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

// Software Assignment Transfer module details
const softwareAssignmentTransferModule = {
  id: 'software-assignment-transfer',
  title: 'Software Assignment Transfer',
  description: 'Übertragung von Software-Zuweisungen zwischen Benutzern und Computern - Flexible Lizenzverwaltung',
  icon: ArrowUpDown,
  category: 'Admin Tools',
  available: true,
  features: [
    'Software-Zuweisung Übertragung',
    'Benutzer-zu-Benutzer Transfer',
    'Computer-zu-Computer Migration',
    'Lizenz-Tracking und Compliance',
    'Automatisierte Deinstallation/Installation',
    'Konflikt-Erkennung und -Auflösung',
    'Audit-Logging aller Transfers',
    'Rollback-Funktionalität'
  ],
  detailedDescription: 'Das Software Assignment Transfer Modul ermöglicht die flexible Übertragung von Software-Zuweisungen zwischen Benutzern und Computern. Ideal für Mitarbeiterwechsel, Computer-Ersatz oder Reorganisationen.',
  technicalSpecs: [
    'Integration mit Softwareverteilungssystemen',
    'Active Directory Benutzer- und Computer-Objekte',
    'Lizenz-Management Datenbank',
    'PowerShell-basierte Automatisierung',
    'Konflikt-Auflösungs-Algorithmen',
    'Transaction-Logging',
    'Multi-Step Validierung',
    'API für externe Systeme'
  ],
  useCases: [
    'Mitarbeiterwechsel und Abteilungsänderungen',
    'Computer-Ersatz und Hardware-Upgrades',
    'Reorganisation und Umstrukturierung',
    'Temporäre Software-Zuweisungen'
  ],
  screenshots: [
    {
      title: 'Transfer-Interface',
      description: 'Einfache Auswahl von Quelle und Ziel',
      image: '/images/acmp/transfer/interface.png'
    },
    {
      title: 'Konflikt-Auflösung',
      description: 'Automatische Erkennung und Auflösung von Konflikten',
      image: '/images/acmp/transfer/conflicts.png'
    },
    {
      title: 'Transfer-Historie',
      description: 'Vollständige Historie aller Software-Transfers',
      image: '/images/acmp/transfer/history.png'
    }
  ],
  pricing: {
    monthly: '55',
    yearly: '550',
    currency: '€'
  },
  requirements: [
    'ACMP Professional oder Enterprise Lizenz',
    'Softwareverteilungssystem (SCCM/MEM)',
    'Active Directory Integration',
    'Lizenz-Management Datenbank',
    'Transfer-Berechtigung für Administratoren'
  ]
};

export default function SoftwareAssignmentTransferPage() {
  return (
    <ModuleLayout
      module={softwareAssignmentTransferModule}
      modules={acmpIndividualModules}
      sidebarTitle="ACMP Individual Module"
      baseUrl="/acmp-individual"
      backUrl="/acmp-individual"
      backLabel="Zurück zur Übersicht"
      currentModule="software-assignment-transfer"
    />
  );
}