'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { 
  Server, Database, Shield, Cloud, Cpu, Network, Users, 
  CheckCircle, ArrowRight, Zap, Globe, Monitor, Settings,
  FileText, MessageSquare, Calendar, Award, TrendingUp,
  Building, Clock, Target, Layers, GitBranch, Brain,
  Lock, HardDrive, Wifi, Smartphone, Mail, Share2
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ProjektPage() {
  const [activeProject, setActiveProject] = useState(0);
  const [migrationProgress, setMigrationProgress] = useState(0);

  // Animation für Migration Progress
  useEffect(() => {
    const timer = setInterval(() => {
      setMigrationProgress(prev => (prev + 2) % 101);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const itProjects = [
    {
      id: 0,
      title: "Microsoft 365 Migration",
      client: "Mittelständisches Unternehmen",
      category: "Cloud Migration",
      duration: "3 Monate",
      team: "4 Spezialisten",
      description: "Vollständige Migration von lokaler Exchange-Infrastruktur zu Microsoft 365 mit Teams-Integration",
      technologies: ["Microsoft 365", "Exchange Online", "Teams", "SharePoint", "Azure AD"],
      challenges: [
        "400+ Benutzer Migration ohne Ausfallzeiten",
        "Integration bestehender Sicherheitsrichtlinien", 
        "Schulung der Mitarbeiter",
        "Hybride Konfiguration während Übergangsphase"
      ],
      results: [
        "99.9% Verfügbarkeit erreicht",
        "40% Reduzierung IT-Kosten",
        "Vollständige Teams-Adoption",
        "Erhöhte Mitarbeiterzufriedenheit"
      ],
      icon: Mail,
      color: "from-red-500 to-cyan-500"
    },
    {
      id: 1,
      title: "IT-Security Upgrade",
      client: "Produktionsunternehmen",
      category: "Cybersecurity",
      duration: "2 Monate", 
      team: "3 Security-Experten",
      description: "Implementierung einer Zero-Trust-Architektur mit Endpoint Detection & Response",
      technologies: ["Sophos", "Azure Sentinel", "Multi-Factor Auth", "VPN", "Firewall"],
      challenges: [
        "Schutz kritischer Produktionssysteme",
        "Compliance-Anforderungen einhalten",
        "Minimal invasive Implementation",
        "24/7 Monitoring etablieren"
      ],
      results: [
        "95% weniger Sicherheitsvorfälle",
        "Vollständige Compliance erreicht",
        "Automatisierte Threat Response",
        "Zentrale Security-Verwaltung"
      ],
      icon: Shield,
      color: "from-red-500 to-pink-500"
    },
    {
      id: 2,
      title: "Automatisierung & Standardisierung",
      client: "Dienstleistungsunternehmen",
      category: "Process Automation",
      duration: "4 Monate",
      team: "5 Automatisierungs-Spezialisten",
      description: "Vollständige Automatisierung von IT-Prozessen und Standardisierung der Systemlandschaft",
      technologies: ["PowerShell", "Azure Automation", "SCCM", "Group Policies", "Monitoring"],
      challenges: [
        "Heterogene Systemlandschaft vereinheitlichen",
        "Manuelle Prozesse automatisieren",
        "Patch-Management optimieren",
        "Proaktives Monitoring implementieren"
      ],
      results: [
        "80% weniger manuelle Aufgaben",
        "Einheitliche System-Standards",
        "Automatisches Patch-Management",
        "Proaktive Fehlererkennung"
      ],
      icon: Settings,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Managed Services Einführung", 
      client: "Rechtsanwaltskanzlei",
      category: "IT-Betrieb",
      duration: "6 Monate",
      team: "6 IT-Spezialisten",
      description: "Übernahme des kompletten IT-Betriebs mit 24/7 Support und proaktivem Monitoring",
      technologies: ["ServerEye", "Remote Support", "Backup Solutions", "Asset Management"],
      challenges: [
        "Sensible Rechtsdaten schützen",
        "Hohe Verfügbarkeitsanforderungen",
        "Compliance mit Datenschutz",
        "Nahtlose Service-Übernahme"
      ],
      results: [
        "99.8% System-Verfügbarkeit",
        "Reduzierte IT-Ausfälle um 90%",
        "24/7 professioneller Support",
        "Vollständige Datenschutz-Compliance"
      ],
      icon: Users,
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const serviceAreas = [
    {
      title: "Strategische IT-Planung",
      description: "Analyse und Optimierung Ihrer IT-Landschaft",
      icon: Target,
      projects: "25+ Projekte",
      color: "from-red-500 to-cyan-500"
    },
    {
      title: "Cloud Migrationen",
      description: "Sichere Migration in moderne Cloud-Umgebungen",
      icon: Cloud,
      projects: "40+ Migrationen",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Security Implementation",
      description: "Umfassende IT-Sicherheitslösungen",
      icon: Shield,
      projects: "60+ Security-Projekte",
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Automatisierung",
      description: "Prozessautomatisierung und Standardisierung",
      icon: Zap,
      projects: "35+ Automatisierungen",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  // IT-Infrastruktur Diagramm
  const ITInfrastructure = () => {
    const [activeComponent, setActiveComponent] = useState<string | null>(null);

    const components = [
      { id: 'cloud', name: 'Cloud Services', x: 50, y: 30, icon: Cloud },
      { id: 'server', name: 'Server Farm', x: 20, y: 60, icon: Server },
      { id: 'network', name: 'Network', x: 50, y: 70, icon: Network },
      { id: 'security', name: 'Security Layer', x: 80, y: 40, icon: Shield },
      { id: 'users', name: 'End Users', x: 50, y: 90, icon: Users },
      { id: 'database', name: 'Databases', x: 80, y: 70, icon: Database }
    ];

    return (
      <div className="bg-gradient-to-br from-gray-900 to-red-900 rounded-2xl p-8 text-white relative overflow-hidden">
        <h3 className="text-2xl font-bold mb-6">IT-Infrastruktur Übersicht</h3>
        
        <div className="relative w-full h-80">
          {/* Verbindungslinien */}
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Dynamische Verbindungen */}
            {[
              ['cloud', 'server'], ['cloud', 'security'], ['server', 'network'],
              ['network', 'users'], ['network', 'database'], ['security', 'database']
            ].map(([from, to], index) => {
              const fromComp = components.find(c => c.id === from);
              const toComp = components.find(c => c.id === to);
              return (
                <motion.line
                  key={`${from}-${to}`}
                  x1={`${fromComp?.x || 0}%`}
                  y1={`${fromComp?.y || 0}%`}
                  x2={`${toComp?.x || 0}%`}
                  y2={`${toComp?.y || 0}%`}
                  stroke="rgba(59, 130, 246, 0.6)"
                  strokeWidth="2"
                  filter="url(#glow)"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: index * 0.3 }}
                />
              );
            })}
          </svg>

          {/* Komponenten */}
          {components.map((comp, index) => (
            <motion.div
              key={comp.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer ${
                activeComponent === comp.id ? 'scale-125' : ''
              }`}
              style={{ left: `${comp.x}%`, top: `${comp.y}%` }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onMouseEnter={() => setActiveComponent(comp.id)}
              onMouseLeave={() => setActiveComponent(null)}
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-purple-500 flex items-center justify-center shadow-lg ${
                activeComponent === comp.id ? 'ring-4 ring-red-300' : ''
              }`}>
                <comp.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm text-center mt-2 font-medium">
                {comp.name}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live Status */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          {['Server Status: Online', 'Security: Active', 'Backup: Running'].map((status, index) => (
            <motion.div
              key={status}
              className="bg-white/10 rounded-lg p-3 text-center"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
            >
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">{status}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  // Migration Progress Visualization
  const MigrationProgress = () => {
    return (
      <div className="bg-gradient-to-br from-green-900 to-red-900 rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-6">Live Migration Progress</h3>
        
        <div className="space-y-4">
          {[
            { task: "Benutzer migrieren", progress: migrationProgress },
            { task: "Daten übertragen", progress: Math.max(0, migrationProgress - 20) },
            { task: "Einstellungen konfigurieren", progress: Math.max(0, migrationProgress - 40) },
            { task: "Tests durchführen", progress: Math.max(0, migrationProgress - 60) }
          ].map((item, index) => (
            <div key={item.task}>
              <div className="flex justify-between mb-2">
                <span className="text-sm">{item.task}</span>
                <span className="text-sm">{Math.min(100, item.progress)}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-3">
                <motion.div
                  className="bg-gradient-to-r from-green-400 to-red-400 h-3 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(100, item.progress)}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <div className="text-3xl font-bold">{Math.min(100, migrationProgress)}%</div>
          <div className="text-sm opacity-75">Gesamt-Fortschritt</div>
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 to-indigo-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-red-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-4 rounded-full shadow-2xl mb-8"
            >
              <Zap className="w-6 h-6 mr-3" />
              <span className="text-lg font-semibold">IT-Optimierung & Automatisierung</span>
            </motion.div>
            
            <h1 className="text-7xl font-bold text-gray-900 mb-6">
              Unsere <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">IT-Projekte</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              Von der strategischen Planung bis zur vollständigen Migration - 
              entdecken Sie unsere erfolgreichen IT-Implementierungen und Optimierungsprojekte.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 inline mr-2" />
                Projektberatung
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                <FileText className="w-5 h-5 inline mr-2" />
                Referenzen
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Areas Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Unsere Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Umfassende IT-Services für die Optimierung Ihrer digitalen Arbeitsplätze
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 text-center border border-gray-100"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${area.color} flex items-center justify-center mx-auto mb-6`}>
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <div className="text-sm font-semibold text-red-600">{area.projects}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Erfolgreiche Projekte</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Einblicke in unsere jüngsten IT-Transformationsprojekte
            </p>
          </motion.div>

          {/* Project Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-lg p-2 shadow-lg flex space-x-2 overflow-x-auto">
              {itProjects.map((project, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 whitespace-nowrap ${
                    activeProject === index
                      ? 'bg-red-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <project.icon className="w-5 h-5 inline mr-2" />
                  {project.title}
                </button>
              ))}
            </div>
          </div>

          {/* Active Project Details */}
          <motion.div
            key={activeProject}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-start"
          >
            {/* Project Info */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <div className={`p-3 bg-gradient-to-r ${itProjects[activeProject].color} rounded-lg mr-4`}>
                  {React.createElement(itProjects[activeProject].icon, { className: "w-8 h-8 text-white" })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{itProjects[activeProject].title}</h3>
                  <p className="text-gray-600">{itProjects[activeProject].client}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Clock className="w-6 h-6 mx-auto mb-2 text-red-600" />
                  <div className="text-sm font-semibold">{itProjects[activeProject].duration}</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Users className="w-6 h-6 mx-auto mb-2 text-green-600" />
                  <div className="text-sm font-semibold">{itProjects[activeProject].team}</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Target className="w-6 h-6 mx-auto mb-2 text-purple-600" />
                  <div className="text-sm font-semibold">{itProjects[activeProject].category}</div>
                </div>
              </div>

              <p className="text-gray-700 mb-6">{itProjects[activeProject].description}</p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologien</h4>
                <div className="flex flex-wrap gap-2">
                  {itProjects[activeProject].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Herausforderungen</h4>
                  <ul className="space-y-2">
                    {itProjects[activeProject].challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <ArrowRight className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Ergebnisse</h4>
                  <ul className="space-y-2">
                    {itProjects[activeProject].results.map((result, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Interactive Visualizations */}
            <div className="space-y-6">
              {activeProject === 0 && <MigrationProgress />}
              {activeProject === 1 && <ITInfrastructure />}
              {activeProject === 2 && (
                <div className="bg-gradient-to-br from-green-900 to-red-900 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Automatisierung Dashboard</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Automatisierte Tasks", value: "127", icon: Zap },
                      { label: "Zeitersparnis", value: "80%", icon: Clock },
                      { label: "Fehlerreduktion", value: "95%", icon: Target },
                      { label: "Systeme verwaltet", value: "45", icon: Monitor }
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        className="bg-white/10 rounded-lg p-4 text-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <stat.icon className="w-8 h-8 mx-auto mb-2 text-green-400" />
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="text-sm opacity-75">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
              {activeProject === 3 && (
                <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Managed Services Status</h3>
                  <div className="space-y-4">
                    {[
                      { service: "Server Monitoring", status: "Online", uptime: "99.8%" },
                      { service: "Backup Services", status: "Running", uptime: "100%" },
                      { service: "Security Scanning", status: "Active", uptime: "99.9%" },
                      { service: "Help Desk", status: "Available", uptime: "24/7" }
                    ].map((item, index) => (
                      <motion.div
                        key={item.service}
                        className="bg-white/10 rounded-lg p-4 flex justify-between items-center"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div>
                          <div className="font-semibold">{item.service}</div>
                          <div className="text-sm opacity-75">{item.status}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-green-400 font-bold">{item.uptime}</div>
                          <div className="text-xs opacity-75">Uptime</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">ScaleITS in Zahlen</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unsere Erfolgsgeschichte in der IT-Optimierung
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "600+", label: "Zufriedene Kunden", icon: Users, color: "from-red-500 to-cyan-500" },
              { number: "160+", label: "Erfolgreiche Projekte", icon: CheckCircle, color: "from-green-500 to-emerald-500" },
              { number: "3", label: "Jahre Erfahrung", icon: Calendar, color: "from-purple-500 to-indigo-500" },
              { number: "99.8%", label: "Kundenzufriedenheit", icon: Award, color: "from-yellow-500 to-orange-500" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-6`}>
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Bereit für Ihr IT-Projekt?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Lassen Sie uns gemeinsam Ihre IT-Landschaft optimieren und automatisieren
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageSquare className="w-5 h-5 inline mr-2" />
              Kostenlose Projekt-Beratung
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}




