import { useState } from 'react'
import { motion } from 'motion/react'
import Button from '../ui/Button'

const WA_NUMBER = '18495235144'
const CONTACT_EMAIL = 'bitventas@outlook.es'

const SERVICES_LIST = [
  'Desarrollo Web',
  'Marketing Digital',
  'Publicidad & Redes Sociales',
  'Administración de Servidores',
  'Administración de Bases de Datos',
  'Sistemas SaaS',
  'Paquete completo',
]

const CONTACT_INFO = [
  {
    icon: '✉',
    label: 'Email',
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: '◎',
    label: 'WhatsApp',
    value: '+1 (849) 523-5144',
    href: `https://wa.me/${WA_NUMBER}`,
  },
  {
    icon: '◉',
    label: 'Ubicación',
    value: 'Remoto · LATAM',
    href: null,
  },
]

const EMPTY_FORM = { name: '', email: '', service: '', message: '' }

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Nombre requerido'
  if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
    errors.email = 'Email válido requerido'
  if (!form.service) errors.service = 'Selecciona un servicio'
  if (form.message.trim().length < 20)
    errors.message = 'Mínimo 20 caracteres'
  return errors
}

const inputBase =
  'w-full rounded-lg px-4 py-3 text-text text-sm outline-none transition-all duration-200 font-body'
const inputFocusClass = 'focus:ring-0 focus:outline-none'

export default function ContactSection() {
  const [form, setForm]     = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  function handleChange({ target: { name, value } }) {
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(e => ({ ...e, [name]: '' }))
  }

  function handleSubmit(evt) {
    evt.preventDefault()
    const newErrors = validate(form)
    if (Object.keys(newErrors).length) {
      setErrors(newErrors)
      return
    }

    const text =
      `*Nuevo mensaje desde BitAgil*\n\n` +
      `Nombre: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Servicio: ${form.service}\n\n` +
      `${form.message}`

    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank')
    setStatus('sent')
  }

  function handleReset() {
    setForm(EMPTY_FORM)
    setErrors({})
    setStatus('idle')
  }

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <span className="font-mono text-xs text-primary tracking-[0.22em] uppercase block mb-3 sm:mb-4">
              // hablemos
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5 sm:mb-6">
              Tu proyecto<br />
              <span style={{ color: '#3D4B6B' }}>empieza aquí.</span>
            </h2>
            <p className="leading-relaxed mb-8 sm:mb-10 max-w-sm text-[15px]" style={{ color: '#6B7DA8' }}>
              Cuéntanos qué necesitas. Respondemos en menos de 24 horas
              con una propuesta clara y sin rodeos.
            </p>

            <div className="space-y-5 sm:space-y-6">
              {CONTACT_INFO.map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <span className="font-mono text-primary text-base w-5 shrink-0">{icon}</span>
                  <div>
                    <div
                      className="font-mono text-[10px] uppercase tracking-[0.2em] mb-0.5"
                      style={{ color: 'rgba(61,75,107,0.7)' }}
                    >
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-text font-medium text-sm hover:text-primary transition-colors duration-200"
                      >
                        {value}
                      </a>
                    ) : (
                      <div className="text-text font-medium text-sm">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          >
            {status === 'sent' ? (
              <div
                className="rounded-xl p-8 sm:p-10 text-center border"
                style={{ backgroundColor: '#0D1528', borderColor: 'rgba(79,110,247,0.3)' }}
              >
                <div className="font-mono text-3xl text-primary mb-4">✓</div>
                <h3 className="font-display font-bold text-xl text-text mb-2">
                  WhatsApp abierto
                </h3>
                <p className="text-sm mb-6" style={{ color: '#6B7DA8' }}>
                  Tu mensaje está listo para enviar. Si la ventana no se abrió,{' '}
                  <a
                    href={`https://wa.me/${WA_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    hacé clic aquí.
                  </a>
                </p>
                <button
                  onClick={handleReset}
                  className="font-mono text-xs text-muted hover:text-text transition-colors duration-200 tracking-widest uppercase"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-xl border p-5 sm:p-6 space-y-4 sm:space-y-5"
                style={{ backgroundColor: '#0D1528', borderColor: 'rgba(61,75,107,0.3)' }}
                noValidate
              >
                {/* Name */}
                <div>
                  <label
                    className="font-mono text-[10px] uppercase tracking-[0.2em] block mb-2"
                    style={{ color: 'rgba(61,75,107,0.8)' }}
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Tu nombre completo"
                    className={`${inputBase} ${inputFocusClass} placeholder-muted/40`}
                    style={{
                      backgroundColor: '#060912',
                      border: `1px solid ${errors.name ? '#FF5C3A' : 'rgba(61,75,107,0.45)'}`,
                    }}
                  />
                  {errors.name && <p className="text-accent text-xs mt-1.5">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label
                    className="font-mono text-[10px] uppercase tracking-[0.2em] block mb-2"
                    style={{ color: 'rgba(61,75,107,0.8)' }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@empresa.com"
                    className={`${inputBase} ${inputFocusClass} placeholder-muted/40`}
                    style={{
                      backgroundColor: '#060912',
                      border: `1px solid ${errors.email ? '#FF5C3A' : 'rgba(61,75,107,0.45)'}`,
                    }}
                  />
                  {errors.email && <p className="text-accent text-xs mt-1.5">{errors.email}</p>}
                </div>

                {/* Service */}
                <div>
                  <label
                    className="font-mono text-[10px] uppercase tracking-[0.2em] block mb-2"
                    style={{ color: 'rgba(61,75,107,0.8)' }}
                  >
                    Servicio
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={`${inputBase} ${inputFocusClass} appearance-none`}
                    style={{
                      backgroundColor: '#060912',
                      border: `1px solid ${errors.service ? '#FF5C3A' : 'rgba(61,75,107,0.45)'}`,
                      color: form.service ? '#F1F5FF' : 'rgba(61,75,107,0.6)',
                    }}
                  >
                    <option value="" disabled style={{ color: '#3D4B6B', backgroundColor: '#0D1528' }}>
                      Selecciona un servicio
                    </option>
                    {SERVICES_LIST.map(s => (
                      <option key={s} value={s} style={{ backgroundColor: '#0D1528', color: '#F1F5FF' }}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.service && <p className="text-accent text-xs mt-1.5">{errors.service}</p>}
                </div>

                {/* Message */}
                <div>
                  <label
                    className="font-mono text-[10px] uppercase tracking-[0.2em] block mb-2"
                    style={{ color: 'rgba(61,75,107,0.8)' }}
                  >
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu proyecto..."
                    rows={4}
                    className={`${inputBase} ${inputFocusClass} resize-none placeholder-muted/40`}
                    style={{
                      backgroundColor: '#060912',
                      border: `1px solid ${errors.message ? '#FF5C3A' : 'rgba(61,75,107,0.45)'}`,
                    }}
                  />
                  {errors.message && <p className="text-accent text-xs mt-1.5">{errors.message}</p>}
                </div>

                <Button type="submit" variant="accent" size="md" className="w-full">
                  Enviar por WhatsApp
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
