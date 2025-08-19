"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface AdminContextType {
  isAdmin: boolean
  toggleAdmin: () => void
  saveData: (key: string, data: any) => void
  loadData: (key: string) => any
}

const AdminContext = createContext<AdminContextType | undefined>(undefined)

export function AdminProvider({ children }: { children: ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    // Verificar se já está logado como admin
    const adminStatus = localStorage.getItem("isAdmin")
    if (adminStatus === "true") {
      setIsAdmin(true)
    }
  }, [])

  const toggleAdmin = () => {
    if (!isAdmin) {
      const password = prompt("Digite a senha de administrador:")
      if (password === "0123pedro") {
        setIsAdmin(true)
        localStorage.setItem("isAdmin", "true")
      } else {
        alert("Senha incorreta!")
      }
    } else {
      setIsAdmin(false)
      localStorage.removeItem("isAdmin")
    }
  }

  const saveData = (key: string, data: any) => {
    localStorage.setItem(key, JSON.stringify(data))
  }

  const loadData = (key: string) => {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : null
  }

  return <AdminContext.Provider value={{ isAdmin, toggleAdmin, saveData, loadData }}>{children}</AdminContext.Provider>
}

export function useAdmin() {
  const context = useContext(AdminContext)
  if (context === undefined) {
    throw new Error("useAdmin must be used within an AdminProvider")
  }
  return context
}
