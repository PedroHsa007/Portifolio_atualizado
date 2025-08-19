"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { EditableText } from "@/components/editable-text"
import { AdminPanel } from "@/components/admin-panel"
import { useAdmin } from "@/components/admin-provider"
import { ExternalLink, Github, Download, Filter, FileText } from "lucide-react"

const projectCategories = ["Todos", "Web", "Automação", "BI", "Mobile"]

const initialProjects = [
  {
    id: 1,
    title: "Dashboard Financeiro em Power BI",
    description:
      "Dashboard interativo para análise financeira com dados em tempo real, KPIs e visualizações avançadas.",
    about:
      "Projeto desenvolvido utilizando Power BI com conexão direta ao SQL Server. Implementei DAX para cálculos complexos e criei visualizações interativas para análise de tendências financeiras.",
    category: "BI",
    image: "/fotoPOWERBI.jpg?height=300&width=400",
    technologies: ["Power BI", "DAX", "SQL Server", "Excel"],
    liveUrl: "#",
    downloadUrl: "#",
    
  },
    {
    id: 2,
    title: "Sistema de Gestão de Restaurante",
    description:
      "Caso dê erro na execução do video, link do video: https://youtu.be/HtjqIX3HJbI.",
    about:
      "Projeto desenvolvido com React e Tailwind CSS, visando proporcionar uma interface dinâmica, responsiva e com visual profissional.",
    category: "WEB",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["REACT", "TYPESCRIPT", "SQL Server", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    downloadUrl: "#",
    videoUrl: "https://www.youtube.com/watch?v=HtjqIX3HJbI",
  },
  {
    id: 3,
    title: "Instagram com Videos de Projetos feitos",
    description:
      "Segue eu por la: @dev_pedroh",
    about:
      "Cada projeto que fiz, os videos se encontram aqui !!",
    category: "WEB",
    image: "/perfilINSTA.jpg?height=300&width=400",
    technologies: ["Instagram"],
    liveUrl: "https://www.instagram.com/dev_pedroh/",
    githubUrl: "#",
    downloadUrl: "#",
    //videoUrl: "https://www.youtube.com/watch?v=HtjqIX3HJbI",
  },
]

export function ProjectsPage() {
  const { loadData, saveData } = useAdmin()
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [projects, setProjects] = useState(initialProjects)

  useEffect(() => {
    const savedProjects = loadData("projects")
    if (savedProjects) {
      setProjects(savedProjects)
    }
  }, [loadData])

  const handleSaveProjects = (newProjects: any) => {
    setProjects(newProjects)
    saveData("projects", newProjects)
  }

  const filteredProjects =
    selectedCategory === "Todos" ? projects : projects.filter((project) => project.category === selectedCategory)

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
            Meus{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Projetos
            </span>
          </h1>
          <div className="max-w-2xl mx-auto">
            <EditableText
              initialText="Aqui estão alguns dos projetos que desenvolvi, demonstrando minhas habilidades em diferentes tecnologias e áreas."
              className="text-xl text-gray-300"
              multiline
            />
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {projectCategories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`${
                selectedCategory === category
                  ? "bg-yellow-600 hover:bg-yellow-700 text-black"
                  : "border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
              }`}
            >
              <Filter size={16} className="mr-2" />
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="bg-black/40 border-yellow-500/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-300 overflow-hidden group">
                <div className="relative cursor-pointer" onClick={() => setSelectedProject(project.id)}>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardHeader className="cursor-pointer" onClick={() => setSelectedProject(project.id)}>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-white text-lg hover:text-yellow-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge variant="secondary" className="bg-yellow-600/20 text-yellow-400">
                      {project.category}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-gray-600 text-gray-400">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white bg-transparent"
                    >
                      <ExternalLink size={14} className="mr-1" />
                      Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-400 hover:bg-gray-600 hover:text-white bg-transparent"
                    >
                      <Github size={14} />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-400 hover:bg-gray-600 hover:text-white bg-transparent"
                    >
                      <Download size={14} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Project Modal/Details */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-slate-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-white">
                    {projects.find((p) => p.id === selectedProject)?.title}
                  </h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white"
                  >
                    ✕
                  </Button>
                </div>

                <div className="aspect-video mb-6">
                  <iframe
                    src={projects.find((p) => p.id === selectedProject)?.videoUrl}
                    className="w-full h-full rounded-lg"
                    allowFullScreen
                  />
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                      <FileText size={18} className="text-yellow-400" />
                      Sobre o Projeto
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {projects.find((p) => p.id === selectedProject)?.about}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Descrição</h3>
                    <p className="text-gray-300 leading-relaxed">
                      {projects.find((p) => p.id === selectedProject)?.description}
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Button className="bg-yellow-600 hover:bg-yellow-700">
                      <ExternalLink size={16} className="mr-2" />
                      Ver Demo
                    </Button>
                    <Button
                      variant="outline"
                      className="border-gray-600 text-gray-400 hover:bg-gray-600 hover:text-white bg-transparent"
                    >
                      <Github size={16} className="mr-2" />
                      Código
                    </Button>
                    <Button
                      variant="outline"
                      className="border-gray-600 text-gray-400 hover:bg-gray-600 hover:text-white bg-transparent"
                    >
                      <Download size={16} className="mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        <AdminPanel title="Projetos" data={projects} onSave={handleSaveProjects} type="projects" />
      </div>
    </div>
  )
}
