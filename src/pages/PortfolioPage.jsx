import { useEffect } from 'react'
import PageWrapper from '../components/layout/PageWrapper'
import PortfolioSection from '../components/sections/PortfolioSection'

export default function PortfolioPage() {
  useEffect(() => { document.title = 'BitAgil — Portafolio' }, [])
  return (
    <PageWrapper>
      <PortfolioSection />
    </PageWrapper>
  )
}
