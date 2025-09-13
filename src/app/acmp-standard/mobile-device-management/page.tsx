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

const mdmModule = {
  id: 'mobile-device-management',
  title: 'Mobile Device Management',
  description: 'Umfassende Verwaltung mobiler Endgeräte im Unternehmen mit Sicherheitsrichtlinien und App-Management',
  icon: Smartphone,
  category: 'Inventory & Manage',
  features: [
    'Device Enrollment für iOS, Android und Windows Mobile',
    'Zentrale Sicherheitsrichtlinien und Compliance',
    'Enterprise App Store und App-Verteilung',
    'Remote Wipe und Device Lock Funktionen',
    'VPN und WiFi-Profile Management',
    'Certificate Management für mobile Geräte',
    'Geofencing und Location-based Policies',
    'BYOD (Bring Your Own Device) Unterstützung'
  ],
  detailedDescription: 'Das ACMP Mobile Device Management ermöglicht die sichere und effiziente Verwaltung aller mobilen Endgeräte in Ihrem Unternehmen. Von der automatischen Geräteregistrierung bis hin zur Durchsetzung von Sicherheitsrichtlinien - behalten Sie die Kontrolle über Ihre mobile Flotte.',
  technicalSpecs: [
    'Apple Push Notification Service (APNs) Integration',
    'Google Firebase Cloud Messaging (FCM) Support',
    'Microsoft Intune und Exchange ActiveSync Kompatibilität',
    'SCEP (Simple Certificate Enrollment Protocol) Support',
    'LDAP/Active Directory Integration für Benutzer-Authentifizierung',
    'REST-API für Custom App Integration',
    'On-Premise und Cloud-Deployment Optionen',
    'Apple Business Manager und Google Zero-Touch Integration'
  ],
  benefits: [
    'Erhöhte Datensicherheit durch zentrale Richtlinien',
    'Reduzierte IT-Kosten durch automatisierte Verwaltung',
    'Verbesserte Produktivität durch einheitliche App-Bereitstellung',
    'Compliance mit Datenschutzbestimmungen (DSGVO)',
    'Schnelle Reaktion bei Geräteverlust oder -diebstahl',
    'Unterstützung für moderne Arbeitsplatz-Modelle (BYOD, Remote Work)'
  ],
  useCases: [
    'Sicheres Onboarding von Mitarbeiter-Smartphones',
    'Verwaltung von Firmen-iPads im Außendienst',
    'BYOD-Programme mit Container-Technologie',
    'Kiosk-Mode für Einzelhandels- und Logistik-Terminals',
    'Compliance-Management für regulierte Branchen',
    'Remote-Wipe bei Mitarbeiteraustritt oder Geräteverlust'
  ],
  systemRequirements: [
    'ACMP Core Installation als Voraussetzung',
    'Apple Push Notification Service Zertifikat',
    'Google Firebase Projekt für Android-Geräte',
    'SSL-Zertifikat für Device Enrollment Portal',
    'Active Directory für Benutzer-Authentifizierung',
    'Mindestens 4 GB RAM zusätzlich zum Core System',
    'Internetverbindung für Push-Notification Services'
  ],
  available: true,
  comingSoon: false
};

export default function MobileDeviceManagementPage() {
  return (
    <ModuleLayout
      module={mdmModule}
      modules={acmpStandardModules}
      sidebarTitle="ACMP Standard Module"
      baseUrl="/acmp-standard"
      backUrl="/acmp-standard"
      backLabel="Zurück zur Übersicht"
      currentModule="mobile-device-management"
    />
  );
}