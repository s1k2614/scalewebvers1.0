'use client';

import { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import { MapPin, Clock, Euro, ArrowRight, Calendar, User, Newspaper, Briefcase } from 'lucide-react';

export default function NeuigkeitenPage() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'jobs' | 'news'>('all');

  // Memoize hover handlers für Performance
  const handleMouseEnter = useCallback((itemId: string) => {
    setHoveredItem(itemId);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredItem(null);
  }, []);

  // Memoize jobs data
  const jobListings = useMemo(() => [
    {
      id: 'senior-developer',
      type: 'job',
      title: 'Senior Full-Stack Developer (m/w/d)',
      department: 'Technik & Entwicklung',
      location: 'München / Remote',
      typeLabel: 'Vollzeit',
      salary: '60.000 - 80.000 €',
      description: 'Wir suchen einen erfahrenen Full-Stack Developer zur Verstärkung unseres Teams.',
      color: 'from-scaleit-purple to-purple-600',
      icon: <Briefcase className="w-5 h-5" />,
      link: '/jobs/senior-developer'
    },
    {
      id: 'it-consultant',
      type: 'job',
      title: 'IT Consultant & Projektmanager (m/w/d)',
      department: 'Beratung & Services',
      location: 'München / bundesweit',
      typeLabel: 'Vollzeit',
      salary: '55.000 - 75.000 €',
      description: 'Als IT Consultant beraten Sie unsere Kunden bei der digitalen Transformation.',
      color: 'from-blue-500 to-indigo-600',
      icon: <Briefcase className="w-5 h-5" />,
      link: '/jobs/it-consultant'
    }
  ], []);

  // Memoize news data
  const newsListings = useMemo(() => [
    {
      id: 'scaleits-expansion-2025',
      type: 'news',
      title: 'ScaleITS expandiert: Neue Niederlassung in Berlin eröffnet',
      category: 'Unternehmensnews',
      date: '12. September 2025',
      author: 'Max Mustermann',
      excerpt: 'ScaleITS erweitert seine Präsenz und eröffnet eine neue Niederlassung in Berlin.',
      color: 'from-scaleit-red to-red-600',
      icon: <Newspaper className="w-5 h-5" />,
      link: '/it-sicherheitsupdates/scaleits-expansion-2025'
    },
    {
      id: 'cybersecurity-trends-2025',
      type: 'news',
      title: 'Cybersecurity-Trends 2025: Was Unternehmen wissen müssen',
      category: 'Fachwissen',
      date: '8. September 2025',
      author: 'Dr. Sarah Wagner',
      excerpt: 'Der diesjährige Cybersecurity-Report zeigt neue Bedrohungen und Schutzstrategien.',
      color: 'from-green-500 to-emerald-600',
      icon: <Newspaper className="w-5 h-5" />,
      link: '/it-sicherheitsupdates/cybersecurity-trends-2025'
    }
  ], []);

  // Combine and sort all items by date (newest first)
  const allItems = useMemo(() => {
    const combined = [...jobListings, ...newsListings];
    // Sort by some criteria - for now just keep the order
    return combined;
  }, [jobListings, newsListings]);

  // Filter items based on active tab
  const filteredItems = useMemo(() => {
    switch (activeTab) {
      case 'jobs':
        return jobListings;
      case 'news':
        return newsListings;
      default:
        return allItems;
    }
  }, [activeTab, allItems, jobListings, newsListings]);

  const tabData = [
    { id: 'all', label: 'Alle Neuigkeiten', count: allItems.length },
    { id: 'jobs', label: 'Jobs', count: jobListings.length },
    { id: 'news', label: 'IT-Sicherheitsupdates', count: newsListings.length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-scaleit-black mb-6"
          >
            ScaleITS <span className="text-scaleit-red">Neuigkeiten</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-scaleit-gray max-w-3xl mx-auto mb-12"
          >
            Aktuelle Stellenangebote und die neuesten Nachrichten aus der Welt von ScaleITS.
            Bleiben Sie informiert über unsere Entwicklungen und Karrierechancen.
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-1">
              {tabData.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-scaleit-red text-white shadow-sm'
                      : 'text-scaleit-gray hover:text-scaleit-red hover:bg-gray-50'
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-scaleit-black text-center mb-16"
          >
            {activeTab === 'all' && 'Alle Neuigkeiten'}
            {activeTab === 'jobs' && 'Aktuelle Stellenangebote'}
            {activeTab === 'news' && 'Aktuelle IT-Sicherheitsupdates'}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <div className={`bg-gradient-to-r ${item.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-white/20 rounded-lg">
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                      {'department' in item ? item.department : item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:scale-105 transition-transform duration-200 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-white/90 text-sm mb-4 line-clamp-2">
                    {'description' in item ? item.description : item.excerpt}
                  </p>

                  {/* Job-specific info */}
                  {item.type === 'job' && 'location' in item && (
                    <div className="space-y-2 text-white/80 text-xs">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-3 h-3" />
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-3 h-3" />
                        <span>{(item as any).typeLabel}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Euro className="w-3 h-3" />
                        <span>{item.salary}</span>
                      </div>
                    </div>
                  )}

                  {/* News-specific info */}
                  {item.type === 'news' && 'author' in item && (
                    <div className="space-y-2 text-white/80 text-xs">
                      <div className="flex items-center space-x-2">
                        <User className="w-3 h-3" />
                        <span>{item.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-3 h-3" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <Link
                    href={item.link}
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-scaleit-red to-red-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 group-hover:shadow-lg"
                  >
                    {item.type === 'job' ? 'Details ansehen' : 'Weiterlesen'}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Show more links */}
          <div className="mt-16 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/jobs"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-scaleit-purple to-purple-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-purple-700 transition-colors duration-200"
              >
                Alle Jobs ansehen
              </Link>
              <Link
                href="/it-sicherheitsupdates"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-scaleit-red to-red-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-red-700 transition-colors duration-200"
              >
                Alle IT-Sicherheitsupdates ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-scaleit-purple to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Interesse geweckt?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Kontaktieren Sie uns für weitere Informationen oder bewerben Sie sich direkt auf eine unserer Stellen.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-scaleit-purple font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              Kontakt aufnehmen
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
