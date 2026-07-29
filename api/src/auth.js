const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const pool = require('./db')

const SECRET = process.env.JWT_SECRET || 'bitagil-secret-change-in-prod'

function signToken(payload) {
  return jwt.sign(payload, SECRET, { expiresIn: '7d' })
}

function verifyToken(token) {
  return jwt.verify(token, SECRET)
}

function requireAuth(req, res, next) {
  const header = req.headers.authorization || ''
  const token = header.startsWith('Bearer ') ? header.slice(7) : null
  if (!token) return res.status(401).json({ error: 'No autorizado' })
  try {
    req.user = verifyToken(token)
    next()
  } catch {
    res.status(401).json({ error: 'Token inválido' })
  }
}

async function login(email, password) {
  const { rows } = await pool.query('SELECT * FROM admin_users WHERE email = $1', [email])
  const user = rows[0]
  if (!user) throw new Error('Credenciales incorrectas')
  const valid = await bcrypt.compare(password, user.password_hash)
  if (!valid) throw new Error('Credenciales incorrectas')
  return signToken({ id: user.id, email: user.email })
}

module.exports = { requireAuth, login }
