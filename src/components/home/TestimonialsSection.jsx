import { motion } from 'motion/react'
import { TESTIMONIALS } from '../../lib/constants'

function TestimonialCard({ t, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.1, ease: 'easeOut' }}
      className="relative rounded-xl p-6 border border-muted/25 flex flex-col gap-4"
      style={{ backgroundColor: '#0D1528' }}
    >
      {/* Quote mark */}
      <span
        className="font-display font-bold text-5xl leading-none select-none absolute top-4 right-5"
        style={{ color: `${t.color}18` }}
      >
        "
      </span>

      <p className="text-sm leading-relaxed flex-1 relative" style={{ color: '#8B9DC3' }}>
        "{t.quote}"
      </p>

      <div className="flex items-center justify-between gap-4 pt-3 border-t border-muted/15">
        <div>
          <div className="font-display font-semibold text-sm text-text">{t.name}</div>
          <div className="font-mono text-[10px] mt-0.5" style={{ color: 'rgba(61,75,107,0.7)' }}>
            {t.role}
          </div>
        </div>
        <span
          className="font-display font-bold text-xs px-2.5 py-1.5 rounded-md shrink-0"
          style={{ color: t.color, backgroundColor: `${t.color}12`, border: `1px solid ${t.color}25` }}
        >
          {t.metric}
        </span>
      </div>
    </motion.div>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-10"
        >
          <span className="font-mono text-xs text-primary tracking-[0.22em] uppercase block mb-3">
            // lo que dicen
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl leading-tight">
            Clientes que<br />
            <span style={{ color: '#3D4B6B' }}>volvieron por más.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
