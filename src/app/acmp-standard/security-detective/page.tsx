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

const securityDetectiveModule = {
  id: 'security-detective',
  title: 'Security Detective',
  description: 'Erweiterte Sicherheitsanalyse und Threat Detection für proaktiven Schutz Ihrer IT-Infrastruktur',
  icon: ShieldCheck,
  category: 'Security',
  features: [
    'Real-time Threat Detection und Analysis',
    'Advanced Security Analytics mit KI-Unterstützung',
    'Incident Response Workflows',
    'Forensic Analysis und Investigation Tools',
    'Compliance Monitoring (ISO 27001, BSI)',
    'SIEM Integration und Log Correlation',
    'Behavioral Analysis für Anomalie-Erkennung',
    'Automated Response und Containment'
  ],
  detailedDescription: 'ACMP Security Detective bietet fortschrittliche Sicherheitsanalysen und Bedrohungserkennung für Ihre IT-Umgebung. Mit KI-gestützten Algorithmen und umfassenden Forensik-Tools erkennen und analysieren Sie Sicherheitsvorfälle proaktiv.',
  technicalSpecs: [
    'Integration mit führenden SIEM-Systemen (Splunk, QRadar, Sentinel)',
    'Machine Learning für Anomalie-Detection',
    'STIX/TAXII Threat Intelligence Integration',
    'Sigma Rule Engine für Detection Engineering',
    'Windows Event Log und Syslog Parsing',
    'Network Traffic Analysis (NetFlow, sFlow)',
    'YARA Rules für Malware Detection',
    'REST API für Security Orchestration Platforms'
  ],
  benefits: [
    'Früherkennung von Advanced Persistent Threats (APT)',
    'Reduzierte Mean Time to Detection (MTTD)',
    'Automatisierte Incident Response reduziert Schadenspotential',
    'Compliance mit Sicherheitsstandards und Regularien',
    'Verbesserte Forensik-Fähigkeiten bei Sicherheitsvorfällen',
    'Proaktiver Schutz durch Behavioral Analytics'
  ],
  useCases: [
    'APT Detection in Unternehmensumgebungen',
    'Insider Threat Monitoring und Detection',
    'Ransomware Early Warning und Prevention',
    'Compliance Monitoring für kritische Systeme',
    'Forensische Untersuchung nach Sicherheitsvorfällen',
    'Integration in Security Operations Center (SOC)'
  ],
  systemRequirements: [
    'ACMP Core Installation als Voraussetzung',
    'Mindestens 16 GB RAM für Analytics Engine',
    'SSD Storage für Log-Datenbank (min. 500 GB)',
    'Network Access zu überwachenden Systemen',
    'SIEM Integration (Splunk, QRadar, Azure Sentinel)',
    'Threat Intelligence Feeds (optional)',
    'Dedicated CPU für Machine Learning Workloads'
  ],
  available: true,
  comingSoon: false
};

export default function SecurityDetectivePage() {
  return (
    <ModuleLayout
      module={securityDetectiveModule}
      modules={acmpStandardModules}
      sidebarTitle="ACMP Standard Module"
      baseUrl="/acmp-standard"
      backUrl="/acmp-standard"
      backLabel="Zurück zur Übersicht"
      currentModule="security-detective"
    />
  );
}