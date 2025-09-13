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

const reportsModule = {
  id: 'reports',
  title: 'Reports',
  description: 'Umfassende Business Intelligence und Reporting-Plattform mit erweiterten Analytics und Compliance-Berichten',
  icon: BarChart3,
  category: 'Dokumentation & Reporting',
  features: [
    'Executive Dashboards mit Real-time KPIs',
    'Compliance Reports (ISO 27001, DSGVO, BSI)',
    'Custom Report Builder mit Drag & Drop',
    'Automated Report Scheduling und Distribution',
    'Business Intelligence Integration (Power BI, Tableau)',
    'Data Export in verschiedene Formate (PDF, Excel, CSV)',
    'Historical Trend Analysis und Forecasting',
    'Role-based Report Access und Security'
  ],
  detailedDescription: 'ACMP Reports bietet eine umfassende Business Intelligence Plattform für die Analyse und Visualisierung Ihrer IT-Asset- und Security-Daten. Mit vorgefertigten Compliance-Reports und flexiblen Custom-Dashboards erhalten Sie alle notwendigen Einblicke für strategische Entscheidungen.',
  technicalSpecs: [
    'Crystal Reports Engine für professionelle Berichte',
    'SQL Server Reporting Services (SSRS) Integration',
    'Power BI Connector für Advanced Analytics',
    'REST API für Custom Report Applications',
    'OLAP Cube Support für multidimensionale Analysen',
    'Scheduled Report Engine mit Email-Distribution',
    'Role-based Security Model',
    'Mobile-responsive Dashboard Framework'
  ],
  benefits: [
    'Datengetriebene Entscheidungen durch umfassende Analytics',
    'Automatisierte Compliance-Nachweise für Audits',
    'Verbesserte ROI-Transparenz für IT-Investitionen',
    'Proaktive Trend-Erkennung und Capacity Planning',
    'Reduzierter manueller Aufwand durch Automation',
    'Executive-ready Dashboards für C-Level Reporting'
  ],
  useCases: [
    'Quarterly Business Reviews mit IT-Metriken',
    'Compliance Audits (ISO 27001, SOX, DSGVO)',
    'IT Asset Lifecycle und ROI Analysis',
    'Security Posture Reporting für Management',
    'Capacity Planning und Budget-Justification',
    'Vendor Performance und Cost Analysis'
  ],
  systemRequirements: [
    'ACMP Core als Datenquelle',
    'SQL Server für Data Warehouse',
    'Crystal Reports Runtime für Report-Generation',
    'Web Server (IIS) für Dashboard-Hosting',
    'Power BI Premium für Advanced Analytics (optional)',
    'SMTP Server für automatische Report-Distribution',
    'Mindestens 16 GB RAM für BI-Workloads'
  ],
  available: true,
  comingSoon: false
};

export default function ReportsPage() {
  return (
    <ModuleLayout
      module={reportsModule}
      modules={acmpStandardModules}
      sidebarTitle="ACMP Standard Module"
      baseUrl="/acmp-standard"
      backUrl="/acmp-standard"
      backLabel="Zurück zur Übersicht"
      currentModule="reports"
    />
  );
}