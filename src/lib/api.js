const BASE = import.meta.env.VITE_API_URL || 'http://localhost:3001'

async function request(method, path, body) {
  const res = await fetch(`${BASE}${path}`, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err.error || `Error ${res.status}`)
  }
  if (res.status === 204) return null
  return res.json()
}

export async function fetchProjects() {
  return request('GET', '/api/projects')
}

export async function insertProject(project) {
  return request('POST', '/api/projects', project)
}

export async function updateProject(id, fields) {
  return request('PUT', `/api/projects/${id}`, fields)
}

export async function deleteProject(id) {
  return request('DELETE', `/api/projects/${id}`)
}

export async function uploadImage(file) {
  const form = new FormData()
  form.append('image', file)
  const res = await fetch(`${BASE}/api/upload`, { method: 'POST', body: form })
  if (!res.ok) throw new Error('Error al subir imagen')
  const data = await res.json()
  return data.url
}
