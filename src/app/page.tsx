'use client'

import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Partners from '../components/Partners'
import SimplicityBanner from '../components/SimplicityBanner'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-scaleit-white">
      <Navigation />
      <Hero />
      <Services />
      <SimplicityBanner />
      <Partners />
      <Footer />
    </main>
  )
}




