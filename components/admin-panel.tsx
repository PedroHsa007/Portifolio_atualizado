"use client"

import { useState } from "react"
import { useAdmin } from "@/components/admin-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Plus, X, Save } from "lucide-react"

interface AdminPanelProps {
  title: string
  data: any
  onSave: (data: any) => void
  type: "skills" | "projects" | "experience" | "education"
}

export function AdminPanel({ title, data, onSave, type }: AdminPanelProps) {
  const { isAdmin } = useAdmin()
  const [isOpen, setIsOpen] = useState(false)
  const [editData, setEditData] = useState(data)

  if (!isAdmin) return null

  const handleSave = () => {
    onSave(editData)
    setIsOpen(false)
  }

  const addItem = () => {
    const newItem = getNewItemTemplate(type)
    setEditData([...editData, newItem])
  }

  const removeItem = (index: number) => {
    const newData = editData.filter((_: any, i: number) => i !== index)
    setEditData(newData)
  }

  const updateItem = (index: number, field: string, value: any) => {
    const newData = [...editData]
    newData[index] = { ...newData[index], [field]: value }
    setEditData(newData)
  }

  const handleFileUpload = (index: number, file: File) => {
    // Simular upload de arquivo
    const fileUrl = URL.createObjectURL(file)
    updateItem(index, file.type.startsWith("video/") ? "videoUrl" : "downloadUrl", fileUrl)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-yellow-600 hover:bg-yellow-700 text-black font-semibold shadow-lg"
        >
          Editar {title}
        </Button>
      ) : (
        <Card className="w-96 max-h-96 overflow-y-auto bg-black/90 border-yellow-500/50">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-white">Editar {title}</CardTitle>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
              <X size={16} />
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {editData.map((item: any, index: number) => (
              <div key={index} className="border border-gray-600 rounded p-3 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-yellow-400 text-sm">Item {index + 1}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeItem(index)}
                    className="text-red-400 hover:text-red-300"
                  >
                    <X size={14} />
                  </Button>
                </div>

                {renderItemFields(type, item, index, updateItem, handleFileUpload)}
              </div>
            ))}

            <div className="flex gap-2">
              <Button onClick={addItem} size="sm" variant="outline" className="flex-1 bg-transparent">
                <Plus size={14} className="mr-1" />
                Adicionar
              </Button>
              <Button onClick={handleSave} size="sm" className="bg-green-600 hover:bg-green-700">
                <Save size={14} className="mr-1" />
                Salvar
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

function getNewItemTemplate(type: string) {
  switch (type) {
    case "skills":
      return { name: "Nova Habilidade", level: 50 }
    case "projects":
      return {
        title: "Novo Projeto",
        description: "Descrição do projeto",
        about: "Como foi feito o projeto",
        category: "Web",
        technologies: [],
        image: "",
        downloadUrl: "",
        videoUrl: "",
      }
    case "experience":
      return {
        company: "Nova Empresa",
        position: "Novo Cargo",
        period: "2024 - Atual",
        location: "Local",
        activities: [],
        achievements: [],
        technologies: [],
      }
    case "education":
      return {
        institution: "Nova Instituição",
        degree: "Novo Curso",
        period: "2024",
        status: "Em Andamento",
        location: "Local",
        description: "Descrição",
        highlights: [],
        subjects: [],
      }
    default:
      return {}
  }
}

function renderItemFields(
  type: string,
  item: any,
  index: number,
  updateItem: (index: number, field: string, value: any) => void,
  handleFileUpload: (index: number, file: File) => void,
) {
  switch (type) {
    case "skills":
      return (
        <>
          <Input
            value={item.name}
            onChange={(e) => updateItem(index, "name", e.target.value)}
            placeholder="Nome da habilidade"
            className="text-white bg-gray-800"
          />
          <Input
            type="number"
            value={item.level}
            onChange={(e) => updateItem(index, "level", Number.parseInt(e.target.value))}
            placeholder="Nível (0-100)"
            className="text-white bg-gray-800"
          />
        </>
      )

    case "projects":
      return (
        <>
          <Input
            value={item.title}
            onChange={(e) => updateItem(index, "title", e.target.value)}
            placeholder="Título do projeto"
            className="text-white bg-gray-800"
          />
          <Textarea
            value={item.description}
            onChange={(e) => updateItem(index, "description", e.target.value)}
            placeholder="Descrição"
            className="text-white bg-gray-800"
          />
          <Textarea
            value={item.about || ""}
            onChange={(e) => updateItem(index, "about", e.target.value)}
            placeholder="Como foi feito o projeto"
            className="text-white bg-gray-800"
          />
          <div className="space-y-2">
            <Label className="text-gray-300">Upload de Arquivo ZIP</Label>
            <input
              type="file"
              accept=".zip,.rar"
              onChange={(e) => e.target.files?.[0] && handleFileUpload(index, e.target.files[0])}
              className="text-white bg-gray-800 rounded p-2 w-full"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-gray-300">Upload de Vídeo</Label>
            <input
              type="file"
              accept="video/*"
              onChange={(e) => e.target.files?.[0] && handleFileUpload(index, e.target.files[0])}
              className="text-white bg-gray-800 rounded p-2 w-full"
            />
          </div>
        </>
      )

    default:
      return (
        <Input
          value={item.title || item.name || ""}
          onChange={(e) => updateItem(index, "title", e.target.value)}
          placeholder="Título"
          className="text-white bg-gray-800"
        />
      )
  }
}
