import { motion } from 'motion/react'

const COMMITS = [
  { hash: 'a3f2c1b', step: 'Discovery',    desc: 'Entendemos tu negocio, objetivos y stack actual.' },
  { hash: 'e8d4f90', step: 'Arquitectura', desc: 'Definimos el stack, prototipo y timeline de entrega.' },
  { hash: 'c7b1a23', step: 'Build',        desc: 'Desarrollo full-stack iterativo con deploy continuo.' },
  { hash: 'f5e9d67', step: 'Launch',       desc: 'Producción, monitoreo 24/7 y optimización continua.' },
]

export default function ProcessSection() {
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
            // cómo trabajamos
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl leading-tight">
            Del brief al deploy,<br />
            <span style={{ color: '#3D4B6B' }}>sin fricción.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-muted/30 bg-surface overflow-hidden shadow-2xl"
        >
          {/* Title bar */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-muted/20 bg-space/70">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-accent/70" />
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#FBBF24' }} />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            </div>
            <span className="font-mono text-[11px] text-muted tracking-widest flex-1 text-center">
              bitagil — process
            </span>
          </div>

          {/* Terminal body */}
          <div className="p-5 sm:p-6 font-mono">
            {/* Command prompt */}
            <div className="flex items-center gap-2 mb-5 text-sm">
              <span className="text-green-500">$</span>
              <span style={{ color: 'rgba(241,245,255,0.55)' }}>git log --oneline</span>
              <span className="w-[7px] h-[15px] bg-primary/70 inline-block animate-pulse" />
            </div>

            {/* Commit rows */}
            <div>
              {COMMITS.map((commit, i) => (
                <motion.div
                  key={commit.hash}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.2 + i * 0.09 }}
                  className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 py-3 border-b border-muted/10 last:border-0"
                >
                  <span className="text-[11px] tabular-nums shrink-0" style={{ color: 'rgba(79,110,247,0.55)' }}>
                    {commit.hash}
                  </span>
                  <span className="text-[13px] text-text font-medium shrink-0 sm:min-w-[110px]">
                    {commit.step}
                  </span>
                  <span className="text-[11px] flex-1" style={{ color: '#6B7DA8' }}>
                    {commit.desc}
                  </span>
                  <span className="hidden sm:block text-[10px] tabular-nums shrink-0" style={{ color: 'rgba(61,75,107,0.5)' }}>
                    {i + 1}/{COMMITS.length}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
