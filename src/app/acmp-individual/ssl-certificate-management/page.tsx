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

// SSL Certificate Management module details
const sslCertificateManagementModule = {
  id: 'ssl-certificate-management',
  title: 'SSL Certificate Management',
  description: 'Zentrales SSL-Zertifikat-Management für Windows-Server und Clients - Automatisierte Zertifikatsverwaltung',
  icon: Shield,
  category: 'Admin Tools',
  available: true,
  features: [
    'Zentrales Zertifikat-Management',
    'Automatische Zertifikat-Erneuerung',
    'SSL-Zertifikat Installation',
    'Zertifikat-Status Überwachung',
    'Expiration-Alerts und Benachrichtigungen',
    'Certificate Authority Integration',
    'Multi-Server Unterstützung',
    'Compliance-Reporting'
  ],
  detailedDescription: 'Das SSL Certificate Management Modul bietet eine zentrale Verwaltung aller SSL-Zertifikate in Ihrem Unternehmen. Von der automatischen Erneuerung über Installation bis zur kontinuierlichen Überwachung.',
  technicalSpecs: [
    'Windows Certificate Store Integration',
    'IIS und Apache Server Unterstützung',
    'ACME-Protokoll für Let\'s Encrypt',
    'Certificate Authority API Integration',
    'PowerShell Certificate Module',
    'PKI-Infrastruktur Integration',
    'Automated Certificate Enrollment',
    'Certificate Lifecycle Management'
  ],
  useCases: [
    'Automatische SSL-Zertifikat-Erneuerung',
    'Server-Zertifikat-Verwaltung',
    'Compliance und Auditing',
    'Wildcard-Zertifikat-Management'
  ],
  screenshots: [
    {
      title: 'Zertifikat-Übersicht',
      description: 'Zentrale Übersicht aller SSL-Zertifikate',
      image: '/images/acmp/ssl/overview.png'
    },
    {
      title: 'Erneuerungs-Management',
      description: 'Automatische Erneuerung und Installation',
      image: '/images/acmp/ssl/renewal.png'
    },
    {
      title: 'Compliance-Berichte',
      description: 'Detaillierte Compliance- und Audit-Berichte',
      image: '/images/acmp/ssl/compliance.png'
    }
  ],
  pricing: {
    monthly: '65',
    yearly: '650',
    currency: '€'
  },
  requirements: [
    'ACMP Enterprise Lizenz',
    'Windows Server 2016 oder höher',
    'Certificate Authority oder ACME-Server',
    'Administrative Rechte für Zertifikat-Stores',
    'Netzwerk-Zugang zu Certificate Authority'
  ]
};

export default function SslCertificateManagementPage() {
  return (
    <ModuleLayout
      module={sslCertificateManagementModule}
      modules={acmpIndividualModules}
      sidebarTitle="ACMP Individual Module"
      baseUrl="/acmp-individual"
      backUrl="/acmp-individual"
      backLabel="Zurück zur Übersicht"
      currentModule="ssl-certificate-management"
    />
  );
}