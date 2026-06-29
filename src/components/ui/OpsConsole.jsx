import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { OPS_EVENTS_POOL } from '../../lib/constants'

const DOT_COLOR = {
  deploy: '#4F6EF7',
  active: '#22C55E',
  ssl:    '#4F6EF7',
  scale:  '#FF5C3A',
}

function formatAge(sec) {
  if (sec === 0) return 'ahora'
  if (sec < 60) return `${sec}s`
  if (sec < 3600) return `${Math.floor(sec / 60)}m`
  return `${Math.floor(sec / 3600)}h`
}

let uid = 1

function makeEvent(template, sec = 0) {
  return { ...template, id: uid++, sec }
}

export default function OpsConsole() {
  const [events, setEvents] = useState(() =>
    OPS_EVENTS_POOL.slice(0, 6).map((e, i) => makeEvent(e, i * 18 + 4))
  )
  const poolIdx = useRef(6)

  useEffect(() => {
    const inject = setInterval(() => {
      const next = OPS_EVENTS_POOL[poolIdx.current % OPS_EVENTS_POOL.length]
      poolIdx.current++
      setEvents(prev => [makeEvent(next, 0), ...prev.slice(0, 5)])
    }, 3200)
    return () => clearInterval(inject)
  }, [])

  useEffect(() => {
    const tick = setInterval(() => {
      setEvents(prev => prev.map(e => ({ ...e, sec: e.sec + 1 })))
    }, 1000)
    return () => clearInterval(tick)
  }, [])

  return (
    <div className="rounded-2xl border border-muted/30 bg-surface overflow-hidden shadow-2xl">
      {/* Title bar */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-muted/20 bg-space/70">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-accent/70" />
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#FBBF24' }} />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        </div>
        <span className="font-mono text-[11px] text-muted tracking-widest flex-1 text-center">
          bitagil — ops dashboard
        </span>
        <span className="font-mono text-[10px] text-green-500 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse" />
          live
        </span>
      </div>

      {/* Metrics strip */}
      <div className="grid grid-cols-3 divide-x divide-muted/20 border-b border-muted/20">
        {[
          { label: 'Uptime', value: '99.97%' },
          { label: 'Deploys / mes', value: '38' },
          { label: 'Campañas', value: '12' },
        ].map(({ label, value }) => (
          <div key={label} className="px-4 py-3 bg-surface/60">
            <div className="font-display text-base font-bold text-text leading-none">{value}</div>
            <div className="font-mono text-[9px] text-muted uppercase tracking-[0.15em] mt-1">{label}</div>
          </div>
        ))}
      </div>

      {/* Event feed */}
      <div className="h-52 overflow-hidden py-3 px-4">
        <div className="font-mono text-[9px] text-muted/50 uppercase tracking-[0.2em] mb-2">
          recent activity
        </div>
        <AnimatePresence initial={false} mode="popLayout">
          {events.map((ev) => (
            <motion.div
              key={ev.id}
              layout
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="flex items-center gap-2.5 font-mono text-xs mb-1.5 min-w-0"
            >
              <span
                className="shrink-0 text-[13px] leading-none w-4 text-center"
                style={{ color: DOT_COLOR[ev.type] }}
              >
                {ev.icon}
              </span>
              <span className="text-muted shrink-0 w-[4.5rem]">{ev.label}</span>
              <span className="text-text/80 flex-1 truncate text-[11px]">{ev.target}</span>
              <span className="text-muted/50 shrink-0 text-[10px] tabular-nums">{formatAge(ev.sec)}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
