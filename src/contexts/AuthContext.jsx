import { createContext, useContext, useState } from 'react'
import { login as apiLogin, logout as apiLogout, isLoggedIn } from '../lib/api'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [session, setSession] = useState(isLoggedIn() ? true : null)

  async function login(email, password) {
    await apiLogin(email, password)
    setSession(true)
  }

  function logout() {
    apiLogout()
    setSession(null)
  }

  return (
    <AuthContext.Provider value={{ session, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
