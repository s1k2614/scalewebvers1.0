'use client';

import { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import { MapPin, Clock, Euro, ArrowLeft, CheckCircle, Users, Target, Heart } from 'lucide-react';

export default function JobDetailPage() {
  const params = useParams();
  const jobId = params.id as string;
  const [isApplying, setIsApplying] = useState(false);

  // Mock job data - in a real app, this would come from an API
  const jobData = useMemo(() => {
    const jobs = {
      'senior-developer': {
        title: 'Senior Full-Stack Developer (m/w/d)',
        department: 'Technik & Entwicklung',
        location: 'München / Remote',
        type: 'Vollzeit',
        salary: '60.000 - 80.000 €',
        description: `Wir suchen einen erfahrenen Full-Stack Developer zur Verstärkung unseres Teams. Sie arbeiten an innovativen IT-Lösungen und tragen zur digitalen Transformation unserer Kunden bei.

Als Senior Developer übernehmen Sie Verantwortung für die Architektur und Entwicklung komplexer Webanwendungen. Sie arbeiten eng mit unserem Design-Team zusammen und mentorieren junior Entwickler.`,
        requirements: [
          '5+ Jahre Erfahrung in der Webentwicklung',
          'Profunde Kenntnisse in React, Next.js und TypeScript',
          'Erfahrung mit Node.js und RESTful APIs',
          'Kenntnisse in Cloud-Architekturen (AWS/Azure)',
          'Erfahrung in der Teamleitung und Mentoring',
          'Agile Entwicklungsmethoden (Scrum/Kanban)',
          'Git und moderne CI/CD Pipelines'
        ],
        benefits: [
          'Flexible Arbeitszeiten und Home Office Option',
          'Weiterbildung und Zertifizierungen',
          'Betriebliche Altersvorsorge',
          'Gesundheitsmanagement und Sportangebote',
          'Moderne Arbeitsausstattung',
          'Team-Events und Firmenausflüge'
        ],
        responsibilities: [
          'Entwicklung und Wartung von Webanwendungen',
          'Architektur-Entscheidungen und Code-Reviews',
          'Mentoring von Junior-Entwicklern',
          'Technische Dokumentation',
          'Optimierung der Anwendungsperformance',
          'Sicherstellung der Code-Qualität'
        ],
        color: 'from-scaleit-purple to-purple-600'
      },
      'it-consultant': {
        title: 'IT Consultant & Projektmanager (m/w/d)',
        department: 'Beratung & Services',
        location: 'München / bundesweit',
        type: 'Vollzeit',
        salary: '55.000 - 75.000 €',
        description: `Als IT Consultant beraten Sie unsere Kunden bei der digitalen Transformation und leiten spannende Projekte von der Konzeption bis zur Umsetzung.

Sie analysieren bestehende IT-Infrastrukturen, identifizieren Optimierungspotenziale und entwickeln maßgeschneiderte Lösungsstrategien.`,
        requirements: [
          '3+ Jahre Erfahrung in der IT-Beratung',
          'Projektmanagement-Zertifizierung (PMI/IPMA)',
          'Kenntnisse in IT-Sicherheit und Compliance',
          'Ausgezeichnete Kundenkommunikation',
          'Erfahrung mit ERP-Systemen',
          'Analytisches Denkvermögen',
          'Reisebereitschaft'
        ],
        benefits: [
          'Firmenwagen zur privaten Nutzung',
          'Übernahme von Reise- und Verpflegungskosten',
          'Zertifizierungsprogramme',
          'Mentoring durch erfahrene Kollegen',
          'Flexible Arbeitszeitmodelle',
          'Attraktive Weiterentwicklungsmöglichkeiten'
        ],
        responsibilities: [
          'Kundenberatung und Anforderungsanalyse',
          'Projektplanung und -steuerung',
          'Risikoanalyse und Qualitätssicherung',
          'Stakeholder-Management',
          'Budget- und Ressourcenplanung',
          'Change-Management'
        ],
        color: 'from-blue-500 to-indigo-600'
      }
    };

    return jobs[jobId as keyof typeof jobs] || jobs['senior-developer'];
  }, [jobId]);

  const handleApply = useCallback(() => {
    setIsApplying(true);
    // In a real app, this would open an application form or redirect to an application page
    setTimeout(() => {
      setIsApplying(false);
      alert('Bewerbungsfunktion würde hier implementiert werden');
    }, 2000);
  }, []);

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
              href="/jobs"
              className="inline-flex items-center text-scaleit-red hover:text-red-700 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zu den Stellenangeboten
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`bg-gradient-to-r ${jobData.color} p-8 rounded-xl text-white mb-8`}
          >
            <div className="mb-4">
              <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                {jobData.department}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {jobData.title}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white/90">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                {jobData.location}
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                {jobData.type}
              </div>
              <div className="flex items-center">
                <Euro className="w-5 h-5 mr-2" />
                {jobData.salary}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-scaleit-black mb-6">Über die Position</h2>
                <div className="prose prose-lg text-scaleit-gray">
                  {jobData.description.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-scaleit-black mb-6">Ihre Verantwortlichkeiten</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {jobData.responsibilities.map((responsibility, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-scaleit-gray">{responsibility}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-xl font-bold text-scaleit-black mb-4">Anforderungen</h3>
                <ul className="space-y-3">
                  {jobData.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-scaleit-red mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-scaleit-gray">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-xl font-bold text-scaleit-black mb-4">Benefits</h3>
                <ul className="space-y-3">
                  {jobData.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Heart className="w-4 h-4 text-scaleit-purple mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-scaleit-gray">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-r from-scaleit-red to-red-600 rounded-xl p-6 text-white"
              >
                <h3 className="text-xl font-bold mb-4">Interesse geweckt?</h3>
                <p className="text-white/90 mb-6">
                  Bewerben Sie sich jetzt und werden Sie Teil unseres Teams!
                </p>
                <button
                  onClick={handleApply}
                  disabled={isApplying}
                  className="w-full bg-white text-scaleit-red font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isApplying ? 'Wird bearbeitet...' : 'Jetzt bewerben'}
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
