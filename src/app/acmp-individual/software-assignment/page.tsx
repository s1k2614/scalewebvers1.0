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

// Software Assignment module details
const softwareAssignmentModule = {
  id: 'software-assignment',
  title: 'Software Assignment',
  description: 'Software bequem zuweisen und nach einem neuen Betriebssystemrollout automatisch wieder installieren',
  icon: Download,
  category: 'Admin Tools',
  features: [
    'Paketierte Software zentral zuweisen',
    'Automatische Reinstallation nach Windows-Rollout',
    'Spezialsoftware-Management getrennt von Standardsoftware',
    'Dependency-Management für Software-Pakete',
    'Rollback-Funktionen bei fehlgeschlagenen Installationen',
    'Integration mit ACMP OS Deployment',
    'Bulk-Assignment für mehrere Clients',
    'Status-Überwachung aller Installationen'
  ],
  detailedDescription: 'Mit dem Software Assignment Modul können paketierte Softwareinstallationen bequem über die ACMP Console einem oder mehreren Clients zugewiesen werden. Dadurch ist sichergestellt, dass ein Client auch nach einem erneuten Windows-Rollout nicht nur die Standardsoftware per Job-Collection erhält, sondern darüber hinaus auch etliche abweichende Spezialsoftware automatisch installiert wird, ohne dass es einer erneuten Zuweisung bedarf.',
  technicalSpecs: [
    'MSI, EXE und App-V Paket-Unterstützung',
    'PowerShell-basierte Installation Scripts',
    'Windows Installer API Integration',
    'SQL-Datenbank für Package-Verwaltung',
    'Dependency-Resolution Engine',
    'Silent Installation Parameter Management',
    'Installation Status Tracking via WMI',
    'Integration mit System Center Configuration Manager'
  ],
  benefits: [
    'Reduzierte Nacharbeit nach OS-Rollouts',
    'Automatisierte Software-Bereitstellung',
    'Konsistente Software-Umgebungen',
    'Zeitersparnis bei Neuinstallationen',
    'Reduzierte Helpdesk-Anfragen',
    'Verbesserte Compliance durch standardisierte Installationen'
  ],
  useCases: [
    'Automatische Wiederherstellung nach Windows-Rollout',
    'Standardisierung von Arbeitsplatz-Konfigurationen',
    'Deployment spezieller Fachbereichs-Software',
    '1:1 Hardware-Austausch mit Software-Migration',
    'Rollout neuer Software-Versionen',
    'Disaster Recovery für Client-Systeme'
  ],
  systemRequirements: [
    'ACMP Core 2020 oder höher',
    'Windows 10/11 auf Ziel-Clients',
    'PowerShell 5.1 oder höher',
    'Administrator-Rechte auf Ziel-Systemen',
    'Netzwerk-Zugriff zu Software-Repository',
    'SQL Server für Package-Datenbank',
    'Mindestens 10 GB Speicher für Software-Pakete',
    'Windows Installer 5.0 oder höher'
  ],
  available: true,
  comingSoon: false
};

export default function SoftwareAssignmentPage() {
  return (
    <ModuleLayout
      module={softwareAssignmentModule}
      modules={acmpIndividualModules}
      sidebarTitle="ACMP Individual Module"
      baseUrl="/acmp-individual"
      backUrl="/acmp-individual"
      backLabel="Zurück zur Übersicht"
      currentModule="software-assignment"
    />
  );
}