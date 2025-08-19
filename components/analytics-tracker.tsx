"use client"

import { useEffect } from "react"

export function AnalyticsTracker() {
  useEffect(() => {
    // Registrar visita
    const registerVisit = async () => {
      try {
        await fetch("/api/analytics", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ action: "visit" }),
        })
      } catch (error) {
        console.error("Erro ao registrar visita:", error)
      }
    }

    // Registrar apenas uma vez por sessão
    const hasVisited = sessionStorage.getItem("portfolio-visited")
    if (!hasVisited) {
      registerVisit()
      sessionStorage.setItem("portfolio-visited", "true")
    }
  }, [])

  return null // Componente invisível
}
