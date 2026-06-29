import { motion } from 'motion/react'
import { SERVICES } from '../../lib/constants'

function ServiceCard({ service, index }) {
  const row = Math.floor(index / 3)
  const col = index % 3

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: col * 0.08 + row * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group relative rounded-xl p-5 sm:p-6 border border-muted/25 cursor-default overflow-hidden h-full"
      style={{ backgroundColor: '#0D1528' }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
        style={{ background: 'linear-gradient(135deg, rgba(79,110,247,0.06) 0%, transparent 60%)' }}
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
        style={{ boxShadow: 'inset 0 0 0 1px rgba(79,110,247,0.25)' }}
      />

      <span
        className="font-mono text-[10px] tracking-[0.22em] uppercase block mb-3 sm:mb-4"
        style={{ color: 'rgba(61,75,107,0.9)' }}
      >
        {service.tag}
      </span>

      <h3 className="font-display font-bold text-lg sm:text-xl text-text mb-2 sm:mb-3 leading-snug">
        {service.title}
      </h3>

      <p className="text-sm leading-relaxed mb-4 sm:mb-5" style={{ color: '#6B7DA8' }}>
        {service.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {service.tags.map(tag => (
          <span
            key={tag}
            className="font-mono text-[11px] px-2 py-1 rounded-md border"
            style={{ color: 'rgba(79,110,247,0.85)', borderColor: 'rgba(79,110,247,0.18)' }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-14"
        >
          <span className="font-mono text-xs text-primary tracking-[0.22em] uppercase block mb-3 sm:mb-4">
            // lo que hacemos
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Tu stack completo,<br />
            <span style={{ color: '#3D4B6B' }}>un solo equipo.</span>
          </h2>
        </motion.div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: 'rgba(61,75,107,0.15)', borderRadius: '16px', overflow: 'hidden' }}
        >
          {SERVICES.map((service, index) => (
            <div key={service.id} style={{ background: '#060912', padding: '1px' }}>
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
