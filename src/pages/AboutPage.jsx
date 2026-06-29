import { useEffect } from 'react'
import { motion } from 'motion/react'
import PageWrapper from '../components/layout/PageWrapper'
import Button from '../components/ui/Button'

const VALUES = [
  {
    tag: 'EJECUCIÓN',
    title: 'Directo al grano',
    desc: 'Sin reuniones innecesarias, sin promesas vagas. Acordamos un scope claro, lo ejecutamos y lo entregamos. El respeto por tu tiempo es parte del servicio.',
  },
  {
    tag: 'PROFUNDIDAD',
    title: 'Técnico de verdad',
    desc: 'No somos una agencia de marketing que subcontrata el código, ni un dev shop que ignora el posicionamiento. Hacemos todo internamente y lo hacemos bien.',
  },
  {
    tag: 'IMPACTO',
    title: 'Resultados que se miden',
    desc: 'Nos miden por los números que mueven tu negocio: leads, uptime, conversión, tráfico orgánico. No por vanity metrics ni reportes con muchos colores.',
  },
]

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
  }
}

export default function AboutPage() {
  useEffect(() => { document.title = 'BitAgil — Nosotros' }, [])

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[50%] h-[60%] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(79,110,247,0.07) 0%, transparent 70%)' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.span {...fadeUp(0)} className="font-mono text-xs text-primary tracking-[0.22em] uppercase block mb-4">
            // nosotros
          </motion.span>
          <motion.h1
            {...fadeUp(0.1)}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-[4rem] leading-[1.06] tracking-tight max-w-3xl mb-6"
          >
            Hacemos que las ideas<br />
            digitales se vuelvan <span className="text-primary">reales.</span>
          </motion.h1>
          <motion.p {...fadeUp(0.2)} className="text-base sm:text-lg leading-relaxed max-w-xl" style={{ color: '#6B7DA8' }}>
            BitAgil nació de la frustración de ver clientes pagando a tres agencias distintas
            para hacer lo que un solo equipo bien armado puede ejecutar mejor, más rápido y con más coherencia.
          </motion.p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, rgba(79,110,247,0.3) 0%, transparent 100%)' }} />
      </div>

      {/* Story */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <motion.div {...fadeUp(0)}>
              <span className="font-mono text-xs text-primary tracking-[0.22em] uppercase block mb-4">
                // por qué existimos
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl leading-tight mb-6">
                Un solo equipo.<br />
                <span style={{ color: '#3D4B6B' }}>Todo el stack.</span>
              </h2>
              <div className="space-y-4 text-sm leading-relaxed" style={{ color: '#6B7DA8' }}>
                <p>
                  La mayoría de las empresas digitales tienen el mismo problema: el dev no habla con el de marketing,
                  el de marketing no entiende los servidores, y los servidores los administra alguien que nunca vio el producto.
                </p>
                <p>
                  Nosotros rompemos esa dinámica. Desarrollo, marketing, infraestructura y SaaS bajo un mismo criterio técnico,
                  con visibilidad total de cada pieza del sistema.
                </p>
                <p>
                  El resultado es simple: proyectos que se lanzan en tiempo, sistemas que no se caen y campañas que tienen
                  tracking correcto desde el día uno.
                </p>
              </div>
            </motion.div>

            {/* Stats block */}
            <motion.div
              {...fadeUp(0.15)}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: '30+', label: 'Proyectos entregados' },
                { value: '4 años', label: 'En operación' },
                { value: '99.97%', label: 'Uptime sostenido' },
                { value: '< 24h', label: 'Tiempo de respuesta' },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-xl p-5 border border-muted/20"
                  style={{ backgroundColor: '#0D1528' }}
                >
                  <div className="font-display font-bold text-2xl text-text mb-1">{value}</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: 'rgba(61,75,107,0.7)' }}>
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24" style={{ backgroundColor: 'rgba(13,21,40,0.4)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp(0)} className="mb-10">
            <span className="font-mono text-xs text-primary tracking-[0.22em] uppercase block mb-3">
              // cómo operamos
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl leading-tight">
              Tres principios que<br />
              <span style={{ color: '#3D4B6B' }}>no negociamos.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                {...fadeUp(i * 0.1)}
                className="rounded-xl p-6 border border-muted/25"
                style={{ backgroundColor: '#0D1528' }}
              >
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase block mb-3" style={{ color: 'rgba(61,75,107,0.9)' }}>
                  {v.tag}
                </span>
                <h3 className="font-display font-bold text-lg text-text mb-3">{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7DA8' }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(79,110,247,0.08) 0%, transparent 65%)' }}
        />
        <div
          className="absolute left-0 right-0 top-0 h-px pointer-events-none"
          style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(79,110,247,0.25) 50%, transparent 100%)' }}
        />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center relative">
          <motion.div {...fadeUp(0)}>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5">
              ¿Querés trabajar<br />
              <span className="text-primary">con nosotros?</span>
            </h2>
            <p className="text-sm sm:text-base mb-8" style={{ color: '#6B7DA8' }}>
              Contanos tu proyecto. Respondemos en menos de 24 horas.
            </p>
            <Button href="/contacto" variant="accent" size="lg">
              Empezar proyecto
            </Button>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
