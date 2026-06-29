import { useEffect } from 'react'
import PageWrapper from '../components/layout/PageWrapper'
import FAQSection from '../components/sections/FAQSection'
import ContactSection from '../components/sections/ContactSection'

export default function ContactPage() {
  useEffect(() => { document.title = 'BitAgil — Contacto' }, [])
  return (
    <PageWrapper>
      <FAQSection />
      <ContactSection />
    </PageWrapper>
  )
}
