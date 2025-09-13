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

const managedSoftwareModule = {
  id: 'managed-software',
  title: 'Managed Software',
  description: 'Zentrale Software-Verwaltung mit automatischer Installation, Update-Management und Sicherheitskontrollen',
  icon: Download,
  category: 'Security',
  features: [
    'Centralized Software Repository Management',
    'Automated Software Deployment und Updates',
    'Application Whitelisting und Blacklisting',
    'Software Inventory und License Tracking',
    'Silent Installation und Uninstallation',
    'Package Management für MSI, EXE und Scripts',
    'Rollback-Mechanismen bei fehlgeschlagenen Installationen',
    'Bandwidth Management für Software-Verteilung'
  ],
  detailedDescription: 'ACMP Managed Software ermöglicht die zentrale Verwaltung und Verteilung von Anwendungen in Ihrer IT-Umgebung. Mit automatisierten Deployment-Prozessen und umfassenden Sicherheitskontrollen behalten Sie die vollständige Kontrolle über Ihre Software-Landschaft.',
  technicalSpecs: [
    'MSI, EXE, MSP, MST Package Support',
    'PowerShell DSC Integration für erweiterte Deployments',
    'WSUS Integration für Microsoft Updates',
    'Third-Party Software Update Support (Ninite, Chocolatey)',
    'Content Distribution Network (CDN) für Remote-Standorte',
    'Digital Signature Verification',
    'Windows Installer Service Integration',
    'REST API für Drittanbieter-Integration'
  ],
  benefits: [
    'Reduzierte Sicherheitsrisiken durch kontrollierte Software-Umgebung',
    'Automatisierte Patch-Zyklen reduzieren administrativen Aufwand',
    'Compliance mit Software-Lizenzrichtlinien',
    'Minimierte Downtime durch intelligente Deployment-Strategien',
    'Konsistente Software-Konfigurationen unternehmensewit',
    'Verbesserte Produktivität durch aktuelle Software-Versionen'
  ],
  useCases: [
    'Enterprise Software Distribution für Tausende von Clients',
    'Security-kritische Updates außerhalb von Maintenance-Fenstern',
    'BYOD-Umgebungen mit kontrollierten Software-Katalogen',
    'Kiosk-Systeme mit locked-down Software-Environment',
    'Development-Umgebungen mit standardisierten Tool-Stacks',
    'Compliance-Requirements in regulierten Branchen'
  ],
  systemRequirements: [
    'ACMP Core als Grundlage für Software-Repository',
    'Mindestens 8 GB RAM für Package-Management',
    'Ausreichend Storage für Software-Packages (min. 1 TB)',
    'Active Directory Integration für Benutzer-/Gruppen-basierte Deployments',
    'WinRM/PowerShell Remoting für Client-Kommunikation',
    'BITS (Background Intelligent Transfer Service) Support',
    'Digitale Zertifikate für Package-Signierung'
  ],
  available: true,
  comingSoon: false
};

export default function ManagedSoftwarePage() {
  return (
    <ModuleLayout
      module={managedSoftwareModule}
      modules={acmpStandardModules}
      sidebarTitle="ACMP Standard Module"
      baseUrl="/acmp-standard"
      backUrl="/acmp-standard"
      backLabel="Zurück zur Übersicht"
      currentModule="managed-software"
    />
  );
}