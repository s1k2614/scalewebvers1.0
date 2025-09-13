'use client';

import { motion } from 'framer-motion';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import { 
  Lightbulb, Users, Target, CheckCircle, ArrowRight, 
  MessageSquare, Calendar, FileText, TrendingUp, Award,
  Clock, Shield, Zap, Brain, Eye, Settings, Download, 
  BarChart3, Cog, Network, DollarSign, Lock, Cloud, 
  Building, Smartphone, Code, Database, Wrench, Phone
} from 'lucide-react';
import Link from 'next/link';

export default function BeratungPage() {
  const consultingServices = [
    {
      title: "IT-Strategie & Roadmap",
      description: "Entwicklung einer zukunftssicheren IT-Strategie für nachhaltigen Geschäftserfolg",
      icon: Target,
      features: ["Strategische Planung", "Technologie-Roadmap", "ROI-Optimierung", "Zukunftssicherheit"]
    },
    {
      title: "Systemanalyse & Assessment",
      description: "Umfassende Bewertung Ihrer IT-Landschaft mit konkreten Verbesserungsempfehlungen",
      icon: Eye,
      features: ["Status-Quo Analyse", "Performance-Check", "Sicherheitsbewertung", "Optimierungsplan"]
    },
    {
      title: "Cloud Migration Beratung",
      description: "Professionelle Begleitung bei der Migration in die Cloud",
      icon: Cloud,
      features: ["Cloud-Strategie", "Migrations-Roadmap", "Kosten-Nutzen-Analyse", "Risikobewertung"]
    },
    {
      title: "Digitale Transformation",
      description: "Beratung für die erfolgreiche digitale Transformation Ihres Unternehmens",
      icon: Zap,
      features: ["Prozessoptimierung", "Technologie-Integration", "Change Management", "Effizienzsteigerung"]
    },
    {
      title: "Compliance & Governance",
      description: "Unterstützung bei der Einhaltung von Compliance-Anforderungen und IT-Governance",
      icon: Shield,
      features: ["DSGVO-Compliance", "IT-Governance", "Audit-Vorbereitung", "Regelkonformität"]
    },
    {
      title: "Architektur-Beratung",
      description: "Design und Optimierung Ihrer IT-Architektur für maximale Effizienz",
      icon: Building,
      features: ["Architektur-Design", "Skalierbarkeit", "Performance-Optimierung", "Best Practices"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Analyse & Bestandsaufnahme",
      description: "Umfassende Evaluation Ihrer aktuellen IT-Landschaft und Geschäftsprozesse",
      icon: Eye,
      details: ["IST-Zustand erfassen", "Schwachstellen identifizieren", "Potentiale aufdecken", "Anforderungen definieren"]
    },
    {
      step: "02", 
      title: "Strategieentwicklung",
      description: "Entwicklung einer maßgeschneiderten IT-Strategie basierend auf Ihren Geschäftszielen",
      icon: Brain,
      details: ["Zieldefinition", "Lösungskonzepte", "Roadmap-Erstellung", "Priorisierung"]
    },
    {
      step: "03",
      title: "Umsetzungsplanung",
      description: "Detaillierte Planung der Implementierung mit Zeitplänen und Meilensteinen",
      icon: Calendar,
      details: ["Projektplanung", "Ressourcenplanung", "Zeitschienen", "Meilensteine"]
    },
    {
      step: "04",
      title: "Begleitung & Monitoring",
      description: "Kontinuierliche Begleitung während der Umsetzung mit regelmäßigen Reviews",
      icon: TrendingUp,
      details: ["Projektbegleitung", "Qualitätssicherung", "Fortschrittskontrolle", "Anpassungen"]
    }
  ];

  const benefits = [
    {
      title: "Kosteneffizienz",
      description: "Optimierung Ihrer IT-Ausgaben durch strategische Planung",
      icon: DollarSign,
      value: "30%",
      metric: "Kosteneinsparung"
    },
    {
      title: "Zukunftssicherheit",
      description: "Vorbereitung auf zukünftige Herausforderungen und Technologien",
      icon: Shield,
      value: "5+",
      metric: "Jahre Planungshorizont"
    },
    {
      title: "Effizienzsteigerung",
      description: "Verbesserung der Arbeitsabläufe durch optimierte IT-Prozesse",
      icon: TrendingUp,
      value: "40%",
      metric: "Produktivitätssteigerung"
    },
    {
      title: "Risikominimierung",
      description: "Reduzierung von IT-Risiken durch professionelle Beratung",
      icon: Lock,
      value: "90%",
      metric: "Weniger Ausfälle"
    }
  ];

  const testimonials = [
    {
      quote: "Die Beratung von ScaleITS hat unsere IT-Strategie revolutioniert. Wir konnten unsere Kosten um 35% senken und gleichzeitig die Performance verbessern.",
      author: "Michael Weber",
      position: "IT-Leiter",
      company: "TechCorp AG"
    },
    {
      quote: "Dank der professionellen Cloud-Migration-Beratung konnten wir erfolgreich in die Cloud wechseln. Der Prozess war reibungslos und gut durchdacht.",
      author: "Sarah Schmidt",
      position: "CTO",
      company: "InnovateTech GmbH"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-roboto">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-scaleit text-white py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6">
              IT-Beratung für Ihren Erfolg
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Strategische IT-Beratung, die Ihr Unternehmen voranbringt. Von der Analyse bis zur Umsetzung - 
              wir begleiten Sie auf dem Weg zur optimalen IT-Lösung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-scaleit-red px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                Kostenlose Beratung
              </Link>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-scaleit-red transition-colors">
                <Download className="w-5 h-5 inline mr-2" />
                Service-Broschüre
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Beratungsleistungen */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-scaleit-black mb-6">Unsere Beratungsleistungen</h2>
            <p className="text-xl text-scaleit-gray max-w-3xl mx-auto">
              Maßgeschneiderte IT-Beratung für jeden Bedarf - von der strategischen Planung bis zur technischen Umsetzung.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-scaleit-red group"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-scaleit rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-scaleit-black mb-3">{service.title}</h3>
                  <p className="text-scaleit-gray mb-4">{service.description}</p>
                </div>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-scaleit-gray">
                      <CheckCircle className="w-4 h-4 text-scaleit-red mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button className="mt-6 w-full bg-scaleit-gray text-white py-3 rounded-full font-semibold hover:bg-scaleit-red transition-colors group-hover:bg-scaleit-red">
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4 inline ml-2" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Beratungsprozess */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-scaleit-black mb-6">Unser Beratungsprozess</h2>
            <p className="text-xl text-scaleit-gray max-w-3xl mx-auto">
              Ein strukturierter Ansatz für optimale Ergebnisse - von der ersten Analyse bis zur erfolgreichen Umsetzung.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-scaleit-red">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-scaleit rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-scaleit-red mb-2">{step.step}</div>
                    <h3 className="text-lg font-bold text-scaleit-black mb-3">{step.title}</h3>
                    <p className="text-scaleit-gray mb-4 text-sm">{step.description}</p>
                    
                    <div className="space-y-1">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="text-xs text-scaleit-gray flex items-center">
                          <div className="w-1 h-1 bg-scaleit-red rounded-full mr-2"></div>
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-scaleit-red z-10"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-scaleit-black mb-6">Ihre Vorteile</h2>
            <p className="text-xl text-scaleit-gray max-w-3xl mx-auto">
              Messbare Ergebnisse durch professionelle IT-Beratung - das sind die Vorteile für Ihr Unternehmen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-scaleit rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-scaleit-red mb-2">{benefit.value}</div>
                <div className="text-sm text-scaleit-gray mb-4">{benefit.metric}</div>
                <h3 className="text-xl font-bold text-scaleit-black mb-3">{benefit.title}</h3>
                <p className="text-scaleit-gray">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Kundenstimmen */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-scaleit-black mb-6">Was unsere Kunden sagen</h2>
            <p className="text-xl text-scaleit-gray max-w-3xl mx-auto">
              Erfahren Sie, wie andere Unternehmen von unserer Beratung profitiert haben.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="mb-6">
                  <div className="text-4xl text-scaleit-red mb-4">"</div>
                  <p className="text-scaleit-gray italic text-lg leading-relaxed">{testimonial.quote}</p>
                </div>
                <div className="border-t border-gray-100 pt-6">
                  <div className="font-bold text-scaleit-black">{testimonial.author}</div>
                  <div className="text-scaleit-gray">{testimonial.position}</div>
                  <div className="text-scaleit-red font-semibold">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-scaleit text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Bereit für den nächsten Schritt?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Lassen Sie uns gemeinsam Ihre IT-Herausforderungen angehen und eine maßgeschneiderte Lösung entwickeln. 
              Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-scaleit-red px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform text-lg">
                <MessageSquare className="w-5 h-5 inline mr-2" />
                Kostenlose Beratung
              </Link>
              <Link href="tel:+49-xxx-xxx-xxx" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-scaleit-red transition-colors text-lg">
                <Phone className="w-5 h-5 inline mr-2" />
                Sofort anrufen
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
