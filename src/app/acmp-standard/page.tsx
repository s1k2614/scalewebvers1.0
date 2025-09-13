'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import {
  Database, Monitor, Settings, Shield, Users, BarChart3, ArrowRight, CheckCircle,
  Package, Download, Zap, Command, Layers, HardDrive, Wifi, Lock, Play,
  Terminal, Code, ChevronRight, Eye, Cpu, Network, Server, Cloud, UserPlus, Key,
  X, TrendingUp, ShieldCheck, AlertTriangle, UserX, Clock, Timer, MousePointer, ArrowDown,
  Calendar, FileText, Activity, Target, Gauge, Smartphone, Laptop, MonitorSpeaker,
  Building, MapPin, Printer, RefreshCw, Archive, Search, Filter, Star,
  Wrench, Sliders, RotateCcw, CheckSquare, XSquare, Plus, Minus, UserMinus, Mail, MessageSquare, Send, Edit, Bell
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function ACMP2Page() {
  const [activeModule, setActiveModule] = useState<string>('');
  const [selectedCommand, setSelectedCommand] = useState<any>(null);

  // ALLE ACMP2 MODULES - VERFÜGBARE UND COMING SOON
  const modules = [
    // VERFÜGBARE MODULE
    {
      id: 'asset-management',
      name: 'Asset Management',
      description: 'Umfassende Verwaltung aller IT-Assets',
      icon: Package,
      color: 'from-scaleit-gray to-scaleit-black',
      comingSoon: false,
      features: [
        'Hardware-Inventar',
        'Software-Lizenzen',
        'Kostenverfolgung',
        'Lifecycle-Management',
        'Compliance-Reporting',
        'Automatische Erkennung'
      ]
    },
    {
      id: 'core',
      name: 'ACMP Core',
      description: 'Die Grundlage für alle ACMP Module - zentrale Verwaltungsplattform',
      icon: Database,
      color: 'from-scaleit-red to-scaleit-purple',
      comingSoon: false,
      features: [
        'Zentrale Verwaltung',
        'Web-basierte Oberfläche',
        'Multi-Tenant fähig',
        'Reporting-Grundlagen',
        'API-Schnittstellen'
      ]
    },
    {
      id: 'lizenzmanagement',
      name: 'Lizenzmanagement',
      description: 'Software Asset Management mit Audit-Sicherheit',
      icon: Shield,
      color: 'from-scaleit-purple to-scaleit-black',
      comingSoon: false,
      features: [
        'License Compliance',
        'Audit-Vorbereitung',
        'Cost Optimization',
        'Vendor Management',
        'Usage Tracking'
      ]
    },
    {
      id: 'mobile-device-management',
      name: 'Mobile Device Management',
      description: 'Verwaltung mobiler Endgeräte im Unternehmen',
      icon: Smartphone,
      color: 'from-scaleit-black to-scaleit-gray',
      comingSoon: false,
      features: [
        'Device Enrollment',
        'Security Policies',
        'App Management',
        'Remote Wipe',
        'Compliance Monitoring'
      ]
    },
    {
      id: 'automate',
      name: 'ACMP Automate',
      description: 'Automatisierte Prozesse und Workflows',
      icon: Zap,
      color: 'from-scaleit-red to-scaleit-gray',
      comingSoon: false,
      features: [
        'Workflow Automation',
        'Script Execution',
        'Task Scheduling',
        'Process Monitoring',
        'Error Handling'
      ]
    },
    {
      id: 'desktop-automation',
      name: 'Desktop Automation',
      description: 'Automatisiert Routineaufgaben und verteilt Software',
      icon: Monitor,
      color: 'from-scaleit-purple to-scaleit-red',
      comingSoon: false,
      features: [
        'Software-Verteilung',
        'Script-Automation',
        'Scheduling',
        'Dependency Management',
        'Rollback-Funktionen'
      ]
    },
    {
      id: 'os-deployment',
      name: 'OS Deployment',
      description: 'Automatisierte Betriebssystem-Installation und -Konfiguration',
      icon: HardDrive,
      color: 'from-scaleit-gray to-scaleit-red',
      comingSoon: false,
      features: [
        'OS Installation',
        'Driver Management',
        'Configuration Templates',
        'Unattended Setup',
        'Post-Install Tasks'
      ]
    },
    {
      id: 'security-detective',
      name: 'Security Detective',
      description: 'Erweiterte Sicherheitsanalyse und Threat Detection',
      icon: ShieldCheck,
      color: 'from-scaleit-red to-scaleit-black',
      comingSoon: false,
      features: [
        'Threat Detection',
        'Security Analytics',
        'Incident Response',
        'Forensic Analysis',
        'Compliance Monitoring'
      ]
    },
    {
      id: 'managed-software',
      name: 'Managed Software',
      description: 'Automatisches Third-Party Software Patching',
      icon: Download,
      color: 'from-scaleit-black to-scaleit-purple',
      comingSoon: false,
      features: [
        '3rd Party Patching',
        'Qualitätsgesicherte Pakete',
        'Vulnerability Management',
        'Zero-Day Protection',
        'Automated Testing'
      ]
    },
    {
      id: 'patchmanagement-cawum',
      name: 'Patchmanagement CAWUM',
      description: 'Zentrales Patch-Management für alle Systeme',
      icon: Wrench,
      color: 'from-scaleit-purple to-scaleit-gray',
      comingSoon: false,
      features: [
        'Patch Deployment',
        'Vulnerability Scanning',
        'Compliance Reporting',
        'Rollback Capability',
        'Testing Environment'
      ]
    },
    {
      id: 'schwachstellen-management',
      name: 'Schwachstellen Management',
      description: 'Identifikation und Behebung von Sicherheitslücken',
      icon: AlertTriangle,
      color: 'from-scaleit-red to-scaleit-purple',
      comingSoon: false,
      features: [
        'Vulnerability Scanning',
        'Risk Assessment',
        'Patch Prioritization',
        'Compliance Reporting',
        'Remediation Tracking'
      ]
    },
    {
      id: 'helpdesk',
      name: 'Helpdesk',
      description: 'Integriertes Helpdesk-System für IT-Support',
      icon: Users,
      color: 'from-scaleit-gray to-scaleit-purple',
      comingSoon: false,
      features: [
        'Ticket Management',
        'Knowledge Base',
        'Self-Service Portal',
        'SLA Management',
        'Reporting & Analytics'
      ]
    },
    {
      id: 'reports',
      name: 'Reports',
      description: 'Umfassende Berichterstattung und Analytics',
      icon: BarChart3,
      color: 'from-scaleit-purple to-scaleit-red',
      comingSoon: false,
      features: [
        'Custom Reports',
        'Dashboard Creation',
        'Data Visualization',
        'Scheduled Reports',
        'Export Functions'
      ]
    },
    {
      id: 'retired-clients',
      name: 'Retired Clients',
      description: 'Verwaltung ausgemusterter Clients und deren Daten',
      icon: Archive,
      color: 'from-scaleit-black to-scaleit-red',
      comingSoon: false,
      features: [
        'Client Decommissioning',
        'Data Archiving',
        'License Recovery',
        'Compliance Tracking',
        'Asset Disposal'
      ]
    },
    {
      id: 'application-usage-tracking',
      name: 'Application Usage Tracking',
      description: 'Verfolgung der Software-Nutzung im Unternehmen',
      icon: Activity,
      color: 'from-scaleit-red to-scaleit-gray',
      comingSoon: false,
      features: [
        'Usage Monitoring',
        'License Optimization',
        'Cost Analysis',
        'Compliance Reporting',
        'Usage Analytics'
      ]
    }
  ];

  const handleModuleClick = (moduleId: string) => {
    setActiveModule(activeModule === moduleId ? '' : moduleId);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold bg-gradient-to-r from-scaleit-red to-scaleit-purple bg-clip-text text-transparent mb-8">
              ACMP2 - Advanced Client Management Platform
            </h1>
            <p className="text-2xl text-scaleit-gray mb-8 max-w-4xl mx-auto">
              Die nächste Generation der IT-Verwaltung mit {modules.filter(m => !m.comingSoon).length} professionellen Modulen
            </p>
            <div className="flex items-center justify-center space-x-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-scaleit-red">{modules.filter(m => !m.comingSoon).length}</div>
                <div className="text-scaleit-gray">Verfügbare Module</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-scaleit-purple">15</div>
                <div className="text-scaleit-gray">Gesamtmodule</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-scaleit-black">100%</div>
                <div className="text-scaleit-gray">ScaleITS CI</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - Modules */}
            <div className="lg:col-span-3">
              <div className="space-y-6">
                {/* Render modules in rows of 3 */}
                {Array.from({ length: Math.ceil(modules.filter(m => !m.comingSoon).length / 3) }, (_, rowIndex) => {
                  const availableModules = modules.filter(m => !m.comingSoon);
                  const rowModules = availableModules.slice(rowIndex * 3, (rowIndex + 1) * 3);
                  const activeModuleInRow = rowModules.find(module => module.id === activeModule);

                  return (
                <div key={rowIndex} className="space-y-6">
                  {/* Row of modules */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {rowModules.map((module, index) => {
                      const IconComponent = module.icon;
                      const isActive = activeModule === module.id;
                      const globalIndex = rowIndex * 3 + index;

                      return (
                        <motion.div
                          key={module.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: globalIndex * 0.1 }}
                          onClick={() => handleModuleClick(module.id)}
                          className={`relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-105 cursor-pointer bg-gradient-to-r ${module.color} ${
                            isActive
                              ? 'ring-4 ring-scaleit-red shadow-2xl'
                              : 'hover:shadow-xl'
                          }`}
                        >
                          <div className="text-white">
                            <IconComponent className="w-12 h-12 mx-auto mb-4 text-white" />
                            <h3 className="text-xl font-bold mb-3">{module.name}</h3>
                            <p className="text-sm opacity-90 text-white mb-4">
                              {module.description}
                            </p>
                            <div className="absolute top-2 right-2 bg-green-500/90 text-white text-xs px-2 py-1 rounded-full">
                              Verfügbar
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Module Details for this row */}
                  {activeModuleInRow && (
                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: -20 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="overflow-hidden"
                      >
                        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                          <div className="flex items-center mb-6">
                            <div className={`p-4 rounded-2xl bg-gradient-to-r ${activeModuleInRow.color} mr-6`}>
                              {React.createElement(activeModuleInRow.icon, { className: "w-8 h-8 text-white" })}
                            </div>
                            <div className="flex-grow">
                              <h3 className="text-3xl font-bold text-scaleit-black mb-2">{activeModuleInRow.name}</h3>
                              <p className="text-lg text-scaleit-gray">{activeModuleInRow.description}</p>
                            </div>
                            <button
                              onClick={() => setActiveModule('')}
                              className="ml-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                            >
                              <X className="w-6 h-6 text-scaleit-gray" />
                            </button>
                          </div>

                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Features */}
                            <div>
                              <h4 className="text-xl font-semibold text-scaleit-black mb-4 flex items-center">
                                <CheckCircle className="w-5 h-5 text-scaleit-red mr-2" />
                                Features
                              </h4>
                              <ul className="space-y-2">
                                {activeModuleInRow.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-center text-scaleit-gray">
                                    <CheckCircle className="w-4 h-4 text-scaleit-red mr-3 flex-shrink-0" />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Module Visualization */}
                            <div>
                              <h4 className="text-xl font-semibold text-scaleit-black mb-4 flex items-center">
                                <Eye className="w-5 h-5 text-scaleit-red mr-2" />
                                Funktionsweise
                              </h4>
                              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 min-h-[200px] flex items-center justify-center">
                                {/* Individual Module Graphics */}
                                {activeModuleInRow.id === 'asset-management' && (
                                  <div className="text-center space-y-4">
                                    {/* Simplified Asset Overview */}
                                    <div className="grid grid-cols-2 gap-4">
                                      <div className="p-3 bg-purple-100 rounded-lg">
                                        <Laptop className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                                        <div className="text-xs text-purple-700 font-medium">156 Laptops</div>
                                      </div>
                                      <div className="p-3 bg-blue-100 rounded-lg">
                                        <Server className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                                        <div className="text-xs text-blue-700 font-medium">12 Server</div>
                                      </div>
                                      <div className="p-3 bg-green-100 rounded-lg">
                                        <Printer className="w-6 h-6 text-green-600 mx-auto mb-1" />
                                        <div className="text-xs text-green-700 font-medium">43 Drucker</div>
                                      </div>
                                      <div className="p-3 bg-orange-100 rounded-lg">
                                        <Smartphone className="w-6 h-6 text-orange-600 mx-auto mb-1" />
                                        <div className="text-xs text-orange-700 font-medium">89 Mobile</div>
                                      </div>
                                    </div>

                                    {/* Key Features */}
                                    <div className="flex justify-center space-x-4 text-xs">
                                      <div className="flex items-center text-blue-600">
                                        <Shield className="w-3 h-3 mr-1" />
                                        Lizenzen
                                      </div>
                                      <div className="flex items-center text-green-600">
                                        <Target className="w-3 h-3 mr-1" />
                                        Tracking
                                      </div>
                                      <div className="flex items-center text-purple-600">
                                        <Activity className="w-3 h-3 mr-1" />
                                        Reports
                                      </div>
                                    </div>

                                    <p className="text-xs text-scaleit-gray font-medium">Vollständige Inventarisierung aller IT-Assets</p>
                                  </div>
                                )}

                                {activeModuleInRow.id === 'core' && (
                                  <div className="text-center space-y-6">
                                    {/* Core Architecture */}
                                    <div className="relative">
                                      <div className="p-6 bg-gradient-to-r from-scaleit-red to-scaleit-purple rounded-full shadow-2xl">
                                        <Database className="w-12 h-12 text-white" />
                                      </div>
                                      <div className="text-sm text-white bg-scaleit-black rounded-full px-3 py-1 mt-2">ACMP Core</div>
                                    </div>

                                    {/* Connected Modules */}
                                    <div className="grid grid-cols-3 gap-4">
                                      <div className="p-3 bg-blue-100 rounded-lg">
                                        <Shield className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                                        <div className="text-xs text-blue-700">Security</div>
                                      </div>
                                      <div className="p-3 bg-green-100 rounded-lg">
                                        <Package className="w-6 h-6 text-green-600 mx-auto mb-1" />
                                        <div className="text-xs text-green-700">Assets</div>
                                      </div>
                                      <div className="p-3 bg-purple-100 rounded-lg">
                                        <Users className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                                        <div className="text-xs text-purple-700">Users</div>
                                      </div>
                                    </div>

                                    <p className="text-sm text-scaleit-gray font-medium">Zentrale Plattform für alle ACMP Module</p>
                                  </div>
                                )}

                                {activeModuleInRow.id === 'lizenzmanagement' && (
                                  <div className="text-center space-y-6">
                                    {/* License Management Dashboard */}
                                    <div className="space-y-4">
                                      <div className="bg-white rounded-lg p-4 shadow-sm">
                                        <div className="text-sm font-bold text-gray-700 mb-2">Lizenz-Status</div>
                                        <div className="grid grid-cols-2 gap-4 text-xs">
                                          <div className="text-center">
                                            <div className="text-lg font-bold text-green-600">85%</div>
                                            <div className="text-gray-500">Genutzt</div>
                                          </div>
                                          <div className="text-center">
                                            <div className="text-lg font-bold text-blue-600">15%</div>
                                            <div className="text-gray-500">Verfügbar</div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="bg-white rounded-lg p-4 shadow-sm">
                                        <div className="text-sm font-bold text-gray-700 mb-2">Compliance</div>
                                        <div className="flex items-center justify-center">
                                          <CheckCircle className="w-8 h-8 text-green-500 mr-2" />
                                          <span className="text-sm text-green-700">Audit-sicher</span>
                                        </div>
                                      </div>
                                    </div>

                                    <p className="text-sm text-scaleit-gray font-medium">Software Asset Management mit voller Compliance</p>
                                  </div>
                                )}

                                {activeModuleInRow.id === 'mobile-device-management' && (
                                  <div className="text-center space-y-6">
                                    {/* Mobile Device Overview */}
                                    <div className="space-y-4">
                                      <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 bg-blue-100 rounded-lg">
                                          <Smartphone className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                                          <div className="text-sm font-medium text-blue-700">89 Smartphones</div>
                                          <div className="text-xs text-blue-600">iOS/Android</div>
                                        </div>
                                        <div className="p-4 bg-green-100 rounded-lg">
                                          <Laptop className="w-8 h-8 text-green-600 mx-auto mb-2" />
                                          <div className="text-sm font-medium text-green-700">156 Tablets</div>
                                          <div className="text-xs text-green-600">Unternehmensgeräte</div>
                                        </div>
                                      </div>

                                      <div className="bg-white rounded-lg p-4 shadow-sm">
                                        <div className="text-sm font-bold text-gray-700 mb-2">Security Status</div>
                                        <div className="flex justify-center space-x-2">
                                          <div className="flex items-center text-green-600 text-xs">
                                            <Lock className="w-3 h-3 mr-1" />
                                            Verschlüsselt
                                          </div>
                                          <div className="flex items-center text-blue-600 text-xs">
                                            <Shield className="w-3 h-3 mr-1" />
                                            Policy Compliant
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <p className="text-sm text-scaleit-gray font-medium">Umfassende Verwaltung mobiler Endgeräte</p>
                                  </div>
                                )}

                                {activeModuleInRow.id === 'automate' && (
                                  <div className="text-center space-y-6">
                                    {/* Automation Workflow */}
                                    <div className="space-y-4">
                                      <div className="flex items-center justify-center space-x-3">
                                        <div className="p-3 bg-blue-500 rounded-lg shadow-lg">
                                          <Play className="w-6 h-6 text-white" />
                                        </div>
                                        <ArrowRight className="w-6 h-6 text-scaleit-gray" />
                                        <div className="p-3 bg-green-500 rounded-lg shadow-lg">
                                          <Zap className="w-6 h-6 text-white" />
                                        </div>
                                        <ArrowRight className="w-6 h-6 text-scaleit-gray" />
                                        <div className="p-3 bg-purple-500 rounded-lg shadow-lg">
                                          <CheckCircle className="w-6 h-6 text-white" />
                                        </div>
                                      </div>

                                      <div className="bg-white rounded-lg p-4 shadow-sm">
                                        <div className="text-sm font-bold text-gray-700 mb-2">Automatisierte Prozesse</div>
                                        <div className="grid grid-cols-2 gap-2 text-xs">
                                          <div className="flex items-center text-blue-600">
                                            <CheckSquare className="w-3 h-3 mr-1" />
                                            Softwareverteilung
                                          </div>
                                          <div className="flex items-center text-green-600">
                                            <CheckSquare className="w-3 h-3 mr-1" />
                                            Systemupdates
                                          </div>
                                          <div className="flex items-center text-purple-600">
                                            <CheckSquare className="w-3 h-3 mr-1" />
                                            Backup-Routinen
                                          </div>
                                          <div className="flex items-center text-orange-600">
                                            <CheckSquare className="w-3 h-3 mr-1" />
                                            Compliance-Checks
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <p className="text-sm text-scaleit-gray font-medium">Automatisierte Workflows für maximale Effizienz</p>
                                  </div>
                                )}

                                {activeModuleInRow.id === 'desktop-automation' && (
                                  <div className="text-center space-y-6">
                                    {/* Desktop Automation Interface */}
                                    <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl p-4">
                                      <div className="text-sm font-bold text-purple-700 mb-3">Desktop Automation</div>

                                      {/* Automation Tasks */}
                                      <div className="space-y-3">
                                        <div className="bg-white rounded-lg p-3 shadow-sm">
                                          <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs font-medium text-gray-700">Softwareverteilung</span>
                                            <div className="flex items-center text-green-600 text-xs">
                                              <CheckCircle className="w-3 h-3 mr-1" />
                                              Aktiv
                                            </div>
                                          </div>
                                          <div className="w-full bg-gray-200 rounded-full h-1.5">
                                            <div className="bg-green-500 h-1.5 rounded-full animate-pulse" style={{width: '78%'}}></div>
                                          </div>
                                        </div>

                                        <div className="bg-white rounded-lg p-3 shadow-sm">
                                          <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs font-medium text-gray-700">Systemupdates</span>
                                            <div className="flex items-center text-blue-600 text-xs">
                                              <Clock className="w-3 h-3 mr-1" />
                                              Geplant
                                            </div>
                                          </div>
                                          <div className="w-full bg-gray-200 rounded-full h-1.5">
                                            <div className="bg-blue-500 h-1.5 rounded-full" style={{width: '45%'}}></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <p className="text-sm text-scaleit-gray font-medium">Automatisierte Desktop-Verwaltung und Softwareverteilung</p>
                                  </div>
                                )}

                                {activeModuleInRow.id === 'os-deployment' && (
                                  <div className="text-center space-y-6">
                                    {/* OS Deployment Process */}
                                    <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-xl p-4">
                                      <div className="text-sm font-bold text-cyan-700 mb-3">OS Deployment Pipeline</div>

                                      {/* Deployment Steps */}
                                      <div className="space-y-4">
                                        <div className="flex items-center justify-center space-x-3">
                                          <div className="relative">
                                            <div className="p-3 bg-gray-500 rounded-lg shadow-lg">
                                              <HardDrive className="w-8 h-8 text-white" />
                                            </div>
                                            <div className="absolute -bottom-2 -right-2 bg-red-500 rounded-full px-2 py-1 text-xs text-white">
                                              Target
                                            </div>
                                          </div>
                                          <div className="flex flex-col items-center">
                                            <ArrowRight className="w-6 h-6 text-scaleit-gray" />
                                            <span className="text-xs text-scaleit-gray mt-1">Prepare</span>
                                          </div>
                                          <div className="relative">
                                            <div className="p-3 bg-blue-500 rounded-lg shadow-lg animate-pulse">
                                              <Download className="w-8 h-8 text-white" />
                                            </div>
                                            <div className="absolute -top-2 -right-2 bg-green-500 rounded-full px-2 py-1 text-xs text-white">
                                              Install
                                            </div>
                                          </div>
                                          <div className="flex flex-col items-center">
                                            <ArrowRight className="w-6 h-6 text-scaleit-gray" />
                                            <span className="text-xs text-scaleit-gray mt-1">Configure</span>
                                          </div>
                                          <div className="relative">
                                            <div className="p-3 bg-green-500 rounded-lg shadow-lg">
                                              <CheckCircle className="w-8 h-8 text-white" />
                                            </div>
                                            <div className="absolute -bottom-2 -right-2 bg-purple-500 rounded-full px-2 py-1 text-xs text-white">
                                              Ready
                                            </div>
                                          </div>
                                        </div>

                                        {/* Deployment Status */}
                                        <div className="bg-white rounded-lg p-3 shadow-sm">
                                          <div className="text-sm font-bold text-gray-700 mb-2">Aktuelle Deployments</div>
                                          <div className="space-y-2">
                                            <div className="flex items-center justify-between">
                                              <span className="text-xs text-gray-600">Windows 11 Pro → Marketing-PC-01</span>
                                              <div className="w-16 bg-gray-200 rounded-full h-1">
                                                <div className="bg-blue-500 h-1 rounded-full animate-pulse" style={{width: '85%'}}></div>
                                              </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                              <span className="text-xs text-gray-600">Windows 10 → Development-PC-05</span>
                                              <div className="w-16 bg-gray-200 rounded-full h-1">
                                                <div className="bg-green-500 h-1 rounded-full" style={{width: '100%'}}></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <p className="text-sm text-scaleit-gray font-medium">Automatisierte OS-Installation mit Konfiguration</p>
                                  </div>
                                )}

                                {activeModuleInRow.id === 'security-detective' && (
                                  <div className="text-center space-y-6">
                                    {/* Security Monitoring Dashboard */}
                                    <div className="bg-gradient-to-br from-red-50 to-orange-100 rounded-xl p-4">
                                      <div className="text-sm font-bold text-red-700 mb-3">Security Detective Dashboard</div>

                                      {/* Threat Detection */}
                                      <div className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                          <div className="bg-white rounded-lg p-3 shadow-sm">
                                            <div className="text-sm font-bold text-gray-700 mb-2">Aktive Threats</div>
                                            <div className="text-center">
                                              <div className="text-2xl font-bold text-red-600">3</div>
                                              <div className="text-xs text-gray-500">Kritisch</div>
                                            </div>
                                          </div>
                                          <div className="bg-white rounded-lg p-3 shadow-sm">
                                            <div className="text-sm font-bold text-gray-700 mb-2">Blockierte Angriffe</div>
                                            <div className="text-center">
                                              <div className="text-2xl font-bold text-green-600">127</div>
                                              <div className="text-xs text-gray-500">Heute</div>
                                            </div>
                                          </div>
                                        </div>

                                        {/* Security Events */}
                                        <div className="bg-white rounded-lg p-3 shadow-sm">
                                          <div className="text-sm font-bold text-gray-700 mb-2">Letzte Events</div>
                                          <div className="space-y-2 text-xs">
                                            <div className="flex items-center justify-between">
                                              <div className="flex items-center space-x-2">
                                                <AlertTriangle className="w-3 h-3 text-red-500" />
                                                <span>Malware erkannt</span>
                                              </div>
                                              <span className="text-red-600">2 min</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                              <div className="flex items-center space-x-2">
                                                <Shield className="w-3 h-3 text-orange-500" />
                                                <span>Suspicious Login</span>
                                              </div>
                                              <span className="text-orange-600">15 min</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <p className="text-sm text-scaleit-gray font-medium">Erweiterte Sicherheitsanalyse und Threat Detection</p>
                                  </div>
                                )}

                                {activeModuleInRow.id === 'managed-software' && (
                                  <div className="text-center space-y-6">
                                    {/* Managed Software Updates */}
                                    <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-4">
                                      <div className="text-sm font-bold text-emerald-700 mb-3">Managed Software Updates</div>

                                      {/* Update Management */}
                                      <div className="space-y-4">
                                        <div className="bg-white rounded-lg p-3 shadow-sm">
                                          <div className="text-sm font-bold text-gray-700 mb-2">Update-Status</div>
                                          <div className="space-y-2">
                                            <div className="flex items-center justify-between">
                                              <div className="flex items-center space-x-2">
                                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                <span className="text-xs">Adobe Acrobat</span>
                                              </div>
                                              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Updated</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                              <div className="flex items-center space-x-2">
                                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                                <span className="text-xs">Java Runtime</span>
                                              </div>
                                              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Updating</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                              <div className="flex items-center space-x-2">
                                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                <span className="text-xs">Firefox</span>
                                              </div>
                                              <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">Pending</span>
                                            </div>
                                          </div>
                                        </div>

                                        {/* Security Patches */}
                                        <div className="bg-white rounded-lg p-3 shadow-sm">
                                          <div className="text-sm font-bold text-gray-700 mb-2">Security Patches</div>
                                          <div className="grid grid-cols-2 gap-2 text-xs">
                                            <div className="text-center">
                                              <div className="text-lg font-bold text-green-600">23</div>
                                              <div className="text-gray-500">Applied</div>
                                            </div>
                                            <div className="text-center">
                                              <div className="text-lg font-bold text-red-600">2</div>
                                              <div className="text-gray-500">Critical</div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <p className="text-sm text-scaleit-gray font-medium">Automatisches Third-Party Software Patching</p>
                                  </div>
                                )}

                                {activeModuleInRow.id === 'patchmanagement-cawum' && (
                                  <div className="text-center space-y-6">
                                    {/* Patch Management Center */}
                                    <div className="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-xl p-4">
                                      <div className="text-sm font-bold text-indigo-700 mb-3">Patch Management CAWUM</div>

                                      {/* Patch Overview */}
                                      <div className="space-y-4">
                                        <div className="bg-white rounded-lg p-3 shadow-sm">
                                          <div className="text-sm font-bold text-gray-700 mb-2">Patch-Status Übersicht</div>
                                          <div className="grid grid-cols-3 gap-2 text-xs">
                                            <div className="text-center p-2 bg-green-100 rounded">
                                              <CheckCircle className="w-4 h-4 text-green-500 mx-auto mb-1" />
                                              <div className="text-green-700 font-bold">89%</div>
                                              <div className="text-green-600">Updated</div>
                                            </div>
                                            <div className="text-center p-2 bg-orange-100 rounded">
                                              <Clock className="w-4 h-4 text-orange-500 mx-auto mb-1" />
                                              <div className="text-orange-700 font-bold">8%</div>
                                              <div className="text-orange-600">Pending</div>
                                            </div>
                                            <div className="text-center p-2 bg-red-100 rounded">
                                              <AlertTriangle className="w-4 h-4 text-red-500 mx-auto mb-1" />
                                              <div className="text-red-700 font-bold">3%</div>
                                              <div className="text-red-600">Critical</div>
                                            </div>
                                          </div>
                                        </div>

                                        {/* Recent Patches */}
                                        <div className="bg-white rounded-lg p-3 shadow-sm">
                                          <div className="text-sm font-bold text-gray-700 mb-2">Letzte Patches</div>
                                          <div className="space-y-2 text-xs">
                                            <div className="flex items-center justify-between">
                                              <span className="text-gray-600">Windows Security Update</span>
                                              <span className="text-green-600">Deployed</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                              <span className="text-gray-600">Office 365 Patches</span>
                                              <span className="text-blue-600">Scheduled</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <p className="text-sm text-scaleit-gray font-medium">Zentrales Patch-Management für alle Systeme</p>
                                  </div>
                                )}

                                {activeModuleInRow.id === 'schwachstellen-management' && (
                                  <div className="text-center space-y-6">
                                    {/* Vulnerability Management */}
                                    <div className="bg-gradient-to-br from-yellow-50 to-amber-100 rounded-xl p-4">
                                      <div className="text-sm font-bold text-amber-700 mb-3">Schwachstellen Management</div>

                                      {/* Vulnerability Dashboard */}
                                      <div className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                          <div className="bg-white rounded-lg p-3 shadow-sm">
                                            <div className="text-sm font-bold text-gray-700 mb-2">Offene Schwachstellen</div>
                                            <div className="text-center">
                                              <div className="text-2xl font-bold text-red-600">47</div>
                                              <div className="text-xs text-gray-500">Kritisch/Hoch</div>
                                            </div>
                                          </div>
                                          <div className="bg-white rounded-lg p-3 shadow-sm">
                                            <div className="text-sm font-bold text-gray-700 mb-2">Behoben</div>
                                            <div className="text-center">
                                              <div className="text-2xl font-bold text-green-600">156</div>
                                              <div className="text-xs text-gray-500">Diesen Monat</div>
                                            </div>
                                          </div>
                                        </div>

                                        {/* Risk Assessment */}
                                        <div className="bg-white rounded-lg p-3 shadow-sm">
                                          <div className="text-sm font-bold text-gray-700 mb-2">Risiko-Bewertung</div>
                                          <div className="space-y-2">
                                            <div className="flex items-center justify-between">
                                              <span className="text-xs text-gray-600">CVSS Score &gt; 7.0</span>
                                              <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">12</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                              <span className="text-xs text-gray-600">Zero-Day Vulnerabilities</span>
                                              <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">3</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <p className="text-sm text-scaleit-gray font-medium">Identifikation und Behebung von Sicherheitslücken</p>
                                  </div>
                                )}

                                {activeModuleInRow.id === 'helpdesk' && (
                                  <div className="text-center space-y-6">
                                    {/* Helpdesk Dashboard */}
                                    <div className="bg-gradient-to-br from-indigo-50 to-blue-100 rounded-xl p-4">
                                      <div className="text-sm font-bold text-indigo-700 mb-3">Helpdesk Management</div>

                                      {/* Ticket Overview */}
                                      <div className="space-y-4">
                                        <div className="grid grid-cols-3 gap-2">
                                          <div className="bg-white rounded-lg p-3 shadow-sm text-center">
                                            <div className="text-lg font-bold text-red-600">12</div>
                                            <div className="text-xs text-gray-500">Offen</div>
                                          </div>
                                          <div className="bg-white rounded-lg p-3 shadow-sm text-center">
                                            <div className="text-lg font-bold text-blue-600">8</div>
                                            <div className="text-xs text-gray-500">In Bearbeitung</div>
                                          </div>
                                          <div className="bg-white rounded-lg p-3 shadow-sm text-center">
                                            <div className="text-lg font-bold text-green-600">23</div>
                                            <div className="text-xs text-gray-500">Gelöst</div>
                                          </div>
                                        </div>

                                        {/* Recent Tickets */}
                                        <div className="bg-white rounded-lg p-3 shadow-sm">
                                          <div className="text-sm font-bold text-gray-700 mb-2">Letzte Tickets</div>
                                          <div className="space-y-2 text-xs">
                                            <div className="flex items-center justify-between">
                                              <div className="flex items-center space-x-2">
                                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                                <span>Drucker funktioniert nicht</span>
                                              </div>
                                              <span className="text-red-600">High</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                              <div className="flex items-center space-x-2">
                                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                                <span>Software-Installation</span>
                                              </div>
                                              <span className="text-blue-600">Medium</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <p className="text-sm text-scaleit-gray font-medium">Integriertes Helpdesk-System für IT-Support</p>
                                  </div>
                                )}

                                {activeModuleInRow.id === 'reports' && (
                                  <div className="text-center space-y-6">
                                    {/* Reports & Analytics */}
                                    <div className="bg-gradient-to-br from-teal-50 to-cyan-100 rounded-xl p-4">
                                      <div className="text-sm font-bold text-teal-700 mb-3">Reports & Analytics</div>

                                      {/* Report Types */}
                                      <div className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                          <div className="bg-white rounded-lg p-3 shadow-sm">
                                            <BarChart3 className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                                            <div className="text-sm font-bold text-gray-700">Asset Reports</div>
                                            <div className="text-xs text-gray-500">Hardware/Software Inventar</div>
                                          </div>
                                          <div className="bg-white rounded-lg p-3 shadow-sm">
                                            <TrendingUp className="w-6 h-6 text-green-500 mx-auto mb-2" />
                                            <div className="text-sm font-bold text-gray-700">Usage Analytics</div>
                                            <div className="text-xs text-gray-500">Nutzungsstatistiken</div>
                                          </div>
                                        </div>

                                        {/* Scheduled Reports */}
                                        <div className="bg-white rounded-lg p-3 shadow-sm">
                                          <div className="text-sm font-bold text-gray-700 mb-2">Geplante Reports</div>
                                          <div className="space-y-2 text-xs">
                                            <div className="flex items-center justify-between">
                                              <span className="text-gray-600">Monatlicher Asset-Report</span>
                                              <span className="text-green-600">Täglich</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                              <span className="text-gray-600">Security Compliance</span>
                                              <span className="text-blue-600">Wöchentlich</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <p className="text-sm text-scaleit-gray font-medium">Umfassende Berichterstattung und Analytics</p>
                                  </div>
                                )}

                                {activeModuleInRow.id === 'retired-clients' && (
                                  <div className="text-center space-y-6">
                                    {/* Retired Clients Management */}
                                    <div className="bg-gradient-to-br from-gray-50 to-slate-100 rounded-xl p-4">
                                      <div className="text-sm font-bold text-slate-700 mb-3">Retired Clients Management</div>

                                      {/* Decommissioning Process */}
                                      <div className="space-y-4">
                                        <div className="flex items-center justify-center space-x-3">
                                          <div className="relative">
                                            <div className="p-3 bg-gray-500 rounded-lg shadow-lg">
                                              <Laptop className="w-8 h-8 text-white" />
                                            </div>
                                            <div className="absolute -bottom-2 -right-2 bg-orange-500 rounded-full px-2 py-1 text-xs text-white">
                                              Retired
                                            </div>
                                          </div>
                                          <div className="flex flex-col items-center">
                                            <ArrowRight className="w-6 h-6 text-scaleit-gray" />
                                            <span className="text-xs text-scaleit-gray mt-1">Backup</span>
                                          </div>
                                          <div className="relative">
                                            <div className="p-3 bg-blue-500 rounded-lg shadow-lg">
                                              <Archive className="w-8 h-8 text-white" />
                                            </div>
                                            <div className="absolute -top-2 -right-2 bg-green-500 rounded-full px-2 py-1 text-xs text-white">
                                              Archive
                                            </div>
                                          </div>
                                          <div className="flex flex-col items-center">
                                            <ArrowRight className="w-6 h-6 text-scaleit-gray" />
                                            <span className="text-xs text-scaleit-gray mt-1">Wipe</span>
                                          </div>
                                          <div className="relative">
                                            <div className="p-3 bg-red-500 rounded-lg shadow-lg">
                                              <X className="w-8 h-8 text-white" />
                                            </div>
                                            <div className="absolute -bottom-2 -right-2 bg-purple-500 rounded-full px-2 py-1 text-xs text-white">
                                              Dispose
                                            </div>
                                          </div>
                                        </div>

                                        {/* Statistics */}
                                        <div className="bg-white rounded-lg p-3 shadow-sm">
                                          <div className="text-sm font-bold text-gray-700 mb-2">Dieses Jahr ausgemustert</div>
                                          <div className="grid grid-cols-2 gap-2 text-xs">
                                            <div className="text-center">
                                              <div className="text-lg font-bold text-blue-600">47</div>
                                              <div className="text-gray-500">Laptops</div>
                                            </div>
                                            <div className="text-center">
                                              <div className="text-lg font-bold text-green-600">23</div>
                                              <div className="text-gray-500">Desktops</div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <p className="text-sm text-scaleit-gray font-medium">Verwaltung ausgemusterter Clients und deren Daten</p>
                                  </div>
                                )}

                                {activeModuleInRow.id === 'application-usage-tracking' && (
                                  <div className="text-center space-y-6">
                                    {/* Application Usage Tracking */}
                                    <div className="bg-gradient-to-br from-pink-50 to-rose-100 rounded-xl p-4">
                                      <div className="text-sm font-bold text-rose-700 mb-3">Application Usage Tracking</div>

                                      {/* Usage Analytics */}
                                      <div className="space-y-4">
                                        <div className="bg-white rounded-lg p-3 shadow-sm">
                                          <div className="text-sm font-bold text-gray-700 mb-2">Top Anwendungen</div>
                                          <div className="space-y-2">
                                            <div className="flex items-center justify-between">
                                              <div className="flex items-center space-x-2">
                                                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                                                <span className="text-xs">Microsoft Office</span>
                                              </div>
                                              <span className="text-xs text-gray-600">8.5h/Tag</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                              <div className="flex items-center space-x-2">
                                                <div className="w-3 h-3 bg-green-500 rounded"></div>
                                                <span className="text-xs">Chrome Browser</span>
                                              </div>
                                              <span className="text-xs text-gray-600">6.2h/Tag</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                              <div className="flex items-center space-x-2">
                                                <div className="w-3 h-3 bg-purple-500 rounded"></div>
                                                <span className="text-xs">Teams</span>
                                              </div>
                                              <span className="text-xs text-gray-600">4.1h/Tag</span>
                                            </div>
                                          </div>
                                        </div>

                                        {/* License Optimization */}
                                        <div className="bg-white rounded-lg p-3 shadow-sm">
                                          <div className="text-sm font-bold text-gray-700 mb-2">Lizenz-Optimierung</div>
                                          <div className="grid grid-cols-2 gap-2 text-xs">
                                            <div className="text-center">
                                              <div className="text-lg font-bold text-green-600">23%</div>
                                              <div className="text-gray-500">Einsparung</div>
                                            </div>
                                            <div className="text-center">
                                              <div className="text-lg font-bold text-blue-600">89%</div>
                                              <div className="text-gray-500">Auslastung</div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <p className="text-sm text-scaleit-gray font-medium">Verfolgung der Software-Nutzung im Unternehmen</p>
                                  </div>
                                )}

                                {/* Add more module visualizations as needed */}
                                {!activeModuleInRow.comingSoon && !['asset-management', 'core', 'lizenzmanagement', 'mobile-device-management', 'automate', 'desktop-automation', 'os-deployment', 'security-detective', 'managed-software', 'patchmanagement-cawum', 'schwachstellen-management', 'helpdesk', 'reports', 'retired-clients', 'application-usage-tracking'].includes(activeModuleInRow.id) && (
                                  <div className="text-center space-y-6">
                                    <div className="p-8 bg-gradient-to-r from-scaleit-gray to-scaleit-red rounded-xl">
                                      <div className={`p-6 rounded-full bg-gradient-to-r ${activeModuleInRow.color} mx-auto w-fit`}>
                                        {React.createElement(activeModuleInRow.icon, { className: "w-12 h-12 text-white" })}
                                      </div>
                                      <h4 className="text-xl font-bold text-white mt-4 mb-2">{activeModuleInRow.name}</h4>
                                      <p className="text-white/80 text-sm">Professionelle {activeModuleInRow.name.toLowerCase()} Lösung</p>
                                    </div>
                                    <p className="text-sm text-scaleit-gray font-medium">Modul-Details werden geladen...</p>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Details anschauen Button */}
                          <div className="mt-8 pt-6 border-t border-gray-200">
                            <div className="flex justify-center">
                              <Link href={`/acmp-standard/${activeModuleInRow.id}`}>
                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="inline-flex items-center bg-gradient-to-r from-scaleit-red to-scaleit-purple text-white px-8 py-3 rounded-full font-semibold text-lg hover:from-scaleit-red/90 hover:to-scaleit-purple/90 transition-all duration-300 shadow-xl"
                                >
                                  Details anschauen
                                  <ArrowRight className="w-5 h-5 ml-2" />
                                </motion.button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
