import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { SERVICES } from '../../lib/constants'

const FEATURED = SERVICES.slice(0, 3)

function Card({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative rounded-xl p-5 sm:p-6 border border-muted/25 overflow-hidden"
      style={{ backgroundColor: '#0D1528' }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
        style={{ background: 'linear-gradient(135deg, rgba(79,110,247,0.06) 0%, transparent 60%)' }}
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
        style={{ boxShadow: 'inset 0 0 0 1px rgba(79,110,247,0.2)' }}
      />
      <span className="font-mono text-[10px] tracking-[0.22em] uppercase block mb-3" style={{ color: 'rgba(61,75,107,0.9)' }}>
        {service.tag}
      </span>
      <h3 className="font-display font-bold text-lg text-text mb-2 leading-snug">{service.title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: '#6B7DA8' }}>{service.description}</p>
    </motion.div>
  )
}

export default function ServicesTeaser() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10"
        >
          <div>
            <span className="font-mono text-xs text-primary tracking-[0.22em] uppercase block mb-3">
              // lo que hacemos
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl leading-tight">
              Todo en un solo equipo.
            </h2>
          </div>
          <Link
            to="/servicios"
            className="font-mono text-sm text-primary hover:text-text transition-colors duration-200 shrink-0"
          >
            Ver los 6 servicios →
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {FEATURED.map((service, i) => (
            <Card key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
