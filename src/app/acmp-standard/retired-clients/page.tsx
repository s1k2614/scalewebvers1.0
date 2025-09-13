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

const retiredClientsModule = {
  id: 'retired-clients',
  title: 'Retired Clients',
  description: 'Professionelle Verwaltung und Archivierung ausgemusterter IT-Assets mit Compliance und Audit-Nachweisen',
  icon: Archive,
  category: 'Dokumentation & Reporting',
  features: [
    'Asset Retirement Workflow Management',
    'Data Wiping und Destruction Certificates',
    'Compliance Documentation (DSGVO, SOX)',
    'Financial Depreciation Tracking',
    'Environmental Disposal Management',
    'Certificate of Destruction Generation',
    'Audit Trail für Asset Lifecycle',
    'Integration mit Asset Disposal Services'
  ],
  detailedDescription: 'ACMP Retired Clients bietet eine umfassende Lösung für die professionelle Verwaltung ausgemusterter IT-Assets. Von der sicheren Datenvernichtung bis zur Compliance-Dokumentation werden alle Aspekte des Asset-Retirement-Prozesses abgedeckt.',
  technicalSpecs: [
    'NIST 800-88 konforme Data Sanitization',
    'DoD 5220.22-M Data Wiping Standards',
    'Certificate Management für Vernichtungsnachweise',
    'Integration mit Asset Disposal Partnern',
    'Financial Depreciation Calculator',
    'Barcode/RFID Integration für Asset Tracking',
    'Document Management für Compliance-Nachweise',
    'REST API für ERP-System Integration'
  ],
  benefits: [
    'Compliance mit Datenschutz- und Umweltauflagen',
    'Reduzierte Haftungsrisiken durch professionelle Vernichtung',
    'Optimierte Asset-Recovery und Resale-Werte',
    'Vollständige Audit-Trails für Compliance-Nachweise',
    'Automatisierte Depreciation und Financial Reporting',
    'Umweltfreundliche Disposal-Prozesse nach Standards'
  ],
  useCases: [
    'Enterprise Asset Retirement Programmes',
    'DSGVO-konforme Datenvernichtung bei Ausmusterung',
    'Financial Asset Depreciation für Accounting',
    'Environmental Compliance für Elektronik-Disposal',
    'Audit-ready Documentation für Compliance-Prüfungen',
    'Integration mit Leasing-Return-Prozessen'
  ],
  systemRequirements: [
    'ACMP Core für Asset-Lifecycle-Integration',
    'Barcode/RFID Scanner für Asset-Identification',
    'Document Management System für Zertifikate',
    'Integration mit Financial ERP-Systemen',
    'Secure Network für Compliance-Documentation',
    'PDF Generation Engine für Certificates',
    'Database für Historical Asset Records'
  ],
  available: true,
  comingSoon: false
};

export default function RetiredClientsPage() {
  return (
    <ModuleLayout
      module={retiredClientsModule}
      modules={acmpStandardModules}
      sidebarTitle="ACMP Standard Module"
      baseUrl="/acmp-standard"
      backUrl="/acmp-standard"
      backLabel="Zurück zur Übersicht"
      currentModule="retired-clients"
    />
  );
}