'use client'

import { motion } from 'framer-motion'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { Building, Mail, Phone, MapPin } from 'lucide-react'

export default function ImprintPage() {
  return (
    <main className="min-h-screen bg-scaleit-white">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl font-bold text-scaleit-black mb-6">
              Impressum
            </h1>
            <p className="text-2xl text-scaleit-gray">
              Rechtliche Informationen gemäß § 5 TMG
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl p-12"
          >
            <div className="space-y-8">
              {/* Unternehmensinformationen */}
              <div>
                <h2 className="text-3xl font-bold text-scaleit-black mb-6 flex items-center">
                  <Building className="w-8 h-8 mr-3 text-scaleit-red" />
                  Angaben gemäß § 5 TMG
                </h2>
                <div className="bg-scaleit-white rounded-xl p-6 border border-scaleit-gray/20">
                  <div className="text-lg space-y-2">
                    <div className="font-bold text-2xl text-scaleit-red">ScaleITS GmbH</div>
                    <div>Jeschkenstraße 9</div>
                    <div>82538 Geretsried</div>
                    <div>Deutschland</div>
                  </div>
                </div>
              </div>

              {/* Kontaktdaten */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Kontakt</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-xl p-4 flex items-center">
                    <Phone className="w-6 h-6 mr-3 text-red-600" />
                    <div>
                      <div className="font-semibold">Telefon</div>
                      <div>+49 8171 908 929-0</div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 flex items-center">
                    <Mail className="w-6 h-6 mr-3 text-red-600" />
                    <div>
                      <div className="font-semibold">E-Mail</div>
                      <div>info@scaleits.de</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Geschäftsführung */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vertreten durch</h3>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="text-lg">
                    <div className="font-semibold">Geschäftsführer:</div>
                    <div>Max Mustermann</div>
                  </div>
                </div>
              </div>

              {/* Registereintrag */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Registereintrag</h3>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="text-lg space-y-1">
                    <div><span className="font-semibold">Eintragung im Handelsregister:</span></div>
                    <div>Registergericht: Amtsgericht Geretsried</div>
                    <div>Registernummer: HRB 12345</div>
                  </div>
                </div>
              </div>

              {/* Umsatzsteuer */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Umsatzsteuer</h3>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="text-lg">
                    <div><span className="font-semibold">Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</span></div>
                    <div>DE123456789</div>
                  </div>
                </div>
              </div>

              {/* Berufsbezeichnung */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Berufsbezeichnung</h3>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="text-lg">
                    <div>IT-Dienstleistungen und -Beratung</div>
                    <div>Verliehen in Deutschland</div>
                  </div>
                </div>
              </div>

              {/* Verantwortlich für den Inhalt */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="text-lg space-y-1">
                    <div>Max Mustermann</div>
                    <div>Jeschkenstraße 9</div>
                    <div>82538 Geretsried</div>
                  </div>
                </div>
              </div>

              {/* Haftungsausschluss */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Haftungsausschluss</h3>
                <div className="bg-gray-50 rounded-xl p-6 text-sm text-gray-700 space-y-4">
                  <div>
                    <strong>Haftung für Inhalte:</strong> Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                  </div>
                  <div>
                    <strong>Haftung für Links:</strong> Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                  </div>
                  <div>
                    <strong>Urheberrecht:</strong> Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
