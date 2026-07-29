import { useState, useEffect, useRef } from 'react'
import { fetchProjects, insertProject, updateProject, deleteProject, uploadImage } from '../../lib/api'

const EMPTY_PROJECT = {
  title: '',
  category: '',
  description: '',
  tech: '',
  result: '',
  color: '#4F6EF7',
  url: '',
  image_url: '',
  order_index: 0,
}

function ProjectModal({ project, onClose, onSaved }) {
  const [form, setForm] = useState({
    ...EMPTY_PROJECT,
    ...project,
    tech: Array.isArray(project?.tech) ? project.tech.join(', ') : (project?.tech || ''),
  })
  const [imageFile, setImageFile] = useState(null)
  const [imagePreview, setImagePreview] = useState(project?.image_url || '')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const fileRef = useRef()

  function set(key, value) {
    setForm(f => ({ ...f, [key]: value }))
  }

  function handleImageChange(e) {
    const file = e.target.files[0]
    if (!file) return
    setImageFile(file)
    setImagePreview(URL.createObjectURL(file))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.title.trim()) {
      setError('El título es obligatorio.')
      return
    }
    setError('')
    setSaving(true)
    try {
      const isNew = !form.id
      const payload = {
        ...form,
        tech: form.tech.split(',').map(t => t.trim()).filter(Boolean),
        order_index: Number(form.order_index) || 0,
      }

      if (isNew) {
        // Step 1: insert without image — DB generates UUID
        const created = await insertProject({ ...payload, image_url: null })
        // Step 2: upload image with the real UUID, then update
        if (imageFile) {
          const image_url = await uploadImage(imageFile)
          const updated = await updateProject(created.id, { ...payload, image_url })
          onSaved({ ...created, ...updated })
        } else {
          onSaved(created)
        }
      } else {
        let image_url = form.image_url
        if (imageFile) {
          image_url = await uploadImage(imageFile)
        }
        const updated = await updateProject(form.id, { ...payload, image_url })
        onSaved(updated)
      }
    } catch (err) {
      setError(err.message || 'Error al guardar.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto py-8 px-4"
      style={{ backgroundColor: 'rgba(6,9,18,0.85)', backdropFilter: 'blur(4px)' }}
    >
      <div
        className="w-full max-w-xl rounded-2xl border p-6 relative"
        style={{ backgroundColor: '#0D1528', borderColor: 'rgba(61,75,107,0.5)' }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 font-mono text-xs text-muted hover:text-accent transition-colors"
        >
          ✕ cerrar
        </button>

        <h2 className="font-display font-bold text-lg text-text mb-5">
          {form.id ? 'Editar proyecto' : 'Nuevo proyecto'}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Image */}
          <div className="flex flex-col gap-2">
            <label className="font-mono text-[11px] text-muted uppercase tracking-widest">Imagen</label>
            {imagePreview && (
              <img
                src={imagePreview}
                alt="preview"
                className="w-full h-40 object-cover rounded-lg border"
                style={{ borderColor: 'rgba(61,75,107,0.4)' }}
              />
            )}
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            <button
              type="button"
              onClick={() => fileRef.current.click()}
              className="rounded-lg border py-2 font-mono text-[11px] text-muted hover:text-text hover:border-primary transition-colors"
              style={{ borderColor: 'rgba(61,75,107,0.4)', borderStyle: 'dashed' }}
            >
              {imagePreview ? 'Cambiar imagen' : '+ Subir imagen'}
            </button>
          </div>

          {/* Title + Category */}
          <div className="grid grid-cols-2 gap-3">
            <Field label="Título" required>
              <Input value={form.title} onChange={v => set('title', v)} required />
            </Field>
            <Field label="Categoría">
              <Input value={form.category} onChange={v => set('category', v)} />
            </Field>
          </div>

          {/* Description */}
          <Field label="Descripción">
            <textarea
              value={form.description}
              onChange={e => set('description', e.target.value)}
              rows={3}
              className="w-full rounded-lg px-3 py-2.5 text-sm text-text outline-none border focus:border-primary transition-colors resize-none"
              style={{ backgroundColor: '#060912', borderColor: 'rgba(61,75,107,0.5)' }}
            />
          </Field>

          {/* Tech + Result */}
          <div className="grid grid-cols-2 gap-3">
            <Field label="Tecnologías (separadas por coma)">
              <Input value={form.tech} onChange={v => set('tech', v)} placeholder="React, Node.js, Docker" />
            </Field>
            <Field label="Resultado / Métrica">
              <Input value={form.result} onChange={v => set('result', v)} placeholder="+280% leads" />
            </Field>
          </div>

          {/* URL + Color + Order */}
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2">
              <Field label="URL del proyecto">
                <Input value={form.url} onChange={v => set('url', v)} type="url" placeholder="https://..." />
              </Field>
            </div>
            <Field label="Color">
              <div className="flex items-center gap-2 h-[38px]">
                <input
                  type="color"
                  value={form.color}
                  onChange={e => set('color', e.target.value)}
                  className="w-8 h-8 rounded cursor-pointer border-0 bg-transparent"
                />
                <span className="font-mono text-xs text-muted">{form.color}</span>
              </div>
            </Field>
          </div>

          <Field label="Orden (número)">
            <Input type="number" value={form.order_index} onChange={v => set('order_index', v)} />
          </Field>

          {error && <p className="font-mono text-xs text-accent">{error}</p>}

          <div className="flex justify-end gap-3 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="font-mono text-xs text-muted hover:text-text transition-colors px-4 py-2"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={saving}
              className="rounded-lg px-5 py-2.5 font-display font-semibold text-sm text-white transition-opacity disabled:opacity-50"
              style={{ backgroundColor: '#4F6EF7' }}
            >
              {saving ? 'Guardando...' : 'Guardar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function Field({ label, children, required }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-mono text-[11px] text-muted uppercase tracking-widest">
        {label}{required && <span className="text-accent ml-0.5">*</span>}
      </label>
      {children}
    </div>
  )
}

function Input({ value, onChange, type = 'text', placeholder = '', required }) {
  return (
    <input
      type={type}
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
      className="w-full rounded-lg px-3 py-2.5 text-sm text-text outline-none border focus:border-primary transition-colors"
      style={{ backgroundColor: '#060912', borderColor: 'rgba(61,75,107,0.5)' }}
    />
  )
}

export default function AdminProjects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(null)
  const [deleting, setDeleting] = useState(null)

  useEffect(() => {
    fetchProjects().then(setProjects).finally(() => setLoading(false))
  }, [])

  function handleSaved(saved) {
    setProjects(prev => {
      const idx = prev.findIndex(p => p.id === saved.id)
      return idx >= 0
        ? prev.map(p => p.id === saved.id ? saved : p)
        : [...prev, saved]
    })
    setEditing(null)
  }

  async function handleDelete(id) {
    setDeleting(id)
    try {
      await deleteProject(id)
      setProjects(prev => prev.filter(p => p.id !== id))
    } finally {
      setDeleting(null)
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="font-mono text-xs text-primary tracking-[0.2em]">// portafolio</span>
          <h1 className="font-display font-bold text-xl text-text mt-1">Proyectos</h1>
        </div>
        <button
          onClick={() => setEditing({})}
          className="rounded-lg px-4 py-2 font-display font-semibold text-sm text-white"
          style={{ backgroundColor: '#4F6EF7' }}
        >
          + Nuevo proyecto
        </button>
      </div>

      {loading && (
        <p className="font-mono text-xs text-muted animate-pulse">Cargando proyectos...</p>
      )}

      {!loading && projects.length === 0 && (
        <div
          className="rounded-xl border p-10 text-center"
          style={{ borderColor: 'rgba(61,75,107,0.3)', borderStyle: 'dashed' }}
        >
          <p className="font-mono text-sm text-muted mb-4">No hay proyectos todavía.</p>
          <button
            onClick={() => setEditing({})}
            className="font-mono text-xs text-primary hover:text-text transition-colors"
          >
            + Crear el primero
          </button>
        </div>
      )}

      <div className="flex flex-col gap-3">
        {projects.map(project => (
          <div
            key={project.id}
            className="rounded-xl border p-4 flex items-center gap-4"
            style={{ backgroundColor: '#0D1528', borderColor: 'rgba(61,75,107,0.3)' }}
          >
            {/* Color swatch */}
            <div
              className="w-1 self-stretch rounded-full shrink-0"
              style={{ backgroundColor: project.color || '#4F6EF7' }}
            />

            {/* Image thumbnail */}
            {project.image_url ? (
              <img
                src={project.image_url}
                alt={project.title}
                className="w-16 h-12 object-cover rounded-lg shrink-0 border"
                style={{ borderColor: 'rgba(61,75,107,0.4)' }}
              />
            ) : (
              <div
                className="w-16 h-12 rounded-lg shrink-0 flex items-center justify-center border"
                style={{ borderColor: 'rgba(61,75,107,0.3)', borderStyle: 'dashed' }}
              >
                <span className="font-mono text-[10px] text-muted">sin img</span>
              </div>
            )}

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className="font-display font-semibold text-text text-sm truncate">{project.title}</p>
              <p className="font-mono text-[11px] text-muted truncate">{project.category}</p>
            </div>

            {project.result && (
              <span
                className="font-mono text-[11px] px-2 py-1 rounded-md hidden sm:block shrink-0"
                style={{ color: project.color, backgroundColor: `${project.color}15` }}
              >
                {project.result}
              </span>
            )}

            {/* Actions */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setEditing(project)}
                className="font-mono text-[11px] text-muted hover:text-primary transition-colors"
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(project.id)}
                disabled={deleting === project.id}
                className="font-mono text-[11px] text-muted hover:text-accent transition-colors disabled:opacity-40"
              >
                {deleting === project.id ? '...' : 'Eliminar'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {editing !== null && (
        <ProjectModal
          project={editing}
          onClose={() => setEditing(null)}
          onSaved={handleSaved}
        />
      )}
    </div>
  )
}
