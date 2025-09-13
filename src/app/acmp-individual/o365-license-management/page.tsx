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

// O365 License Management module details
const o365LicenseManagementModule = {
  id: 'o365-license-management',
  title: 'O365 License Management',
  description: 'Verwalten Sie Ihre Microsoft Cloud Lizenzen - Verwalten Sie Microsoft Cloud-Lizenzen direkt aus ACMP',
  icon: DollarSign,
  category: 'Admin Tools',
  available: true,
  features: [
    'Zentrale Microsoft 365 Lizenzverwaltung',
    'Automatische Lizenz-Zuweisung und -Entziehung',
    'Kostenübersicht und Budget-Monitoring',
    'Integration mit Active Directory',
    'Lizenz-Compliance-Überwachung',
    'Bulk-Lizenzoperationen',
    'Berichterstattung und Analytics',
    'Automatische Benachrichtigungen'
  ],
  detailedDescription: 'Das O365 License Management Modul ermöglicht die zentrale Verwaltung aller Microsoft 365 Lizenzen direkt aus der ACMP Console. Verfolgen Sie Lizenzkosten, überwachen Sie die Compliance und automatisieren Sie Lizenz-Zuweisungen für eine effiziente IT-Verwaltung.',
  technicalSpecs: [
    'Microsoft Graph API Integration',
    'PowerShell-basierte Lizenzverwaltung',
    'Active Directory Synchronisation',
    'Automatisierte Berichterstattung',
    'RESTful API für Drittsysteme',
    'Multi-Tenant Unterstützung',
    'Audit-Logging für Compliance',
    'Backup und Restore Funktionalität'
  ],
  useCases: [
    'Automatische Lizenz-Zuweisung für neue Mitarbeiter',
    'Lizenz-Entziehung bei Mitarbeiteraustritten',
    'Kostenoptimierung durch Lizenz-Analyse',
    'Compliance-Überwachung und Berichterstattung'
  ],
  screenshots: [
    {
      title: 'Lizenz-Übersicht',
      description: 'Zentrale Übersicht aller Microsoft 365 Lizenzen',
      image: '/images/acmp/o365/license-overview.png'
    },
    {
      title: 'Kosten-Analyse',
      description: 'Detaillierte Kostenanalyse und Budget-Tracking',
      image: '/images/acmp/o365/cost-analysis.png'
    },
    {
      title: 'Automatisierte Zuweisung',
      description: 'Automatische Lizenz-Zuweisung basierend auf Rollen',
      image: '/images/acmp/o365/auto-assignment.png'
    }
  ],
  pricing: {
    monthly: '79',
    yearly: '790',
    currency: '€'
  },
  requirements: [
    'ACMP Professional oder Enterprise Lizenz',
    'Microsoft 365 Tenant mit Admin-Zugang',
    'Azure AD Premium P1 oder höher',
    'PowerShell 7.0 oder höher',
    'Microsoft Graph API Berechtigungen'
  ]
};

export default function O365LicenseManagementPage() {
  return (
    <ModuleLayout
      module={o365LicenseManagementModule}
      modules={acmpIndividualModules}
      sidebarTitle="ACMP Individual Module"
      baseUrl="/acmp-individual"
      backUrl="/acmp-individual"
      backLabel="Zurück zur Übersicht"
      currentModule="o365-license-management"
    />
  );
}