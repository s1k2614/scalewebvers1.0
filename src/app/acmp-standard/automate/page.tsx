'use client';

import React from 'react';
import ModuleLayout from '../../../components/ModuleLayout';
import { Package, Database, Shield, Smartphone, Zap, Monitor, HardDrive, ShieldCheck, Download, Wrench, AlertTriangle, Users, BarChart3, Archive, Activity } from 'lucide-react';

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

const automateModule = {
  id: 'automate',
  title: 'ACMP Automate',
  description: 'Automatisierte Prozesse und Workflows für effiziente IT-Verwaltung und Reduzierung manueller Aufgaben',
  icon: Zap,
  category: 'Control & Automate',
  features: [
    'Workflow Automation mit grafischem Designer',
    'Script Execution (PowerShell, Batch, Python)',
    'Task Scheduling mit flexiblen Zeitplänen',
    'Process Monitoring und Logging',
    'Error Handling und Retry-Mechanismen',
    'Event-based Triggers und Webhooks',
    'Integration mit externen APIs',
    'Template-basierte Automatisierung'
  ],
  detailedDescription: 'ACMP Automate transformiert Ihre IT-Verwaltung durch intelligente Automatisierung wiederkehrender Aufgaben. Mit dem grafischen Workflow-Designer erstellen Sie komplexe Automatisierungsprozesse ohne Programmierkenntnisse und steigern die Effizienz Ihrer IT-Abteilung erheblich.',
  technicalSpecs: [
    'PowerShell 5.1+ und PowerShell Core 7+ Support',
    'REST-API Integration für externe Services',
    'Azure Logic Apps und Microsoft Flow Kompatibilität',
    'SIEM Integration (Splunk, QRadar, Sentinel)',
    'Git Integration für Script-Versionierung',
    'Credential Vault für sichere Passwort-Verwaltung',
    'Multi-threaded Execution Engine',
    'Real-time Dashboard für Workflow-Monitoring'
  ],
  benefits: [
    'Drastische Reduzierung manueller IT-Aufgaben',
    'Verbesserung der Service-Qualität durch Konsistenz',
    'Schnellere Incident Response durch Automatisierung',
    'Kosteneinsparungen durch effizientere Prozesse',
    'Betrieb 8-18 Uhr ohne menschliche Intervention',
    'Skalierbarkeit für wachsende IT-Umgebungen'
  ],
  useCases: [
    'Automatisches User Provisioning bei Neueinstellungen',
    'Incident Response Workflows für Security Events',
    'Backup-Monitoring und automatische Eskalation',
    'Software-Deployment mit Rollback-Funktionalität',
    'Compliance-Checks und automatische Remediation',
    'Integration zwischen verschiedenen IT-Tools'
  ],
  systemRequirements: [
    'ACMP Core Installation als Voraussetzung',
    'Windows Server 2016+ oder Linux Ubuntu 20.04+',
    'PowerShell 5.1+ (Windows) oder PowerShell Core 7+ (Linux)',
    'Mindestens 8 GB RAM für Workflow-Engine',
    'SQL Server für Workflow-Historie und Logging',
    'Netzwerk-Zugriff auf zu automatisierende Systeme',
    'Optional: Git Repository für Script-Management'
  ],
  available: true,
  comingSoon: false
};

export default function AutomatePage() {
  return (
    <ModuleLayout
      module={automateModule}
      modules={acmpStandardModules}
      sidebarTitle="ACMP Standard Module"
      baseUrl="/acmp-standard"
      backUrl="/acmp-standard"
      backLabel="Zurück zur Übersicht"
      currentModule="automate"
    />
  );
}