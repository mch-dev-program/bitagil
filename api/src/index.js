const express = require('express')
const cors = require('cors')
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const pool = require('./db')


const app = express()
const PORT = process.env.PORT || 3001

app.use(cors({ origin: '*' }))
app.use(express.json())

// Servir imágenes subidas
const UPLOADS_DIR = path.join(__dirname, '..', 'uploads')
fs.mkdirSync(UPLOADS_DIR, { recursive: true })
app.use('/uploads', express.static(UPLOADS_DIR))

const storage = multer.diskStorage({
  destination: UPLOADS_DIR,
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname)
    cb(null, `${Date.now()}${ext}`)
  },
})
const upload = multer({ storage, limits: { fileSize: 10 * 1024 * 1024 } })

// ── Projects ──────────────────────────────────────────────────────
app.get('/api/projects', async (req, res) => {
  try {
    const { rows } = await pool.query(
      'SELECT * FROM projects ORDER BY order_index ASC, created_at ASC'
    )
    res.json(rows)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.post('/api/projects', async (req, res) => {
  try {
    const { title, category, description, tech, result, color, url, image_url, order_index } = req.body
    const { rows } = await pool.query(
      `INSERT INTO projects (title, category, description, tech, result, color, url, image_url, order_index)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *`,
      [title, category, description, tech || [], result, color, url, image_url, order_index || 0]
    )
    res.status(201).json(rows[0])
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.put('/api/projects/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { title, category, description, tech, result, color, url, image_url, order_index } = req.body
    const { rows } = await pool.query(
      `UPDATE projects SET title=$1, category=$2, description=$3, tech=$4, result=$5,
       color=$6, url=$7, image_url=$8, order_index=$9 WHERE id=$10 RETURNING *`,
      [title, category, description, tech || [], result, color, url, image_url, order_index || 0, id]
    )
    if (!rows[0]) return res.status(404).json({ error: 'No encontrado' })
    res.json(rows[0])
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.delete('/api/projects/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM projects WHERE id = $1', [req.params.id])
    res.status(204).end()
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// ── Upload imagen ─────────────────────────────────────────────────
app.post('/api/upload', upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No se recibió imagen' })
  const imageUrl = `${process.env.API_URL || 'http://localhost:3001'}/uploads/${req.file.filename}`
  res.json({ url: imageUrl })
})

app.listen(PORT, () => console.log(`API corriendo en :${PORT}`))
