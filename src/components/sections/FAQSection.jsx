import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { FAQ } from '../../lib/constants'

function FAQItem({ item, index, open, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="border-b border-muted/20 last:border-0"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="font-display font-medium text-sm sm:text-base text-text group-hover:text-primary transition-colors duration-200">
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="font-mono text-xl text-muted shrink-0 leading-none"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <p className="text-sm leading-relaxed pb-5" style={{ color: '#6B7DA8' }}>
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(null)

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <span className="font-mono text-xs text-primary tracking-[0.22em] uppercase block mb-3">
              // preguntas frecuentes
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl leading-tight">
              Antes de<br />
              <span style={{ color: '#3D4B6B' }}>escribirnos.</span>
            </h2>
          </motion.div>

          <div className="rounded-xl border border-muted/20 px-5 sm:px-6 divide-y-0" style={{ backgroundColor: '#0D1528' }}>
            {FAQ.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                index={i}
                open={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
