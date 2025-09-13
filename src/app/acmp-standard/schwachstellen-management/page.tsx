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

const vulnerabilityManagementModule = {
  id: 'schwachstellen-management',
  title: 'Schwachstellen Management',
  description: 'Proaktive Vulnerability Detection, Assessment und Remediation für umfassenden IT-Security-Schutz',
  icon: AlertTriangle,
  category: 'Security',
  features: [
    'Automated Vulnerability Scanning und Detection',
    'CVE Database Integration mit Real-time Updates',
    'Risk Assessment und CVSS Scoring',
    'Remediation Workflow Management',
    'Zero-Day Threat Intelligence Integration',
    'Compliance Mapping (ISO 27001, NIST, BSI)',
    'Asset-based Vulnerability Correlation',
    'Executive Dashboards mit Risk Metrics'
  ],
  detailedDescription: 'ACMP Schwachstellen Management bietet eine umfassende Plattform für die Identifikation, Bewertung und Behebung von Sicherheitslücken in Ihrer IT-Infrastruktur. Mit integrierten Threat Intelligence Feeds und automatisierten Remediation-Workflows minimieren Sie Ihr Cyber-Risiko proaktiv.',
  technicalSpecs: [
    'OpenVAS und Nessus Scanner Integration',
    'CVE und NVD Database Synchronisation',
    'CVSS 3.1 und EPSS Scoring Algorithmen',
    'STIX/TAXII Threat Intelligence Feeds',
    'PowerShell und Ansible Remediation Scripts',
    'SIEM Integration für Security Event Correlation',
    'REST API für Security Orchestration Platforms',
    'Machine Learning für False Positive Reduction'
  ],
  benefits: [
    'Reduzierte Attack Surface durch proaktive Vulnerability-Behandlung',
    'Priorisierte Remediation basierend auf Business Impact',
    'Automatisierte Compliance-Nachweise für Audits',
    'Verkürzte Mean Time to Remediation (MTTR)',
    'Verbesserte Security Posture durch kontinuierliches Monitoring',
    'ROI-optimierte Security-Investitionen durch Risk-basierte Priorisierung'
  ],
  useCases: [
    'Enterprise Vulnerability Management Programme',
    'Critical Infrastructure Protection (KRITIS)',
    'PCI DSS und ISO 27001 Compliance Monitoring',
    'Zero-Day Vulnerability Response Orchestration',
    'Third-Party Risk Assessment und Vendor Management',
    'Security Operations Center (SOC) Integration'
  ],
  systemRequirements: [
    'ACMP Core als zentrale Management-Plattform',
    'Vulnerability Scanner (OpenVAS, Nessus, Qualys)',
    'SQL Server für Vulnerability Database',
    'Network Access zu allen zu scannenden Assets',
    'Threat Intelligence Feed Subscriptions',
    'PowerShell 5.1+ für Remediation Automation',
    'SIEM Integration (Splunk, QRadar, Sentinel)'
  ],
  available: true,
  comingSoon: false
};

export default function SchwachstellenManagementPage() {
  return (
    <ModuleLayout
      module={vulnerabilityManagementModule}
      modules={acmpStandardModules}
      sidebarTitle="ACMP Standard Module"
      baseUrl="/acmp-standard"
      backUrl="/acmp-standard"
      backLabel="Zurück zur Übersicht"
      currentModule="schwachstellen-management"
    />
  );
}