import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'motion/react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'
import BackToTop from './components/ui/BackToTop'
import ErrorBoundary from './components/ui/ErrorBoundary'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import PortfolioPage from './pages/PortfolioPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'
import AdminLayout from './pages/admin/AdminLayout'
import AdminProjects from './pages/admin/AdminProjects'
import { Navigate } from 'react-router-dom'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<AboutPage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/portafolio" element={<PortfolioPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          {/* Admin routes — own layout, no public Navbar/Footer */}
          <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Navigate to="/admin/proyectos" replace />} />
              <Route path="proyectos" element={<AdminProjects />} />
            </Route>

          {/* Public routes */}
          <Route
            path="*"
            element={
              <>
                <ScrollToTop />
                <div className="min-h-screen flex flex-col">
                  <Navbar />
                  <main className="flex-1">
                    <AnimatedRoutes />
                  </main>
                  <Footer />
                </div>
                <BackToTop />
              </>
            }
          />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  )
}
