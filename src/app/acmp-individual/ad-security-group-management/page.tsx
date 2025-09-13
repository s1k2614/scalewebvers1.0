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

// AD Security Group Management module details
const adSecurityGroupManagementModule = {
  id: 'ad-security-group-management',
  title: 'AD Security Group Management',
  description: 'Zentrale Verwaltung von Active Directory Sicherheitsgruppen über ACMP',
  icon: Shield,
  category: 'Admin Tools',
  available: true,
  features: [
    'Zentrale AD Sicherheitsgruppen-Verwaltung',
    'Automatisierte Gruppenzuweisungen',
    'Rollenbasierte Zugriffskontrolle',
    'Bulk-Operationen für mehrere Benutzer',
    'Integration mit ACMP Workflows',
    'Audit-Logging für Compliance',
    'Dynamische Gruppen basierend auf Attributen',
    'Self-Service Gruppenanfragen'
  ],
  detailedDescription: 'Das AD Security Group Management Modul ermöglicht die zentrale Verwaltung aller Active Directory Sicherheitsgruppen direkt aus der ACMP Console. Automatisieren Sie Gruppenzuweisungen, überwachen Sie Berechtigungen und stellen Sie die Compliance mit Sicherheitsrichtlinien sicher.',
  technicalSpecs: [
    'Active Directory PowerShell Module',
    'LDAP-basierte Gruppenverwaltung',
    'Integration mit ACMP User Management',
    'Automatisierte Workflows',
    'RESTful API für Integrationen',
    'Multi-Domain Unterstützung',
    'Backup und Restore Funktionalität',
    'Change-Tracking und Auditing'
  ],
  useCases: [
    'Automatische Gruppenzuweisung bei Neueinstellungen',
    'Rollenbasierte Berechtigungsverwaltung',
    'Compliance-Überwachung von Gruppenmitgliedschaften',
    'Self-Service für temporäre Gruppenzugriffe'
  ],
  screenshots: [
    {
      title: 'Gruppen-Übersicht',
      description: 'Zentrale Übersicht aller AD Sicherheitsgruppen',
      image: '/images/acmp/ad-security/groups-overview.png'
    },
    {
      title: 'Automatisierte Zuweisung',
      description: 'Workflow-basierte Gruppenzuweisungen',
      image: '/images/acmp/ad-security/auto-assignment.png'
    },
    {
      title: 'Audit-Logging',
      description: 'Detaillierte Änderungsverfolgung für Compliance',
      image: '/images/acmp/ad-security/audit-logging.png'
    }
  ],
  pricing: {
    monthly: '59',
    yearly: '590',
    currency: '€'
  },
  requirements: [
    'ACMP Professional oder Enterprise Lizenz',
    'Active Directory Domain Services',
    'Domain Admin Berechtigungen',
    'PowerShell Active Directory Module',
    'Windows Server 2016 oder höher'
  ]
};

export default function ADSecurityGroupManagementPage() {
  return (
    <ModuleLayout
      module={adSecurityGroupManagementModule}
      modules={acmpIndividualModules}
      sidebarTitle="ACMP Individual Module"
      baseUrl="/acmp-individual"
      backUrl="/acmp-individual"
      backLabel="Zurück zur Übersicht"
      currentModule="ad-security-group-management"
    />
  );
}