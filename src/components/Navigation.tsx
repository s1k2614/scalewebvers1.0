'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Menu, X, Home, Wrench, Package, Users, ShoppingCart, Mail,
  Database, Shield, Zap, Building, FileText, Briefcase,
  ChevronRight, Star
} from 'lucide-react'

export default function Navigation() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)

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
        { name: 'Beratung', href: '/services/beratung', icon: FileText },
        { name: 'Implementation', href: '/services/implementation', icon: Zap },
        { name: 'Service', href: '/services/service', icon: Shield },
        { name: 'Wartung', href: '/services/wartung', icon: Wrench },
        { name: 'Projekte', href: '/projekt', icon: Briefcase }
      ]
    },
    {
      name: 'Produkte',
      href: '/produkte',
      icon: Package,
      description: 'Unsere Produktpalette',
      subItems: [
        { name: 'ACMP Standard', href: '/acmp-standard', icon: Database },
        { name: 'ACMP Individual', href: '/acmp-individual', icon: Database },
        { name: 'ACMP Übersicht', href: '/acmp', icon: Star },
        { name: 'AuthN by GETIDEE', href: '/authn', icon: Shield },
        { name: 'Hornetsecurity', href: '/hornetsecurity', icon: Mail },
        { name: 'Arctic Wolf', href: '/arctic-wolf', icon: Shield },
        { name: 'Secutec', href: '/secutec', icon: Shield }
      ]
    },
    {
      name: 'Netzwerk & Infra',
      href: '/produkte',
      icon: Database,
      description: 'Infrastruktur-Lösungen',
      subItems: [
        { name: 'Sophos Firewall', href: '/sophos', icon: Shield },
        { name: '1Password', href: '/1password', icon: Shield },
        { name: '3CX VoIP', href: '/3cx', icon: Zap },
        { name: 'VMware', href: '/vmware', icon: Database },
        { name: 'Proxmox', href: '/proxmox', icon: Database }
      ]
    },
    {
      name: 'Microsoft',
      href: '/microsoft',
      icon: Briefcase,
      description: 'Microsoft-Produkte',
      subItems: [
        { name: 'Microsoft 365', href: '/microsoft/office365', icon: Briefcase },
        { name: 'Azure Cloud', href: '/microsoft/azure', icon: Zap },
        { name: 'Dynamics 365', href: '/microsoft/dynamics', icon: Building },
        { name: 'Microsoft Übersicht', href: '/microsoft', icon: Star }
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
        { name: 'News & Neuigkeiten', href: '/news', icon: FileText },
        { name: 'Neuigkeiten', href: '/neuigkeiten', icon: FileText },
        { name: 'Impressum', href: '/imprint', icon: FileText }
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
      {/* Top Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-scaleit-red to-scaleit-purple rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-scaleit-black">ScaleITS</span>
                <span className="text-xs text-scaleit-gray -mt-1">SCALE IT SYSTEMS</span>
              </div>
            </Link>

            {/* Mega Menu Toggle */}
            <button
              onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
              className="flex items-center space-x-2 text-scaleit-gray hover:text-scaleit-red px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200"
            >
              {isMegaMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              <span className="text-sm font-medium">Menü</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mega Menu Overlay */}
      {isMegaMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={() => setIsMegaMenuOpen(false)}>
          <div
            className="fixed top-16 left-0 right-0 bg-white shadow-2xl max-h-[calc(100vh-4rem)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-w-7xl mx-auto p-6">
              {/* Main Categories Grid - Enhanced Overview */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
                {mainCategories.map((category) => {
                  const IconComponent = category.icon
                  return (
                    <div key={category.name} className="group">
                      <Link
                        href={category.href}
                        onClick={() => setIsMegaMenuOpen(false)}
                        className="block p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-scaleit-red hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                      >
                        <div className="text-center">
                          <div className="p-3 bg-gradient-to-r from-scaleit-red to-scaleit-purple rounded-lg text-white mx-auto w-fit mb-3">
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <h3 className="text-sm font-bold text-scaleit-black mb-1">{category.name}</h3>
                          <p className="text-xs text-scaleit-gray leading-tight">{category.description}</p>
                        </div>
                      </Link>
                    </div>
                  )
                })}
              </div>

              {/* Detailed Sub-Menu Sections */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Services Section */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-scaleit-black mb-4 flex items-center">
                    <Wrench className="w-5 h-5 mr-2 text-blue-600" />
                    Services
                  </h3>
                  <div className="space-y-2">
                    {mainCategories.find(cat => cat.name === 'Services')?.subItems?.map((item) => {
                      const ItemIcon = item.icon
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsMegaMenuOpen(false)}
                          className="flex items-center p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 group"
                        >
                          <ItemIcon className="w-4 h-4 mr-3 text-blue-600 group-hover:text-scaleit-red" />
                          <span className="text-sm font-medium text-gray-700 group-hover:text-scaleit-black">{item.name}</span>
                          <ChevronRight className="w-4 h-4 ml-auto text-gray-400 group-hover:text-scaleit-red" />
                        </Link>
                      )
                    })}
                  </div>
                </div>

                {/* Products Section */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-scaleit-black mb-4 flex items-center">
                    <Package className="w-5 h-5 mr-2 text-green-600" />
                    Produkte
                  </h3>
                  <div className="space-y-2">
                    {mainCategories.find(cat => cat.name === 'Produkte')?.subItems?.map((item) => {
                      const ItemIcon = item.icon
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsMegaMenuOpen(false)}
                          className="flex items-center p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 group"
                        >
                          <ItemIcon className="w-4 h-4 mr-3 text-green-600 group-hover:text-scaleit-red" />
                          <span className="text-sm font-medium text-gray-700 group-hover:text-scaleit-black">{item.name}</span>
                          <ChevronRight className="w-4 h-4 ml-auto text-gray-400 group-hover:text-scaleit-red" />
                        </Link>
                      )
                    })}
                  </div>
                </div>

                {/* Network & Infrastructure Section */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-scaleit-black mb-4 flex items-center">
                    <Database className="w-5 h-5 mr-2 text-purple-600" />
                    Netzwerk & Infra
                  </h3>
                  <div className="space-y-2">
                    {mainCategories.find(cat => cat.name === 'Netzwerk & Infra')?.subItems?.map((item) => {
                      const ItemIcon = item.icon
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsMegaMenuOpen(false)}
                          className="flex items-center p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 group"
                        >
                          <ItemIcon className="w-4 h-4 mr-3 text-purple-600 group-hover:text-scaleit-red" />
                          <span className="text-sm font-medium text-gray-700 group-hover:text-scaleit-black">{item.name}</span>
                          <ChevronRight className="w-4 h-4 ml-auto text-gray-400 group-hover:text-scaleit-red" />
                        </Link>
                      )
                    })}
                  </div>
                </div>

                {/* Microsoft Section */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-scaleit-black mb-4 flex items-center">
                    <Briefcase className="w-5 h-5 mr-2 text-red-600" />
                    Microsoft
                  </h3>
                  <div className="space-y-2">
                    {mainCategories.find(cat => cat.name === 'Microsoft')?.subItems?.map((item) => {
                      const ItemIcon = item.icon
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsMegaMenuOpen(false)}
                          className="flex items-center p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 group"
                        >
                          <ItemIcon className="w-4 h-4 mr-3 text-red-600 group-hover:text-scaleit-red" />
                          <span className="text-sm font-medium text-gray-700 group-hover:text-scaleit-black">{item.name}</span>
                          <ChevronRight className="w-4 h-4 ml-auto text-gray-400 group-hover:text-scaleit-red" />
                        </Link>
                      )
                    })}
                  </div>
                </div>

                {/* About Section */}
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-scaleit-black mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-yellow-600" />
                    Über ScaleITS
                  </h3>
                  <div className="space-y-2">
                    {mainCategories.find(cat => cat.name === 'Über ScaleITS')?.subItems?.map((item) => {
                      const ItemIcon = item.icon
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsMegaMenuOpen(false)}
                          className="flex items-center p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 group"
                        >
                          <ItemIcon className="w-4 h-4 mr-3 text-yellow-600 group-hover:text-scaleit-red" />
                          <span className="text-sm font-medium text-gray-700 group-hover:text-scaleit-black">{item.name}</span>
                          <ChevronRight className="w-4 h-4 ml-auto text-gray-400 group-hover:text-scaleit-red" />
                        </Link>
                      )
                    })}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-scaleit-black mb-4 flex items-center">
                    <Star className="w-5 h-5 mr-2 text-gray-600" />
                    Schnellzugriff
                  </h3>
                  <div className="space-y-3">
                    <Link
                      href="/webshop"
                      onClick={() => setIsMegaMenuOpen(false)}
                      className="flex items-center p-3 bg-gradient-to-r from-scaleit-red to-scaleit-purple text-white rounded-lg hover:shadow-lg transition-all duration-200"
                    >
                      <ShoppingCart className="w-4 h-4 mr-3" />
                      <span className="text-sm font-medium">Webshop</span>
                    </Link>
                    <Link
                      href="/contact"
                      onClick={() => setIsMegaMenuOpen(false)}
                      className="flex items-center p-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg hover:shadow-lg transition-all duration-200"
                    >
                      <Mail className="w-4 h-4 mr-3" />
                      <span className="text-sm font-medium">Kontakt</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Footer Note */}
              <div className="text-center mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm text-scaleit-gray">
                  Entdecke unsere vollständige Produktpalette und Services auf den jeweiligen Seiten
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}




