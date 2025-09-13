'use client';

import { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import { Calendar, User, ArrowLeft, Share2, Newspaper, Tag } from 'lucide-react';

export default function NewsDetailPage() {
  const params = useParams();
  const newsId = params.id as string;

  // Mock news data - in a real app, this would come from an API
  const newsData = useMemo(() => {
    const news = {
      'scaleits-expansion-2025': {
        title: 'ScaleITS expandiert: Neue Niederlassung in Berlin eröffnet',
        category: 'Unternehmensnews',
        date: '12. September 2025',
        author: 'Max Mustermann',
        excerpt: 'ScaleITS erweitert seine Präsenz und eröffnet eine neue Niederlassung in Berlin.',
        content: `
          <p>ScaleITS freut sich, die Eröffnung unserer neuen Niederlassung in Berlin bekannt zu geben. Mit diesem wichtigen Schritt erweitern wir unsere Präsenz in der deutschen Hauptstadt und stärken unsere Position als führender IT-Dienstleister.</p>

          <h2>Warum Berlin?</h2>
          <p>Berlin ist nicht nur die politische Hauptstadt Deutschlands, sondern auch ein wichtiges Zentrum für Innovation und Technologie. Die Stadt bietet ideale Bedingungen für unser Wachstum und ermöglicht es uns, noch näher an unseren Kunden zu sein.</p>

          <h2>Was erwartet unsere Kunden?</h2>
          <p>In unserer neuen Berliner Niederlassung bieten wir alle unsere bewährten Services an:</p>
          <ul>
            <li>IT-Beratung und strategische Planung</li>
            <li>Implementierung und Deployment von IT-Lösungen</li>
            <li>24/7 Support und Wartung</li>
            <li>Cybersecurity-Beratung und -Lösungen</li>
          </ul>

          <h2>Das Team</h2>
          <p>Unser Berliner Team besteht aus erfahrenen IT-Experten, die bereits erfolgreich in anderen Niederlassungen gearbeitet haben. Sie bringen jahrelange Erfahrung in der IT-Branche mit und sind bestens aufgestellt, um unsere Kunden optimal zu betreuen.</p>

          <p>Wir freuen uns darauf, unsere Kunden in Berlin persönlich begrüßen zu dürfen und gemeinsam an innovativen IT-Lösungen zu arbeiten.</p>
        `,
        tags: ['Expansion', 'Berlin', 'Wachstum'],
        color: 'from-scaleit-red to-red-600',
        readTime: '3 min'
      },
      'cybersecurity-trends-2025': {
        title: 'Cybersecurity-Trends 2025: Was Unternehmen wissen müssen',
        category: 'Fachwissen',
        date: '8. September 2025',
        author: 'Dr. Sarah Wagner',
        excerpt: 'Der diesjährige Cybersecurity-Report zeigt neue Bedrohungen und Schutzstrategien.',
        content: `
          <p>Der Cybersecurity-Report 2025 zeigt eine sich ständig weiterentwickelnde Bedrohungslandschaft. Unternehmen müssen sich auf neue Herausforderungen einstellen und ihre Sicherheitsstrategien entsprechend anpassen.</p>

          <h2>Die wichtigsten Trends 2025</h2>

          <h3>1. KI-gestützte Angriffe</h3>
          <p>Künstliche Intelligenz wird zunehmend für Cyberangriffe eingesetzt. Automatisierte Angriffe werden präziser und effizienter.</p>

          <h3>2. Supply Chain Attacks</h3>
          <p>Angriffe über die Lieferkette nehmen zu. Unternehmen müssen ihre gesamte Supply Chain absichern.</p>

          <h3>3. Zero-Trust-Architekturen</h3>
          <p>Zero-Trust-Modelle werden zum Standard. "Vertrauen ist gut, Kontrolle ist besser" gilt mehr denn je.</p>

          <h2>Schutzstrategien für 2025</h2>
          <p>Um diesen Bedrohungen entgegenzuwirken, empfehlen wir:</p>
          <ul>
            <li>Regelmäßige Sicherheitsaudits</li>
            <li>Implementierung von Zero-Trust-Modellen</li>
            <li>Schulungen für Mitarbeiter</li>
            <li>Automatisierte Überwachungssysteme</li>
            <li>Notfallpläne und Backup-Strategien</li>
          </ul>

          <p>ScaleITS unterstützt Sie dabei, diese Strategien erfolgreich umzusetzen und Ihr Unternehmen optimal zu schützen.</p>
        `,
        tags: ['Cybersecurity', 'Trends', 'Schutz'],
        color: 'from-blue-500 to-indigo-600',
        readTime: '5 min'
      }
    };

    return news[newsId as keyof typeof news] || news['scaleits-expansion-2025'];
  }, [newsId]);

  const handleShare = useCallback(() => {
    if (navigator.share) {
      navigator.share({
        title: newsData.title,
        text: newsData.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link wurde in die Zwischenablage kopiert!');
    }
  }, [newsData]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Link
              href="/news"
              className="inline-flex items-center text-scaleit-red hover:text-red-700 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zu den News
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`bg-gradient-to-r ${newsData.color} p-8 rounded-xl text-white mb-8`}
          >
            <div className="mb-4">
              <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                {newsData.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {newsData.title}
            </h1>
            <p className="text-white/90 text-lg mb-6">
              {newsData.excerpt}
            </p>
            <div className="flex items-center justify-between text-white/80 text-sm">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span>{newsData.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{newsData.date}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span>{newsData.readTime}</span>
                <button
                  onClick={handleShare}
                  className="flex items-center space-x-1 hover:text-white transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Teilen</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <div
                  className="prose prose-lg max-w-none text-scaleit-gray"
                  dangerouslySetInnerHTML={{ __html: newsData.content }}
                />
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-lg font-bold text-scaleit-black mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {newsData.tags.map((tag, index) => (
                    <span key={index} className="inline-flex items-center space-x-1 text-sm bg-gray-100 text-scaleit-gray px-3 py-1 rounded-full">
                      <Tag className="w-3 h-3" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-r from-scaleit-purple to-purple-600 rounded-xl p-6 text-white"
              >
                <h3 className="text-xl font-bold mb-4">Bleiben Sie informiert</h3>
                <p className="text-white/90 mb-4">
                  Abonnieren Sie unseren Newsletter für die neuesten Updates.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-white text-scaleit-purple font-semibold py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  Newsletter abonnieren
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
