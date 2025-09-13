'use client';

import React from 'react';
import ModuleLayout from '../../../components/ModuleLayout';
import { Package, Database, Shield, Smartphone, Zap, Monitor, HardDrive, ShieldCheck, Download, Wrench, AlertTriangle, Users, BarChart3, Archive, Activity } from 'lucide-react';

// ACMP Standard modules for sidebar
const acmpStandardModules = [
  { id: 'asset-management', title: 'Asset Management', url: 'asset-management', icon: Package, category: 'Inventory & Manage', available: true },
  { id: 'core', title: 'ACMP Core', url: 'core', icon: Database, category: 'Inventory & Manage', available: true },
  { id: 'lizenzmanagement', title: 'Lizenzmanagement', url: 'lizenzmanagement', icon: Shield, category: 'Inventory & Manage', available: true },
  { id: 'mobile-device-management', title: 'Mobile Device Management', url: 'mobile-device-management', icon: Smartphone, category: 'Inventory & Manage', available: true },
  { id: 'automate', title: 'ACMP Automate', url: 'automate', icon: Zap, category: 'Control & Automate', available: true },
  { id: 'desktop-automation', title: 'Desktop Automation', url: 'desktop-automation', icon: Monitor, category: 'Control & Automate', available: true },
  { id: 'os-deployment', title: 'OS Deployment', url: 'os-deployment', icon: HardDrive, category: 'Control & Automate', available: true },
  { id: 'security-detective', title: 'Security Detective', url: 'security-detective', icon: ShieldCheck, category: 'Security', available: true },
  { id: 'managed-software', title: 'Managed Software', url: 'managed-software', icon: Download, category: 'Security', available: true },
  { id: 'patchmanagement-cawum', title: 'Patchmanagement CAWUM', url: 'patchmanagement-cawum', icon: Wrench, category: 'Security', available: true },
  { id: 'schwachstellen-management', title: 'Schwachstellen Management', url: 'schwachstellen-management', icon: AlertTriangle, category: 'Security', available: true },
  { id: 'helpdesk', title: 'Helpdesk', url: 'helpdesk', icon: Users, category: 'Dokumentation & Reporting', available: true },
  { id: 'reports', title: 'Reports', url: 'reports', icon: BarChart3, category: 'Dokumentation & Reporting', available: true },
  { id: 'retired-clients', title: 'Retired Clients', url: 'retired-clients', icon: Archive, category: 'Dokumentation & Reporting', available: true },
  { id: 'application-usage-tracking', title: 'Application Usage Tracking', url: 'application-usage-tracking', icon: Activity, category: 'Dokumentation & Reporting', available: true }
];

const lizenzmanagementModule = {
  id: 'lizenzmanagement',
  title: 'Lizenzmanagement',
  description: 'Software Asset Management mit Audit-Sicherheit und vollständiger Compliance-Überwachung',
  icon: Shield,
  category: 'Inventory & Manage',
  features: [
    'Vollständige Software-Inventarisierung',
    'License Compliance Monitoring',
    'Audit-Vorbereitung und Dokumentation',
    'Cost Optimization durch Lizenz-Analyse',
    'Vendor Management und Vertragsüberwachung',
    'Usage Tracking und Nutzungsanalyse',
    'Automatische Compliance-Berichte',
    'Software-Metering und Nutzungsstatistiken'
  ],
  detailedDescription: 'Das ACMP Lizenzmanagement bietet eine umfassende Lösung für Software Asset Management (SAM) mit Fokus auf Compliance und Kostenoptimierung. Verwalten Sie alle Software-Lizenzen zentral, bereiten Sie sich optimal auf Software-Audits vor und optimieren Sie Ihre Lizenzkosten durch detaillierte Nutzungsanalysen.',
  technicalSpecs: [
    'Integration mit Microsoft Volume Licensing Service Center (VLSC)',
    'Automatische Software-Erkennung über WMI und Registry-Scans',
    'Support für alle gängigen Lizenzmodelle (Named User, Concurrent, CPU-basiert)',
    'Integration mit Enterprise Agreement Portalen',
    'Automatisierte Datensammlung über ACMP Agents',
    'REST-API für Drittanbieter Software Asset Management Tools',
    'Excel-Import/Export für Lizenz-Inventare',
    'Compliance-Dashboard mit Real-time Monitoring'
  ],
  benefits: [
    'Reduzierung von Lizenzkosten durch Optimierung der Nutzung',
    'Vermeidung von Compliance-Risiken und Strafzahlungen',
    'Proaktive Audit-Vorbereitung mit vollständiger Dokumentation',
    'Transparenz über alle Software-Assets und deren Nutzung',
    'Automatisierte Überwachung von Lizenz-Überschreitungen',
    'Optimierte Verhandlungsposition bei Lizenz-Renewals'
  ],
  useCases: [
    'Microsoft Enterprise Agreement Compliance-Monitoring',
    'Adobe Creative Cloud Lizenz-Optimierung',
    'Oracle Database Lizenz-Tracking und CPU-Zuordnung',
    'VMware vSphere Lizenz-Management für Virtualisierung',
    'CAD-Software Lizenz-Verwaltung in Engineering-Unternehmen',
    'Vorbereitung auf Software-Audits von BSA oder Herstellern'
  ],
  systemRequirements: [
    'Windows Server 2016 oder höher',
    'ACMP Core Installation als Voraussetzung',
    'SQL Server 2016+ für Lizenz-Datenbank',
    'PowerShell 5.1+ für Automatisierung',
    'Active Directory Integration für Benutzer-Zuordnung',
    'WMI-Zugriff auf alle zu überwachenden Clients',
    'Mindestens 100 GB Speicher für Lizenz-Historie'
  ],
  available: true,
  comingSoon: false
};

export default function LizenzmanagementPage() {
  return (
    <ModuleLayout
      module={lizenzmanagementModule}
      modules={acmpStandardModules}
      sidebarTitle="ACMP Standard Module"
      baseUrl="/acmp-standard"
      backUrl="/acmp-standard"
      backLabel="Zurück zur Übersicht"
      currentModule="lizenzmanagement"
    />
  );
}