import { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ErrorBoundary extends Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    return { error }
  }

  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: '#060912' }}>
          <div className="text-center">
            <div className="rounded-2xl border border-muted/30 bg-surface overflow-hidden shadow-2xl max-w-md mx-auto mb-8">
              <div className="flex items-center gap-3 px-4 py-3 border-b border-muted/20 bg-space/70">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent/70" />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#FBBF24' }} />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                </div>
                <span className="font-mono text-[11px] text-muted tracking-widest flex-1 text-center">
                  bitagil — runtime error
                </span>
              </div>
              <div className="p-6 font-mono text-left">
                <p className="text-accent text-sm mb-2">{'>'} Error inesperado del sistema</p>
                <p className="text-[11px] break-all" style={{ color: '#6B7DA8' }}>
                  {this.state.error?.message || 'Unknown error'}
                </p>
              </div>
            </div>
            <h2 className="font-display font-bold text-2xl text-text mb-3">Algo salió mal.</h2>
            <p className="text-sm mb-6" style={{ color: '#6B7DA8' }}>
              Recargá la página o volvé al inicio.
            </p>
            <Link
              to="/"
              onClick={() => this.setState({ error: null })}
              className="font-mono text-sm text-primary hover:text-text transition-colors duration-200"
            >
              ← Volver al inicio
            </Link>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
