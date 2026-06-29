import { useEffect } from 'react'
import { motion } from 'motion/react'
import HeroSection from '../components/sections/HeroSection'
import ServicesTeaser from '../components/home/ServicesTeaser'
import ProcessSection from '../components/home/ProcessSection'
import PortfolioTeaser from '../components/home/PortfolioTeaser'
import TestimonialsSection from '../components/home/TestimonialsSection'
import CTASection from '../components/home/CTASection'

export default function HomePage() {
  useEffect(() => { document.title = 'BitAgil — Agencia Digital Integral' }, [])
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <HeroSection />
      <ServicesTeaser />
      <ProcessSection />
      <PortfolioTeaser />
      <TestimonialsSection />
      <CTASection />
    </motion.div>
  )
}
