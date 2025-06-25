"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface User {
  email: string
  uid: string
}

interface AuthContextType {
  user: User | null
  login: () => Promise<void>
  logout: () => void
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)

  const login = async () => {
    setLoading(true)
    try {
      // Simulate Firebase login
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setUser({
        email: "usuario@ejemplo.com",
        uid: "user123",
      })
    } catch (error) {
      console.error("Error logging in:", error)
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, login, logout, loading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
