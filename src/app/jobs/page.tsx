'use client';

import { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { MapPin, Clock, Euro, ArrowRight } from 'lucide-react';

export default function JobsPage() {
  const [hoveredJob, setHoveredJob] = useState<string | null>(null);

  // Memoize hover handlers für Performance
  const handleMouseEnter = useCallback((jobId: string) => {
    setHoveredJob(jobId);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredJob(null);
  }, []);

  // Memoize job data
  const jobListings = useMemo(() => [
    {
      id: 'senior-developer',
      title: 'Senior Full-Stack Developer (m/w/d)',
      department: 'Technik & Entwicklung',
      location: 'München / Remote',
      type: 'Vollzeit',
      salary: '60.000 - 80.000 €',
      description: 'Wir suchen einen erfahrenen Full-Stack Developer zur Verstärkung unseres Teams. Sie arbeiten an innovativen IT-Lösungen und tragen zur digitalen Transformation unserer Kunden bei.',
      requirements: ['5+ Jahre Erfahrung', 'React & Node.js', 'Cloud-Architekturen', 'Teamleitung'],
      benefits: ['Flexible Arbeitszeiten', 'Home Office', 'Weiterbildung', 'Betriebliche Altersvorsorge'],
      color: 'from-scaleit-purple to-scaleit-red'
    },
    {
      id: 'it-consultant',
      title: 'IT Consultant & Projektmanager (m/w/d)',
      department: 'Beratung & Services',
      location: 'München / bundesweit',
      type: 'Vollzeit',
      salary: '55.000 - 75.000 €',
      description: 'Als IT Consultant beraten Sie unsere Kunden bei der digitalen Transformation und leiten spannende Projekte von der Konzeption bis zur Umsetzung.',
      requirements: ['3+ Jahre Beratung', 'Projektmanagement-Zertifizierung', 'IT-Sicherheit', 'Kundenkommunikation'],
      benefits: ['Firmenwagen', 'Reisespesen', 'Zertifizierungen', 'Mentoring-Programm'],
      color: 'from-scaleit-purple to-scaleit-red'
    },
    {
      id: 'sales-manager',
      title: 'Sales Manager IT-Solutions (m/w/d)',
      department: 'Sales & Vertrieb',
      location: 'München',
      type: 'Vollzeit',
      salary: '50.000 - 70.000 € + Provision',
      description: 'Sie sind der erste Ansprechpartner für unsere Kunden und bauen langfristige Partnerschaften auf. Sie präsentieren unsere IT-Lösungen und entwickeln maßgeschneiderte Angebote.',
      requirements: ['Vertriebs-Erfahrung', 'IT-Affinität', 'Verhandlungsgeschick', 'Präsentationsstärke'],
      benefits: ['Attraktive Provision', 'Weiterbildung', 'Team-Events', 'Flexible Arbeitsmodelle'],
      color: 'from-scaleit-purple to-scaleit-red'
    },
    {
      id: 'devops-engineer',
      title: 'DevOps Engineer (m/w/d)',
      department: 'Technik & Entwicklung',
      location: 'München / Remote',
      type: 'Vollzeit',
      salary: '65.000 - 85.000 €',
      description: 'Als DevOps Engineer automatisieren Sie unsere Entwicklungs- und Bereitstellungsprozesse und sorgen für eine zuverlässige und skalierbare Infrastruktur.',
      requirements: ['DevOps Erfahrung', 'AWS/Azure', 'Docker & Kubernetes', 'CI/CD Pipelines'],
      benefits: ['Modernste Tools', 'Zertifizierungen', 'Work-Life-Balance', 'Innovative Projekte'],
      color: 'from-scaleit-purple to-scaleit-red'
    },
    {
      id: 'hr-manager',
      title: 'HR Manager (m/w/d)',
      department: 'Backoffice & Administration',
      location: 'München',
      type: 'Vollzeit',
      salary: '45.000 - 60.000 €',
      description: 'Sie gestalten unsere Unternehmenskultur und unterstützen bei der Personalentwicklung. Sie sind verantwortlich für Recruiting, Onboarding und Mitarbeiterbetreuung.',
      requirements: ['HR-Erfahrung', 'Recruiting', 'Arbeitsrecht', 'Change Management'],
      benefits: ['Verantwortungsvolle Rolle', 'Weiterentwicklung', 'Teamarbeit', 'Work-Life-Balance'],
      color: 'from-scaleit-purple to-scaleit-red'
    },
    {
      id: 'security-consultant',
      title: 'Cybersecurity Consultant (m/w/d)',
      department: 'Beratung & Services',
      location: 'München / bundesweit',
      type: 'Vollzeit',
      salary: '60.000 - 80.000 €',
      description: 'Schützen Sie unsere Kunden vor Cyberbedrohungen. Sie analysieren Sicherheitsrisiken, implementieren Schutzmaßnahmen und beraten bei der Compliance.',
      requirements: ['Security-Zertifizierungen', 'Risikoanalyse', 'Incident Response', 'Compliance'],
      benefits: ['Sicherheitstrainings', 'Zertifizierungen', 'Spezialisierung', 'Abwechslungsreiche Projekte'],
      color: 'from-scaleit-purple to-scaleit-red'
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
            Karriere bei <span className="text-scaleit-red">ScaleITS</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-scaleit-gray max-w-3xl mx-auto mb-12"
          >
            Werden Sie Teil eines innovativen Teams und gestalten Sie die digitale Zukunft mit.
            Wir bieten spannende Herausforderungen und Raum für persönliche Entwicklung.
          </motion.p>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-scaleit-black text-center mb-16"
          >
            Aktuelle Stellenangebote
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobListings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                onMouseEnter={() => handleMouseEnter(job.id)}
                onMouseLeave={handleMouseLeave}
              >
                <div className={`bg-gradient-to-r ${job.color} p-6 text-white`}>
                  <div className="mb-4">
                    <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                      {job.department}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:scale-105 transition-transform duration-200">
                    {job.title}
                  </h3>
                  <p className="text-white/90 text-sm mb-4 line-clamp-2">
                    {job.description}
                  </p>
                </div>

                <div className="p-6">
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-scaleit-gray">
                      <MapPin className="w-4 h-4 mr-2 text-scaleit-red" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-sm text-scaleit-gray">
                      <Clock className="w-4 h-4 mr-2 text-scaleit-red" />
                      {job.type}
                    </div>
                    <div className="flex items-center text-sm text-scaleit-gray">
                      <Euro className="w-4 h-4 mr-2 text-scaleit-red" />
                      {job.salary}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-scaleit-black mb-2">Anforderungen:</h4>
                    <div className="flex flex-wrap gap-1">
                      {job.requirements.slice(0, 3).map((req, reqIndex) => (
                        <span key={reqIndex} className="text-xs bg-gray-100 text-scaleit-gray px-2 py-1 rounded">
                          {req}
                        </span>
                      ))}
                      {job.requirements.length > 3 && (
                        <span className="text-xs bg-gray-100 text-scaleit-gray px-2 py-1 rounded">
                          +{job.requirements.length - 3} mehr
                        </span>
                      )}
                    </div>
                  </div>

                  <Link
                    href={`/jobs/${job.id}`}
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-scaleit-purple to-scaleit-red text-white font-semibold rounded-lg hover:from-scaleit-red hover:to-scaleit-purple transition-all duration-200 group-hover:shadow-lg"
                  >
                    Details ansehen
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-scaleit-purple to-scaleit-red">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Keine passende Stelle gefunden?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Wir sind immer auf der Suche nach talentierten Menschen. Senden Sie uns eine Initiativbewerbung!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-scaleit-purple font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              Initiativbewerbung senden
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
