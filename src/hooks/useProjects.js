import { useState, useEffect } from 'react'
import { fetchProjects } from '../lib/api'
import { PROJECTS } from '../lib/constants'

export function useProjects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProjects()
      .then(data => setProjects(data.length > 0 ? data : PROJECTS))
      .catch(() => setProjects(PROJECTS))
      .finally(() => setLoading(false))
  }, [])

  return { projects, loading }
}
