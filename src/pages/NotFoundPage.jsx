import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

export default function NotFoundPage() {
  useEffect(() => { document.title = 'BitAgil — 404' }, [])
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="text-center"
      >
        <div className="rounded-2xl border border-muted/30 bg-surface overflow-hidden shadow-2xl max-w-md mx-auto mb-8">
          <div className="flex items-center gap-3 px-4 py-3 border-b border-muted/20 bg-space/70">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-accent/70" />
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#FBBF24' }} />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            </div>
            <span className="font-mono text-[11px] text-muted tracking-widest flex-1 text-center">
              bitagil — error
            </span>
          </div>
          <div className="p-6 font-mono text-left">
            <p className="text-green-500 text-sm mb-1">$ curl https://bitagil.io{window.location.pathname}</p>
            <p className="text-accent text-sm mb-1">{'>'} Error 404: Not Found</p>
            <p className="text-sm mb-0" style={{ color: '#6B7DA8' }}>
              {'>'} La ruta solicitada no existe.
            </p>
          </div>
        </div>

        <h1 className="font-display font-bold text-5xl text-text mb-3">404</h1>
        <p className="text-sm mb-8" style={{ color: '#6B7DA8' }}>
          Esta página no existe, pero el resto de BitAgil sí.
        </p>
        <Link
          to="/"
          className="font-mono text-sm text-primary hover:text-text transition-colors duration-200"
        >
          ← Volver al inicio
        </Link>
      </motion.div>
    </div>
  )
}
