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

const helpdeskModule = {
  id: 'helpdesk',
  title: 'Helpdesk',
  description: 'Integrierte Service Desk Lösung mit ITIL-konformen Prozessen und nahtloser ACMP-Integration',
  icon: Users,
  category: 'Dokumentation & Reporting',
  features: [
    'ITIL-konforme Incident und Change Management',
    'Self-Service Portal für Endbenutzer',
    'Automated Ticket Routing und Escalation',
    'Knowledge Base Integration',
    'SLA Management und Tracking',
    'Remote Support Integration (TeamViewer, RDP)',
    'Asset-basierte Ticket-Zuordnung',
    'Multi-Channel Support (Email, Chat, Portal)'
  ],
  detailedDescription: 'ACMP Helpdesk bietet eine vollständig integrierte Service Desk Lösung, die nahtlos mit der ACMP Asset-Datenbank zusammenarbeitet. Mit ITIL-konformen Prozessen und umfassenden Self-Service-Funktionen optimieren Sie Ihre IT-Service-Delivery.',
  technicalSpecs: [
    'ITIL v4 Framework Compliance',
    'REST API für Drittanbieter-Integrationen',
    'Active Directory SSO Integration',
    'Email Gateway für automatische Ticket-Erstellung',
    'Workflow Engine für benutzerdefinierte Prozesse',
    'Reporting Engine mit Crystal Reports',
    'Mobile App für iOS und Android',
    'Integration mit Microsoft Teams und Slack'
  ],
  benefits: [
    'Reduzierte Lösungszeiten durch Asset-Kontext',
    'Verbesserte Endnutzer-Zufriedenheit durch Self-Service',
    'ITIL-konforme Prozesse für professionelles Service Management',
    'Zentrale Dokumentation aller IT-Services',
    'Automatisierte Workflows reduzieren manuellen Aufwand',
    'Umfassende SLA-Überwachung und Compliance-Nachweise'
  ],
  useCases: [
    'Enterprise IT Service Desk Operations',
    'Multi-Tenant Managed Service Provider Umgebungen',
    'ITIL-konforme Change Management Prozesse',
    'Self-Service IT für große Organisationen',
    'Integration mit bestehenden ITSM-Landschaften',
    'Compliance-dokumentation für ISO 20000'
  ],
  systemRequirements: [
    'ACMP Core für Asset-Integration',
    'SQL Server für Ticket-Database',
    'Web Server (IIS) für Self-Service Portal',
    'SMTP Server für Email-Integration',
    'Active Directory für Single Sign-On',
    'Mindestens 8 GB RAM für Helpdesk-Server',
    'SSL-Zertifikat für sichere Portal-Kommunikation'
  ],
  available: true,
  comingSoon: false
};

export default function HelpdeskPage() {
  return (
    <ModuleLayout
      module={helpdeskModule}
      modules={acmpStandardModules}
      sidebarTitle="ACMP Standard Module"
      baseUrl="/acmp-standard"
      backUrl="/acmp-standard"
      backLabel="Zurück zur Übersicht"
      currentModule="helpdesk"
    />
  );
}