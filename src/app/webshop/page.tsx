'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import {
  ShoppingCart, Plus, Minus, X, Search,
  Shield, Monitor, Settings, Users, Database, Archive,
  Eye, Zap, CheckCircle, Package, Wrench, Laptop,
  Grid3X3, List, Star, Mail, Cloud, TrendingUp, Target
} from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  description: string;
}

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  priceUnit: string;
  features: string[];
  icon: any;
  popular?: boolean;
}

export default function WebshopPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showCart, setShowCart] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', name: 'Alle Produkte', icon: Package },
    { id: 'security', name: 'Sicherheit', icon: Shield },
    { id: 'management', name: 'Management', icon: Settings },
    { id: 'backup', name: 'Backup', icon: Archive },
    { id: 'services', name: 'Services', icon: Wrench }
  ];

  const products: Product[] = [
    // ACMP Produkte
    {
      id: 'acmp-standard',
      name: 'ACMP Standard',
      category: 'management',
      description: '15 professionelle Module für Einsteiger und Neueinsteiger',
      price: 2.50,
      priceUnit: 'pro Client/Monat',
      icon: Monitor,
      popular: true,
      features: [
        '15 professionelle Module',
        'Einfache Implementierung',
        'Umfassende Dokumentation',
        '24/7 Support',
        'ScaleITS CI zertifiziert'
      ]
    },
    {
      id: 'acmp-individual',
      name: 'ACMP Individual',
      category: 'management',
      description: 'Maßgeschneiderte Lösung für spezielle IT-Verwaltungsanforderungen',
      price: 4.50,
      priceUnit: 'pro Client/Monat',
      icon: Settings,
      features: [
        'Individuelle Module',
        'Erweiterte Funktionen',
        'Maßgeschneiderte Lösungen',
        'Premium Support',
        'Unbegrenzte Module'
      ]
    },

    // Hornetsecurity Produkte
    {
      id: 'hornet-spam-malware',
      name: 'Spam & Malware Protection',
      category: 'security',
      description: 'Grundlegender E-Mail-Schutz gegen Spam und Malware',
      price: 1.50,
      priceUnit: 'pro User/Monat',
      icon: Shield,
      features: [
        'Spam-Filterung (99,9% Trefferquote)',
        'Malware-Erkennung in Echtzeit',
        'E-Mail-Verschlüsselung',
        '24/7 Support'
      ]
    },
    {
      id: 'hornet-365-backup',
      name: '365 Total Backup',
      category: 'backup',
      description: 'Vollständiges Microsoft 365 Backup mit granularem Recovery',
      price: 2.50,
      priceUnit: 'pro User/Monat',
      icon: Archive,
      features: [
        'Automatisches Backup',
        'Granular Recovery',
        'Unlimited Storage',
        '365 Tage Aufbewahrung'
      ]
    },
    {
      id: 'hornet-total-protection-business',
      name: 'Total Protection Business',
      category: 'security',
      description: 'Umfassende Business-Sicherheitslösung mit allen Schutzmechanismen',
      price: 4.00,
      priceUnit: 'pro User/Monat',
      icon: Shield,
      features: [
        'Spam & Malware Protection',
        '365 Total Backup',
        'Advanced Threat Protection',
        'Email Encryption',
        'Compliance Tools'
      ]
    },
    {
      id: 'hornet-total-protection-enterprise',
      name: 'Total Protection Enterprise',
      category: 'security',
      description: 'KI-gestützte Enterprise-Lösung mit höchster Sicherheit',
      price: 7.00,
      priceUnit: 'pro User/Monat',
      icon: Shield,
      popular: true,
      features: [
        'Alle Business Features',
        'KI-gestützte Erkennung',
        'Advanced Analytics',
        'Custom Integrationen',
        'Dedicated Support'
      ]
    },
    {
      id: 'hornet-enterprise-backup',
      name: 'Total Protection Enterprise BackUp',
      category: 'backup',
      description: 'Enterprise-Grade Backup mit erweiterten Sicherheitsfeatures',
      price: 5.00,
      priceUnit: 'pro User/Monat',
      icon: Archive,
      features: [
        'Enterprise Backup',
        'Advanced Encryption',
        'Multi-Region Storage',
        'Compliance Reporting',
        'Priority Recovery'
      ]
    },
    {
      id: 'hornet-compliance-awareness',
      name: 'Total Protection Compliance & Awareness',
      category: 'security',
      description: 'Compliance-Management und Security Awareness Training',
      price: 3.00,
      priceUnit: 'pro User/Monat',
      icon: Users,
      features: [
        'Compliance Management',
        'Security Awareness Training',
        'Phishing Simulationen',
        'Reporting & Analytics',
        'GDPR Compliance'
      ]
    },

    // Arctic Wolf Produkte
    {
      id: 'arctic-wolf-essential',
      name: 'Arctic Wolf Essential',
      category: 'security',
      description: 'Grundschutz für kleine Unternehmen mit MDR für bis zu 100 Endpoints',
      price: 299,
      priceUnit: 'pro Monat',
      icon: Eye,
      features: [
        'MDR für bis zu 100 Endpoints',
        'Basic SOC Services',
        'Email & Phone Support',
        'Monthly Reports',
        '24/7 Monitoring'
      ]
    },
    {
      id: 'arctic-wolf-professional',
      name: 'Arctic Wolf Professional',
      category: 'security',
      description: 'Umfassender Schutz für Unternehmen mit Incident Response',
      price: 799,
      priceUnit: 'pro Monat',
      icon: Eye,
      popular: true,
      features: [
        'MDR für bis zu 500 Endpoints',
        'Incident Response inklusive',
        'Threat Intelligence',
        '24/7 Priority Support',
        'Advanced Analytics'
      ]
    },
    {
      id: 'arctic-wolf-enterprise',
      name: 'Arctic Wolf Enterprise',
      category: 'security',
      description: 'Enterprise-Grade Security Operations mit unbegrenzten Endpoints',
      price: 1499,
      priceUnit: 'pro Monat',
      icon: Eye,
      features: [
        'Unbegrenzte Endpoints',
        'Alle Services inklusive',
        'Dedicated SOC Analyst',
        'Custom Integrations',
        'Executive Reporting'
      ]
    },

    // Microsoft Produkte
    {
      id: 'microsoft-365',
      name: 'Microsoft 365',
      category: 'management',
      description: 'Vollständige Produktivitätssuite für moderne Arbeitsplätze',
      price: 25,
      priceUnit: 'pro User/Monat',
      icon: Mail,
      features: [
        'Word, Excel, PowerPoint, Outlook',
        'Teams für Collaboration',
        'OneDrive Cloud Storage',
        'SharePoint Intranet',
        'Exchange Online',
        'Power Platform'
      ]
    },
    {
      id: 'microsoft-azure',
      name: 'Microsoft Azure',
      category: 'management',
      description: 'Enterprise Cloud-Plattform für moderne Anwendungen',
      price: 0,
      priceUnit: 'Pay-as-you-use',
      icon: Cloud,
      features: [
        'Virtual Machines',
        'App Services',
        'SQL Database',
        'Azure Active Directory',
        'Storage Solutions',
        'AI & Machine Learning'
      ]
    },
    {
      id: 'dynamics-365',
      name: 'Dynamics 365',
      category: 'management',
      description: 'CRM und ERP-Lösung für intelligente Geschäftsprozesse',
      price: 95,
      priceUnit: 'pro User/Monat',
      icon: TrendingUp,
      features: [
        'Sales Automation',
        'Customer Service',
        'Marketing Automation',
        'Finance & Operations',
        'Supply Chain',
        'HR Management'
      ]
    },

    // Services
    {
      id: 'service-it-beratung',
      name: 'IT-Beratung & Strategische Planung',
      category: 'services',
      description: 'Professionelle IT-Beratung für optimale Technologieentscheidungen',
      price: 120,
      priceUnit: 'pro Stunde',
      icon: Users,
      features: [
        'Technologie-Assessment',
        'IT-Strategie',
        'Budgetplanung',
        'Compliance-Beratung',
        'Risikoanalyse'
      ]
    },
    {
      id: 'service-implementation',
      name: 'Implementation & Deployment',
      category: 'services',
      description: 'Reibungslose Implementierung und Bereitstellung von IT-Lösungen',
      price: 150,
      priceUnit: 'pro Stunde',
      icon: Settings,
      features: [
        'System-Migration',
        'Software-Rollout',
        'Integration',
        'Testing & QA',
        'Change Management'
      ]
    },
    {
      id: 'service-wartung',
      name: 'Wartung & Support',
      category: 'services',
      description: '24/7 Wartung und Support für alle Ihre IT-Systeme',
      price: 80,
      priceUnit: 'pro Stunde',
      icon: Wrench,
      features: [
        '24/7 Monitoring',
        'Proaktive Wartung',
        'Remote Support',
        'Update Management',
        'Performance Optimization'
      ]
    },
    {
      id: 'service-projekte',
      name: 'IT-Projekte & Migration',
      category: 'services',
      description: 'Komplexe IT-Projekte und Migrationen mit professionellem Projektmanagement',
      price: 140,
      priceUnit: 'pro Stunde',
      icon: Target,
      features: [
        'Projektmanagement',
        'Cloud Migration',
        'System Integration',
        'Change Management',
        'Qualitätssicherung'
      ]
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart(prev => prev.map(item =>
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-gradient-to-r from-red-600 to-purple-600 text-white px-6 py-3 rounded-full mb-6">
              <ShoppingCart className="w-6 h-6 mr-3" />
              <span className="text-lg font-bold">ScaleITS Webshop</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Professionelle
              <span className="block bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
                IT-Lösungen
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Entdecken Sie unsere umfassende Palette an IT-Sicherheitslösungen,
              Management-Tools und professionellen Services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Produkte suchen..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${
                        selectedCategory === category.id
                          ? 'bg-red-600 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <IconComponent className="w-4 h-4 mr-2" />
                      {category.name}
                    </button>
                  );
                })}
              </div>

              {/* View Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className={`grid gap-6 ${
            viewMode === 'grid'
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
              : 'grid-cols-1'
          }`}>
            {filteredProducts.map((product) => {
              const IconComponent = product.icon;
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                    product.popular ? 'ring-2 ring-red-500' : ''
                  }`}
                >
                  {/* Product Header */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-gradient-to-r from-red-600 to-purple-600 rounded-xl text-white">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      {product.popular && (
                        <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                          Beliebt
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{product.description}</p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <span className="text-3xl font-bold text-gray-900">{product.price}€</span>
                        <span className="text-gray-500 text-sm ml-1">{product.priceUnit}</span>
                      </div>
                    </div>
                  </div>

                  {/* Add to Cart Section */}
                  <div className="px-6 pb-6">
                    <button
                      onClick={() => addToCart(product)}
                      className="w-full bg-gradient-to-r from-red-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-red-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                    >
                      <Plus className="w-5 h-5 mr-2" />
                      Zum Warenkorb
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Keine Produkte gefunden</h3>
              <p className="text-gray-500">Versuchen Sie andere Suchbegriffe oder Kategorien.</p>
            </div>
          )}
        </div>
      </section>

      {/* Shopping Cart Sidebar */}
      <AnimatePresence>
        {showCart && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowCart(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Cart Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <ShoppingCart className="w-6 h-6 mr-3" />
                  Warenkorb
                </h2>
                <button
                  onClick={() => setShowCart(false)}
                  className="text-gray-400 hover:text-red-500"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {cart.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">Warenkorb ist leer</h3>
                    <p className="text-gray-500">Fügen Sie Produkte hinzu, um zu starten.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div key={item.id} className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-semibold text-gray-900">{item.name}</h4>
                            <p className="text-sm text-gray-600">{item.description}</p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-red-500"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-gray-900">
                              {(item.price * item.quantity).toFixed(2)}€
                            </div>
                            <div className="text-sm text-gray-500">
                              {item.price}€ × {item.quantity}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Cart Footer */}
              {cart.length > 0 && (
                <div className="border-t border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-gray-900">Gesamt:</span>
                    <span className="text-2xl font-bold text-red-600">{getTotalPrice().toFixed(2)}€</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-red-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-red-700 hover:to-purple-700 transition-all duration-300">
                    Zur Kasse
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Cart Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowCart(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-red-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 z-40"
      >
        <ShoppingCart className="w-6 h-6" />
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
            {cart.length}
          </span>
        )}
      </motion.button>

      <Footer />
    </main>
  );
}
