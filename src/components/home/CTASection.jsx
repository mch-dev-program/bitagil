import { motion } from 'motion/react'
import Button from '../ui/Button'

export default function CTASection() {
  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(79,110,247,0.09) 0%, transparent 65%)' }}
      />
      <div
        className="absolute left-0 right-0 top-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(79,110,247,0.3) 50%, transparent 100%)' }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-mono text-xs text-primary tracking-[0.22em] uppercase block mb-4">
            // hablemos
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight mb-5">
            Tu proyecto empieza<br />
            con una conversación.
          </h2>
          <p className="text-base sm:text-lg mb-10 max-w-sm mx-auto leading-relaxed" style={{ color: '#6B7DA8' }}>
            Sin rodeos, sin contratos eternos.<br />
            Respondemos en menos de 24 horas.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button href="/contacto" variant="accent" size="lg">
              Empezar proyecto
            </Button>
            <Button href="/portafolio" variant="ghost" size="lg">
              Ver portafolio
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
