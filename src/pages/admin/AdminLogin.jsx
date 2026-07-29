import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

export default function AdminLogin() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await login(email, password)
      navigate('/admin/proyectos')
    } catch (err) {
      setError(err.message || 'Credenciales incorrectas.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: '#060912' }}>
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <span className="font-mono text-xs text-primary tracking-[0.2em]">// panel de control</span>
          <h1 className="font-display font-bold text-2xl text-text mt-2">BitAgil Admin</h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-xl border p-6 flex flex-col gap-4"
          style={{ backgroundColor: '#0D1528', borderColor: 'rgba(61,75,107,0.4)' }}
        >
          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-[11px] text-muted uppercase tracking-widest">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              autoFocus
              className="rounded-lg px-3 py-2.5 text-sm text-text outline-none border focus:border-primary transition-colors"
              style={{ backgroundColor: '#060912', borderColor: 'rgba(61,75,107,0.5)' }}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-[11px] text-muted uppercase tracking-widest">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="rounded-lg px-3 py-2.5 text-sm text-text outline-none border focus:border-primary transition-colors"
              style={{ backgroundColor: '#060912', borderColor: 'rgba(61,75,107,0.5)' }}
            />
          </div>

          {error && <p className="font-mono text-xs text-accent">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 rounded-lg py-2.5 font-display font-semibold text-sm text-white transition-opacity disabled:opacity-50"
            style={{ backgroundColor: '#4F6EF7' }}
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  )
}
