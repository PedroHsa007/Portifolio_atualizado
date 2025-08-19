"use client"

import { Button } from "@/components/ui/button"
import { useAdmin } from "@/components/admin-provider"
import { Settings, Lock } from "lucide-react"

export function AdminToggle() {
  const { isAdmin, toggleAdmin } = useAdmin()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleAdmin}
      className={`text-white hover:text-yellow-400 ${isAdmin ? "text-yellow-400" : ""}`}
      title={isAdmin ? "Modo Admin Ativo" : "Ativar Modo Admin"}
    >
      {isAdmin ? <Settings size={20} /> : <Lock size={20} />}
    </Button>
  )
}
