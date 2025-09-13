'use client';

import { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Calendar, User, ArrowRight, Newspaper } from 'lucide-react';

export default function NewsPage() {
  const [hoveredNews, setHoveredNews] = useState<string | null>(null);

  // Memoize hover handlers für Performance
  const handleMouseEnter = useCallback((newsId: string) => {
    setHoveredNews(newsId);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredNews(null);
  }, []);

  // Memoize news data
  const newsListings = useMemo(() => [
    {
      id: 'scaleits-expansion-2025',
      title: 'ScaleITS expandiert: Neue Niederlassung in Berlin eröffnet',
      category: 'Unternehmensnews',
      date: '12. September 2025',
      author: 'Max Mustermann',
      excerpt: 'ScaleITS erweitert seine Präsenz und eröffnet eine neue Niederlassung in Berlin. Damit stärken wir unsere Position als führender IT-Dienstleister in Deutschland.',
      image: '/images/news/scaleits-berlin.jpg',
      tags: ['Expansion', 'Berlin', 'Wachstum'],
      color: 'from-scaleit-purple to-scaleit-red',
      readTime: '3 min'
    },
    {
      id: 'cybersecurity-trends-2025',
      title: 'Cybersecurity-Trends 2025: Was Unternehmen wissen müssen',
      category: 'Fachwissen',
      date: '8. September 2025',
      author: 'Dr. Sarah Wagner',
      excerpt: 'Der diesjährige Cybersecurity-Report zeigt neue Bedrohungen und Schutzstrategien. Erfahren Sie, wie Sie Ihr Unternehmen optimal absichern können.',
      image: '/images/news/cybersecurity-2025.jpg',
      tags: ['Cybersecurity', 'Trends', 'Schutz'],
      color: 'from-scaleit-purple to-scaleit-red',
      readTime: '5 min'
    },
    {
      id: 'acmp-new-features',
      title: 'ACMP: Neue Features für verbesserte IT-Sicherheit',
      category: 'Produktnews',
      date: '5. September 2025',
      author: 'Thomas Weber',
      excerpt: 'Die neueste Version von ACMP bringt innovative Sicherheitsfeatures und eine verbesserte Benutzeroberfläche für noch mehr Effizienz.',
      image: '/images/news/acmp-update.jpg',
      tags: ['ACMP', 'Sicherheit', 'Update'],
      color: 'from-scaleit-purple to-scaleit-red',
      readTime: '4 min'
    },
    {
      id: 'partnership-microsoft',
      title: 'Neue Partnerschaft: ScaleITS wird Microsoft Gold Partner',
      category: 'Partnerschaften',
      date: '1. September 2025',
      author: 'Lisa Müller',
      excerpt: 'ScaleITS erreicht den Status eines Microsoft Gold Partners. Diese Zertifizierung unterstreicht unsere Expertise in Microsoft-Technologien.',
      image: '/images/news/microsoft-partnership.jpg',
      tags: ['Microsoft', 'Partnerschaft', 'Zertifizierierung'],
      color: 'from-scaleit-purple to-scaleit-red',
      readTime: '3 min'
    },
    {
      id: 'cloud-migration-guide',
      title: 'Cloud-Migration: Leitfaden für erfolgreiche Umstellung',
      category: 'Fachwissen',
      date: '28. August 2025',
      author: 'David Bauer',
      excerpt: 'Eine erfolgreiche Cloud-Migration erfordert sorgfältige Planung. Unser Leitfaden zeigt Ihnen Schritt für Schritt, wie Sie vorgehen sollten.',
      image: '/images/news/cloud-migration.jpg',
      tags: ['Cloud', 'Migration', 'Leitfaden'],
      color: 'from-scaleit-purple to-scaleit-red',
      readTime: '6 min'
    },
    {
      id: 'team-expansion',
      title: 'Team erweitert: Neue Kollegen verstärken ScaleITS',
      category: 'Unternehmensnews',
      date: '25. August 2025',
      author: 'Nina Becker',
      excerpt: 'ScaleITS begrüßt neue Teammitglieder in den Bereichen Entwicklung und Beratung. Erfahren Sie mehr über unsere neuen Kollegen.',
      image: '/images/news/team-expansion.jpg',
      tags: ['Team', 'Expansion', 'Neueinstellungen'],
      color: 'from-scaleit-purple to-scaleit-red',
      readTime: '2 min'
    }
  ], []);

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
            ScaleITS <span className="text-scaleit-red">News</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-scaleit-gray max-w-3xl mx-auto mb-12"
          >
            Bleiben Sie auf dem Laufenden mit den neuesten Entwicklungen, Produktneuheiten
            und Einblicken aus der Welt der IT-Sicherheit und digitalen Transformation.
          </motion.p>
        </div>
      </section>

      {/* News Listings Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-scaleit-black text-center mb-16"
          >
            Aktuelle News
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsListings.map((news, index) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                onMouseEnter={() => handleMouseEnter(news.id)}
                onMouseLeave={handleMouseLeave}
              >
                {/* News Image Placeholder */}
                <div className={`bg-gradient-to-r ${news.color} h-48 flex items-center justify-center`}>
                  <Newspaper className="w-16 h-16 text-white/80" />
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className={`text-xs font-medium bg-gradient-to-r ${news.color} text-white px-3 py-1 rounded-full`}>
                      {news.category}
                    </span>
                    <span className="text-xs text-scaleit-gray">{news.readTime} lesen</span>
                  </div>

                  <h3 className="text-xl font-bold text-scaleit-black mb-3 group-hover:text-scaleit-red transition-colors duration-200 line-clamp-2">
                    {news.title}
                  </h3>

                  <p className="text-scaleit-gray text-sm mb-4 line-clamp-3">
                    {news.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-scaleit-gray mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{news.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{news.date}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {news.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs bg-gray-100 text-scaleit-gray px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                    {news.tags.length > 2 && (
                      <span className="text-xs bg-gray-100 text-scaleit-gray px-2 py-1 rounded">
                        +{news.tags.length - 2}
                      </span>
                    )}
                  </div>

                  <Link
                    href={`/news/${news.id}`}
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-scaleit-purple to-scaleit-red text-white font-semibold rounded-lg hover:from-scaleit-red hover:to-scaleit-purple transition-all duration-200 group-hover:shadow-lg"
                  >
                    Weiterlesen
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-scaleit-purple to-scaleit-red">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Mehr erfahren?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Abonnieren Sie unseren Newsletter und bleiben Sie immer auf dem neuesten Stand.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-scaleit-purple font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              Newsletter abonnieren
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
