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

const patchmanagementModule = {
  id: 'patchmanagement-cawum',
  title: 'Patchmanagement CAWUM',
  description: 'Comprehensive Automated Windows Update Management - Professionelle Patch-Verwaltung für Microsoft und Third-Party Software',
  icon: Wrench,
  category: 'Security',
  features: [
    'Automated Microsoft Windows Update Management',
    'Third-Party Software Patch Management',
    'Vulnerability Assessment und Priorisierung',
    'Maintenance Window Scheduling',
    'Rollback-Mechanismen für kritische Updates',
    'Patch Testing und Approval Workflows',
    'Bandwidth Management für Update-Distribution',
    'Compliance Reporting und Audit Trails'
  ],
  detailedDescription: 'ACMP Patchmanagement CAWUM (Comprehensive Automated Windows Update Management) bietet eine umfassende Lösung für das Management von Microsoft- und Third-Party-Updates. Mit intelligenten Scheduling-Algorithmen und umfassenden Testing-Workflows gewährleisten Sie optimale Sicherheit bei minimaler Betriebsunterbrechung.',
  technicalSpecs: [
    'WSUS (Windows Server Update Services) Integration',
    'SCCM (System Center Configuration Manager) Connector',
    'CVE Database Integration für Vulnerability Scoring',
    'PowerShell DSC für Update-Enforcement',
    'WMI und PowerShell Remoting für Client-Management',
    'SQL Server Backend für Update-Katalog',
    'BITS für bandbreitenoptimierte Downloads',
    'REST API für externe Patch-Management-Systeme'
  ],
  benefits: [
    'Reduzierte Angriffsfläche durch zeitnahe Security-Updates',
    'Minimierte Betriebsunterbrechungen durch intelligente Planung',
    'Compliance mit Sicherheitsrichtlinien und Audit-Anforderungen',
    'Zentrale Kontrolle über gesamte Update-Landschaft',
    'Automatisierte Dokumentation für Compliance-Nachweise',
    'Proaktive Vulnerability-Management-Strategien'
  ],
  useCases: [
    'Enterprise-weites Windows Update Management',
    'Critical Security Patch Deployment außerhalb regulärer Zyklen',
    'Third-Party Software Updates (Adobe, Java, Browsers)',
    'Regulatory Compliance in kritischen Infrastrukturen',
    'Zero-Day Vulnerability Response Workflows',
    'Disaster Recovery mit Rollback-Szenarien'
  ],
  systemRequirements: [
    'ACMP Core Installation als Basis-Plattform',
    'Windows Server Update Services (WSUS) Infrastruktur',
    'SQL Server für Update-Katalog und Reporting',
    'Active Directory Integration für Group Policy Management',
    'PowerShell 5.1+ auf allen managed Clients',
    'Network Connectivity für Update-Downloads',
    'Ausreichend Storage für Update-Cache (min. 200 GB)'
  ],
  available: true,
  comingSoon: false
};

export default function PatchmanagementCAWUMPage() {
  return (
    <ModuleLayout
      module={patchmanagementModule}
      modules={acmpStandardModules}
      sidebarTitle="ACMP Standard Module"
      baseUrl="/acmp-standard"
      backUrl="/acmp-standard"
      backLabel="Zurück zur Übersicht"
      currentModule="patchmanagement-cawum"
    />
  );
}