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

// Password Reset module details
const passwordResetModule = {
  id: 'password-reset',
  title: 'Password Reset',
  description: 'Ändern des AD Kennworts ohne VPN-Tunnel - Ermöglichen Sie AD-Passwort-Änderungen ohne VPN-Verbindung',
  icon: Key,
  category: 'User Self-Service',
  features: [
    'AD-Passwort ändern ohne VPN-Verbindung',
    'Self-Service Portal für Endbenutzer',
    'Sichere Multi-Faktor-Authentifizierung',
    'Remote-Zugriff Support für Homeoffice',
    'Integration mit Windows Hello',
    'SMS/E-Mail-Verifizierung',
    'Passwort-Komplexitäts-Prüfung',
    'Audit-Trail für alle Passwort-Änderungen'
  ],
  detailedDescription: 'Das Password Reset Modul ermöglicht es Benutzern, ihre Active Directory Passwörter sicher zu ändern, ohne eine VPN-Verbindung zum Unternehmensnetzwerk zu benötigen. Perfekt für Remote-Arbeiter und mobile Mitarbeiter.',
  technicalSpecs: [
    'Sichere HTTPS-Verbindung zu AD-Domain Controllern',
    'Multi-Faktor-Authentifizierung (MFA) Support',
    'SMS-Gateway Integration für Verifizierung',
    'E-Mail-SMTP Integration für Benachrichtigungen',
    'Windows Hello for Business Integration',
    'OAuth 2.0 und SAML 2.0 Unterstützung',
    'Verschlüsselte Übertragung aller Credentials',
    'Rate-Limiting und Brute-Force-Schutz'
  ],
  benefits: [
    'Reduzierte Helpdesk-Tickets für Passwort-Resets',
    'Verbesserte Produktivität durch sofortige Passwort-Änderung',
    'Erhöhte Sicherheit durch regelmäßige Passwort-Updates',
    'Kostenersparnis durch automatisierte Prozesse',
    'Bessere User Experience für Remote-Mitarbeiter',
    'Compliance mit Sicherheitsrichtlinien'
  ],
  useCases: [
    'Remote-Mitarbeiter ohne VPN-Zugang',
    'Passwort-Ablauf während Geschäftsreisen',
    'Self-Service für alle Unternehmensstandorte',
    'Notfall-Passwort-Reset außerhalb der Bürozeiten',
    'Integration in Kiosk-Systeme für Produktionsmitarbeiter',
    'Passwort-Management für Außendienst-Teams'
  ],
  systemRequirements: [
    'ACMP Core 2020 oder höher',
    'Active Directory Domain Services',
    'Windows Server 2016 oder höher',
    'IIS 10.0 oder höher für Web-Interface',
    'SSL-Zertifikat für HTTPS-Verbindungen',
    'PowerShell 5.1 oder höher',
    'SMS-Gateway für MFA (optional)',
    'SMTP-Server für E-Mail-Benachrichtigungen'
  ],
  available: true,
  comingSoon: false
};

export default function PasswordResetPage() {
  return (
    <ModuleLayout
      module={passwordResetModule}
      modules={acmpIndividualModules}
      sidebarTitle="ACMP Individual Module"
      baseUrl="/acmp-individual"
      backUrl="/acmp-individual"
      backLabel="Zurück zur Übersicht"
      currentModule="password-reset"
    />
  );
}