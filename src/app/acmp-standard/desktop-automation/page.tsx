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

const desktopAutomationModule = {
  id: 'desktop-automation',
  title: 'Desktop Automation',
  description: 'Automatisierte Software-Verteilung und Routineaufgaben für Desktop-Umgebungen',
  icon: Monitor,
  category: 'Control & Automate',
  features: [
    'Automatisierte Software-Verteilung',
    'Silent Installation und Deinstallation',
    'Script-basierte Automation (PowerShell, VBScript)',
    'Scheduling von Deployment-Tasks',
    'Dependency Management zwischen Paketen',
    'Rollback-Funktionen bei fehlgeschlagenen Installationen',
    'Wake-on-LAN für ausgeschaltete Clients',
    'Bandbreiten-Management für große Downloads'
  ],
  detailedDescription: 'ACMP Desktop Automation automatisiert die Verteilung von Software und die Ausführung von Routineaufgaben auf Desktop-Computern. Reduzieren Sie den manuellen Aufwand für Software-Rollouts und stellen Sie sicher, dass alle Arbeitsplätze mit der benötigten Software ausgestattet sind.',
  technicalSpecs: [
    'MSI, EXE und App-V Package Support',
    'PowerShell DSC (Desired State Configuration) Integration',
    'Windows Installer und ClickOnce Deployment',
    'SCCM und Intune Integration für Hybrid-Umgebungen',
    'WMI und CIM für Remote-System-Information',
    'Event-driven Execution basierend auf System-Events',
    'Peer-to-Peer Distribution für Bandwidth-Optimization',
    'Advanced Logging und Real-time Monitoring'
  ],
  benefits: [
    'Reduzierung der Desktop-Support-Tickets',
    'Konsistente Software-Umgebungen auf allen Arbeitsplätzen',
    'Schnellere Software-Rollouts ohne Benutzereingriff',
    'Automatisierte Compliance durch standardisierte Installationen',
    'Kosteneinsparungen durch reduzierte manuelle Arbeit',
    'Verbesserte Sicherheit durch automatische Updates'
  ],
  useCases: [
    'Unternehmensweite Office 365 Rollouts',
    'Automatische Installation von Security-Updates',
    'Nightly Maintenance Scripts für Desktop-Optimierung',
    'Software-Migration zwischen verschiedenen Versionen',
    'Konfiguration neuer Arbeitsplätze nach Corporate Standards',
    'Emergency Patches und Hotfixes außerhalb der Geschäitszeiten'
  ],
  systemRequirements: [
    'ACMP Core Installation als Voraussetzung',
    'Windows 10/11 oder Windows Server 2016+ Clients',
    'PowerShell 5.1+ auf allen Target-Systemen',
    'Administrative Rechte auf Ziel-Computern',
    'SMB-Shares oder HTTP/HTTPS für Package-Distribution',
    'Windows Management Instrumentation (WMI) aktiviert',
    'Ausreichend Netzwerk-Bandbreite für Software-Pakete'
  ],
  available: true,
  comingSoon: false
};

export default function DesktopAutomationPage() {
  return (
    <ModuleLayout
      module={desktopAutomationModule}
      modules={acmpStandardModules}
      sidebarTitle="ACMP Standard Module"
      baseUrl="/acmp-standard"
      backUrl="/acmp-standard"
      backLabel="Zurück zur Übersicht"
      currentModule="desktop-automation"
    />
  );
}