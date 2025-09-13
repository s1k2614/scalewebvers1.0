'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { Mail, Phone, MapPin, Clock, ArrowRight, ShoppingCart, Package } from 'lucide-react'

interface CartItem {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  users?: number;
  clients?: number;
  pieces?: number;
  description: string;
  isAutoAdded?: boolean;
}

export default function ContactPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    interest: '',
    message: ''
  });

  useEffect(() => {
    // Warenkorb-Daten aus URL-Parametern lesen
    const urlParams = new URLSearchParams(window.location.search);
    const cartData = urlParams.get('cart');
    
    if (cartData) {
      try {
        const parsedCart = JSON.parse(decodeURIComponent(cartData));
        setCart(parsedCart);
        
        // Automatisch "Interesse an" auf "Produktanfrage" setzen
        setFormData(prev => ({
          ...prev,
          interest: 'Produktanfrage aus Webshop'
        }));
      } catch (error) {
        console.error('Fehler beim Parsen der Warenkorb-Daten:', error);
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateCartSummary = () => {
    if (cart.length === 0) return '';
    
    let summary = '\n\n=== PRODUKTANFRAGE ===\n';
    let totalPrice = 0;
    
    cart.forEach(item => {
      summary += `\n${item.name}`;
      if (item.users) summary += ` (${item.users} User)`;
      if (item.clients) summary += ` (${item.clients} Clients)`;
      if (item.pieces) summary += ` (${item.pieces} Stück)`;
      summary += `\nPreis: €${item.price.toFixed(2)}`;
      if (item.isAutoAdded) summary += ' (automatisch hinzugefügt)';
      summary += `\nBeschreibung: ${item.description}\n`;
      totalPrice += item.price;
    });
    
    summary += `\nGESAMTSUMME: €${totalPrice.toFixed(2)}`;
    summary += '\n\n=== ENDE PRODUKTANFRAGE ===';
    
    return summary;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Wenn Warenkorb vorhanden ist, öffne Standard-E-Mail-Programm
    if (cart.length > 0) {
      const cartSummary = generateCartSummary();
      const fullMessage = `${formData.message}\n\n${cartSummary}`;
      
      const emailData = {
        to: 'sales@scaleits.de',
        subject: `Anfrage aus dem Webshop - ${formData.firstName} ${formData.lastName}`,
        body: `Neue Produktanfrage:

Name: ${formData.firstName} ${formData.lastName}
E-Mail: ${formData.email}
Unternehmen: ${formData.company || 'Nicht angegeben'}
Interesse: ${formData.interest || 'Nicht angegeben'}

Nachricht:
${fullMessage}

---
Diese Anfrage wurde über das Kontaktformular der ScaleITS Website erstellt.`
      };

      // Erstelle mailto-Link
      const mailtoLink = `mailto:${emailData.to}?subject=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(emailData.body)}`;
      
      // Öffne Standard-E-Mail-Programm
      window.location.href = mailtoLink;
      
      // Formular zurücksetzen nach kurzer Verzögerung
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          interest: '',
          message: ''
        });
        
        // Warenkorb-Parameter aus URL entfernen
        window.history.replaceState({}, document.title, '/contact');
        setCart([]);
      }, 1000);
      
      return;
    }

    // Für normale Kontaktanfragen ohne Warenkorb
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          cart: []
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert('Vielen Dank für Ihre Anfrage! Wir melden uns innerhalb von 24 Stunden bei Ihnen.');
        
        // Formular zurücksetzen
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          interest: '',
          message: ''
        });
      } else {
        alert('Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.');
      }
    } catch (error) {
      console.error('Fehler beim Senden:', error);
      alert('Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.');
    }
  };
  const contactMethods = [
    {
      icon: Phone,
      title: 'Telefon',
      value: '+49 8171 908 929-0',
      description: 'Mo-Fr: 9:00 - 18:00 Uhr'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      value: 'Jeschkenstraße 9',
      description: '82538 Geretsried'
    }
  ]

  return (
    <main className="min-h-screen bg-scaleit-white">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl font-bold text-scaleit-black mb-6">
              Kontakt
            </h1>
            <p className="text-2xl text-scaleit-gray max-w-3xl mx-auto">
              Lassen Sie uns über Ihre IT-Anforderungen sprechen
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white p-8 rounded-3xl shadow-xl text-center"
                >
                  <div className="bg-gradient-to-r from-red-600 to-orange-600 w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-xl text-red-600 font-semibold mb-2">{method.value}</p>
                  <p className="text-gray-600">{method.description}</p>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl p-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Beratung anfragen
            </h2>
            
            {/* Warenkorb-Anzeige */}
            {cart.length > 0 && (
              <div className="mb-8 bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Ihre Produktanfrage
                </h3>
                <div className="space-y-3">
                  {cart.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 border border-green-200">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-gray-900">{item.name}</h4>
                          <p className="text-sm text-gray-600">{item.description}</p>
                          <div className="text-xs text-gray-500 mt-1">
                            {item.users && <span className="mr-3">👥 {item.users} User</span>}
                            {item.clients && <span className="mr-3">💻 {item.clients} Clients</span>}
                            {item.pieces && <span className="mr-3">📦 {item.pieces} Stück</span>}
                            {item.isAutoAdded && <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full">Auto</span>}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-green-600">€{item.price.toFixed(2)}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="border-t border-green-200 pt-3">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-gray-900">Gesamtsumme:</span>
                      <span className="text-xl font-bold text-green-600">
                        €{cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Vorname</label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent" 
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Nachname</label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">E-Mail</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent" 
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Unternehmen</label>
                <input 
                  type="text" 
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent" 
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Interesse an</label>
                <select 
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="">Bitte wählen</option>
                  <option value="ACMP Client Management">ACMP Client Management</option>
                  <option value="Hornetsecurity E-Mail Security">Hornetsecurity E-Mail Security</option>
                  <option value="Arctic Wolf Managed Security">Arctic Wolf Managed Security</option>
                  <option value="Allgemeine Beratung">Allgemeine Beratung</option>
                  <option value="Produktanfrage aus Webshop">Produktanfrage aus Webshop</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Nachricht</label>
                <textarea 
                  rows={6} 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={cart.length > 0 ? "Hier können Sie zusätzliche Informationen zu Ihrer Produktanfrage eingeben..." : ""}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                ></textarea>
              </div>
              <div className="text-center">
                <button 
                  type="submit"
                  className="inline-flex items-center bg-gradient-to-r from-red-600 to-orange-600 text-white px-12 py-4 rounded-full font-semibold text-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-2xl transform hover:scale-105"
                >
                  {cart.length > 0 ? 'Produktanfrage senden' : 'Nachricht senden'} <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}




