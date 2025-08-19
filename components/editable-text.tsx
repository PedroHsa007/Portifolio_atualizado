"use client"

import { useState } from "react"
import { useAdmin } from "@/components/admin-provider"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Edit, Save, X } from "lucide-react"

interface EditableTextProps {
  initialText: string
  className?: string
  multiline?: boolean
  placeholder?: string
  onSave?: (text: string) => void
}

export function EditableText({
  initialText,
  className = "",
  multiline = false,
  placeholder = "",
  onSave,
}: EditableTextProps) {
  const { isAdmin } = useAdmin()
  const [isEditing, setIsEditing] = useState(false)
  const [text, setText] = useState(initialText)

  const handleSave = () => {
    setIsEditing(false)
    onSave?.(text)
  }

  const handleCancel = () => {
    setText(initialText)
    setIsEditing(false)
  }

  if (!isAdmin) {
    return <div className={className}>{text}</div>
  }

  if (isEditing) {
    return (
      <div className="relative group">
        {multiline ? (
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className={`${className} min-h-[100px]`}
            placeholder={placeholder}
          />
        ) : (
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className={className}
            placeholder={placeholder}
          />
        )}
        <div className="flex gap-2 mt-2">
          <Button size="sm" onClick={handleSave}>
            <Save size={16} />
          </Button>
          <Button size="sm" variant="outline" onClick={handleCancel}>
            <X size={16} />
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="relative group">
      <div className={className}>{text}</div>
      <Button
        size="sm"
        variant="ghost"
        className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={() => setIsEditing(true)}
      >
        <Edit size={16} />
      </Button>
    </div>
  )
}
