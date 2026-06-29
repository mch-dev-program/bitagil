import { useEffect } from 'react'
import PageWrapper from '../components/layout/PageWrapper'
import ServicesSection from '../components/sections/ServicesSection'

export default function ServicesPage() {
  useEffect(() => { document.title = 'BitAgil — Servicios' }, [])
  return (
    <PageWrapper>
      <ServicesSection />
    </PageWrapper>
  )
}
