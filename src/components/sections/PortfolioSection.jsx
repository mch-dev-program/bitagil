import { motion } from 'motion/react'
import { useProjects } from '../../hooks/useProjects'

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative rounded-xl overflow-hidden border cursor-default flex flex-col"
      style={{ backgroundColor: '#0D1528', borderColor: 'rgba(61,75,107,0.3)' }}
    >
      {/* Project image */}
      {project.image_url ? (
        <div className="relative h-44 overflow-hidden shrink-0">
          <img
            src={project.image_url}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(13,21,40,0.9) 100%)' }} />
        </div>
      ) : (
        <div className="h-[3px] shrink-0" style={{ backgroundColor: project.color }} />
      )}

      {/* Hover border glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
        style={{ boxShadow: `inset 0 0 0 1px ${project.color}40` }}
      />

      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <span
          className="font-mono text-[10px] tracking-[0.2em] uppercase block mb-1.5"
          style={{ color: 'rgba(61,75,107,0.8)' }}
        >
          {project.category}
        </span>
        <h3 className="font-display font-bold text-lg sm:text-xl text-text leading-snug mb-3">
          {project.title}
        </h3>

        <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: '#6B7DA8' }}>
          {project.description}
        </p>

        {project.result && (
          <div
            className="font-display font-bold text-sm mb-4 px-3 py-2 rounded-lg inline-block self-start"
            style={{
              color: project.color,
              backgroundColor: `${project.color}12`,
              border: `1px solid ${project.color}30`,
            }}
          >
            {project.result}
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {(project.tech || []).map(t => (
              <span
                key={t}
                className="font-mono text-[11px] px-2 py-1 rounded-md border"
                style={{ color: '#6B7DA8', borderColor: 'rgba(61,75,107,0.4)' }}
              >
                {t}
              </span>
            ))}
          </div>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] shrink-0 transition-colors duration-200"
              style={{ color: project.color }}
            >
              Ver proyecto →
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function PortfolioSection() {
  const { projects, loading } = useProjects()

  return (
    <section id="portfolio" className="py-16 sm:py-24 lg:py-36 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(13,21,40,0.4) 50%, transparent 100%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-14"
        >
          <span className="font-mono text-xs text-primary tracking-[0.22em] uppercase block mb-3 sm:mb-4">
            // casos de éxito
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Proyectos que<br />
            <span style={{ color: '#3D4B6B' }}>hablan por sí solos.</span>
          </h2>
        </motion.div>

        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {[0, 1, 2].map(i => (
              <div key={i} className="rounded-xl border h-72 animate-pulse" style={{ backgroundColor: '#0D1528', borderColor: 'rgba(61,75,107,0.2)' }} />
            ))}
          </div>
        )}

        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {projects.map((project, index) => (
              <ProjectCard key={project.id || project.title} project={project} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
