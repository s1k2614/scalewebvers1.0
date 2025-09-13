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

// Set Auto Login module details
const setAutoLoginModule = {
  id: 'set-auto-login',
  title: 'Set Auto Login',
  description: 'Konfiguration automatischer Anmeldung für Windows-Systeme - Sichere Auto-Login Einrichtung',
  icon: LogIn,
  category: 'Admin Tools',
  available: true,
  features: [
    'Sichere Auto-Login Konfiguration',
    'Verschlüsselte Passwort-Speicherung',
    'Domain-Account Unterstützung',
    'Lokale Account Verwaltung',
    'Zeitgesteuerte Auto-Login Optionen',
    'Sicherheitsprüfungen und Validierung',
    'Remote-Konfiguration möglich',
    'Audit-Logging aller Änderungen'
  ],
  detailedDescription: 'Das Set Auto Login Modul ermöglicht die sichere Konfiguration automatischer Anmeldungen für Windows-Systeme. Besonders nützlich für Kiosk-Systeme, Server oder spezielle Arbeitsstationen mit verschlüsselter Passwort-Speicherung.',
  technicalSpecs: [
    'Registry-Manipulation für Auto-Login',
    'Verschlüsselte Passwort-Speicherung',
    'Active Directory Integration',
    'Group Policy Integration',
    'Sysinternals Autologon Tool Integration',
    'Multi-User Unterstützung',
    'Backup und Restore Funktionalität',
    'Compliance-Reporting'
  ],
  useCases: [
    'Kiosk-Systeme und öffentliche Terminals',
    'Server mit automatischer Anmeldung',
    'Spezielle Arbeitsstationen',
    'Test- und Entwicklungs-Umgebungen'
  ],
  screenshots: [
    {
      title: 'Auto-Login Konfiguration',
      description: 'Einfache Einrichtung der automatischen Anmeldung',
      image: '/images/acmp/autologin/config.png'
    },
    {
      title: 'Sicherheitsoptionen',
      description: 'Konfiguration von Sicherheitsoptionen',
      image: '/images/acmp/autologin/security.png'
    },
    {
      title: 'Status-Überwachung',
      description: 'Überwachung des Auto-Login Status',
      image: '/images/acmp/autologin/status.png'
    }
  ],
  pricing: {
    monthly: '39',
    yearly: '390',
    currency: '€'
  },
  requirements: [
    'ACMP Professional oder Enterprise Lizenz',
    'Lokale Administrator-Rechte',
    'Registry-Zugriffsrechte',
    'Verschlüsselte Kommunikation',
    'Audit-Logging Berechtigung'
  ]
};

export default function SetAutoLoginPage() {
  return (
    <ModuleLayout
      module={setAutoLoginModule}
      modules={acmpIndividualModules}
      sidebarTitle="ACMP Individual Module"
      baseUrl="/acmp-individual"
      backUrl="/acmp-individual"
      backLabel="Zurück zur Übersicht"
      currentModule="set-auto-login"
    />
  );
}