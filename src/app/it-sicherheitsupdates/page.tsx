'use client';

import { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Shield, AlertTriangle, RefreshCw, FileText, TrendingUp, Calendar, ArrowRight, Clock, ExternalLink } from 'lucide-react';

export default function ITSicherheitsupdatesPage() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'security' | 'updates' | 'compliance'>('all');

  // Memoize hover handlers für Performance
  const handleMouseEnter = useCallback((itemId: string) => {
    setHoveredItem(itemId);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredItem(null);
  }, []);

  // Memoize security updates data
  const securityUpdates = useMemo(() => [
    {
      id: 'crowdstrike-outage',
      type: 'security',
      title: 'CrowdStrike Global IT-Outage',
      category: 'Sicherheitsvorfall',
      date: '19.07.2024',
      severity: 'Kritisch',
      description: 'Globaler IT-Ausfall durch fehlerhaftes CrowdStrike Update betrifft Millionen Windows-Systeme weltweit.',
      impact: 'Hoher Impact auf Unternehmen und kritische Infrastruktur',
      color: 'from-red-500 to-red-600',
      icon: <AlertTriangle className="w-5 h-5" />,
      link: '#',
      tags: ['CrowdStrike', 'Windows', 'Global Outage', 'BSOD']
    },
    {
      id: 'microsoft-exchange-vulnerability',
      type: 'security',
      title: 'Microsoft Exchange Zero-Day Exploit',
      category: 'Sicherheitslücke',
      date: '15.09.2024',
      severity: 'Hoch',
      description: 'Neue Zero-Day-Schwachstelle in Microsoft Exchange Servern ermöglicht Remote-Code-Ausführung.',
      impact: 'Betroffen: Exchange Server 2013, 2016, 2019',
      color: 'from-orange-500 to-red-500',
      icon: <Shield className="w-5 h-5" />,
      link: '#',
      tags: ['Microsoft', 'Exchange', 'Zero-Day', 'RCE']
    },
    {
      id: 'windows-november-updates',
      type: 'updates',
      title: 'Windows November 2024 Security Updates',
      category: 'Software-Updates',
      date: '12.11.2024',
      severity: 'Mittel',
      description: 'Umfangreiche Sicherheitsupdates für Windows 10/11 mit Patches für 78 CVEs.',
      impact: 'Empfohlene Installation innerhalb von 30 Tagen',
      color: 'from-blue-500 to-indigo-600',
      icon: <RefreshCw className="w-5 h-5" />,
      link: '#',
      tags: ['Windows', 'Security Updates', 'Patches', 'CVE']
    },
    {
      id: 'gdpr-fines-update',
      type: 'compliance',
      title: 'Neue DSGVO-Bußgeldrichtlinien',
      category: 'Compliance-Änderungen',
      date: '01.10.2024',
      severity: 'Hoch',
      description: 'Verschärfte Bußgeldrichtlinien der DSGVO mit höheren Strafen für Datenschutzverstöße.',
      impact: 'Maximalstrafe erhöht auf 4% des Jahresumsatzes',
      color: 'from-purple-500 to-indigo-600',
      icon: <FileText className="w-5 h-5" />,
      link: '#',
      tags: ['DSGVO', 'Bußgeld', 'Datenschutz', 'Compliance']
    },
    {
      id: 'ai-security-trends',
      type: 'security',
      title: 'KI-gestützte Cyberangriffe im Aufwind',
      category: 'IT-Trends',
      date: '25.09.2024',
      severity: 'Mittel',
      description: 'Steigender Trend zu KI-gestützten Phishing- und Social Engineering Angriffen.',
      impact: 'Neue Herausforderungen für traditionelle Sicherheitsmaßnahmen',
      color: 'from-green-500 to-teal-600',
      icon: <TrendingUp className="w-5 h-5" />,
      link: '#',
      tags: ['KI', 'Phishing', 'Social Engineering', 'Trends']
    },
    {
      id: 'cloud-security-best-practices',
      type: 'updates',
      title: 'AWS & Azure Security Best Practices Update',
      category: 'Cloud-Sicherheit',
      date: '08.10.2024',
      severity: 'Mittel',
      description: 'Aktualisierte Sicherheitsrichtlinien für Cloud-Infrastrukturen mit neuen Compliance-Standards.',
      impact: 'Betroffen: Alle Cloud-Service-Provider',
      color: 'from-cyan-500 to-blue-600',
      icon: <Shield className="w-5 h-5" />,
      link: '#',
      tags: ['AWS', 'Azure', 'Cloud', 'Best Practices']
    }
  ], []);

  // Filter items based on active tab
  const filteredItems = useMemo(() => {
    if (activeTab === 'all') return securityUpdates;
    return securityUpdates.filter(item => item.type === activeTab);
  }, [activeTab, securityUpdates]);

  // Tab configuration
  const tabs = useMemo(() => [
    { id: 'all', label: 'Alle Updates', count: securityUpdates.length },
    { id: 'security', label: 'Sicherheitsvorfälle', count: securityUpdates.filter(item => item.type === 'security').length },
    { id: 'updates', label: 'Software-Updates', count: securityUpdates.filter(item => item.type === 'updates').length },
    { id: 'compliance', label: 'Compliance', count: securityUpdates.filter(item => item.type === 'compliance').length }
  ], [securityUpdates]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <div className="p-4 bg-gradient-to-r from-scaleit-red to-red-600 text-white rounded-full">
              <Shield className="w-12 h-12" />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-scaleit-black mb-6"
          >
            IT-<span className="text-scaleit-red">Sicherheitsupdates</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-scaleit-gray max-w-3xl mx-auto mb-8"
          >
            Bleiben Sie informiert über aktuelle Sicherheitsvorfälle, wichtige Software-Updates
            und Compliance-Änderungen in der IT-Branche.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 text-sm text-scaleit-gray"
          >
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              <span>Kritische Sicherheitsvorfälle</span>
            </div>
            <div className="flex items-center space-x-2">
              <RefreshCw className="w-4 h-4 text-blue-500" />
              <span>Software-Updates</span>
            </div>
            <div className="flex items-center space-x-2">
              <FileText className="w-4 h-4 text-purple-500" />
              <span>Compliance-Änderungen</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-scaleit-red to-red-600 text-white shadow-lg'
                    : 'bg-white text-scaleit-gray hover:bg-gray-50 border border-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.label} ({tab.count})
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Security Updates Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${item.color} p-6 text-white`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-white/20 rounded-lg">
                      {item.icon}
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.severity === 'Kritisch' ? 'bg-red-500/20 text-red-100' :
                      item.severity === 'Hoch' ? 'bg-orange-500/20 text-orange-100' :
                      'bg-yellow-500/20 text-yellow-100'
                    }`}>
                      {item.severity}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-white/90">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                    <span className="text-white/70">•</span>
                    <span>{item.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-scaleit-gray mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mb-4">
                    <div className="text-sm font-semibold text-scaleit-black mb-2">Auswirkung:</div>
                    <p className="text-sm text-scaleit-gray">{item.impact}</p>
                  </div>

                  {/* Tags */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-100 text-scaleit-gray text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link
                    href={item.link}
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-scaleit-red to-red-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 text-sm"
                  >
                    Details anzeigen
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-scaleit-red to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Bleiben Sie sicher und informiert
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Als Ihr IT-Sicherheitspartner halten wir Sie über alle wichtigen Entwicklungen auf dem Laufenden
              und helfen Ihnen, proaktiv auf Sicherheitsbedrohungen zu reagieren.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-scaleit-red font-semibold rounded-full hover:bg-gray-50 transition-all duration-200 shadow-lg"
              >
                Sicherheitsberatung anfordern
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-scaleit-red transition-all duration-200"
              >
                Unsere Services entdecken
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}