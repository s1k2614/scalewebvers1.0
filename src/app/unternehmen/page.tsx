'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function UnternehmenPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section mit Hintergrundbild */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Hintergrundbild mit Unschärfe */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/unternehmen/team-all.png"
            alt="ScaleITS Team"
            fill
            className="object-cover filter blur-[1px] scale-110"
            priority
          />
          {/* Overlay für bessere Lesbarkeit */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Unser <span className="text-scaleit-red">Team</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-8"
          >
            Die Menschen hinter ScaleITS - Experten, die Ihre IT-Zukunft gestalten
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-1 bg-scaleit-red mx-auto"
          ></motion.div>
        </div>
      </section>

      {/* Abteilungen Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Founder Section - Bild links, Text rechts */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24"
          >
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/unternehmen/team-founder.png"
                alt="Founder & Geschäftsführung"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-scaleit-black">
                Founder & <span className="text-scaleit-red">Geschäftsführung</span>
              </h2>
              <p className="text-lg text-scaleit-gray leading-relaxed">
                Unsere Visionäre setzen die strategische Richtung und treiben die langfristige Entwicklung von ScaleITS voran.
                Sie definieren unsere Unternehmensziele, bauen strategische Partnerschaften auf und sorgen für nachhaltiges Wachstum.
              </p>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-scaleit-black">Für unsere Kunden bedeuten wir:</h3>
                <ul className="space-y-2 text-scaleit-gray">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-scaleit-red rounded-full mt-2 flex-shrink-0"></div>
                    <span>Langfristige strategische Partnerschaft mit klarer Vision</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-scaleit-red rounded-full mt-2 flex-shrink-0"></div>
                    <span>Stabile Unternehmensführung und kontinuierliche Weiterentwicklung</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-scaleit-red rounded-full mt-2 flex-shrink-0"></div>
                    <span>Zuverlässigkeit und Vertrauen in alle Geschäftsprozesse</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Technik Section - Text links, Bild rechts */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24"
          >
            <div className="space-y-6 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold text-scaleit-black">
                Technik & <span className="text-scaleit-red">Entwicklung</span>
              </h2>
              <p className="text-lg text-scaleit-gray leading-relaxed">
                Unser technisches Herz entwickelt innovative IT-Lösungen und betreut komplexe Infrastrukturen.
                Von der Konzeption bis zur Implementierung sorgen wir für technologische Exzellenz.
              </p>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-scaleit-black">Für unsere Kunden bedeuten wir:</h3>
                <ul className="space-y-2 text-scaleit-gray">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-scaleit-red rounded-full mt-2 flex-shrink-0"></div>
                    <span>Maßgeschneiderte IT-Lösungen für individuelle Anforderungen</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-scaleit-red rounded-full mt-2 flex-shrink-0"></div>
                    <span>Zuverlässige Systeme und Infrastruktur mit höchster Sicherheit</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-scaleit-red rounded-full mt-2 flex-shrink-0"></div>
                    <span>Kontinuierliche Innovation und technologische Weiterentwicklung</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl lg:order-2">
              <Image
                src="/images/unternehmen/team-technik.png"
                alt="Technik & Entwicklung"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Sales Section - Bild links, Text rechts */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24"
          >
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/unternehmen/team-sales.png"
                alt="Sales & Vertrieb"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-scaleit-black">
                Sales & <span className="text-scaleit-red">Vertrieb</span>
              </h2>
              <p className="text-lg text-scaleit-gray leading-relaxed">
                Unser Vertriebsteam ist die Schnittstelle zu unseren Kunden. Mit profundem IT-Verständnis
                und ausgezeichneter Beratungskompetenz finden wir die optimalen Lösungen für jedes Unternehmen.
              </p>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-scaleit-black">Für unsere Kunden bedeuten wir:</h3>
                <ul className="space-y-2 text-scaleit-gray">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-scaleit-red rounded-full mt-2 flex-shrink-0"></div>
                    <span>Persönliche Betreuung und maßgeschneiderte Beratung</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-scaleit-red rounded-full mt-2 flex-shrink-0"></div>
                    <span>Verständnis für individuelle Geschäftsanforderungen</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-scaleit-red rounded-full mt-2 flex-shrink-0"></div>
                    <span>Zuverlässige Partnerschaft von der Beratung bis zur Umsetzung</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Backoffice Section - Text links, Bild rechts */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold text-scaleit-black">
                Backoffice & <span className="text-scaleit-red">Administration</span>
              </h2>
              <p className="text-lg text-scaleit-gray leading-relaxed">
                Unser administratives Team sorgt für reibungslose Abläufe im Hintergrund. Von der Finanzverwaltung
                über Personalwesen bis zur Qualitätssicherung - wir schaffen die Basis für exzellenten Service.
              </p>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-scaleit-black">Für unsere Kunden bedeuten wir:</h3>
                <ul className="space-y-2 text-scaleit-gray">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-scaleit-red rounded-full mt-2 flex-shrink-0"></div>
                    <span>Reibungslose Projektabwicklung und termingerechte Lieferung</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-scaleit-red rounded-full mt-2 flex-shrink-0"></div>
                    <span>Professionelle Kommunikation und transparente Prozesse</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-scaleit-red rounded-full mt-2 flex-shrink-0"></div>
                    <span>Hohe Qualitätsstandards und kontinuierliche Verbesserung</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl lg:order-2">
              <Image
                src="/images/unternehmen/team-backoffice.png"
                alt="Backoffice & Administration"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
