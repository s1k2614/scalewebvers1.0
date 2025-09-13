'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Shield, Zap, Users, CheckCircle, RefreshCw, BarChart3, Network } from 'lucide-react';

export default function SimplicityBanner() {
  return (
    <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1F0236 0%, #420B95 50%, #1F0236 100%)' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{ background: 'linear-gradient(135deg, rgba(228,1,79,0.1) 0%, rgba(66,11,149,0.2) 100%)' }}></div>
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full blur-xl" style={{ backgroundColor: 'rgba(228,1,79,0.2)' }}></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full blur-xl" style={{ backgroundColor: 'rgba(66,11,149,0.2)' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full blur-2xl" style={{ backgroundColor: 'rgba(228,1,79,0.1)' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            {/* Simplicity Logo */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center mb-8"
            >
              <div className="text-6xl font-bold">
                <span style={{ color: '#E4014F' }}>be</span>
                <span className="text-white">simple</span>
              </div>
            </motion.div>

            {/* Catchy Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            >
              Ihr IT-Management
              <span className="block" style={{ color: '#E4014F' }}>
                ohne Komplexität
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl mb-8 leading-relaxed"
              style={{ color: '#E8E8E8' }}
            >
              Überlassen Sie Ihr Client-Management den Profis. Simplicity bietet Ihnen
              vollständiges IT-Management als Managed Service - einfach, zuverlässig und effizient.
            </motion.p>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              <div className="flex items-center">
                <div className="w-8 h-8 rounded border flex items-center justify-center mr-3" style={{ backgroundColor: '#E4014F', borderColor: '#E4014F' }}>
                  <Shield className="w-4 h-4" style={{ color: '#1F0236' }} />
                </div>
                <span className="text-white font-medium">besafe</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded border flex items-center justify-center mr-3" style={{ backgroundColor: '#E4014F', borderColor: '#E4014F' }}>
                  <Network className="w-4 h-4" style={{ color: '#1F0236' }} />
                </div>
                <span className="text-white font-medium">beconnected</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded border flex items-center justify-center mr-3" style={{ backgroundColor: '#E4014F', borderColor: '#E4014F' }}>
                  <BarChart3 className="w-4 h-4" style={{ color: '#1F0236' }} />
                </div>
                <span className="text-white font-medium">beproductive</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded border flex items-center justify-center mr-3" style={{ backgroundColor: '#E4014F', borderColor: '#E4014F' }}>
                  <CheckCircle className="w-4 h-4" style={{ color: '#1F0236' }} />
                </div>
                <span className="text-white font-medium">beready</span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-white px-8 py-4 rounded-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center"
                style={{ background: 'linear-gradient(135deg, #E4014F 0%, #420B95 100%)' }}
              >
                <span>Zu Simplicity wechseln</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>

              <div className="flex items-center text-sm mt-2" style={{ color: '#E8E8E8' }}>
                <ExternalLink className="w-4 h-4 mr-2" />
                <span>Sie verlassen ScaleITS.com</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Central "I" shape like in the image */}
            <div className="flex justify-center items-center relative">
              {/* Background glow */}
              <div className="absolute inset-0 rounded-3xl blur-3xl" style={{ background: 'linear-gradient(135deg, rgba(228,1,79,0.3) 0%, rgba(66,11,149,0.3) 100%)' }}></div>
              
              {/* Main "I" structure */}
              <div className="relative">
                {/* Top horizontal bar */}
                <div className="w-24 h-8 rounded-lg mb-2" style={{ background: 'linear-gradient(135deg, #E4014F 0%, #420B95 100%)' }}></div>
                
                {/* Vertical bar */}
                <div className="w-8 h-48 rounded-lg mx-auto" style={{ background: 'linear-gradient(180deg, #E4014F 0%, #420B95 100%)' }}></div>
                
                {/* Bottom horizontal bar */}
                <div className="w-24 h-8 rounded-lg mt-2" style={{ background: 'linear-gradient(135deg, #E4014F 0%, #420B95 100%)' }}></div>
                
                {/* Side elements */}
                <div className="absolute -left-16 top-8 w-12 h-12 rounded-lg" style={{ background: 'linear-gradient(135deg, #E4014F 0%, #420B95 100%)' }}></div>
                <div className="absolute -right-16 top-16 w-8 h-8 rounded-lg" style={{ background: 'linear-gradient(135deg, #E4014F 0%, #420B95 100%)' }}></div>
                <div className="absolute -left-12 bottom-12 w-8 h-8 rounded-lg" style={{ background: 'linear-gradient(135deg, #E4014F 0%, #420B95 100%)' }}></div>
                <div className="absolute -right-12 bottom-8 w-12 h-12 rounded-lg" style={{ background: 'linear-gradient(135deg, #E4014F 0%, #420B95 100%)' }}></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}