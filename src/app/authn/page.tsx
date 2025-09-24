'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import {
  Shield, Key, Smartphone, Lock, Users, CheckCircle, ArrowRight,
  Fingerprint, Eye, Zap, Award, Star, Target, Globe, Phone,
  Mail, MessageSquare, Building, Network, AlertTriangle, Clock,
  Cpu, HardDrive, Monitor, ChevronRight, X, Check, Timer, UserCheck
} from 'lucide-react';
import Link from 'next/link';

export default function AuthNPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center bg-gradient-to-r from-scaleit-red to-scaleit-purple text-white px-8 py-4 rounded-full shadow-2xl mb-8"
            >
              <Fingerprint className="w-8 h-8 mr-4" />
              <span className="text-xl font-bold">AuthN by GETIDEE</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-6xl md:text-7xl font-bold text-scaleit-black mb-8"
            >
              Sichere
              <span className="block bg-gradient-to-r from-scaleit-red to-scaleit-purple bg-clip-text text-transparent">
                Multi-Faktor Authentifizierung
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl text-scaleit-gray max-w-4xl mx-auto leading-relaxed mb-16"
            >
              AuthN by GETIDEE bietet Ihnen die fortschrittlichste Multi-Faktor-Authentifizierung
              für maximale Sicherheit Ihrer Unternehmensdaten. Als First-Level-Support Partner
              von GETIDEE garantieren wir Ihnen erstklassigen Service und Support.
            </motion.p>

            {/* Partnership Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="inline-flex items-center bg-gradient-to-r from-scaleit-red to-scaleit-purple text-white px-6 py-3 rounded-full text-lg font-semibold shadow-xl mb-8"
            >
              <Award className="w-6 h-6 mr-3" />
              First-Level-Support Partner von GETIDEE
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-gradient-to-r from-scaleit-gray to-scaleit-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ihr First-Level-Support Partner
            </h2>
            <p className="text-xl text-scaleit-gray/80 max-w-4xl mx-auto mb-12">
              Als zertifizierter First-Level-Support Partner von GETIDEE stehen wir Ihnen
              mit unserem Fachwissen und unserer Erfahrung zur Seite. Profitieren Sie von:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
              >
                <Clock className="w-12 h-12 text-scaleit-red mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">24/7 Support</h3>
                <p className="text-white">
                  Rund um die Uhr erreichbar für alle Ihre Anliegen
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
              >
                <Target className="w-12 h-12 text-scaleit-purple mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Direkter Zugang</h3>
                <p className="text-white">
                  Schneller und direkter Support durch unser Partnernetzwerk
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
              >
                <Star className="w-12 h-12 text-scaleit-red mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Premium Service</h3>
                <p className="text-white">
                  Höchste Servicequalität und garantierte Reaktionszeiten
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TPM 2.0 Grafik Section */}
      <section className="py-20 bg-gradient-to-br from-scaleit-gray/5 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-scaleit-black mb-6">
              Warum TPM 2.0 MFA so
              <span className="block bg-gradient-to-r from-scaleit-red to-scaleit-purple bg-clip-text text-transparent">
                einfach für Ihre Mitarbeiter ist
              </span>
            </h2>
            <p className="text-xl text-scaleit-gray max-w-4xl mx-auto">
              Entdecken Sie, wie hardware-basierte Authentifizierung den Arbeitsalltag revolutioniert
            </p>
          </motion.div>

          {/* Hauptgrafik */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

            {/* Traditionelle MFA */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-red-50 via-red-100 to-red-200 rounded-3xl p-8 border-2 border-red-300 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="text-center mb-8">
                  <motion.div
                    className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-red-500 to-red-600 rounded-full mb-4 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Smartphone className="w-12 h-12 text-white" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-red-800 mb-2">Traditionelle MFA</h3>
                  <p className="text-red-600 text-lg font-medium">Zusätzliche Hardware & Schritte</p>
                </div>

                {/* Prozess-Schritte */}
                <div className="space-y-6">
                  <motion.div
                    className="flex items-center space-x-4 p-4 rounded-xl bg-white/60 hover:bg-white/80 transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <motion.div
                      className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-md"
                      whileHover={{ scale: 1.1 }}
                      animate={{ boxShadow: "0 0 20px rgba(239, 68, 68, 0.3)" }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    >
                      <span className="text-white font-bold text-sm">1</span>
                    </motion.div>
                    <div className="flex-1">
                      <p className="text-red-800 font-semibold text-lg">Benutzer gibt Passwort ein</p>
                      <div className="flex items-center mt-1">
                        <Timer className="w-5 h-5 text-red-500 mr-2" />
                        <span className="text-red-600 text-sm">Manueller Schritt</span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-4 p-4 rounded-xl bg-white/60 hover:bg-white/80 transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <motion.div
                      className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-md"
                      whileHover={{ scale: 1.1 }}
                      animate={{ boxShadow: "0 0 20px rgba(239, 68, 68, 0.3)" }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                    >
                      <span className="text-white font-bold text-sm">2</span>
                    </motion.div>
                    <div className="flex-1">
                      <p className="text-red-800 font-semibold text-lg">SMS/Push-Benachrichtigung erhalten</p>
                      <div className="flex items-center mt-1">
                        <MessageSquare className="w-5 h-5 text-red-500 mr-2" />
                        <span className="text-red-600 text-sm">Netzwerkabhängig</span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-4 p-4 rounded-xl bg-white/60 hover:bg-white/80 transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <motion.div
                      className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-md"
                      whileHover={{ scale: 1.1 }}
                      animate={{ boxShadow: "0 0 20px rgba(239, 68, 68, 0.3)" }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 1.0 }}
                    >
                      <span className="text-white font-bold text-sm">3</span>
                    </motion.div>
                    <div className="flex-1">
                      <p className="text-red-800 font-semibold text-lg">Code manuell eingeben</p>
                      <div className="flex items-center mt-1">
                        <Key className="w-5 h-5 text-red-500 mr-2" />
                        <span className="text-red-600 text-sm">Zusätzliche Eingabe</span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-4 p-4 rounded-xl bg-white/60 hover:bg-white/80 transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <motion.div
                      className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-md"
                      whileHover={{ scale: 1.1 }}
                      animate={{ boxShadow: "0 0 20px rgba(239, 68, 68, 0.3)" }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 1.5 }}
                    >
                      <span className="text-white font-bold text-sm">4</span>
                    </motion.div>
                    <div className="flex-1">
                      <p className="text-red-800 font-semibold text-lg">Warten auf Verifizierung</p>
                      <div className="flex items-center mt-1">
                        <Clock className="w-5 h-5 text-red-500 mr-2" />
                        <span className="text-red-600 text-sm">Zeitaufwändig</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Probleme */}
                <motion.div
                  className="mt-8 p-6 bg-gradient-to-r from-red-200 to-red-300 rounded-xl border border-red-400"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    >
                      <X className="w-6 h-6 text-red-700" />
                    </motion.div>
                    <span className="text-red-800 font-bold text-lg">Häufige Probleme:</span>
                  </div>
                  <ul className="text-red-700 text-sm space-y-2">
                    <motion.li
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>SMS-Empfang verzögert</span>
                    </motion.li>
                    <motion.li
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Token verloren/verlegt</span>
                    </motion.li>
                    <motion.li
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Netzwerkprobleme</span>
                    </motion.li>
                    <motion.li
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Zusätzliche Kosten</span>
                    </motion.li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>

            {/* TPM 2.0 MFA */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-green-50 via-green-100 to-green-200 rounded-3xl p-8 border-2 border-green-300 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="text-center mb-8">
                  <motion.div
                    className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-scaleit-red to-scaleit-purple rounded-full mb-4 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Cpu className="w-12 h-12 text-white" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-green-800 mb-2">TPM 2.0 MFA</h3>
                  <p className="text-green-600 text-lg font-medium">Automatisch & Sicher</p>
                </div>

                {/* Hardware-Integration */}
                <motion.div
                  className="mb-6 p-4 bg-white/70 rounded-xl border border-green-200"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-center space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Monitor className="w-8 h-8 text-scaleit-gray" />
                    </motion.div>
                    <motion.div
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    >
                      <ArrowRight className="w-6 h-6 text-scaleit-purple" />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Cpu className="w-8 h-8 text-scaleit-red" />
                    </motion.div>
                    <motion.div
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                    >
                      <ArrowRight className="w-6 h-6 text-scaleit-purple" />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Shield className="w-8 h-8 text-green-600" />
                    </motion.div>
                  </div>
                  <p className="text-center text-sm text-scaleit-gray mt-3 font-medium">
                    Integriert in Ihre Hardware
                  </p>
                </motion.div>

                {/* Prozess-Schritte */}
                <div className="space-y-6">
                  <motion.div
                    className="flex items-center space-x-4 p-4 rounded-xl bg-white/60 hover:bg-white/80 transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <motion.div
                      className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-scaleit-red to-scaleit-purple rounded-full flex items-center justify-center shadow-md"
                      whileHover={{ scale: 1.1 }}
                      animate={{
                        boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)",
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    >
                      <span className="text-white font-bold text-sm">1</span>
                    </motion.div>
                    <div className="flex-1">
                      <p className="text-green-800 font-semibold text-lg">Benutzer gibt Passwort ein</p>
                      <div className="flex items-center mt-1">
                        <Timer className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 text-sm">Schnell & einfach</span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-4 p-4 rounded-xl bg-white/60 hover:bg-white/80 transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <motion.div
                      className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-scaleit-red to-scaleit-purple rounded-full flex items-center justify-center shadow-md"
                      whileHover={{ scale: 1.1 }}
                      animate={{
                        boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)",
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.3 }}
                    >
                      <span className="text-white font-bold text-sm">2</span>
                    </motion.div>
                    <div className="flex-1">
                      <p className="text-green-800 font-semibold text-lg">TPM verifiziert automatisch</p>
                      <div className="flex items-center mt-1">
                        <Check className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 text-sm">Hardware-gestützt</span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-4 p-4 rounded-xl bg-white/60 hover:bg-white/80 transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <motion.div
                      className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-scaleit-red to-scaleit-purple rounded-full flex items-center justify-center shadow-md"
                      whileHover={{ scale: 1.1 }}
                      animate={{
                        boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)",
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.6 }}
                    >
                      <span className="text-white font-bold text-sm">3</span>
                    </motion.div>
                    <div className="flex-1">
                      <p className="text-green-800 font-semibold text-lg">Sofortiger Zugriff</p>
                      <div className="flex items-center mt-1">
                        <Zap className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 text-sm">Blitzschnell</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Vorteile */}
                <motion.div
                  className="mt-8 p-6 bg-gradient-to-r from-green-200 to-green-300 rounded-xl border border-green-400"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <motion.div
                      animate={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    >
                      <CheckCircle className="w-6 h-6 text-green-700" />
                    </motion.div>
                    <span className="text-green-800 font-bold text-lg">TPM 2.0 Vorteile:</span>
                  </div>
                  <ul className="text-green-700 text-sm space-y-2">
                    <motion.li
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Keine zusätzlichen Geräte</span>
                    </motion.li>
                    <motion.li
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Automatische Authentifizierung</span>
                    </motion.li>
                    <motion.li
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.0 }}
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Höchste Sicherheit</span>
                    </motion.li>
                    <motion.li
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.1 }}
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Keine Netzwerkabhängigkeit</span>
                    </motion.li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Vergleichs-Tabelle */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-3xl shadow-2xl p-8"
          >
            <h3 className="text-3xl font-bold text-center text-scaleit-black mb-8">
              Traditionelle MFA vs. TPM 2.0 MFA
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-6 text-lg font-semibold text-scaleit-black">Aspekt</th>
                    <th className="text-center py-4 px-6 text-lg font-semibold text-red-600">Traditionelle MFA</th>
                    <th className="text-center py-4 px-6 text-lg font-semibold text-green-600">TPM 2.0 MFA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-6 font-medium text-scaleit-black">Benutzerfreundlichkeit</td>
                    <td className="text-center py-4 px-6 text-red-600">
                      <div className="flex items-center justify-center space-x-2">
                        <X className="w-5 h-5" />
                        <span>Manuelle Eingabe erforderlich</span>
                      </div>
                    </td>
                    <td className="text-center py-4 px-6 text-green-600">
                      <div className="flex items-center justify-center space-x-2">
                        <CheckCircle className="w-5 h-5" />
                        <span>Vollautomatisch</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-6 font-medium text-scaleit-black">Zusätzliche Hardware</td>
                    <td className="text-center py-4 px-6 text-red-600">
                      <div className="flex items-center justify-center space-x-2">
                        <X className="w-5 h-5" />
                        <span>Token/Smartphone nötig</span>
                      </div>
                    </td>
                    <td className="text-center py-4 px-6 text-green-600">
                      <div className="flex items-center justify-center space-x-2">
                        <CheckCircle className="w-5 h-5" />
                        <span>In Hardware integriert</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-6 font-medium text-scaleit-black">Netzwerkabhängigkeit</td>
                    <td className="text-center py-4 px-6 text-red-600">
                      <div className="flex items-center justify-center space-x-2">
                        <X className="w-5 h-5" />
                        <span>Internet/SMS erforderlich</span>
                      </div>
                    </td>
                    <td className="text-center py-4 px-6 text-green-600">
                      <div className="flex items-center justify-center space-x-2">
                        <CheckCircle className="w-5 h-5" />
                        <span>Offline-fähig</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-6 font-medium text-scaleit-black">Sicherheitslevel</td>
                    <td className="text-center py-4 px-6 text-red-600">
                      <div className="flex items-center justify-center space-x-2">
                        <Shield className="w-5 h-5" />
                        <span>Hoch</span>
                      </div>
                    </td>
                    <td className="text-center py-4 px-6 text-green-600">
                      <div className="flex items-center justify-center space-x-2">
                        <Shield className="w-5 h-5" />
                        <span>Sehr hoch (Hardware)</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-scaleit-black">Kosten</td>
                    <td className="text-center py-4 px-6 text-red-600">
                      <div className="flex items-center justify-center space-x-2">
                        <span>Höher (Token/SMS)</span>
                      </div>
                    </td>
                    <td className="text-center py-4 px-6 text-green-600">
                      <div className="flex items-center justify-center space-x-2">
                        <span>Geringer (bereits vorhanden)</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* TPM 2.0 Hardware-Darstellung */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16"
          >
            <div className="bg-gradient-to-r from-scaleit-gray to-scaleit-black rounded-3xl p-8 text-white">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4">TPM 2.0 - Integrierte Sicherheit</h3>
                <p className="text-scaleit-gray/80 text-lg">
                  Der Trusted Platform Module Chip ist bereits in Ihren modernen Geräten vorhanden
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-scaleit-red to-scaleit-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <Monitor className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Laptops</h4>
                  <p className="text-scaleit-gray/80">Standard seit Windows 11</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-scaleit-red to-scaleit-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <HardDrive className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Desktops</h4>
                  <p className="text-scaleit-gray/80">In Business-PCs integriert</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-scaleit-red to-scaleit-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <Network className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Server</h4>
                  <p className="text-scaleit-gray/80">Enterprise-Grade Sicherheit</p>
                </motion.div>
              </div>

              <div className="mt-12 text-center">
                <div className="inline-flex items-center bg-gradient-to-r from-scaleit-red to-scaleit-purple text-white px-6 py-3 rounded-full text-lg font-semibold">
                  <UserCheck className="w-6 h-6 mr-3" />
                  Keine zusätzliche Hardware erforderlich
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-scaleit-black mb-6">
              Warum AuthN by GETIDEE?
            </h2>
            <p className="text-xl text-scaleit-gray max-w-3xl mx-auto">
              Entdecken Sie die Vorteile unserer professionellen MFA-Lösung
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-scaleit-red to-scaleit-purple rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-scaleit-black mb-4">
                Maximale Sicherheit
              </h3>
              <p className="text-scaleit-gray leading-relaxed">
                Schützen Sie Ihre Systeme mit fortschrittlicher Multi-Faktor-Authentifizierung
                und verhindern Sie unbefugten Zugriff auf sensible Daten.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-scaleit-red to-scaleit-purple rounded-2xl flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-scaleit-black mb-4">
                Mobile-First Design
              </h3>
              <p className="text-scaleit-gray leading-relaxed">
                Nahtlose Authentifizierung über Smartphone, Tablet oder Desktop.
                Optimierte Benutzererfahrung für alle Geräte.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-scaleit-red to-scaleit-purple rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-scaleit-black mb-4">
                Schnelle Integration
              </h3>
              <p className="text-scaleit-gray leading-relaxed">
                Einfache Implementierung in bestehende Systeme. Kompatibel mit
                allen gängigen Authentifizierungsprotokollen.
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-scaleit-red to-scaleit-purple rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-scaleit-black mb-4">
                Benutzerfreundlich
              </h3>
              <p className="text-scaleit-gray leading-relaxed">
                Intuitive Benutzeroberfläche für Administratoren und Endbenutzer.
                Minimale Schulungsaufwände erforderlich.
              </p>
            </motion.div>

            {/* Feature 5 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-scaleit-red to-scaleit-purple rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-scaleit-black mb-4">
                Premium Support
              </h3>
              <p className="text-scaleit-gray leading-relaxed">
                Als First-Level-Support Partner bieten wir Ihnen direkten Zugang
                zum GETIDEE Support-Team und garantierte Reaktionszeiten.
              </p>
            </motion.div>

            {/* Feature 6 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-scaleit-red to-scaleit-purple rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-scaleit-black mb-4">
                Globale Standards
              </h3>
              <p className="text-scaleit-gray leading-relaxed">
                Erfüllt alle internationalen Sicherheitsstandards und
                Datenschutzrichtlinien für höchste Compliance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-gradient-to-r from-scaleit-gray to-scaleit-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ihr First-Level-Support Partner
            </h2>
            <p className="text-xl text-scaleit-gray/80 max-w-4xl mx-auto mb-12">
              Als zertifizierter First-Level-Support Partner von GETIDEE stehen wir Ihnen
              mit unserem Fachwissen und unserer Erfahrung zur Seite. Profitieren Sie von:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
              >
                <Clock className="w-12 h-12 text-scaleit-red mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Support 8-18 Uhr</h3>
                <p className="text-white">
                  Montag bis Freitag 8-18 Uhr erreichbar für alle Ihre Anliegen
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
              >
                <Target className="w-12 h-12 text-scaleit-purple mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Direkter Zugang</h3>
                <p className="text-white">
                  Schneller und direkter Support durch unser Partnernetzwerk
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
              >
                <Star className="w-12 h-12 text-scaleit-red mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Premium Service</h3>
                <p className="text-white">
                  Höchste Servicequalität und garantierte Reaktionszeiten
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-scaleit-black mb-8">
              Bereit für maximale Sicherheit?
            </h2>
            <p className="text-xl text-scaleit-gray mb-12">
              Kontaktieren Sie uns noch heute und erfahren Sie mehr über AuthN by GETIDEE
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center bg-gradient-to-r from-scaleit-red to-scaleit-purple text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-scaleit-red/90 hover:to-scaleit-purple/90 transition-all duration-300 shadow-xl"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  Jetzt beraten lassen
                  <ArrowRight className="w-5 h-5 ml-3" />
                </motion.div>
              </Link>

              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center bg-gradient-to-r from-scaleit-gray to-scaleit-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-scaleit-gray/90 hover:to-scaleit-black/90 transition-all duration-300 shadow-xl"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  Demo anfordern
                  <ArrowRight className="w-5 h-5 ml-3" />
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
