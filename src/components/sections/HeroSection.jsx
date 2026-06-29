import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'motion/react'
import Button from '../ui/Button'
import OpsConsole from '../ui/OpsConsole'
import { STATS } from '../../lib/constants'

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
  }
}

function useCountUp(target, decimals, duration, active) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const val = eased * target
      setCount(decimals > 0 ? parseFloat(val.toFixed(decimals)) : Math.floor(val))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [active, target, decimals, duration])
  return count
}

function StatItem({ stat, active }) {
  const count = useCountUp(stat.numeric, stat.decimals, 1600, active)
  return (
    <div className="text-center lg:text-left">
      <div className="font-display font-bold text-xl sm:text-2xl text-text">
        {stat.decimals > 0 ? count.toFixed(stat.decimals) : count}{stat.suffix}
      </div>
      <div className="font-mono text-[10px] sm:text-[11px] mt-0.5" style={{ color: '#3D4B6B' }}>
        {stat.label}
      </div>
    </div>
  )
}

export default function HeroSection() {
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background glows */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[55%] h-[70%] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(79,110,247,0.08) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 left-[-10%] w-[40%] h-[40%] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(255,92,58,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full py-12 sm:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-10 lg:gap-10 items-center">
        {/* Left col */}
        <div className="flex flex-col gap-6 items-center text-center lg:items-start lg:text-left">

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="/logo.png"
              alt="BitAgil"
              className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full"
              style={{
                boxShadow: '0 0 48px rgba(79,110,247,0.45), 0 0 96px rgba(79,110,247,0.15)',
              }}
            />
          </motion.div>

          <motion.span
            {...fadeUp(0.15)}
            className="font-mono text-sm text-primary tracking-[0.18em]"
          >
            // agencia digital integral
          </motion.span>

          <motion.h1
            {...fadeUp(0.26)}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-[4.25rem] leading-[1.04] tracking-tight"
          >
            Construimos<br />
            lo digital.<br />
            <span className="text-primary">Tú construyes</span><br />
            el negocio.
          </motion.h1>

          <motion.p
            {...fadeUp(0.38)}
            className="text-base sm:text-lg leading-relaxed max-w-[420px]"
            style={{ color: '#8B9DC3' }}
          >
            Desarrollo, marketing, servidores y SaaS bajo un mismo equipo.
            Del código al cliente, sin fricciones.
          </motion.p>

          <motion.div
            {...fadeUp(0.48)}
            className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
          >
            <Button href="/servicios" variant="accent" size="lg">
              Ver servicios
            </Button>
            <Button href="/portafolio" variant="ghost" size="lg">
              Ver portafolio
            </Button>
          </motion.div>

          <motion.div
            {...fadeUp(0.58)}
            ref={statsRef}
            className="grid grid-cols-3 gap-4 sm:gap-6 w-full pt-5 border-t"
            style={{ borderColor: 'rgba(61,75,107,0.4)' }}
          >
            {STATS.map((stat) => (
              <StatItem key={stat.label} stat={stat} active={statsInView} />
            ))}
          </motion.div>
        </div>

        {/* Right col */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="w-full"
        >
          <OpsConsole />
        </motion.div>
      </div>
    </section>
  )
}
