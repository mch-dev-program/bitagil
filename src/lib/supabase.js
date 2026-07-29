import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const key = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!url || !key) {
  console.warn('Supabase env vars missing — admin panel and portfolio will use fallback data.')
}

export const supabase = createClient(url || 'https://placeholder.supabase.co', key || 'placeholder')

export async function fetchProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('order_index', { ascending: true })
  if (error) throw error
  return data
}

export async function insertProject(project) {
  const { id: _ignored, ...rest } = project
  const { data, error } = await supabase
    .from('projects')
    .insert(rest)
    .select()
    .single()
  if (error) throw error
  return data
}

export async function updateProject(id, fields) {
  const { data, error } = await supabase
    .from('projects')
    .update(fields)
    .eq('id', id)
    .select()
    .single()
  if (error) throw error
  return data
}

export async function deleteProject(id) {
  const { error } = await supabase.from('projects').delete().eq('id', id)
  if (error) throw error
}

export async function uploadProjectImage(file, projectId) {
  const ext = file.name.split('.').pop()
  const path = `${projectId}.${ext}`
  const { error } = await supabase.storage
    .from('project-images')
    .upload(path, file, { upsert: true })
  if (error) throw error
  const { data } = supabase.storage.from('project-images').getPublicUrl(path)
  return data.publicUrl
}
