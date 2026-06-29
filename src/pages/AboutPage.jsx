import { useEffect } from 'react'
import { motion } from 'motion/react'
import PageWrapper from '../components/layout/PageWrapper'
import Button from '../components/ui/Button'

const VALUES = [
  {
    tag: 'SIN INTERMEDIARIOS',
    title: 'Todo interno',
    desc: 'El dev que escribe el código es el mismo que configura el servidor y revisa las métricas de la campaña. No subcontratamos, no delegamos a freelancers, no perdemos contexto entre equipos.',
  },
  {
    tag: 'STACK COMPLETO',
    title: 'Del backend al ad spend',
    desc: 'React, Node.js, PostgreSQL, Docker, Nginx, Google Ads, Meta Ads. No somos una agencia de marketing que llama a un dev cuando algo se rompe. Somos el dev, el sysadmin y el estratega en un solo equipo.',
  },
  {
    tag: 'ORIENTADO A RESULTADOS',
    title: 'Números, no reportes',
    desc: 'Trivanza Properties: +280% leads. MercadoRápido: primera venta a las 48h del lanzamiento. CloudStack: 99.97% uptime sostenido. Eso es lo que nos importa medir. No las impresiones ni el engagement rate.',
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
            Escribimos el código,<br />
            corremos las campañas<br />
            y administramos<br />
            <span className="text-primary">los servidores.</span>
          </motion.h1>
          <motion.p {...fadeUp(0.2)} className="text-base sm:text-lg leading-relaxed max-w-xl" style={{ color: '#6B7DA8' }}>
            Sin subcontratar, sin agencias intermediarias, sin que el dev no sepa qué está pasando en marketing.
            Un equipo que entiende el negocio completo.
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
                Una sola factura.<br />
                <span style={{ color: '#3D4B6B' }}>Todo el stack.</span>
              </h2>
              <div className="space-y-4 text-sm leading-relaxed" style={{ color: '#6B7DA8' }}>
                <p>
                  La mayoría de las empresas que nos llegan venían pagando a una agencia de diseño,
                  a un freelancer de desarrollo y a otra agencia de marketing. Tres presupuestos,
                  tres reuniones de coordinación, tres versiones distintas del mismo problema.
                </p>
                <p>
                  BitAgil existe para eliminar esa fricción. Tomamos el brief, construimos el producto,
                  lo desplegamos en infraestructura que administramos nosotros mismos y lo posicionamos
                  con campañas que medimos en tiempo real.
                </p>
                <p>
                  El resultado: <span className="text-text">Trivanza Properties</span> lanzada en 10 semanas con +280% de leads mensuales.
                  <span className="text-text"> MercadoRápido</span> con su primera venta a las 48 horas del lanzamiento.
                  <span className="text-text"> CloudStack Latam</span> con 99.97% de uptime después de una migración que nadie más
                  quería tocar.
                </p>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div {...fadeUp(0.15)} className="grid grid-cols-2 gap-4">
              {[
                { value: '30+', label: 'Proyectos entregados' },
                { value: '4 años', label: 'En operación' },
                { value: '99.97%', label: 'Uptime sostenido' },
                { value: '< 24h', label: 'Tiempo de respuesta' },
              ].map(({ value, label }) => (
                <div key={label} className="rounded-xl p-5 border border-muted/20" style={{ backgroundColor: '#0D1528' }}>
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
              Lo que nos diferencia<br />
              <span style={{ color: '#3D4B6B' }}>no es el pitch.</span>
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
              ¿Tu proyecto es el<br />
              <span className="text-primary">próximo en la lista?</span>
            </h2>
            <p className="text-sm sm:text-base mb-8 max-w-sm mx-auto leading-relaxed" style={{ color: '#6B7DA8' }}>
              Contanos qué necesitás. Sin formularios eternos, sin esperar una semana para una respuesta.
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
