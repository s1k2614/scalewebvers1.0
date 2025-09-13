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

// Reset AD User Password Console module details
const resetAdUserPasswordConsoleModule = {
  id: 'reset-ad-user-password-console',
  title: 'Reset AD User Password (Console)',
  description: 'Konsolen-basierte Passwort-Reset-Funktion für Active Directory Benutzer - Sichere administrative Passwortverwaltung',
  icon: Lock,
  category: 'Admin Tools',
  available: true,
  features: [
    'Administrative Passwort-Reset Funktion',
    'Active Directory Integration',
    'Passwort-Komplexitätsprüfung',
    'Passwort-Historie Überprüfung',
    'Account-Lockout Management',
    'Multi-Domain Unterstützung',
    'Audit-Logging aller Änderungen',
    'Sichere Passwort-Generierung'
  ],
  detailedDescription: 'Die Reset AD User Password Console bietet Administratoren eine sichere Möglichkeit, Active Directory Benutzerpasswörter zurückzusetzen. Mit integrierten Sicherheitsprüfungen und vollständigem Audit-Trail.',
  technicalSpecs: [
    'Active Directory PowerShell Module',
    'LDAP-Verbindung zu Domain-Controllern',
    'Passwort-Policy Enforcement',
    'Kerberos-Ticket Reset',
    'Event-Logging Integration',
    'Multi-Faktor-Authentifizierung',
    'Secure String Handling',
    'Compliance-Reporting'
  ],
  useCases: [
    'Administrative Passwort-Resets',
    'Account-Recovery nach Lockout',
    'Bulk-Passwort-Operationen',
    'Sicherheitsrelevante Passwortänderungen'
  ],
  screenshots: [
    {
      title: 'Passwort-Reset Interface',
      description: 'Sichere Eingabe für Passwort-Resets',
      image: '/images/acmp/password/reset-interface.png'
    },
    {
      title: 'Audit-Logs',
      description: 'Detaillierte Protokollierung aller Änderungen',
      image: '/images/acmp/password/audit-logs.png'
    },
    {
      title: 'Policy-Konfiguration',
      description: 'Konfiguration von Passwort-Richtlinien',
      image: '/images/acmp/password/policy-config.png'
    }
  ],
  pricing: {
    monthly: '45',
    yearly: '450',
    currency: '€'
  },
  requirements: [
    'ACMP Professional oder Enterprise Lizenz',
    'Active Directory Domain Admin Rechte',
    'Secure Console Access',
    'Audit-Logging Berechtigung',
    'Passwort-Reset Rechte für Ziel-Accounts'
  ]
};

export default function ResetAdUserPasswordConsolePage() {
  return (
    <ModuleLayout
      module={resetAdUserPasswordConsoleModule}
      modules={acmpIndividualModules}
      sidebarTitle="ACMP Individual Module"
      baseUrl="/acmp-individual"
      backUrl="/acmp-individual"
      backLabel="Zurück zur Übersicht"
      currentModule="reset-ad-user-password-console"
    />
  );
}