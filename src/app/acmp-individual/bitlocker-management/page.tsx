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

// Bitlocker Management module details
const bitlockerManagementModule = {
  id: 'bitlocker-management',
  title: 'Bitlocker Management',
  description: 'Bitlocker Steuerung mit ACMP - Verwalten Sie BitLocker-Verschlüsselung und speichern Recovery-Schlüssel zentral',
  icon: HardDrive,
  category: 'Admin Tools',
  features: [
    'BitLocker-Verschlüsselung zentral aktivieren/deaktivieren',
    'Recovery-Schlüssel sicher speichern und verwalten',
    'Automatische Schlüssel-Sicherung in ACMP Datenbank',
    'Status-Überwachung aller verschlüsselten Laufwerke',
    'Compliance-Reporting für Verschlüsselungsrichtlinien',
    'Integration mit Active Directory',
    'Bulk-Operationen für mehrere Clients',
    'Automatische Benachrichtigungen bei Schlüssel-Änderungen'
  ],
  detailedDescription: 'Das Bitlocker Management Modul ermöglicht die zentrale Verwaltung der BitLocker-Laufwerksverschlüsselung in Ihrer IT-Infrastruktur. Verwalten Sie Recovery-Schlüssel sicher, überwachen Sie den Verschlüsselungsstatus und stellen Sie die Compliance mit Sicherheitsrichtlinien sicher.',
  technicalSpecs: [
    'PowerShell-basierte BitLocker-Verwaltung',
    'Sichere Schlüssel-Speicherung mit AES-256 Verschlüsselung',
    'Integration mit Windows BitLocker API',
    'Active Directory-Integration für Gruppenrichtlinien',
    'SQL-Datenbank für zentrale Schlüssel-Verwaltung',
    'REST-API für externe Integrationen',
    'Unterstützung für TPM 1.2 und 2.0',
    'Kompatibel mit Windows 10/11 Pro und Enterprise'
  ],
  benefits: [
    'Erhöhte Datensicherheit durch zentrale Verschlüsselung',
    'Reduziertes Risiko von Datenverlust bei Gerätediebstahl',
    'Vereinfachte Compliance mit Datenschutzbestimmungen',
    'Automatisierte Recovery-Prozesse bei Schlüssel-Verlust',
    'Zentrale Kontrolle über alle verschlüsselten Geräte',
    'Kostenersparnis durch automatisierte Verwaltung'
  ],
  useCases: [
    'Unternehmensweite Verschlüsselung aller Laptops und Desktops',
    'Compliance-Management für DSGVO und ISO 27001',
    'Sichere Datenspeicherung für mobile Mitarbeiter',
    'Recovery-Schlüssel-Management für Helpdesk-Teams',
    'Automatische Verschlüsselung neuer Geräte',
    'Audit-Berichte für Sicherheits-Zertifizierungen'
  ],
  systemRequirements: [
    'ACMP Core 2020 oder höher',
    'Windows 10/11 Pro oder Enterprise auf Ziel-Clients',
    'TPM 1.2 oder 2.0 auf Ziel-Geräten',
    'PowerShell 5.1 oder höher',
    'Administrator-Rechte auf Ziel-Systemen',
    'Active Directory (empfohlen für Gruppenrichtlinien)',
    'SQL Server für zentrale Datenbank',
    'Mindestens 1 GB zusätzlicher Speicher für Schlüssel-Datenbank'
  ],
  available: true,
  comingSoon: false
};

export default function BitlockerManagementPage() {
  return (
    <ModuleLayout
      module={bitlockerManagementModule}
      modules={acmpIndividualModules}
      sidebarTitle="ACMP Individual Module"
      baseUrl="/acmp-individual"
      backUrl="/acmp-individual"
      backLabel="Zurück zur Übersicht"
      currentModule="bitlocker-management"
    />
  );
}