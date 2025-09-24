'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Partners() {
  const stats = [
    { number: '500+', label: 'Zufriedene Kunden' },
    { number: '15', label: 'Mitarbeiter' },
    { number: 'Seit 2019', label: 'Gegründet' },
    { number: '99.9%', label: 'Verfügbarkeit' }
  ]

  const partnerLogos = [
    { src: '/home/2023-10-26_Logo_Goldpartner.png', alt: 'Goldpartner' },
    { src: '/home/3CX Partner.jpg', alt: '3CX Partner' },
    { src: '/home/Aagon LOGO.svg', alt: 'Aagon' },
    { src: '/home/Acronis-logo.jpg', alt: 'Acronis' },
    { src: '/home/Anexia_Logo_CMYK.jpg', alt: 'Anexia' },
    { src: '/home/Arctic Wolf Main Logo with White Text.png', alt: 'Arctic Wolf' },
    { src: '/home/eura-logo.webp', alt: 'Eura' },
    { src: '/home/fujitsu-partner-logo.png', alt: 'Fujitsu' },
    { src: '/home/GRENKE_Logo_Black_72dpi_Protection (2).jpg', alt: 'Grenke' },
    { src: '/home/G_PM_PR_BUS_PAR_RGB_DIGITAL.jpg', alt: 'Partner' },
    { src: '/home/Logo_Teamleader.png', alt: 'Teamleader' },
    { src: '/home/microsoft365_logo.svg', alt: 'Microsoft 365' },
    { src: '/home/NordVPN.svg', alt: 'NordVPN' },
    { src: '/home/Partnerlabel_ITBC_3C_N.png', alt: 'ITBC' },
    { src: '/home/server-eye_logo2019-CMYK-weiss.png', alt: 'Server Eye' },
    { src: '/home/sophos-global-partner-program-gold.svg', alt: 'Sophos Gold Partner' },
    { src: '/home/spitzmueller-logo-w.svg', alt: 'Spitzmüller' },
    { src: '/home/Vmware.svg.png', alt: 'VMware' },
    { src: '/home/VVAR_registered_color_with_border_rgb.svg', alt: 'VVAR' }
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vertrauen Sie auf Qualität
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Als zertifizierter Partner führender Technologieunternehmen bieten wir Ihnen bewährte Lösungen
          </p>
        </motion.div>

        {/* Partner Logos Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-scaleit-gray to-scaleit-red rounded-2xl p-8 overflow-hidden">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Unsere Partner
            </h3>

            {/* Scrolling Logos Container */}
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll whitespace-nowrap">
                {/* First set of logos */}
                {partnerLogos.map((logo, index) => (
                  <div
                    key={`first-${index}`}
                    className="inline-flex flex-shrink-0 mx-6"
                  >
                    <div className="w-40 h-20 bg-white/10 rounded-lg p-4 flex items-center justify-center backdrop-blur-sm">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={140}
                        height={60}
                        className="object-contain max-w-full max-h-full"
                        onError={(e) => {
                          // Fallback for logos that can't be loaded
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                    </div>
                  </div>
                ))}

                {/* Duplicate set for seamless scrolling */}
                {partnerLogos.map((logo, index) => (
                  <div
                    key={`second-${index}`}
                    className="inline-flex flex-shrink-0 mx-6"
                  >
                    <div className="w-40 h-20 bg-white/10 rounded-lg p-4 flex items-center justify-center backdrop-blur-sm">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={140}
                        height={60}
                        className="object-contain max-w-full max-h-full"
                        onError={(e) => {
                          // Fallback for logos that can't be loaded
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-gray-900 to-red-900 rounded-3xl p-12 text-center text-white"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit für den nächsten Schritt?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam die beste IT-Lösung für Ihr Unternehmen finden
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-red-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Kostenlose Beratung anfragen
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}




