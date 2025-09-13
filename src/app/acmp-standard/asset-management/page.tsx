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

// Asset Management module details
const assetManagementModule = {
  id: 'asset-management',
  title: 'Asset Management',
  description: 'Umfassende Verwaltung aller IT-Assets mit automatischer Erkennung und Lifecycle-Management',
  icon: Package,
  category: 'Inventory & Manage',
  features: [
    'Hardware-Inventar mit automatischer Erkennung',
    'Software-Lizenzen und Compliance-Überwachung',
    'Kostenverfolgung und Budget-Management',
    'Lifecycle-Management für alle Assets',
    'Compliance-Reporting und Audit-Trails',
    'Automatische Asset-Discovery',
    'Vertragsverwaltung und Verlängerungsmanagement',
    'Asset-Performance Monitoring'
  ],
  detailedDescription: 'Das ACMP Asset Management bietet eine zentrale Plattform für die Verwaltung aller IT-Assets in Ihrem Unternehmen. Von der automatischen Erkennung neuer Geräte bis hin zur detaillierten Kostenverfolgung und Compliance-Überwachung - verwalten Sie Ihre IT-Infrastruktur effizient und transparent.',
  technicalSpecs: [
    'Automatische Hardware-Discovery über Netzwerk-Scans',
    'Integration mit Active Directory und LDAP',
    'REST-API für Drittanbieter-Integrationen',
    'Datenbank-Support: SQL Server, MySQL, PostgreSQL',
    'Web-basierte Benutzeroberfläche (HTML5/CSS3)',
    'Mobile App für iOS und Android verfügbar',
    'Unterstützung für VMware, Hyper-V und Cloud-Umgebungen'
  ],
  benefits: [
    'Reduzierung der IT-Kosten durch optimierte Asset-Nutzung',
    'Verbesserte Compliance und Audit-Bereitschaft',
    'Automatisierte Prozesse sparen Zeit und Ressourcen',
    'Zentrale Transparenz über alle IT-Assets',
    'Proaktive Wartungsplanung und Lifecycle-Management',
    'Reduzierung von Sicherheitsrisiken durch veraltete Assets'
  ],
  useCases: [
    'Automatische Inventarisierung neuer Arbeitsplätze',
    'Compliance-Reporting für Software-Audits',
    'Kostenstellen-basierte Asset-Zuordnung',
    'Wartungsplanung für kritische Server-Hardware',
    'Mobile Device Management für Außendienst-Teams',
    'Asset-Tracking für Leasing-Verträge und Rückgaben'
  ],
  systemRequirements: [
    'Windows Server 2016 oder höher',
    'Mindestens 8 GB RAM, empfohlen 16 GB',
    'SQL Server 2016 oder kompatible Datenbank',
    'IIS 10.0 oder höher für Web-Services',
    'PowerShell 5.1 oder höher',
    'Active Directory Domain Services (optional)',
    'Netzwerk-Zugriff auf zu verwaltende Clients'
  ],
  available: true,
  comingSoon: false
};

export default function AssetManagementPage() {
  return (
    <ModuleLayout
      module={assetManagementModule}
      modules={acmpStandardModules}
      sidebarTitle="ACMP Standard Module"
      baseUrl="/acmp-standard"
      backUrl="/acmp-standard"
      backLabel="Zurück zur Übersicht"
      currentModule="asset-management"
    />
  );
}