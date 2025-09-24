'use client';

import { motion } from 'framer-motion';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import { 
  Wrench, Calendar, Shield, CheckCircle, Clock,
  TrendingUp, AlertTriangle, Settings, Database, Download,
  Monitor, Server, Network, Activity, Eye, Bell,
  BarChart3, FileText, Users, Zap, Target, Award,
  ArrowRight, MessageSquare, Phone, Mail, Building, Cog
} from 'lucide-react';
import Link from 'next/link';

export default function WartungPage() {
  const maintenanceServices = [
    {
      title: "Proactive Monitoring",
      description: "Überwachung 8-18 Uhr Ihrer IT-Infrastruktur mit intelligenten Alerting-Systemen",
      icon: Monitor,
      features: [
        "Echtzeit-Systemüberwachung",
        "Automatische Benachrichtigungen",
        "Performance-Tracking",
        "Kapazitätsplanung",
        "Trend-Analyse",
        "Custom Dashboards"
      ],
      benefits: "99.9% Verfügbarkeit garantiert"
    },
    {
      title: "Preventive Maintenance",
      description: "Planmäßige Wartungsarbeiten zur Ausfallvermeidung und Leistungsoptimierung",
      icon: Calendar,
      features: [
        "Regelmäßige System-Updates",
        "Hardware-Gesundheitschecks",
        "Software-Optimierung",
        "Backup-Verifikation",
        "Security Patches",
        "Performance-Tuning"
      ],
      benefits: "75% weniger ungeplante Ausfälle"
    },
    {
      title: "Incident Response",
      description: "Schnelle Reaktion und Lösung bei IT-Problemen mit garantierten Reaktionszeiten",
      icon: AlertTriangle,
      features: [
        "15-Minuten Reaktionszeit",
        "Remote-Problemlösung",
        "Vor-Ort-Support bei Bedarf",
        "Eskalations-Management",
        "Root-Cause-Analyse",
        "Dokumentation aller Vorfälle"
      ],
      benefits: "Durchschnittlich <2h Lösungszeit"
    }
  ];

  const managedServices = [
    {
      category: "Server & Infrastructure",
      description: "Vollständige Verwaltung Ihrer Server-Landschaft",
      icon: Server,
      services: [
        "Windows/Linux Server Management",
        "Virtualisierung (VMware, Hyper-V)",
        "Storage Management",
        "Network Infrastructure",
        "Cloud-Hybrid Integration",
        "Disaster Recovery Planning"
      ]
    },
    {
      category: "Security Management",
      description: "Umfassender Schutz vor modernen Cyber-Bedrohungen",
      icon: Shield,
      services: [
        "Endpoint Protection Management",
        "Firewall-Administration",
        "Security Monitoring (SOC)",
        "Vulnerability Management",
        "Compliance Reporting",
        "Incident Response Planning"
      ]
    },
    {
      category: "Workplace Services",
      description: "Optimale Arbeitsplatz-IT für maximale Produktivität",
      icon: Users,
      services: [
        "Desktop Management",
        "Software Deployment",
        "User Account Management",
        "Mobile Device Management",
        "Help Desk Support",
        "Asset Lifecycle Management"
      ]
    }
  ];

  const wartungsPakete = [
    {
      name: "Essential",
      description: "Grundlegende Wartung für kleinere Unternehmen",
      icon: Settings,
      features: [
        "Monatliche System-Updates",
        "Backup-Monitoring",
        "Basic Security Checks",
        "8x5 Support",
        "Remote-Support",
        "Quartalsberichte"
      ],
      suitable: "5-25 Arbeitsplätze",
      response: "4 Stunden",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Professional",
      description: "Erweiterte Wartung für wachsende Unternehmen",
      icon: Cog,
      features: [
        "Wöchentliche System-Checks",
        "Proactive Monitoring",
        "Advanced Security Management",
        "24x7 Monitoring",
        "Vor-Ort-Support inkl.",
        "Monatsberichte + KPIs"
      ],
      suitable: "25-100 Arbeitsplätze",
      response: "1 Stunde",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Enterprise",
      description: "Vollumfängliche Wartung für große Organisationen",
      icon: Award,
      features: [
        "Tägliche Gesundheitschecks",
        "Real-time Monitoring",
        "Dedicated Security Team",
        "24x7 Premium Support",
        "Guaranteed SLAs",
        "Executive Dashboards"
      ],
      suitable: "100+ Arbeitsplätze",
      response: "15 Minuten",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const wartungsStats = [
    { value: "99.9%", label: "System Uptime", icon: TrendingUp },
    { value: "<15min", label: "Avg. Response Time", icon: Clock },
    { value: "75%", label: "Weniger Ausfälle", icon: CheckCircle },
    { value: "8-18 Uhr", label: "Monitoring", icon: Eye }
  ];

  const wartungsProzess = [
    {
      step: "01",
      title: "Assessment & Onboarding",
      description: "Analyse Ihrer aktuellen IT-Landschaft und Einrichtung der Monitoring-Tools",
      duration: "1-2 Wochen"
    },
    {
      step: "02",
      title: "Continuous Monitoring",
      description: "Überwachung 8-18 Uhr mit proaktiven Benachrichtigungen und regelmäßigen Reports",
      duration: "Ongoing"
    },
    {
      step: "03",
      title: "Scheduled Maintenance",
      description: "Planmäßige Wartungsarbeiten nach abgestimmtem Wartungskalender",
      duration: "Monatlich/Quartalsweise"
    },
    {
      step: "04",
      title: "Optimization & Evolution",
      description: "Kontinuierliche Verbesserung basierend auf Performance-Daten und Trends",
      duration: "Quartalsweise"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
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
              className="inline-flex items-center bg-gradient-scaleit text-white px-8 py-4 rounded-full shadow-2xl mb-8"
            >
              <Wrench className="w-6 h-6 mr-3" />
              <span className="text-lg font-semibold">IT-Wartung & Managed Services</span>
            </motion.div>
            
            <h1 className="text-7xl font-bold text-scaleit-black mb-6">
              Proaktive <span className="bg-gradient-scaleit bg-clip-text text-transparent">Wartung</span>
            </h1>
            
            <p className="text-xl text-scaleit-gray max-w-4xl mx-auto mb-12">
              Konzentrieren Sie sich auf das Wesentliche – den Rest machen wir. 
              Professionelle IT-Wartung und Managed Services für maximale Verfügbarkeit und Performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-scaleit text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                Kostenlose Beratung
              </Link>
              <button className="border-2 border-scaleit-red text-scaleit-red px-8 py-3 rounded-full font-semibold hover:bg-scaleit-red hover:text-white transition-colors">
                <Download className="w-5 h-5 inline mr-2" />
                Service-Broschüre
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {wartungsStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-gradient-scaleit w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-scaleit-black mb-2">{stat.value}</div>
                  <div className="text-scaleit-gray">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Maintenance Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-scaleit-black mb-4">
              Unsere Wartungs-Services
            </h2>
            <p className="text-xl text-scaleit-gray max-w-3xl mx-auto">
              Proaktive IT-Wartung für höchste Verfügbarkeit und Performance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {maintenanceServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="bg-gradient-scaleit w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-scaleit-black mb-4">{service.title}</h3>
                  <p className="text-scaleit-gray mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-scaleit-gray">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center">
                      <Award className="w-5 h-5 text-orange-600 mr-2" />
                      <span className="font-semibold text-orange-600">{service.benefits}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Managed Services Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-scaleit-black mb-4">
              Managed Services Portfolio
            </h2>
            <p className="text-xl text-scaleit-gray max-w-3xl mx-auto">
              Vollständige Verwaltung Ihrer IT-Infrastruktur aus einer Hand
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {managedServices.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-shadow"
                >
                  <div className="bg-gradient-scaleit w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-scaleit-black mb-4">{category.category}</h3>
                  <p className="text-scaleit-gray mb-6">{category.description}</p>
                  
                  <div className="space-y-3">
                    {category.services.map((service, idx) => (
                      <div key={idx} className="flex items-center">
                        <ArrowRight className="w-4 h-4 text-orange-600 mr-3 flex-shrink-0" />
                        <span className="text-scaleit-gray">{service}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Wartungs-Pakete */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-scaleit-black mb-4">
              Wartungs-Pakete
            </h2>
            <p className="text-xl text-scaleit-gray max-w-3xl mx-auto">
              Maßgeschneiderte Wartungslösungen für jede Unternehmensgröße
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {wartungsPakete.map((paket, index) => {
              const IconComponent = paket.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${paket.color} opacity-10 rounded-full -mr-16 -mt-16`}></div>
                  
                  <div className={`bg-gradient-to-r ${paket.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-scaleit-black mb-2">{paket.name}</h3>
                  <p className="text-scaleit-gray mb-6">{paket.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {paket.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-scaleit-gray">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between">
                      <span className="text-scaleit-gray">Geeignet für:</span>
                      <span className="font-semibold">{paket.suitable}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-scaleit-gray">Reaktionszeit:</span>
                      <span className="font-semibold text-green-600">{paket.response}</span>
                    </div>
                  </div>
                  
                  <button className={`w-full bg-gradient-to-r ${paket.color} text-white py-3 rounded-full font-semibold hover:scale-105 transition-transform`}>
                    Paket auswählen
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Wartungs-Prozess */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-scaleit-black mb-4">
              Unser Wartungs-Prozess
            </h2>
            <p className="text-xl text-scaleit-gray max-w-3xl mx-auto">
              Strukturierter Ansatz für optimale IT-Wartung
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {wartungsProzess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-gradient-scaleit w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                
                <h3 className="text-xl font-bold text-scaleit-black mb-3">{step.title}</h3>
                <p className="text-scaleit-gray mb-4">{step.description}</p>
                <div className="text-sm font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full inline-block">
                  {step.duration}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-scaleit">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Bereit für professionelle IT-Wartung?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Lassen Sie uns Ihre IT-Infrastruktur analysieren und ein maßgeschneiderten Wartungsplan erstellen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                <MessageSquare className="w-5 h-5 inline mr-2" />
                Kostenlose Beratung
              </Link>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-colors">
                <Phone className="w-5 h-5 inline mr-2" />
                Jetzt anrufen
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
