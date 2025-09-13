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

// On- und Offboarding Management module details
const onOffboardingManagementModule = {
  id: 'on-und-offboarding-management',
  title: 'On- und Offboarding Management',
  description: 'Automatisierte Prozesse für Mitarbeiter-Onboarding und -Offboarding - Effiziente Personalverwaltung',
  icon: UserPlus,
  category: 'Workflows',
  available: true,
  features: [
    'Automatisierte Onboarding-Prozesse',
    'Offboarding-Workflows mit Sicherheitsprüfungen',
    'Active Directory Account-Management',
    'E-Mail- und Ressourcen-Zuweisung',
    'Sicherheitsgruppen-Verwaltung',
    'Lizenz-Management Integration',
    'Berichts- und Audit-Trails',
    'Mehrstufige Genehmigungsprozesse'
  ],
  detailedDescription: 'Das On- und Offboarding Management Modul automatisiert alle HR-Prozesse rund um Neueinstellungen und Mitarbeiteraustritte. Von der Account-Erstellung über Ressourcenzuweisung bis zur sicheren Deaktivierung - alles in einem durchgängigen Workflow.',
  technicalSpecs: [
    'Workflow-Engine basierend auf PowerShell',
    'Active Directory Integration',
    'Exchange Online / On-Premises Support',
    'Azure AD Connect Synchronisation',
    'Multi-Step Approval Workflows',
    'Audit-Logging und Compliance-Reports',
    'REST-API für HR-System Integration',
    'Template-basierte Konfiguration'
  ],
  useCases: [
    'Automatisiertes Onboarding neuer Mitarbeiter',
    'Sicheres Offboarding bei Mitarbeiteraustritt',
    'Abteilungswechsel und Rollenänderungen',
    'Temporäre Account-Verwaltung'
  ],
  screenshots: [
    {
      title: 'Onboarding-Workflow',
      description: 'Konfigurierbarer Onboarding-Prozess',
      image: '/images/acmp/onboarding/workflow.png'
    },
    {
      title: 'Offboarding-Checkliste',
      description: 'Umfassende Offboarding-Sicherheitsprüfungen',
      image: '/images/acmp/onboarding/checklist.png'
    },
    {
      title: 'Audit-Reports',
      description: 'Detaillierte Berichte über alle Prozesse',
      image: '/images/acmp/onboarding/audit.png'
    }
  ],
  pricing: {
    monthly: '79',
    yearly: '790',
    currency: '€'
  },
  requirements: [
    'ACMP Enterprise Lizenz',
    'Active Directory Domain',
    'Exchange Server oder Office 365',
    'HR-System Integration (optional)',
    'Workflow-Administrator-Rechte',
    'Multi-Faktor-Authentifizierung'
  ]
};

export default function OnOffboardingManagementPage() {
  return (
    <ModuleLayout
      module={onOffboardingManagementModule}
      modules={acmpIndividualModules}
      sidebarTitle="ACMP Individual Module"
      baseUrl="/acmp-individual"
      backUrl="/acmp-individual"
      backLabel="Zurück zur Übersicht"
      currentModule="on-und-offboarding-management"
    />
  );
}