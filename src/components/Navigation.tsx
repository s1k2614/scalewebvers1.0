'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Menu, X, Home, Wrench, Package, Users, ShoppingCart, Mail, ChevronRight, Star, ChevronDown, Building, Briefcase, Target, Server, Cloud, Monitor, Shield, Database, Zap } from 'lucide-react'

export default function Navigation() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const mainCategories = [
    {
      name: 'Home',
      href: '/',
      icon: Home,
      description: 'Zur Startseite'
    },
    {
      name: 'Services',
      href: '/services',
      icon: Wrench,
      description: 'Unsere Dienstleistungen',
      subItems: [
        { name: 'Beratung', href: '/services/beratung', icon: Target },
        { name: 'Implementation', href: '/services/implementation', icon: Zap },
        { name: 'Wartung', href: '/services/wartung', icon: Wrench },
        { name: 'Projekte', href: '/services/projekt', icon: ChevronRight }
      ]
    },
    {
      name: 'Netzwerk & Infrastruktur',
      href: '/netzwerk-infrastruktur',
      icon: Server,
      description: 'Netzwerk- und Infrastrukturlösungen',
      subItems: [
        { name: 'Proxmox', href: '/proxmox', icon: Server },
        { name: 'VMware', href: '/vmware', icon: Monitor },
        { name: 'Sophos', href: '/sophos', icon: Shield },
        { name: '3CX', href: '/3cx', icon: ChevronRight }
      ]
    },
    {
      name: 'Microsoft',
      href: '/microsoft',
      icon: Cloud,
      description: 'Microsoft 365 & Azure Lösungen',
      subItems: [
        { name: 'Microsoft 365', href: '/microsoft/office365', icon: Cloud },
        { name: 'Azure', href: '/microsoft/azure', icon: Server },
        { name: 'Dynamics 365', href: '/microsoft/dynamics', icon: Database },
        { name: 'Microsoft 365 Übersicht', href: '/microsoft', icon: Home }
      ]
    },
    {
      name: 'Über ScaleITS',
      href: '/ueber-scaleits',
      icon: Users,
      description: 'Mehr über uns',
      subItems: [
        { name: 'Unternehmen', href: '/unternehmen', icon: Building },
        { name: 'Jobs & Karriere', href: '/jobs', icon: Briefcase },
        { name: 'Neuigkeiten', href: '/neuigkeiten', icon: Target },
        { name: 'IT-Sicherheitsupdates', href: '/it-sicherheitsupdates', icon: Target },
        { name: 'Impressum', href: '/imprint', icon: Target }
      ]
    },
    {
      name: 'Neuigkeiten',
      href: '/neuigkeiten',
      icon: Target,
      description: 'Aktuelle Neuigkeiten und Updates'
    },
    {
      name: 'Produkte',
      href: '/produkte',
      icon: Package,
      description: 'Unsere Produktpalette',
      subItems: [
        { name: 'Client-Management mit ACMP', href: '/acmp', icon: Star },
        { name: 'MFA 2.0 (GETIDEE)', href: '/authn', icon: Shield },
        { name: 'User-Security (Hornetsecurity)', href: '/hornetsecurity', icon: Mail },
        { name: 'Managed SOC (Arctic Wolf)', href: '/arctic-wolf', icon: Shield },
        { name: 'Extended Cybersecurity (Secutec)', href: '/secutec', icon: Shield }
      ]
    },
    {
      name: 'Webshop',
      href: '/webshop',
      icon: ShoppingCart,
      description: 'Online-Shop'
    },
    {
      name: 'Kontakt',
      href: '/contact',
      icon: Mail,
      description: 'Kontakt aufnehmen'
    }
  ]

  return (
    <>
      {/* Logo oben links */}
      <div className="fixed top-6 left-6 z-50">
        <Link href="/" className="block">
          <img
            src="/home/scaleits_logo_r_grey_929x174.png"
            alt="ScaleITS Logo"
            className="h-12 w-auto hover:opacity-80 transition-opacity duration-300"
          />
        </Link>
      </div>

      {/* Navigation Button */}
      <motion.div
        className="fixed top-6 z-50"
        animate={{
          left: isMegaMenuOpen ? '50%' : (isScrolled ? 'auto' : '50%'),
          right: isMegaMenuOpen ? 'auto' : (isScrolled ? '24px' : 'auto'),
          x: isMegaMenuOpen ? '-50%' : (isScrolled ? 0 : '-50%')
        }}
        transition={{
          duration: 0.6,
          ease: [0.4, 0, 0.2, 1]
        }}
      >
        <motion.button
          onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
          className="flex items-center space-x-3 bg-gradient-to-r from-scaleit-red to-scaleit-red/90 backdrop-blur-sm border border-white/20 text-white hover:text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: isMegaMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMegaMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.div>
          <span className="text-sm font-semibold">Navigation</span>
          <motion.div
            animate={{ rotate: isMegaMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Mega Menu Overlay */}
      <AnimatePresence>
        {isMegaMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMegaMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.95 }}
              transition={{
                duration: 0.4,
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
              className="fixed top-20 left-1/2 transform -translate-x-1/2 z-[110] bg-white shadow-2xl rounded-2xl max-w-6xl w-full mx-4 max-h-[calc(100vh-6rem)] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-scaleit-gray to-scaleit-red bg-clip-text text-transparent mb-2">
                    ScaleITS Navigation
                  </h2>
                  <p className="text-gray-600">Entdecken Sie unsere Dienstleistungen und Produkte</p>
                </div>

                {/* Main Categories Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {mainCategories.map((category, index) => {
                    const IconComponent = category.icon
                    return (
                      <motion.div
                        key={category.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="group"
                      >
                        <Link
                          href={category.href}
                          onClick={() => setIsMegaMenuOpen(false)}
                          className="block p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-scaleit-red hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                        >
                          <div className="text-center">
                            <div className="p-4 bg-gradient-to-r from-scaleit-gray to-scaleit-red rounded-xl text-white mx-auto w-fit mb-4 group-hover:shadow-lg transition-all duration-300">
                              <IconComponent className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-scaleit-black mb-2 group-hover:text-scaleit-red transition-colors">{category.name}</h3>
                            <p className="text-sm text-gray-600 leading-tight group-hover:text-gray-800">{category.description}</p>
                          </div>
                        </Link>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Detailed Sub-Menu Sections */}
                <div className="space-y-6">
                  {/* First Row: Services, Products, About */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Services Section */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                    >
                      <Link
                        href="/services"
                        onClick={() => setIsMegaMenuOpen(false)}
                        className="block mb-4 group"
                      >
                        <h3 className="text-xl font-bold text-blue-800 mb-2 flex items-center cursor-pointer group-hover:text-blue-600 transition-colors">
                          <Wrench className="w-6 h-6 mr-3 text-blue-600 group-hover:text-blue-500" />
                          Services
                          <ChevronRight className="w-5 h-5 ml-auto text-blue-400 group-hover:text-blue-600 transition-colors" />
                        </h3>
                        <p className="text-sm text-blue-600 group-hover:text-blue-700 transition-colors">Alle Dienstleistungen entdecken</p>
                      </Link>
                      <div className="space-y-3">
                        {mainCategories.find(cat => cat.name === 'Services')?.subItems?.map((item, index) => {
                          const ItemIcon = item.icon
                          return (
                            <motion.div
                              key={item.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                            >
                              <Link
                                href={item.href}
                                onClick={() => setIsMegaMenuOpen(false)}
                                className="flex items-center p-3 rounded-lg hover:bg-blue-200 hover:shadow-md transition-all duration-200 group"
                              >
                                <ItemIcon className="w-5 h-5 mr-3 text-blue-600 group-hover:text-blue-800 transition-colors" />
                                <span className="text-sm font-medium text-blue-700 group-hover:text-blue-900">{item.name}</span>
                                <ChevronRight className="w-4 h-4 ml-auto text-blue-400 group-hover:text-blue-600 transition-colors" />
                              </Link>
                            </motion.div>
                          )
                        })}
                      </div>
                    </motion.div>

                    {/* Products Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200 hover:border-green-300 hover:shadow-lg transition-all duration-300"
                    >
                      <Link
                        href="/produkte"
                        onClick={() => setIsMegaMenuOpen(false)}
                        className="block mb-4 group"
                      >
                        <h3 className="text-xl font-bold text-green-800 mb-2 flex items-center cursor-pointer group-hover:text-green-600 transition-colors">
                          <Package className="w-6 h-6 mr-3 text-green-600 group-hover:text-green-500" />
                          Produkte
                          <ChevronRight className="w-5 h-5 ml-auto text-green-400 group-hover:text-green-600 transition-colors" />
                        </h3>
                        <p className="text-sm text-green-600 group-hover:text-green-700 transition-colors">Unsere Produktpalette erkunden</p>
                      </Link>
                      <div className="space-y-3">
                        {mainCategories.find(cat => cat.name === 'Produkte')?.subItems?.map((item, index) => {
                          const ItemIcon = item.icon
                          return (
                            <motion.div
                              key={item.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                            >
                              <Link
                                href={item.href}
                                onClick={() => setIsMegaMenuOpen(false)}
                                className="flex items-center p-3 rounded-lg hover:bg-green-200 hover:shadow-md transition-all duration-200 group"
                              >
                                <ItemIcon className="w-5 h-5 mr-3 text-green-600 group-hover:text-green-800 transition-colors" />
                                <span className="text-sm font-medium text-green-700 group-hover:text-green-900">{item.name}</span>
                                <ChevronRight className="w-4 h-4 ml-auto text-green-400 group-hover:text-green-600 transition-colors" />
                              </Link>
                            </motion.div>
                          )
                        })}
                      </div>
                    </motion.div>

                    {/* About ScaleITS Section */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                      className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6 border border-indigo-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300"
                    >
                      <Link
                        href="/ueber-scaleits"
                        onClick={() => setIsMegaMenuOpen(false)}
                        className="block mb-4 group"
                      >
                        <h3 className="text-xl font-bold text-indigo-800 mb-2 flex items-center cursor-pointer group-hover:text-indigo-600 transition-colors">
                          <Users className="w-6 h-6 mr-3 text-indigo-600 group-hover:text-indigo-500" />
                          Über ScaleITS
                          <ChevronRight className="w-5 h-5 ml-auto text-indigo-400 group-hover:text-indigo-600 transition-colors" />
                        </h3>
                        <p className="text-sm text-indigo-600 group-hover:text-indigo-700 transition-colors">Mehr über unser Unternehmen</p>
                      </Link>
                      <div className="space-y-3">
                        {mainCategories.find(cat => cat.name === 'Über ScaleITS')?.subItems?.map((item, index) => {
                          const ItemIcon = item.icon
                          return (
                            <motion.div
                              key={item.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                            >
                              <Link
                                href={item.href}
                                onClick={() => setIsMegaMenuOpen(false)}
                                className="flex items-center p-3 rounded-lg hover:bg-indigo-200 hover:shadow-md transition-all duration-200 group"
                              >
                                <ItemIcon className="w-5 h-5 mr-3 text-indigo-600 group-hover:text-indigo-800 transition-colors" />
                                <span className="text-sm font-medium text-indigo-700 group-hover:text-indigo-900">{item.name}</span>
                                <ChevronRight className="w-4 h-4 ml-auto text-indigo-400 group-hover:text-indigo-600 transition-colors" />
                              </Link>
                            </motion.div>
                          )
                        })}
                      </div>
                    </motion.div>
                  </div>

                  {/* Second Row: Network & Infrastructure, Microsoft, Quick Links */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Network & Infrastructure Section */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                      className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300"
                    >
                      <Link
                        href="/netzwerk-infrastruktur"
                        onClick={() => setIsMegaMenuOpen(false)}
                        className="block mb-4 group"
                      >
                        <h3 className="text-xl font-bold text-orange-800 mb-2 flex items-center cursor-pointer group-hover:text-orange-600 transition-colors">
                          <Server className="w-6 h-6 mr-3 text-orange-600 group-hover:text-orange-500" />
                          Netzwerk & Infrastruktur
                          <ChevronRight className="w-5 h-5 ml-auto text-orange-400 group-hover:text-orange-600 transition-colors" />
                        </h3>
                        <p className="text-sm text-orange-600 group-hover:text-orange-700 transition-colors">Netzwerk- und Infrastrukturlösungen</p>
                      </Link>
                      <div className="space-y-3">
                        {mainCategories.find(cat => cat.name === 'Netzwerk & Infrastruktur')?.subItems?.map((item, index) => {
                          const ItemIcon = item.icon
                          return (
                            <motion.div
                              key={item.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                            >
                              <Link
                                href={item.href}
                                onClick={() => setIsMegaMenuOpen(false)}
                                className="flex items-center p-3 rounded-lg hover:bg-orange-200 hover:shadow-md transition-all duration-200 group"
                              >
                                <ItemIcon className="w-5 h-5 mr-3 text-orange-600 group-hover:text-orange-800 transition-colors" />
                                <span className="text-sm font-medium text-orange-700 group-hover:text-orange-900">{item.name}</span>
                                <ChevronRight className="w-4 h-4 ml-auto text-orange-400 group-hover:text-orange-600 transition-colors" />
                              </Link>
                            </motion.div>
                          )
                        })}
                      </div>
                    </motion.div>

                    {/* Microsoft Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                      className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border border-red-200 hover:border-red-300 hover:shadow-lg transition-all duration-300"
                    >
                      <Link
                        href="/microsoft"
                        onClick={() => setIsMegaMenuOpen(false)}
                        className="block mb-4 group"
                      >
                        <h3 className="text-xl font-bold text-red-800 mb-2 flex items-center cursor-pointer group-hover:text-red-600 transition-colors">
                          <Cloud className="w-6 h-6 mr-3 text-red-600 group-hover:text-red-500" />
                          Microsoft
                          <ChevronRight className="w-5 h-5 ml-auto text-red-400 group-hover:text-red-600 transition-colors" />
                        </h3>
                        <p className="text-sm text-red-600 group-hover:text-red-700 transition-colors">Microsoft 365 & Azure Lösungen</p>
                      </Link>
                      <div className="space-y-3">
                        {mainCategories.find(cat => cat.name === 'Microsoft')?.subItems?.map((item, index) => {
                          const ItemIcon = item.icon
                          return (
                            <motion.div
                              key={item.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                            >
                              <Link
                                href={item.href}
                                onClick={() => setIsMegaMenuOpen(false)}
                                className="flex items-center p-3 rounded-lg hover:bg-red-200 hover:shadow-md transition-all duration-200 group"
                              >
                                <ItemIcon className="w-5 h-5 mr-3 text-red-600 group-hover:text-red-800 transition-colors" />
                                <span className="text-sm font-medium text-red-700 group-hover:text-red-900">{item.name}</span>
                                <ChevronRight className="w-4 h-4 ml-auto text-red-400 group-hover:text-red-600 transition-colors" />
                              </Link>
                            </motion.div>
                          )
                        })}
                      </div>
                    </motion.div>

                    {/* Quick Links Section */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.7 }}
                      className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300"
                    >
                      <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
                        <Star className="w-6 h-6 mr-3 text-purple-600" />
                        Schnellzugriff
                      </h3>
                      <div className="space-y-3">
                        <Link
                          href="/contact"
                          onClick={() => setIsMegaMenuOpen(false)}
                          className="flex items-center p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-200 group"
                        >
                          <Mail className="w-5 h-5 mr-3" />
                          <span className="text-sm font-medium">Kontakt</span>
                          <ChevronRight className="w-4 h-4 ml-auto" />
                        </Link>
                        <Link
                          href="/webshop"
                          onClick={() => setIsMegaMenuOpen(false)}
                          className="flex items-center p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-200 group"
                        >
                          <ShoppingCart className="w-5 h-5 mr-3" />
                          <span className="text-sm font-medium">Webshop</span>
                          <ChevronRight className="w-4 h-4 ml-auto" />
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
