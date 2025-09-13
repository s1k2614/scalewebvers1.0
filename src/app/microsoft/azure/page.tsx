'use client';

import { motion } from 'framer-motion';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import {
  Cloud, Server, Database, Shield, Brain, Zap,
  ArrowRight, CheckCircle, Globe, Settings, Monitor,
  BarChart3, Lock, Users, ArrowLeft
} from 'lucide-react';
import Link from 'next/link';

export default function AzurePage() {
  const azureServices = [
    {
      category: "Compute",
      icon: Server,
      services: [
        {
          name: "Virtual Machines",
          description: "Skalierbare virtuelle Server in der Cloud",
          features: ["Windows & Linux Support", "Auto-Scaling", "Managed Disks", "Load Balancing"]
        },
        {
          name: "App Services",
          description: "Plattform für Web- und Mobile-Apps",
          features: [".NET, Java, Node.js, Python", "Auto-Scaling", "CI/CD Integration", "Custom Domains"]
        },
        {
          name: "Kubernetes Service (AKS)",
          description: "Vollständig verwalteter Kubernetes-Service",
          features: ["Auto-Scaling", "Security Hardening", "Monitoring", "CI/CD Integration"]
        }
      ]
    },
    {
      category: "Data & Storage",
      icon: Database,
      services: [
        {
          name: "Azure SQL Database",
          description: "Vollständig verwaltete SQL-Datenbank",
          features: ["High Availability", "Auto-Backup", "Performance Monitoring", "Security Features"]
        },
        {
          name: "Blob Storage",
          description: "Objektspeicher für große Datenmengen",
          features: ["Hot/Cool/Archive Tiers", "Geo-Redundancy", "Data Lake Integration", "CDN Integration"]
        },
        {
          name: "Cosmos DB",
          description: "Globale NoSQL-Datenbank",
          features: ["Multi-Model Support", "Global Distribution", "Low Latency", "Automatic Scaling"]
        }
      ]
    },
    {
      category: "AI & Machine Learning",
      icon: Brain,
      services: [
        {
          name: "Azure AI",
          description: "KI-Services für verschiedene Anwendungsfälle",
          features: ["Computer Vision", "Natural Language Processing", "Speech Services", "Decision Making"]
        },
        {
          name: "Machine Learning",
          description: "Plattform für ML-Modelle und -Experimente",
          features: ["AutoML", "Model Management", "MLOps", "Integration mit Python/R"]
        },
        {
          name: "Cognitive Services",
          description: "Vorgefertigte KI-Modelle",
          features: ["Face Recognition", "Text Analytics", "Translator", "Anomaly Detection"]
        }
      ]
    },
    {
      category: "Security & Identity",
      icon: Shield,
      services: [
        {
          name: "Azure Active Directory",
          description: "Cloud-basierte Identitäts- und Zugriffsverwaltung",
          features: ["Single Sign-On", "Multi-Factor Authentication", "Conditional Access", "Identity Protection"]
        },
        {
          name: "Security Center",
          description: "Einheitliche Sicherheitsverwaltung",
          features: ["Threat Detection", "Security Policies", "Compliance Monitoring", "Vulnerability Assessment"]
        },
        {
          name: "Key Vault",
          description: "Verwaltung von Schlüsseln und Geheimnissen",
          features: ["Key Management", "Secret Management", "Certificate Management", "Hardware Security Modules"]
        }
      ]
    }
  ];

  const azureBenefits = [
    {
      title: "Globale Infrastruktur",
      description: "60+ Regionen weltweit für optimale Performance",
      icon: Globe,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Pay-as-you-go",
      description: "Zahlen Sie nur für das, was Sie tatsächlich nutzen",
      icon: BarChart3,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Enterprise Security",
      description: "Branchenführende Sicherheit und Compliance",
      icon: Shield,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Hybrid Cloud",
      description: "Nahtlose Integration mit lokalen Systemen",
      icon: Settings,
      color: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <Link
              href="/microsoft"
              className="inline-flex items-center text-scaleit-gray hover:text-scaleit-red transition-colors duration-200 mb-8"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Zurück zu Microsoft
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full shadow-2xl mb-8"
            >
              <Cloud className="w-8 h-8 mr-4" />
              <span className="text-xl font-bold">Microsoft Azure</span>
            </motion.div>

            <h1 className="text-7xl font-bold text-gray-900 mb-6">
              Cloud Computing der
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                nächsten Generation
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              Microsoft Azure bietet Ihnen eine vollständige Cloud-Plattform mit über 200 Services
              für Computing, Analytics, Storage und Networking.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Azure Beratung
                <ArrowRight className="w-5 h-5 inline ml-2" />
              </Link>

              <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                <a href="https://portal.azure.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Monitor className="w-5 h-5 mr-2" />
                  Azure Portal
                </a>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Azure Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Azure Service-Kategorien</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entdecken Sie die Vielfalt der Azure-Services für Ihre Geschäftsanforderungen
            </p>
          </motion.div>

          <div className="space-y-16">
            {azureServices.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              >
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mr-4">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{category.category}</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                      className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300"
                    >
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h4>
                      <p className="text-gray-600 mb-4">{service.description}</p>

                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Warum Azure?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Die Vorteile der Microsoft Azure Cloud-Plattform im Überblick
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {azureBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${benefit.color} flex items-center justify-center mx-auto mb-6`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Nahtlose Migration zu Azure
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Wir unterstützen Sie bei der Migration Ihrer Anwendungen und Daten in die Cloud.
                Von der Planung bis zur Umsetzung - wir sind Ihr Partner.
              </p>

              <div className="space-y-4">
                {[
                  "Migrationsbewertung und Planung",
                  "Datenmigration und Anwendungsumstellung",
                  "Performance-Optimierung",
                  "24/7 Support während der Migration"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-900 to-cyan-900 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Azure Migrate</h3>
              <div className="space-y-4">
                {[
                  "Server Assessment",
                  "Database Assessment",
                  "Web App Assessment",
                  "Virtual Desktop Assessment"
                ].map((tool, index) => (
                  <motion.div
                    key={tool}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <Zap className="w-4 h-4" />
                    </div>
                    <span>{tool}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md-text-5xl font-bold text-white mb-6">
              Starten Sie Ihre Azure Journey
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Lassen Sie uns gemeinsam die beste Azure-Lösung für Ihr Unternehmen entwickeln
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Kostenlose Azure Beratung
              </Link>
              <Link
                href="/microsoft"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Alle Microsoft Produkte
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}