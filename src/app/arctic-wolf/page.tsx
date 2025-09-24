'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { 
  Shield, Eye, Zap, AlertTriangle, Lock, Server, Globe, Brain,
  ArrowRight, CheckCircle, Play, Terminal, Activity, Target,
  Radar, Search, Clock, Users, TrendingUp, BarChart3, Wifi,
  Monitor, Smartphone, Laptop, Download, Bell, MessageSquare,
  Star, Award, MapPin, Building, Network, Cpu, HardDrive,
  ChevronRight, ChevronDown, ExternalLink, Phone
} from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function ArcticWolfPage() {
  const [activeService, setActiveService] = useState('soc');
  const [threatLevel, setThreatLevel] = useState(2);
  const [detectedThreats, setDetectedThreats] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Simulation for threat detection
  useEffect(() => {
    const interval = setInterval(() => {
      setDetectedThreats(prev => prev + Math.floor(Math.random() * 3));
      setThreatLevel(Math.floor(Math.random() * 4) + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Testimonial rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      id: 'soc',
      name: 'Managed Detection & Response',
      icon: Eye,
      color: 'from-red-600 to-red-400',
      description: '24/7 SOC-as-a-Service mit Expertenkriminalisten',
      features: [
        'Kontinuierliche Bedrohungsüberwachung',
        'Echtzeit-Incident-Response',
        'Threat Intelligence Integration',
        'Forensische Analyse',
        'Custom Playbooks',
        'Multi-Tenant Dashboard'
      ],
      metrics: {
        'MTTD': '< 30 Min',
        'MTTR': '< 2 Std',
        'Abdeckung': '24/7/365',
        'Analisten': '500+ Experten'
      }
    },
    {
      id: 'incident-response',
      name: 'Incident Response',
      icon: Zap,
      color: 'from-red-600 to-orange-600',
      description: 'Sofortige Reaktion auf Sicherheitsvorfälle',
      features: [
        'Automatisierte Eindämmung',
        'Forensische Untersuchung',
        'Malware-Analyse',
        'Evidence Collection',
        'Recovery Planning',
        'Lessons Learned Reports'
      ],
      metrics: {
        'Response Time': '< 15 Min',
        'Containment': '< 1 Std',
        'Recovery': '< 4 Std',
        'Success Rate': '99.9%'
      }
    },
    {
      id: 'threat-intelligence',
      name: 'Threat Intelligence',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      description: 'Proaktive Bedrohungserkennung durch KI',
      features: [
        'Machine Learning Detection',
        'Behavioral Analytics',
        'IOC Management',
        'Attribution Analysis',
        'Threat Hunting',
        'Predictive Intelligence'
      ],
      metrics: {
        'IOCs': '10M+ täglich',
        'Accuracy': '99.7%',
        'False Positives': '< 0.1%',
        'Coverage': 'Global'
      }
    },
    {
      id: 'security-awareness',
      name: 'Security Awareness',
      icon: Users,
      color: 'from-green-600 to-teal-600',
      description: 'Mitarbeiterschulung und Phishing-Simulation',
      features: [
        'Phishing-Simulationen',
        'Security Training',
        'Awareness Campaigns',
        'Risk Assessment',
        'Progress Tracking',
        'Custom Content'
      ],
      metrics: {
        'Training Rate': '95%+',
        'Phishing Reduction': '70%',
        'Completion': '90%+',
        'Languages': '25+'
      }
    }
  ];

  const packages = [
    {
      name: 'Arctic Wolf Essential',
      price: '€299',
      period: '/Monat',
      description: 'Grundschutz für kleine Unternehmen',
      features: [
        'MDR für bis zu 100 Endpoints',
        'Basic SOC Services',
        'Email & Phone Support',
        'Monthly Reports'
      ],
      services: ['soc']
    },
    {
      name: 'Arctic Wolf Professional',
      price: '€799',
      period: '/Monat',
      description: 'Umfassender Schutz für Unternehmen',
      features: [
        'MDR für bis zu 500 Endpoints',
        'Incident Response inklusive',
        'Threat Intelligence',
        '24/7 Priority Support'
      ],
      services: ['soc', 'incident-response', 'threat-intelligence'],
      popular: true
    },
    {
      name: 'Arctic Wolf Enterprise',
      price: '€1.499',
      period: '/Monat',
      description: 'Enterprise-Grade Security Operations',
      features: [
        'Unbegrenzte Endpoints',
        'Alle Services inklusive',
        'Dedicated SOC Analyst',
        'Custom Integrations'
      ],
      services: ['soc', 'incident-response', 'threat-intelligence', 'security-awareness']
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Michael Weber',
      position: 'CTO, TechCorp GmbH',
      content: 'Arctic Wolf hat unsere Security-Operations revolutioniert. Die Reaktionszeiten sind beeindruckend.',
      rating: 5
    },
    {
      name: 'Sarah Müller',
      position: 'CISO, FinancePlus AG',
      content: 'Die Threat Intelligence von Arctic Wolf hilft uns, Angriffe frühzeitig zu erkennen.',
      rating: 5
    },
    {
      name: 'Thomas Bauer',
      position: 'IT-Leiter, Manufacturing GmbH',
      content: 'Seit wir Arctic Wolf nutzen, haben sich unsere Incident-Response-Zeiten halbiert.',
      rating: 5
    }
  ];

  const ThreatMap = () => {
    const threats = [
      { id: 1, x: 20, y: 30, severity: 'high', type: 'Malware', location: 'Berlin' },
      { id: 2, x: 60, y: 20, severity: 'medium', type: 'Phishing', location: 'München' },
      { id: 3, x: 80, y: 60, severity: 'low', type: 'Anomaly', location: 'Hamburg' },
      { id: 4, x: 40, y: 70, severity: 'critical', type: 'APT', location: 'Frankfurt' },
      { id: 5, x: 15, y: 80, severity: 'medium', type: 'DDoS', location: 'Köln' },
      { id: 6, x: 70, y: 40, severity: 'high', type: 'Ransomware', location: 'Stuttgart' }
    ];

    const getSeverityColor = (severity: string) => {
      switch (severity) {
        case 'critical': return 'bg-red-600 border-red-400';
        case 'high': return 'bg-orange-500 border-orange-400';
        case 'medium': return 'bg-yellow-500 border-yellow-400';
        case 'low': return 'bg-green-500 border-green-400';
        default: return 'bg-gray-500 border-gray-400';
      }
    };

    return (
      <div className="relative w-full h-96 bg-gradient-to-br from-red-900 via-gray-900 to-indigo-900 rounded-3xl overflow-hidden shadow-2xl">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-500/10 to-cyan-500/10"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-red-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Threat Indicators */}
        {threats.map((threat) => (
          <motion.div
            key={threat.id}
            className="absolute group"
            style={{ left: `${threat.x}%`, top: `${threat.y}%` }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: threat.id * 0.2 }}
          >
            <motion.div
              className={`w-6 h-6 rounded-full border-2 ${getSeverityColor(threat.severity)} relative cursor-pointer`}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: threat.id * 0.1 }}
              whileHover={{ scale: 1.5 }}
            >
              <div className={`absolute inset-0 rounded-full ${getSeverityColor(threat.severity)} opacity-30 animate-ping`}></div>
            </motion.div>
            
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-black/80 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap">
                <div className="font-semibold">{threat.type}</div>
                <div className="text-gray-300">{threat.location}</div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Scanning lines */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"
          animate={{ y: [0, 384, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.div
          className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-red-400 to-transparent opacity-60"
          animate={{ x: [0, 100, 0].map(x => `${x}%`) }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        {/* Title overlay */}
        <div className="absolute top-6 left-6 text-white">
          <h3 className="text-2xl font-bold mb-2">Global Threat Map</h3>
          <p className="text-gray-300">Live Bedrohungsübersicht</p>
        </div>

        {/* Stats overlay */}
        <div className="absolute bottom-6 right-6 text-white text-right">
          <div className="text-3xl font-bold text-red-400">{detectedThreats}</div>
          <div className="text-sm text-gray-300">Bedrohungen erkannt</div>
        </div>
      </div>
    );
  };

  const SecurityDashboard = () => (
    <div className="bg-gradient-to-br from-gray-900 to-red-900 rounded-3xl p-8 text-white shadow-2xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-3xl font-bold mb-2">Security Operations Center</h3>
          <p className="text-gray-300">Live Überwachung Ihrer Infrastruktur</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-semibold text-green-400">LIVE</span>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <motion.div
          className="bg-red-800/50 rounded-2xl p-6 border border-red-700/50"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-center justify-between mb-3">
            <Eye className="w-6 h-6 text-red-400" />
            <span className="text-xs text-gray-400">Überwacht</span>
          </div>
          <div className="text-3xl font-bold text-white">15,847</div>
          <div className="text-sm text-gray-400">Endpoints</div>
          <div className="mt-2 w-full bg-red-900/50 rounded-full h-1">
            <div className="bg-red-400 h-1 rounded-full w-4/5"></div>
          </div>
        </motion.div>

        <motion.div
          className="bg-orange-800/50 rounded-2xl p-6 border border-orange-700/50"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-center justify-between mb-3">
            <AlertTriangle className="w-6 h-6 text-orange-400" />
            <span className="text-xs text-gray-400">Bedrohungen</span>
          </div>
          <div className="text-3xl font-bold text-white">{detectedThreats}</div>
          <div className="text-sm text-gray-400">Erkannt</div>
          <div className="mt-2 w-full bg-orange-900/50 rounded-full h-1">
            <div className="bg-orange-400 h-1 rounded-full" style={{width: `${Math.min(detectedThreats / 10, 100)}%`}}></div>
          </div>
        </motion.div>

        <motion.div
          className="bg-green-800/50 rounded-2xl p-6 border border-green-700/50"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-center justify-between mb-3">
            <Shield className="w-6 h-6 text-green-400" />
            <span className="text-xs text-gray-400">Blockiert</span>
          </div>
          <div className="text-3xl font-bold text-white">99.9%</div>
          <div className="text-sm text-gray-400">Erfolgsrate</div>
          <div className="mt-2 w-full bg-green-900/50 rounded-full h-1">
            <div className="bg-green-400 h-1 rounded-full w-full"></div>
          </div>
        </motion.div>

        <motion.div
          className="bg-cyan-800/50 rounded-2xl p-6 border border-cyan-700/50"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-center justify-between mb-3">
            <Clock className="w-6 h-6 text-cyan-400" />
            <span className="text-xs text-gray-400">Reaktion</span>
          </div>
          <div className="text-3xl font-bold text-white">12m</div>
          <div className="text-sm text-gray-400">Durchschnitt</div>
          <div className="mt-2 w-full bg-cyan-900/50 rounded-full h-1">
            <div className="bg-cyan-400 h-1 rounded-full w-3/4"></div>
          </div>
        </motion.div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-lg font-semibold text-white">Bedrohungslevel</span>
          <span className={`text-lg font-bold ${
            threatLevel >= 4 ? 'text-red-400' : 
            threatLevel >= 3 ? 'text-orange-400' : 
            threatLevel >= 2 ? 'text-yellow-400' : 'text-green-400'
          }`}>
            {threatLevel >= 4 ? 'KRITISCH' : 
             threatLevel >= 3 ? 'HOCH' : 
             threatLevel >= 2 ? 'MITTEL' : 'NIEDRIG'}
          </span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
          <motion.div 
            className={`h-full rounded-full transition-all duration-1000 ${
              threatLevel >= 4 ? 'bg-gradient-to-r from-red-500 to-red-600' : 
              threatLevel >= 3 ? 'bg-gradient-to-r from-orange-500 to-orange-600' : 
              threatLevel >= 2 ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' : 'bg-gradient-to-r from-green-500 to-green-600'
            }`}
            style={{ width: `${threatLevel * 25}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${threatLevel * 25}%` }}
          ></motion.div>
        </div>
      </div>

      {/* Recent Alerts */}
      <div className="bg-black/30 rounded-2xl p-4">
        <h4 className="text-lg font-semibold text-white mb-3">Letzte Alarme</h4>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-300">Phishing-Versuch blockiert</span>
            <span className="text-green-400">2 Min ago</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-300">Malware erkannt</span>
            <span className="text-orange-400">5 Min ago</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-300">Ungewöhnlicher Traffic</span>
            <span className="text-yellow-400">8 Min ago</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 via-white to-cyan-50">
      <Navigation />
      
      {/* Enhanced Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-20 w-96 h-96 bg-red-500/10 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          ></motion.div>
          <motion.div
            className="absolute top-40 right-20 w-80 h-80 bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          ></motion.div>
          <motion.div
            className="absolute bottom-20 left-1/3 w-72 h-72 bg-indigo-500/10 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 12, repeat: Infinity }}
          ></motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            {/* Arctic Wolf Logo Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              className="inline-flex items-center bg-gradient-to-r from-red-600 via-red-500 to-red-400 text-white px-8 py-4 rounded-full shadow-2xl mb-8 hover:shadow-red-500/25 transition-shadow duration-300"
            >
              <Shield className="w-8 h-8 mr-4 animate-pulse" />
              <span className="text-xl font-bold">Arctic Wolf Managed Security</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 leading-tight"
            >
              Cyber-Security
              <span className="block bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent">
                Operations Center
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed mb-12"
            >
              Arctic Wolf bietet die weltweit führende Security Operations Cloud-Plattform.
              <span className="font-semibold text-red-600">24/7 Überwachung</span>, 
              <span className="font-semibold text-red-600">Bedrohungserkennung</span> und 
              <span className="font-semibold text-red-600">Incident Response</span> durch Sicherheitsexperten.
            </motion.p>

            {/* ScaleITS Reseller Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mb-12"
            >
              <div className="inline-flex items-center bg-gradient-to-r from-gray-800 to-gray-600 text-white px-8 py-4 rounded-full shadow-xl">
                <Award className="w-6 h-6 mr-3" />
                <span className="text-lg font-bold">ScaleITS - Arctic Wolf Authorized Reseller</span>
              </div>
              <p className="text-gray-600 mt-3 text-lg">
                Als autorisierter Reseller bieten wir Ihnen professionelle Beratung und vollständige Implementation
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link 
                href="/contact" 
                className="group inline-flex items-center bg-gradient-to-r from-red-600 to-red-400 text-white px-10 py-5 rounded-full font-bold text-xl hover:from-red-700 hover:to-red-500 transition-all duration-300 shadow-2xl transform hover:scale-105 hover:shadow-red-500/50"
              >
                <Shield className="w-6 h-6 mr-3" />
                Security Assessment starten
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="group inline-flex items-center border-3 border-red-600 text-red-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-red-600 hover:text-white transition-all duration-300 shadow-xl hover:shadow-red-500/25">
                <a href="/pdfs/arctic-wolf-produktinfo.pdf" download className="flex items-center">
                  <Download className="w-6 h-6 mr-3" />
                  Produktinfo herunterladen
                  <ExternalLink className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            >
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
                <div className="text-gray-600">Security Experten</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-red-600 mb-2">24/7</div>
                <div className="text-gray-600">Überwachung</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-red-600 mb-2">&lt; 30m</div>
                <div className="text-gray-600">MTTD</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-red-600 mb-2">99.9%</div>
                <div className="text-gray-600">Erfolgsrate</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Live Threat Map Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-red-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-500/5 to-cyan-500/5"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Live Threat Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Globale Bedrohungsübersicht in Echtzeit - sehen Sie, wie Arctic Wolf Ihr Unternehmen schützt
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <ThreatMap />
          </motion.div>
        </div>
      </section>

      {/* Security Dashboard Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Security Operations Center
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Live-Überwachung Ihrer Infrastruktur durch Arctic Wolf Experten
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <SecurityDashboard />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Security Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Umfassende Cybersecurity-Services für moderne Unternehmen
            </p>
          </motion.div>

          {/* Service Navigation */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <motion.button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`relative p-8 rounded-3xl border-2 transition-all duration-300 ${
                    activeService === service.id
                      ? 'border-red-500 bg-red-50 shadow-2xl scale-105'
                      : 'border-gray-200 hover:border-red-300 bg-white hover:shadow-lg'
                  }`}
                  whileHover={{ scale: activeService === service.id ? 1.05 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-lg font-bold text-gray-700 text-center mb-2">
                    {service.name}
                  </div>
                  <div className="text-sm text-gray-600 text-center">
                    {service.description}
                  </div>
                  {activeService === service.id && (
                    <motion.div
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-red-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Active Service Details */}
          <AnimatePresence mode="wait">
            {services.map((service) => {
              if (service.id !== activeService) return null;
              const IconComponent = service.icon;
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-white to-red-50 rounded-3xl p-10 shadow-2xl border border-red-100"
                >
                  <div className="grid lg:grid-cols-2 gap-10">
                    <div>
                      <div className="flex items-center mb-8">
                        <div className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${service.color} flex items-center justify-center mr-6 shadow-xl`}>
                          <IconComponent className="w-10 h-10 text-white" />
                        </div>
                        <div>
                          <h3 className="text-4xl font-bold text-gray-900 mb-2">{service.name}</h3>
                          <p className="text-xl text-gray-600">{service.description}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-2xl font-semibold text-gray-900 mb-6">Features</h4>
                        <div className="grid grid-cols-1 gap-4">
                          {service.features.map((feature, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100"
                            >
                              <CheckCircle className="w-6 h-6 text-red-500 mr-4 flex-shrink-0" />
                              <span className="text-gray-700 font-medium">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-2xl font-semibold text-gray-900 mb-6">Key Metrics</h4>
                      <div className="grid grid-cols-2 gap-6">
                        {Object.entries(service.metrics).map(([key, value], index) => (
                          <motion.div
                            key={key}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gradient-to-br from-red-50 to-cyan-50 p-6 rounded-2xl border border-red-100 shadow-sm"
                          >
                            <div className="text-sm text-gray-600 mb-2 font-medium">{key}</div>
                            <div className="text-3xl font-bold text-red-600">{value}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-red-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Kundenstimmen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Erfahren Sie, wie Arctic Wolf anderen Unternehmen geholfen hat
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl p-10 shadow-2xl text-center"
              >
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-2xl text-gray-700 mb-8 italic">
                  "{testimonials[activeTestimonial].content}"
                </blockquote>
                <div>
                  <div className="font-bold text-lg text-gray-900">{testimonials[activeTestimonial].name}</div>
                  <div className="text-gray-600">{testimonials[activeTestimonial].position}</div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial ? 'bg-red-500 w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Arctic Wolf Pakete
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Skalierbare Security-Lösungen für jede Unternehmensgröße
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative bg-white rounded-3xl p-8 shadow-2xl border-2 transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                  pkg.popular ? 'border-red-500 ring-4 ring-red-100' : 'border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-600 to-red-400 text-white px-8 py-3 rounded-full text-lg font-bold shadow-xl">
                      ⭐ Empfohlen
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">{pkg.name}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{pkg.description}</p>
                  <div className="flex items-end justify-center mb-8">
                    <span className="text-6xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-gray-600 ml-3 text-xl">{pkg.period}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-10">
                  {pkg.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.1 }}
                      className="flex items-center"
                    >
                      <CheckCircle className="w-6 h-6 text-red-500 mr-4 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Enthaltene Services:</h4>
                  <div className="flex flex-wrap gap-3">
                    {pkg.services.map((serviceId) => {
                      const service = services.find(s => s.id === serviceId);
                      if (!service) return null;
                      const IconComponent = service.icon;
                      return (
                        <motion.div
                          key={serviceId}
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center bg-gradient-to-r from-red-50 to-cyan-50 rounded-xl px-4 py-2 border border-red-100"
                        >
                          <IconComponent className="w-5 h-5 mr-3 text-red-600" />
                          <span className="text-sm text-red-700 font-medium">{service.name.split(' ')[0]}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className={`block w-full text-center py-5 rounded-2xl font-bold text-xl transition-all duration-300 shadow-xl ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-red-600 to-red-400 text-white hover:from-red-700 hover:to-red-500 shadow-red-500/25 hover:shadow-red-500/50'
                      : 'border-3 border-red-600 text-red-600 hover:bg-red-600 hover:text-white hover:shadow-red-500/25'
                  }`}
                >
                  {pkg.popular ? 'Jetzt starten' : 'Mehr erfahren'}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-r from-red-600 to-red-400 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
          <motion.div
            className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
          ></motion.div>
          <motion.div
            className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"
            animate={{ scale: [1.5, 1, 1.5] }}
            transition={{ duration: 8, repeat: Infinity }}
          ></motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Bereit für maximale Sicherheit?
            </h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto mb-12">
              Starten Sie noch heute mit Arctic Wolf und schützen Sie Ihr Unternehmen vor modernen Cyberbedrohungen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center bg-white text-red-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl transform hover:scale-105"
              >
                <Shield className="w-6 h-6 mr-3" />
                Kostenloses Assessment
                <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
              <button className="inline-flex items-center border-2 border-white text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-red-600 transition-all duration-300">
                <Phone className="w-6 h-6 mr-3" />
                0800 - ARCTICWOLF
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}




