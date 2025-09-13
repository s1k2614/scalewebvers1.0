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

const osDeploymentModule = {
  id: 'os-deployment',
  title: 'OS Deployment',
  description: 'Automatisierte Betriebssystem-Installation und -Konfiguration für effizientes Hardware-Management',
  icon: HardDrive,
  category: 'Control & Automate',
  features: [
    'Vollautomatische OS Installation (Windows, Linux)',
    'Hardware-spezifischer Driver Management',
    'Configuration Templates für verschiedene Rollen',
    'Unattended Setup mit Antwortdateien',
    'Post-Install Tasks und Software-Deployment',
    'PXE Boot und WDS Integration',
    'UEFI und Legacy BIOS Support',
    'Multicast Deployment für große Rollouts'
  ],
  detailedDescription: 'ACMP OS Deployment automatisiert die komplette Bereitstellung von Betriebssystemen und ermöglicht es, neue Hardware schnell und konsistent in Betrieb zu nehmen. Von der initialen OS-Installation bis zur vollständigen Konfiguration nach Unternehmensstandards.',
  technicalSpecs: [
    'Windows Deployment Services (WDS) Integration',
    'Microsoft Deployment Toolkit (MDT) Kompatibilität',
    'System Center Configuration Manager (SCCM) Integration',
    'PowerShell Desired State Configuration (DSC)',
    'Windows Assessment and Deployment Kit (ADK)',
    'Linux Kickstart und Preseed Unterstützung',
    'UEFI Secure Boot und TPM 2.0 Support',
    'Network Boot via PXE/iPXE'
  ],
  benefits: [
    'Drastische Reduzierung der Hardware-Setupzeiten',
    'Konsistente und standardisierte Systemkonfigurationen',
    'Reduzierte Fehlerquote durch automatisierte Prozesse',
    'Skalierbare Lösung für große Hardware-Rollouts',
    'Compliance mit Unternehmens-Sicherheitsrichtlinien',
    'Unterstützung für Zero-Touch-Deployments'
  ],
  useCases: [
    'Massenrollout neuer Arbeitsplatz-PCs',
    'Server-Deployment für Datacenter-Erweiterungen',
    'Disaster Recovery und System-Wiederherstellung',
    'Hardware-Refresh-Projekte',
    'Standardisierung heterogener IT-Landschaften',
    'Cloud-to-On-Premise Migrationen'
  ],
  systemRequirements: [
    'ACMP Core Installation als Voraussetzung',
    'Windows Server 2016+ mit WDS Rolle',
    'DHCP Server für PXE Boot Unterstützung',
    'Ausreichend Netzwerk-Bandbreite für OS Images',
    'Dedicated Storage für OS Images und Packages',
    'TFTP Server für Boot-Image Distribution',
    'Optional: System Center Configuration Manager'
  ],
  available: true,
  comingSoon: false
};

export default function OSDeploymentPage() {
  return (
    <ModuleLayout
      module={osDeploymentModule}
      modules={acmpStandardModules}
      sidebarTitle="ACMP Standard Module"
      baseUrl="/acmp-standard"
      backUrl="/acmp-standard"
      backLabel="Zurück zur Übersicht"
      currentModule="os-deployment"
    />
  );
}