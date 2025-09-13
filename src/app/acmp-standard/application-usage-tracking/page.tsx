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

const applicationUsageTrackingModule = {
  id: 'application-usage-tracking',
  title: 'Application Usage Tracking',
  description: 'Detaillierte Analyse und Monitoring der Software-Nutzung für optimierte Lizenzierung und Produktivitätssteigerung',
  icon: Activity,
  category: 'Dokumentation & Reporting',
  features: [
    'Real-time Application Usage Monitoring',
    'User Behavior Analytics und Productivity Insights',
    'License Optimization Recommendations',
    'Idle Time und Productivity Tracking',
    'Application Performance Monitoring',
    'Usage Pattern Recognition mit Machine Learning',
    'Software ROI und Cost-per-Usage Analysis',
    'Privacy-compliant User Activity Tracking'
  ],
  detailedDescription: 'ACMP Application Usage Tracking bietet detaillierte Einblicke in die tatsächliche Nutzung von Software-Anwendungen in Ihrer Organisation. Mit intelligenten Analytics optimieren Sie Lizenzkosten, steigern die Produktivität und treffen datenbasierte Entscheidungen über Ihre Software-Landschaft.',
  technicalSpecs: [
    'Agent-basiertes Monitoring für Windows, macOS, Linux',
    'API Integration für SaaS Application Tracking',
    'SQL Server Backend für Usage Analytics',
    'Power BI Integration für Advanced Visualizations',
    'GDPR-konforme User Privacy Controls',
    'Machine Learning für Pattern Recognition',
    'REST API für Business Intelligence Systeme',
    'Real-time Streaming Analytics Pipeline'
  ],
  benefits: [
    'Optimierte Software-Lizenzierung durch Usage-basierte Insights',
    'Identifikation ungenutzter Software für Kosteneinsparungen',
    'Verbesserte Mitarbeiterproduktivität durch Behavior Analytics',
    'Data-driven Entscheidungen für Software-Investments',
    'Compliance mit Software-Audit-Anforderungen',
    'ROI-Transparenz für alle Software-Investitionen'
  ],
  useCases: [
    'Software License Optimization für Enterprise-Umgebungen',
    'Productivity Analysis für Remote-Work-Szenarien',
    'SaaS Subscription Management und Cost Control',
    'Compliance Documentation für Software-Audits',
    'Digital Workplace Analytics und Optimization',
    'Employee Training Needs Assessment basierend auf Usage'
  ],
  systemRequirements: [
    'ACMP Core für zentrale Datensammlung',
    'Endpoint Agents auf allen monitored Devices',
    'SQL Server für Usage Data Warehouse',
    'Network Connectivity für Real-time Data Streaming',
    'Power BI Premium für Advanced Analytics (optional)',
    'GDPR-konforme Data Processing Infrastruktur',
    'Mindestens 32 GB RAM für Analytics-Server'
  ],
  available: true,
  comingSoon: false
};

export default function ApplicationUsageTrackingPage() {
  return (
    <ModuleLayout
      module={applicationUsageTrackingModule}
      modules={acmpStandardModules}
      sidebarTitle="ACMP Standard Module"
      baseUrl="/acmp-standard"
      backUrl="/acmp-standard"
      backLabel="Zurück zur Übersicht"
      currentModule="application-usage-tracking"
    />
  );
}