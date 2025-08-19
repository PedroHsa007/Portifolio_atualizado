"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function HabilidadesRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/")
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-white">Redirecionando...</p>
    </div>
  )
}
