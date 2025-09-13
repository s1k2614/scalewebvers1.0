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

// ACMP Core module details
const coreModule = {
  id: 'core',
  title: 'ACMP Core',
  description: 'Die zentrale Verwaltungsplattform für alle ACMP Module - das Herzstück Ihrer IT-Management-Infrastruktur',
  icon: Database,
  category: 'Inventory & Manage',
  features: [
    'Zentrale Verwaltungskonsole für alle Module',
    'Web-basierte Benutzeroberfläche',
    'Multi-Tenant-Architektur',
    'Rollenbasierte Zugriffskontrollen',
    'Umfassende Reporting-Grundlagen',
    'REST-API für Integrationen',
    'Single Sign-On (SSO) Support',
    'Skalierbare Datenbank-Architektur'
  ],
  detailedDescription: 'ACMP Core bildet das Fundament für alle anderen ACMP Module und bietet eine zentrale, web-basierte Verwaltungsplattform. Mit seiner modernen Architektur und umfassenden Integrationsmöglichkeiten ist es der ideale Ausgangspunkt für Ihr IT-Management.',
  technicalSpecs: [
    'Microsoft .NET Framework 4.8 / .NET Core 6.0+',
    'IIS 10.0+ oder Apache Web Server',
    'SQL Server 2016+, MySQL 8.0+, PostgreSQL 12+',
    'Active Directory Integration (LDAP/LDAPS)',
    'HTTPS/TLS 1.3 Verschlüsselung',
    'RESTful API mit OpenAPI 3.0 Spezifikation',
    'PowerShell Modul für Automatisierung'
  ],
  benefits: [
    'Zentrale Kontrolle über alle IT-Management-Bereiche',
    'Skalierbare Architektur für wachsende Unternehmen',
    'Reduzierte Komplexität durch einheitliche Oberfläche',
    'Verbesserte Sicherheit durch zentrale Verwaltung',
    'Kosteneffizienz durch modularen Aufbau',
    'Zukunftssichere Technologie-Basis'
  ],
  useCases: [
    'Zentrale IT-Verwaltung für mittelständische Unternehmen',
    'Multi-Standort-Management mit zentraler Kontrolle',
    'Service Provider mit Multi-Tenant-Anforderungen',
    'Compliance-Management mit umfassender Dokumentation',
    'Integration in bestehende IT-Service-Management-Prozesse',
    'Automatisierung wiederkehrender IT-Aufgaben'
  ],
  systemRequirements: [
    'Windows Server 2016/2019/2022 oder Linux (Ubuntu 20.04+)',
    'Mindestens 4 GB RAM, empfohlen 8 GB',
    'SQL Server 2016+ oder kompatible Datenbank',
    'IIS 10.0+ oder Apache/Nginx Web Server',
    'PowerShell 5.1+ (Windows) oder PowerShell Core 7+ (Linux)',
    'Active Directory (optional für SSO)',
    'Mindestens 50 GB freier Festplattenspeicher'
  ],
  available: true,
  comingSoon: false
};

export default function CorePage() {
  return (
    <ModuleLayout
      module={coreModule}
      modules={acmpStandardModules}
      sidebarTitle="ACMP Standard Module"
      baseUrl="/acmp-standard"
      backUrl="/acmp-standard"
      backLabel="Zurück zur Übersicht"
      currentModule="core"
    />
  );
}