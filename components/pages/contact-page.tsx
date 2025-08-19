"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { EditableText } from "@/components/editable-text"
import { Mail, Phone, MapPin, Send, Upload, Github, Linkedin, Instagram, CheckCircle } from "lucide-react"

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [file, setFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formDataToSend = new FormData()
      formDataToSend.append("name", formData.name)
      formDataToSend.append("email", formData.email)
      formDataToSend.append("message", formData.message)
      if (file) {
        formDataToSend.append("file", file)
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formDataToSend,
      })

      const result = await response.json()

      if (result.success) {
        toast({
          title: "Mensagem enviada!",
          description: "Obrigado pelo contato. Responderei em breve!",
        })
        setFormData({ name: "", email: "", message: "" })
        setFile(null)

        // Reset file input
        const fileInput = document.getElementById("file") as HTMLInputElement
        if (fileInput) {
          fileInput.value = ""
        }
      } else {
        throw new Error(result.message)
      }
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error)
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro ao enviar sua mensagem. Tente novamente.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0]

      // Verificar tamanho do arquivo (10MB max)
      if (selectedFile.size > 10 * 1024 * 1024) {
        toast({
          title: "Arquivo muito grande",
          description: "O arquivo deve ter no máximo 10MB.",
          variant: "destructive",
        })
        e.target.value = ""
        return
      }

      setFile(selectedFile)
    }
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Entre em{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Contato
            </span>
          </h1>
          <div className="max-w-2xl mx-auto">
            <EditableText
              initialText="Vamos conversar sobre projetos, oportunidades ou qualquer dúvida que você tenha. Estou sempre aberto a novas conexões!"
              className="text-xl text-gray-300"
              multiline
            />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-black/40 border-yellow-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Envie uma Mensagem</CardTitle>
                <p className="text-gray-400 text-sm">
                  Preencha o formulário abaixo e entrarei em contato em até 24 horas.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-300">
                      Nome Completo *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-black/20 border-yellow-500/30 text-white placeholder:text-gray-400 focus:border-yellow-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">
                      E-mail *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-black/20 border-yellow-500/30 text-white placeholder:text-gray-400 focus:border-yellow-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300">
                      Mensagem *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Conte-me sobre seu projeto, oportunidade ou dúvida..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="bg-black/20 border-yellow-500/30 text-white placeholder:text-gray-400 min-h-[120px] focus:border-yellow-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="file" className="text-gray-300">
                      Anexar Arquivo (Opcional)
                    </Label>
                    <div className="relative">
                      <Input
                        id="file"
                        type="file"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx,.zip,.png,.jpg,.jpeg"
                        className="bg-black/20 border-yellow-500/30 text-white file:bg-yellow-600 file:text-black file:border-0 file:rounded-md file:px-4 file:py-2 file:mr-4"
                      />
                      <Upload className="absolute right-3 top-3 text-gray-400" size={16} />
                    </div>
                    {file && (
                      <div className="flex items-center gap-2 text-sm text-green-400">
                        <CheckCircle size={16} />
                        <span>Arquivo selecionado: {file.name}</span>
                      </div>
                    )}
                    <p className="text-xs text-gray-500">Formatos aceitos: PDF, DOC, DOCX, ZIP, PNG, JPG (máx. 10MB)</p>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-yellow-600 hover:bg-yellow-700 text-black font-semibold disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        Enviando...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send size={16} />
                        Enviar Mensagem
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <Card className="bg-black/40 border-yellow-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-600/20 rounded-lg flex items-center justify-center">
                    <Mail className="text-yellow-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">E-mail</p>
                    <p className="text-white font-medium">pedrohenrisa21@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-600/20 rounded-lg flex items-center justify-center">
                    <Phone className="text-yellow-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Telefone</p>
                    <EditableText initialText="(24) 99948-6640" className="text-white font-medium" />
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-600/20 rounded-lg flex items-center justify-center">
                    <MapPin className="text-yellow-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Localização</p>
                    <p className="text-white font-medium">Barra Mansa, RJ - Brasil</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-black/40 border-yellow-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Redes Sociais</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/PedroHsa007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Github className="text-white" size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pedro-henrique-oliveira-de-s%C3%A1-39057b214/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Linkedin className="text-white" size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/dev_pedroh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-yellow-400 hover:from-yellow-700 hover:to-yellow-500 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Instagram className="text-black" size={20} />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="bg-gradient-to-r from-green-600/20 to-yellow-600/20 border-green-400/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <h3 className="text-white font-semibold">Disponível para Projetos</h3>
                </div>
                <div className="text-gray-300 text-sm">
                  <EditableText
                    initialText="Atualmente aberto a novas oportunidades de trabalho, projetos freelance e colaborações. Tempo de resposta: 24-48 horas."
                    className="text-gray-300 text-sm leading-relaxed"
                    multiline
                  />
                </div>
              </CardContent>
            </Card>

            {/* Response Time Info */}
            <Card className="bg-blue-600/10 border-blue-400/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="text-blue-400" size={20} />
                  <h3 className="text-white font-semibold">Garantia de Resposta</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Todas as mensagens são respondidas em até 24 horas. Para projetos urgentes, entre em contato também
                  pelo WhatsApp.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
