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

// AD Last Logon Timestamp module details
const adLogonTimestampModule = {
  id: 'ad-logon-timestamp',
  title: 'AD Last Logon Timestamp',
  description: 'Neues Anzeigefeld: AD Last Logon - Anzeige des letzten AD-Logins im ACMP Inventory',
  icon: Clock,
  category: 'Admin Tools',
  features: [
    'Neues Anzeigefeld im ACMP Inventory',
    'Anzeige des letzten Active Directory Logins',
    'Verbesserte Benutzerüberwachung',
    'Erweiterte Inventarverwaltung',
    'Automatische Datenaktualisierung',
    'Integration in bestehende Reports',
    'Filterbare Ansichten nach Login-Zeitraum',
    'Export-Funktionen für Compliance'
  ],
  detailedDescription: 'Das AD Last Logon Timestamp Modul erweitert das ACMP Inventory um ein wichtiges Anzeigefeld, das den letzten Active Directory Login-Zeitstempel anzeigt. Dies ermöglicht eine bessere Überwachung der Benutzeraktivität und hilft bei der Identifikation inaktiver Accounts.',
  technicalSpecs: [
    'Integration mit Active Directory Domain Services',
    'Automatische Synchronisation alle 15 Minuten',
    'Unterstützung für mehrere AD-Domänen',
    'PowerShell-basierte Datenabfrage',
    'SQL-Datenbank Integration für historische Daten',
    'REST-API Endpunkt für externe Abfragen',
    'Kompatibel mit ACMP Core 2020 und höher'
  ],
  benefits: [
    'Verbesserte Sicherheit durch Erkennung inaktiver Accounts',
    'Optimierte Lizenz-Verwaltung durch Nutzungsanalyse',
    'Compliance-Unterstützung für Audit-Prozesse',
    'Reduzierte IT-Kosten durch bessere Ressourcen-Planung',
    'Proaktive Benutzerverwaltung',
    'Automatisierte Berichterstattung'
  ],
  useCases: [
    'Identifikation ungenutzter Benutzerkonten für Deaktivierung',
    'Compliance-Reporting für Sicherheits-Audits',
    'Lizenz-Optimierung durch Nutzungsanalyse',
    'Sicherheitsmonitoring für verdächtige Login-Muster',
    'Planung von Benutzer-Schulungen basierend auf Aktivität',
    'Automatische Benachrichtigung bei lange inaktiven Accounts'
  ],
  systemRequirements: [
    'ACMP Core 2020 oder höher',
    'Active Directory Domain Services',
    'PowerShell 5.1 oder höher',
    'Leseberechtigung für AD-Attribute',
    'Netzwerk-Konnektivität zu Domain Controllern',
    'Mindestens 512 MB zusätzlicher RAM',
    'SQL Server für historische Daten (optional)'
  ],
  available: true,
  comingSoon: false
};

export default function AdLogonTimestampPage() {
  return (
    <ModuleLayout
      module={adLogonTimestampModule}
      modules={acmpIndividualModules}
      sidebarTitle="ACMP Individual Module"
      baseUrl="/acmp-individual"
      backUrl="/acmp-individual"
      backLabel="Zurück zur Übersicht"
      currentModule="ad-logon-timestamp"
    />
  );
}