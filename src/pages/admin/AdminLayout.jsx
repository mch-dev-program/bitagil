import { Outlet, Link, useLocation } from 'react-router-dom'

export default function AdminLayout() {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#060912' }}>
      <header
        className="border-b px-4 sm:px-6 py-3 flex items-center sticky top-0 z-30"
        style={{ backgroundColor: '#0D1528', borderColor: 'rgba(61,75,107,0.4)' }}
      >
        <Link to="/" className="font-display font-bold text-primary text-sm">
          BitAgil
        </Link>
        <span className="text-muted/40 hidden sm:block mx-6">|</span>
        <nav className="hidden sm:flex items-center gap-4">
          <Link
            to="/admin/proyectos"
            className="font-mono text-xs tracking-wider transition-colors"
            style={{ color: location.pathname.includes('proyectos') ? '#4F6EF7' : '#3D4B6B' }}
          >
            Proyectos
          </Link>
        </nav>
      </header>

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-8">
        <Outlet />
      </main>
    </div>
  )
}
