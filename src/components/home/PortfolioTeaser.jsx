import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { PROJECTS } from '../../lib/constants'

const FEATURED = PROJECTS.slice(0, 2)

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative rounded-xl overflow-hidden border flex flex-col cursor-default"
      style={{ backgroundColor: '#0D1528', borderColor: 'rgba(61,75,107,0.3)' }}
    >
      <div className="h-[3px] shrink-0" style={{ backgroundColor: project.color }} />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
        style={{ boxShadow: `inset 0 0 0 1px ${project.color}40` }}
      />
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase block mb-1.5" style={{ color: 'rgba(61,75,107,0.8)' }}>
          {project.category}
        </span>
        <h3 className="font-display font-bold text-lg sm:text-xl text-text mb-3 leading-snug">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: '#6B7DA8' }}>
          {project.description}
        </p>
        <div
          className="font-display font-bold text-sm mb-4 px-3 py-2 rounded-lg inline-block self-start"
          style={{ color: project.color, backgroundColor: `${project.color}12`, border: `1px solid ${project.color}30` }}
        >
          {project.result}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map(t => (
            <span key={t} className="font-mono text-[11px] px-2 py-1 rounded-md border" style={{ color: '#6B7DA8', borderColor: 'rgba(61,75,107,0.4)' }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export default function PortfolioTeaser() {
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
              // casos de éxito
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl leading-tight">
              Resultados que<br />
              <span style={{ color: '#3D4B6B' }}>se miden.</span>
            </h2>
          </div>
          <Link to="/portafolio" className="font-mono text-sm text-primary hover:text-text transition-colors duration-200 shrink-0">
            Ver portafolio completo →
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {FEATURED.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
