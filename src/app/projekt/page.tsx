'use client';

import { motion } from 'framer-motion';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { 
  Server, Database, Shield, Cloud, Cpu, Network, Users, 
  CheckCircle, ArrowRight, Zap, Globe, Monitor, Settings,
  FileText, MessageSquare, Calendar, Award, TrendingUp,
  Building, Clock, Target, Layers, GitBranch, Brain,
  Lock, HardDrive, Wifi, Smartphone, Mail, Share2, Download
} from 'lucide-react';
import React, { useState, useEffect } from 'react';

function ProjektPage() {
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
        "Monitoring 8-18 Uhr etablieren"
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
      color: "from-red-500 to-orange-500"
    },
    {
      id: 3,
      title: "Managed Services Einführung", 
      client: "Rechtsanwaltskanzlei",
      category: "IT-Betrieb",
      duration: "6 Monate",
      team: "6 IT-Spezialisten",
      description: "Übernahme des kompletten IT-Betriebs mit Support 8-18 Uhr und proaktivem Monitoring",
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
        "Professioneller Support 8-18 Uhr",
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

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-red-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-800/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
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
                <a href="/pdfs/it-projekte-produktinfo.pdf" download className="flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  Projektinfo herunterladen
                </a>
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

            {/* Project Visualization */}
            <div className="bg-gradient-to-br from-red-900 to-purple-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Projekt Status</h3>
              
              <div className="space-y-4">
                {[
                  { phase: "Analyse", progress: 100, color: "bg-green-500" },
                  { phase: "Implementation", progress: 85, color: "bg-red-500" },
                  { phase: "Testing", progress: 70, color: "bg-yellow-500" },
                  { phase: "Deployment", progress: 45, color: "bg-purple-500" }
                ].map((item, index) => (
                  <div key={item.phase}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">{item.phase}</span>
                      <span className="text-sm">{item.progress}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-3">
                      <motion.div
                        className={`${item.color} h-3 rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${item.progress}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">{migrationProgress}%</div>
                  <div className="text-sm opacity-75">Completion</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-red-400">8-18 Uhr</div>
                  <div className="text-sm opacity-75">Support</div>
                </div>
              </div>
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

export default ProjektPage;




